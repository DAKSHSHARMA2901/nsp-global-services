import React from 'react';
import Link from 'next/link';
import LocationCard from './LocationCard';

interface LocationListByCharProps {
  char: string;
  paths: string[];
}

const LocationListByChar: React.FC<LocationListByCharProps> = ({ char, paths }) => {
  // Function to format location name from path
  const formatLocationName = (path: string) => {
    const locationName = path.replace('/locations/', '').replace('-seo-agency', '');
    return locationName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Filter paths that start with the given character
  const filteredPaths = paths.filter(path => {
    const locationName = formatLocationName(path);
    // Ensure both locationName and char are normalized to uppercase
    const firstChar = locationName.length > 0 ? locationName.charAt(0).toUpperCase() : '';
    const targetChar = char && char.length === 1 ? char.toUpperCase() : '';
    return firstChar === targetChar;
  });

  if (filteredPaths.length === 0) {
    return null;
  }

  return (
    <div className="mb-12">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-6">
          <span className="text-white font-bold text-2xl">{char}</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900">
          {char} Locations ({filteredPaths.length})
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPaths.map((path, index) => (
          <Link 
            key={index} 
            href={path}
            className="block hover:transform hover:scale-105 transition-transform duration-300"
          >
            <LocationCard 
              paths={path.replace(/^\/(?:locations\/)?/, '')} 
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LocationListByChar;