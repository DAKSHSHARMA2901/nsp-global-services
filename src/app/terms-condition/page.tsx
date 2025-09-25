import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms and Conditions | NSP Global Services',
  description: 'Read the terms and conditions for NSP Global Services. Learn about our policies, user responsibilities, and service agreements.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/terms-condition',
  },
};

export default function TermsConditions() {
  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Terms and Conditions
              </h1>
              <p className="text-lg text-gray-600">
                Last updated: September 22, 2025
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By accessing and using NSP Global Services' website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Provided</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  NSP Global Services provides digital marketing services including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Pay-Per-Click (PPC) Advertising</li>
                  <li>Content Marketing</li>
                  <li>Web Design and Development</li>
                  <li>Social Media Marketing</li>
                  <li>Digital Marketing Consulting</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Client Responsibilities</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Clients are responsible for:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Providing accurate and complete information</li>
                  <li>Timely payment of invoices</li>
                  <li>Cooperation in project execution</li>
                  <li>Compliance with applicable laws and regulations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Payment terms are as follows:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Monthly services are billed in advance</li>
                  <li>Project-based work requires 50% upfront payment</li>
                  <li>Late payments may incur additional fees</li>
                  <li>All prices are in USD unless otherwise specified</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All original work created by NSP Global Services remains our intellectual property until full payment is received. Upon payment, clients receive usage rights as specified in the service agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  NSP Global Services shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Termination</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Either party may terminate services with 30 days written notice. Upon termination, all outstanding invoices become immediately due and payable.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For questions regarding these terms and conditions, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> info@nspglobalservices.com<br/>
                    <strong>Phone:</strong> +447436220544<br/>
                    <strong>Address:</strong> London, United Kingdom
                  </p>
                </div>
              </section>
            </div>

            {/* CTA Section */}
            <div className="mt-12 text-center bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Have Questions About Our Terms?
              </h3>
              <p className="text-gray-600 mb-6">
                Our legal team is here to help clarify any questions you may have.
              </p>
              <a 
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}