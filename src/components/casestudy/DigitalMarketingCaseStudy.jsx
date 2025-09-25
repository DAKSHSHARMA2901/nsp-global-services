'use client'
import React, { useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser';
import styles from '../IndustryServices.module.css'
import TextSphare from '../TextSphare'
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

function DigitalMarketingCaseStudy(props) {

    // const navigate = useNavigate()
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // navigate("/thank-you")
        emailjs
            .sendForm('service_xeikd6k', 'template_184dkpm', form.current, {
                publicKey: 'n--h-ZLHb25m5t0A1',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    const texts = [
        "Retarget",
        "Strategy",
        "Analytics",
        "Influencer",
        "Branding",
        "GMB",
        "CRO",
        "Audit",
        "Content",
        "Email",
        "Social",
        "PPC",
        "SEO",
        "Optimize",
        "Conversion",
        "Mobile",
        "Lead Gen",
        "Video Ads",
        "App Marketing",
    ];

    useEffect(() => {
        const elements = [
            { textId: "contentText1", imageId: "contentImage1" },
            { textId: "contentText2", imageId: "contentImage2" },
            { textId: "contentText3", imageId: "contentImage3" },
            { textId: "contentText4", imageId: "contentImage4" },
            { textId: "contentText5", imageId: "contentImage5" },
            { textId: "contentText6", imageId: "contentImage6" },
            { textId: "contentText7", imageId: "contentImage7" },
            { textId: "contentText8", imageId: "contentImage8" },
            { textId: "contentText9", imageId: "contentImage9" },
        ];

        elements.forEach(({ textId, imageId }) => {
            // Animate the text
            gsap.fromTo(
                `#${textId}`,
                { opacity: 0, x: 350 }, // Initial state: Slide in from the right
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: `#${textId}`,
                        scroller: "body",
                        start: "top 80%",
                        end: "bottom 60%",
                        scrub: 0.5,
                        markers: false, // Enable for debugging
                    },
                }
            );

            // Animate the image
            gsap.fromTo(
                `#${imageId}`,
                { opacity: 0, x: -350 }, // Initial state: Slide in from the left
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: `#${textId}`, // Use the text as the trigger for both
                        scroller: "body",
                        start: "top 80%",
                        end: "bottom 60%",
                        scrub: 0.5,
                        markers: false, // Enable for debugging
                    },
                }
            );
        });
    }, []);

    // const counts = [1, 2, 4, 5, 4, 2, 1];

    // const options = {
    //     width: 700,
    //     height: 500,
    //     radius: 150,
    //     fontSize: 22,
    //     tilt: Math.PI / 9,
    //     initialVelocityX: 0.09,
    //     initialVelocityY: 0.09,
    //     initialRotationX: Math.PI * 0.14,
    //     initialRotationZ: 0,
    // };


    return (
        <>
            {/* <Helmet>
                <title>{props.heading} Digital Marketing Services</title>
                <meta property="og:title" content={`${props.heading} Digital Marketing Services`} />
                <meta property="og:description" content="NSP is a Digital Marketing Company. We build ROI-driven strategies to help achieve your business goals. Contact us today!" />
                <meta name="description" content="NSP is a Digital Marketing Company. We build ROI-driven strategies to help achieve your business goals. Contact us today!" />
                <link rel="canonical" href={`https://www.nspglobalservices.com/digital-marketing-for/${props.link}`} />
            </Helmet> */}
            <div className={styles.container}>
                <div className={styles.content} >
                    <h1 className={styles.title} >{props.heading} Digital Marketing Services</h1>
                    <p className={styles.subtitle}>Let’s talk about how we can turn your business into an online success story!</p>

                    <div className={styles.buttons} >
                        {/* <Link className={styles.btns} to='/contact-us'>Call us now</Link> */}
                        <Link className={styles.btns} href='/contact-us'>Contact us now</Link>
                    </div>
                </div>
                <div className={styles.bannerImage}>
                    <TextSphare texts={texts} />
                </div>
            </div>
            <div className={styles.contents} >
                <h2 className={styles.heading}>Grow Your Business with our Expert Digital Marketing Strategies</h2>
                <div className={styles.alternativeContent} >
                    <div id='contentImage1' className={styles.contentImages} >
                        <img style={{ height: '100%', width: '70%' }} src={'/assets/Industry Services/Services Images/seo services.png'} alt="" />
                    </div>
                    <div id='contentText1' className={styles.contentTexts}>
                        <h2 className={styles.heading}>Enterprise Search Engine Optimization Services</h2>
                        <p className={styles.paragraph}>Our <Link href={'/seo-services'}>SEO services</Link> enhance your website's online visibility, making it easy for potential customers to find you. We employ a comprehensive strategy, including keyword research, <Link href={'/seo-services/on-page-seo'}>on-page optimization</Link>, and robust backlink building to establish authority.</p>
                    </div>
                </div>
                <div className={styles.alternativeContent}>
                    <div id='contentImage2' className={styles.contentTexts}>
                        <h2 className={styles.heading}>Pay-Per-Click Advertising Services</h2>
                        <p className={styles.paragraph}>Our <Link href={'/ppc-services'}>Our Pay-Per-Click (PPC) Advertising service</Link> offers immediate brand visibility by placing ads where your target audience is searching. Utilizing Google Ads, Bing Ads, and social media, we develop campaigns that maximize your investment.</p>
                    </div>
                    <div id='contentText2' className={styles.contentImages}>
                        <img style={{ width: '70%' }} src={'/assets/Industry Services/Services Images/shopify.png'} alt="" />
                    </div>
                </div>
                <div className={styles.alternativeContent}>
                    <div id='contentImage3' className={styles.contentImages}>
                        <img style={{ width: '70%', mixBlendMode: 'darken' }} src={'/assets/Industry Services/Services Images/social media marketing.png'} alt="" />
                    </div>
                    <div id='contentText3' className={styles.contentTexts}>
                        <h2 className={styles.heading}>Social Media Marketing Services</h2>
                        <p className={styles.paragraph}>Our affordable social media marketing services focus on enhancing your brand's online presence by developing strategic content that appeals to your audience, aiming to grow your following and deepen connections for real conversions. We handle content creation, scheduling, and engagement, keeping your profiles vibrant.</p>
                    </div>
                </div>
                <div className={styles.alternativeContent}>
                    <div id='contentImage4' className={styles.contentTexts}>
                        <h2 className={styles.heading}>Content Marketing Services</h2>
                        <p className={styles.paragraph}>Our affordable <Link href={'/content-marketing-services'}>Content Marketing services</Link> attract and engage your target audience with quality content, from insightful blog posts to captivating videos, aligning with your brand values to meet audience needs. We focus on creating, distributing, and analyzing content to drive conversions and build loyalty.</p>
                    </div>
                    <div id='contentText4' className={styles.contentImages}>
                        <img style={{ width: '70%', mixBlendMode: 'darken' }} src={'/assets/Industry Services/Services Images/seo content.png'} alt="" />
                    </div>
                </div>
                <div className={styles.alternativeContent}>
                    <div id='contentImage5' className={styles.contentImages}>
                        <img style={{ width: '70%', mixBlendMode: 'darken' }} src={'/assets/Industry Services/Services Images/email marketing.png'} alt="" />
                    </div>
                    <div id='contentText5' className={styles.contentTexts}>
                        <h2 className={styles.heading}>Outsource Email Marketing Services</h2>
                        <p className={styles.paragraph}>Our cold Email Marketing service utilizes personalized communication to engage and inform your audience, enhancing their connection to your brand. It includes custom newsletters, targeted campaigns, segmentation strategies, and detailed analytics to ensure effective messaging and track performance.</p>
                    </div>
                </div>
                <div className={styles.alternativeContent}>
                    <div id='contentImage6' className={styles.contentTexts}>
                        <h2 className={styles.heading}>Online Reputation Management Services</h2>
                        <p className={styles.paragraph}>Our Online Reputation Management services are designed to protect and improve your brand's online presence, essential in today's digital landscape for influencing consumer trust. We monitor your brand's online mentions, address negatives, and highlight positives across platforms like Google and Yelp.</p>
                    </div>
                    <div id='contentText6' className={styles.contentImages}>
                        <img style={{ width: '70%', mixBlendMode: 'darken' }} src={'/assets/Industry Services/Services Images/reputation.png'} alt="" />
                    </div>
                </div>
                <div className={styles.alternativeContent}>
                    <div id='contentImage7' className={styles.contentImages}>
                        <img style={{ width: '70%', mixBlendMode: 'darken' }} src={'/assets/Industry Services/Services Images/web development.png'} alt="" />
                    </div>
                    <div id='contentText7' className={styles.contentTexts}>
                        <h2 className={styles.heading}>Website Design and Development Services</h2>
                        <p className={styles.paragraph}>Our <Link href={'/design-development'}>Website Design and Development services</Link> focus on crafting stunning, functional websites tailored to your business needs, ensuring a smooth, mobile-responsive user experience optimized for search engines. We offer end-to-end solutions from custom design to CMS integration, e-commerce, and maintenance, aiming to develop visually appealing., traffic-driving websites.</p>
                    </div>
                </div>
                <div className={styles.alternativeContent}>
                    <div id='contentImage8' className={styles.contentTexts}>
                        <h2 className={styles.heading}>Data Analytics and Reporting</h2>
                        <p className={styles.paragraph}>Our <Link href={'/industries/technology/data-analytics'}>Data Analytics</Link> and Reporting services provide essential insights for informed decision-making and strategic planning for business growth. By analyzing data from various marketing channels, including PPC, Content Marketing, Email Marketing, and more, we identify valuable insights into campaign performance.</p>
                    </div>
                    <div id='contentText8' className={styles.contentImages}>
                        <img style={{ width: '70%', mixBlendMode: 'darken' }} src={'/assets/Industry Services/Services Images/report.png'} alt="" />
                    </div>
                </div>
                <div className={styles.alternativeContent}>
                    <div id='contentImage9' className={styles.contentImages}>
                        <img style={{ width: '70%', mixBlendMode: 'darken' }} src={'/assets/Industry Services/Services Images/conversion rate.png'} alt="" />
                    </div>
                    <div id='contentText9' className={styles.contentTexts}>
                        <h2 className={styles.heading}>Conversion Rate Optimization</h2>
                        <p className={styles.paragraph}>Our Conversion Rate Optimization (CRO) services transform your website visitors into customers by deeply understanding user behavior and optimizing every part of their online journey. We refine landing pages for compelling usability, use A/B testing to fine-tune your site, and enhance user experience to attract and keep customers.</p>
                    </div>
                </div>
            </div>
            {/* container 3 */}
            <div className={styles.container_3}>
                <div className={styles.container_3_div1}>
                    <h3 className={styles.container_3_H2}>Why Choose Us?</h3>
                    <p className={styles.container_3_para}>Increase your online presence and drive success with NSP's comprehensive digital marketing services. Benefit from increased visibility, lead generation, and revenue growth.</p>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.card} >
                        {/* <img loading="lazy" src={Icons1} alt='Icons1' className={styles.cardimg} /> */}
                        <h3 className={styles.cardTitle}>Expertise</h3>
                        <p className={styles.cardPara}> Our team of experienced digital marketers has a deep understanding of the ever-evolving landscape of online marketing and can help you navigate it with ease.</p>
                    </div>
                    <div className={styles.card} >
                        {/* <img loading="lazy" src={Icons2} alt='Icons2' className={styles.cardimg} /> */}
                        <h3 className={styles.cardTitle}>Customized Solutions</h3>
                        <p className={styles.cardPara}>We believe in tailor-made strategies that are specific to your business objectives, target audience, and industry.</p>
                    </div>
                    <div className={styles.card} >
                        {/* <img loading="lazy" src={Icons3} alt='Icons3' className={styles.cardimg} /> */}
                        <h3 className={styles.cardTitle}>Results-driven</h3>
                        <p className={styles.cardPara}> Our ultimate goal is to help your business achieve tangible results and a healthy return on investment.</p>
                    </div>
                    <div className={styles.card} >
                        {/* <img loading="lazy" src={Icons4} alt='Icons4' className={styles.cardimg} /> */}
                        <h3 className={styles.cardTitle}>SEO Services Near Me</h3>
                        <p className={styles.cardPara}>NSP Global Services We are just a Click Away for all your SEO needs.</p>
                    </div>
                </div>
            </div>
            {/* toolsname */}
            {/* <div className={styles.tools}>
                <h2 className={styles.toolweuse} >Tools that we use</h2>
                <div className={styles.toolsname}> <Toolsnames /></div>
            </div> */}
            {/* testimonials  */}
            <div className={styles.container5}>
                <div className={styles.container5_div}>
                    <p className={styles.container4_para1}>Testimonials</p>
                    <h2 className={styles.container4_hone}>What People Say</h2>
                    {/* <p className={styles.container4_para2}>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. when the musics over turnoff the light</p> */}
                </div>
            </div>
            <div className={styles.carousel}>
                {/* <Carousal num={3} /> */}
            </div>
            {/*  */}
            <div className={styles.container4}>
                <div >
                    <img loading="lazy" src={'/assets/Digital Marketing/IMG-20231116-WA0001.jpg'} alt='bannerImage' className={styles.bannerimage} />
                </div>
                <div className={styles.bannerForm}>
                    <h2>Get Your Free Quote</h2>
                    <form className={styles.Form} ref={form} onSubmit={sendEmail} >
                        <input className={styles.inputs} placeholder='Your Name' type="text" name="user_name" />
                        <input className={styles.inputs} placeholder='Your email' type="email" name="user_email" />
                        <input className={styles.inputs} name="message" placeholder='Enter your message' />
                        {/* <input type="hidden" name="_template" value="table"></input> */}
                        <input type="submit" className={styles.FormButton} value="Send" />
                        {/* <button className={style.FormButton} type='submit'>Submit</button> */}
                    </form>
                </div>
            </div>
        </>
    )
}

export default DigitalMarketingCaseStudy
