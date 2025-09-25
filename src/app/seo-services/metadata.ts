import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nspglobalservices.com'),
  title: '#1 SEO Management Team | Expert SEO Services for Your Success',
  description: 'SEO services that mean business. NSP\'s proven track record is your assurance of lead and sales growth.',
  keywords: [
    'SEO services',
    'search engine optimization',
    'digital marketing',
    'website optimization',
    'Google ranking',
    'organic traffic',
    'SEO agency',
    'on-page SEO',
    'off-page SEO',
    'technical SEO',
    'local SEO',
    'ecommerce SEO',
    'keyword research',
    'link building',
    'content marketing',
    'SEO audit'
  ],
  authors: [{ name: 'NSP Global Services' }],
  creator: 'NSP Global Services',
  publisher: 'NSP Global Services',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.nspglobalservices.com/seo-services',
    title: '#1 SEO Management Team | Expert SEO Services for Your Success',
    description: 'SEO services that mean business. NSP\'s proven track record is your assurance of lead and sales growth.',
    siteName: 'NSP Global Services',
    images: [
      {
        url: '/next.svg',
        width: 1200,
        height: 630,
        alt: 'SEO Services - NSP Global Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 SEO Management Team | Expert SEO Services for Your Success',
    description: 'SEO services that mean business. NSP\'s proven track record is your assurance of lead and sales growth.',
    images: ['/next.svg'],
    creator: '@nspglobalservices',
  },
  alternates: {
    canonical: 'https://www.nspglobalservices.com/seo-services',
  },
}