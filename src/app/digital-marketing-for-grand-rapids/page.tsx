'use client';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TextSphere from '@/components/TextSphere';

export default function DigitalMarketingGrandRapids() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration missing');
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          // Success - show user feedback
          if (form.current) form.current.reset();
        },
        (error) => {
          console.error('EmailJS failed:', error?.text || error?.message || 'Unknown error');
          // Error - show user feedback
        },
      );
  };

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Grand Rapids Digital Marketing Services
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Let's talk about how we can turn your business into an online success story!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Contact us now
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-96 h-96">
                <TextSphere texts={[
                  "Consultation",
                  "Keyword Research", 
                  "On-Page",
                  "Off-Page",
                  "Reputation Management",
                  "Google Ads",
                  "Facebook Ads", 
                  "Lead Generation",
                  "Shopping Ads",
                  "Maximize Conversions"
                ]} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Grow Your Business with our Expert Digital Marketing Strategies
            </h2>
          </div>

          {/* Service Items */}
          <div className="space-y-20">
            {/* SEO Services */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                    alt="SEO Services"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Enterprise Search Engine Optimization Services
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our <Link href="/seo-services" className="text-blue-600 hover:text-blue-800 font-semibold">SEO services</Link> enhance your website's online visibility, making it easy for potential customers to find you. We employ a comprehensive strategy, including keyword research, <Link href="/seo-services/on-page-seo" className="text-blue-600 hover:text-blue-800 font-semibold">on-page optimization</Link>, and robust backlink building to establish authority.
                </p>
              </div>
            </div>

            {/* PPC Services */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Pay-Per-Click Advertising Services
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our <Link href="/ppc-services" className="text-blue-600 hover:text-blue-800 font-semibold">Pay-Per-Click (PPC) Advertising service</Link> offers immediate brand visibility by placing ads where your target audience is searching. Utilizing Google Ads, Bing Ads, and social media, we develop campaigns that maximize your investment.
                </p>
              </div>
              <div>
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
                    alt="PPC Advertising"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Social Media Marketing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop"
                    alt="Social Media Marketing"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Social Media Marketing Services
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our affordable social media marketing services focus on enhancing your brand's online presence by developing strategic content that appeals to your audience, aiming to grow your following and deepen connections for real conversions. We handle content creation, scheduling, and engagement, keeping your profiles vibrant.
                </p>
              </div>
            </div>

            {/* Content Marketing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Content Marketing Services
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our affordable <Link href="/content-marketing-services" className="text-blue-600 hover:text-blue-800 font-semibold">Content Marketing services</Link> attract and engage your target audience with quality content, from insightful blog posts to captivating videos, aligning with your brand values to meet audience needs. We focus on creating, distributing, and analyzing content to drive conversions and build loyalty.
                </p>
              </div>
              <div>
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                    alt="Content Marketing"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Email Marketing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop"
                    alt="Email Marketing"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Outsource Email Marketing Services
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our cold Email Marketing service utilizes personalized communication to engage and inform your audience, enhancing their connection to your brand. It includes custom newsletters, targeted campaigns, segmentation strategies, and detailed analytics to ensure effective messaging and track performance.
                </p>
              </div>
            </div>

            {/* Reputation Management */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Online Reputation Management Services
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our Online Reputation Management services are designed to protect and improve your brand's online presence, essential in today's digital landscape for influencing consumer trust. We monitor your brand's online mentions, address negatives, and highlight positives across platforms like Google and Yelp.
                </p>
              </div>
              <div>
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop"
                    alt="Reputation Management"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Web Development */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop"
                    alt="Web Development"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Website Design and Development Services
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our <Link href="/design-development-for" className="text-blue-600 hover:text-blue-800 font-semibold">Website Design and Development services</Link> focus on crafting stunning, functional websites tailored to your business needs, ensuring a smooth, mobile-responsive user experience optimized for search engines. We offer end-to-end solutions from custom design to CMS integration, e-commerce, and maintenance.
                </p>
              </div>
            </div>

            {/* Data Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Data Analytics and Reporting
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our <Link href="/industries/technology/data-analytics" className="text-blue-600 hover:text-blue-800 font-semibold">Data Analytics</Link> and Reporting services provide essential insights for informed decision-making and strategic planning for business growth. By analyzing data from various marketing channels, we identify valuable insights into campaign performance.
                </p>
              </div>
              <div>
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                    alt="Data Analytics"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Conversion Rate Optimization */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                    alt="Conversion Rate Optimization"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Conversion Rate Optimization
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our Conversion Rate Optimization (CRO) services transform your website visitors into customers by deeply understanding user behavior and optimizing every part of their online journey. We refine landing pages for compelling usability, use A/B testing to fine-tune your site, and enhance user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Increase your online presence and drive success with NSP's comprehensive digital marketing services. Benefit from increased visibility, lead generation, and revenue growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Expertise</h4>
              <p className="text-gray-600">
                Our team of experienced digital marketers has a deep understanding of the ever-evolving landscape of online marketing and can help you navigate it with ease.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Customized Solutions</h4>
              <p className="text-gray-600">
                We believe in tailor-made strategies that are specific to your business objectives, target audience, and industry.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Results-driven</h4>
              <p className="text-gray-600">
                Our ultimate goal is to help your business achieve tangible results and a healthy return on investment.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">SEO Services Near Me</h4>
              <p className="text-gray-600">
                NSP Global Services We are just a Click Away for all your SEO needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Tools that we use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['Google Analytics', 'SEMrush', 'Ahrefs', 'Moz', 'Google Ads', 'Facebook Ads'].map((tool) => (
              <div key={tool} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <p className="font-semibold text-gray-800">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-600 font-semibold mb-4">Testimonials</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-12">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "NSP Global Services transformed our digital presence. Their expertise and dedication are unmatched."
                </p>
                <p className="font-semibold text-gray-900">Client {i}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                  alt="Digital Marketing Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get Your Free Quote</h2>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}