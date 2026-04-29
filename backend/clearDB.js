require('dotenv').config();
const mongoose = require('mongoose');
const Order = require('./models/Order');
const Booking = require('./models/Bookings');

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB. Clearing Orders and Bookings...');
    await Order.deleteMany({});
    await Booking.deleteMany({});
    console.log('Successfully cleared all Orders and Bookings.');
    process.exit(0);
  })
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
