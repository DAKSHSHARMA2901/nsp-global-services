import React from 'react';
import Link from 'next/link';

interface PPCServicesByCharProps {
  char: string;
  paths: string[];
  convertStrings?: string;
}

const PPCServicesByChar: React.FC<PPCServicesByCharProps> = ({ char, paths, convertStrings = "/ppc-services/" }) => {
  // Function to format service name from path
  const formatServiceName = (path: string) => {
    const serviceName = path.replace(convertStrings, '');
    return serviceName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Filter paths that start with the given character
  const filteredPaths = paths.filter(path => {
    const serviceName = formatServiceName(path);
    return serviceName.charAt(0).toUpperCase() === char;
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
          {char} - PPC Services ({filteredPaths.length})
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredPaths.map((path, index) => (
          <Link 
            key={index} 
            href={path}
            className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300 border border-gray-200"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  {formatServiceName(path)}
                </h3>
                <p className="text-xs text-gray-600">PPC Advertising</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PPCServicesByChar;