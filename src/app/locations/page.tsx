import React from 'react';
import Link from 'next/link';
import { HiLocationMarker, HiGlobe } from 'react-icons/hi';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LocationListByChar from '@/components/LocationListByChar';
import InteractiveMap from '@/components/InteractiveMap';

export const metadata: Metadata = {
  title: "Digital Marketing Agency Locations | NSP Global Services",
  description: "Explore NSP Global Services' worldwide presence and find our strategic locations to better serve your business needs. Visit our website to discover more about our global reach.",
  alternates: {
    canonical: "https://www.nspglobalservices.com/locations",
  },
};

export default function LocationsPage() {
  const paths = [
    '/locations/leeds-seo-agency',
    '/locations/newcastle-seo-agency',
    '/locations/bath-seo-agency',
    '/locations/bend-oregon-seo-agency',
    '/locations/blackpool-seo-agency',
    '/locations/darwin-seo-agency',
    '/locations/fort-worth-seo-agency',
    '/locations/gold-coast-seo-agency',
    '/locations/hertfordshire-seo-agency',
    '/locations/hobart-seo-agency',
    '/locations/huddersfield-seo-agency',
    '/locations/northampton-seo-agency',
    '/locations/peterborough-seo-agency',
    '/locations/preston-seo-agency',
    '/locations/geelong-seo-agency',
    '/locations/guildford-seo-agency',
    '/locations/ottawa-seo-agency',
    '/locations/KL-seo-agency',
    '/locations/pasadena-seo-agency',
    '/locations/chelmsford-seo-agency',
    '/locations/exeter-seo-agency',
    '/locations/essex-seo-agency',
    '/locations/doncaster-seo-agency',
    '/locations/leicester-seo-agency',
    '/locations/memphis-seo-agency',
    '/locations/mesa-az-seo-agency',
    '/locations/mississauga-seo-agency',
    '/locations/newcastle-upon-tyne-seo-agency',
    '/locations/oxford-seo-agency',
    '/locations/reading-seo-agency',
    '/locations/california-seo-agency',
    '/locations/florida-seo-agency',
    '/locations/yorkshire-seo-agency',
    '/locations/texas-seo-agency',
    '/locations/thailand-seo-agency',
    '/locations/west-sussex-seo-agency',
    '/locations/singapore-seo-agency',
    '/locations/sydney-seo-agency',
    '/locations/wiltshire-seo-agency',
    '/locations/worthing-seo-agency',
    '/locations/london-seo-agency',
    '/locations/los-angeles-seo-agency',
    '/locations/birmingham-seo-agency',
    '/locations/chicago-seo-agency',
    '/locations/liverpool-seo-agency',
    '/locations/houston-seo-agency',
    '/locations/miami-seo-agency',
    '/locations/UK-seo-agency',
    '/locations/san-francisco-seo-agency',
    '/locations/colchester-seo-agency',
    '/locations/vancouver-seo-agency',
    '/locations/melbourne-seo-agency',
    '/locations/seattle-seo-agency',
    '/locations/boston-seo-agency',
    '/locations/australia-seo-agency',
    '/locations/canada-seo-agency',
    '/locations/virginia-seo-agency',
    '/locations/washington-DC-seo-agency',
    '/locations/new-york-seo-agency',
    '/locations/bristol-seo-agency',
    '/locations/edinburgh-seo-agency',
    '/locations/lancashire-seo-agency',
    '/locations/brighton-seo-agency',
    '/locations/USA-seo-agency-',
    '/locations/calgary-seo-agency',
    '/locations/jacksonville-seo-agency',
    '/locations/nottingham-seo-agency',
    '/locations/hornchurch-seo-agency',
    '/locations/philadelphia-seo-agency',
    '/locations/austin-seo-agency',
    '/locations/denver-seo-agency',
    '/locations/abu-dhabi-seo-agency',
    '/locations/adelaide-seo-agency',
    '/locations/edmonton-seo-agency',
    '/locations/perth-seo-agency',
    '/locations/toronto-seo-agency',
    '/locations/auckland-seo-agency',
    '/locations/san-jose-seo-agency',
    '/locations/las-vegas-seo-agency',
    '/locations/new-zealand-seo-agency',
    '/locations/phoenix-seo-agency',
    '/locations/utah-seo-agency',
    '/locations/brooklyn-seo-agency',
    '/locations/buffalo-seo-agency',
    '/locations/online-seo-agency',
    '/locations/outsourcing-seo-agency',
    '/locations/bolton-seo-agency',
    '/locations/charleston-sc-seo-agency',
    '/locations/devon-seo-agency',
    '/locations/bognor-regis-seo-agency',
    '/locations/geelong-seo-agency',
    '/locations/hampshire-seo-agency',
    '/locations/san-diego-seo-agency',
    '/locations/swindon-seo-agency',
    '/locations/switzerland-seo-agency',
    '/locations/scotland-seo-agency',
    '/locations/sheffield-seo-agency',
    '/locations/shoreditch-seo-agency',
    '/locations/slough-seo-agency',
    '/locations/swansea-seo-agency',
    '/locations/manchester-seo-agency',
    '/locations/cambridge-seo-agency',
    '/locations/portsmouth-seo-agency',
    '/locations/norwich-seo-agency',
    '/locations/cheltenham-seo-agency',
    '/locations/berkshire-seo-agency',
    '/locations/maidstone-seo-agency',
    '/locations/aylesbury-seo-agency',
    '/locations/worcester-seo-agency',
    '/locations/belfast-seo-agency',
    '/locations/cardiff-seo-agency',
    '/locations/bradford-seo-agency',
    '/locations/glasgow-seo-agency',
    '/locations/aberdeen-seo-agency',
    '/locations/luton-seo-agency',
    '/locations/southampton-seo-agency',
    '/locations/st-albans-seo-agency',
    '/locations/bedford-seo-agency',
    '/locations/coventry-seo-agency',
    '/locations/buckinghamshire-seo-agency',
    '/locations/milton-keynes-seo-agency',
    '/locations/wokingham-seo-agency',
    '/locations/basingstoke-seo-agency',
    '/locations/high-wycombe-seo-agency',
    '/locations/romford-seo-agency',
  ];

  const alphabet = 'ABCDEFGHJKLMNOPRSTUVWY'.split('');

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Banner Section */}
        <div className="relative min-h-screen bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center overflow-hidden">
        {/* Background animations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-400 text-blue-900 rounded-full text-sm font-bold uppercase tracking-wider mb-8">
            ★ GLOBAL PRESENCE
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-blue-100 mb-6 leading-tight">
            Our Locations
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-12 leading-relaxed max-w-3xl mx-auto">
            Explore NSP Global Services' worldwide presence and find our strategic locations to better serve your business needs
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-blue-800 uppercase mb-4 tracking-wider">
              * WORLDWIDE REACH
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Global Network
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Our strategic locations ensure we can provide exceptional service wherever you are
            </p>
          </div>

          {/* Interactive Map Display */}
          <InteractiveMap />
        </div>
      </div>

      {/* Locations Listing Section - Using Original Component Structure */}
      <div className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-blue-800 uppercase mb-4 tracking-wider">
              * ALL LOCATIONS
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Browse by Location
            </h2>
            <p className="text-lg text-gray-700">
              Find digital marketing services in your area
            </p>
          </div>

          {/* Alphabetical Listing using original component */}
          <div className="space-y-12">
            {alphabet.map((letter) => (
              <LocationListByChar key={letter} char={letter} paths={paths} />
            ))}
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-blue-800 uppercase mb-4 tracking-wider">
              * POPULAR LOCATIONS
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Featured Cities
            </h2>
            <p className="text-lg text-gray-700">
              Our most popular service locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { path: '/locations/london-seo-agency', name: 'London' },
              { path: '/locations/new-york-seo-agency', name: 'New York' },
              { path: '/locations/sydney-seo-agency', name: 'Sydney' },
              { path: '/locations/toronto-seo-agency', name: 'Toronto' },
              { path: '/locations/singapore-seo-agency', name: 'Singapore' },
              { path: '/locations/los-angeles-seo-agency', name: 'Los Angeles' },
              { path: '/locations/melbourne-seo-agency', name: 'Melbourne' },
              { path: '/locations/manchester-seo-agency', name: 'Manchester' }
            ].map((location, index) => (
              <Link 
                key={index}
                href={location.path}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors duration-300">
                    <HiLocationMarker className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {location.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Digital Marketing Services
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-100 mb-6">
            Don't See Your Location?
          </h2>
          <p className="text-xl text-blue-200 mb-8 leading-relaxed">
            We provide digital marketing services globally. Contact us to discuss how we can help your business succeed in your location.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-xl hover:bg-yellow-300 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <HiLocationMarker className="mr-2" size={24} />
            Contact Us Today
          </Link>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}