'use client';
import { useRouter } from 'next/navigation';
import IndiaMap from '@/components/IndiaMap';

export default function MapPage() {
    const router = useRouter();

    const handleStateClick = (stateName: string) => {
        // Navigate to the heritage page with the clicked state as a filter query parameter
        router.push(`/heritage?state=${encodeURIComponent(stateName)}`);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-[calc(100vh-160px)] flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-[var(--color-primary-dark)]">Interactive Map of India</h1>
                    <p className="text-gray-600 mt-1">Explore heritage sites and artisans by clicking on a state.</p>
                </div>
            </div>

            <div className="flex-grow rounded-2xl relative overflow-hidden shadow-lg border border-gray-100 bg-white p-4">
                <IndiaMap onStateClick={handleStateClick} />
            </div>
        </div>
    );
}
