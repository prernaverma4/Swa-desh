'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ArtisansDirectory() {
    const [artisans, setArtisans] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [stateFilter, setStateFilter] = useState('');
    const [craftFilter, setCraftFilter] = useState('');

    const states = ['Uttar Pradesh', 'Maharashtra', 'Karnataka', 'Rajasthan'];
    const crafts = ['Pottery', 'Metalwork', 'Embroidery', 'Wood Carving', 'Painting'];

    useEffect(() => {
        let url = (process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5000/api') + '/artisans?';
        if (search) url += `search=${search}&`;
        if (stateFilter) url += `state=${stateFilter}&`;
        if (craftFilter) url += `craft=${craftFilter}&`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data && data.length > 0) {
                    setArtisans(data);
                } else {
                    // Dummy data for visual development
                    setArtisans([
                        { _id: '1', name: 'Ramesh Kumhar', craft: 'Pottery', state: 'Rajasthan', district: 'Jaipur', phone: '+91 9876543210', description: 'Expert in traditional blue pottery.', productsCount: 15 },
                        { _id: '2', name: 'Sunita Devi', craft: 'Embroidery', state: 'Gujarat', district: 'Kutch', phone: '+91 9876543211', description: 'Banarasi and Kutch embroidery specialist.', productsCount: 8 },
                        { _id: '3', name: 'Abdul Ansari', craft: 'Wood Carving', state: 'Uttar Pradesh', district: 'Saharanpur', phone: '+91 9876543212', description: 'Intricate wood carving for furniture and decor.', productsCount: 22 },
                        { _id: '4', name: 'Laxmi Narayan', craft: 'Metalwork', state: 'Odisha', district: 'Cuttack', phone: '+91 9876543213', description: 'Silver filigree artist with 20 years experience.', productsCount: 5 },
                    ]);
                }
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [search, stateFilter, craftFilter]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-[var(--color-primary-dark)]">Artisans Directory</h1>
                    <p className="text-gray-600 mt-1">Support traditional artisans and MSMEs across India.</p>
                </div>
                <button className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg hover:bg-[#556B2F] transition font-semibold">
                    Register as Artisan
                </button>
            </div>

            <div className="bg-white p-4 rounded-xl shadow mb-8 flex flex-col md:flex-row gap-4 items-center">
                <input
                    type="text"
                    placeholder="Search by name..."
                    className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--color-primary)]"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select
                    className="w-full md:w-48 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--color-primary)] bg-white"
                    value={stateFilter} onChange={(e) => setStateFilter(e.target.value)}
                >
                    <option value="">All States</option>
                    {states.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <select
                    className="w-full md:w-48 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--color-primary)] bg-white"
                    value={craftFilter} onChange={(e) => setCraftFilter(e.target.value)}
                >
                    <option value="">All Crafts</option>
                    {crafts.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
            </div>

            <div className="bg-white rounded-xl shadow overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Artisan</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Craft</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {loading ? (
                                <tr><td colSpan={5} className="px-6 py-4 text-center">Loading...</td></tr>
                            ) : (
                                artisans.map(artisan => (
                                    <tr key={artisan._id} className="hover:bg-gray-50 transition">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-xl">
                                                    👤
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{artisan.name}</div>
                                                    <div className="text-sm text-gray-500">{artisan.productsCount || 0} Products Listed</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                                {artisan.craft}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{artisan.state}</div>
                                            <div className="text-sm text-gray-500">{artisan.district}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {artisan.phone}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <Link href={`/products?artisan=${artisan._id}`} className="text-[var(--color-primary)] hover:text-[#556B2F] font-semibold">
                                                View Products
                                            </Link>
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
