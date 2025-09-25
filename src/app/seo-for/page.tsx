import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'SEO Services for Different Industries | NSP Global Services',
  description: 'Specialized SEO services tailored for various industries. Drive organic growth with our industry-specific SEO strategies and expertise.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/seo-for',
  },
}

export default function SEOServicesForPage() {
  const industries = [
    {
      name: 'Window Cleaning Services',
      slug: 'window-cleaning',
      description: 'Boost your window cleaning business with targeted SEO strategies.',
      icon: '🏢'
    },
    {
      name: 'Restaurant & Food Services',
      slug: 'restaurant',
      description: 'Drive more customers to your restaurant with local SEO optimization.',
      icon: '🍽️'
    },
    {
      name: 'Healthcare & Medical',
      slug: 'healthcare',
      description: 'Improve patient acquisition with medical SEO best practices.',
      icon: '🏥'
    },
    {
      name: 'Legal & Law Firms',
      slug: 'legal',
      description: 'Attract more clients with specialized legal SEO strategies.',
      icon: '⚖️'
    },
    {
      name: 'Real Estate',
      slug: 'real-estate',
      description: 'Generate more leads with real estate SEO optimization.',
      icon: '🏠'
    },
    {
      name: 'Automotive Services',
      slug: 'automotive',
      description: 'Drive traffic to your auto repair and service business.',
      icon: '🚗'
    },
    {
      name: 'Beauty & Wellness',
      slug: 'beauty-wellness',
      description: 'Attract more clients to your beauty and wellness business.',
      icon: '💅'
    },
    {
      name: 'Construction & Contractors',
      slug: 'construction',
      description: 'Build your online presence with construction industry SEO.',
      icon: '🔨'
    },
    {
      name: 'E-commerce & Retail',
      slug: 'ecommerce',
      description: 'Increase online sales with e-commerce SEO optimization.',
      icon: '🛒'
    },
    {
      name: 'Technology & Software',
      slug: 'technology',
      description: 'Scale your tech business with specialized SEO strategies.',
      icon: '💻'
    },
    {
      name: 'Fitness & Sports',
      slug: 'fitness',
      description: 'Grow your fitness business with targeted SEO campaigns.',
      icon: '💪'
    },
    {
      name: 'Education & Training',
      slug: 'education',
      description: 'Reach more students with educational SEO optimization.',
      icon: '📚'
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="bg-gradient-to-br from-blue-50 to-white">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
            <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            SEO Services for Every Industry
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Specialized SEO strategies tailored to your industry's unique needs. 
            Drive organic growth with our proven methodologies.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Your Free SEO Consultation
          </Link>
        </div>
      </div>

      {/* Industry Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Industry
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every industry has unique SEO challenges and opportunities. Our specialized approach 
            ensures maximum visibility and growth for your specific business sector.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <Link 
              key={index}
              href={`/seo-for/${industry.slug}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
            >
              <div className="p-8 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {industry.description}
                </p>
                <div className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Why Choose Our Industry-Specific SEO */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Industry-Specific SEO Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Generic SEO strategies don't work for every business. Our industry-focused approach 
              delivers better results by understanding your specific market dynamics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Expertise</h3>
              <p className="text-gray-600">Deep understanding of your industry's unique challenges and opportunities.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Targeted Keywords</h3>
              <p className="text-gray-600">Industry-specific keyword research that drives qualified traffic.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Competitive Edge</h3>
              <p className="text-gray-600">Stay ahead of competitors with industry-focused SEO strategies.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Measurable Results</h3>
              <p className="text-gray-600">Track progress with industry-relevant metrics and KPIs.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See Your Industry Listed?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We work with businesses across all industries. Contact us to discuss 
            how we can create a custom SEO strategy for your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Custom SEO Strategy
            </Link>
            <Link 
              href="/seo-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View All SEO Services
            </Link>
          </div>
        </div>
      </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}