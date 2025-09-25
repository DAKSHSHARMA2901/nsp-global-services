import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Content Marketing Services | Strategic Content Creation & Marketing',
    description: "Professional content marketing services to drive engagement and conversions. Create compelling content that resonates with your audience and builds brand authority.",
    alternates: {
        canonical: 'https://www.nspglobalservices.com/content-marketing-services',
    },
    openGraph: {
        title: 'Content Marketing Services | Strategic Content Creation & Marketing',
        description: "Professional content marketing services to drive engagement and conversions. Create compelling content that resonates with your audience and builds brand authority.",
        url: 'https://www.nspglobalservices.com/content-marketing-services',
    },
}

export default function ContentMarketingServices() {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                                Content Marketing Services
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 text-blue-100">
                                Create compelling content that drives engagement, builds authority, and converts visitors into customers
                            </p>
                        </div>
                    </div>
                </section>

                {/* Content Marketing Services */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                                Our Content Marketing Solutions
                            </h2>
                            
                            <div className="grid md:grid-cols-2 gap-8 mb-16">
                                <div className="bg-white p-8 rounded-lg shadow-lg">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Blog Content Creation</h3>
                                    <p className="text-gray-600">
                                        SEO-optimized blog posts that establish your expertise and drive organic traffic to your website.
                                    </p>
                                </div>
                                
                                <div className="bg-white p-8 rounded-lg shadow-lg">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Social Media Content</h3>
                                    <p className="text-gray-600">
                                        Engaging social media posts, graphics, and campaigns that build brand awareness and community.
                                    </p>
                                </div>
                                
                                <div className="bg-white p-8 rounded-lg shadow-lg">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Marketing Content</h3>
                                    <p className="text-gray-600">
                                        Persuasive email campaigns that nurture leads and drive conversions through strategic messaging.
                                    </p>
                                </div>
                                
                                <div className="bg-white p-8 rounded-lg shadow-lg">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Video Content Strategy</h3>
                                    <p className="text-gray-600">
                                        Compelling video content that tells your story and engages audiences across multiple platforms.
                                    </p>
                                </div>
                            </div>

                            <div className="text-center">
                                <a 
                                    href="/contact"
                                    className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
                                >
                                    Get Content Marketing Quote
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