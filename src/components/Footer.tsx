'use client';

import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslationSimple';

export default function Footer() {
  const { t, changeLanguage, locale } = useTranslation();
  const currentYear = new Date().getFullYear();

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'de', name: 'German', nativeName: 'Deutsch' },
    { code: 'es', name: 'Spanish', nativeName: 'Español' },
    { code: 'fr', name: 'French', nativeName: 'Français' },
    { code: 'it', name: 'Italian', nativeName: 'Italiano' },
    { code: 'ja', name: 'Japanese', nativeName: '日本語' },
    { code: 'nl', name: 'Dutch', nativeName: 'Nederlands' },
    { code: 'pl', name: 'Polish', nativeName: 'Polski' },
    { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
    { code: 'sv', name: 'Swedish', nativeName: 'Svenska' },
    { code: 'tr', name: 'Turkish', nativeName: 'Türkçe' },
    { code: 'zh', name: 'Chinese', nativeName: '中文' },
    { code: 'bg', name: 'Bulgarian', nativeName: 'Български' },
    { code: 'cs', name: 'Czech', nativeName: 'Čeština' },
    { code: 'da', name: 'Danish', nativeName: 'Dansk' },
    { code: 'el', name: 'Greek', nativeName: 'Ελληνικά' },
    { code: 'et', name: 'Estonian', nativeName: 'Eesti' },
    { code: 'fi', name: 'Finnish', nativeName: 'Suomi' },
    { code: 'hu', name: 'Hungarian', nativeName: 'Magyar' },
    { code: 'id', name: 'Indonesian', nativeName: 'Indonesia' },
    { code: 'ko', name: 'Korean', nativeName: '한국어' },
    { code: 'lt', name: 'Lithuanian', nativeName: 'Lietuvių' },
    { code: 'lv', name: 'Latvian', nativeName: 'Latviešu' },
    { code: 'no', name: 'Norwegian', nativeName: 'Norsk' },
    { code: 'ro', name: 'Romanian', nativeName: 'Română' },
    { code: 'ru', name: 'Russian', nativeName: 'Русский' },
    { code: 'sk', name: 'Slovak', nativeName: 'Slovenčina' },
    { code: 'sl', name: 'Slovenian', nativeName: 'Slovenščina' },
    { code: 'uk', name: 'Ukrainian', nativeName: 'Українська' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
    { code: 'mr', name: 'Marathi', nativeName: 'मराठी' }
  ];

  const serviceLinks = [
    { name: "OutSourcing SEO Service", href: "/seo-services" },
    { name: "Digital Advertising Campaigns", href: "/ppc-services" },
    { name: "Nationwide SEO", href: "/seo-services/nationwide-seo" },
    { name: "SEO Services for", href: "/seo-for" },
    { name: "Celebrity SEO", href: "/seo-services/celebrity-seo" },
    { name: "Luxury SEO", href: "/seo-services/luxury-seo" },
    { name: "Link Building Services", href: "/seo-services/link-building-services" },
    { name: "SEO Competitor Analysis", href: "/seo-services/seo-keywords-research" },
    { name: "SEO Audit & Analysis", href: "/seo-services/seo-audits" },
    { name: "International SEO", href: "/seo-services/international-seo" },
    { name: "Google Analytics services", href: "/seo-services/google-analytics-services" }
  ];

  const industryLinks = [
    { name: "Recreation & Entertainment", href: "/industries/recreation" },
    { name: "Franchises", href: "/industries/franchises" },
    { name: "Fitness", href: "/industries/fitness" },
    { name: "Home & Repair", href: "/industries/home-repair" },
    { name: "Professional Services", href: "/industries/professional-services" },
    { name: "SaaS SEO Services", href: "https://nspglobalservices.in/" },
    { name: "Insurance", href: "/industries/insurance" },
    { name: "Local Consumer Services", href: "/industries/local-consumer" },
    { name: "Government Agencies", href: "/industries/government-agency" },
    { name: "Tourism & Hospitality", href: "/industries/tourism-hospitality" },
    { name: "Food & Beverage", href: "/industries/food-beverage" },
    { name: "Heavy Equipment", href: "/industries/heavy-equipment" }
  ];

  const resourceLinks = [
    { name: "About us", href: "/about" },
    { name: "Blogs", href: "https://blogs.nspglobalservices.com/", target: "_blank" },
    { name: "Contact", href: "/contact" },
    { name: "Paid media for cbd", href: "/cannabis-advertising-agency/" },
    { name: "Digital marketing for grand rapids", href: "/digital-marketing-for-grand-rapids" },
    { name: "Window cleaning services", href: "/seo-for/window-cleaning-services" },
    { name: "Locations", href: "/locations" },
    { name: "Hornchurch SEO Agency", href: "/locations/hornchurch-seo-agency" },
    { name: "Chelmsford SEO Agency", href: "/locations/chelmsford-seo-agency" },
    { name: "Colchester SEO Agency", href: "/locations/colchester-seo-agency" },
    { name: "Digital Marketing Services for", href: "/digital-marketing-for" }
  ];

  const specializationLinks = [
    { name: "White Label SEO", href: "/seo-services" },
    { name: "White Label National SEO", href: "/seo-services/nationwide-seo" },
    { name: "White Label Local SEO", href: "/seo-services/local-seo" },
    { name: "White Label Ecommerce SEO", href: "/seo-services/ecommerce-seo" },
    { name: "White Label Enterprise SEO", href: "/seo-services" },
    { name: "White Label SEM/PPC", href: "/ppc-services" },
    { name: "Web Design Services", href: "/design-development-for" },
    { name: "Programmatic advertising agency", href: "/programmatic-advertising-agency" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Special CTA Section */}
      <div className="bg-blue-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-bold mb-4 hover:bg-gray-100 transition-colors">
              Hire us For Website Design & Development and get 1 Month of FREE SEO, Worth $299/month
            </button>
          </div>
          <Link 
            href="/contact"
            className="inline-flex items-center bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white mb-4 block">
              NSP Global Services
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform your digital presence with our AI-powered SEO strategies and comprehensive digital marketing solutions. 
              We help businesses achieve sustainable growth through proven methodologies.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span className="text-gray-300">info@nspglobalservices.com</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span className="text-gray-300">+447436220544</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span className="text-gray-300">London, United Kingdom</span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.twitter.com" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/NSPGlobalServices" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/nspglobalservices/" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.987 11.988 11.987 6.618 0 11.985-5.369 11.985-11.987C23.999 5.367 18.635.001 12.017.001zM8.542 12.017c0-1.919 1.556-3.475 3.475-3.475s3.475 1.556 3.475 3.475-1.556 3.475-3.475 3.475-3.475-1.556-3.475-3.475zm7.078-5.569c0-.622.506-1.127 1.127-1.127s1.127.505 1.127 1.127c0 .621-.506 1.127-1.127 1.127s-1.127-.506-1.127-1.127z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/channel/UC4wKp8QpucRLEx77xS5JuLw" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/nsp-global-services/?originalSubdomain=in" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://wa.me/+447436220544" target="_blank" className="text-gray-400 hover:text-green-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Types Of Services */}
          <div>
            <h4 className="font-semibold mb-4">Types Of Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries We Serve */}
          <div>
            <h4 className="font-semibold mb-4">Industries We Serve</h4>
            <ul className="space-y-2">
              {industryLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                    {...(link.href.startsWith('http') && { target: '_blank' })}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                    {...(link.target && { target: link.target })}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Specialization */}
          <div>
            <h4 className="font-semibold mb-4">Our Specialization</h4>
            <ul className="space-y-2">
              {specializationLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-lg">
            <h4 className="font-semibold mb-3">{t('footer.stayUpdated')}</h4>
            <p className="text-gray-300 mb-4">
              {t('footer.newsletterDescription')}
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-l-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors font-semibold">
                {t('footer.subscribe')}
              </button>
            </div>
          </div>
        </div>

        {/* Languages Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h4 className="font-semibold mb-6">{t('footer.languages')}</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className={`text-left transition-colors text-sm cursor-pointer p-2 rounded ${
                  locale === language.code
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
                title={`Switch to ${language.name}`}
              >
                {language.nativeName}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              Copyright {currentYear} NSP | All Right Reserved
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/terms-condition" className="text-gray-400 hover:text-white transition-colors">
                Terms Of Use
              </Link>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}