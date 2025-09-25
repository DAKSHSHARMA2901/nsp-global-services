'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslationSimple';

const WhyChoose = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      title: t('whyChoose.dataApproach.title'),
      description: t('whyChoose.dataApproach.description')
    },
    {
      title: t('whyChoose.competitivePricing.title'),
      description: t('whyChoose.competitivePricing.description')
    },
    {
      title: t('whyChoose.transparentCommunication.title'),
      description: t('whyChoose.transparentCommunication.description')
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('whyChoose.title')}
            </h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {t('whyChoose.subtitle')}
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('whyChoose.description')}
            </p>
            
            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed pl-4 border-l-2 border-blue-100 group-hover:border-blue-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Container */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://res.cloudinary.com/dyzdnyq0d/image/upload/v1738237917/24_20231024_191351_0000_kjrjpm.png"
                alt="Why Choose Us - Digital Growth Journey"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyVPonyRPonyRP9P4bOJ4vvfRd85xX6qjA7ycPMWGdLRkCqJCfROUP0HT/oTJRGEQDRRPo9/9k="
              />
              {/* Overlay for better image presentation */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
