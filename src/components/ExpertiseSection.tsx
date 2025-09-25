'use client';

import { useTranslation } from '@/hooks/useTranslationSimple';

export default function ExpertiseSection() {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-blue-50 flex justify-center items-center flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container with gradient border like original */}
        <div className="p-16 lg:p-20 bg-blue-50 border-8 border-transparent bg-gradient-to-b from-blue-800 to-blue-50 rounded-3xl relative flex flex-col lg:flex-row gap-10">
          <div className="bg-blue-50 absolute inset-2 rounded-2xl"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-10">
            {/* Left Side - Title and Stats (50% width) */}
            <div className="flex-1 flex flex-col items-start w-full lg:w-1/2">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8 text-left">
                {t('expertise.title')}
              </h2>
              
              {/* Statistics Grid - side by side like original */}
              <div className="flex justify-between gap-8 w-full mb-8">
                <div className="bg-blue-600 text-white p-6 rounded-2xl text-center shadow-xl flex-1">
                  <p className="text-4xl lg:text-5xl font-bold mb-2 text-white">{t('expertise.boostRankings')}</p>
                  <p className="text-white text-lg">{t('expertise.boostRankingsLabel')}</p>
                </div>
                <div className="bg-blue-600 text-white p-6 rounded-2xl text-center shadow-xl flex-1">
                  <p className="text-4xl lg:text-5xl font-bold mb-2 text-white">{t('expertise.trafficGrowth')}</p>
                  <p className="text-white text-lg">{t('expertise.trafficGrowthLabel')}</p>
                </div>
              </div>
            </div>

            {/* Right Side - Services List (50% width) */}
            <div className="flex-1 flex flex-col gap-6 w-full lg:w-1/2">
              <div className="flex items-start flex-col text-lg leading-relaxed text-black">
                <div className="flex items-start">
                  <span className="text-blue-800 text-xl mr-2 flex-shrink-0">✳</span>
                  <span>
                    <strong>{t('expertise.socialMedia.title')}:</strong> {t('expertise.socialMedia.description')}
                  </span>
                </div>
              </div>
              
              <div className="flex items-start flex-col text-lg leading-relaxed text-black">
                <div className="flex items-start">
                  <span className="text-blue-800 text-xl mr-2 flex-shrink-0">✳</span>
                  <span>
                    <strong>{t('expertise.ecommerce.title')}:</strong> {t('expertise.ecommerce.description')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
