'use client';
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function MyOrders() {
    const { token, user } = useAuth();
    const router = useRouter();
    const [orders, setOrders] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!token) {
            router.push('/login');
            return;
        }

        fetch((process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5000/api') + '/orders/myorders', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setOrders(data);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [token, router]);

    if (loading) return <div className="p-10 text-xl text-center flex-1">Loading orders...</div>;
    if (!user) return null;

    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">My Orders</h1>

            {orders.length === 0 ? (
                <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto text-gray-300 mb-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <h2 className="text-2xl font-bold text-gray-700 mb-2">No Orders Yet</h2>
                    <p className="text-gray-500 mb-6">You haven't placed any orders yet. Discover our amazing artisan products!</p>
                    <Link href="/products" className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#556B2F] transition shadow">
                        Start Shopping
                    </Link>
                </div>
            ) : (
                <div className="space-y-6">
                    {orders.map((order: any) => (
                        <div key={order._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex flex-col sm:flex-row sm:justify-between gap-4">
                                <div>
                                    <p className="text-sm text-gray-500 font-semibold uppercase">Order Placed</p>
                                    <p className="font-semibold text-gray-900">{new Date(order.createdAt).toLocaleDateString()} at {new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-semibold uppercase">Total Amount</p>
                                    <p className="font-semibold text-gray-900 text-lg">
                                        ₹{((order.product?.productPrice || 0) * order.quantity).toLocaleString()}
                                    </p>
                                </div>
                                <div className="sm:text-right">
                                    <p className="text-sm text-gray-500 font-semibold uppercase">Order ID</p>
                                    <p className="font-mono text-xs text-gray-600 bg-gray-200 px-2 py-1 rounded inline-block mt-1">#{order._id.substring(order._id.length - 8).toUpperCase()}</p>
                                </div>
                            </div>
                            
                            <div className="p-6 flex flex-col md:flex-row gap-6">
                                <div className="w-full md:w-32 h-32 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                                    {order.product?.image ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img src={order.product.image} alt="Product" className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                                    )}
                                </div>
                                
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-xl font-bold text-gray-900">{order.product?.title || 'Unknown Product'}</h3>
                                            <span className={`px-4 py-1.5 rounded-full text-sm font-bold shadow-sm ${
                                                order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                                                order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                                                'bg-yellow-100 text-yellow-800'
                                            }`}>
                                                {order.status}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 mt-1">Quantity: {order.quantity}</p>
                                    </div>
                                    
                                    <div className="mt-4 pt-4 border-t border-gray-50">
                                        <h4 className="text-sm font-semibold text-gray-700 mb-1">Shipping To:</h4>
                                        <p className="text-gray-600 text-sm whitespace-pre-wrap">{order.address?.shippingAddress}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
