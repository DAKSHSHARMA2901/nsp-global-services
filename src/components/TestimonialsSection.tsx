'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslationSimple';

export default function TestimonialsSection() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Vithurs",
      position: "CEO, BlessedCBD",
      content: "NSP Global Services is a solid company. With so many SEO agencies available on the market today, it can be tricky finding 'the one'. After working with their team and discussing their various strategies, it's clear to me they have a solid approach. For anyone still in doubt, they offer comprehensive consultation!",
      rating: 5,
      avatar: "V"
    },
    {
      name: "Piotr S.",
      position: "Web Developer",
      content: "Better than expected. I used many platforms offering similar services, and I have paid premium prices for it. But in most cases, the features provided were mostly irrelevant to my needs. With NSP Global Services, all is very simple and effective. I wouldn't hesitate to recommend them.",
      rating: 5,
      avatar: "P"
    },
    {
      name: "Sofia J.",
      position: "E-commerce Manager",
      content: "Easy to work with and awesome capabilities. I love that NSP also provides comprehensive keyword research. This helps me compensate for my other tools. Their rank tracking is awesome and frequently updated, making it easy for me to track my progress.",
      rating: 5,
      avatar: "S"
    },
    {
      name: "Magnus S.",
      position: "Digital Marketer",
      content: "Excellent service for SEO and digital marketing! My overall impression of NSP Global Services is quite obvious - they're really good. Worth mentioning too is their great support. Despite different time zones, they respond quickly in customer support. Excellent service!",
      rating: 5,
      avatar: "M"
    },
    {
      name: "Michael M.",
      position: "CEO",
      content: "Amazing SEO results. NSP Global Services provides me with a very detailed overview of how my websites perform in search results. Their interface is great and very easy to use. The keyword research, analytics, and reporting tools are really amazing and full of details.",
      rating: 5,
      avatar: "M"
    },
    {
      name: "Kim C.",
      position: "Business Owner",
      content: "Does more than expected. Lots of features, easy to work with and great at finding opportunities. They work hard and are committed to their clients. Not only do they handle SEO, but they can also be used for comprehensive digital marketing strategies.",
      rating: 5,
      avatar: "K"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(testimonials.length / 3) }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.slice(slideIndex * 3, slideIndex * 3 + 3).map((testimonial, index) => (
                      <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                            {testimonial.avatar}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                            <p className="text-gray-600 text-sm">{testimonial.position}</p>
                          </div>
                        </div>
                        
                        <div className="flex mb-4">
                          {renderStars(testimonial.rating)}
                        </div>
                        
                        <p className="text-gray-700 leading-relaxed italic">
                          "{testimonial.content}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Review Summary */}
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
            <div className="flex items-center">
              <div className="flex text-yellow-400 mr-2">
                {renderStars(5)}
              </div>
              <span className="text-gray-700 font-semibold">{t('testimonials.reviews.google')}</span>
            </div>
            <div className="flex items-center">
              <div className="flex text-yellow-400 mr-2">
                {renderStars(5)}
              </div>
              <span className="text-gray-700 font-semibold">{t('testimonials.reviews.trustpilot')}</span>
            </div>
            <div className="flex items-center">
              <div className="flex text-yellow-400 mr-2">
                {renderStars(5)}
              </div>
              <span className="text-gray-700 font-semibold">{t('testimonials.reviews.clutch')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
