'use client';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
    const { user } = useAuth();

    if (cart.length === 0) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
                <p className="text-gray-600 mb-8">Looks like you haven't added any traditional crafts to your cart yet.</p>
                <Link href="/products" className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-lg hover:bg-[#556B2F] transition font-semibold">
                    Explore Products
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Cart Items */}
                <div className="w-full lg:w-2/3">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        {cart.map((item) => (
                            <div key={item._id} className="flex flex-col sm:flex-row items-center gap-6 p-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition">
                                <div className="w-full sm:w-32 h-32 relative shrink-0">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-xl" />
                                </div>
                                <div className="flex-1 text-center sm:text-left">
                                    <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{item.name}</h3>
                                    <p className="text-sm text-gray-500 mt-1">Artisan: {item.artisanName || 'Local Artisan'}</p>
                                    <p className="text-[var(--color-primary-dark)] font-bold mt-2">₹{item.price.toLocaleString()}</p>
                                </div>

                                <div className="flex flex-col items-center gap-3">
                                    <div className="flex border border-gray-300 rounded text-sm font-semibold overflow-hidden">
                                        <button
                                            onClick={() => updateQuantity(item._id, item.quantity - 1)}
                                            className="px-3 py-1 bg-gray-50 hover:bg-gray-200 transition"
                                            disabled={item.quantity <= 1}
                                        >-</button>
                                        <div className="px-4 py-1 border-l border-r border-gray-300 w-12 text-center flex items-center justify-center">
                                            {item.quantity}
                                        </div>
                                        <button
                                            onClick={() => updateQuantity(item._id, item.quantity + 1)}
                                            className="px-3 py-1 bg-gray-50 hover:bg-gray-200 transition"
                                            disabled={item.quantity >= item.stock}
                                        >+</button>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item._id)}
                                        className="text-red-500 text-sm font-semibold hover:underline"
                                    >
                                        Remove
                                    </button>
                                </div>
                                <div className="w-full sm:w-24 text-center sm:text-right font-bold text-lg text-gray-900">
                                    ₹{(item.price * item.quantity).toLocaleString()}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex justify-between items-center">
                        <Link href="/products" className="text-[var(--color-primary)] font-semibold hover:underline flex items-center gap-2">
                            ← Continue Shopping
                        </Link>
                        <button
                            onClick={clearCart}
                            className="text-gray-500 font-semibold hover:text-red-600 transition"
                        >
                            Clear Cart
                        </button>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="w-full lg:w-1/3">
                    <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-200 sticky top-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Order Summary</h2>

                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span className="font-semibold text-gray-900">₹{cartTotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Shipping</span>
                                <span className="font-semibold text-green-600">Free</span>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 pt-4 mb-8">
                            <div className="flex justify-between items-center text-xl font-bold">
                                <span className="text-gray-900">Total</span>
                                <span className="text-[var(--color-primary-dark)]">₹{cartTotal.toLocaleString()}</span>
                            </div>
                        </div>

                        <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg mb-6 text-sm border border-yellow-200 shadow-sm">
                            <strong className="block mb-1">Note:</strong>
                            <p className="leading-relaxed">To checkout multiple products properly, please complete the checkout process individually per product utilizing the individual checkout pages below. (Multi-item checkout is in development).</p>
                        </div>
                        
                        <div className="space-y-3">
                            {cart.map(item => {
                                const query = new URLSearchParams({
                                    productId: item._id,
                                    name: item.name,
                                    price: item.price.toString(),
                                    artisanName: item.artisanName || '',
                                    quantity: item.quantity.toString()
                                });
                                return (
                                    <Link 
                                        key={`checkout-${item._id}`}
                                        href={`/checkout?${query.toString()}`}
                                        className="w-full block text-center bg-white border border-[var(--color-primary)] text-[var(--color-primary)] font-bold py-3 rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition"
                                    >
                                        Checkout: {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
