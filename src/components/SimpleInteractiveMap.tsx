'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiLocationMarker, HiGlobe } from 'react-icons/hi';

interface MapLocation {
  id: string;
  name: string;
  country: string;
  flag: string;
  cities: string[];
  color: string;
}

const SimpleInteractiveMap: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  // Service locations
  const serviceLocations: MapLocation[] = [
    {
      id: 'usa',
      name: 'United States',
      country: 'USA',
      flag: '🇺🇸',
      cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami', 'San Francisco', 'Boston', 'Seattle', 'Austin', 'Denver', 'Phoenix', 'Las Vegas'],
      color: 'bg-blue-500'
    },
    {
      id: 'uk',
      name: 'United Kingdom',
      country: 'UK',
      flag: '🇬🇧',
      cities: ['London', 'Manchester', 'Birmingham', 'Liverpool', 'Bristol', 'Edinburgh', 'Glasgow', 'Leeds', 'Sheffield', 'Brighton'],
      color: 'bg-red-500'
    },
    {
      id: 'canada',
      name: 'Canada',
      country: 'Canada',
      flag: '🇨🇦',
      cities: ['Toronto', 'Vancouver', 'Calgary', 'Ottawa', 'Edmonton', 'Mississauga'],
      color: 'bg-green-500'
    },
    {
      id: 'australia',
      name: 'Australia',
      country: 'Australia',
      flag: '🇦🇺',
      cities: ['Sydney', 'Melbourne', 'Perth', 'Adelaide', 'Darwin', 'Hobart', 'Gold Coast', 'Geelong'],
      color: 'bg-yellow-500'
    },
    {
      id: 'singapore',
      name: 'Singapore',
      country: 'Singapore',
      flag: '🇸🇬',
      cities: ['Singapore'],
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Global Service Network</h3>
        <p className="text-gray-700 mb-4">
          Discover our worldwide presence • Click on any location to explore our services
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
          </motion.div>
        )}
      </div>

      {/* Visual World Map Representation */}
      <div className="relative bg-gradient-to-b from-blue-100 to-blue-50 rounded-xl p-8 mb-8" style={{ height: '400px' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl"></div>
        
        {/* Simplified world map with country cards positioned geographically */}
        <div className="relative h-full">
          {/* USA */}
          <motion.div 
            className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: '25%', top: '40%' }}
            onMouseEnter={() => setHoveredLocation('usa')}
            onMouseLeave={() => setHoveredLocation(null)}
            onClick={() => setSelectedLocation(serviceLocations[0])}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={`bg-white rounded-lg p-4 shadow-lg border-2 transition-all duration-300 ${
              selectedLocation?.id === 'usa' ? 'border-blue-500 bg-blue-50' : 
              hoveredLocation === 'usa' ? 'border-blue-300' : 'border-gray-200'
            }`}>
              <div className="text-center">
                <div className="text-2xl mb-1">🇺🇸</div>
                <div className="font-bold text-sm text-gray-800">United States</div>
                <div className="text-xs text-gray-600">{serviceLocations[0].cities.length} cities</div>
              </div>
            </div>
          </motion.div>

          {/* UK */}
          <motion.div 
            className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: '50%', top: '30%' }}
            onMouseEnter={() => setHoveredLocation('uk')}
            onMouseLeave={() => setHoveredLocation(null)}
            onClick={() => setSelectedLocation(serviceLocations[1])}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={`bg-white rounded-lg p-4 shadow-lg border-2 transition-all duration-300 ${
              selectedLocation?.id === 'uk' ? 'border-red-500 bg-red-50' : 
              hoveredLocation === 'uk' ? 'border-red-300' : 'border-gray-200'
            }`}>
              <div className="text-center">
                <div className="text-2xl mb-1">🇬🇧</div>
                <div className="font-bold text-sm text-gray-800">United Kingdom</div>
                <div className="text-xs text-gray-600">{serviceLocations[1].cities.length} cities</div>
              </div>
            </div>
          </motion.div>

          {/* Canada */}
          <motion.div 
            className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: '22%', top: '25%' }}
            onMouseEnter={() => setHoveredLocation('canada')}
            onMouseLeave={() => setHoveredLocation(null)}
            onClick={() => setSelectedLocation(serviceLocations[2])}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={`bg-white rounded-lg p-4 shadow-lg border-2 transition-all duration-300 ${
              selectedLocation?.id === 'canada' ? 'border-green-500 bg-green-50' : 
              hoveredLocation === 'canada' ? 'border-green-300' : 'border-gray-200'
            }`}>
              <div className="text-center">
                <div className="text-2xl mb-1">🇨🇦</div>
                <div className="font-bold text-sm text-gray-800">Canada</div>
                <div className="text-xs text-gray-600">{serviceLocations[2].cities.length} cities</div>
              </div>
            </div>
          </motion.div>

          {/* Australia */}
          <motion.div 
            className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: '75%', top: '75%' }}
            onMouseEnter={() => setHoveredLocation('australia')}
            onMouseLeave={() => setHoveredLocation(null)}
            onClick={() => setSelectedLocation(serviceLocations[3])}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={`bg-white rounded-lg p-4 shadow-lg border-2 transition-all duration-300 ${
              selectedLocation?.id === 'australia' ? 'border-yellow-500 bg-yellow-50' : 
              hoveredLocation === 'australia' ? 'border-yellow-300' : 'border-gray-200'
            }`}>
              <div className="text-center">
                <div className="text-2xl mb-1">🇦🇺</div>
                <div className="font-bold text-sm text-gray-800">Australia</div>
                <div className="text-xs text-gray-600">{serviceLocations[3].cities.length} cities</div>
              </div>
            </div>
          </motion.div>

          {/* Singapore */}
          <motion.div 
            className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: '68%', top: '60%' }}
            onMouseEnter={() => setHoveredLocation('singapore')}
            onMouseLeave={() => setHoveredLocation(null)}
            onClick={() => setSelectedLocation(serviceLocations[4])}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={`bg-white rounded-lg p-4 shadow-lg border-2 transition-all duration-300 ${
              selectedLocation?.id === 'singapore' ? 'border-purple-500 bg-purple-50' : 
              hoveredLocation === 'singapore' ? 'border-purple-300' : 'border-gray-200'
            }`}>
              <div className="text-center">
                <div className="text-2xl mb-1">🇸🇬</div>
                <div className="font-bold text-sm text-gray-800">Singapore</div>
                <div className="text-xs text-gray-600">{serviceLocations[4].cities.length} cities</div>
              </div>
            </div>
          </motion.div>

          {/* Global Stats Overlay */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg">
            <div className="text-center">
              <div className="text-lg font-bold">{serviceLocations.reduce((total, loc) => total + loc.cities.length, 0)}+</div>
              <div className="text-xs opacity-90">Cities Worldwide</div>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Location Details */}
      {selectedLocation && (
        <motion.div 
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <span className="text-3xl">{selectedLocation.flag}</span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
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
        </motion.div>
      )}

      {/* Call to Action */}
      <div className="mt-8 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
          <p className="text-gray-700 mb-4 text-lg">
            {selectedLocation 
              ? `Exploring ${selectedLocation.name} • ${selectedLocation.cities.length} service areas available`
              : "Discover how we can help your business grow globally!"
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
              Contact Us Today
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

export default SimpleInteractiveMap;