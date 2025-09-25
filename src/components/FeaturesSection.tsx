'use client';

import { useTranslation } from '@/hooks/useTranslationSimple';

export default function FeaturesSection() {
  const { t } = useTranslation();
  const features = [
    {
      icon: "📊",
      title: t('features.analytics.title'),
      description: t('features.analytics.description'),
      color: "bg-blue-500"
    },
    {
      icon: "🎯",
      title: t('features.keywordResearch.title'),
      description: t('features.keywordResearch.description'),
      color: "bg-green-500"
    },
    {
      icon: "🔧",
      title: t('features.technicalSeo.title'),
      description: t('features.technicalSeo.description'),
      color: "bg-purple-500"
    },
    {
      icon: "📈",
      title: t('features.rankTracking.title'),
      description: t('features.rankTracking.description'),
      color: "bg-orange-500"
    },
    {
      icon: "🔗",
      title: t('features.backlinkAnalysis.title'),
      description: t('features.backlinkAnalysis.description'),
      color: "bg-pink-500"
    },
    {
      icon: "⚡",
      title: t('features.pageSpeed.title'),
      description: t('features.pageSpeed.description'),
      color: "bg-cyan-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-gray-50 rounded-xl p-8 h-full hover:shadow-lg transition-shadow duration-300">
                <div className={`w-16 h-16 ${feature.color} rounded-lg flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">{t('features.whyChoose.title')}</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 font-bold mr-4 mt-1">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{t('features.whyChoose.datadriven.title')}</h4>
                      <p className="text-blue-100">{t('features.whyChoose.datadriven.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 font-bold mr-4 mt-1">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{t('features.whyChoose.pricing.title')}</h4>
                      <p className="text-blue-100">{t('features.whyChoose.pricing.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 font-bold mr-4 mt-1">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{t('features.whyChoose.communication.title')}</h4>
                      <p className="text-blue-100">{t('features.whyChoose.communication.description')}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">{t('features.whyChoose.stats.years')}</div>
                  <div className="text-lg mb-4">{t('features.whyChoose.stats.yearsLabel')}</div>
                  <div className="text-4xl font-bold text-yellow-400 mb-2">{t('features.whyChoose.stats.projects')}</div>
                  <div className="text-lg mb-4">{t('features.whyChoose.stats.projectsLabel')}</div>
                  <div className="text-4xl font-bold text-yellow-400 mb-2">{t('features.whyChoose.stats.satisfaction')}</div>
                  <div className="text-lg">{t('features.whyChoose.stats.satisfactionLabel')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
