import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Web Design & Development Services | Professional Website Solutions',
    description: "Professional web design and development services. Create fast, responsive websites optimized for conversions and user experience.",
    alternates: {
        canonical: 'https://www.nspglobalservices.com/design-development',
    },
    openGraph: {
        title: 'Web Design & Development Services | Professional Website Solutions',
        description: "Professional web design and development services. Create fast, responsive websites optimized for conversions and user experience.",
        url: 'https://www.nspglobalservices.com/design-development',
    },
}

export default function DesignDevelopment() {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                                Design & Development
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 text-blue-100">
                                Professional web design and development services that convert visitors into customers
                            </p>
                        </div>
                    </div>
                </section>

                {/* Design & Development Services */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                                Our Design & Development Solutions
                            </h2>
                            
                            <div className="grid md:grid-cols-2 gap-8 mb-16">
                                <div className="bg-white p-8 rounded-lg shadow-lg">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Responsive Web Design</h3>
                                    <p className="text-gray-600">
                                        Mobile-first designs that look perfect on all devices and provide optimal user experience.
                                    </p>
                                </div>
                                
                                <div className="bg-white p-8 rounded-lg shadow-lg">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">E-commerce Development</h3>
                                    <p className="text-gray-600">
                                        Custom e-commerce solutions with secure payment processing and inventory management.
                                    </p>
                                </div>
                                
                                <div className="bg-white p-8 rounded-lg shadow-lg">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">CMS Development</h3>
                                    <p className="text-gray-600">
                                        Content management systems that make it easy to update and maintain your website.
                                    </p>
                                </div>
                                
                                <div className="bg-white p-8 rounded-lg shadow-lg">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Optimization</h3>
                                    <p className="text-gray-600">
                                        Fast-loading websites optimized for search engines and superior user experience.
                                    </p>
                                </div>
                            </div>

                            <div className="text-center">
                                <a 
                                    href="/contact"
                                    className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
                                >
                                    Get Development Quote
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}