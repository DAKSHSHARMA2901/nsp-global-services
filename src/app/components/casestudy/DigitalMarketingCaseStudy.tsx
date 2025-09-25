import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

interface DigitalMarketingCaseStudyProps {
    heading: string;
}

const DigitalMarketingCaseStudy: React.FC<DigitalMarketingCaseStudyProps> = ({ heading }) => {
    const formatBusinessName = (name: string) => {
        return name
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (char) => char.toUpperCase());
    };

    const businessName = formatBusinessName(heading);

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Digital Marketing Services for {businessName}
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 text-blue-100">
                                Specialized digital marketing strategies tailored for {businessName} businesses. 
                                Boost your online presence and drive measurable results.
                            </p>
                            <Link 
                                href="/contact" 
                                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
                            >
                                Get Free Consultation
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Services Overview */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                    Our {businessName} Marketing Solutions
                                </h2>
                                <p className="text-xl text-gray-600">
                                    ROI-driven strategies designed specifically for your industry
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                                <div className="bg-white p-8 rounded-lg shadow-lg">
                                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">SEO Optimization</h3>
                                    <p className="text-gray-600 text-center">
                                        Improve your search rankings and drive organic traffic to your {businessName} business.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-lg shadow-lg">
                                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">PPC Advertising</h3>
                                    <p className="text-gray-600 text-center">
                                        Target your ideal customers with strategic paid advertising campaigns.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-lg shadow-lg">
                                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Social Media Marketing</h3>
                                    <p className="text-gray-600 text-center">
                                        Build your brand presence and engage customers on social platforms.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-lg shadow-lg">
                                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Content Marketing</h3>
                                    <p className="text-gray-600 text-center">
                                        Create compelling content that resonates with your target audience.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-lg shadow-lg">
                                    <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Analytics & Reporting</h3>
                                    <p className="text-gray-600 text-center">
                                        Track performance and optimize campaigns for maximum ROI.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-lg shadow-lg">
                                    <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Mobile Optimization</h3>
                                    <p className="text-gray-600 text-center">
                                        Ensure your marketing reaches customers on all devices effectively.
                                    </p>
                                </div>
                            </div>

                            {/* Industry-Specific Benefits */}
                            <div className="bg-white p-8 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                                    Why Choose Our {businessName} Marketing Services?
                                </h3>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Industry Expertise</h4>
                                        <p className="text-gray-600 mb-4">
                                            We understand the unique challenges and opportunities in the {businessName} industry, 
                                            allowing us to create targeted strategies that deliver results.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Proven Results</h4>
                                        <p className="text-gray-600 mb-4">
                                            Our data-driven approach ensures every marketing dollar is optimized for maximum 
                                            return on investment and business growth.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Custom Strategies</h4>
                                        <p className="text-gray-600 mb-4">
                                            Every {businessName} business is unique. We develop personalized marketing 
                                            strategies that align with your specific goals and target audience.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Full-Service Support</h4>
                                        <p className="text-gray-600 mb-4">
                                            From strategy development to implementation and optimization, we provide 
                                            comprehensive digital marketing support for your {businessName} business.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-blue-900 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl font-bold mb-6">
                            Ready to Grow Your {businessName} Business?
                        </h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
                            Contact us today for a free consultation and discover how our specialized 
                            digital marketing services can help your {businessName} business thrive online.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link 
                                href="/contact" 
                                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                            >
                                Get Free Consultation
                            </Link>
                            <Link 
                                href="/services" 
                                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
                            >
                                View All Services
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default DigitalMarketingCaseStudy;