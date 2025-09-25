'use client';

import React from 'react';

const ToolsMarquee = () => {
    const tools = [
        "SpyFu", "Unbounce", "Sprout Social", "Screaming Frog", "SEMrush", 
        "Google Big Query", "Hootsuite", "SendGrid", "Buffer", "Sendinblue",
        "Mailchimp", "Google My Business", "Google Analytics", "Google Ads",
        "SE Ranking", "Google Tag Manager", "Google PageSpeed", "LinkedIn",
        "Moz", "Twitter", "Canva", "Hotjar", "Google Search Console",
        "SimilarWeb", "Search Ads", "Meta", "TikTok", "Display & Video 360", "Yoast"
    ];

    return (
        <div className="w-full overflow-hidden bg-blue-600 py-8 relative">
            <div className="flex whitespace-nowrap animate-marquee">
                {/* First set of tools */}
                {tools.map((tool, index) => (
                    <span key={index} className="text-2xl md:text-3xl font-bold text-white mx-4">
                        {tool} <span className="mx-2">*</span>
                    </span>
                ))}
                {/* Duplicate for seamless loop */}
                {tools.map((tool, index) => (
                    <span key={`duplicate-${index}`} className="text-2xl md:text-3xl font-bold text-white mx-4">
                        {tool} <span className="mx-2">*</span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ToolsMarquee;