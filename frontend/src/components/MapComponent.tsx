'use client';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { useEffect, useState } from 'react';
import { STATE_COORDINATES } from '@/constants/states';

function ChangeView({ center, zoom }: { center: [number, number], zoom: number }) {
    const map = useMap();
    useEffect(() => {
        if (center[0] !== 0 && center[1] !== 0) {
            map.flyTo(center, zoom, {
                animate: true,
                duration: 1.5,
            });
        }
    }, [center, zoom, map]);
    return null;
}

export default function MapComponent({ sites, selectedState, selectedDistrict }: { sites: any[], selectedState: string, selectedDistrict: string }) {
    let center: [number, number] = [20.5937, 78.9629]; // India center
    let zoom = 5;

    const stateCoordinates = STATE_COORDINATES;

    if (selectedState && stateCoordinates[selectedState]) {
        center = stateCoordinates[selectedState];
        zoom = 6;
    }

    const [dynamicCenter, setDynamicCenter] = useState<[number, number] | null>(null);
    const [dynamicZoom, setDynamicZoom] = useState<number>(5);

    useEffect(() => {
        let isSearchActive = false;
        async function fetchLocation() {
            if (selectedDistrict && selectedState) {
                // Fetch dynamic coordinates using OpenStreetMap Nominatim API
                try {
                    const query = encodeURIComponent(`${selectedDistrict}, ${selectedState}, India`);
                    const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}&limit=1`);
                    const data = await res.json();
                    if (data && data.length > 0) {
                        setDynamicCenter([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
                        setDynamicZoom(10); // Close zoom for district
                        isSearchActive = true;
                    }
                } catch (e) {
                    console.error("Geocoding failed", e);
                }
            }
            if (!isSearchActive && selectedState) {
                const stateCoordinates = STATE_COORDINATES;
                if (stateCoordinates[selectedState]) {
                    setDynamicCenter(stateCoordinates[selectedState]);
                    setDynamicZoom(6); // Zoom for state
                }
            } else if (!isSearchActive && !selectedState) {
                // reset
                setDynamicCenter([20.5937, 78.9629]);
                setDynamicZoom(5);
            }
        }
        fetchLocation();
    }, [selectedState, selectedDistrict]);

    const finalCenter = dynamicCenter || center;
    const finalZoom = dynamicCenter ? dynamicZoom : zoom;

    // Generate some dummy location data if site location is missing
    const getSiteLocation = (site: any): [number, number] => {
        if (site.location && site.location.lat && site.location.lng) {
            return [site.location.lat, site.location.lng];
        }

        // Quick fallback dummy coordinates based on state or center
        if (stateCoordinates[site.state]) {
            // slightly offset
            return [stateCoordinates[site.state][0] + (Math.random() * 2 - 1), stateCoordinates[site.state][1] + (Math.random() * 2 - 1)];
        }
        return [center[0] + (Math.random() * 4 - 2), center[1] + (Math.random() * 4 - 2)];
    };

    return (
        <MapContainer center={finalCenter} zoom={finalZoom} scrollWheelZoom={true} className="w-full h-full rounded-2xl shadow-lg z-0">
            <ChangeView center={finalCenter} zoom={finalZoom} />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {sites.map((site) => (
                <Marker key={site._id} position={getSiteLocation(site)}>
                    <Popup>
                        <div className="font-bold text-lg text-[var(--color-primary-dark)]">{site.name}</div>
                        <div className="text-sm text-gray-600 mb-1">{site.category} - {site.district}, {site.state}</div>
                        <div className="text-sm truncate w-48">{site.description}</div>
                        <a href={`/heritage/${site._id}`} className="text-blue-600 mt-2 inline-block text-sm font-semibold hover:underline">View Details</a>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
