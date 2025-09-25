'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const categories = ["All", "SEO services", "Digital Marketing", "Web Design & Development", "App Development"];

const projects = [
  {
    id: 1,
    category: "SEO services",
    title: "100+ Deep Quotes about life choices",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739297518/WhatsApp_Image_2025-02-11_at_10.41.49_PM_actkop.jpg",
  },
  {
    id: 2,
    category: "SEO services", 
    title: "100+ Best Sales Quotes to Inspire,...",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739297518/WhatsApp_Image_2025-02-11_at_10.41.49_PM_2_mcjukg.jpg",
  },
  {
    id: 3,
    category: "SEO services",
    title: "100+ Most Famous Movie Quotes of All Time",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739297515/WhatsApp_Image_2025-02-11_at_10.41.49_PM_1_lcvx2w.jpg",
  },
  {
    id: 4,
    category: "Digital Marketing",
    title: "100+ Most Famous Quotes of All Time....",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1738266143/119_20240624_221741_0002_jmk5y5.png",
  },
  {
    id: 5,
    category: "Web Design & Development",
    title: "60+ Digital Marketing Wishes For Linkedin Post",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739196174/shopping_app_fvykid.png",
  },
  {
    id: 6,
    category: "Web Design & Development",
    title: "100+ Good Messages for Her",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739196172/startup_news_w6rn5z.png",
  },
  {
    id: 7,
    category: "Web Design & Development",
    title: "100+ Digital Marketing Tools List...",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739194255/electronics_vd3r2s.png",
  },
  {
    id: 8,
    category: "Web Design & Development",
    title: "100+ Digital Marketing Tools List...",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739192163/diamond_jewellery_dmornj.png",
  },
  {
    id: 9,
    category: "Web Design & Development",
    title: "100+ Digital Marketing Tools List...",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739192154/electronics_jpbn4m.png",
  },
  {
    id: 10,
    category: "Web Design & Development",
    title: "100+ Digital Marketing Tools List...",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739191072/greentradeindia_uujskl.png",
  },
  {
    id: 11,
    category: "Web Design & Development",
    title: "100+ Digital Marketing Tools List...",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739191072/blackgoat_creative_bnges8.png",
  },
  {
    id: 12,
    category: "Web Design & Development",
    title: "100+ Digital Marketing Tools List...",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739191071/primemed_zborqo.png",
  },
  {
    id: 13,
    category: "Web Design & Development",
    title: "100+ Digital Marketing Tools List...",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739189985/nonicecoproduct_ug44d8.png",
  },
  {
    id: 14,
    category: "Web Design & Development",
    title: "100+ Digital Marketing Tools List...",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739189984/hyperrealitylabs_qumyrd.png",
  },
  {
    id: 15,
    category: "Web Design & Development",
    title: "100+ Digital Marketing Tools List...",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739189983/devbhoomiagro_apvta6.png",
  },
  {
    id: 16,
    category: "Web Design & Development",
    title: "100+ Digital Marketing Tools List...",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739189982/blackgoat_creative_tv03ae.png",
  },
  {
    id: 17,
    category: "Web Design & Development",
    title: "100+ Digital Marketing Tools List...",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739186028/softtouch_image_consultancy_ov87gg.png",
  },
  {
    id: 18,
    category: "Web Design & Development",
    title: "100+ Digital Marketing Tools List...",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739186028/secretmessage_candles_v1phvx.png",
  },
  {
    id: 19,
    category: "Web Design & Development",
    title: "100+ Digital Marketing Tools List...",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739186027/fragrancereviews_gkdeuj.png",
  },
  {
    id: 20,
    category: "Web Design & Development",
    title: "100+ Digital Marketing Tools List...",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739186027/shreeram_catering_hneonc.png",
  },
  {
    id: 21,
    category: "Web Design & Development",
    title: "100+ Digital Marketing Tools List...",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739186026/5starpackrd_rwylqy.png",
  },
  {
    id: 22,
    category: "Web Design & Development",
    title: "100+ Digital Marketing Tools List...",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739186026/niishii_marketplace_n2d88t.png",
  },
  {
    id: 23,
    category: "Web Design & Development",
    title: "100+ Digital Marketing Tools List...",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739186026/londoncollegeoftech_gvbdqg.png",
  },
  {
    id: 24,
    category: "Web Design & Development",
    title: "100+ Digital Marketing Tools List...",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739186026/shopsaral_wxgnat.png",
  },
  {
    id: 25,
    category: "App Development",
    title: "100+ Deep Quotes about life choices",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739196168/news_b3llrm.png",
  },
  {
    id: 26,
    category: "App Development",
    title: "100+ Deep Quotes about life choices",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739196174/shopping_app_fvykid.png",
  },
  {
    id: 27,
    category: "App Development",
    title: "100+ Deep Quotes about life choices",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739196167/password_cracker_qrfdu1.png",
  },
  {
    id: 28,
    category: "App Development",
    title: "100+ Deep Quotes about life choices",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739196166/game_app_ebfdza.png",
  },
  {
    id: 29,
    category: "App Development",
    title: "100+ Deep Quotes about life choices",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739196165/redoence_tpevyu.png",
  },
  {
    id: 30,
    category: "App Development",
    title: "100+ Deep Quotes about life choices",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739196165/puzzle_carcker_ziwzd1.png",
  },
  {
    id: 31,
    category: "App Development",
    title: "100+ Deep Quotes about life choices",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739196164/candle_abslgj.png",
  },
  {
    id: 32,
    category: "App Development",
    title: "100+ Deep Quotes about life choices",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739196164/message_candle_zm2yor.png",
  },
  {
    id: 33,
    category: "App Development",
    title: "100+ Deep Quotes about life choices",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1738266328/8_20240621_234344_0002_1_ltyql1.png",
  },
  {
    id: 34,
    category: "App Development",
    title: "100+ Deep Quotes about life choices",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1738266328/7_20240621_234344_0001_1_gum3id.png",
  },
  {
    id: 35,
    category: "App Development",
    title: "100+ Deep Quotes about life choices",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1738266146/1_20240620_223216_0000_gmg9h1.png",
  },
  {
    id: 36,
    category: "App Development",
    title: "100+ Deep Quotes about life choices",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1738266144/1_20240620_001622_0000_scraec.png",
  },
  {
    id: 37,
    category: "Digital Marketing",
    title: "100+ Most Famous Quotes of All Time....",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1738266143/118_20240624_221741_0001_cmrbcw.png",
  },
  {
    id: 38,
    category: "Digital Marketing",
    title: "100+ Most Famous Quotes of All Time....",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1738266142/117_20240624_221741_0000_nvaay6.png",
  },
  {
    id: 39,
    category: "Digital Marketing",
    title: "100+ Most Famous Quotes of All Time....",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1738266142/122_20240624_221741_0005_qvthpj.png",
  },
  {
    id: 40,
    category: "Digital Marketing",
    title: "100+ Most Famous Quotes of All Time....",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1738266142/121_20240624_221741_0004_nemmkq.png",
  },
  {
    id: 41,
    category: "SEO services",
    title: "100+ Most Famous Movie Quotes of All Time",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739297515/WhatsApp_Image_2025-02-11_at_10.41.48_PM_1_nshtyj.jpg",
  },
  {
    id: 42,
    category: "SEO services",
    title: "100+ Most Famous Movie Quotes of All Time",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739297515/WhatsApp_Image_2025-02-11_at_10.41.48_PM_dzwrvo.jpg",
  },
  {
    id: 43,
    category: "SEO services",
    title: "100+ Most Famous Movie Quotes of All Time",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739297515/WhatsApp_Image_2025-02-11_at_10.41.48_PM_2_busn5b.jpg",
  },
  {
    id: 44,
    category: "SEO services",
    title: "100+ Most Famous Movie Quotes of All Time",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739297514/WhatsApp_Image_2025-02-11_at_10.41.47_PM_zuwuio.jpg",
  },
  {
    id: 45,
    category: "SEO services",
    title: "100+ Most Famous Movie Quotes of All Time",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739297514/WhatsApp_Image_2025-02-11_at_10.41.46_PM_2_o0dfrp.jpg",
  },
  {
    id: 46,
    category: "SEO services",
    title: "100+ Most Famous Movie Quotes of All Time",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739297514/WhatsApp_Image_2025-02-11_at_10.41.46_PM_1_epvaas.jpg",
  },
  {
    id: 47,
    category: "SEO services",
    title: "100+ Most Famous Movie Quotes of All Time",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739297514/WhatsApp_Image_2025-02-11_at_10.41.47_PM_1_yyh3tp.jpg",
  },
  {
    id: 48,
    category: "SEO services",
    title: "100+ Most Famous Movie Quotes of All Time",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739297514/WhatsApp_Image_2025-02-11_at_10.41.46_PM_xan4xl.jpg",
  },
  {
    id: 49,
    category: "SEO services",
    title: "100+ Most Famous Movie Quotes of All Time",
    image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1739297514/WhatsApp_Image_2025-02-11_at_10.41.45_PM_wcbacp.jpg",
  },
];

const PortfolioGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-blue-800 uppercase mb-4 tracking-wider">
            HOW IT WORK
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            From Strategy to Success: Crafting Impactful Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our portfolio showcases diverse achievements across industries like retail, healthcare, technology, and finance.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md hover:shadow-lg'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 card-hover group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyVPonyRPonyRP9P4bOJ4vvfRd85xX6qjA7ycPMWGdLRkCqJCfROUP0HT/oTJRGEQDRRPo9/9k="
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation CTA */}
        <div className="text-center mt-16">
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center w-64 h-64 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors duration-300 cursor-pointer group"
          >
            <div className="text-center">
              <p className="text-lg font-semibold group-hover:scale-105 transition-transform duration-300">
                Get free consultation
              </p>
              <div className="mt-2 text-2xl group-hover:rotate-12 transition-transform duration-300">
                ↗
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;