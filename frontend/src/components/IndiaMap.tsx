'use client';
import React, { useState, useEffect } from 'react';
// @ts-ignore
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

interface IndiaMapProps {
  onStateClick: (stateName: string) => void;
}

export default function IndiaMap({ onStateClick }: IndiaMapProps) {
  const [geoData, setGeoData] = useState(null);
  const [tooltipContent, setTooltipContent] = useState('');
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Fetch the stored geojson file
    fetch('/india-states.json')
      .then(res => res.json())
      .then(data => setGeoData(data))
      .catch(console.error);
  }, []);

  if (!geoData) {
    return <div className="flex justify-center items-center h-full text-gray-500">Loading Map...</div>;
  }

  return (
    <div className="relative w-full h-full bg-[#f8fafc] rounded-2xl flex items-center justify-center overflow-hidden">
      {tooltipContent && (
        <div
          className="absolute z-10 bg-gray-800 text-white text-sm px-3 py-1 rounded shadow pointer-events-none whitespace-nowrap"
          style={{ top: tooltipPos.y - 40, left: tooltipPos.x - 20 }}
        >
          {tooltipContent}
        </div>
      )}
      
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1000,
          center: [82.5, 22.5] // Focus on India
        }}
        width={800}
        height={600}
        className="w-full h-full max-h-full"
      >
        <Geographies geography={geoData}>
          {({ geographies }: { geographies: any[] }) =>
            geographies.map((geo: any) => {
              const stateName = geo.properties.NAME_1;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => {
                    onStateClick(stateName);
                  }}
                  onMouseEnter={(e: React.MouseEvent) => {
                    // Normalize standard state names if needed here
                    setTooltipContent(stateName);
                    // For tooltip positioning based on mouse relative to the container
                    const rect = e.currentTarget.getBoundingClientRect();
                    // We'll use mouse event coords rather than getBoundingRect because rect might be off for SVG paths
                  }}
                  onMouseMove={(e: React.MouseEvent) => {
                    // Get bounds of the container
                    const container = e.currentTarget.closest('.relative');
                    if(container) {
                      const rect = container.getBoundingClientRect();
                      setTooltipPos({
                        x: e.clientX - rect.left,
                        y: e.clientY - rect.top
                      });
                    }
                  }}
                  onMouseLeave={() => {
                    setTooltipContent('');
                  }}
                  style={{
                    default: {
                      fill: '#D6D6DA',
                      stroke: '#FFFFFF',
                      strokeWidth: 0.75,
                      outline: 'none',
                    },
                    hover: {
                      fill: 'var(--color-primary, #6B8E23)',
                      stroke: '#FFFFFF',
                      strokeWidth: 1,
                      outline: 'none',
                      cursor: 'pointer',
                      transition: 'all 250ms ease'
                    },
                    pressed: {
                      fill: '#556B2F',
                      stroke: '#FFFFFF',
                      strokeWidth: 1,
                      outline: 'none',
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
