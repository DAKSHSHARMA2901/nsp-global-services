'use client'
import React, { useState } from 'react'
// import img1 from '../assets/shape-7.png'
// import img2 from '../assets/shape-9.png'
// import img3 from '../assets/shape-10.png'
// import img4 from '../assets/shape-2.png'
// import img5 from '../assets/shape-5.png'
import style from '../../services/service.module.css'
import Link from 'next/link'
// import icon_3 from '../assets/icon-3.png';
import { GoChevronRight } from 'react-icons/go'
// import check from '../assets/check.png'
// import Carousal from '../Carousal'
// import Accordation from '../Accordation'
// import BannerImage from '../assets/Automotive/content marketing.png'
import { GoPlus } from 'react-icons/go'
// import FAQ from '../assets/FAQ_1_-removebg.png'
// import { Link } from 'react-router-dom'
// import { Helmet } from 'react-helmet';
import Newreadmorebutton from '../../components/Newreadmorebutton';
import WebdesignPricing from '../../components/WebdesignPricing';
import EcommercePricing from '../../components/EcommercePricing';
import WebApplicationPricing from '../../components/WebApplicationPricing';
import OnlineMarketPlacePricing from '../../components/OnlineMarketPlacePricing';

const data = [
    {
        id: 0,
        icon: <GoPlus style={{ marginTop: '15px' }} size={25} />,
        statement: 'What is design and development?',
        paragraph: `Design and development is the process of creating and managing a website or application; from concept to execution. Web design services (UI/UX) focus on the look, feel, and overall user experience. Website design services often involve scoping out what functionalities will be needed for the project as well as programming of applications, such as HTML5 or CSS. Website Development Services are typically oriented towards coding, configuring, deploying the project specifications and testing it for functionality. Professional web development services involve customizing websites with innovative strategies that align with specific business objectives like increasing ROI or brand reach. Customize web development involves building a site tailored to your organization's needs taking into consideration factors like target audience & search engine optimization. When searching for a best website development company/website design and development company/web design &development agency - ensure they provide high-quality tailor-made solutions that meet your individual requirements while offering invaluable advice along the way!`
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '15px' }} size={25} />,
        statement: 'What are the different types of design and development services?',
        paragraph: `Design and development services encompass a range of activities, from corporate website development to customize web development. Professional web development services involve strategising, designing, developing and integrating solutions that result in the best user-experience possible. This involves using various technologies such as HTML5, CSS3 and JavaScript for designing & building interactive websites. Moreover, organizations can look towards web design & website design & development companies to help them achieve their desired results by providing comprehensive custom web development services. Additionally, developers should be well versed with topics such as responsive web design or what is website design & development in order to create the best website experience for users.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '15px' }} size={25} />,
        statement: 'Why is design and development important for businesses?',
        paragraph: `Design and development are essential for businesses to maintain a competitive edge, create an attractive website, provide an excellent user experience, and build customer loyalty. A good website design improves usability, brand recognition, and accessibility. Development complements the design with back-end programming that enables the website to function properly. With professional web development services such as those provided by a best website development agency or a web development agency, you can ensure that your business benefits from optimized websites and web applications tailored to their needs. This will help them reach more customers as well as maximize their ROI through effective strategies like custom webdevelopment services, corporate website development ,web development solutions etc `
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '15px' }} size={25} />,
        statement: 'How do I choose a design and development service provider?',
        paragraph: `When choosing a design and development service provider, it is important to consider the company's portfolio of services, expertise in your industry, pricing structure, customer reviews and testimonials. Additionally you should ask about their web design services, website design services and website development services to determine if they can handle custom web development for complex projects. Ask about their corporate websites portfolio to get an idea of what sort of strategy they use for web design & development services. Lastly make sure that you know what kind of website maintenance and support with customize web development solutions is included in their package.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '15px' }} size={25} />,
        statement: 'What is the difference between web design and web development?',
        paragraph: `Web design and web development are two essential components of a successful website. Web design, while also referred to as UX or UI design, involves building the look and feel of a website using graphic elements like images, fonts, colors and templates. On the other hand, web development consists of coding languages such as HTML/CSS and JavaScript that power the frontend (client-facing) side of a site; as well as backend technologies such as databases on the server which store information required by the site's functionalities. Professional web developers use various strategies - often in collaboration with web designers - to create feature-rich websites that meet client needs. To get the best result from these services you should go for experienced website design & development company or services provider like us – Best Website Development Company offering custom web development services, corporate website developments along with professional designing & developing solutions tailored specifically to your business goals.`
    },
    {
        id: 5,
        icon: <GoPlus style={{ marginTop: '15px' }} size={25} />,
        statement: 'What is UI/UX design?',
        paragraph: `UI/UX design is the practice of creating user interfaces and user experiences that are both functional and intuitive. It combines aspects of visual design, web development, user experience (UX) research, interaction design, content strategy and usability testing to create products that provide an engaging and meaningful experience for users. Professional website design & development services companies use a variety of strategies to ensure their clients’ websites meet their business goals. These include custom web development services, corporate website development, website coding best practices and recent trends in web technologies such as Responsive Design. By leveraging these strategies, businesses can build top-notch websites with a good user interface / experience that will attract visitors from all over the globe.`
    },
    // {
    //     id: 6,
    //     icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    //     statement: 'What is responsive design?',
    //     paragraph: `Responsive design is an approach to web development that focuses on creating websites which provide an optimal user experience, regardless of the device used to browse them. It ensures your website's appearance and functionality adjusts automatically based on the size of the device or screen being used, whether it be a laptop, tablet or mobile phone. The key techniques used in responsive design include adaptive layouts and media queries. A professional website design and development services will use these strategies when designing your website to ensure your visitors have an optimal viewing experience on any device they are using. This makes engaging with potential customers easier and more efficient for both parties.`
    // },
    // {
    //     id: 7,
    //     icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    //     statement: 'What is agile development?',
    //     paragraph: `Agile development is a methodology of software development that emphasizes incremental delivery, collaboration among cross-functional teams and self-organization. It facilitates an iterative approach to solving complex problems and encourages an agile workflow with a focus on flexibility and speed. Agile web design focuses on responding quickly to the needs of users, while ensuring high quality products through regular testing. Professional web development services include website design services such as customizing website layouts, creating color schemes and typography, adding visuals or videos; website development services such as coding HTML/CSS, writing frontend code in JavaScript & jQuery; corporate website development such as hosting websites on specific platforms or building custom frameworks ;and customize web development such as developing ecommerce sites or integrating third-party APIs.`
    // },
    // {
    //     id: 8,
    //     icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    //     statement: 'What is a CMS?',
    //     paragraph: `A CMS (Content Management System) is a software application used to create, manage and modify digital content. It enables organizations to build feature-rich websites quickly and cost-effectively, while providing users with an intuitive user experience. Whether you’re looking for website design services or web development services from the best website development company, custom web development services from a website design & development company, or corporate website development strategies—a CMS simplifies the process. With customizable template designs and easy editing tools, businesses can enjoy full control over their content without needing detailed coding knowledge. Professional web development services companies offer comprehensive custom Web Development Services such as website design & development solutions, web design and developement agency services as well as comprehensive customize web devlopment packages at affordable rates - all tailored to meet your specific needs.`
    // }
]
const paragraph = "<h2>Create a stunning website that showcases your brand and drives results</h2><p>Your website is the face of your business online. It’s where you attract, engage, and convert your visitors into loyal customers. That’s why you need a website that is not only beautiful, but also functional, fast, and user-friendly. A website that reflects your brand identity, showcases your products and services, and provides a smooth and satisfying user experience.</p><h2>Tailored Website Design and Development Services</h2><p>We understand that every business is different and has unique website goals and challenges. That’s why we customize our website design and development services to suit your specific needs and budget. We work closely with you to understand your business, your target market, your competitors, and your value proposition. We then craft a website strategy that aligns with your vision and objectives.</p><h2>Ongoing Website Support and Optimization Services</h2><p>We also provide you with regular updates and feedback on your website performance, and suggest ways to improve and scale your results. We are always available to answer your questions and address your concerns. We are not just a service provider, we are your website partner.</p><h2>Why NSP Global Services is Your Best Choice for Website Design and Development</h2><p>If you are looking for a website design and development agency that can help you create a stunning website that showcases your brand and drives results, look no further than NSP Global Services. We have the skills, the experience, and the passion to help you succeed online.</p><p>Contact us today to get a free consultation and a quote for our website design and development services. We look forward to hearing from you and working with you.</p>"
export default function DesignAndDevelopmentCaseStudy(props) {
    const openReadmore = () => {
        const element = document.getElementById('readmore');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const [logged, setLogged] = useState(1)
    const Alltoggle = () => {
        setLogged(1);
    }
    const WebDesigntoggle = () => {
        setLogged(2);
    }
    const Developmenttoggle = () => {
        setLogged(3);
    }
    const Marketingtoggle = () => {
        setLogged(4);
    }

    return (
        <>
            {/* <Helmet>
                <title data-react-helmet="true">{props.heading} Web Design Agency | Custom Responsive Websites</title>
                <meta property="og:title" content={`${props.heading} Web Design Agency | Custom Responsive Websites`} />
                <meta property="og:description" content={`Transform your online brand with our expert web design and development services. Specializing in custom, responsive websites for ${props.heading}. Contact now!`} />
                <meta data-react-helmet="true" name="description" content={`Transform your online brand with our expert web design and development services. Specializing in custom, responsive websites for ${props.heading}. Contact now!`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/design-development/${props.link}`}></link>
            </Helmet> */}
            <div className={style.container1}>
                <img src={'/assets/Automotive/content marketing.png'} style={{ width: '100%', height: '90%', display: 'flex', justifyContent: 'center' }} alt="" />
                <h1 className={style.title_OnPage_SEO}  >Custom Web Design for {props.heading}</h1>
                {/* <p className={style.subtitle_Design_and_Development}>We specialize in providing top-notch website design and development services.</p> */}
            </div>
            {/* service end */}
            <div className={style.container2}>
                <div className={style.container2_1}>
                    <div className={style.container2_div}>
                        <img src={'/assets/icon-3.png'} alt='icon' />
                        <h2 className={style.container2_htwo}>Website Design</h2>
                        <p className={style.container2_para}>At NSP Global Services, we offer a range of website design and development services that can help you achieve your online goals. We have the experience, the expertise, and the tools to create and maintain a website that suits your specific needs and budget.</p>
                        <div className={style.container2_atag}><GoChevronRight />Read More</div>
                    </div>
                </div>
                <div className={style.container2_1}>
                    <div className={style.container2_div}>
                        <img src={'/assets/icon-3.png'} alt='icon' />
                        <h2 className={style.container2_htwo}>React Web Application Development</h2>
                        <p className={style.container2_para}>Our React Web Application Development services are designed to make us the leading ReactJS web development company, with a team skilled in creating interactive, visually appealing, and responsive web applications. We offer comprehensive ReactJS solutions tailored to your project's needs, focusing on performance, scalability, and security. As a dedicated React development agency, we strive to deliver superior results.</p>
                        {/* <Link to='/ppc-services' className={style.container2_atag}><GoChevronRight />Read More</Link> */}
                    </div>
                </div>
                <div className={style.container2_1}>
                    <div className={style.container2_div}>
                        <img src={'/assets/icon-3.png'} alt='icon' />
                        <h2 className={style.container2_htwo}>Agile Software Development Services</h2>
                        <p className={style.container2_para}>Our bespoke software development services are tailored to meet the unique needs of your business. Employing an agile software development approach, we ensure flexibility, speed, and efficiency in delivering your project. From enterprise software development to custom software development for startups CRM software development services, our expertise spans various industries, including automotive, fintech, logistics, and energy management.</p>
                        {/* <Link to='/content-marketing-services' className={style.container2_atag}><GoChevronRight />Read More</Link> */}
                    </div>
                </div>
                <div className={style.container2_1}>
                    <div className={style.container2_div}>
                        <img src={'/assets/icon-3.png'} alt='icon' />
                        <h2 className={style.container2_htwo}>Custom Mobile App Development Services</h2>
                        <p className={style.container2_para}>Our Custom Mobile Application Development Services revolutionize business-customer engagement through rapid development techniques for swift market entry without sacrificing quality. We excel in creating immersive travel apps, precise insurance apps, and offer cross-platform development for iOS and Android. Additionally, our blockchain technology ensures your app's security and scalability.</p>
                        {/* <Link to='/seo-services' className={style.container2_atag}><GoChevronRight />Read More</Link> */}
                    </div>
                </div>
            </div>
            {/*detail Section end  */}
            <div className={style.container3_PPC}>
                <div className={style.container3_div1}>
                    <p className={style.container3_para1}>PROCESS</p>
                    <h2 className={style.container3_hone}>We can help you with</h2>
                    <p className={style.container3_para2}>Transform your online vision into reality with NSP's cutting-edge website design and development expertise, crafted to drive your success in the digital world</p>
                </div>
                <div className={style.container3_div2}>
                    <div className={style.process}>
                        <div className={style.number}>1</div>
                        <h6>Fast and Responsive Website Development</h6>
                        <p className={style.container3_para2}>We can help you create a fast and responsive website that delivers a smooth and seamless user experience. We can help you use Reactjs and other technologies to create a website that loads quickly, responds instantly, and works flawlessly. We can also help you optimize your website for speed, performance, and accessibility.</p>
                    </div>
                    <div className={style.process}>
                        <div className={style.number}>2</div>
                        <h6>WordPress Website Designing</h6>
                        <p className={style.container3_para2}>We can help you create a WordPress website that is easy to manage, customize, and update. We can help you choose from thousands of themes and plugins, or create a custom theme that matches your brand identity. We can also help you optimize your WordPress website for SEO, security, and performance.</p>
                    </div>
                    <div className={style.process}>
                        <div className={style.number}>3</div>
                        <h6>Shopify Website Development</h6>
                        <p className={style.container3_para2}>We can help you create a Shopify website that is perfect for your e-commerce business. We can help you set up your online store, integrate your payment and shipping options, and design your product pages and checkout process. We can also help you leverage Shopify’s features, such as analytics, marketing, and customer service.</p>
                    </div>
                    <div className={style.process}>
                        <div className={style.number}>4</div>
                        <h6>Custom-Made Website Creation</h6>
                        <p className={style.container3_para2}>We can help you create a custom-made website that is tailored to your unique requirements and specifications. We can help you design and develop your website from scratch, using the latest technologies and best practices. We can also help you create a responsive website that adapts to any device and screen size.</p>
                    </div>
                </div>
            </div>
            {/* process end */}
            <div >
                <div className={style.container4_div}>
                    <p className={style.container4_para1}>Pricing Plans</p>
                    <h2 className={style.container4_hone}>Pick A Plan that Suits</h2>
                </div>
                <div className={style.container9}>
                    <div className={style.container9_div}>
                        <button className={style.container9_btn} style={logged === 1 ? { color: 'blue' } : { color: 'black' }} onClick={Alltoggle}>Web Design</button>
                        <button className={style.container9_btn} style={logged === 2 ? { color: 'blue' } : { color: 'black' }} onClick={WebDesigntoggle}>Ecommerce</button>
                        <button className={style.container9_btn} style={logged === 3 ? { color: 'blue' } : { color: 'black' }} onClick={Developmenttoggle}>Web Application</button>
                        <button className={style.container9_btn} style={logged === 4 ? { color: 'blue' } : { color: 'black' }} onClick={Marketingtoggle}>Online Marketpalces</button>
                    </div>
                    <div className={style.container9}>
                        {logged === 1 ? <WebdesignPricing /> : logged === 2 ? <EcommercePricing /> : logged === 3 ? <WebApplicationPricing /> : <OnlineMarketPlacePricing />}
                    </div>
                </div>
            </div>

            {/* pricing end */}
            <div className={style.container7}>
                <div className={style.container7_text}>
                    <p className={style.container7_para}>We Are Hear For You</p>
                    <h2 className={style.container7_htwo}>Let’s Get Back to Work</h2>
                    <p className={style.container7_subtitle}>Reach out to us today, and Let's start crafting your success story together.</p>
                </div>
                <div className={style.container7_btndiv}>
                    <Link href='/contact-us' className={style.container7_btn}>Read More</Link>
                </div>
            </div>
            {/* container 7 end */}
            <div className={style.container5}>
                <div className={style.container5_div}>
                    <p className={style.container4_para1}>Testimonials</p>
                    <h2 className={style.container4_hone}>Client Voices</h2>
                    <p className={style.container4_para2}>Discover what our satisfied clients have to say about their experiences with us, and why they trust us to fuel their digital success.</p>
                </div>
            </div>
            <div className={style.carousel}>
                {/* <Carousal num={3} /> */}
            </div>
            {/* carousel end */}
            <div className={style.container3_readmore} id='readmore'>
                {/* <ReadMore text={paragraphText} maxLength={375} QuesAns={data} /> */}
                <Newreadmorebutton text={paragraph} maxLength={375} QuesAns={data} />
            </div>
        </>
    )
}
