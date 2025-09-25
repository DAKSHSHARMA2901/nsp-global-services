'use client'
import React, { useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser';
import styles from '../IndustryServices.module.css'
import TextSphare from '../TextSphare'
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);




function SEOCaseStudy(props) {
    const texts = ["Local", "Data", "PPC", "CTR", "Tools", "Rank", "Blogs", "Tags", "Metas", "Links", "Back", "GMB", "SERP", "CRO", "Audit", "UX/UI", "On-Page", "Off-Page"];
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
            { textId: "contentText10", imageId: "contentImage10" },
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
    return (
        <>
            {/* <Head>
                <title>SEO Services for {props.heading}</title>
                <meta property="og:title" content={`${props.heading}`} />
                <meta property="og:description" content={`Drive organic growth with our expert ${props.heading} SEO Service. Boost rankings, increase leads, and maximize ROI. Contact us today`} />
                <meta name="description" content={`Drive organic growth in the cleaning industry with our expert ${props.heading}. Boost rankings, increase leads, and maximize ROI. Contact us today`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/seo-for/${props.link}`} />
            </Head> */}
            <div className={styles.container}>
                <div className={styles.content} >
                    <h1 className={styles.title} >SEO For {props.heading}</h1>
                    <p className={styles.subtitle}>Let’s talk about how we can maximise your ROI from Premium SEO Services</p>
                    <div className={styles.buttons} >
                        {/* <Link className={styles.btns} to='/contact-us'>Call us now</Link> */}
                        <Link className={styles.btns} href='/contact-us'>Contact us now</Link>
                    </div>
                </div>
                <div className={styles.bannerImage}>
                    <TextSphare texts={texts} counts={counts} options={options} />
                </div>
            </div>
            <div id='mainContainer' className={styles.contents} >
                <h2 className={styles.heading}>Drive Your Business Growth with {props.heading}</h2>
                <div className={styles.alternativeContent}>
                    <div id='contentImage1' className={styles.contentImages}>
                        <img style={{ width: '70%' }} src={'../assets/Industry Services/Services Images/keyword search.png'} alt="" />
                        {/* <MyWordCloud /> */}
                    </div>
                    <div id='contentText1' className={styles.contentTexts}>
                        {/* <h2>On Page SEO Services</h2> */}
                        <h2 className={styles.heading} >Dominate search rankings with SEO keyword research services.</h2>
                        {/* <p>Optimize your website's content and structure for top performance in search engines. Boost your online visibility and attract the right audience with our meticulous on-page SEO strategies, including keyword targeting, content optimization, and meta-tag enhancement.Our on page SEO specialists are dedicated to optimizing every aspect of your website to ensure it performs exceptionally in search engine rankings.For businesses seeking a more bespoke approach without the overhead of an in-house team, our white label <Link to={'/seo-services/on-page-seo'}>on-page SEO services</Link> offer a seamless solution, allowing you to provide top-tier SEO expertise under your own brand name.</p> */}
                        <p className={styles.paragraph}>Stay ahead of the competition and increase your website's visibility and traffic.</p>
                    </div>

                </div>
                <div className={styles.alternativeContent}>
                    <div id='contentImage2' className={styles.contentTexts}>
                        {/* <h2>SEO Content Creation Services</h2> */}
                        <h2 className={styles.heading} >Boost your website ranking with our On Page SEO services. </h2>
                        {/* <p>In the digital era, content reigns supreme. Our digital <Link to={'/content-marketing-services'}>content creation services</Link> are tailored to enhance our SEO strategies, delivering engaging, informative, and value-driven content that not only secures a top spot in search engine rankings but also positions your brand as an industry leader. We offer the best content creation services, specializing in high-quality, SEO-optimized blog posts, articles, product descriptions, and multimedia content, including video content creation services, that truly connect with your target audience. Further, our website content creation services ensure your online presence is powerful and persuasive. Coupled with social media management and content creation services, we craft content that not only aligns with your brand's voice and messaging but also meets your business objectives and satisfies your audience's needs. </p> */}
                        <p className={styles.paragraph}>Maximize your online presence with optimized keywords, enhanced content, and more!</p>
                    </div>
                    <div id='contentText2' className={styles.contentImages}>
                        <img style={{ width: '70%', mixBlendMode: 'darken' }} src={'../assets/Industry Services/Services Images/on page.png'} alt="" />
                    </div>
                </div>
                <div className={styles.alternativeContent}>
                    <div id='contentImage3' className={styles.contentImages}>
                        <img style={{ width: '70%', mixBlendMode: 'darken' }} src={'../assets/Industry Services/Services Images/linkbuilding.png'} alt="" />
                    </div>
                    <div id='contentText3' className={styles.contentTexts}>
                        {/* <h2>International SEO Services</h2> */}
                        <h2 className={styles.heading}>Expand your digital footprint with off-page SEO services.</h2>
                        <p className={styles.paragraph}>Drive engagement and broaden your reach with our tailored strategies.  <Link href={'/seo-services/backlink-audit'}><img src={'../assets/right-arrow.png'} className={styles.arrow} alt="" /> </Link></p>
                    </div>
                </div>
                <div className={styles.alternativeContent}>
                    <div id='contentImage4' className={styles.contentTexts}>
                        <h2 className={styles.heading}>Take your website to the top of SERP with advanced technical SEO.</h2>
                        <p className={styles.paragraph}>Optimize your speed, navigation, and structured data for maximum success online.  <Link href={'/seo-services/technical-seo'}><img src={'../assets/right-arrow.png'} className={styles.arrow} alt="" /> </Link></p>
                    </div>
                    <div id='contentText4' className={styles.contentImages}>
                        <img style={{ width: '70%', mixBlendMode: 'darken' }} src={'../assets/Industry Services/Services Images/technical seo.png'} alt="" />
                    </div>
                </div>
                <div className={styles.alternativeContent}>
                    <div id='contentImage5' className={styles.contentImages}>
                        <img style={{ width: '70%', mixBlendMode: 'darken' }} src={'../assets/Industry Services/Services Images/mobile seo.png'} alt="" />
                    </div>
                    <div id='contentText5' className={styles.contentTexts}>
                        <h2 className={styles.heading}>Engage with users on all devices with expert mobile SEO services.</h2>
                        <p className={styles.paragraph}>Don't miss out on potential customers from the growing mobile market.  <Link href={'/seo-services/mobile-seo'}><img src={'../assets/right-arrow.png'} className={styles.arrow} alt="" /> </Link></p>
                    </div>
                </div>
                <div className={styles.alternativeContent}>
                    <div id='contentImage6' className={styles.contentTexts}>
                        <h2 className={styles.heading}>Dominate your local market with top localization SEO services.</h2>
                        <p className={styles.paragraph}>Boost your visibility on Google Maps and local directories to connect with nearby customers and grow your business.  <Link href={'/seo-services/local-seo'}><img src={'../assets/right-arrow.png'} className={styles.arrow} alt="" /> </Link></p>
                    </div>
                    <div id='contentText6' className={styles.contentImages}>
                        <img style={{ width: '70%', mixBlendMode: 'darken' }} src={'../assets/Industry Services/Services Images/localized seo.png'} alt="" />
                    </div>
                </div>
                <div className={styles.alternativeContent}>
                    <div id='contentImage7' className={styles.contentImages}>
                        <img style={{ width: '70%', mixBlendMode: 'darken' }} src={'../assets/Industry Services/Services Images/audit seo.png'} alt="" />
                    </div>
                    <div id='contentText7' className={styles.contentTexts}>
                        <h2 className={styles.heading}>Maximize your online presence with SEO Auditing Services.</h2>
                        <p className={styles.paragraph}> Uncover hidden opportunities for improvement and increase your online visibility today!   <Link href={'/seo-services/seo-audits'}><img src={'../assets/right-arrow.png'} className={styles.arrow} alt="" /> </Link></p>
                    </div>
                </div>
                <div className={styles.alternativeContent}>
                    <div id='contentImage8' className={styles.contentTexts}>
                        <h2 className={styles.heading}>Take control of your online presence with powerful Analytics Services. </h2>
                        <p className={styles.paragraph}>Get actionable insights and track your site's performance for better online success.  <Link href={'/seo-services/google-analytics-services'}><img src={'../assets/right-arrow.png'} className={styles.arrow} alt="" /> </Link></p>
                    </div>
                    <div id='contentText8' className={styles.contentImages}>
                        <img style={{ width: '70%', mixBlendMode: 'darken' }} src={'../assets/Industry Services/Services Images/analyst service.png'} alt="" />
                    </div>
                </div>
                <div className={styles.alternativeContent}>
                    <div id='contentImage9' className={styles.contentImages}>
                        <img style={{ width: '70%', mixBlendMode: 'darken' }} src={'../assets/Industry Services/Services Images/20240426_190746_0000.png'} alt="" />
                    </div>
                    <div id='contentText9' className={styles.contentTexts}>
                        <h2 className={styles.heading}>Reach a global audience with our multilingual SEO services. </h2>
                        <p className={styles.paragraph}>Expand your online presence across languages and cultures for maximum impact. <Link href={'/seo-services/'}><img src={'../assets/right-arrow.png'} className={styles.arrow} alt="" /> </Link></p>
                    </div>
                </div>
                <div className={styles.alternativeContent}>
                    <div id='contentImage10' className={styles.contentTexts}>
                        <h2 className={styles.heading}>Transform online presence with SEO content creation services.</h2>
                        <p className={styles.paragraph}>Reign over the digital world with our expertly crafted blogs, articles, product descriptions, and engaging video content.  <Link href={'/content-marketing-services'}><img src={'../assets/right-arrow.png'} className={styles.arrow} alt="" /> </Link></p>
                    </div>
                    <div id='contentText10' className={styles.contentImages}>
                        <img style={{ width: '70%', mixBlendMode: 'darken' }} src={'../assets/Industry Services/Services Images/seo content.png'} alt="" />
                    </div>
                </div>
                {/* <div className={styles.alternativeContent}>
                    <div className={styles.contentImages}>
                        <img style={{ width: '70%', mixBlendMode: 'darken' }} src={Images13} alt="" />
                    </div>
                    <div className={styles.contentTexts}>
                        <h2>Maximize Your ROI with Our SEO Services</h2>
                        <p>Our comprehensive SEO services are designed to give your website a competitive advantage in the ever-evolving digital landscape. With our expert team, up-to-date strategies, and data-driven approach, we ensure maximum return on investment for your business. Don't miss out on the opportunity to drive your business growth with advanced SEO services today.</p>
                    </div>
                </div> */}
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
                        <h3 className={styles.cardTitle}>Best SEO Services Near Me</h3>
                        <p className={styles.cardPara}>NSP Global Services We are just a Click Away for all your SEO needs.</p>
                    </div>
                    <div className={styles.card} >
                        {/* <img loading="lazy" src={Icons2} alt='Icons2' className={styles.cardimg} /> */}
                        <h3 className={styles.cardTitle}>SEO Optimization</h3>
                        <p className={styles.cardPara}> Stay ahead with the latest SEO techniques tailored to your specific industry needs.</p>
                    </div>
                    <div className={styles.card} >
                        {/* <img loading="lazy" src={Icons3} alt='Icons3' className={styles.cardimg} /> */}
                        <h3 className={styles.cardTitle}>Improve Search Rankings</h3>
                        <p className={styles.cardPara}>Climb to the top of search results with our proven track record of success.</p>
                    </div>
                    <div className={styles.card} >
                        {/* <img loading="lazy" src={Icons4} alt='Icons4' className={styles.cardimg} /> */}
                        <h3 className={styles.cardTitle}>Experience and Expertise</h3>
                        <p className={styles.cardPara}> A team of SEO experts dedicated to keeping you ahead of the competition.</p>
                    </div>
                </div>
            </div>
            {/* toolsname */}
            <div className={styles.tools}>
                <h2 className={styles.toolweuse} >Tools that we use</h2>
                {/* <div className={styles.toolsname}> <Toolsnames /></div> */}
            </div>
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
                    <img loading="lazy" src={'../assets/Digital Marketing//NspGlobalServices.png'} alt='bannerImage' className={styles.bannerimage} />
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

export default SEOCaseStudy
