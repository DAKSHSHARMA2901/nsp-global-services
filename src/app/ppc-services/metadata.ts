import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nspglobalservices.com'),
  title: 'PPC Services & Digital Advertising Campaigns | NSP Global Services',
  description: 'Professional PPC management services for all industries. Drive targeted traffic and maximize ROI with our expert Google Ads and digital advertising campaigns.',
  keywords: [
    'PPC services',
    'digital advertising',
    'Google Ads management',
    'pay-per-click advertising',
    'paid search campaigns',
    'digital marketing',
    'PPC management',
    'online advertising',
    'search engine marketing',
    'SEM services',
    'Google AdWords',
    'Facebook ads',
    'social media advertising',
    'conversion optimization'
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
    url: 'https://www.nspglobalservices.com/ppc-services',
    title: 'PPC Services & Digital Advertising Campaigns | NSP Global Services',
    description: 'Professional PPC management services for all industries. Drive targeted traffic and maximize ROI with our expert Google Ads and digital advertising campaigns.',
    siteName: 'NSP Global Services',
    images: [
      {
        url: '/next.svg',
        width: 1200,
        height: 630,
        alt: 'PPC Services - NSP Global Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PPC Services & Digital Advertising Campaigns | NSP Global Services',
    description: 'Professional PPC management services for all industries. Drive targeted traffic and maximize ROI with our expert Google Ads and digital advertising campaigns.',
    images: ['/next.svg'],
    creator: '@nspglobalservices',
  },
  alternates: {
    canonical: 'https://www.nspglobalservices.com/ppc-services',
  },
}