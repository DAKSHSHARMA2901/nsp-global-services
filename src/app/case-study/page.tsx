import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Case Studies - Digital Marketing Success Stories | NSP Global Services',
  description: 'Explore our successful digital marketing case studies and see how we helped businesses achieve remarkable growth through SEO, PPC, content marketing, and web development.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/case-study',
  },
  openGraph: {
    title: 'Case Studies - Digital Marketing Success Stories',
    description: 'Real results from our digital marketing campaigns and strategies.',
    url: 'https://www.nspglobalservices.com/case-study',
  },
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'SEO Services',
      description: 'Drive organic growth with comprehensive SEO strategies that boost rankings and increase traffic.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/case-study/seo-services',
      bgColor: 'from-blue-600 to-blue-800',
      results: ['300% increase in organic traffic', '1st page rankings for 50+ keywords', '150% boost in lead generation']
    },
    {
      title: 'PPC Services',
      description: 'Maximize your ad spend with data-driven PPC campaigns that deliver immediate results.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/case-study/ppc-services',
      bgColor: 'from-green-600 to-green-800',
      results: ['400% increase in ROAS', '60% reduction in cost per click', '250% growth in conversions']
    },
    {
      title: 'Content Marketing',
      description: 'Engage your audience with strategic content that builds brand authority and drives conversions.',
      image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/case-study/content-marketing',
      bgColor: 'from-purple-600 to-purple-800',
      results: ['500% increase in blog traffic', '200% boost in social engagement', '180% growth in email subscribers']
    },
    {
      title: 'Design & Development',
      description: 'Build stunning, high-performing websites that convert visitors into customers.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/case-study/design-development',
      bgColor: 'from-red-600 to-red-800',
      results: ['45% increase in conversion rate', '70% faster page load times', '300% boost in mobile traffic']
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Digital Marketing Case Studies
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Real results from our successful digital marketing campaigns. See how we've helped businesses achieve remarkable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Start Your Success Story
              </Link>
              <Link 
                href="#case-studies" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Successful Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">300%</div>
              <div className="text-gray-600">Average Traffic Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">250%</div>
              <div className="text-gray-600">Average ROI Improvement</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section id="case-studies" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore how we've helped businesses across industries achieve their digital marketing goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyVPonyRPonyRP9P4bOJ4vvfRd85xX6qjA7ycPMWGdLRkCqJCfROUP0HT/oTJRGEQDRRPo9/9k="
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${study.bgColor} opacity-80`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white text-center">{study.title}</h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {study.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href={study.link}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    View Full Case Study
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Let's discuss how we can help you achieve similar results with our proven digital marketing strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Your Free Consultation
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}