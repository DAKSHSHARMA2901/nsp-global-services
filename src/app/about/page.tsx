'use client';

import React, { useEffect, useState, useRef, Suspense, lazy, useCallback } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useTranslation } from '@/hooks/useTranslationSimple';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Clean imports - no react-icons dependencies

// Lazy load heavy components
const CountUp = lazy(() => import('react-countup'));

export default function AboutPage() {
  const { t } = useTranslation();
  const [counter, setCounter] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  const initializeAOS = useCallback(async () => {
    const AOS = (await import('aos')).default;
    // Load AOS CSS dynamically
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = 'https://unpkg.com/aos@2.3.1/dist/aos.css';
    document.head.appendChild(style);
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    // Initialize AOS lazily
    initializeAOS();

    // Intersection Observer for counter animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCounter(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [initializeAOS]);

  return (
    <>
      <Head>
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nspglobalservices.com/about-us" />
        <meta property="og:title" content="About NSP: Your Trusted Digital Marketing Partner" />
        <meta property="og:description" content="Discover NSP, a leading digital marketing agency dedicated to propelling your brand to new heights. Learn about our passion, expertise, and the team behind our success." />
        <meta property="og:site_name" content="NSP Global Services" />
        <meta property="og:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://twitter.com/nsp_global" />
        <meta name="twitter:title" content="About NSP: Your Trusted Digital Marketing Partner" />
        <meta name="twitter:description" content="Discover NSP, a leading digital marketing agency dedicated to propelling your brand to new heights. Learn about our passion, expertise, and the team behind our success." />
        <meta name="twitter:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />
        <title>About NSP: Your Trusted Digital Marketing Partner</title>
        <meta name="description" content="Discover NSP, a leading digital marketing agency dedicated to propelling your brand to new heights. Learn about our passion, expertise, and the team behind our success." />
        <link rel="canonical" href="https://www.nspglobalservices.com/about-us" />
      </Head>
      
      <div>
        <Header />
        <main>
          {/* Hero Banner Section */}
          <div className="relative py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
            {/* Background with Overlay */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-blue-900/60"></div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
              <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-yellow-400 text-blue-900 rounded-full text-sm font-bold uppercase tracking-wider mb-8">
                ⭐ About Our Company
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                About Us
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                Our team is always committed to success - both individually and collectively.
              </p>
            </div>
          </div>

          {/* Main About Section */}
          <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left side - Images and Icons */}
                <div className="relative">
                  {/* Decorative shapes */}
                  <div className="absolute -top-8 -left-8 w-20 h-20 opacity-20">
                    <div className="w-full h-full bg-blue-200 rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-20 h-20 opacity-20">
                    <div className="w-full h-full bg-yellow-200 rounded-full"></div>
                  </div>
                  
                  {/* Main about image placeholder */}
                  <div className="relative" data-aos="zoom-in-down" data-aos-offset="200">
                    <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-2xl flex items-center justify-center">
                      <div className="text-center text-blue-600">
                        <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        <p className="text-lg font-semibold">About NSP Global Services</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating icons */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg" data-aos="flip-left" data-aos-duration="2000" data-aos-offset="200">
                    <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg" data-aos="flip-right" data-aos-duration="2000" data-aos-offset="200">
                    <svg className="w-12 h-12 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  
                  {/* Experience circle */}
                  <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full w-32 h-32 flex flex-col items-center justify-center text-white shadow-2xl" data-aos="flip-up" data-aos-duration="200" data-aos-offset="100">
                    <span className="text-3xl font-bold">23</span>
                    <span className="text-sm text-center leading-tight">Years in the<br />Success</span>
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="space-y-8" data-aos="fade-up" data-aos-offset="200">
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    We Work to Ensure Your Success
                  </h2>
                  <h3 className="text-xl text-blue-600 font-semibold">
                    We are reliable and consistent with our deadlines, consistently meeting or exceeding expectations.
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We comprise a collective of committed individuals united by a common purpose: to deliver cutting-edge digital marketing solutions empowered by technology, enabling businesses to unleash their utmost potential. Our ardor for this dynamic realm resonates profoundly, fueling our sense of accomplishment with each endeavor.
                  </p>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Learn More About Us
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Skills/Progress Section */}
          <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left side - Content */}
                <div className="space-y-6" data-aos="zoom-in-right" data-aos-offset="100">
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    We Work to Help You Grow
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Whether SEO optimization or social media management, we pour our hearts into every task. We genuinely believe in the power of digital marketing and its ability to transform businesses - and this belief drives us forward every day.
                  </p>
                </div>

                {/* Right side - Progress bars */}
                <div className="space-y-8">
                  {/* Website Development */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900">Website Development</span>
                      <span className="text-lg font-bold text-blue-600">78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-600 to-blue-700 h-3 rounded-full transition-all duration-1000 ease-out" style={{width: '78%'}}></div>
                    </div>
                  </div>

                  {/* Digital Marketing */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900">Digital Marketing</span>
                      <span className="text-lg font-bold text-blue-600">88%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-600 to-blue-700 h-3 rounded-full transition-all duration-1000 ease-out delay-300" style={{width: '88%'}}></div>
                    </div>
                  </div>

                  {/* Search Engine Optimization */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900">Search Engine Optimization</span>
                      <span className="text-lg font-bold text-blue-600">65%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-600 to-blue-700 h-3 rounded-full transition-all duration-1000 ease-out delay-600" style={{width: '65%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left side - Video */}
                <div className="relative" data-aos="zoom-in-left" data-aos-offset="200">
                  <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                    <video 
                      className="w-full h-full object-cover"
                      controls
                      preload="metadata"
                      controlsList="nodownload"
                      style={{ outline: 'none' }}
                    >
                      <source src="/nsp.mp4" type="video/mp4" />
                      <p className="text-white p-4">
                        Your browser does not support the video tag. 
                        <a href="/nsp.mp4" className="text-blue-400 underline ml-2">
                          Download the video instead
                        </a>
                      </p>
                    </video>
                    
                    {/* Video overlay for branding */}
                    <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-white text-sm font-semibold">NSP Global Services</span>
                    </div>
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="space-y-8">
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    We Work to Help You Grow
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    At NSP, we believe every business deserves the opportunity to succeed online. That's why we strive to deliver exceptional services that cater to each client's unique needs.
                  </p>
                  
                  {/* Simple FAQ Section */}
                  <div className="space-y-4">
                    <details className="group bg-white rounded-lg shadow-md">
                      <summary className="flex justify-between items-center p-6 cursor-pointer">
                        <span className="text-lg font-semibold text-gray-900">What services do we offer?</span>
                        <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-6 pb-6">
                        <p className="text-gray-600">We offer comprehensive digital marketing services including SEO, social media marketing, web development, content creation, and PPC management.</p>
                      </div>
                    </details>

                    <details className="group bg-white rounded-lg shadow-md">
                      <summary className="flex justify-between items-center p-6 cursor-pointer">
                        <span className="text-lg font-semibold text-gray-900">How long have we been in business?</span>
                        <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-6 pb-6">
                        <p className="text-gray-600">We have been successfully serving clients for over 23 years, building trust and delivering exceptional results across the globe.</p>
                      </div>
                    </details>

                    <details className="group bg-white rounded-lg shadow-md">
                      <summary className="flex justify-between items-center p-6 cursor-pointer">
                        <span className="text-lg font-semibold text-gray-900">What makes us different?</span>
                        <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-6 pb-6">
                        <p className="text-gray-600">Our commitment to cutting-edge technology, personalized solutions, and transparent communication sets us apart from the competition.</p>
                      </div>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Counter Section */}
          <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div ref={counterRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Total Countries */}
                <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="100">
                  <div className="text-5xl lg:text-6xl font-bold text-blue-600 mb-2">
                    {counter && (
                      <Suspense fallback={<span>120</span>}>
                        <CountUp start={0} end={120} duration={1} delay={0} />
                      </Suspense>
                    )}
                    <span>+</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">
                    Total<br />Countries
                  </p>
                </div>

                {/* WorldWide Companies */}
                <div className="text-center bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 shadow-lg" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="100">
                  <div className="text-5xl lg:text-6xl font-bold text-yellow-600 mb-2">
                    {counter && (
                      <Suspense fallback={<span>200</span>}>
                        <CountUp start={0} end={200} duration={1} delay={0} />
                      </Suspense>
                    )}
                    <span>+</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">
                    WorldWide<br />Companies
                  </p>
                </div>

                {/* Yearly Revenue */}
                <div className="text-center bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="100">
                  <div className="text-5xl lg:text-6xl font-bold text-green-600 mb-2">
                    {counter && (
                      <Suspense fallback={<span>50</span>}>
                        <CountUp start={0} end={50} duration={1} delay={0} />
                      </Suspense>
                    )}
                    <span className="text-3xl">K+</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">
                    Yearly<br />Revenue
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-yellow-400 font-bold uppercase tracking-wider mb-4">We Are Here For You</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Let's Get Back to Work
              </h2>
              <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
                Empower your brand's online journey with our bespoke digital marketing strategies. Reach out now to reignite your success story in the digital realm.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-bold rounded-2xl hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 transform hover:-translate-y-1 text-lg"
              >
                Get Started Today
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
