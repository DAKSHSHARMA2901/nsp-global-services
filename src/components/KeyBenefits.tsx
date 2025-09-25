'use client';

import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslationSimple';

export default function KeyBenefits() {
  const { t } = useTranslation();
  
  const benefits = [
    {
      id: 1,
      title: t('keyBenefits.seo.title'),
      description: t('keyBenefits.seo.description'),
      icon: "📋",
      href: '/seo-services'
    },
    {
      id: 2,
      title: t('keyBenefits.ppc.title'),
      description: t('keyBenefits.ppc.description'),
      icon: "⚙️",
      href: '/ppc-services'
    },
    {
      id: 3,
      title: t('keyBenefits.webDesign.title'),
      description: t('keyBenefits.webDesign.description'),
      icon: "📊",
      href: '/design-development'
    },
    {
      id: 4,
      title: t('keyBenefits.appDesign.title'),
      description: t('keyBenefits.appDesign.description'),
      icon: "🤖",
      href: '/contact'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 mb-16">
          <div className="flex-1">
            <p className="text-sm font-bold text-blue-800 uppercase mb-4 tracking-wider">
              HOW IT WORK
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Our Core <span className="text-blue-800">Services</span>
            </h2>
          </div>
          
          <div className="flex-1 max-w-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              Boost your online presence and climb search rankings with our proven SEO strategies. By leveraging ethical, white-hat techniques, we increase organic traffic, improve conversion rates, and ensure long-term visibility across search engines like Google.
            </p>
          </div>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 card-hover group">
              {/* Card Header */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-3xl font-bold text-blue-800 bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center">
                  {benefit.id.toString().padStart(2, "0")}
                </span>
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </span>
              </div>

              {/* Card Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-800 transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                {benefit.description}
              </p>

              {/* Read More Link */}
              <Link 
                href={benefit.href}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group/link"
              >
                <span>Read More</span>
                <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
