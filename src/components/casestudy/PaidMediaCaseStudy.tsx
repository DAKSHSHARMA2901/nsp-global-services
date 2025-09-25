'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface PaidMediaCaseStudyProps {
  heading: string;
}

const PaidMediaCaseStudy: React.FC<PaidMediaCaseStudyProps> = ({ heading }) => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-900 to-green-700 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {heading} PPC Services & Digital Advertising
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Expert pay-per-click advertising solutions tailored for {heading.toLowerCase()} businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Get Free {heading} PPC Consultation
              </Link>
              <Link 
                href="/ppc-services"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-green-900 text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                View All PPC Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2">300%</div>
              <div className="text-gray-600">Average ROI Increase</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-gray-600">Lead Quality Improvement</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Campaign Monitoring</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Successful Campaigns</div>
            </div>
          </div>
        </div>
      </div>

      {/* Industry-Specific Benefits */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why {heading} Choose Our PPC Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges and opportunities in the {heading.toLowerCase()} industry. 
              Our specialized approach delivers targeted results that drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Industry Expertise</h3>
              <p className="text-gray-600">
                Deep understanding of {heading.toLowerCase()} market trends, customer behavior, and competitive landscape.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Targeted Campaigns</h3>
              <p className="text-gray-600">
                Precision-targeted ads that reach the right {heading.toLowerCase()} customers at the optimal moment.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">ROI Optimization</h3>
              <p className="text-gray-600">
                Continuous optimization to maximize your advertising budget and deliver measurable results.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our {heading} PPC Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive digital advertising solutions designed for {heading.toLowerCase()} success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Google Ads Management</h3>
              <p className="text-gray-600 mb-4">
                Professional Google Ads campaigns optimized for {heading.toLowerCase()} keywords and audiences.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Search Campaigns</li>
                <li>• Display Advertising</li>
                <li>• Shopping Ads</li>
                <li>• Video Campaigns</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Social Media Advertising</h3>
              <p className="text-gray-600 mb-4">
                Targeted social media campaigns across platforms where your {heading.toLowerCase()} customers are active.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Facebook Ads</li>
                <li>• Instagram Advertising</li>
                <li>• LinkedIn Campaigns</li>
                <li>• Twitter Promotion</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Landing Page Optimization</h3>
              <p className="text-gray-600 mb-4">
                High-converting landing pages designed specifically for {heading.toLowerCase()} campaigns.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• A/B Testing</li>
                <li>• Conversion Optimization</li>
                <li>• Mobile Optimization</li>
                <li>• Performance Analytics</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Keyword Research</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive keyword analysis for {heading.toLowerCase()} industry terms and customer intent.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Competitor Analysis</li>
                <li>• Search Volume Research</li>
                <li>• Long-tail Keywords</li>
                <li>• Negative Keywords</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Campaign Analytics</h3>
              <p className="text-gray-600 mb-4">
                Detailed reporting and analytics to track your {heading.toLowerCase()} campaign performance.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• ROI Tracking</li>
                <li>• Conversion Monitoring</li>
                <li>• Custom Dashboards</li>
                <li>• Regular Reports</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Budget Management</h3>
              <p className="text-gray-600 mb-4">
                Smart budget allocation and bid management to maximize your {heading.toLowerCase()} advertising ROI.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Bid Optimization</li>
                <li>• Budget Allocation</li>
                <li>• Cost Control</li>
                <li>• Performance Monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our {heading} PPC Process
            </h2>
            <p className="text-lg text-gray-600">
              A proven methodology that delivers results for {heading.toLowerCase()} businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Discovery & Analysis</h3>
              <p className="text-gray-600">
                We analyze your {heading.toLowerCase()} business, competitors, and market opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Strategy Development</h3>
              <p className="text-gray-600">
                Custom PPC strategy tailored to your {heading.toLowerCase()} goals and budget.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Campaign Launch</h3>
              <p className="text-gray-600">
                Professional setup and launch of your {heading.toLowerCase()} PPC campaigns.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Optimization & Growth</h3>
              <p className="text-gray-600">
                Continuous optimization to improve performance and scale your {heading.toLowerCase()} results.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Grow Your {heading} Business?
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Let our PPC experts create a customized advertising strategy that drives qualified leads 
            and grows your {heading.toLowerCase()} business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Get Free {heading} PPC Consultation
            </Link>
            <Link 
              href="/ppc-services"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-900 text-white font-bold py-4 px-8 rounded-lg transition-colors"
            >
              View All PPC Services
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PaidMediaCaseStudy;