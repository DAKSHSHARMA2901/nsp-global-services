'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslationSimple';

export default function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/favicon.ico" 
                alt="NSP Global Services Logo" 
                width={32} 
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-blue-600">NSP Global Services</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              {t('header.home')}
            </Link>
            <Link href="/services" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              {t('header.services')}
            </Link>
            <Link href="/about" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              {t('header.about')}
            </Link>
            <Link href="/contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              {t('header.contact')}
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              {t('header.getStarted')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-blue-600 p-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <Link href="/" className="block px-3 py-2 text-gray-900 hover:text-blue-600 text-sm font-medium">
                {t('header.home')}
              </Link>
              <Link href="/services" className="block px-3 py-2 text-gray-900 hover:text-blue-600 text-sm font-medium">
                {t('header.services')}
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-900 hover:text-blue-600 text-sm font-medium">
                {t('header.about')}
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-900 hover:text-blue-600 text-sm font-medium">
                {t('header.contact')}
              </Link>
              <div className="pt-2">
                <Link 
                  href="/contact"
                  className="block bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 text-center"
                >
                  {t('header.getStarted')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}