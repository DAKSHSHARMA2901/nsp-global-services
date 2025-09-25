'use client'
import React, { useState } from 'react'
import { GoChevronRight, GoPlus } from 'react-icons/go'
import Link from 'next/link'
import Image from 'next/image'

// Import components
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Newreadmorebutton from '@/components/Newreadmorebutton'
import EconnerceSEOPricing from '@/components/SEOPricing/EconnerceSEOPricing'
import SeoServiceBased from '@/components/SEOPricing/SeoServiceBased'
import SeoEnterprise from '@/components/SEOPricing/SeoEnterprise'

const data = [
    {
        id: 0,
        icon: null,
        statement: 'How long does it take to see results from SEO services?',
        paragraph: `SEO results typically take anywhere from 4 to 6 months for most businesses, depending on the competitiveness of their industry and keywords being targeted. An experienced SEO agency or professional can help you determine an ideal timeline for achieving desired results. The success of any SEO campaign is generally determined by a combination of factors such as the website's domain authority & quality score, competition in SERPs (Search Engine Result Pages), industry standards etc.`
    },
    {
        id: 1,
        icon: null,
        statement: 'Why do you need SEO services?',
        paragraph: `Search engine optimization (SEO) services are essential for any business looking to succeed online and increase their visibility in the search results. With SEO, businesses can improve their website's ranking on major search engines such as Google and Bing, allowing them to reach more people who may be interested in the products or services they offer.Professional SEO services are an investment into your business's future success; they ensure that you stay ahead of competition by improving your online presence through strategies like creating high-quality content & engaging with customers through social media platforms.`
    },
    {
        id: 2,
        icon: null,
        statement: 'What is SEO?',
        paragraph: 'Search engine optimization (SEO) refers to the techniques employed to enhance website traffic organically by improving its visibility on search engine results pages. The primary goal of SEO is to augment both the quality and quantity of website visitors.'
    },
    {
        id: 3,
        icon: null,
        statement: 'What are SEO services?',
        paragraph: 'Firstly there are two main categories – On-page SEO which refers to optimizing aspects directly related with webpages themselves such as content quality, title tags , meta descriptions , images alt tags etc., and off-page SEO which includes link building activity such as blog commenting/guest posting , press release syndication etc.'
    },
    {
        id: 4,
        icon: null,
        statement: 'How much do SEO services cost?',
        paragraph: `Generally packages offered by most agencies are one time setup fee + monthly maintenance service cost following completion of the initial setup phase until desired goals achieved although this varies from organization to another. Ultimately each business has its own unique needs but by leveraging combination reliable techniques it's possible to increase online visibility and gain ROI.`
    },
    {
        id: 5,
        icon: null,
        statement: 'How do you choose an SEO services provider?',
        paragraph: `Choosing the right SEO provider is essential for achieving desired results from search engine optimization (SEO) efforts. Before doing so, one should have a basic understanding of what SEO entails, including on page off page seo services, keyword research, technical audits and more. When it comes to selecting an SEO agency or expert, factors such as experience in the field and track record should be taken into account. Additionally, looking at the various packages offered can make the selection process easier by allowing you to compare costs and services being provided. Lastly, before engaging any service provider it is important to understand exactly what they will provide in terms of deliverables/outcomes associated with their monthly SEO packages as well as its duration.`
    }
]

const paragraph = `
<h2>Grow Your Online Presence and Reach More Customers with Our SEO Services</h2>
<p>Whether you need to optimize your website, create engaging content, build authority links, or perform a technical audit, we have the skills and experience to deliver results. We have a team of SEO experts who are certified by Google and other industry authorities. They use the latest SEO tools and techniques to analyse your site, your competitors, and your target keywords.</p>
<p>They also implement effective SEO strategies that increase your organic rankings, traffic, and conversions. They also monitor and measure your SEO performance and provide you with regular reports and feedback.</p>

<h2>Our SEO Services Include</h2>

<h3>1. On-page SEO</h3>
<p><a href="https://www.nspglobalservices.com/seo-services/on-page-seo">On-page SEO </a>is the foundation of your SEO strategy, as it helps your site rank for relevant queries and provide a great user experience. We optimize your web pages for your target keywords, write unique titles and Meta descriptions, and ensure your site is fast and user-friendly.</p>

<h3>2. Off-page SEO</h3>
<p>Off-page SEO is the process of building your online reputation and credibility, as it signals to search engines that your site is valuable and trustworthy. We increase your domain authority and trustworthiness by acquiring <a href="https://www.nspglobalservices.com/seo-services/link-building-services">high-quality backlinks</a> from relevant and authoritative websites in your niche.</p>

<h3>3. <a href="https://www.nspglobalservices.com/seo-services/technical-seo">Technical SEO</a></h3>
<p>We fix any issues that may prevent your site from being crawled and indexed by search engines, such as broken links, duplicate content, or poor site structure. We use advanced tools and methods to audit your site, identify and fix any technical errors, and optimize your site for optimal performance and usability.</p>

<h3>4. SEO Audit</h3>
<p>We analyse your site's performance, identify any gaps or opportunities, and provide actionable recommendations to improve your SEO strategy. We conduct a comprehensive <a href="https://www.nspglobalservices.com/seo-services/seo-audits">SEO audit</a>, covering all the aspects of SEO, such as on-page, off-page, and technical. We also provide you with a detailed report and a roadmap to implement the suggested changes and improvements.</p>

<h3>5. Keyword Research</h3>
<p>We find the best keywords for your business, based on your goals, audience, and competitors. We also help you create a keyword map and optimize your content accordingly. We use various keyword research tools and methods, such as keyword planner, keyword explorer, and competitor analysis, to find the most relevant, profitable, and low-competition keywords for your business.</p>

<h3>6. Content Marketing</h3>
<p><a href="https://www.nspglobalservices.com/content-marketing-services">Content marketing</a> helps you build trust, authority, and loyalty with your customers, as well as drive more organic traffic and leads to your site. We create and distribute engaging, informative, and persuasive content that attracts and converts your target audience. We also help you optimize your content for SEO and social media.</p>

<h3>7. Local SEO</h3>
<p>We help you rank higher for local searches, by optimizing your Google My Business profile, building local citations, and generating positive reviews. <a href="https://www.nspglobalservices.com/seo-services/local-seo">Local SEO</a> is the process of optimizing your site for local searches, such as "best pizza near me" or "dentist in Islamabad". Local SEO helps you attract more local customers, who are more likely to visit your physical location, call your phone number, or make a purchase. We help you optimize your Google My Business profile, which is a free listing that displays your business information, such as name, address, phone number, hours, reviews, etc., on Google Maps and Search.</p>

<h3>8. E-commerce SEO</h3>
<p>SEO is different from regular SEO, as it requires specific strategies and tactics, such as optimizing your product pages, category pages, and checkout process, for your products and customers. We also help you implement schema markup and other <a href="https://www.nspglobalservices.com/seo-services/ecommerce-seo">e-commerce SEO</a> best practices.</p>

<h2>Why Choose Us For SEO Services?</h2>
<p>We are not just another SEO agency. We are your partner in digital growth. Here are some reasons why you should choose us for SEO services:</p>

<h3>1. Our SEO Success Stories</h3>
<p>We have a proven track record of delivering results for our clients. We have helped them rank higher for competitive keywords, increase their organic traffic, and generate more leads and sales.</p>

<h3>2. Our SEO Expertise</h3>
<p>We have a team of SEO experts who are passionate, knowledgeable, and up-to-date with the latest SEO trends and best practices. They are also certified by Google and other industry authorities.</p>

<h3>3. Our SEO Customization</h3>
<p>We offer customized SEO solutions that match your goals, budget, and industry. We don't use cookie-cutter strategies or one-size-fits-all packages. We tailor our SEO services to your specific needs and preferences.</p>

<h3>4. Our SEO Transparency</h3>
<p>We are transparent and honest with our clients. We provide regular reports and updates on our SEO activities and results. We also communicate clearly and promptly, and answer any questions or concerns you may have.</p>

<h3>5. Our SEO Affordability</h3>
<p>We are affordable and flexible. We offer competitive pricing and flexible payment options. We also don't lock you into long-term contracts or charge any hidden fees.</p>

<h2>Ready to grow your business with SEO?</h2>
<p>If you are looking for a reliable, professional, and affordable SEO agency, look no further than NSP Global Services. We are here to help you achieve your online marketing goals and grow your business with SEO.</p>
<p>Contact us today for a free consultation and quote. We will analyze your website, your competitors, and your target keywords, and provide you with a custom SEO proposal.</p>
`;

export default function SeoServices() {
    const openReadmore = () => {
        const element = document.getElementById('readmore');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const [logged, setLogged] = useState(1)
    const Alltoggle = () => setLogged(1);
    const WebDesigntoggle = () => setLogged(2);
    const Marketingtoggle = () => setLogged(3);

    return (
        <>
            <Header />
            {/* Hero Section */}
            <div className="relative h-[70vh] bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        SEO Services for Revenue Growth
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-8">
                        Drive organic traffic and increase your online visibility
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/contact"
                            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors"
                        >
                            Get Free SEO Audit
                        </Link>
                        <button 
                            onClick={openReadmore}
                            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-8 rounded-lg transition-colors"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* Specialized SEO Services */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Specialized SEO Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Discover our range of specialized SEO solutions designed to meet your specific business needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Link 
                            href="/seo-services/nationwide-seo"
                            className="bg-gray-50 hover:bg-blue-50 p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300 group"
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600">Nationwide SEO</h3>
                            </div>
                            <p className="text-gray-600">Dominate search results across the nation with our comprehensive nationwide SEO strategies.</p>
                        </Link>

                        <Link 
                            href="/seo-services/local-seo"
                            className="bg-gray-50 hover:bg-blue-50 p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300 group"
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600">Local SEO</h3>
                            </div>
                            <p className="text-gray-600">Attract local customers and dominate local search results in your area.</p>
                        </Link>

                        <Link 
                            href="/seo-services/ecommerce-seo"
                            className="bg-gray-50 hover:bg-blue-50 p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300 group"
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600">E-commerce SEO</h3>
                            </div>
                            <p className="text-gray-600">Boost your online store's visibility and drive more sales with specialized e-commerce SEO.</p>
                        </Link>

                        <Link 
                            href="/seo-services/technical-seo"
                            className="bg-gray-50 hover:bg-blue-50 p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300 group"
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600">Technical SEO</h3>
                            </div>
                            <p className="text-gray-600">Optimize your website's technical foundation for better search engine performance.</p>
                        </Link>

                        <Link 
                            href="/seo-services/international-seo"
                            className="bg-gray-50 hover:bg-blue-50 p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300 group"
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600">International SEO</h3>
                            </div>
                            <p className="text-gray-600">Expand your global reach with our international SEO strategies and multilingual optimization.</p>
                        </Link>

                        <Link 
                            href="/seo-services/mobile-seo"
                            className="bg-gray-50 hover:bg-blue-50 p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300 group"
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600">Mobile SEO</h3>
                            </div>
                            <p className="text-gray-600">Optimize your website for mobile users and improve mobile search rankings.</p>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <div className="mb-4">
                                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                            </div>
                            <h2 className="text-xl font-bold text-gray-800 mb-4">SEO Services</h2>
                            <p className="text-gray-600 mb-6">
                                We are NSP Global Services, a digital marketing agency that specializes in SEO. We help businesses of all sizes and industries improve their visibility, traffic, and conversions on search engines.
                            </p>
                            <button 
                                onClick={openReadmore}
                                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                            >
                                <GoChevronRight className="mr-1" />
                                Read More
                            </button>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <div className="mb-4">
                                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                    </svg>
                                </div>
                            </div>
                            <h2 className="text-xl font-bold text-gray-800 mb-4">PPC Services</h2>
                            <p className="text-gray-600 mb-6">
                                PPC is one of the most effective and efficient ways to reach your target audience and grow your business online. We handle your PPC campaigns with expertise.
                            </p>
                            <Link 
                                href="/ppc-services"
                                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                            >
                                <GoChevronRight className="mr-1" />
                                Read More
                            </Link>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <div className="mb-4">
                                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </div>
                            </div>
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Content Marketing</h2>
                            <p className="text-gray-600 mb-6">
                                NSP Global Services is a leading digital marketing agency that specializes in content marketing for startups and small businesses.
                            </p>
                            <Link 
                                href="/content-marketing-services"
                                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                            >
                                <GoChevronRight className="mr-1" />
                                Read More
                            </Link>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <div className="mb-4">
                                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                            </div>
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Website Design</h2>
                            <p className="text-gray-600 mb-6">
                                At NSP Global Services, we offer a range of website design and development services that can help you achieve your online goals.
                            </p>
                            <Link 
                                href="/design-development"
                                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                            >
                                <GoChevronRight className="mr-1" />
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Process Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <p className="text-blue-600 uppercase tracking-wide font-semibold mb-2">PROCESS</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            How We Work to Bring the Best
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Your Pathway to Search Engine Dominance and Online Growth.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                1
                            </div>
                            <h6 className="text-xl font-bold text-gray-800 mb-4">Relevant Keywords</h6>
                            <p className="text-gray-600">
                                SEO is just a game of keywords, giving the high reach keywords is not the masterstroke but giving the keywords that make your reach high is the masterstroke here and that's what NSP Global Services does.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                2
                            </div>
                            <h6 className="text-xl font-bold text-gray-800 mb-4">Competitor Analysis</h6>
                            <p className="text-gray-600">
                                The best way to improve is by seeing and implementing the tactics used by your competitors that are successful in your field/niche and that's why NSP Global Services keep an eye on your competitor, analyse it and then implement it on your brand.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                3
                            </div>
                            <h6 className="text-xl font-bold text-gray-800 mb-4">Link Building</h6>
                            <p className="text-gray-600">
                                Connecting one web page to the another to improve the reach of your target audience can only be done through link building in SEO.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                4
                            </div>
                            <h6 className="text-xl font-bold text-gray-800 mb-4">Content Creation</h6>
                            <p className="text-gray-600">
                                The next step of SEO is writing and optimising the best content for your brand, that is non plagiarised, update and able to rank in the form of blogs, articles etc.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing Section */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <p className="text-blue-600 uppercase tracking-wide font-semibold mb-2">Pricing Plans</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                            Pick A Plan that Suits
                        </h2>
                    </div>

                    <div className="flex justify-center mb-8">
                        <div className="bg-white p-2 rounded-lg shadow-md">
                            <button 
                                className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                                    logged === 1 ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'
                                }`}
                                onClick={Alltoggle}
                            >
                                SEO Services Based
                            </button>
                            <button 
                                className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                                    logged === 2 ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'
                                }`}
                                onClick={WebDesigntoggle}
                            >
                                Ecommerce SEO Pricing
                            </button>
                            <button 
                                className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                                    logged === 3 ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'
                                }`}
                                onClick={Marketingtoggle}
                            >
                                Enterprise
                            </button>
                        </div>
                    </div>

                    <div className="text-center">
                        {logged === 1 && <SeoServiceBased />}
                        {logged === 2 && <EconnerceSEOPricing />}
                        {logged === 3 && <SeoEnterprise />}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-20 bg-blue-600">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-blue-200 text-lg mb-2">We Are Here For You</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Let's Get Back to Work
                    </h2>
                    <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
                        Reach out to us today, and Let's start crafting your success story together.
                    </p>
                    <Link 
                        href="/contact"
                        className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>

            {/* Read More Content */}
            <div className="py-20 bg-white" id="readmore">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-8">
                            <Link 
                                href="/seo-for" 
                                className="text-blue-600 hover:text-blue-800 font-semibold"
                            >
                                SEO Services For →
                            </Link>
                        </div>
                        
                        {/* Use the Newreadmorebutton component */}
                        <Newreadmorebutton text={paragraph} maxLength={375} QuesAns={data} />
                    </div>
                </div>
            </div>

            {/* JSON-LD Schema */}
            <script 
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": data.map(item => ({
                            "@type": "Question",
                            "name": item.statement,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": item.paragraph
                            }
                        }))
                    })
                }}
            />
            <Footer />
        </>
    )
}