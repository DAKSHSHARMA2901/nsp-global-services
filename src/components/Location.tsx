'use client';

import React from 'react';
import Link from 'next/link';
import { 
  HiLocationMarker, 
  HiPhone, 
  HiMail, 
  HiGlobe,
  HiChartBar,
  HiSearchCircle,
  HiTrendingUp,
  HiUsers,
  HiStar,
  HiCheckCircle
} from 'react-icons/hi';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram,
  FaGoogle,
  FaChartLine
} from 'react-icons/fa';
import { useTranslation } from '@/hooks/useTranslationSimple';

interface LocationProps {
  heading: string;
  subtitle: string;
  locationSlug?: string;
}

export default function Location({ heading, subtitle, locationSlug }: LocationProps) {
  const { t } = useTranslation();

  const services = [
    {
      icon: HiSearchCircle,
      title: 'Local SEO',
      description: `Dominate local search results in ${subtitle} with our targeted local SEO strategies.`
    },
    {
      icon: HiChartBar,
      title: 'SEO Analytics',
      description: 'Comprehensive reporting and analytics to track your SEO performance and ROI.'
    },
    {
      icon: HiTrendingUp,
      title: 'Keyword Optimization',
      description: 'Strategic keyword research and optimization to increase your search rankings.'
    },
    {
      icon: HiUsers,
      title: 'Content Marketing',
      description: 'Engaging content that attracts customers and builds your brand authority.'
    },
    {
      icon: FaGoogle,
      title: 'Google My Business',
      description: 'Optimize your Google My Business profile for maximum local visibility.'
    },
    {
      icon: FaChartLine,
      title: 'Performance Tracking',
      description: 'Monitor your website performance and search engine rankings continuously.'
    }
  ];

  const features = [
    'Free SEO Audit & Consultation',
    'Local Business Directory Listings',
    'Google My Business Optimization',
    'Mobile-Friendly Website Design',
    'Social Media Integration',
    'Monthly Performance Reports',
    '24/7 Customer Support',
    'Proven Track Record'
  ];

  return (
    <>
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
            ★ {subtitle.toUpperCase()} SEO EXPERTS
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-blue-100 mb-6 leading-tight">
            {heading}
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-12 leading-relaxed max-w-3xl mx-auto">
            Boost your {subtitle} business with our proven SEO strategies. Get more customers, increase revenue, and dominate local search results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-xl hover:bg-yellow-300 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <HiPhone className="mr-2" size={24} />
              Get Free SEO Audit
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white/10 text-blue-100 font-bold rounded-xl hover:bg-white/20 transition-colors duration-300 border-2 border-white/30"
            >
              <HiMail className="mr-2" size={24} />
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-blue-800 uppercase mb-4 tracking-wider">
              * OUR SERVICES
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              SEO Services in {subtitle}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored for {subtitle} businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors duration-300">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-bold text-blue-800 uppercase mb-4 tracking-wider">
                * WHY CHOOSE US
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {subtitle}'s #1 SEO Agency
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                With years of experience helping {subtitle} businesses grow online, we understand the local market and know what it takes to get results.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <HiCheckCircle className="text-blue-600 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <HiTrendingUp className="mr-2" size={24} />
                Start Growing Today
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Free SEO Analysis
                </h3>
                <p className="text-gray-600">
                  Get a comprehensive analysis of your website's SEO performance
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <HiStar className="text-yellow-400 mr-2" size={24} />
                    <span className="font-bold text-gray-900">5-Star Rated Agency</span>
                  </div>
                  <p className="text-gray-600">
                    Trusted by 500+ businesses in {subtitle} and surrounding areas
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <HiChartBar className="text-blue-600 mr-2" size={24} />
                    <span className="font-bold text-gray-900">Proven Results</span>
                  </div>
                  <p className="text-gray-600">
                    Average 300% increase in organic traffic within 6 months
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <HiLocationMarker className="text-green-600 mr-2" size={24} />
                    <span className="font-bold text-gray-900">Local Expertise</span>
                  </div>
                  <p className="text-gray-600">
                    Deep understanding of the {subtitle} market and competition
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-100 mb-6">
            Ready to Dominate {subtitle} Search Results?
          </h2>
          <p className="text-xl text-blue-200 mb-8 leading-relaxed">
            Contact NSP Global Services today for a free consultation and see how we can help your business grow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="tel:+447436220544"
              className="inline-flex items-center px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-xl hover:bg-yellow-300 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <HiPhone className="mr-2" size={24} />
              Call +44 7436 220544
            </a>
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white/10 text-blue-100 font-bold rounded-xl hover:bg-white/20 transition-colors duration-300 border-2 border-white/30"
            >
              <HiMail className="mr-2" size={24} />
              Get Free Quote
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-4">
            <a 
              href="https://facebook.com/nspglobal" 
              target="_blank" 
              rel="noreferrer"
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300 border border-white/30"
            >
              <FaFacebookF className="text-blue-100" size={20} />
            </a>
            <a 
              href="https://twitter.com/nspglobal" 
              target="_blank" 
              rel="noreferrer"
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300 border border-white/30"
            >
              <FaTwitter className="text-blue-100" size={20} />
            </a>
            <a 
              href="https://linkedin.com/company/nspglobal" 
              target="_blank" 
              rel="noreferrer"
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300 border border-white/30"
            >
              <FaLinkedinIn className="text-blue-100" size={20} />
            </a>
            <a 
              href="https://instagram.com/nspglobal" 
              target="_blank" 
              rel="noreferrer"
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300 border border-white/30"
            >
              <FaInstagram className="text-blue-100" size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
