'use client'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import styles from '../IndustryServices.module.css'
import TextSphare from '../TextSphare'
// import { Link, useNavigate } from 'react-router-dom'
import Link from 'next/link';

// import AdCreative from '../assets/Industry Services/webiste design/ads creative.png'
// import bidManagement from '../assets/Industry Services/webiste design/bid management.png'
// import ChannelInteration from '../assets/Industry Services/webiste design/channel integration.png'
// import DataAnalysis from '../assets/Industry Services/webiste design/data analysis.png'
// import FraudPrevention from '../assets/Industry Services/webiste design/fruad prevention.png'
// import setUpCampaign from '../assets/Industry Services/webiste design/set up campaign.png'
// import strategyDevelopment from '../assets/Industry Services/webiste design/strategy development.png'
// import targetAudience from '../assets/Industry Services/webiste design/targy audience.png'

// import bannerImage from '../assets/Digital Marketing/IMG-20231116-WA0001.jpg'
// import Icons1 from '../assets/Home Two/IMG-20231207-WA0009.jpg'
// import Toolsnames from '../Pages/Toolsnames'
// import Carousal from '../Carousal'
// import { Helmet } from 'react-helmet';

function PaidMediaCaseStudy(props) {
    const texts = [
        "PPC",
        "SEM",
        "Display",
        "Retarget",
        "Shopping",
        "Video Ads",
        "Native Ads",
        "Social Ads",
        "Programmatic",
        "Remarketing",
        "Affiliate",
        "OTT Ads",
        "Banner Ads",
        "App Installs",
        "YouTube Ads",
        "LinkedIn Ads",
        "Search Ads",
        "Facebook Ads",
        "Instagram Ads",
        "Performance Max"
    ];

    const counts = [1, 2, 4, 5, 4, 2, 1];

    const options = {
        width: 700,
        height: 500,
        radius: 150,
        fontSize: 22,
        tilt: Math.PI / 9,
        initialVelocityX: 0.09,
        initialVelocityY: 0.09,
        initialRotationX: Math.PI * 0.14,
        initialRotationZ: 0,
    };

    // const navigate = useNavigate()
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
        
        if (!serviceId || !templateId || !publicKey) {
            console.error('EmailJS configuration missing. Please check environment variables.');
            // Show user-facing error
            alert('Email service is temporarily unavailable. Please try again later or contact us directly.');
            return;
        }
        
        // navigate("/thank-you")
        emailjs
            .sendForm(serviceId, templateId, form.current, {
                publicKey: publicKey,
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
    return (
        <>
            {/* <Helmet>
                <title>{props.heading} Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`${props.heading} Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier ${props.heading} paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier ${props.heading} paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/${props.link}`} />
            </Helmet> */}
            <div className={styles.container}>
                <div className={styles.content} >
                    <h1 className={styles.title} >PPC Agency for {props.heading}</h1>
                    <p className={styles.subtitle}>Let’s talk about how we can maximise your ROAS from Best Performance Marketing Agency</p>
                    <div className={styles.buttons} >
                        <Link className={styles.btns} href='/contact-us'>Contact us now</Link>
                    </div>
                </div>
                <div className={styles.bannerImage}>
                    <TextSphare texts={texts} counts={counts} options={options} />
                </div>
            </div>
            <div className={styles.contents} >
                <h2>Programmatic Advertising Agency for {props.heading}</h2>
                <div className={styles.alternativeContent} >
                    <div className={styles.contentImages} >
                        <img style={{ height: '100%', width: '70%' }} src={'/assets/Industry Services/webiste design/strategy development.png'} alt="" />
                    </div>
                    <div className={styles.contentTexts}>
                        <h2>Strategy Development</h2>
                        <p>Crafting a strategic approach to programmatic advertising ai that aligns with the client's marketing objectives, target audience, and budget constraints.</p>
                    </div>
                </div>
                <div className={styles.alternativeContent}>
                    <div className={styles.contentTexts}>
                        <h2>Campaign Setup and Management</h2>
                        <p>Setting up and managing ai programmatic advertising campaigns across various channels and formats, including display, video, native, and mobile, using DSPs and other programmatic ad platforms.</p>
                    </div>
                    <div className={styles.contentImages}>
                        <img style={{ height: '100%', width: '70%' }} src={'/assets/Industry Services/webiste design/set up campaign.png'} alt="" />
                    </div>
                </div>
                <div className={styles.alternativeContent}>
                    <div className={styles.contentImages}>
                        <img style={{ height: '100%', width: '70%' }} src={'/assets/Industry Services/webiste design/targy audience.png'} alt="" />
                    </div>
                    <div className={styles.contentTexts}>
                        <h2>Audience Targeting</h2>
                        <p>When it comes to reaching your target audience efficiently, exploring the best programmatic advertising platforms is crucial for maximizing campaign performance.Utilizing advanced targeting capabilities to reach specific audience segments based on demographics, interests, behavior, location, device type, and other relevant criteria.</p>
                    </div>
                </div>
                <div className={styles.alternativeContent}>
                    <div className={styles.contentTexts}>
                        <h2>Ad Creative Development</h2>
                        <p>Designing and optimizing ad creatives to maximize engagement and performance across different placements and devices.</p>
                    </div>
                    <div className={styles.contentImages}>
                        <img style={{ height: '100%', width: '70%' }} src={'/assets/Industry Services/webiste design/ads creative.png'} alt="" />
                    </div>
                </div>
                <div className={styles.alternativeContent}>
                    <div className={styles.contentImages}>
                        <img style={{ height: '100%', width: '70%' }} src={'/assets/Industry Services/webiste design/bid management.png'} alt="" />
                    </div>
                    <div className={styles.contentTexts}>
                        <h2>Bid Management and Optimization</h2>
                        <p>Monitoring campaign performance in real-time and adjusting bidding strategies, targeting parameters, and ad placements to optimize for key performance indicators (KPIs) such as cost per acquisition (CPA), return on ad spend (ROAS), or click-through rate (CTR).</p>
                    </div>
                </div>
                <div className={styles.alternativeContent}>
                    <div className={styles.contentTexts}>
                        <h2>Data Analysis and Reporting</h2>
                        <p>Analyzing campaign programmatic data and providing clients with actionable insights and performance reports to evaluate the effectiveness of their programmatic advertising trends efforts and inform future strategies.</p>
                    </div>
                    <div className={styles.contentImages}>
                        <img style={{ width: '70%' }} src={'/assets/Industry Services/webiste design/data analysis.png'} alt="" />
                    </div>
                </div>
                <div className={styles.alternativeContent}>
                    <div className={styles.contentImages}>
                        <img style={{ height: '100%', width: '70%' }} src={'/assets/Industry Services/webiste design/fruad prevention.png'} alt="" />
                    </div>
                    <div className={styles.contentTexts}>
                        <h2>Ad Fraud Prevention</h2>
                        <p>Implementing measures to detect and prevent ad fraud, such as invalid traffic (IVT) and non-human traffic (NHT), to ensure that clients' ad budgets are spent efficiently and effectively.</p>
                    </div>
                </div>
                <div className={styles.alternativeContent}>
                    <div className={styles.contentTexts}>
                        <h2>Cross-Channel Integration</h2>
                        <p>Integrating programmatic advertising campaigns with other marketing channels and initiatives to create a cohesive and synergistic approach to reaching target audiences and achieving overall marketing goals.Exploring programmatic advertising companies can lead to finding the perfect partner to streamline your digital ad campaigns and maximize your reach effectively.</p>
                    </div>
                    <div className={styles.contentImages}>
                        <img style={{ width: '70%' }} src={'/assets/Industry Services/webiste design/channel integration.png'} alt="" />
                    </div>
                </div>
            </div>
            {/* container 3 */}
            <div className={styles.container_3}>
                <div className={styles.container_3_div1}>
                    <h3 className={styles.container_3_H2}>Why Choose Us?</h3>
                    <p className={styles.container_3_para}>At the core of our Web Agency lies a dedication to innovation, quality, and exceptional service. Our unique approach combines cutting-edge design with strategic implementation, making us the preferred choice for businesses looking to elevate their digital presence. Here are just a few reasons why clients choose us over the competition:</p>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.card} >
                        {/* <img loading="lazy" src={Icons1} alt='Icons1' className={styles.cardimg} /> */}
                        <h3 className={styles.cardTitle}>Expertise Across Disciplines</h3>
                        <p className={styles.cardPara}>Looking for a top-notch Google Ads agency near me to boost your business online? Look no further than Best Paid Media Agency</p>
                    </div>
                    <div className={styles.card} >
                        <h3 className={styles.cardTitle}>Tailored Solutions</h3>
                        <p className={styles.cardPara}>We understand that no two businesses are the same. Our services are meticulously customized to meet your specific objectives and audience requirements.</p>
                    </div>
                    <div className={styles.card} >
                        <h3 className={styles.cardTitle}>Commitment to Excellence</h3>
                        <p className={styles.cardPara}>From initial consultation to final delivery, we maintain the highest standards of quality and creativity.</p>
                    </div>
                    <div className={styles.card} >
                        <h3 className={styles.cardTitle}>Proven Track Record</h3>
                        <p className={styles.cardPara}>With a portfolio that spans various industries, our work speaks for itself. We’ve proudly partnered with businesses of all sizes, achieving measurable success.</p>
                    </div>
                </div>
            </div>
            {/* toolsname */}
            {/* <div className={styles.tools}>
                <h3 className={styles.toolweuse} >Tools that we use</h3>
                <div className={styles.toolsname}> <Toolsnames /></div>
            </div> */}
            {/* testimonials  */}
            <div className={styles.container5}>
                <div className={styles.container5_div}>
                    <p className={styles.container4_para1}>Testimonials</p>
                    <h3 className={styles.container4_hone}>What People Say</h3>
                    {/* <p className={styles.container4_para2}>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. when the musics over turnoff the light</p> */}
                </div>
            </div>
            <div className={styles.carousel}>
                {/* <Carousal num={3} /> */}
            </div>
            {/*  Testimonial ends */}
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

export default PaidMediaCaseStudy;