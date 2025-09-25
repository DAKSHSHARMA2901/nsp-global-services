'use client'
import Location from '@/components/Location'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import React, { useState } from 'react'
import styles from './page.module.css'
import { GoPlus } from 'react-icons/go'
import Head from 'next/head';

type Props = {
  params: Promise<{ location: string }>
}

export default function LocationPage({ params }: Props) {
    const [resolvedParams, setResolvedParams] = useState<{ location: string } | null>(null);
    const [showMore, setShowMore] = useState(false);
    const [selection, setSelection] = useState<number | null>(null);

    React.useEffect(() => {
        params.then(setResolvedParams);
    }, [params]);

    if (!resolvedParams) {
        return <div>Loading...</div>;
    }

    const locationName = resolvedParams.location
        .replace('-seo-agency', '')
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    const toggle = (i: number) => {
        if (selection === i) {
            return setSelection(null)
        }
        setSelection(i)
    }

    const data = [
        {
            id: 0,
            icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
            statement: `What makes your SEO agency in ${locationName} different from others?`,
            paragraph: `Our ${locationName} SEO agency stands out by offering customized SEO solutions, a data-driven approach, and a strong focus on local SEO to ensure your business thrives in ${locationName}'s competitive market.`
        },
        {
            id: 1,
            icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
            statement: `How long does it take to see SEO results in ${locationName}?`,
            paragraph: 'SEO results typically take 3 to 6 months, depending on the competitiveness of your industry and the strategies implemented, but we continuously monitor and adjust for faster results.'
        },
        {
            id: 2,
            icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
            statement: `Do you offer local SEO services specific to ${locationName} businesses?`,
            paragraph: `Yes, we specialize in local SEO optimization for ${locationName} businesses, ensuring they appear in relevant local searches, including Google My Business optimization and local directory listings.`
        },
        {
            id: 3,
            icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
            statement: `Can you help optimize my Google Business Profile for ${locationName} searches?`,
            paragraph: `Absolutely! Our team will enhance your Google My Business profile to improve local visibility, ensuring it ranks higher for ${locationName} searches and attracts more customers in your area.`
        },
        {
            id: 4,
            icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
            statement: `What industries do you serve in ${locationName}?`,
            paragraph: 'We work with a wide range of industries, including healthcare, real estate, retail, e-commerce, and more, tailoring SEO strategies to meet the specific needs of each sector.'
        },
        {
            id: 5,
            icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
            statement: `Do you provide SEO audits for ${locationName}-based websites?`,
            paragraph: `Yes, we offer comprehensive SEO audits for ${locationName} websites, identifying areas of improvement and creating a clear action plan to enhance your site's performance and rankings.`
        },
        {
            id: 6,
            icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
            statement: `What SEO services do you offer in ${locationName}?`,
            paragraph: `We provide comprehensive SEO services including on-page optimization, technical SEO, local SEO, link building, content marketing, and regular SEO audits tailored for ${locationName} businesses.`
        },
        {
            id: 7,
            icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
            statement: 'How do you measure SEO success?',
            paragraph: 'We track key metrics like organic traffic growth, keyword rankings, conversion rates, bounce rates, and local search visibility to measure and report on your SEO performance.'
        },
        {
            id: 8,
            icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
            statement: `Do you work with businesses outside ${locationName}?`,
            paragraph: `While we specialize in ${locationName} businesses, we also serve clients throughout the region and nationwide with our digital marketing services.`
        }
    ]

    return (
        <>
            <Head>
                <title>{locationName} SEO Agency: Maximizing Online Impact with NSP</title>
                <meta name="description" content={`Drive more leads and sales with NSP, the top-rated ${locationName} SEO agency. Tap into our expertise to enhance your online visibility and stay ahead of the competition.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/locations/${resolvedParams.location}`} />
            </Head>

            <div className="min-h-screen">
                <Header />
                <main>
                    <Location heading={`${locationName} SEO Agency`} subtitle={locationName} />

            <div className={styles.container}>
                {showMore && (
                    <div className={styles.contentWrapper}>
                        <h1>Welcome to Your Premier {locationName} SEO Agency: Where Local Businesses Thrive Online</h1>
                        <p className={styles.content}>
                            Are you a small business owner in {locationName}, looking to boost your online presence? You've come to the right place! At NSP Global Services, we specialize in making your business stand out in the crowded digital marketplace. As a top-rated {locationName} SEO agency, we understand the importance of getting found by potential customers who are actively searching for your services.
                        </p>

                        <h2>Importance of Local SEO for {locationName}-Based Businesses</h2>
                        <p className={styles.content}>
                            In the digital age, being visible online is crucial for the survival of small businesses. For {locationName}-based businesses, local SEO is the backbone of driving traffic and increasing sales. Local SEO {locationName} ensures that your business appears in local search results when customers search for services near them. Whether someone is looking for a coffee shop in {locationName}, a plumbing service near me, or a {locationName}-based digital marketing agency, local SEO will make sure they find you.
                        </p>

                        <h2>Why Choose Our SEO Agency in {locationName}?</h2>
                        <p className={styles.content}>
                            At NSP Global Services, we don't just provide SEO services—we create growth opportunities for your business. As {locationName} SEO experts, we know what it takes to rank high on search engines and attract local customers. We don't believe in one-size-fits-all solutions. Instead, we offer custom SEO solutions {locationName} that cater specifically to your business needs.
                        </p>
                        <p className={styles.content}>
                            We are passionate about delivering affordable SEO services in {locationName} that generate measurable results. Our approach is data-driven, and we use only the most effective and ethical techniques to help you grow your online presence. With our SEO consultants in {locationName}, you'll experience personalized care and dedicated support.
                        </p>

                        <h2>Our SEO Services in {locationName}</h2>

                        <h3>1. On-Page SEO in {locationName}</h3>
                        <p className={styles.content}>
                            Your website is your digital storefront, and it's essential that it's optimized to attract both users and search engines. We'll optimize everything from your meta tags to your content structure and user experience, ensuring your website isn't just found, but is irresistible to your target audience.
                        </p>

                        <h3>2. Technical SEO Services {locationName}</h3>
                        <p className={styles.content}>
                            Technical SEO is the backbone of a solid online presence. Our team will audit your website's structure, speed, mobile usability, and indexing to ensure it meets Google's standards for high-ranking sites.
                        </p>

                        <h3>3. Link Building {locationName}</h3>
                        <p className={styles.content}>
                            We'll help you increase your site's credibility by acquiring high-quality, relevant backlinks, boosting your domain authority and helping you rank higher on Google.
                        </p>

                        <h3>4. Local SEO Optimization in {locationName}</h3>
                        <p className={styles.content}>
                            We'll make sure your business gets noticed by local customers through Google My Business optimization, local listings, and targeted strategies that enhance your local SEO {locationName} efforts.
                        </p>

                        <h3>5. Content Marketing {locationName}</h3>
                        <p className={styles.content}>
                            Great content attracts customers. Our content marketing services are designed to boost your website's organic traffic and engage your audience, turning them into loyal customers.
                        </p>

                        <h3>6. SEO Audits {locationName}</h3>
                        <p className={styles.content}>
                            We offer comprehensive SEO audits to identify areas of improvement and optimize your site's performance for better search rankings and user experience.
                        </p>

                        <h2>Industries We Serve in {locationName}</h2>
                        <p className={styles.content}>
                            At NSP Global Services, we've worked with businesses across various industries in {locationName}. Whether you're in healthcare, retail, real estate, or any other field, we understand the unique challenges and opportunities each industry faces. Here are just a few of the industries we serve:
                        </p>
                        <ul className={styles.list}>
                            <li><strong>Healthcare:</strong> Helping doctors, clinics, and healthcare providers grow their online presence.</li>
                            <li><strong>E-commerce:</strong> Driving online sales for businesses looking to sell products on their websites.</li>
                            <li><strong>Real Estate:</strong> Improving visibility for real estate agents and property listings in {locationName}.</li>
                            <li><strong>Service Providers:</strong> Boosting the online presence of service-based businesses such as restaurants, salons, and contractors.</li>
                        </ul>

                        <h2>Case Studies or Success Stories from {locationName} Clients</h2>
                        <p className={styles.content}>
                            Our {locationName} SEO company has delivered exceptional results for numerous clients in the area. For instance, we helped a local restaurant increase their website traffic by over 200% in just six months through a tailored local SEO optimization {locationName} strategy. Another {locationName}-based client, a real estate agency, saw a 50% increase in leads after implementing our comprehensive SEO services {locationName}, including on-page SEO and link building {locationName} strategies.
                        </p>

                        <h2>How Our {locationName} SEO Process Works</h2>
                        <p className={styles.content}>
                            Our SEO consultants in {locationName} follow a step-by-step process to ensure your website is optimized for success. Here's how we work:
                        </p>
                        <ul className={styles.list}>
                            <li><strong>Consultation & Goal Setting:</strong> We understand your business and goals to develop a custom SEO strategy.</li>
                            <li><strong>SEO Audit:</strong> Our team conducts a thorough audit to identify areas for improvement.</li>
                            <li><strong>On-Page SEO Optimization:</strong> We optimize your website's content, structure, and technical elements.</li>
                            <li><strong>Link Building:</strong> We acquire high-quality backlinks to boost your site's credibility.</li>
                            <li><strong>Local SEO:</strong> We focus on improving your local visibility through Google My Business and local listings.</li>
                            <li><strong>Content Creation:</strong> We craft compelling, SEO-friendly content to attract and engage your audience.</li>
                            <li><strong>Ongoing Monitoring & Reporting:</strong> We track your performance, make adjustments, and provide regular reports.</li>
                        </ul>

                        <h2>Benefits of Local SEO for {locationName}-Based Businesses</h2>
                        <p className={styles.content}>
                            Local SEO is crucial for small businesses, especially those serving customers in specific geographic areas like {locationName}. Here are some benefits of local SEO optimization {locationName}:
                        </p>
                        <ul className={styles.list}>
                            <li><strong>Increased Visibility:</strong> Your business shows up in Google Maps and local search results.</li>
                            <li><strong>Higher Local Traffic:</strong> More people in {locationName} will find your business when searching for services like yours.</li>
                            <li><strong>More Leads & Sales:</strong> As a result of higher visibility and targeted local traffic, you'll see more leads and sales.</li>
                            <li><strong>Better Reputation:</strong> A well-optimized local SEO strategy can help build your online reputation and trust with customers.</li>
                        </ul>

                        <h2>Why SEO Is Crucial for {locationName} Businesses in 2025</h2>
                        <p className={styles.content}>
                            As we move further into 2025, SEO for {locationName} businesses is becoming more important than ever. With an increasing number of consumers turning to search engines to find products and services, businesses without a solid SEO strategy risk falling behind. With Google's ever-changing algorithms and the rise of voice search, staying up-to-date with SEO trends is essential. Businesses that adapt and invest in local SEO {locationName} will be better positioned to capture market share and grow in the competitive digital landscape.
                        </p>

                        <h2>Get Started with NSP Global Services Today</h2>
                        <p className={styles.content}>
                            Are you ready to take your business to the next level? SEO services {locationName} have never been more accessible, and with NSP Global Services, you'll have the best local SEO company {locationName} by your side. Whether you need an SEO audit {locationName}, content marketing {locationName}, or a custom SEO strategy, we're here to help you grow and thrive in the digital age.
                        </p>
                        <p className={styles.content}>
                            Contact us today to schedule a free consultation, and let's talk about how we can help your business get noticed, grow its online presence, and attract the customers who matter most.
                        </p>
                        <p className={styles.content}>
                            At NSP Global Services, we turn {locationName} SEO experts into your growth partners. Let's build your digital success together!
                        </p>

                        <h2>Popular Searches:</h2>
                        <p className={styles.content}>
                            OutSourcing SEO Service | Digital Advertising Campaigns | Nationwide SEO | SEO Services for | Celebrity SEO | Luxury SEO | Link Building Services | SEO Competitor Analysis | SEO Audit & Analysis | International SEO | SaaS SEO Services.
                        </p>

                        <div className={styles.FAQS}>
                            <div className={styles.faqdiv2}>
                                <h2 className={styles.accordion_h1}>Frequently Asked Questions</h2>
                                <div className={styles.faqimg}>
                                    <div className={styles.faqCard}>
                                        <div className={styles.faqIcon}>?</div>
                                        <h3>FAQ</h3>
                                        <p>Get answers to common questions about our SEO services</p>
                                    </div>
                                </div>
                                <div className={styles.wrapper}>
                                    <div className={styles.accordion}>
                                        {data.map((element, i) => (
                                            <div key={element.id}>
                                                <div className={styles.title_1} style={{ height: '90px' }} onClick={() => { toggle(i) }}>
                                                    <div style={{ display: 'flex', flexDirection: 'row', gridGap: '8px' }}>{element.icon}<h3 className={styles.accodion_h2}>{element.statement}</h3></div>
                                                </div>
                                                <div className={selection === i ? `${styles.contain} ${styles.show}` : `${styles.contain}`}>
                                                    <p className={styles.container_accordion_ptag}>  {element.paragraph}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                    <button
                        onClick={() => setShowMore(!showMore)}
                        className={styles.readMoreButton}
                    >
                        {showMore ? 'Show Less' : 'Read More'}
                    </button>
                </div>
                </main>
                <Footer />
            </div>
        </>
    )
}