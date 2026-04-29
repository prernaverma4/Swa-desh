'use client';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
    const { user, logout } = useAuth();
    const { cartCount } = useCart();

    return (
        <nav className="bg-[var(--color-primary)] text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold flex items-center gap-2">
                            <span className="text-[#FFFDD0]">Swa Desh</span>
                        </Link>
                    </div>
                    {user && (
                        <div className="hidden md:flex space-x-8">
                            <Link href="/dashboard" className="hover:text-[var(--color-accent)] transition">Dashboard</Link>
                            <Link href="/my-orders" className="hover:text-[var(--color-accent)] transition">My Orders</Link>
                            <Link href="/heritage" className="hover:text-[var(--color-accent)] transition">Heritage Sites</Link>
                            <Link href="/map" className="hover:text-[var(--color-accent)] transition">Map View</Link>
                            <Link href="/artisans" className="hover:text-[var(--color-accent)] transition">Artisans</Link>
                            <Link href="/products" className="hover:text-[var(--color-accent)] transition">Products</Link>
                        </div>
                    )}
                    <div className="flex items-center space-x-6">
                        {user && (
                            <Link href="/cart" className="relative hover:text-[var(--color-accent)] transition flex items-center" aria-label="Shopping Cart">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                                {cartCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm border border-white">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                        )}
                        {user ? (
                            <button onClick={logout} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition font-medium">Logout</button>
                        ) : (
                            <div className="flex space-x-3">
                                <Link href="/login" className="px-4 py-2 border rounded hover:bg-white hover:text-[var(--color-primary)] transition font-medium">Sign In</Link>
                                <Link href="/register" className="px-4 py-2 bg-[var(--color-accent)] text-black rounded hover:bg-yellow-500 transition font-medium">Register</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
