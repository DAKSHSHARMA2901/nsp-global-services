'use client';

import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslationSimple';

export default function JoinAgency() {
  const { t } = useTranslation();
  const socialCards = [
    {
      icon: "𝕏",
      platform: t('joinAgency.twitter'),
      handle: "@nspglobal",
      link: "https://www.twitter.com",
      bgColor: "bg-black"
    },
    {
      icon: "in",
      platform: t('joinAgency.linkedin'), 
      handle: "NSP Global Services",
      link: "https://www.linkedin.com/company/nsp-global-services/?originalSubdomain=in",
      bgColor: "bg-blue-700"
    },
    {
      icon: "f",
      platform: t('joinAgency.facebook'),
      handle: "NSP Global Services",
      link: "https://www.facebook.com/NSPGlobalServices",
      bgColor: "bg-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Text Content */}
          <div className="flex-1">
            <div className="mb-8">
              <p className="text-sm font-bold text-blue-800 uppercase mb-4 tracking-wider">
                {t('joinAgency.subtitle')}
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {t('joinAgency.title')}
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
              {t('joinAgency.description')}
            </p>
          </div>

          {/* Social Cards */}
          <div className="flex-1">
            <div className="space-y-6">
              {socialCards.map((social, index) => (
                <Link 
                  key={index}
                  href={social.link}
                  target="_blank"
                  className="flex items-center justify-between bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group card-hover"
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 ${social.bgColor} rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300`}>
                    {social.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-800 transition-colors">
                      {social.platform}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {social.handle}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
                    <span className="text-lg font-bold">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
