'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import TextSphere from './TextSphere';
import { 
  HiLocationMarker, 
  HiPhone, 
  HiMail, 
  HiGlobe,
  HiChartBar,
  HiSearchCircle,
  HiTrendingUp,
  HiLightBulb,
  HiShieldCheck,
  HiClock,
  HiStar,
  HiCheckCircle,
  HiEye,
  HiCursorClick
} from 'react-icons/hi';
import { GoPlus } from 'react-icons/go';

interface SEOServiceProps {
  heading: string;
  subtitle: string;
  serviceSlug: string;
}

export default function SEOService({ heading, subtitle, serviceSlug }: SEOServiceProps) {
  const [selection, setSelection] = useState<number | null>(null);
  const form = useRef<HTMLFormElement>(null);

  const toggle = (i: number) => {
    if (selection === i) {
      return setSelection(null);
    }
    setSelection(i);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm('service_xeikd6k', 'template_184dkpm', form.current, {
          publicKey: 'n--h-ZLHb25m5t0A1',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };

  // Dynamic content based on service type
  const getServiceContent = () => {
    if (serviceSlug === 'nationwide-seo') {
      return {
        heroImage: 'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1737401412/48_20240124_202950_0001_kioinh.png',
        description: 'Are you struggling to reach customers across the country? Are your competitors winning in the race to rank at the top of national search results? It\'s time to take your marketing strategy to the next level with nationwide SEO services.',
        additionalText: 'At our national SEO agency, we specialize in creating customized campaigns tailored to your business\'s specific needs and goals. Whether you\'re looking to increase national web traffic, boost your national rankings, or outperform your competitors, we have the expertise and tools to make it happen.',
        keyFactors: [
          {
            icon: <HiChartBar className="w-8 h-8 text-blue-600" />,
            title: 'Enterprise Competitor Analysis',
            description: 'We perform an in-depth analysis of your competitors\' SEO strategies to identify new national marketing opportunities and stay ahead of the game.'
          },
          {
            icon: <HiLocationMarker className="w-8 h-8 text-blue-600" />,
            title: 'Demographic Analysis',
            description: 'We help you reach your target audience across the country by identifying regional similarities and targeting similar consumers in different regions.'
          },
          {
            icon: <HiSearchCircle className="w-8 h-8 text-blue-600" />,
            title: 'Hyper-Local SEO Marketing',
            description: 'Using geo-fencing technology, we target ads toward specific locations you want to target in your campaign.'
          },
          {
            icon: <HiTrendingUp className="w-8 h-8 text-blue-600" />,
            title: 'Conversion Rate Optimization',
            description: 'Our team uses a powerful combination of short and long-tailed region-specific keywords to enhance your website\'s conversion rate.'
          }
        ],
        benefits: [
          'Generate more local traffic in the country you\'re targeting.',
          'Rank higher on Google SERPs in every area where your products and services are available.',
          'Build a loyal audience base and secure your bottom line',
          'Gain unique insights into region-specific keywords and tailor your services accordingly.',
          'Experience increased sales and conversions, which lead to a better bottom line'
        ],
        faqs: [
          {
            question: 'What is Nationwide SEO?',
            answer: 'Nationwide SEO is a strategy that helps businesses reach the highest possible ranking in both local and national search engine result pages (SERPs). It involves optimizing content, researching competitor analysis, creating effective outreach campaigns and a tailored SEO strategy for each business.'
          },
          {
            question: 'Why is Nationwide SEO important for businesses with a national or global audience?',
            answer: 'Nationwide SEO is a key component for businesses seeking to reach a global or national audience, as it helps build visibility in all geographic regions. Through National SEO Services, companies can create tailored campaigns and web traffic, competitor analysis, rankings, marketing strategies and packages that are optimized for the national market.'
          },
          {
            question: 'What are the key elements of successful Nationwide SEO?',
            answer: 'Having a comprehensive National SEO Campaign is the key to successful Nationwide SEO. To truly maximize success, your strategy should include relevant keyword research, competitor analysis and national rankings tracking.'
          },
          {
            question: 'How can I optimize my website for Nationwide SEO?',
            answer: 'To optimize your website for Nationwide SEO, the first step is to conduct a comprehensive National SEO Competitor Analysis. This will help you understand where you rank in comparison to other websites and what strategies are effective at driving national web traffic.'
          },
          {
            question: 'What are some common Nationwide SEO mistakes to avoid?',
            answer: 'When undertaking a Nationwide SEO campaign, one of the most common mistakes is to rely solely on keyword placement while neglecting content quality. Additionally, it\'s important to have a comprehensive understanding of the latest national SEO trends.'
          }
        ]
      };
    }
    
    // Window Cleaning SEO Content
    if (serviceSlug === 'window-cleaning-seo' || serviceSlug === 'window-cleaning-services') {
      return {
        heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Drive organic growth in the cleaning industry with our expert Window Cleaning SEO services. Let\'s talk about how we can maximise your ROI from Premium SEO Services.',
        additionalText: 'Our comprehensive SEO services are designed to give your window cleaning business a competitive advantage in the ever-evolving digital landscape. With our expert team, up-to-date strategies, and data-driven approach, we ensure maximum return on investment for your business.',
        keyFactors: [
          {
            icon: <HiSearchCircle className="w-8 h-8 text-blue-600" />,
            title: 'SEO Keyword Research',
            description: 'Dominate search rankings with comprehensive SEO keyword research services tailored specifically for window cleaning businesses. Stay ahead of the competition and increase your website\'s visibility and traffic.'
          },
          {
            icon: <HiGlobe className="w-8 h-8 text-blue-600" />,
            title: 'On-Page SEO Services',
            description: 'Boost your website ranking with our On-Page SEO services. Maximize your online presence with optimized keywords, enhanced content, and more!'
          },
          {
            icon: <HiTrendingUp className="w-8 h-8 text-blue-600" />,
            title: 'Off-Page SEO Services',
            description: 'Expand your digital footprint with off-page SEO services. Drive engagement and broaden your reach with our tailored strategies.'
          },
          {
            icon: <HiShieldCheck className="w-8 h-8 text-blue-600" />,
            title: 'Technical SEO',
            description: 'Take your website to the top of SERP with advanced technical SEO. Optimize your speed, navigation, and structured data for maximum success online.'
          },
          {
            icon: <HiLocationMarker className="w-8 h-8 text-blue-600" />,
            title: 'Local SEO Services',
            description: 'Dominate your local market with top localization SEO services. Boost your visibility on Google Maps and local directories to connect with nearby customers and grow your business.'
          },
          {
            icon: <HiChartBar className="w-8 h-8 text-blue-600" />,
            title: 'SEO Analytics Services',
            description: 'Take control of your online presence with powerful Analytics Services. Get actionable insights and track your site\'s performance for better online success.'
          }
        ],
        benefits: [
          'Increased online visibility for window cleaning services',
          'Higher search engine rankings in local markets',
          'More qualified leads and customer inquiries',
          'Improved website performance and user experience',
          'Competitive advantage in the cleaning industry',
          'Long-term sustainable growth and ROI',
          'Enhanced local presence and Google Maps visibility',
          'Better brand recognition and trust building'
        ],
        faqs: [
          {
            question: 'What is Window Cleaning SEO?',
            answer: 'Window Cleaning SEO refers to specialized search engine optimization strategies designed specifically for window cleaning businesses to improve their online visibility and attract more local customers searching for cleaning services.'
          },
          {
            question: 'How long does Window Cleaning SEO take to show results?',
            answer: 'Window Cleaning SEO typically shows initial results within 3-6 months, with significant improvements often seen within 6-12 months depending on competition and current website status. Local SEO improvements can sometimes be seen even sooner.'
          },
          {
            question: 'Why do I need SEO for my window cleaning business?',
            answer: 'SEO helps your window cleaning business appear in local search results when potential customers search for cleaning services in your area, leading to more leads, increased revenue, and better brand visibility in your local market.'
          }
        ]
      };
    }
    
    else {
      // Default content for other SEO services
      return {
        heroImage: 'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1737401412/48_20240124_202950_0001_kioinh.png',
        description: `Professional ${subtitle} SEO services designed to boost your online visibility and drive organic traffic to your website.`,
        additionalText: `Our expert team specializes in ${subtitle} SEO strategies that deliver measurable results. We use proven techniques and the latest SEO best practices to help your business rank higher in search engines.`,
        keyFactors: [
          {
            icon: <HiSearchCircle className="w-8 h-8 text-blue-600" />,
            title: 'Keyword Research & Analysis',
            description: `Comprehensive keyword research specifically tailored for ${subtitle} to identify high-value opportunities.`
          },
          {
            icon: <HiTrendingUp className="w-8 h-8 text-blue-600" />,
            title: 'On-Page Optimization',
            description: `Complete on-page SEO optimization to improve your ${subtitle} website's search engine rankings.`
          },
          {
            icon: <HiLightBulb className="w-8 h-8 text-blue-600" />,
            title: 'Content Strategy',
            description: `Strategic content creation and optimization to establish authority in the ${subtitle} space.`
          },
          {
            icon: <HiShieldCheck className="w-8 h-8 text-blue-600" />,
            title: 'Technical SEO',
            description: `Technical SEO improvements to ensure your ${subtitle} website meets all search engine requirements.`
          }
        ],
        benefits: [
          `Increased organic visibility for ${subtitle} related keywords`,
          'Higher search engine rankings and improved online presence',
          'More qualified traffic and potential customers',
          'Better user experience and website performance',
          'Long-term sustainable growth and ROI'
        ],
        faqs: [
          {
            question: `What is ${subtitle} SEO?`,
            answer: `${subtitle} SEO refers to the practice of optimizing websites and content specifically for ${subtitle} related keywords and topics to improve search engine visibility and rankings.`
          },
          {
            question: `How long does ${subtitle} SEO take to show results?`,
            answer: `${subtitle} SEO typically shows initial results within 3-6 months, with significant improvements often seen within 6-12 months depending on competition and current website status.`
          },
          {
            question: `What makes ${subtitle} SEO different?`,
            answer: `${subtitle} SEO requires specialized knowledge of the industry, specific keyword research, and targeted optimization strategies that address the unique challenges and opportunities in the ${subtitle} space.`
          }
        ]
      };
    }
  };

  const content = getServiceContent();

  return (
    <>
      {/* Hero Section with Background */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {heading}
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                {content?.description || 'Professional SEO services designed to boost your online visibility and drive organic traffic to your website.'}
              </p>
              
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">500+</div>
                  <div className="text-sm opacity-80">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">98%</div>
                  <div className="text-sm opacity-80">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">24/7</div>
                  <div className="text-sm opacity-80">Support Available</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get Free SEO Consultation
                </Link>
                <Link 
                  href="/ppc-services"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  View PPC Services
                </Link>
              </div>
            </div>

            {/* Right Image/Visual */}
            <div className="relative">
              {(serviceSlug === 'window-cleaning-seo' || serviceSlug === 'window-cleaning-services') ? (
                /* TextSphere for Window Cleaning SEO */
                <div className="relative z-10 bg-white rounded-2xl p-8 shadow-2xl">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">SEO Keywords</h3>
                    <p className="text-gray-600">Essential terms for window cleaning success</p>
                  </div>
                  <TextSphere texts={["Window Cleaning", "Local SEO", "Keywords", "Rankings", "Traffic", "Leads", "Google Maps", "Reviews", "Visibility", "Growth"]} />
                  
                  {/* Floating Stats Card */}
                  <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl shadow-xl">
                    <div className="flex items-center gap-3">
                      <HiTrendingUp className="w-8 h-8" />
                      <div>
                        <div className="text-2xl font-bold">+250%</div>
                        <div className="text-sm opacity-90">Lead Increase</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Success Card */}
                  <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-xl shadow-xl">
                    <div className="flex items-center gap-2">
                      <HiSearchCircle className="w-6 h-6" />
                      <div>
                        <div className="text-lg font-bold">Top 3</div>
                        <div className="text-xs opacity-90">Local Rankings</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Standard Image for Other Services */
                <div className="relative z-10 bg-white rounded-2xl p-8 shadow-2xl">
                  <Image
                    src={content?.heroImage || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                    alt={`${subtitle} SEO Services`}
                    width={600}
                    height={400}
                    className="rounded-lg w-full h-auto"
                    priority
                  />
                  
                  {/* Floating Stats Card */}
                  <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl shadow-xl">
                    <div className="flex items-center gap-3">
                      <HiTrendingUp className="w-8 h-8" />
                      <div>
                        <div className="text-2xl font-bold">+150%</div>
                        <div className="text-sm opacity-90">Avg. Traffic Increase</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Success Card */}
                  <div className="absolute -top-6 -right-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-xl shadow-xl">
                    <div className="flex items-center gap-2">
                      <HiStar className="w-6 h-6" />
                      <div>
                        <div className="text-lg font-bold">4.9/5</div>
                        <div className="text-xs opacity-90">Client Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl transform rotate-6 opacity-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Trusted by Leading Brands</h3>
            <p className="text-gray-600">Join hundreds of successful businesses that trust our SEO expertise</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-gray-400">BRAND</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-gray-400">COMPANY</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-gray-400">BUSINESS</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-gray-400">ENTERPRISE</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Sidebar - Services Links & Contact */}
            <div className="lg:col-span-1">
              {/* Services Links */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h4 className="text-lg font-bold text-gray-800 mb-4">Related Services</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/seo-services/international-seo" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors group">
                      <HiGlobe className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      International SEO
                    </Link>
                  </li>
                  <li>
                    <Link href="/seo-services/youtube-seo" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors group">
                      <HiSearchCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      YouTube SEO
                    </Link>
                  </li>
                  <li>
                    <Link href="/seo-services/mobile-seo" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors group">
                      <HiPhone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Mobile SEO
                    </Link>
                  </li>
                  <li>
                    <Link href="/seo-services/seo-consultancy" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors group">
                      <HiLightBulb className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      SEO Consultancy
                    </Link>
                  </li>
                  <li>
                    <Link href="/seo-services/shopify-seo" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors group">
                      <HiShieldCheck className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Shopify SEO
                    </Link>
                  </li>
                  <li>
                    <Link href="/seo-services/wordpress-seo" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors group">
                      <HiShieldCheck className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      WordPress SEO
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info Card */}
              <div className="bg-blue-600 text-white rounded-lg shadow-lg p-6">
                <h4 className="text-lg font-bold mb-4">Need Help?</h4>
                <p className="text-blue-100 mb-4 text-sm">
                  Ready to boost your search rankings? Contact us now!
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <HiMail className="w-5 h-5 mr-3 text-blue-200" />
                    <div>
                      <p className="text-sm font-semibold">Email Us</p>
                      <p className="text-blue-100 text-xs">info@nspglobalservices.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <HiPhone className="w-5 h-5 mr-3 text-blue-200" />
                    <div>
                      <p className="text-sm font-semibold">Call Us</p>
                      <p className="text-blue-100 text-xs">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
                <Link 
                  href="/contact"
                  className="block w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-lg transition-colors text-center mt-4"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-lg p-8">
                {/* Description */}
                <div className="mb-8">
                  <p className="text-gray-700 mb-4 text-lg leading-relaxed">{content.description}</p>
                  <p className="text-gray-700 leading-relaxed">{content.additionalText}</p>
                </div>

                {/* Contact Form Section */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-4">Get A Free Quote</h4>
                      <p className="text-gray-600 mb-4">Ready to boost your search rankings? Let's discuss your project!</p>
                    </div>
                    <div>
                      <form ref={form} onSubmit={sendEmail} className="space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input 
                            placeholder="Your Name" 
                            type="text" 
                            name="user_name" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                          />
                          <input 
                            placeholder="Your email" 
                            type="email" 
                            name="user_email" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                          />
                        </div>
                        <textarea 
                          name="message" 
                          placeholder="Tell us about your project" 
                          rows={3}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        />
                        <button 
                          type="submit" 
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                        >
                          Send Message
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                {/* Key Factors with Enhanced Design */}
                <div className="mb-12">
                  <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Our {subtitle} SEO?</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      Our comprehensive approach combines industry expertise with cutting-edge techniques to deliver exceptional results
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {content.keyFactors.map((factor, index) => (
                      <div key={index} className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                        {/* Background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="relative z-10">
                          {/* Icon with background */}
                          <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            {React.cloneElement(factor.icon, { className: "w-8 h-8 text-white" })}
                          </div>
                          
                          <h4 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                            {factor.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">{factor.description}</p>
                          
                          {/* Decorative element */}
                          <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Showcase Section */}
                <div className="mb-12">
                  <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 rounded-2xl p-12 text-white relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"></div>
                    
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <h3 className="text-3xl font-bold mb-6">See Real Results in Action</h3>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                          Our data-driven {subtitle} SEO strategies have helped businesses achieve remarkable growth across all key metrics.
                        </p>
                        
                        {/* Results grid */}
                        <div className="grid grid-cols-2 gap-6">
                          <div className="text-center">
                            <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                              <HiTrendingUp className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-green-400">+250%</div>
                            <div className="text-gray-300 text-sm">Organic Traffic</div>
                          </div>
                          <div className="text-center">
                            <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                              <HiEye className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-purple-400">+180%</div>
                            <div className="text-gray-300 text-sm">Visibility</div>
                          </div>
                          <div className="text-center">
                            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                              <HiCursorClick className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-yellow-400">+120%</div>
                            <div className="text-gray-300 text-sm">Conversions</div>
                          </div>
                          <div className="text-center">
                            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                              <HiCheckCircle className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-blue-400">98%</div>
                            <div className="text-gray-300 text-sm">Success Rate</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="bg-white rounded-xl p-6 shadow-2xl">
                          <Image
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="SEO Analytics Dashboard"
                            width={600}
                            height={400}
                            className="rounded-lg w-full h-auto"
                          />
                          
                          {/* Floating achievement badge */}
                          <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-xl shadow-xl">
                            <div className="flex items-center gap-2">
                              <HiStar className="w-6 h-6" />
                              <div>
                                <div className="text-lg font-bold">Top 1%</div>
                                <div className="text-xs opacity-90">SEO Agency</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Background decoration */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl transform rotate-3 opacity-20 -z-10"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Benefits with Enhanced Visual Design */}
                <div className="mb-12">
                  <div className="text-center mb-10">
                    <h3 className="text-4xl font-bold text-gray-800 mb-4">Transform Your Business with {subtitle} SEO</h3>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      Experience measurable growth and sustainable success with our proven optimization strategies
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {content.benefits.map((benefit, index) => (
                      <div key={index} className="group relative bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg">
                        <div className="flex items-start">
                          <div className="bg-gradient-to-r from-green-500 to-green-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                            <HiCheckCircle className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <span className="text-gray-800 font-medium text-lg leading-relaxed">{benefit}</span>
                          </div>
                        </div>
                        
                        {/* Decorative gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Call to Action within Benefits */}
                  <div className="mt-12 text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    <div className="relative z-10">
                      <h4 className="text-3xl font-bold mb-4">Ready to Dominate Search Results?</h4>
                      <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join hundreds of successful businesses that have transformed their online presence with our expert {subtitle} SEO services.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                          href="/contact"
                          className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                          Start Your SEO Journey
                        </Link>
                        <Link 
                          href="/contact"
                          className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                        >
                          Get Free Audit
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center bg-blue-600 text-white p-6 rounded-lg">
                    <span className="text-3xl font-bold block">95%</span>
                    <p className="text-blue-100 text-sm">Success Rate</p>
                  </div>
                  <div className="text-center bg-blue-600 text-white p-6 rounded-lg">
                    <span className="text-3xl font-bold block">96%</span>
                    <p className="text-blue-100 text-sm">Client Satisfaction</p>
                  </div>
                  <div className="text-center bg-blue-600 text-white p-6 rounded-lg">
                    <span className="text-3xl font-bold block">92%</span>
                    <p className="text-blue-100 text-sm">ROI Increase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">Get answers to common questions about our {subtitle} SEO services</p>
            </div>
            
            <div className="space-y-4">
              {content.faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    className="w-full p-6 text-left bg-white hover:bg-gray-50 transition-colors rounded-lg"
                    onClick={() => toggle(index)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                      <GoPlus 
                        className={`w-6 h-6 text-blue-600 transform transition-transform ${
                          selection === index ? 'rotate-45' : ''
                        }`}
                      />
                    </div>
                  </button>
                  {selection === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Boost Your SEO Rankings?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Let our SEO experts create a customized strategy that drives results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Get Free SEO Analysis
            </Link>
            <Link 
              href="/ppc-services"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-8 rounded-lg transition-colors"
            >
              View PPC Services
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}