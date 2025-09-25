'use client';

import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslationSimple';

export default function StatsSection() {
  const { t } = useTranslation();
  
  const stats = [
    {
      number: t('stats.clients'),
      label: t('stats.clientsLabel'),
      description: "Businesses trust our platform",
      icon: "👥"
    },
    {
      number: "60%",
      label: "Boost in Rankings",
      description: "Average organic ranking improvement",
      icon: "📈"
    },
    {
      number: "30%",
      label: "Traffic Growth",
      description: "Month-on-month increase",
      icon: "🚀"
    },
    {
      number: t('stats.experience'),
      label: t('stats.experienceLabel'),
      description: "Proven track record",
      icon: "⭐"
    }
  ];

  const companyLogos = [
    { name: "Google Partner", color: "text-blue-600" },
    { name: "Microsoft Certified", color: "text-green-600" },
    { name: "Meta Business Partner", color: "text-blue-500" },
    { name: "HubSpot Certified", color: "text-orange-500" },
    { name: "Shopify Partner", color: "text-green-500" },
    { name: "WordPress Expert", color: "text-gray-700" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by 140,000+ Users Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful businesses who have transformed their digital presence with our proven strategies.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-gray-600 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Company Partnerships */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Certified Partners & Trusted By
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {companyLogos.map((company, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center min-h-[80px]"
              >
                <span className={`font-semibold text-sm text-center ${company.color}`}>
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Badges */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Industry Recognition & Awards
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by leading industry organizations and review platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Top SEO Agency 2024</h4>
              <p className="text-gray-600 text-sm">Recognized by Digital Marketing Institute</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">5-Star Rating</h4>
              <p className="text-gray-600 text-sm">Average across all review platforms</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Fast Growing Company</h4>
              <p className="text-gray-600 text-sm">Inc. 5000 List Honoree</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Join Our Success Stories?
              </h4>
              <p className="text-gray-600 mb-6">
                Get a free SEO audit and discover how we can help you achieve similar results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  Get Free Audit
                </Link>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
