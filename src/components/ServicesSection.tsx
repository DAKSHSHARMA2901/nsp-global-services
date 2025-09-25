'use client';

import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslationSimple';

export default function ServicesSection() {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: "💎",
      title: t('services.creativeStrategy.title'),
      description: t('services.creativeStrategy.description')
    },
    {
      icon: "📈",
      title: t('services.digitalSolution.title'),
      description: t('services.digitalSolution.description')
    },
    {
      icon: "🔗",
      title: t('services.analysisReport.title'),
      description: t('services.analysisReport.description')
    }
  ];

  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 mb-16">
          <div className="flex-1">
            <p className="text-sm font-bold text-blue-800 uppercase mb-4 tracking-wider">
              * {t('services.subtitle')}
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {t('services.title')}
            </h2>
          </div>
          
          <div className="flex-1 max-w-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {t('services.description')}
            </p>
            <div className="flex items-center gap-4">
              <Link 
                href="/services"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1"
              >
                {t('services.allServices')}
              </Link>
              <Link 
                href="/services"
                className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1"
              >
                →
              </Link>
            </div>
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-blue-600 text-white rounded-2xl p-8 card-hover transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div className="text-4xl text-green-400">{service.icon}</div>
                <div className="text-2xl text-green-400 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-blue-100 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
