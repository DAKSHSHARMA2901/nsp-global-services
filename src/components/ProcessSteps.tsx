'use client';

import { useTranslation } from '@/hooks/useTranslationSimple';

export default function ProcessSteps() {
  const { t } = useTranslation();
  const steps = [
    {
      number: "01",
      title: t('processSteps.discovery.title'),
      description: t('processSteps.discovery.description'),
      icon: "⬛"
    },
    {
      number: "02", 
      title: t('processSteps.implementation.title'),
      description: t('processSteps.implementation.description'),
      icon: "📚"
    },
    {
      number: "03",
      title: t('processSteps.collaboration.title'), 
      description: t('processSteps.collaboration.description'),
      icon: "🛢️"
    }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 mb-16">
          <div className="flex-1">
            <p className="text-sm font-bold text-blue-800 uppercase mb-4 tracking-wider">
              {t('processSteps.subtitle')}
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {t('processSteps.title')}
            </h2>
          </div>
          
          <div className="flex-1 max-w-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('processSteps.description')}
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-blue-600 rounded-2xl p-8 card-hover transition-all duration-300 group">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-blue-100 leading-relaxed">{step.description}</p>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-4xl font-bold text-blue-800">{step.number}</span>
                <span className="text-4xl text-blue-800 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
