'use client'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'

interface UniversalSubcategoryPageProps {
  industry: string
  subcategory: string
}

interface SubcategoryContent {
  title: string
  subtitle: string
  heroDescription: string
  heroImage: string
  services: Array<{
    title: string
    description: string
    icon: string
  }>
  benefits: Array<{
    title: string
    description: string
  }>
  industryStats?: Array<{
    number: string
    description: string
  }>
  specialFeatures?: Array<{
    title: string
    description: string
  }>
}

// Comprehensive industry and subcategory data
function getSubcategoryContent(industry: string, subcategory: string): SubcategoryContent {
  const industryName = industry.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  const subcategoryName = subcategory.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  
  // Medical-Health Industry
  if (industry === 'medical-health') {
    switch (subcategory) {
      case 'dentists':
        return {
          title: 'Dental Practice Digital Marketing',
          subtitle: 'Grow Your Dental Practice with Strategic Marketing',
          heroDescription: 'Attract more patients and build a thriving dental practice with HIPAA-compliant digital marketing strategies designed specifically for dentists.',
          heroImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=400&fit=crop',
          services: [
            { title: 'Patient Acquisition', description: 'Generate new patient appointments through targeted campaigns.', icon: '🦷' },
            { title: 'Local SEO', description: 'Dominate local search for dental services in your area.', icon: '📍' },
            { title: 'Reputation Management', description: 'Build and maintain excellent online reviews and ratings.', icon: '⭐' },
            { title: 'Appointment Booking', description: 'Online scheduling systems for convenient patient booking.', icon: '📅' }
          ],
          benefits: [
            { title: 'More Patient Appointments', description: 'Fill your schedule with quality dental patients.' },
            { title: 'Higher Treatment Acceptance', description: 'Educate patients about dental treatments to increase acceptance rates.' },
            { title: 'Practice Growth', description: 'Expand your practice with a steady stream of new patients.' },
            { title: 'HIPAA Compliance', description: 'All marketing activities maintain strict patient privacy compliance.' }
          ]
        }
      
      case 'chiropractors':
        return {
          title: 'Chiropractic Practice Digital Marketing',
          subtitle: 'Attract More Patients to Your Chiropractic Practice',
          heroDescription: 'Grow your chiropractic practice with specialized digital marketing that educates patients about spinal health and drives appointments.',
          heroImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop',
          services: [
            { title: 'Pain Relief Marketing', description: 'Target patients seeking relief from back, neck, and joint pain.', icon: '🦴' },
            { title: 'Educational Content', description: 'Share knowledge about spinal health and wellness.', icon: '📚' },
            { title: 'Local Community Outreach', description: 'Connect with local sports teams and wellness events.', icon: '🏃‍♂️' },
            { title: 'Wellness Programs', description: 'Promote comprehensive wellness and prevention programs.', icon: '💪' }
          ],
          benefits: [
            { title: 'Patient Education', description: 'Educate the community about chiropractic benefits.' },
            { title: 'Wellness Authority', description: 'Establish yourself as a local wellness expert.' },
            { title: 'Recurring Patients', description: 'Build long-term patient relationships for ongoing care.' },
            { title: 'Referral Network', description: 'Develop relationships with other healthcare providers.' }
          ]
        }

      case 'cardiology':
        return {
          title: 'Cardiology Practice Digital Marketing',
          subtitle: 'Heart-Focused Marketing for Cardiologists',
          heroDescription: 'Expand your cardiology practice with specialized marketing that reaches patients with heart conditions and promotes cardiovascular health.',
          heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop',
          services: [
            { title: 'Heart Health Education', description: 'Educate patients about cardiovascular health and prevention.', icon: '❤️' },
            { title: 'Specialist Referrals', description: 'Build referral networks with primary care physicians.', icon: '🩺' },
            { title: 'Advanced Procedures', description: 'Promote specialized cardiac procedures and treatments.', icon: '🏥' },
            { title: 'Emergency Care', description: 'Market emergency cardiac services and rapid response.', icon: '🚨' }
          ],
          benefits: [
            { title: 'Specialist Recognition', description: 'Establish reputation as a leading cardiologist.' },
            { title: 'Preventive Care', description: 'Promote heart health prevention and early intervention.' },
            { title: 'Advanced Treatments', description: 'Showcase cutting-edge cardiac procedures.' },
            { title: 'Life-Saving Impact', description: 'Connect with patients needing critical cardiac care.' }
          ]
        }
    }
  }

  // Real Estate Industry
  if (industry === 'real-estate') {
    switch (subcategory) {
      case 'realtors':
        return {
          title: 'Real Estate Agent Digital Marketing',
          subtitle: 'Sell More Properties with Digital Marketing',
          heroDescription: 'Generate more leads, sell more homes, and build your real estate brand with proven digital marketing strategies for realtors.',
          heroImage: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&h=400&fit=crop',
          services: [
            { title: 'Lead Generation', description: 'Generate qualified buyer and seller leads consistently.', icon: '🏠' },
            { title: 'Property Marketing', description: 'Showcase listings with professional photography and virtual tours.', icon: '📸' },
            { title: 'Local Market Authority', description: 'Establish yourself as the local real estate expert.', icon: '🌟' },
            { title: 'Social Media Presence', description: 'Build your personal brand across social platforms.', icon: '📱' }
          ],
          benefits: [
            { title: 'More Listings', description: 'Attract homeowners ready to sell their properties.' },
            { title: 'Qualified Buyers', description: 'Generate serious buyer leads with pre-approval status.' },
            { title: 'Faster Sales', description: 'Sell properties quicker with effective marketing.' },
            { title: 'Brand Recognition', description: 'Become the go-to realtor in your local market.' }
          ]
        }

      case 'commercial-real-estate':
        return {
          title: 'Commercial Real Estate Marketing',
          subtitle: 'Drive Commercial Property Success',
          heroDescription: 'Accelerate commercial real estate transactions with B2B marketing strategies that connect with investors, businesses, and developers.',
          heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop',
          services: [
            { title: 'Investment Marketing', description: 'Target commercial real estate investors and funds.', icon: '🏢' },
            { title: 'Business Relocations', description: 'Market to businesses seeking new locations.', icon: '🚚' },
            { title: 'Development Projects', description: 'Promote commercial development opportunities.', icon: '🏗️' },
            { title: 'Tenant Acquisition', description: 'Find quality tenants for commercial properties.', icon: '🤝' }
          ],
          benefits: [
            { title: 'Higher Transaction Values', description: 'Close larger commercial real estate deals.' },
            { title: 'Investor Networks', description: 'Build relationships with serious commercial investors.' },
            { title: 'Market Expertise', description: 'Establish authority in commercial real estate markets.' },
            { title: 'Development Opportunities', description: 'Connect with developers and project managers.' }
          ]
        }
    }
  }

  // Technology Industry
  if (industry === 'technology') {
    switch (subcategory) {
      case 'software':
        return {
          title: 'Software Company Digital Marketing',
          subtitle: 'Scale Your Software Business with Strategic Marketing',
          heroDescription: 'Drive software adoption, increase user acquisition, and build brand authority with specialized digital marketing for software companies.',
          heroImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
          services: [
            { title: 'Product Marketing', description: 'Showcase software features and benefits effectively.', icon: '💻' },
            { title: 'User Acquisition', description: 'Generate trial sign-ups and paid conversions.', icon: '👥' },
            { title: 'Content Marketing', description: 'Create technical content that educates and converts.', icon: '📝' },
            { title: 'Developer Relations', description: 'Build community and engage with developer audiences.', icon: '🤝' }
          ],
          benefits: [
            { title: 'Increased Downloads', description: 'Drive more software downloads and trial sign-ups.' },
            { title: 'User Engagement', description: 'Improve user onboarding and feature adoption.' },
            { title: 'Market Position', description: 'Establish thought leadership in your software category.' },
            { title: 'Revenue Growth', description: 'Convert more trials to paid subscriptions.' }
          ]
        }

      case 'cybersecurity':
        return {
          title: 'Cybersecurity Company Marketing',
          subtitle: 'Secure Your Marketing Success',
          heroDescription: 'Build trust, demonstrate expertise, and generate enterprise leads with specialized marketing for cybersecurity companies.',
          heroImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop',
          services: [
            { title: 'Trust Building', description: 'Establish credibility and security expertise.', icon: '🔒' },
            { title: 'Enterprise Sales', description: 'Generate B2B leads for enterprise security solutions.', icon: '🏢' },
            { title: 'Threat Education', description: 'Educate market about cybersecurity threats and solutions.', icon: '🛡️' },
            { title: 'Compliance Marketing', description: 'Promote compliance and regulatory solutions.', icon: '📋' }
          ],
          benefits: [
            { title: 'Enterprise Contracts', description: 'Secure large cybersecurity contracts.' },
            { title: 'Industry Authority', description: 'Become a recognized cybersecurity thought leader.' },
            { title: 'Solution Awareness', description: 'Educate market about your security solutions.' },
            { title: 'Trust & Credibility', description: 'Build reputation as a reliable security partner.' }
          ]
        }
    }
  }

  // Finance Industry
  if (industry === 'finance') {
    switch (subcategory) {
      case 'financial-advisors':
        return {
          title: 'Financial Advisor Digital Marketing',
          subtitle: 'Grow Your Financial Advisory Practice',
          heroDescription: 'Attract high-value clients and build trust with compliant digital marketing strategies designed for financial advisors.',
          heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop',
          services: [
            { title: 'Wealth Management', description: 'Target high-net-worth individuals seeking financial guidance.', icon: '💰' },
            { title: 'Retirement Planning', description: 'Market retirement planning and 401k services.', icon: '🏖️' },
            { title: 'Investment Education', description: 'Share investment knowledge and market insights.', icon: '📊' },
            { title: 'Compliance Marketing', description: 'Ensure all marketing meets financial industry regulations.', icon: '📝' }
          ],
          benefits: [
            { title: 'High-Value Clients', description: 'Attract clients with significant investment portfolios.' },
            { title: 'Trust & Authority', description: 'Build reputation as a knowledgeable financial expert.' },
            { title: 'Regulatory Compliance', description: 'Maintain compliance with financial marketing regulations.' },
            { title: 'Long-Term Relationships', description: 'Develop lasting client relationships for recurring revenue.' }
          ]
        }
    }
  }

  // Default content for any industry/subcategory combination
  return {
    title: `${subcategoryName} Digital Marketing Services`,
    subtitle: `Specialized Marketing Solutions for ${subcategoryName}`,
    heroDescription: `Drive growth in your ${subcategoryName.toLowerCase()} business with our tailored digital marketing strategies designed specifically for the ${industryName.toLowerCase()} industry.`,
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    services: [
      {
        title: 'Industry-Specific SEO',
        description: `Optimize your website for ${subcategoryName.toLowerCase()} keywords and search terms.`,
        icon: '🎯'
      },
      {
        title: 'Lead Generation',
        description: `Generate qualified leads for your ${subcategoryName.toLowerCase()} business.`,
        icon: '📈'
      },
      {
        title: 'Content Marketing',
        description: `Create valuable content that resonates with your ${subcategoryName.toLowerCase()} audience.`,
        icon: '📝'
      },
      {
        title: 'Social Media Strategy',
        description: `Build brand awareness in the ${subcategoryName.toLowerCase()} community.`,
        icon: '📱'
      }
    ],
    benefits: [
      {
        title: 'Industry Expertise',
        description: `Deep understanding of the ${subcategoryName.toLowerCase()} market and customer behavior.`
      },
      {
        title: 'Proven Results',
        description: `Track record of success with ${subcategoryName.toLowerCase()} businesses.`
      },
      {
        title: 'Custom Strategies',
        description: 'Tailored approaches designed specifically for your business goals.'
      },
      {
        title: 'Competitive Advantage',
        description: `Stay ahead of competitors with cutting-edge ${subcategoryName.toLowerCase()} marketing tactics.`
      }
    ]
  }
}

export default function UniversalSubcategoryPage({ industry, subcategory }: UniversalSubcategoryPageProps) {
  const form = useRef<HTMLFormElement>(null)
  const router = useRouter()
  const content = getSubcategoryContent(industry, subcategory)
  const industryName = industry.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

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
        {/* Hero Section */}
        <div className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center">
          <div className="absolute inset-0">
            <Image
              src={content.heroImage}
              alt={content.title}
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <nav className="text-blue-100 mb-4">
                <Link href="/industries" className="hover:text-white">Industries</Link>
                <span className="mx-2">→</span>
                <Link href={`/industries/${industry}`} className="hover:text-white">{industryName}</Link>
                <span className="mx-2">→</span>
                <span>{content.title}</span>
              </nav>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {content.title}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                {content.subtitle}
              </p>
              <p className="text-lg text-blue-100 mb-8 max-w-3xl">
                {content.heroDescription}
              </p>
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg inline-block"
              >
                Get Your Free Industry Analysis
              </Link>
            </div>
          </div>
        </div>

        {/* Industry Stats Section (if available) */}
        {content.industryStats && (
          <div className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Industry Insights</h2>
                <p className="text-gray-300">Key statistics that drive our marketing strategies</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {content.industryStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{stat.number}</div>
                    <p className="text-gray-300">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Services Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Specialized Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive digital marketing solutions tailored for your specific market
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.services.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Industry Expertise?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We understand the unique challenges and opportunities in your market
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {content.benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-6 mt-1">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Accelerate Your Growth?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Let our industry experts create a custom marketing strategy that drives real results for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact"
                    className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                  >
                    Get Free Consultation
                  </Link>
                  <Link 
                    href={`/industries/${industry}`}
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
                  >
                    View All {industryName} Services
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Quote</h3>
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
                      placeholder="Tell us about your business goals"
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
      </main>
      <Footer />
    </div>
  )
}