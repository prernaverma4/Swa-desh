'use client';
import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';

export default function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
    const unwrappedParams = use(params);
    const router = useRouter();
    const { user } = useAuth();
    const { addToCart } = useCart();
    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5000/api'}/events/${unwrappedParams.id}`)
            .then(res => res.json())
            .then(data => {
                if (data && data.title) {
                    const [district, state] = (data.location || '').split(',').map((s: string) => s.trim());
                    setProduct({
                        _id: data._id,
                        name: data.title,
                        price: data.productPrice || 0,
                        description: data.description || '',
                        state: state || 'Unknown',
                        district: district || 'Unknown',
                        craft: data.category || 'Unknown',
                        stock: data.availableAmount || 0,
                        image: data.image || 'https://via.placeholder.com/600x400?text=Product',
                        artisan: { name: data.createdBy?.name || 'Local Artisan' }
                    });
                } else {
                    // Dummy data fallback
                    setProduct({
                        _id: unwrappedParams.id,
                        name: 'Royal Blue Paithani Saree',
                        price: 12000,
                        description: 'Authentic handmade Paithani saree with intricate zari work on the pallu and border. Woven purely from silk. A masterpiece of traditional art.',
                        artisan: { name: 'Sunita Devi' },
                        state: 'Maharashtra',
                        district: 'Aurangabad',
                        craft: 'Embroidery',
                        stock: 5,
                        image: 'https://via.placeholder.com/600x400?text=Paithani+Saree'
                    });
                }
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [unwrappedParams.id]);

    if (loading) return <div className="p-10 text-xl text-center">Loading product...</div>;
    if (!product) return <div className="p-10 text-xl text-center">Product not found</div>;

    const handleBuyNow = () => {
        // Encode product data in URL query params to pass to checkout for simplicity
        const query = new URLSearchParams({
            productId: product._id,
            name: product.name,
            price: product.price.toString(),
            artisanName: product.artisan?.name || '',
            quantity: quantity.toString()
        });
        router.push(`/checkout?${query.toString()}`);
    };

    const handleAddToCart = () => {
        addToCart({
            _id: product._id,
            name: product.name,
            price: product.price,
            image: product.image,
            artisanName: product.artisan?.name,
            stock: product.stock,
            quantity: quantity
        });
        alert(`${quantity} ${product.name}(s) added to cart!`);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                {/* Make this section left for image */}
                <div className="w-full md:w-1/2 bg-gray-100 relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={product.image} alt={product.name} className="w-full h-[500px] object-cover" />
                </div>

                {/* Make this section right for details */}
                <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <h1 className="text-3xl font-bold text-gray-900 leading-tight">{product.name}</h1>
                            <span className="text-3xl font-bold text-[var(--color-primary-dark)]">₹{product.price.toLocaleString()}</span>
                        </div>

                        <div className="flex gap-2 mb-6 text-sm">
                            <span className="bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full">{product.craft}</span>
                            <span className="bg-gray-100 text-gray-800 font-semibold px-3 py-1 rounded-full">{product.state}</span>
                        </div>

                        <p className="text-gray-600 mb-8 whitespace-pre-wrap leading-relaxed">
                            {product.description || 'A beautiful traditional craft piece sourced directly from the artisan.'}
                        </p>

                        <div className="border-t border-b border-gray-100 py-4 mb-8">
                            <h3 className="font-semibold text-gray-900 mb-1">Artisan Information</h3>
                            <p className="text-gray-600">
                                Created by <span className="text-[var(--color-primary-dark)] font-medium">{product.artisan?.name}</span> from {product.district}, {product.state}.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <label className="font-semibold text-gray-700">Quantity:</label>
                            <div className="flex border border-gray-300 rounded text-lg font-semibold overflow-hidden">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="px-4 py-2 bg-gray-50 hover:bg-gray-200 transition"
                                    disabled={quantity <= 1}
                                >-</button>
                                <div className="px-4 py-2 border-l border-r border-gray-300 w-12 text-center">{quantity}</div>
                                <button
                                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                                    className="px-4 py-2 bg-gray-50 hover:bg-gray-200 transition"
                                    disabled={quantity >= product.stock}
                                >+</button>
                            </div>
                            <span className="text-sm text-gray-500">{product.stock} in stock</span>
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={handleBuyNow}
                                className="flex-1 bg-[var(--color-primary)] text-white font-bold py-4 rounded-xl hover:bg-[#556B2F] shadow-lg transition text-lg"
                            >
                                Buy Now
                            </button>
                            <button 
                                onClick={handleAddToCart}
                                className="flex-1 border-2 border-[var(--color-accent)] text-black font-bold py-4 rounded-xl hover:bg-[var(--color-accent)] hover:text-white transition text-lg bg-yellow-50">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
