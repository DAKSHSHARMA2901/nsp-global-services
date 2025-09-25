'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslationSimple';
import InteractiveWaves from './InteractiveWaves';

// Dynamically import Typed for client-side only
let Typed: any = null;
if (typeof window !== 'undefined') {
  import('typed.js').then((module) => {
    Typed = module.default;
  });
}

export default function HeroSection() {
  const { t } = useTranslation();
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (Typed && typedRef.current) {
      const typedStrings = t('hero.typedStrings');
      const strings = Array.isArray(typedStrings) ? typedStrings : ["Digital Marketing", "Paid Advertisement", "Website Development", "Mobile App Development"];
      
      const options = {
        strings,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000,
        loop: true,
      };

      const typed = new Typed(typedRef.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, [t]);

  return (
    <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden min-h-screen">
      {/* Interactive Waves Background */}
      <InteractiveWaves 
        lineColor="rgba(255, 255, 255, 0.2)"
        backgroundColor="transparent"
        waveSpeedX={0.0125}
        waveSpeedY={0.005}
        waveAmpX={32}
        waveAmpY={16}
        xGap={10}
        yGap={32}
        friction={0.925}
        tension={0.005}
        maxCursorMove={100}
        className="z-0"
      />
      
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-20">
        <div className="flex flex-col items-center justify-center min-h-[70vh]">
          {/* Content Wrapper */}
          <div className="text-center mb-12">
            {/* Main Content */}
            <div className="mb-8">
              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                {t('hero.title')}
              </h1>
              
              {/* Typed Animation */}
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span 
                  ref={typedRef} 
                  className="text-yellow-400 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent"
                ></span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-black">
                {t('hero.subtitle')}
              </h3>
              
              {/* Description and Stats Row */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-10">
                {/* Description */}
                <p className="text-xl md:text-2xl max-w-2xl text-blue-100 leading-relaxed">
                  {t('hero.description')}
                </p>

                {/* Years Badge with Animation */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center gap-2 group hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-bounce">
                  <div className="text-4xl font-bold text-yellow-400 mb-1">{t('hero.yearsCount')}</div>
                  <div className="text-sm text-blue-200 text-center">{t('hero.yearsOfSuccess')}</div>
                </div>

                {/* Play Button */}
                <button className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 text-2xl hover:bg-yellow-300 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/25 transform hover:scale-110">
                  <span>▶</span>
                </button>
              </div>
            </div>
          </div>

          {/* Get In Touch Button */}
          <div className="flex justify-center">
            <Link 
              href="/contact"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-300 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/25 transform hover:-translate-y-2 flex items-center gap-3 group"
            >
              <span className="font-bold">{t('hero.getInTouch')}</span>
              <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                <span className="text-yellow-400 font-bold">→</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}