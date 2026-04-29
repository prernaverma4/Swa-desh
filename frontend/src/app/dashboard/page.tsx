'use client';
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

export default function Dashboard() {
    const { user, token, logout } = useAuth();
    const [stats, setStats] = useState<any>(null);

    useEffect(() => {
        // In dev, fetch from localhost
        fetch((process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5000/api') + '/analytics/dashboard')
            .then(res => res.json())
            .then(data => setStats(data))
            .catch(err => console.error(err));
    }, []);

    if (!stats) return <div className="p-8 text-center text-xl">Loading Dashboard...</div>;

    const barData = {
        labels: stats.visitorTrends.labels,
        datasets: [
            {
                label: 'Visitors',
                data: stats.visitorTrends.data,
                backgroundColor: '#808000',
            }
        ]
    };

    const pieData = {
        labels: stats.artisanDistribution.labels.length > 0 ? stats.artisanDistribution.labels : ['No Data'],
        datasets: [
            {
                label: 'Artisans',
                data: stats.artisanDistribution.data.length > 0 ? stats.artisanDistribution.data : [1],
                backgroundColor: ['#FFD700', '#556B2F', '#808000', '#eab308', '#ca8a04'],
                borderWidth: 1,
            }
        ]
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-[var(--color-primary-dark)]">Dashboard Overview</h1>
                {user && (
                    <div className="flex items-center gap-4">
                        <span className="px-4 py-2 bg-gray-100 rounded-full font-semibold">Welcome, {user.name} ({user.role})</span>
                        <button 
                            onClick={logout} 
                            className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-2xl shadow border-l-4 border-[#808000]">
                    <h3 className="text-gray-500 text-sm font-bold uppercase">Heritage Sites</h3>
                    <p className="text-3xl font-bold mt-2">{stats.sitesCount}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow border-l-4 border-[#556B2F]">
                    <h3 className="text-gray-500 text-sm font-bold uppercase">Artisans Count</h3>
                    <p className="text-3xl font-bold mt-2">{stats.artisansCount}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow border-l-4 border-[#FFD700]">
                    <h3 className="text-gray-500 text-sm font-bold uppercase">States Covered</h3>
                    <p className="text-3xl font-bold mt-2">{stats.statesCovered}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow border-l-4 border-[#ca8a04]">
                    <h3 className="text-gray-500 text-sm font-bold uppercase">Annual Visitors</h3>
                    <p className="text-3xl font-bold mt-2">{stats.annualVisitors.toLocaleString()}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-2xl shadow">
                    <h2 className="text-xl font-bold mb-4">Visitor Trends</h2>
                    <div className="h-64">
                        <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow">
                    <h2 className="text-xl font-bold mb-4">State-wise Artisan Distribution</h2>
                    <div className="h-64 flex justify-center">
                        <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-2xl shadow md:col-span-1">
                    <h2 className="text-xl font-bold mb-4 border-b pb-2">Economic Impact Analysis</h2>
                    <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Tourism Revenue</span>
                        <span className="font-bold">₹{stats.economicImpact.tourismRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Artisan Revenue</span>
                        <span className="font-bold">₹{stats.economicImpact.artisanRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between mt-4 pt-4 border-t border-gray-100 text-lg">
                        <span className="font-bold">Total Impact</span>
                        <span className="font-bold text-[#556B2F]">₹{stats.economicImpact.totalEconomicImpact.toLocaleString()}</span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow md:col-span-1">
                    <h2 className="text-xl font-bold mb-4 border-b pb-2">AI Recommended Heritage Sites</h2>
                    <ul className="space-y-3">
                        <li className="flex justify-between items-center group cursor-pointer hover:bg-gray-50 p-2 rounded transition">
                            <span className="font-semibold text-[var(--color-primary-dark)]">Taj Mahal</span>
                            <span className="text-xs bg-[var(--color-accent)] px-2 py-1 rounded text-black group-hover:bg-yellow-500">View</span>
                        </li>
                        <li className="flex justify-between items-center group cursor-pointer hover:bg-gray-50 p-2 rounded transition">
                            <span className="font-semibold text-[var(--color-primary-dark)]">Mysore Palace</span>
                            <span className="text-xs bg-[var(--color-accent)] px-2 py-1 rounded text-black group-hover:bg-yellow-500">View</span>
                        </li>
                        <li className="flex justify-between items-center group cursor-pointer hover:bg-gray-50 p-2 rounded transition">
                            <span className="font-semibold text-[var(--color-primary-dark)]">Red Fort</span>
                            <span className="text-xs bg-[var(--color-accent)] px-2 py-1 rounded text-black group-hover:bg-yellow-500">View</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-[#556B2F] p-6 rounded-2xl shadow text-white md:col-span-1 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Quick Actions</h2>
                        <div className="grid grid-cols-2 gap-3">
                            <button className="bg-white/10 hover:bg-white/20 p-3 rounded text-sm text-center transition">Add Heritage Site</button>
                            <button className="bg-white/10 hover:bg-white/20 p-3 rounded text-sm text-center transition">Add Artisan</button>
                            <button className="bg-white/10 hover:bg-white/20 p-3 rounded text-sm text-center transition">Export Heritage</button>
                            <button className="bg-white/10 hover:bg-white/20 p-3 rounded text-sm text-center transition">Export Artisans</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
