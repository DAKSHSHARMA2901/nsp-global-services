'use client';

import React, { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoadingSpinner from '@/components/LoadingSpinner';

// Lazy load heavy components
const ContactForm = React.lazy(() => import('../ContactForm'));
const TestimonialsSection = React.lazy(() => import('../TestimonialsSection'));

interface CaseStudyProps {
  service: 'seo' | 'ppc' | 'content' | 'design';
  title: string;
  description: string;
  industry?: string;
}

const CaseStudyPage: React.FC<CaseStudyProps> = ({ service, title, description, industry }) => {
  const serviceConfig = {
    seo: {
      heroImage: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      bgColor: 'from-blue-600 to-blue-800',
      services: [
        {
          title: 'Keyword Research & Strategy',
          description: 'Comprehensive keyword analysis to identify high-value search terms for your industry.',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          link: '/seo-services/keyword-research'
        },
        {
          title: 'On-Page SEO Optimization',
          description: 'Optimize your website\'s content, structure, and technical elements for better rankings.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          link: '/seo-services/on-page-seo'
        },
        {
          title: 'Link Building & Authority',
          description: 'Build high-quality backlinks to establish domain authority and credibility.',
          image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          link: '/seo-services/link-building'
        },
        {
          title: 'Technical SEO Audit',
          description: 'Comprehensive technical analysis to identify and fix SEO issues.',
          image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          link: '/seo-services/technical-seo'
        }
      ]
    },
    ppc: {
      heroImage: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      bgColor: 'from-green-600 to-green-800',
      services: [
        {
          title: 'Google Ads Management',
          description: 'Strategic Google Ads campaigns designed to maximize ROI and drive conversions.',
          image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          link: '/ppc-services/google-ads'
        },
        {
          title: 'Social Media Advertising',
          description: 'Targeted social media campaigns across Facebook, Instagram, LinkedIn, and more.',
          image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          link: '/ppc-services/social-media-ads'
        },
        {
          title: 'Shopping Campaign Optimization',
          description: 'E-commerce focused campaigns to showcase products and drive online sales.',
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          link: '/ppc-services/shopping-campaigns'
        },
        {
          title: 'Campaign Analytics & Reporting',
          description: 'Detailed performance analysis and optimization recommendations.',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          link: '/ppc-services/analytics'
        }
      ]
    },
    content: {
      heroImage: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      bgColor: 'from-purple-600 to-purple-800',
      services: [
        {
          title: 'Blog Content Creation',
          description: 'Engaging, SEO-optimized blog posts that drive organic traffic and engagement.',
          image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          link: '/content-marketing-services/blog-writing'
        },
        {
          title: 'Video Content Strategy',
          description: 'Compelling video content that tells your brand story and drives conversions.',
          image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          link: '/content-marketing-services/video-content'
        },
        {
          title: 'Social Media Content',
          description: 'Platform-specific content that builds community and drives engagement.',
          image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          link: '/content-marketing-services/social-media'
        },
        {
          title: 'Content Strategy & Planning',
          description: 'Comprehensive content strategies aligned with your business goals.',
          image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          link: '/content-marketing-services/strategy'
        }
      ]
    },
    design: {
      heroImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      bgColor: 'from-red-600 to-red-800',
      services: [
        {
          title: 'Custom Web Design',
          description: 'Beautiful, responsive websites designed to convert visitors into customers.',
          image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          link: '/design-development/web-design'
        },
        {
          title: 'E-commerce Development',
          description: 'Full-featured online stores built for maximum conversions and user experience.',
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          link: '/design-development/ecommerce'
        },
        {
          title: 'Mobile App Development',
          description: 'Native and cross-platform mobile applications for iOS and Android.',
          image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          link: '/design-development/mobile-apps'
        },
        {
          title: 'UI/UX Design',
          description: 'User-centered design that creates exceptional digital experiences.',
          image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          link: '/design-development/ui-ux'
        }
      ]
    }
  };

  const config = serviceConfig[service];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${config.bgColor} text-white py-20`}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-opacity-90">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/contact" 
                  className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  href="#services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                >
                  View Our Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <Image
                  src={config.heroImage}
                  alt={`${service.toUpperCase()} Services - Professional Digital Marketing`}
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyVPonyRPonyRP9P4bOJ4vvfRd85xX6qjA7ycPMWGdLRkCqJCfROUP0HT/oTJRGEQDRRPo9/9k="
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-700 font-semibold">Live Results</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our {service.toUpperCase()} Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to drive results and grow your business
            </p>
          </div>

          <div className="space-y-16">
            {config.services.map((serviceItem, index) => (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={serviceItem.image}
                      alt={serviceItem.title}
                      width={600}
                      height={400}
                      className="w-full h-[400px] object-cover"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyVPonyRPonyRP9P4bOJ4vvfRd85xX6qjA7ycPMWGdLRkCqJCfROUP0HT/oTJRGEQDRRPo9/9k="
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {serviceItem.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {serviceItem.description}
                  </p>
                  <Link 
                    href={serviceItem.link}
                    className={`inline-flex items-center text-lg font-semibold hover:underline transition-colors ${
                      service === 'seo' ? 'text-blue-600 hover:text-blue-800' :
                      service === 'ppc' ? 'text-green-600 hover:text-green-800' :
                      service === 'content' ? 'text-purple-600 hover:text-purple-800' :
                      'text-red-600 hover:text-red-800'
                    }`}
                  >
                    Learn More
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose NSP Global Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver results-driven strategies that help your business succeed online
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Proven Results',
                description: 'Track record of success with measurable ROI for our clients',
                icon: '📈'
              },
              {
                title: 'Expert Team',
                description: 'Certified professionals with years of industry experience',
                icon: '👥'
              },
              {
                title: 'Custom Strategy',
                description: 'Tailored solutions designed specifically for your business',
                icon: '🎯'
              },
              {
                title: '24/7 Support',
                description: 'Dedicated support team available whenever you need us',
                icon: '🚀'
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <Suspense fallback={<LoadingSpinner size="lg" />}>
          <TestimonialsSection />
        </Suspense>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-br ${config.bgColor} text-white`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-opacity-90">
            Let's discuss how our {service.toUpperCase()} services can help you achieve your business goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link 
              href="/about" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <Suspense fallback={<LoadingSpinner size="lg" />}>
          <ContactForm />
        </Suspense>
      </section>

      <Footer />
    </>
  );
};

export default CaseStudyPage;