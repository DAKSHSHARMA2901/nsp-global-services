'use client';

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitor page load performance
    if (typeof window !== 'undefined' && 'performance' in window && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          try {
            if (entry.entryType === 'navigation') {
              const navEntry = entry as PerformanceNavigationTiming;
              console.log('Page Load Time:', navEntry.loadEventEnd - navEntry.fetchStart);
            }
            
            if (entry.entryType === 'largest-contentful-paint') {
              console.log('LCP:', entry.startTime);
            }
            
            if (entry.entryType === 'first-input') {
              const fidEntry = entry as PerformanceEventTiming;
              if ('processingStart' in fidEntry) {
                console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
              }
            }
          } catch (error) {
            console.log('Error processing performance entry:', error);
          }
        }
      });
      
      try {
        observer.observe({ entryTypes: ['navigation', 'largest-contentful-paint', 'first-input'] });
      } catch (e) {
        // Fallback for older browsers
        console.log('Performance monitoring not fully supported');
      }
      
      return () => observer.disconnect();
    }
  }, []);

  return null; // This component doesn't render anything
}

// Web Vitals reporting function (simplified without external dependency)
export function reportWebVitals() {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Simple performance tracking without web-vitals dependency
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log(`Performance metric: ${entry.name}`, entry.startTime);
      }
    });
    
    try {
      observer.observe({ entryTypes: ['measure', 'navigation'] });
    } catch (e) {
      console.log('Advanced performance monitoring not supported');
    }
  }
}