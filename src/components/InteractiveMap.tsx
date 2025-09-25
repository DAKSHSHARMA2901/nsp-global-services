'use client';

import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker } from 'react-simple-maps';
import { motion } from 'framer-motion';
import { HiLocationMarker, HiGlobe } from 'react-icons/hi';

// Try multiple reliable geo data sources in order of preference
const geoUrls = [
  "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson", // GeoJSON format - most reliable
  "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson", // Alternative GeoJSON source
  "https://unpkg.com/world-atlas@3/countries-50m.json", // Higher resolution TopoJSON
  "https://unpkg.com/world-atlas@3/countries-110m.json" // Lower resolution TopoJSON fallback
];

interface MapLocation {
  id: string;
  name: string;
  country: string;
  flag: string;
  coordinates: [number, number]; // [longitude, latitude] for real world coordinates
  cities: string[];
  color: string;
  countryCode: string; // ISO country code for mapping
}

const InteractiveMap: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [geoData, setGeoData] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState<string>('');

  // Service locations with real world coordinates
  const serviceLocations: MapLocation[] = [
    {
      id: 'usa',
      name: 'United States',
      country: 'USA',
      flag: '🇺🇸',
      coordinates: [-95.7129, 37.0902], // Center of USA
      cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami', 'San Francisco', 'Boston', 'Seattle', 'Austin', 'Denver', 'Phoenix', 'Las Vegas'],
      color: 'bg-blue-500',
      countryCode: 'US'
    },
    {
      id: 'uk',
      name: 'United Kingdom',
      country: 'UK',
      flag: '🇬🇧',
      coordinates: [-2.0, 54.0], // Center of UK
      cities: ['London', 'Manchester', 'Birmingham', 'Liverpool', 'Bristol', 'Edinburgh', 'Glasgow', 'Leeds', 'Sheffield', 'Brighton'],
      color: 'bg-red-500',
      countryCode: 'GB'
    },
    {
      id: 'canada',
      name: 'Canada',
      country: 'Canada',
      flag: '🇨🇦',
      coordinates: [-106.3468, 56.1304], // Center of Canada
      cities: ['Toronto', 'Vancouver', 'Calgary', 'Ottawa', 'Edmonton', 'Mississauga'],
      color: 'bg-green-500',
      countryCode: 'CA'
    },
    {
      id: 'australia',
      name: 'Australia',
      country: 'Australia',
      flag: '🇦🇺',
      coordinates: [133.7751, -25.2744], // Center of Australia
      cities: ['Sydney', 'Melbourne', 'Perth', 'Adelaide', 'Darwin', 'Hobart', 'Gold Coast', 'Geelong'],
      color: 'bg-yellow-500',
      countryCode: 'AU'
    },
    {
      id: 'singapore',
      name: 'Singapore',
      country: 'Singapore',
      flag: '🇸🇬',
      coordinates: [103.8198, 1.3521], // Singapore
      cities: ['Singapore'],
      color: 'bg-purple-500',
      countryCode: 'SG'
    },
    {
      id: 'thailand',
      name: 'Thailand',
      country: 'Thailand',
      flag: '🇹🇭',
      coordinates: [100.9925, 15.8700], // Center of Thailand
      cities: ['Bangkok', 'Phuket', 'Chiang Mai'],
      color: 'bg-orange-500',
      countryCode: 'TH'
    },
    {
      id: 'newzealand',
      name: 'New Zealand',
      country: 'New Zealand',
      flag: '🇳🇿',
      coordinates: [174.8860, -40.9006], // Center of New Zealand
      cities: ['Auckland', 'Wellington', 'Christchurch'],
      color: 'bg-teal-500',
      countryCode: 'NZ'
    },
    {
      id: 'uae',
      name: 'United Arab Emirates',
      country: 'UAE',
      flag: '🇦🇪',
      coordinates: [53.8478, 23.4241], // Center of UAE
      cities: ['Abu Dhabi', 'Dubai'],
      color: 'bg-indigo-500',
      countryCode: 'AE'
    },
    {
      id: 'switzerland',
      name: 'Switzerland',
      country: 'Switzerland',
      flag: '🇨🇭',
      coordinates: [8.2275, 46.8182], // Center of Switzerland
      cities: ['Zurich', 'Geneva'],
      color: 'bg-pink-500',
      countryCode: 'CH'
    },
    {
      id: 'malaysia',
      name: 'Malaysia',
      country: 'Malaysia',
      flag: '🇲🇾',
      coordinates: [101.9758, 4.2105], // Center of Malaysia
      cities: ['Kuala Lumpur', 'Penang'],
      color: 'bg-cyan-500',
      countryCode: 'MY'
    }
  ];

  // Try loading geo data from multiple sources
  useEffect(() => {
    const loadGeoData = async () => {
      setError(null);
      setLoadingProgress('Initializing map...');
      
      for (let i = 0; i < geoUrls.length; i++) {
        try {
          setLoadingProgress(`Trying source ${i + 1} of ${geoUrls.length}...`);
          console.log(`Attempting to load geo data from: ${geoUrls[i]}`);
          const res = await fetch(geoUrls[i]);
          
          if (!res.ok) {
            throw new Error(`HTTP ${res.status}: Failed to load from ${geoUrls[i]}`);
          }
          
          setLoadingProgress('Processing geographic data...');
          const data = await res.json();
          console.log('Successfully loaded geo data:', data);
          
          setGeoData(data);
          setIsMapLoaded(true);
          setLoadingProgress('');
          return; // Success, exit the loop
          
        } catch (err) {
          console.warn(`Failed to load from ${geoUrls[i]}:`, err);
          
          // If this is the last URL and it failed, set error
          if (i === geoUrls.length - 1) {
            setError(`Failed to load map data from all sources. Please check your internet connection.`);
            setLoadingProgress('');
          }
        }
      }
    };

    loadGeoData();
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedLocation(null);
      } else if (e.key === 'ArrowRight' && selectedLocation) {
        const currentIndex = serviceLocations.findIndex(loc => loc.id === selectedLocation.id);
        const nextIndex = (currentIndex + 1) % serviceLocations.length;
        setSelectedLocation(serviceLocations[nextIndex]);
      } else if (e.key === 'ArrowLeft' && selectedLocation) {
        const currentIndex = serviceLocations.findIndex(loc => loc.id === selectedLocation.id);
        const prevIndex = currentIndex === 0 ? serviceLocations.length - 1 : currentIndex - 1;
        setSelectedLocation(serviceLocations[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedLocation]);

  const handleCountryClick = (geo: any) => {
    const countryCode = geo.id;
    const serviceLocation = serviceLocations.find(loc => loc.countryCode === countryCode);
    if (serviceLocation) {
      setSelectedLocation(serviceLocation);
    }
  };

  const getCountryFill = (geo: any) => {
    const countryCode = geo.id;
    const serviceLocation = serviceLocations.find(loc => loc.countryCode === countryCode);
    
    if (selectedLocation?.countryCode === countryCode) {
      return "#1d4ed8"; // Bright blue for selected country
    } else if (serviceLocation) {
      // Different colors for different service locations
      switch (serviceLocation.id) {
        case 'usa': return "#3b82f6"; // Blue for USA
        case 'uk': return "#ef4444"; // Red for UK
        case 'canada': return "#10b981"; // Green for Canada
        case 'australia': return "#f59e0b"; // Orange for Australia
        case 'singapore': return "#8b5cf6"; // Purple for Singapore
        case 'thailand': return "#06b6d4"; // Cyan for Thailand
        case 'newzealand': return "#84cc16"; // Lime for New Zealand
        case 'uae': return "#f97316"; // Orange for UAE
        case 'switzerland': return "#ec4899"; // Pink for Switzerland
        case 'malaysia': return "#14b8a6"; // Teal for Malaysia
        default: return "#6366f1"; // Indigo for other service countries
      }
    } else {
      // Beautiful gradient colors for non-service countries
      const oceanCountries = ['GRL', 'ISL']; // Greenland, Iceland
      const mountainCountries = ['NPL', 'BTN', 'AFG']; // Nepal, Bhutan, Afghanistan
      const desertCountries = ['MAR', 'DZA', 'LBY', 'EGY', 'SDN']; // North African countries
      
      if (oceanCountries.includes(countryCode)) {
        return "#bfdbfe"; // Light blue for arctic/ocean countries
      } else if (mountainCountries.includes(countryCode)) {
        return "#d1d5db"; // Light gray for mountain countries
      } else if (desertCountries.includes(countryCode)) {
        return "#fde68a"; // Light yellow for desert countries
      } else {
        return "#f3f4f6"; // Very light gray for other countries
      }
    }
  };

  const getCountryHoverFill = (geo: any) => {
    const countryCode = geo.id;
    const serviceLocation = serviceLocations.find(loc => loc.countryCode === countryCode);
    
    if (serviceLocation) {
      // Darker shades for hover effect on service countries
      switch (serviceLocation.id) {
        case 'usa': return "#2563eb"; // Darker blue for USA
        case 'uk': return "#dc2626"; // Darker red for UK
        case 'canada': return "#059669"; // Darker green for Canada
        case 'australia': return "#d97706"; // Darker orange for Australia
        case 'singapore': return "#7c3aed"; // Darker purple for Singapore
        case 'thailand': return "#0891b2"; // Darker cyan for Thailand
        case 'newzealand': return "#65a30d"; // Darker lime for New Zealand
        case 'uae': return "#ea580c"; // Darker orange for UAE
        case 'switzerland': return "#db2777"; // Darker pink for Switzerland
        case 'malaysia': return "#0f766e"; // Darker teal for Malaysia
        default: return "#4f46e5"; // Darker indigo for other service countries
      }
    } else {
      return "#e5e7eb"; // Light gray for non-service countries on hover
    }
  };

  if (error) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="text-center">
          <div className="text-red-500 text-lg font-semibold mb-4">Error loading map: {error}</div>
          <div className="text-gray-600 mb-6">We're having trouble loading the world map. This could be due to network issues.</div>
          <div className="flex justify-center space-x-4 mb-8">
            <button 
              onClick={() => window.location.reload()} 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Retry Loading Map
            </button>
            <button 
              onClick={() => setError(null)} 
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Show Locations List
            </button>
          </div>
          
          {/* Fallback: Show service locations in a grid without map */}
          <div className="mt-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Our Service Locations</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceLocations.map((location) => (
                <motion.div 
                  key={location.id}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200 cursor-pointer hover:shadow-md transition-all duration-200"
                  onClick={() => setSelectedLocation(location)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">{location.flag}</span>
                    <div>
                      <h5 className="font-bold text-gray-900">{location.name}</h5>
                      <p className="text-sm text-gray-600">{location.cities.length} cities</p>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">
                    {location.cities.slice(0, 3).join(', ')}{location.cities.length > 3 ? '...' : ''}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!geoData || !isMapLoaded) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <div className="text-gray-600 text-lg mb-2">Loading interactive world map...</div>
          {loadingProgress && (
            <div className="text-sm text-blue-600 mb-2 font-medium">{loadingProgress}</div>
          )}
          <div className="text-sm text-gray-500">Fetching geographic data for {serviceLocations.length} service locations</div>
          
          {/* Show service locations while loading */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-2">
            {serviceLocations.map((location) => (
              <div key={location.id} className="flex items-center justify-center p-2 bg-gray-50 rounded-lg">
                <span className="text-lg mr-1">{location.flag}</span>
                <span className="text-xs text-gray-600">{location.country}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-4 shadow-lg">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Interactive Global Map</h3>
        <p className="text-gray-700 mb-4">
          Click on any highlighted country to see our service areas • Use arrow keys to navigate
        </p>
        {selectedLocation && (
          <motion.div 
            className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="mr-2">{selectedLocation.flag}</span>
            Currently viewing: {selectedLocation.name}
            <button 
              onClick={() => setSelectedLocation(null)}
              className="ml-2 text-blue-600 hover:text-blue-800"
            >
              ✕
            </button>
          </motion.div>
        )}
      </div>

      <div className="relative">
        <motion.div
          className="bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 rounded-xl p-4 shadow-inner border border-blue-200"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 25%, #7dd3fc 50%, #38bdf8 75%, #0ea5e9 100%)'
          }}
        >
          {/* Ocean wave effect overlay */}
          <div className="absolute inset-0 rounded-xl opacity-20 pointer-events-none"
            style={{
              background: `
                radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(147, 197, 253, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(96, 165, 250, 0.2) 0%, transparent 50%)
              `
            }}
          />
          
          <ComposableMap 
            projectionConfig={{ scale: 160 }} 
            className="w-full h-96 md:h-[500px] relative z-10"
            style={{ backgroundColor: 'transparent' }}
          >
            {/* SVG Filters for enhanced visual effects */}
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/> 
                </feMerge>
              </filter>
              <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.3"/>
              </filter>
            </defs>
            
            <ZoomableGroup zoom={1} center={[0, 20]}>
              <Geographies geography={geoData}>
                {({ geographies }: { geographies: any[] }) =>
                  geographies.map((geo: any) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onClick={() => handleCountryClick(geo)}
                      style={{
                        default: { 
                          fill: getCountryFill(geo), 
                          outline: "none",
                          stroke: "#ffffff",
                          strokeWidth: 0.75,
                          filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.1))"
                        },
                        hover: { 
                          fill: getCountryHoverFill(geo), 
                          outline: "none", 
                          cursor: "pointer",
                          stroke: "#ffffff",
                          strokeWidth: 1.5,
                          filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.2))",
                          transform: "scale(1.001)"
                        },
                        pressed: { 
                          fill: "#1d4ed8", 
                          outline: "none",
                          stroke: "#fbbf24",
                          strokeWidth: 2,
                          filter: "drop-shadow(0px 3px 6px rgba(0,0,0,0.3))"
                        },
                      }}
                    />
                  ))
                }
              </Geographies>
              
              {/* Enhanced Service Location Markers */}
              {serviceLocations.map((location) => {
                // Get the unique color for each service location
                const getMarkerColor = () => {
                  switch (location.id) {
                    case 'usa': return "#3b82f6"; // Blue
                    case 'uk': return "#ef4444"; // Red
                    case 'canada': return "#10b981"; // Green
                    case 'australia': return "#f59e0b"; // Orange
                    case 'singapore': return "#8b5cf6"; // Purple
                    case 'thailand': return "#06b6d4"; // Cyan
                    case 'newzealand': return "#84cc16"; // Lime
                    case 'uae': return "#f97316"; // Orange
                    case 'switzerland': return "#ec4899"; // Pink
                    case 'malaysia': return "#14b8a6"; // Teal
                    default: return "#6366f1"; // Indigo
                  }
                };

                return (
                  <Marker key={location.id} coordinates={location.coordinates}>
                    <motion.g
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.3 }}
                      whileHover={{ scale: 1.3 }}
                      onClick={() => setSelectedLocation(location)}
                      style={{ cursor: 'pointer' }}
                      onMouseEnter={() => setHoveredLocation(location.id)}
                      onMouseLeave={() => setHoveredLocation(null)}
                    >
                      {/* Pulsing outer ring */}
                      <circle
                        r={12}
                        fill={getMarkerColor()}
                        fillOpacity={0.3}
                        className="animate-ping"
                      />
                      
                      {/* Main marker circle */}
                      <circle
                        r={8}
                        fill={getMarkerColor()}
                        stroke="#ffffff"
                        strokeWidth={3}
                        className="drop-shadow-lg"
                        filter="url(#glow)"
                      />
                      
                      {/* Inner highlight */}
                      <circle
                        r={4}
                        fill="#ffffff"
                        fillOpacity={0.9}
                        className="animate-pulse"
                      />
                      
                      {/* Flag emoji overlay */}
                      <text
                        textAnchor="middle"
                        y={-18}
                        fontSize="18"
                        className="pointer-events-none drop-shadow-sm"
                        style={{ filter: 'drop-shadow(0px 1px 2px rgba(0,0,0,0.3))' }}
                      >
                        {location.flag}
                      </text>
                      
                      {/* Hover tooltip */}
                      {hoveredLocation === location.id && (
                        <g>
                          <rect
                            x={-45}
                            y={20}
                            width={90}
                            height={35}
                            fill={getMarkerColor()}
                            fillOpacity={0.9}
                            rx={8}
                            className="drop-shadow-lg"
                          />
                          <text
                            textAnchor="middle"
                            y={40}
                            fontSize="13"
                            fill="#ffffff"
                            className="font-bold"
                            style={{ filter: 'drop-shadow(0px 1px 1px rgba(0,0,0,0.5))' }}
                          >
                            {location.name}
                          </text>
                        </g>
                      )}
                    </motion.g>
                  </Marker>
                );
              })}
            </ZoomableGroup>
          </ComposableMap>
        </motion.div>

        {/* Enhanced Interactive Legend */}
        <div className="mt-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center">
            <HiGlobe className="mr-2 text-blue-600" />
            Service Locations ({serviceLocations.length})
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {serviceLocations.map((location) => (
              <motion.div 
                key={location.id} 
                className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 border ${
                  selectedLocation?.id === location.id 
                    ? 'bg-blue-100 border-blue-300 shadow-md' 
                    : hoveredLocation === location.id 
                      ? 'bg-gray-100 border-gray-300' 
                      : 'hover:bg-gray-50 border-gray-200'
                }`}
                onClick={() => setSelectedLocation(location)}
                onMouseEnter={() => setHoveredLocation(location.id)}
                onMouseLeave={() => setHoveredLocation(null)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-2 flex-1">
                  <span className="text-lg">{location.flag}</span>
                  <div>
                    <div className="text-sm font-medium text-gray-700">{location.country}</div>
                    <div className="text-xs text-gray-500">{location.cities.length} cities</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Controls */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <motion.button 
            onClick={() => {
              setSelectedLocation(null);
              setHoveredLocation(null);
            }}
            className="bg-white/90 hover:bg-white p-3 rounded-lg shadow-lg border border-gray-200 transition-all duration-200 hover:shadow-xl"
            title="Reset View"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </motion.button>
          
          <motion.button 
            onClick={() => {
              // Cycle through locations
              const currentIndex = serviceLocations.findIndex(loc => loc.id === selectedLocation?.id);
              const nextIndex = (currentIndex + 1) % serviceLocations.length;
              setSelectedLocation(serviceLocations[nextIndex]);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl"
            title="Next Location"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        {/* Global Stats Overlay */}
        <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg">
          <div className="text-center">
            <div className="text-lg font-bold">{serviceLocations.reduce((total, loc) => total + loc.cities.length, 0)}+</div>
            <div className="text-xs opacity-90">Cities Worldwide</div>
          </div>
        </div>
      </div>

      {/* Selected Location Details */}
      {selectedLocation && (
        <motion.div 
          className="location-details-enter mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <span className="text-3xl">{selectedLocation.flag}</span>
                <div className={`absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse`}></div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">{selectedLocation.name}</h4>
                <p className="text-blue-600 font-medium">Digital Marketing Hub</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedLocation(null)}
              className="text-gray-400 hover:text-gray-600 text-xl hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-200"
            >
              ✕
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HiLocationMarker className="mr-2 text-blue-600" />
                Service Areas ({selectedLocation.cities.length} cities):
              </h5>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {selectedLocation.cities.map((city, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200 text-sm text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:shadow-md transition-all duration-200 cursor-pointer group"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="group-hover:text-blue-700 font-medium">{city}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <h5 className="font-semibold text-gray-900 mb-3">Quick Stats</h5>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Cities Covered</span>
                  <span className="font-bold text-blue-600">{selectedLocation.cities.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Support Level</span>
                  <span className="text-green-600 font-medium text-sm">24/7</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Status</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-green-600 font-medium text-sm">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <div className="flex items-center text-sm text-gray-600">
              <div className={`w-3 h-3 bg-blue-500 rounded-full mr-2 animate-pulse`}></div>
              <span className="font-medium">Premium Service Region</span>
            </div>
            <div className="flex items-center text-sm text-blue-600">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
              <span className="font-medium">Local SEO Expertise</span>
            </div>
            <div className="flex items-center text-sm text-green-600">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              <span className="font-medium">Multi-Language Support</span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Enhanced Call to Action */}
      <div className="mt-8 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
          <p className="text-gray-700 mb-4 text-lg">
            {selectedLocation 
              ? `Exploring ${selectedLocation.name} • ${selectedLocation.cities.length} service areas available`
              : "Don't see your location? We provide services worldwide!"
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiLocationMarker className="mr-2" />
              Contact Us for Your Location
            </motion.a>
            
            {!selectedLocation && (
              <motion.button
                onClick={() => setSelectedLocation(serviceLocations[0])}
                className="inline-flex items-center px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiGlobe className="mr-2" />
                Explore Our Locations
              </motion.button>
            )}
          </div>
          
          {/* Quick Stats */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <motion.div 
              className="bg-white rounded-lg p-3 shadow-sm border border-gray-200"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl font-bold text-blue-600">{serviceLocations.length}</div>
              <div className="text-sm text-gray-600">Countries</div>
            </motion.div>
            <motion.div 
              className="bg-white rounded-lg p-3 shadow-sm border border-gray-200"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl font-bold text-green-600">{serviceLocations.reduce((total, loc) => total + loc.cities.length, 0)}+</div>
              <div className="text-sm text-gray-600">Cities</div>
            </motion.div>
            <motion.div 
              className="bg-white rounded-lg p-3 shadow-sm border border-gray-200"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl font-bold text-purple-600">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </motion.div>
            <motion.div 
              className="bg-white rounded-lg p-3 shadow-sm border border-gray-200"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl font-bold text-orange-600">∞</div>
              <div className="text-sm text-gray-600">Opportunities</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;