'use client'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import TextSphere from './TextSphere'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'

interface SEOForServiceProps {
  service: string
}

interface ServiceContent {
  title: string
  subtitle: string
  keywords: string[]
  heroDescription: string
  services: Array<{
    title: string
    description: string
    image?: string
  }>
  whyChooseUs: Array<{
    title: string
    description: string
  }>
}

function getServiceContent(service: string): ServiceContent {
  const serviceName = service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  
  switch (service) {
    case 'window-cleaning':
      return {
        title: 'Window Cleaning SEO Services',
        subtitle: "Let's talk about how we can maximize your ROI from Premium SEO Services",
        keywords: ["Tags", "Meta", "SEO", "Audit", "Local", "Maps", "Links", "Schema", "Content", "Keywords"],
        heroDescription: 'Drive organic growth in the window cleaning industry with our expert SEO services.',
        services: [
          {
            title: 'Dominate search rankings with SEO keyword research services',
            description: 'Stay ahead of the competition and increase your website\'s visibility and traffic.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop'
          },
          {
            title: 'Boost your website ranking with our On Page SEO services',
            description: 'Maximize your online presence with optimized keywords, enhanced content, and more!',
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop'
          },
          {
            title: 'Expand your digital footprint with off-page SEO services',
            description: 'Drive engagement and broaden your reach with our tailored strategies.',
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop'
          },
          {
            title: 'Take your website to the top of SERP with advanced technical SEO',
            description: 'Optimize your speed, navigation, and structured data for maximum success online.',
            image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&h=300&fit=crop'
          },
          {
            title: 'Engage with users on all devices with expert mobile SEO services',
            description: 'Don\'t miss out on potential customers from the growing mobile market.',
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop'
          },
          {
            title: 'Dominate your local market with top localization SEO services',
            description: 'Boost your visibility on Google Maps and local directories to connect with nearby customers and grow your business.',
            image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&h=300&fit=crop'
          }
        ],
        whyChooseUs: [
          {
            title: 'SEO Services Near Me',
            description: 'NSP Global Services - We are just a Click Away for all your SEO needs.'
          },
          {
            title: 'SEO Optimization',
            description: 'Stay ahead with the latest SEO techniques tailored to your specific industry needs.'
          },
          {
            title: 'Improve Search Rankings',
            description: 'Climb to the top of search results with our proven track record of success.'
          },
          {
            title: 'Experience and Expertise',
            description: 'A team of SEO experts dedicated to keeping you ahead of the competition.'
          }
        ]
      }
    default:
      return {
        title: `${serviceName} SEO Services`,
        subtitle: "Let's talk about how we can maximize your ROI from Premium SEO Services",
        keywords: ["SEO", "Rankings", "Traffic", "Keywords", "Content", "Local", "Technical", "Mobile", "Analytics", "Growth"],
        heroDescription: `Drive organic growth in the ${serviceName.toLowerCase()} industry with our expert SEO services.`,
        services: [
          {
            title: 'Keyword Research & Strategy',
            description: 'Identify the most effective keywords for your industry and target audience.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop'
          },
          {
            title: 'On-Page SEO Optimization',
            description: 'Optimize your website structure, content, and meta data for search engines.',
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop'
          },
          {
            title: 'Local SEO Services',
            description: 'Dominate local search results and attract customers in your area.',
            image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&h=300&fit=crop'
          },
          {
            title: 'Technical SEO Audit',
            description: 'Ensure your website meets all technical requirements for optimal performance.',
            image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&h=300&fit=crop'
          }
        ],
        whyChooseUs: [
          {
            title: 'Industry Expertise',
            description: `Specialized knowledge in ${serviceName.toLowerCase()} industry SEO best practices.`
          },
          {
            title: 'Proven Results',
            description: 'Track record of improving search rankings and driving organic traffic.'
          },
          {
            title: 'Custom Strategies',
            description: 'Tailored SEO solutions designed specifically for your business needs.'
          },
          {
            title: 'Ongoing Support',
            description: 'Continuous monitoring and optimization to maintain your competitive edge.'
          }
        ]
      }
  }
}

export default function SEOForService({ service }: SEOForServiceProps) {
  const form = useRef<HTMLFormElement>(null)
  const router = useRouter()
  const content = getServiceContent(service)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (form.current) {
      emailjs
        .sendForm('service_xeikd6k', 'template_184dkpm', form.current, {
          publicKey: 'n--h-ZLHb25m5t0A1',
        })
        .then(
          () => {
            console.log('SUCCESS!')
            router.push('/contact')
          },
          (error) => {
            console.log('FAILED...', error.text)
          },
        )
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {content.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {content.subtitle}
            </p>
            <p className="text-lg text-gray-700">
              {content.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Free Consultation
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 text-center"
              >
                Contact Us Now
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-96 h-96">
              <TextSphere texts={content.keywords} />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Drive Your Business Growth with Advanced SEO Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive SEO solutions designed to boost your online visibility and drive targeted traffic to your business.
            </p>
          </div>

          <div className="space-y-16">
            {content.services.map((serviceItem, index) => (
              <div 
                key={index} 
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                    {serviceItem.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {serviceItem.description}
                  </p>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Learn More 
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                <div className={`${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 h-64 flex items-center justify-center">
                    {serviceItem.image ? (
                      <div className="w-full h-full relative rounded-lg overflow-hidden">
                        <Image 
                          src={serviceItem.image} 
                          alt={serviceItem.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 400px"
                        />
                      </div>
                    ) : (
                      <div className="text-6xl text-blue-600">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-24 h-24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Increase your online presence and drive success with NSP's comprehensive digital marketing services. 
              Benefit from increased visibility, lead generation, and revenue growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Tools That We Use
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              We leverage industry-leading SEO tools and platforms to deliver exceptional results
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-blue-600 font-semibold text-lg mb-2">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              What People Say
            </h2>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Get Your Free Quote
              </h2>
              <p className="text-xl text-blue-100">
                Ready to boost your search rankings? Contact us today for a personalized SEO strategy.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}