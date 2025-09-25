'use client';

import React, { useState } from 'react';

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'de', name: 'German', nativeName: 'Deutsch' },
    { code: 'es', name: 'Spanish', nativeName: 'Español' },
    { code: 'fr', name: 'French', nativeName: 'Français' },
    { code: 'it', name: 'Italian', nativeName: 'Italiano' },
    { code: 'ja', name: 'Japanese', nativeName: '日本語' },
    { code: 'nl', name: 'Dutch', nativeName: 'Nederlands' },
    { code: 'pl', name: 'Polish', nativeName: 'Polski' },
    { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
    { code: 'sv', name: 'Swedish', nativeName: 'Svenska' },
    { code: 'tr', name: 'Turkish', nativeName: 'Türkçe' },
    { code: 'zh', name: 'Chinese', nativeName: '中文' },
    { code: 'bg', name: 'Bulgarian', nativeName: 'Български' },
    { code: 'cs', name: 'Czech', nativeName: 'Čeština' },
    { code: 'da', name: 'Danish', nativeName: 'Dansk' },
    { code: 'el', name: 'Greek', nativeName: 'Ελληνικά' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-blue-800 uppercase mb-4 tracking-wider">
            GLOBAL REACH
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Available in Multiple Languages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We serve clients worldwide with multilingual support and localized strategies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Language List */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Languages</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 transition-colors duration-300 cursor-pointer group"
                  onClick={() => setSelectedLanguage(lang.name)}
                >
                  <div>
                    <span className="font-medium text-gray-900 group-hover:text-blue-600">
                      {lang.nativeName}
                    </span>
                    <span className="text-gray-500 ml-2">({lang.name})</span>
                  </div>
                  {selectedLanguage === lang.name && (
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Language Selector Demo */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Language Selector</h3>
              
              {/* Interactive Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-blue-300 transition-colors duration-300"
                >
                  <span className="font-medium text-gray-900">{selectedLanguage}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-10 max-h-60 overflow-y-auto">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setSelectedLanguage(lang.name);
                          setIsOpen(false);
                        }}
                        className="w-full text-left p-3 hover:bg-blue-50 transition-colors duration-300 flex items-center justify-between"
                      >
                        <div>
                          <span className="font-medium text-gray-900">{lang.nativeName}</span>
                          <span className="text-gray-500 ml-2">({lang.name})</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Global Stats */}
            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Global Impact</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-bold">16+</div>
                  <div className="text-blue-100">Languages Supported</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-blue-100">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to expand your business globally with multilingual SEO?
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all duration-300 hover:scale-105">
            Start Global Expansion
          </button>
        </div>
      </div>
    </section>
  );
};

export default LanguageSelector;