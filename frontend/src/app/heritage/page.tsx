'use client';
import { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';

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

export default function HeritageSites() {
    return (
        <Suspense fallback={<div className="p-8 text-center">Loading heritage sites...</div>}>
            <HeritageSitesContent />
        </Suspense>
    );
}

function HeritageSitesContent() {
    const [sites, setSites] = useState<HeritageSite[]>([]);
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();
    const router = useRouter();
    const stateFilter = searchParams.get('state');

    useEffect(() => {
        // In dev, fetch from localhost, if no db data provide mock data
        fetch((process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5000/api') + '/heritage-sites')
            .then(res => res.json())
            .then(data => {
                if (data && data.length > 0) {
                    setSites(data);
                } else {
                    setSites([]);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const displayedSites = stateFilter ? sites.filter(s => s.state === stateFilter) : sites;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-[var(--color-primary-dark)]">
                        {stateFilter ? `Heritage Sites in ${stateFilter}` : 'Heritage Sites'}
                    </h1>
                    <p className="text-gray-600 mt-1">
                        {stateFilter ? `Explore beautiful heritage sites and monuments located in ${stateFilter}.` : 'Track and manage heritage sites across India.'}
                    </p>
                </div>
                <button className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg hover:bg-[#556B2F] transition font-semibold">
                    + Add New Site
                </button>
            </div>

            <div className="bg-white rounded-xl shadow overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image & Name</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">State</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Visitors</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {loading ? (
                                <tr><td colSpan={4} className="px-6 py-4 text-center">Loading...</td></tr>
                            ) : displayedSites.length === 0 ? (
                                <tr><td colSpan={4} className="px-6 py-4 text-center text-gray-500">No heritage sites found {stateFilter ? `in ${stateFilter}` : ''}.</td></tr>
                            ) : (
                                displayedSites.map(site => (
                                    <tr key={site._id} onClick={() => router.push(`/heritage/${site._id}`)} className="hover:bg-gray-50 transition cursor-pointer">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-md overflow-hidden relative">
                                                    {site.image ? (
                                                        <img src={site.image} alt={site.name} className="h-full w-full object-cover" />
                                                    ) : (
                                                        <div className="h-full w-full flex items-center justify-center text-xl">
                                                            🏛️
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{site.name}</div>
                                                    <div className="text-sm text-gray-500 max-w-[200px] truncate">{site.description}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{site.state}</div>
                                            <div className="text-sm text-gray-500">{site.district}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                                {site.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {site.annualVisitors ? site.annualVisitors.toLocaleString() : 'N/A'} / yr
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
