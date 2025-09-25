'use client';

import React from 'react';

const WorldMapSVG: React.FC = () => {
  return (
    <svg 
      viewBox="0 0 1000 500" 
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#bfdbfe" />
        </linearGradient>
        <linearGradient id="landGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f9fafb" />
          <stop offset="100%" stopColor="#e5e7eb" />
        </linearGradient>
      </defs>
      
      {/* Ocean Background */}
      <rect width="1000" height="500" fill="url(#oceanGradient)" />
      
      {/* North America */}
      <path
        d="M50 80 Q80 70 120 85 L160 100 Q190 90 220 105 L250 120 Q280 110 310 125 L340 140 Q360 135 380 145 L400 155 Q420 150 440 160 L460 170 Q480 165 500 175 Q510 180 520 170 L540 160 Q560 165 580 155 L600 145 Q620 150 640 140 L660 130 Q680 135 700 125 L720 115 Q740 120 760 110 L780 100 Q800 105 820 95 L840 85 Q860 90 880 80 L900 70 Q920 75 940 65 L960 55 Q980 60 1000 50 L1000 0 L0 0 L0 60 Q20 70 50 80 Z"
        fill="url(#landGradient)"
        stroke="#d1d5db"
        strokeWidth="1"
        className="hover:fill-blue-50 transition-colors duration-300 cursor-pointer"
      />
      
      {/* Greenland */}
      <path
        d="M350 40 Q380 35 410 45 L440 55 Q460 50 480 60 L500 70 Q520 65 540 75 L560 85 Q580 80 600 90 L620 100 Q640 95 660 105 L680 115 Q700 110 720 120 L740 130 Q760 125 780 135 L800 145 Q820 140 840 150 L860 160 Q880 155 900 165 L920 175 Q940 170 960 180 L980 190 Q990 195 1000 185 L1000 40 L350 40 Z"
        fill="url(#landGradient)"
        stroke="#d1d5db"
        strokeWidth="1"
        className="hover:fill-green-50 transition-colors duration-300"
      />
      
      {/* Europe */}
      <path
        d="M480 120 Q500 115 520 125 L540 135 Q560 130 580 140 L600 150 Q620 145 640 155 L660 165 Q680 160 700 170 L720 180 Q740 175 760 185 L780 195 Q800 190 820 200 L840 210 Q860 205 880 215 L900 225 Q920 220 940 230 L960 240 Q980 235 1000 245 L1000 120 L480 120 Z"
        fill="url(#landGradient)"
        stroke="#d1d5db"
        strokeWidth="1"
        className="hover:fill-red-50 transition-colors duration-300 cursor-pointer"
      />
      
      {/* Asia */}
      <path
        d="M520 140 Q560 135 600 145 L640 155 Q680 150 720 160 L760 170 Q800 165 840 175 L880 185 Q920 180 960 190 L1000 200 L1000 140 L520 140 Z"
        fill="url(#landGradient)"
        stroke="#d1d5db"
        strokeWidth="1"
        className="hover:fill-yellow-50 transition-colors duration-300 cursor-pointer"
      />
      
      {/* Africa */}
      <path
        d="M450 200 Q480 195 510 205 L540 215 Q570 210 600 220 L630 230 Q660 225 690 235 L720 245 Q750 240 780 250 L810 260 Q840 255 870 265 L900 275 Q930 270 960 280 L990 290 Q1000 295 1000 285 L1000 200 L450 200 Z"
        fill="url(#landGradient)"
        stroke="#d1d5db"
        strokeWidth="1"
        className="hover:fill-orange-50 transition-colors duration-300 cursor-pointer"
      />
      
      {/* South America */}
      <path
        d="M200 280 Q230 275 260 285 L290 295 Q320 290 350 300 L380 310 Q410 305 440 315 L470 325 Q500 320 530 330 L560 340 Q590 335 620 345 L650 355 Q680 350 710 360 L740 370 Q770 365 800 375 L830 385 Q860 380 890 390 L920 400 Q950 395 980 405 L1000 415 L1000 500 L0 500 L0 280 L200 280 Z"
        fill="url(#landGradient)"
        stroke="#d1d5db"
        strokeWidth="1"
        className="hover:fill-purple-50 transition-colors duration-300 cursor-pointer"
      />
      
      {/* Australia */}
      <path
        d="M720 350 Q750 345 780 355 L810 365 Q840 360 870 370 L900 380 Q930 375 960 385 L990 395 Q1000 400 1000 390 L1000 350 L720 350 Z"
        fill="url(#landGradient)"
        stroke="#d1d5db"
        strokeWidth="1"
        className="hover:fill-pink-50 transition-colors duration-300 cursor-pointer"
      />
      
      {/* Grid Lines for Geographic Reference */}
      <g stroke="#e5e7eb" strokeWidth="0.5" opacity="0.5">
        {/* Latitude lines */}
        <line x1="0" y1="125" x2="1000" y2="125" strokeDasharray="2,2" />
        <line x1="0" y1="250" x2="1000" y2="250" strokeDasharray="2,2" />
        <line x1="0" y1="375" x2="1000" y2="375" strokeDasharray="2,2" />
        
        {/* Longitude lines */}
        <line x1="250" y1="0" x2="250" y2="500" strokeDasharray="2,2" />
        <line x1="500" y1="0" x2="500" y2="500" strokeDasharray="2,2" />
        <line x1="750" y1="0" x2="750" y2="500" strokeDasharray="2,2" />
      </g>
    </svg>
  );
};

export default WorldMapSVG;