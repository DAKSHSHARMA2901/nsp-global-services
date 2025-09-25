import React from 'react';
import Link from 'next/link';

interface SeoForByCharProps {
    char: string;
    paths: string[];
    convertStrings: string;
}

const SeoForByChar: React.FC<SeoForByCharProps> = ({ char, paths, convertStrings }) => {
    const formatName = (path: string) => {
        return path
            .replace(convertStrings, '') // Remove the prefix
            .replace(/-/g, ' ') // Replace hyphens with spaces
            .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word
    };

    // Filter paths that start with the given character
    const filteredPaths = paths.filter(path => {
        const name = formatName(path);
        return name.toLowerCase().startsWith(char.toLowerCase());
    });

    if (filteredPaths.length === 0) {
        return null;
    }

    return (
        <div className="mb-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 border-b-2 border-blue-200 pb-2">
                {char}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredPaths.map((path, index) => (
                    <Link 
                        key={index} 
                        href={path}
                        className="block p-3 bg-white rounded-lg shadow-md hover:shadow-lg hover:bg-blue-50 transition-all duration-200 border border-gray-200"
                    >
                        <span className="text-gray-700 hover:text-blue-600 font-medium">
                            {formatName(path)}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SeoForByChar;