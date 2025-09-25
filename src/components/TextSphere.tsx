'use client';

import React, { useEffect, useRef } from 'react';

interface TextSphereProps {
  texts: string[];
  className?: string;
}

const TextSphere: React.FC<TextSphereProps> = ({ texts, className = '' }) => {
  const sphereRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sphereRef.current) return;

    // Simple animated text display for SEO keywords
    const elements = sphereRef.current.querySelectorAll('.text-item');
    
    elements.forEach((element, index) => {
      const delay = index * 0.1;
      (element as HTMLElement).style.animationDelay = `${delay}s`;
    });
  }, []);

  return (
    <div className={`text-sphere-container ${className}`} ref={sphereRef}>
      <div className="relative w-80 h-80 mx-auto">
        {/* Central SEO Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
            <span className="text-white font-bold text-lg">SEO</span>
          </div>
        </div>
        
        {/* Floating text elements */}
        <div className="absolute inset-0">
          {texts.map((text, index) => {
            const angle = (index * 360) / texts.length;
            const radius = 120;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);
            
            return (
              <div
                key={index}
                className="text-item absolute text-blue-600 font-semibold text-sm bg-white px-3 py-1 rounded-full shadow-lg border border-blue-100 animate-pulse"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {text}
              </div>
            );
          })}
        </div>
        
        {/* Orbiting circles for visual effect */}
        <div className="absolute inset-0">
          <div className="orbit-ring absolute inset-4 border border-blue-200 rounded-full opacity-30 animate-spin-slow"></div>
          <div className="orbit-ring absolute inset-8 border border-blue-300 rounded-full opacity-20 animate-spin-reverse"></div>
          <div className="orbit-ring absolute inset-12 border border-blue-100 rounded-full opacity-10 animate-spin-slow"></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TextSphere;