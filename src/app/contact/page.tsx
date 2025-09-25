'use client';

import React, { useState, useRef } from 'react';
import { 
  HiMail, 
  HiPhone, 
  HiLocationMarker, 
  HiClock 
} from 'react-icons/hi';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaWhatsapp 
} from 'react-icons/fa';
import { useTranslation } from '@/hooks/useTranslationSimple';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});

  const validateForm = (formData: FormData) => {
    const errors: {[key: string]: string} = {};
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    if (!name || name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters long';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = 'Please enter a valid email address';
    }

    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phone || !phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))) {
      errors.phone = 'Please enter a valid phone number';
    }

    if (!message || message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    return errors;
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.current) return;

    const formData = new FormData(form.current);
    const errors = validateForm(formData);
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/mzzdlzek', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        form.current.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Header />
      <main>
        {/* Hero Banner Section */}
        <div className="relative py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center overflow-hidden">
        {/* Background animations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-400 text-blue-900 rounded-full text-sm font-bold uppercase tracking-wider mb-8">
            ★ {t('contact.bannerSubtitle')}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-blue-100 mb-6 leading-tight">
            {t('contact.title')}
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-12 leading-relaxed max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-blue-800 uppercase mb-4 tracking-wider">
              * GET IN TOUCH
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {t('contact.subtitle')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </div>
        
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl p-8 card-hover transition-all duration-300 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Contact Information
              </h3>
            
              {/* Contact Methods */}
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <HiMail size={24} className="text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-bold text-gray-900 mb-1">
                      {t('contact.emailLabel')}
                    </h4>
                    <a 
                      href={`mailto:${t('contact.emailAddress')}`} 
                      className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
                      target='_blank'
                    >
                      {t('contact.emailAddress')}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <HiPhone size={24} className="text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-bold text-gray-900 mb-1">
                      Phone Number
                    </h4>
                    <a 
                      href="tel:+447436220544" 
                      className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
                    >
                      +44 7436 220544
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <FaWhatsapp size={24} className="text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-bold text-gray-900 mb-1">
                      WhatsApp
                    </h4>
                    <a 
                      href="https://wa.me/+447436220544" 
                      target="_blank"
                      rel="noreferrer"
                      className="text-green-600 hover:text-green-700 font-semibold transition-colors duration-300"
                    >
                      +44 7436 220544
                    </a>
                  </div>
                </div>

                {/* Office Address */}
                <div className="flex items-start p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <HiLocationMarker size={24} className="text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-bold text-gray-900 mb-1">
                      Office Address
                    </h4>
                    <p className="text-gray-600">
                      123 Business District, Tech Park<br />
                      Mumbai, Maharashtra 400001<br />
                      India
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <HiClock size={24} className="text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-bold text-gray-900 mb-1">
                      Business Hours
                    </h4>
                    <div className="text-gray-600 text-sm">
                      <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p>Sat: 10:00 AM - 4:00 PM</p>
                      <p>Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-bold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex space-x-3">
                  <a 
                    href="https://facebook.com/nspglobal" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <FaFacebookF className="text-white text-sm" />
                  </a>
                  <a 
                    href="https://twitter.com/nspglobal" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <FaTwitter className="text-white text-sm" />
                  </a>
                  <a 
                    href="https://linkedin.com/company/nspglobal" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <FaLinkedinIn className="text-white text-sm" />
                  </a>
                  <a 
                    href="https://instagram.com/nspglobal" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <FaInstagram className="text-white text-sm" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-10 shadow-2xl border border-blue-100">
              <div className="text-center mb-10">
                <div className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                  ✉️ Request a Quote
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Send us a Message
                </h3>
                <p className="text-gray-600">
                  Get a personalized quote for your project
                </p>
              </div>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-400 rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-green-800 font-semibold">Success!</h4>
                      <p className="text-green-700">Your message has been sent successfully. We'll get back to you soon!</p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-400 rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-red-800 font-semibold">Error!</h4>
                      <p className="text-red-700">Failed to send message. Please try again or contact us directly.</p>
                    </div>
                  </div>
                </div>
              )}
            
              <form ref={form} onSubmit={sendEmail} className="space-y-8">
                {/* Name Field */}
                <div className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input 
                      placeholder={t('contact.form.namePlaceholder')} 
                      type="text" 
                      required 
                      name="name"
                      className={`w-full px-6 py-4 border-2 ${formErrors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'} rounded-2xl text-gray-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:border-blue-300`}
                    />
                    <div className="absolute inset-y-0 right-0 pr-6 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  {formErrors.name && (
                    <p className="mt-2 text-red-600 text-sm font-medium flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {formErrors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input 
                      placeholder={t('contact.form.emailPlaceholder')} 
                      type="email" 
                      required 
                      name="email"
                      className={`w-full px-6 py-4 border-2 ${formErrors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'} rounded-2xl text-gray-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:border-blue-300`}
                    />
                    <div className="absolute inset-y-0 right-0 pr-6 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  {formErrors.email && (
                    <p className="mt-2 text-red-600 text-sm font-medium flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {formErrors.email}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <input 
                      name="phone" 
                      placeholder={t('contact.form.phonePlaceholder')} 
                      required
                      className={`w-full px-6 py-4 border-2 ${formErrors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'} rounded-2xl text-gray-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:border-blue-300`}
                    />
                    <div className="absolute inset-y-0 right-0 pr-6 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  {formErrors.phone && (
                    <p className="mt-2 text-red-600 text-sm font-medium flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {formErrors.phone}
                    </p>
                  )}
                </div>

                {/* Service Selection Field */}
                <div className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Interested Service *
                  </label>
                  <div className="relative">
                    <select 
                      name="service" 
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 bg-white rounded-2xl text-gray-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:border-blue-300 appearance-none cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      <option value="on-page">🔍 On-Page SEO</option>
                      <option value="off-page">🔗 Off-Page SEO</option>
                      <option value="technical">⚙️ Technical SEO</option>
                      <option value="mobile">📱 Mobile SEO</option>
                      <option value="local">📍 Local SEO</option>
                      <option value="audit">📊 SEO Audits & Analytics</option>
                      <option value="multilingual">🌍 Multilingual SEO</option>
                      <option value="content">✍️ Content Creation</option>
                      <option value="web-design">🎨 Web Design & Development</option>
                      <option value="digital-marketing">📈 Digital Marketing</option>
                      <option value="ppc">💰 PPC Management</option>
                      <option value="social-media">📲 Social Media Marketing</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-6 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <div className="relative">
                    <textarea 
                      name="message" 
                      required 
                      rows={6}
                      placeholder={t('contact.form.messagePlaceholder')}
                      className={`w-full px-6 py-4 border-2 ${formErrors.message ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'} rounded-2xl text-gray-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:border-blue-300 resize-none`}
                    />
                  </div>
                  {formErrors.message && (
                    <p className="mt-2 text-red-600 text-sm font-medium flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {formErrors.message}
                    </p>
                  )}
                </div>
                
                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'} text-white font-bold py-5 px-8 rounded-2xl text-lg transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 focus:ring-4 focus:ring-blue-200 uppercase tracking-wide transform hover:-translate-y-1`}
                >
                  <span className="flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Message
                      </>
                    )}
                  </span>
                </button>

                {/* WhatsApp Button */}
                <a 
                  href="https://wa.me/+447436220544" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-5 px-8 rounded-2xl text-lg transition-all duration-300 shadow-2xl hover:shadow-green-500/25 flex items-center justify-center gap-3 uppercase tracking-wide transform hover:-translate-y-1"
                >
                  <FaWhatsapp size={24} />
                  Chat on WhatsApp
                </a>

                {/* Privacy Notice */}
                <div className="text-center pt-4">
                  <p className="text-sm text-gray-500">
                    🔒 Your information is secure and will never be shared with third parties.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-blue-800 uppercase mb-4 tracking-wider">
              * FAQ
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-700">
              Quick answers to questions you may have
            </p>
          </div>

          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-300">
                  <h3 className="text-lg font-semibold text-gray-900">
                    How long does it take to complete a project?
                  </h3>
                  <svg className="w-5 h-5 text-blue-600 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  Project timelines vary depending on complexity and scope. Typically, website projects take 2-4 weeks, mobile apps 6-12 weeks, and digital marketing campaigns can show results within 30-60 days. We provide detailed timelines during our initial consultation.
                </div>
              </details>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-300">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Do you provide ongoing support after project completion?
                  </h3>
                  <svg className="w-5 h-5 text-blue-600 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  Yes! We offer comprehensive post-launch support including maintenance, updates, technical support, and optimization services. Our support packages are tailored to meet your specific needs and ensure your digital assets continue performing optimally.
                </div>
              </details>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-300">
                  <h3 className="text-lg font-semibold text-gray-900">
                    What is your pricing structure?
                  </h3>
                  <svg className="w-5 h-5 text-blue-600 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  Our pricing is project-based and depends on scope, complexity, and requirements. We offer competitive rates with transparent pricing - no hidden fees. Contact us for a free consultation and detailed quote tailored to your specific needs.
                </div>
              </details>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-300">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Can you work with clients internationally?
                  </h3>
                  <svg className="w-5 h-5 text-blue-600 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  Absolutely! We work with clients globally and have experience managing projects across different time zones. We use modern collaboration tools and maintain clear communication channels to ensure smooth project delivery regardless of location.
                </div>
              </details>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-300">
                  <h3 className="text-lg font-semibold text-gray-900">
                    What technologies do you specialize in?
                  </h3>
                  <svg className="w-5 h-5 text-blue-600 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  We specialize in modern web technologies including React, Next.js, Node.js, Python, and mobile development with React Native and Flutter. For digital marketing, we use advanced analytics tools, social media platforms, and SEO optimization techniques.
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Map Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-blue-800 uppercase mb-4 tracking-wider">
              * VISIT US
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Our Location
            </h2>
            <p className="text-lg text-gray-700">
              Located in the heart of Mumbai's business district
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map Placeholder */}
            <div className="relative h-96 bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <HiLocationMarker size={64} className="text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Interactive Map</h3>
                  <p className="text-gray-600 mb-6">Click to view on Google Maps</p>
                  <a 
                    href="https://maps.google.com/?q=Business+District+Mumbai" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-300 shadow-lg"
                  >
                    <HiLocationMarker className="mr-2" />
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Office Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  NSP Global Services
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Our modern office space is designed to foster creativity and collaboration. 
                  Visit us to discuss your project in person or schedule a virtual meeting.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <HiLocationMarker className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">123 Business District, Tech Park<br />Mumbai, Maharashtra 400001, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <HiPhone className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <HiMail className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">{t('contact.emailAddress')}</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-4 pt-6">
                <a 
                  href="tel:+447436220544"
                  className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                >
                  <HiPhone className="mr-2" />
                  Call Now
                </a>
                <a 
                  href="https://wa.me/+447436220544"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                >
                  <FaWhatsapp className="mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}
