const Order = require('../models/Order');
const Event = require('../models/Event');
const Booking = require('../models/Bookings');
const crypto = require('crypto');
const { sendBookingEmail } = require('../utils/email');

exports.createOrder = async (req, res) => {
    try {
        const { product, quantity, address } = req.body;

        const productDetails = await Event.findById(product); // using Event model because products are saved as Events
        if (!productDetails) {
            return res.status(404).json({ msg: 'Product not found' });
        }

        const price = productDetails.productPrice || productDetails.totalAmount || 1000;
        const amount = Math.round(price * quantity); // COD total

        const newOrder = new Order({
            user: req.user ? req.user.id : undefined,
            product,
            quantity,
            address,
            status: 'Pending'
        });

        await newOrder.save();

        // Immediately create booking since this is COD
        const bookingData = {
            eventId: product,
            status: 'pending', // admin needs to manually confirm
            paymentStatus: 'not_paid', // COD
            amount: amount
        };
        if (req.user) {
            bookingData.userId = req.user.id;
        }
        await Booking.create(bookingData);

        const userEmail = req.user ? req.user.email : address?.email;
        const userName = req.user ? req.user.name : address?.fullName;
        
        if (userEmail) {
            // send email in background to avoid blocking the response
            sendBookingEmail(userEmail, userName || 'Customer', productDetails.title).catch(console.error);
        }

        res.json({
            msg: 'Order created successfully (COD)',
            order: newOrder
        });

    } catch (err) {
        console.error('Error creating order:', err);
        const errorMsg = err.error?.description || err.error?.reason || err.description || err.message || 'Server Error';
        res.status(500).json({ msg: errorMsg });
    }
};

exports.verifyPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(body.toString())
            .digest('hex');

        if (expectedSignature === razorpay_signature) {
            const order = await Order.findOneAndUpdate(
                { razorpayOrderId: razorpay_order_id },
                { status: 'Paid', razorpayPaymentId: razorpay_payment_id }
            );

            if (order) {
                const event = await Event.findById(order.product);
                const bookingData = {
                    eventId: order.product,
                    status: 'pending', // admin needs to manually confirm
                    paymentStatus: 'paid', // already paid via razorpay
                    amount: event ? event.productPrice * order.quantity : 0
                };
                if (order.user) {
                    bookingData.userId = order.user;
                }
                await Booking.create(bookingData);
            }

            res.status(200).json({ msg: 'Payment verified successfully' });
        } else {
            res.status(400).json({ msg: 'Invalid signature' });
        }
    } catch (err) {
        console.error('Error verifying payment:', err);
        res.status(500).json({ msg: err.description || err.message || 'Server Error' });
    }
};

exports.getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id }).populate('product');
        res.json(orders);
    } catch (err) {
        console.error('Error fetching user orders:', err);
        res.status(500).json({ msg: err.description || err.message || 'Server Error' });
    }
};
