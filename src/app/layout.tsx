import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'NSP Global Services - Expert SEO & Digital Marketing Agency',
  description: 'Transform your digital presence with our AI-powered SEO strategies. Join 140,000+ businesses achieving 60% ranking boosts and 30% traffic growth.',
  keywords: 'SEO services, digital marketing, PPC management, web development, search engine optimization, online marketing',
  authors: [{ name: 'NSP Global Services' }],
  openGraph: {
    title: 'NSP Global Services - Expert SEO & Digital Marketing',
    description: 'Boost your rankings and drive more traffic with our proven SEO strategies',
    type: 'website',
    locale: 'en_US',
    siteName: 'NSP Global Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NSP Global Services - Expert SEO & Digital Marketing',
    description: 'Boost your rankings and drive more traffic with our proven SEO strategies',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NSP Global Services',
    description: 'Expert SEO & Digital Marketing Agency providing AI-powered strategies for business growth',
    url: 'https://nspglobalservices.com',
    logo: 'https://nspglobalservices.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+447436220544',
      contactType: 'customer service',
      availableLanguage: 'English'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Your City',
      addressRegion: 'Your State',
      addressCountry: 'US'
    },
    sameAs: [
      'https://www.facebook.com/nspglobalservices',
      'https://www.linkedin.com/company/nspglobalservices',
      'https://twitter.com/nspglobalservices'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Marketing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO Services',
            description: 'Search Engine Optimization to boost rankings and organic traffic'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'PPC Management',
            description: 'Pay-per-click advertising campaign management'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Development',
            description: 'Custom website design and development services'
          }
        }
      ]
    }
  };

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div id="__next">
          {children}
        </div>
      </body>
    </html>
  );
}
