'use client';

import { useState, useEffect } from 'react';

// Static imports for reliable loading
import enTranslations from '../../locales/en.json';
import deTranslations from '../../locales/de.json';
import esTranslations from '../../locales/es.json';
import frTranslations from '../../locales/fr.json';
import itTranslations from '../../locales/it.json';
import jaTranslations from '../../locales/ja.json';
import hiTranslations from '../../locales/hi.json';
import mrTranslations from '../../locales/mr.json';

// Available translations map
const availableTranslations: Record<string, any> = {
  'en': enTranslations,
  'de': deTranslations,
  'es': esTranslations,
  'fr': frTranslations,
  'it': itTranslations,
  'ja': jaTranslations,
  'hi': hiTranslations,
  'mr': mrTranslations,
};

export function useTranslation() {
  const [locale, setLocale] = useState('en');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Get preferred language from localStorage or default to 'en'
    const preferredLanguage = localStorage.getItem('preferred-language') || 'en';
    setLocale(preferredLanguage);
    setIsLoaded(true);
  }, []);

  const t = (key: string): string => {
    // Return fallback during SSR or loading
    if (!isLoaded) {
      return key.split('.').pop() || key;
    }
    
    // Get current translations with English fallback
    const currentTranslations = availableTranslations[locale] || availableTranslations['en'];
    
    // Split the key by dots to navigate nested objects
    const keys = key.split('.');
    let value: any = currentTranslations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Try English fallback if current locale fails
        if (locale !== 'en') {
          const englishTranslations = availableTranslations['en'];
          let englishValue: any = englishTranslations;
          for (const ek of keys) {
            if (englishValue && typeof englishValue === 'object' && ek in englishValue) {
              englishValue = englishValue[ek];
            } else {
              englishValue = null;
              break;
            }
          }
          if (typeof englishValue === 'string') {
            return englishValue;
          }
        }
        // Return the last part of the key if translation not found
        return keys[keys.length - 1] || key;
      }
    }
    
    // Return the value if it's a string, otherwise return the key
    return typeof value === 'string' ? value : key.split('.').pop() || key;
  };

  const changeLanguage = (newLocale: string) => {
    if (availableTranslations[newLocale]) {
      setLocale(newLocale);
      localStorage.setItem('preferred-language', newLocale);
    } else {
      console.log(`Translation not available for ${newLocale}`);
    }
  };

  return { t, locale, changeLanguage, isLoaded };
}