import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

interface LocationCardProps {
  paths: string;
}

const LocationCard: React.FC<LocationCardProps> = ({ paths }) => {
  // Format location name from path
  const formatLocationName = (path: string) => {
    const locationName = path.replace('-seo-agency', '');
    return locationName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-700 transition-colors duration-300">
          <FaMapMarkerAlt className="text-white" size={20} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {formatLocationName(paths)}
          </h3>
          <p className="text-gray-600 text-sm">
            SEO & Digital Marketing Services
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;