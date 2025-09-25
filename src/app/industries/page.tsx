import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'NSP: Elevating Digital Marketing for B2B & B2C Industries',
  description: 'NSP provides digital marketing services to a wide range of sectors in both B2B and B2C markets. Find out how we can help your company expand by clicking here!',
  openGraph: {
    locale: 'en_IN',
    type: 'website',
    url: 'https://www.nspglobalservices.com/industries',
    title: 'NSP: Elevating Digital Marketing for B2B & B2C Industries',
    description: 'NSP provides digital marketing services to a wide range of sectors in both B2B and B2C markets. Find out how we can help your company expand by clicking here!',
    siteName: 'NSP Global Services',
    images: [
      {
        url: 'https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nsp_global',
    title: 'NSP: Elevating Digital Marketing for B2B & B2C Industries',
    description: 'NSP provides digital marketing services to a wide range of sectors in both B2B and B2C markets. Find out how we can help your company expand by clicking here!',
    images: 'https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg',
  },
  alternates: {
    canonical: 'https://www.nspglobalservices.com/industries',
  },
}

interface IndustryCard {
  name: string
  slug: string
  image: string
  description: string
}

const industries: IndustryCard[] = [
  { name: 'Fashion', slug: 'fashion', image: 'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1736007716/Fashion_bptero.png', description: 'Digital marketing solutions for fashion brands and retailers' },
  { name: 'Automotive', slug: 'automotive', image: 'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1736006658/Automotive_ro2jqk.png', description: 'Drive sales and brand awareness in the automotive industry' },
  { name: 'Education', slug: 'education', image: 'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1736006521/Education_rdkhu2.png', description: 'Reach more students and grow educational institutions' },
  { name: 'Finance', slug: 'finance', image: 'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1736007385/Finance_vk9xkh.png', description: 'Build trust and generate leads in financial services' },
  { name: 'Food & Beverages', slug: 'food-beverage', image: 'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1736011525/Food_Beverage_l8c9sb.png', description: 'Boost your food and beverage business online' },
  { name: 'Franchises', slug: 'franchises', image: 'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1736007260/Franchises_txiv2a.png', description: 'Scale franchise operations with digital marketing' },
  { name: 'Heavy Equipment', slug: 'heavy-equipment', image: 'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1736009808/Heavy_Equipment_sxdq8n.png', description: 'Generate B2B leads for heavy equipment sales' },
  { name: 'Logistics & Transportation', slug: 'logistics', image: 'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1736012913/Logistics_Transportation_services_txax5m.png', description: 'Optimize logistics and transportation marketing' },
  { name: 'Industrial', slug: 'industrial-companies', image: 'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1736017000/Industrial_b2b_solutions.png', description: 'Industrial marketing solutions for B2B growth' },
  { name: 'Home & Repair', slug: 'home-repair', image: 'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1736012753/Home_Repair_hkxknr.png', description: 'Connect homeowners with repair services' },
  { name: 'Insurance', slug: 'insurance', image: 'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1736016236/Insurance_qcinv1.png', description: 'Generate qualified insurance leads online' },
  { name: 'Legal', slug: 'legal', image: 'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1736016542/Legal_lpjoss.png', description: 'Attorney and law firm marketing solutions' },
  { name: 'Local Consumer Services', slug: 'local-consumer', image: 'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1736015923/Local_Consumer_Services_waqrmo.png', description: 'Local business marketing and lead generation' },
  { name: 'Medical & Health', slug: 'medical-health', image: 'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1736006902/Healthcare_r9mjrf.png', description: 'Healthcare marketing and patient acquisition' },
  { name: 'Fitness', slug: 'fitness', image: 'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1736008158/Fitness_soiymr.png', description: 'Grow your fitness business and membership base' },
  { name: 'Professional Services', slug: 'professional-services', image: 'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1736011702/Professional_Services_wl1opq.png', description: 'B2B marketing for professional service providers' },
  { name: 'Real Estate', slug: 'real-estate', image: 'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1736018920/Real_Estate_uso9zp.png', description: 'Real estate agent and agency marketing' },
  { name: 'Recreation & Entertainment', slug: 'recreation', image: 'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1736017947/Recreation_Entertainment_wisq4t.png', description: 'Entertainment industry marketing solutions' },
  { name: 'Retail & Ecommerce', slug: 'retail-ecommerce', image: 'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1736022790/Retail_Ecommerce_epxebx.png', description: 'Ecommerce and retail digital marketing' },
  { name: 'Technology', slug: 'technology', image: 'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1736023585/Technology_acufuq.png', description: 'Tech company marketing and lead generation' },
  { name: 'Tourism & Hospitality', slug: 'tourism-hospitality', image: 'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1736014462/Tourism_Hospitality_nryhq1.png', description: 'Hospitality and tourism marketing solutions' },
  { name: 'Manufacturing', slug: 'manufacturing', image: 'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1736015260/Manufacturing_zkxwp0.png', description: 'Manufacturing industry B2B marketing' },
  { name: 'Government Agency', slug: 'government-agency', image: 'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1736007985/Government_agencies_xnv0e6.png', description: 'Government agency digital outreach' }
]

const faqData = [
  {
    question: 'How can digital marketing benefit industries?',
    answer: 'Digital marketing can benefit industries in several ways. It helps in reaching a wider audience, increasing brand visibility, and driving more targeted traffic to their websites. Additionally, it provides a cost-effective means to promote products and services, allowing industries to maximize their marketing budgets.'
  },
  {
    question: 'Which digital marketing channels are most effective for industries?',
    answer: 'When it comes to the most effective digital marketing channels for industries, it largely depends on their specific goals and target audience. However, social media marketing, search engine marketing, email marketing, and content marketing are generally considered highly effective channels.'
  },
  {
    question: 'How does SEO contribute to the success of digital marketing for industries?',
    answer: 'SEO, or search engine optimization, plays a crucial role in the success of digital marketing for industries. By implementing SEO strategies, industries can enhance their website\'s visibility on search engine result pages. This leads to increased organic traffic, higher search rankings, and ultimately better brand exposure and customer acquisition.'
  },
  {
    question: 'What is the importance of data analytics in digital marketing for industries?',
    answer: 'Data analytics holds immense importance in digital marketing for industries. It helps them gain valuable insights into consumer behavior, preferences, and trends. By analyzing this data, industries can make informed decisions, optimize their marketing strategies, and tailor their offerings to better meet customer needs. This ultimately enhances their overall marketing performance and results in higher conversion rates.'
  },
  {
    question: 'How can industries measure the ROI of their digital marketing efforts?',
    answer: 'To measure the return on investment (ROI) of their digital marketing efforts, industries can utilize various metrics and tools. They can track website traffic, conversion rates, click-through rates, and sales generated from their digital marketing campaigns. Additionally, implementing unique tracking URLs, utilizing conversion tracking codes, and conducting customer surveys can provide valuable data for calculating ROI. By regularly analyzing these metrics, industries can assess the effectiveness of their digital marketing strategies and make necessary adjustments for better results.'
  }
]

export default function IndustriesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="https://res.cloudinary.com/dyzdnyq0d/image/upload/v1737376195/20230726_200021_0000_csdp4b.png"
              alt="Digital Marketing Industries"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Digital Marketing Industries
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Specialized digital marketing solutions for every industry
            </p>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From healthcare to technology, we provide tailored digital marketing solutions 
              that drive results across all major industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <Link 
                key={index}
                href={`/industries/${industry.slug}`}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
              >
                <div className="relative h-48">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                All Industries - Digital Marketing Services
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                <p>
                  Welcome to NSP, your trusted partner in digital marketing for all industries. Whether you're in the education, healthcare, HVAC, fashion, real estate, automobile, fitness, or logistics industry, we have tailored solutions to help your business succeed. As a leading digital marketing agency, we understand the unique challenges and opportunities that different industries face. That's why we offer specialized services to cater to the specific needs of each sector.
                </p>
                
                <p>
                  If you're in the education industry, our <Link href="/industries/education" className="text-blue-600 hover:text-blue-700 font-semibold">digital marketing agency for education industry</Link> can help you reach a wider audience, attract more students, and promote your online education programs effectively. With our expertise in social media marketing, search engine marketing, and content marketing, we can help you maximize your marketing budget and achieve your goals.
                </p>

                <p>
                  For healthcare professionals looking to enhance their online presence, our <Link href="/industries/medical-health" className="text-blue-600 hover:text-blue-700 font-semibold">best healthcare digital marketing agency</Link> is here to support you. We can optimize your website for search engines, create engaging content to educate and inform your target audience, and implement effective strategies to increase patient appointments and conversions.
                </p>

                <p>
                  Fashion brands can benefit from our digital marketing expertise to stand out in the crowded online landscape. Our <Link href="/industries/fashion" className="text-blue-600 hover:text-blue-700 font-semibold">digital marketing for fashion brands</Link> is designed to increase brand awareness, drive traffic to your e-commerce website, and ultimately boost your sales. From social media campaigns to influencer marketing, we have the tools to make your brand shine.
                </p>

                <p>
                  Real estate agents can rely on us for the <Link href="/industries/real-estate" className="text-blue-600 hover:text-blue-700 font-semibold">best digital marketing for real estate</Link>. We understand the unique challenges of the industry and can help you generate quality leads, promote your listings, and increase your online visibility. With our comprehensive strategies, you can stay ahead of the competition and grow your business.
                </p>

                <p>
                  At NSP, we believe in delivering results. That's why we utilize the latest tools and strategies, closely monitor key metrics, and constantly optimize our campaigns to ensure the best return on investment for our clients. Contact us today to discuss your digital marketing needs and let us help you take your industry to new heights.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqData.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                      <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm mr-3">
                        {index + 1}
                      </span>
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed pl-9">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Grow Your Industry Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let our experts create a custom digital marketing strategy tailored specifically for your industry.
            </p>
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg inline-block"
            >
              Get Your Free Industry Analysis
            </Link>
          </div>
        </div>
      </main>

      <Footer />

      {/* JSON-LD Schema */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}