'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

interface HeritageSite {
    _id: string;
    name: string;
    state: string;
    district: string;
    category: string;
    annualVisitors: number;
    views: number;
    description: string;
    image: string;
}

export default function HeritageDetail() {
    const { id } = useParams();
    const router = useRouter();
    const [site, setSite] = useState<HeritageSite | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;
        
        fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5000/api'}/heritage-sites/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setSite(data);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className="p-8 text-center text-xl">Loading...</div>;
    }

    if (!site) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-8 text-center">
                <h2 className="text-2xl mb-4 font-bold">Heritage site not found</h2>
                <button onClick={() => router.back()} className="text-[var(--color-primary)] hover:underline">
                    &larr; Back to list
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <button onClick={() => router.back()} className="text-[var(--color-primary)] hover:text-[#556B2F] mb-6 flex items-center gap-2 font-medium transition cursor-pointer">
                <span>&larr;</span> Back to list
            </button>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <div className="w-full h-96 bg-gray-200 relative">
                    {site.image ? (
                        <img src={site.image} alt={site.name} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-6xl">🏛️</div>
                    )}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-gray-800 shadow-sm">
                        {site.category}
                    </div>
                </div>

                <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                        <div>
                            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{site.name}</h1>
                            <div className="flex items-center text-gray-500 gap-2 text-lg">
                                <span>📍</span>
                                <span>{site.district}, {site.state}</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-2 bg-gray-50 px-5 py-3 rounded-xl">
                            <div className="text-sm text-gray-500 uppercase font-semibold tracking-wider">Annual Visitors</div>
                            <div className="text-2xl font-bold text-[var(--color-primary)]">
                                {site.annualVisitors ? site.annualVisitors.toLocaleString() : 'N/A'}
                            </div>
                        </div>
                    </div>

                    <div className="prose max-w-none text-gray-700 leading-relaxed text-lg">
                        <p>{site.description}</p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center text-sm text-gray-400">
                        <div>Total Views: {site.views ? site.views.toLocaleString() : 0}</div>
                        <div>ID: {site._id}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
