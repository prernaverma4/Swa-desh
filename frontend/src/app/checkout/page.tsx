'use client';
import { useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

function CheckoutContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { user, token } = useAuth();

    const productId = searchParams.get('productId') || '';
    const name = searchParams.get('name') || '';
    const price = parseInt(searchParams.get('price') || '0', 10);
    const artisanName = searchParams.get('artisanName') || '';
    const quantity = parseInt(searchParams.get('quantity') || '1', 10);

    const total = price * quantity;

    const [formData, setFormData] = useState({
        fullName: user?.name || '',
        email: '',
        phone: '',
        shippingAddress: ''
    });

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePayment = async () => {
        try {
            // 1. Create order on backend (Cash on Delivery)
            const orderData = await fetch((process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5000/api') + '/orders/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    product: productId,
                    quantity,
                    address: formData,
                    paymentMethod: 'COD'
                })
            });

            const orderResponse = await orderData.json();

            if (!orderData.ok) {
                throw new Error(orderResponse.msg || 'Failed to place order');
            }

            alert('Order Placed Successfully! (Cash on Delivery)');
            router.push('/my-orders');
        } catch (err: any) {
            console.error(err);
            alert(err.message || 'Order placement failed');
        }
    };

    if (!productId) return <div className="p-8 text-center text-xl">Invalid product selection.</div>;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-8">
            {/* Shipping Form */}
            <div className="w-full md:w-2/3 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Information</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]" />
                    </div>
                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label className="block text-gray-700 font-semibold mb-2">Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]" />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Complete Shipping Address</label>
                        <textarea name="shippingAddress" rows={4} value={formData.shippingAddress} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]" />
                    </div>
                </form>
            </div>

            {/* Order Summary */}
            <div className="w-full md:w-1/3">
                <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200 sticky top-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Order Summary</h2>

                    <div className="mb-6">
                        <h3 className="font-semibold text-gray-800 text-lg">{name}</h3>
                        <p className="text-sm text-gray-500 mt-1">By Artisan: {artisanName}</p>
                        <div className="flex justify-between mt-4">
                            <span className="text-gray-600">Price (x{quantity})</span>
                            <span className="font-semibold text-gray-900">₹{(price * quantity).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between mt-2">
                            <span className="text-gray-600">Shipping</span>
                            <span className="font-semibold text-green-600">Free</span>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4 mb-6">
                        <div className="flex justify-between items-center text-xl font-bold">
                            <span className="text-gray-900">Total</span>
                            <span className="text-[var(--color-primary-dark)]">₹{total.toLocaleString()}</span>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={handlePayment}
                        className="w-full bg-[var(--color-primary)] text-white font-bold py-4 rounded-xl hover:bg-[#556B2F] shadow transition text-lg"
                    >
                        Confirm Order (Cash on Delivery)
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function Checkout() {
    return (
        <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
            <CheckoutContent />
        </Suspense>
    );
}
