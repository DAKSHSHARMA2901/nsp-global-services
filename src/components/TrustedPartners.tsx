'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslationSimple';

const TrustedPartners = () => {
    const { t } = useTranslation();
    const clientLogos = [
        {
            url: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1737454347/23_20231018_185354_0001_lfvha2.png",
            alt: "T♡H Mental Happiness - Digital Marketing Success Story"
        },
        {
            url: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1737454347/35_20231018_185355_0013_yghe0c.png", 
            alt: "Industrial Engineering Services - SEO Case Study"
        },
        {
            url: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1737454347/40_20231018_185355_0018_akatys.png",
            alt: "FindMyMua Beauty Platform - Digital Growth Results"
        },
        {
            url: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1737454346/38_20231018_185355_0016_nmwjxq.png",
            alt: "QC Aeschem Analytics - Marketing Campaign Success"
        },
        {
            url: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1737454346/17_20231017_185043_0007_drfdnl.png",
            alt: "BlissfulPlans Venture - Brand Development Project"
        },
        {
            url: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1737454346/29_20231018_185355_0007_uyov8n.png",
            alt: "Flowres MyMRPlace - E-commerce SEO Success"
        },
        {
            url: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1737454346/41_20231018_185355_0019_nsxyom.png",
            alt: "TripLou Travel Platform - Digital Marketing Results"
        },
        {
            url: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1737454346/26_20231018_185355_0004_xivfik.png",
            alt: "BlitzEazy Technology - Web Development Project"
        },
        {
            url: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1737454346/27_20231018_185355_0005_wbhwtf.png",
            alt: "Soft Launch Startup - Brand Strategy Success"
        },
        {
            url: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1737454345/28_20231018_185355_0006_vjp0q9.png",
            alt: "MyMRPlace Healthcare - SEO Optimization Results"
        },
        {
            url: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1737454345/25_20231018_185355_0003_hagr1f.png",
            alt: "Digital Marketing Client Portfolio - Growth Results"
        },
        {
            url: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1737454343/33_20231018_185355_0011_zqr7x7.png",
            alt: "Business Growth Client - SEO Success Story"
        }
    ];

    return (
        <section className="py-20 bg-blue-600 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-10 right-10 w-32 h-32 border-4 border-white/20 rounded-full"></div>
            <div className="absolute bottom-10 right-20 text-white/10 text-8xl font-bold transform rotate-12">
                GET
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        {t('trustedPartners.title')}
                    </h2>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        {t('trustedPartners.description')}
                    </p>
                </div>

                {/* Marquee for Client Logos */}
                <div className="w-full overflow-hidden bg-white/10 backdrop-blur-sm py-8 rounded-2xl mb-12">
                    <div className="flex whitespace-nowrap animate-marquee-slow">
                        {/* First set of logos */}
                        {clientLogos.map((logo, index) => (
                            <div key={index} className="inline-block mx-4 bg-white rounded-lg p-4 min-w-[160px] shadow-lg hover:shadow-xl transition-all duration-300">
                                <Image
                                    src={logo.url}
                                    alt={logo.alt}
                                    width={160}
                                    height={64}
                                    className="w-full h-16 object-contain"
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyVPonyRPonyRP9P4bOJ4vvfRd85xX6qjA7ycPMWGdLRkCqJCfROUP0HT/oTJRGEQDRRPo9/9k="
                                />
                            </div>
                        ))}
                        {/* Duplicate for seamless loop */}
                        {clientLogos.map((logo, index) => (
                            <div key={`duplicate-${index}`} className="inline-block mx-4 bg-white rounded-lg p-4 min-w-[160px] shadow-lg hover:shadow-xl transition-all duration-300">
                                <Image
                                    src={logo.url}
                                    alt={logo.alt}
                                    width={160}
                                    height={64}
                                    className="w-full h-16 object-contain"
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyVPonyRPonyRP9P4bOJ4vvfRd85xX6qjA7ycPMWGdLRkCqJCfROUP0HT/oTJRGEQDRRPo9/9k="
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <p className="text-blue-100 mb-6 text-lg">
                        {t('trustedPartners.cta')}
                    </p>
                    <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
                        {t('trustedPartners.button')}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TrustedPartners;
