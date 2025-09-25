'use client'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'

interface IndustryPageProps {
  industry: string
}

interface IndustryContent {
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
  subcategories?: Array<{
    slug: string
    name: string
    description: string
  }>
  caseStudies?: Array<{
    title: string
    description: string
    result: string
  }>
}

function getIndustryContent(industry: string): IndustryContent {
  const industryName = industry.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  
  switch (industry) {
    case 'medical-health':
      return {
        title: 'Healthcare Digital Marketing Services',
        subtitle: 'Grow Your Practice with Patient-Focused Marketing',
        heroDescription: 'Expand your patient base and improve healthcare outcomes with HIPAA-compliant digital marketing strategies designed specifically for medical practices.',
        heroImage: 'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1736006902/Healthcare_r9mjrf.png',
        services: [
          { title: 'Patient Acquisition', description: 'Attract new patients through targeted digital marketing campaigns.', icon: '👩‍⚕️' },
          { title: 'Reputation Management', description: 'Build and maintain a positive online reputation for your practice.', icon: '⭐' },
          { title: 'HIPAA-Compliant Marketing', description: 'All marketing activities follow strict healthcare privacy regulations.', icon: '🔒' },
          { title: 'Telemedicine Promotion', description: 'Promote virtual healthcare services to expand your reach.', icon: '💻' }
        ],
        benefits: [
          { title: 'More Patient Appointments', description: 'Fill your schedule with qualified patients seeking your services.' },
          { title: 'Improved Patient Education', description: 'Share valuable health information to build trust and authority.' },
          { title: 'Enhanced Online Presence', description: 'Establish your practice as a trusted healthcare provider online.' },
          { title: 'Compliance Assurance', description: 'All marketing efforts maintain HIPAA compliance and patient privacy.' }
        ],
        subcategories: [
          { slug: 'alternative-medicine', name: 'Alternative Medicine', description: 'Marketing for holistic and alternative healthcare providers' },
          { slug: 'audiology', name: 'Audiology', description: 'Hearing healthcare and audiology practice marketing' },
          { slug: 'bio-technology', name: 'Bio Technology', description: 'Biotechnology and medical research marketing' },
          { slug: 'cardiology', name: 'Cardiology', description: 'Heart health and cardiovascular practice marketing' },
          { slug: 'chiropractors', name: 'Chiropractors', description: 'Chiropractic practice and spinal health marketing' },
          { slug: 'counselor', name: 'Counselors', description: 'Mental health counseling and therapy marketing' },
          { slug: 'dentists', name: 'Dentists', description: 'Dental practice and oral health marketing' },
          { slug: 'dermatology', name: 'Dermatology', description: 'Skin care and dermatology practice marketing' },
          { slug: 'doctors-offices', name: 'Doctors Offices', description: 'General practice and family medicine marketing' },
          { slug: 'ear-nose-throat-doctors', name: 'ENT Doctors', description: 'Ear, nose, and throat specialist marketing' },
          { slug: 'ehr-companies', name: 'EHR Companies', description: 'Electronic health record software marketing' },
          { slug: 'fertility-clinics', name: 'Fertility Clinics', description: 'Fertility treatment and reproductive health marketing' },
          { slug: 'hospice', name: 'Hospice', description: 'Hospice care and end-of-life services marketing' },
          { slug: 'hospitals-healthcare', name: 'Hospitals & Healthcare', description: 'Hospital systems and healthcare network marketing' },
          { slug: 'medical-imaging', name: 'Medical Imaging', description: 'Radiology and medical imaging services marketing' },
          { slug: 'mental-behavioral-health', name: 'Mental & Behavioral Health', description: 'Mental health and behavioral therapy marketing' },
          { slug: 'nursing-homes', name: 'Nursing Homes', description: 'Senior care and nursing facility marketing' },
          { slug: 'nutritionists-dieticians', name: 'Nutritionists & Dieticians', description: 'Nutrition and dietary counseling marketing' },
          { slug: 'ob-gyn', name: 'OB-GYN', description: 'Obstetrics and gynecology practice marketing' },
          { slug: 'occupational-therapy', name: 'Occupational Therapy', description: 'Occupational therapy and rehabilitation marketing' },
          { slug: 'oncologists', name: 'Oncologists', description: 'Cancer treatment and oncology practice marketing' },
          { slug: 'optometrists', name: 'Optometrists', description: 'Eye care and vision health marketing' },
          { slug: 'orthodontists', name: 'Orthodontists', description: 'Orthodontic treatment and braces marketing' },
          { slug: 'orthopedic', name: 'Orthopedic', description: 'Bone and joint health marketing' },
          { slug: 'personal-protective', name: 'Personal Protective Equipment', description: 'Medical PPE and safety equipment marketing' },
          { slug: 'pharmaceutical-companies', name: 'Pharmaceutical Companies', description: 'Pharmaceutical and drug company marketing' },
          { slug: 'plastic-surgery', name: 'Plastic Surgery', description: 'Cosmetic and reconstructive surgery marketing' },
          { slug: 'podiatry', name: 'Podiatry', description: 'Foot and ankle care marketing' },
          { slug: 'psychiatrists', name: 'Psychiatrists', description: 'Psychiatric care and mental health treatment marketing' },
          { slug: 'rehab-addiction-treatment', name: 'Rehab & Addiction Treatment', description: 'Addiction recovery and rehabilitation marketing' },
          { slug: 'speech-therapists', name: 'Speech Therapists', description: 'Speech therapy and communication disorder marketing' },
          { slug: 'telehealth', name: 'Telehealth', description: 'Virtual healthcare and telemedicine marketing' },
          { slug: 'urologists', name: 'Urologists', description: 'Urology and urinary health marketing' }
        ]
      }

    case 'real-estate':
      return {
        title: 'Real Estate Digital Marketing Services',
        subtitle: 'Accelerate Property Sales with Digital Marketing',
        heroDescription: 'Generate more leads, sell properties faster, and build your real estate brand with proven digital marketing strategies for the real estate industry.',
        heroImage: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&h=400&fit=crop',
        services: [
          { title: 'Lead Generation', description: 'Generate qualified buyer and seller leads consistently.', icon: '🏠' },
          { title: 'Property Marketing', description: 'Showcase listings with professional photography and virtual tours.', icon: '📸' },
          { title: 'Local Market Authority', description: 'Establish authority as the local real estate expert.', icon: '🌟' },
          { title: 'Social Media Presence', description: 'Build brand presence across social platforms.', icon: '📱' }
        ],
        benefits: [
          { title: 'More Quality Leads', description: 'Attract serious buyers and motivated sellers.' },
          { title: 'Faster Property Sales', description: 'Sell properties quicker with effective marketing.' },
          { title: 'Brand Recognition', description: 'Become the go-to real estate professional in your market.' },
          { title: 'Higher Commission Values', description: 'Close more deals and increase transaction values.' }
        ],
        subcategories: [
          { slug: 'apartments', name: 'Apartments', description: 'Apartment complex and rental property marketing' },
          { slug: 'commercial-real-estate', name: 'Commercial Real Estate', description: 'Commercial property sales and leasing marketing' },
          { slug: 'construction-companies', name: 'Construction Companies', description: 'Construction and building contractor marketing' },
          { slug: 'home-staging-services', name: 'Home Staging Services', description: 'Property staging and presentation marketing' },
          { slug: 'property-management', name: 'Property Management', description: 'Property management and rental services marketing' },
          { slug: 'real-estate-appraisers', name: 'Real Estate Appraisers', description: 'Property appraisal and valuation services marketing' },
          { slug: 'real-estate-investors', name: 'Real Estate Investors', description: 'Investment property and real estate investment marketing' },
          { slug: 'real-estate-photographers', name: 'Real Estate Photographers', description: 'Property photography and virtual tour marketing' },
          { slug: 'realtors', name: 'Realtors', description: 'Real estate agent and broker marketing' }
        ]
      }

    case 'technology':
      return {
        title: 'Technology Digital Marketing Services',
        subtitle: 'Scale Your Tech Business with Strategic Marketing',
        heroDescription: 'Drive user acquisition, increase product adoption, and build brand authority with specialized digital marketing for technology companies.',
        heroImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
        services: [
          { title: 'Product Marketing', description: 'Showcase technology products and software solutions effectively.', icon: '💻' },
          { title: 'User Acquisition', description: 'Generate trial sign-ups and paid conversions.', icon: '👥' },
          { title: 'Content Marketing', description: 'Create technical content that educates and converts.', icon: '📝' },
          { title: 'Developer Relations', description: 'Build community and engage with developer audiences.', icon: '🤝' }
        ],
        benefits: [
          { title: 'Increased Adoption', description: 'Drive more software downloads and user sign-ups.' },
          { title: 'Market Position', description: 'Establish thought leadership in your technology category.' },
          { title: 'Revenue Growth', description: 'Convert more trials to paid subscriptions.' },
          { title: 'Community Building', description: 'Build engaged developer and user communities.' }
        ],
        subcategories: [
          { slug: 'artificial-intelligence', name: 'Artificial Intelligence', description: 'AI and machine learning technology marketing' },
          { slug: 'cloud-computing', name: 'Cloud Computing', description: 'Cloud services and infrastructure marketing' },
          { slug: 'cloud-storage', name: 'Cloud Storage', description: 'Data storage and backup solutions marketing' },
          { slug: 'computer-repair', name: 'Computer Repair', description: 'IT repair and technical support marketing' },
          { slug: 'cybersecurity', name: 'Cybersecurity', description: 'Security solutions and cybersecurity marketing' },
          { slug: 'data-analytics', name: 'Data Analytics', description: 'Analytics and business intelligence marketing' },
          { slug: 'digital-marketing', name: 'Digital Marketing', description: 'Marketing technology and MarTech solutions' },
          { slug: 'it-consulting-firms', name: 'IT Consulting Firms', description: 'Technology consulting and implementation marketing' },
          { slug: 'mobile-app-development', name: 'Mobile App Development', description: 'App development and mobile solutions marketing' },
          { slug: 'robotics', name: 'Robotics', description: 'Robotics and automation technology marketing' },
          { slug: 'software', name: 'Software', description: 'Software products and SaaS marketing' },
          { slug: 'technology-companies', name: 'Technology Companies', description: 'General technology company marketing' },
          { slug: 'tele-communications', name: 'Telecommunications', description: 'Telecom and communication services marketing' },
          { slug: 'video-game-companies', name: 'Video Game Companies', description: 'Gaming industry and video game marketing' }
        ]
      }

    case 'finance':
      return {
        title: 'Financial Services Digital Marketing',
        subtitle: 'Build Trust and Grow Your Financial Business',
        heroDescription: 'Attract high-value clients and build trust with compliant digital marketing strategies designed for financial services companies.',
        heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop',
        services: [
          { title: 'Wealth Management', description: 'Target high-net-worth individuals seeking financial guidance.', icon: '💰' },
          { title: 'Compliance Marketing', description: 'Ensure all marketing meets financial industry regulations.', icon: '📝' },
          { title: 'Trust Building', description: 'Establish credibility and financial expertise.', icon: '🤝' },
          { title: 'Lead Generation', description: 'Generate qualified leads for financial services.', icon: '📈' }
        ],
        benefits: [
          { title: 'High-Value Clients', description: 'Attract clients with significant financial portfolios.' },
          { title: 'Regulatory Compliance', description: 'Maintain compliance with financial marketing regulations.' },
          { title: 'Trust & Authority', description: 'Build reputation as a knowledgeable financial expert.' },
          { title: 'Long-Term Relationships', description: 'Develop lasting client relationships for recurring revenue.' }
        ],
        subcategories: [
          { slug: 'accountants', name: 'Accountants', description: 'Accounting services and tax preparation marketing' },
          { slug: 'cpa-firms', name: 'CPA Firms', description: 'Certified public accounting and audit marketing' },
          { slug: 'credit-services', name: 'Credit Services', description: 'Credit repair and financial counseling marketing' },
          { slug: 'credit-unions', name: 'Credit Unions', description: 'Member-owned financial institution marketing' },
          { slug: 'financial-advisors', name: 'Financial Advisors', description: 'Investment advisory and wealth management marketing' },
          { slug: 'loan-officer', name: 'Loan Officers', description: 'Mortgage and lending services marketing' },
          { slug: 'wealth-management', name: 'Wealth Management', description: 'High-net-worth wealth management marketing' }
        ]
      }

    case 'automotive':
      return {
        title: 'Automotive Digital Marketing Services',
        subtitle: 'Drive Your Automotive Business Forward',
        heroDescription: 'Accelerate your automotive business growth with specialized digital marketing strategies that generate qualified leads and increase showroom traffic.',
        heroImage: 'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1736006658/Automotive_ro2jqk.png',
        services: [
          { title: 'Local SEO Optimization', description: 'Dominate local search results when customers search for car dealers nearby.', icon: '📍' },
          { title: 'Lead Generation Campaigns', description: 'Generate high-quality leads for vehicle sales and service appointments.', icon: '🎯' },
          { title: 'Video Marketing', description: 'Showcase vehicles and services through engaging video content.', icon: '🎥' },
          { title: 'Service Department Marketing', description: 'Promote maintenance services and parts to existing customers.', icon: '🔧' }
        ],
        benefits: [
          { title: 'More Qualified Leads', description: 'Attract customers actively looking for vehicles or automotive services.' },
          { title: 'Increased Showroom Traffic', description: 'Drive more potential buyers to visit your dealership.' },
          { title: 'Service Revenue Growth', description: 'Boost service department bookings and parts sales.' },
          { title: 'Brand Recognition', description: 'Establish your dealership as the trusted local automotive expert.' }
        ],
        subcategories: [
          { slug: 'auto-manufacturing', name: 'Auto Manufacturing', description: 'B2B marketing for automotive manufacturers and suppliers' },
          { slug: 'auto-parts-retailers', name: 'Auto Parts Retailers', description: 'Drive traffic and sales for parts stores' },
          { slug: 'auto-repair-services', name: 'Auto Repair Services', description: 'Generate appointments for repair shops' },
          { slug: 'automotive-dealers', name: 'Automotive Dealers', description: 'Increase vehicle sales and service revenue' },
          { slug: 'car-dealers', name: 'Car Dealers', description: 'Comprehensive dealership marketing solutions' },
          { slug: 'motorcycle-dealers', name: 'Motorcycle Dealers', description: 'Specialized marketing for motorcycle sales' },
          { slug: 'truck-companies', name: 'Commercial Truck Companies', description: 'B2B marketing for commercial vehicle businesses' }
        ]
      }

    case 'fashion':
      return {
        title: 'Fashion Digital Marketing Services',
        subtitle: 'Elevate Your Fashion Brand with Strategic Digital Marketing',
        heroDescription: 'Transform your fashion business with cutting-edge digital marketing strategies designed to increase brand visibility, drive sales, and build lasting customer relationships.',
        heroImage: 'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1736007716/Fashion_bptero.png',
        services: [
          { title: 'Social Media Marketing', description: 'Build a strong social presence with engaging content that showcases your fashion collections.', icon: '📱' },
          { title: 'Influencer Partnerships', description: 'Connect with fashion influencers to expand your reach and credibility.', icon: '👑' },
          { title: 'E-commerce SEO', description: 'Optimize your online store for search engines to attract fashion-conscious shoppers.', icon: '🔍' },
          { title: 'Visual Content Creation', description: 'Professional photography and video content that highlights your fashion products.', icon: '📸' }
        ],
        benefits: [
          { title: 'Increased Brand Awareness', description: 'Reach fashion enthusiasts across multiple digital platforms.' },
          { title: 'Higher Online Sales', description: 'Convert more visitors into customers with optimized shopping experiences.' },
          { title: 'Stronger Customer Loyalty', description: 'Build lasting relationships with fashion-forward consumers.' },
          { title: 'Competitive Advantage', description: 'Stay ahead of fashion trends and competitors in the digital space.' }
        ],
        subcategories: [
          { slug: 'alteration-services', name: 'Alteration Services', description: 'Clothing alteration and tailoring marketing' },
          { slug: 'beauty-salons', name: 'Beauty Salons', description: 'Beauty services and salon marketing' },
          { slug: 'clothing-rental', name: 'Clothing Rental', description: 'Fashion rental and subscription marketing' },
          { slug: 'consignment-shops', name: 'Consignment Shops', description: 'Second-hand and consignment fashion marketing' },
          { slug: 'jewelry-stores', name: 'Jewelry Stores', description: 'Fine jewelry and accessories marketing' },
          { slug: 'secondhand-stores', name: 'Secondhand Stores', description: 'Vintage and thrift fashion marketing' },
          { slug: 'shoe-stores', name: 'Shoe Stores', description: 'Footwear and shoe retail marketing' },
          { slug: 'vintage-stores', name: 'Vintage Stores', description: 'Vintage clothing and retro fashion marketing' }
        ]
      }

    default:
      return {
        title: `${industryName} Digital Marketing Services`,
        subtitle: `Specialized Digital Marketing Solutions for ${industryName}`,
        heroDescription: `Drive growth in the ${industryName.toLowerCase()} industry with our tailored digital marketing strategies designed to meet your specific business needs.`,
        heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
        services: [
          { title: 'Industry-Specific SEO', description: 'Optimize your website for industry-relevant keywords and search terms.', icon: '🎯' },
          { title: 'Content Marketing', description: 'Create valuable content that resonates with your target audience.', icon: '📝' },
          { title: 'Lead Generation', description: 'Generate qualified leads through targeted digital campaigns.', icon: '📈' },
          { title: 'Social Media Strategy', description: 'Build brand awareness and engage with your community.', icon: '📱' }
        ],
        benefits: [
          { title: 'Industry Expertise', description: `Deep understanding of ${industryName.toLowerCase()} market dynamics and customer behavior.` },
          { title: 'Proven Results', description: 'Track record of success with businesses in your industry.' },
          { title: 'Custom Strategies', description: 'Tailored approaches designed specifically for your business goals.' },
          { title: 'Competitive Advantage', description: 'Stay ahead of competitors with cutting-edge digital marketing tactics.' }
        ]
      }
  }
}

export default function IndustryPage({ industry }: IndustryPageProps) {
  const form = useRef<HTMLFormElement>(null)
  const router = useRouter()
  const content = getIndustryContent(industry)

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

        {/* Services Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Digital Marketing Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive digital marketing solutions tailored specifically for your industry
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

        {/* Subcategories Section (if available) */}
        {content.subcategories && (
          <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Specialized {content.title.replace(' Digital Marketing Services', '')} Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Choose your specific sector for targeted marketing solutions
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {content.subcategories.map((subcategory, index) => (
                  <Link key={index} href={`/industries/${industry}/${subcategory.slug}`}>
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border-2 border-transparent hover:border-blue-500">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{subcategory.name}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{subcategory.description}</p>
                      <div className="flex items-center text-blue-600 font-semibold">
                        Learn More
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Benefits Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Industry-Specific Approach?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We understand your industry's unique challenges and opportunities
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
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Let our industry experts create a custom digital marketing strategy that drives real results for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact"
                    className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                  >
                    Get Free Consultation
                  </Link>
                  <Link 
                    href="/industries"
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
                  >
                    View All Industries
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