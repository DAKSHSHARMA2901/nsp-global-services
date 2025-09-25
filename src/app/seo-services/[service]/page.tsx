import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOService from '@/components/SEOService';

type Props = {
  params: Promise<{ service: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const serviceName = resolvedParams.service
    .replace('-seo', '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${serviceName} SEO Services & Expert Optimization Solutions`,
    description: `Discover top-tier ${serviceName} SEO services from our expert optimization agency. Maximize your website's visibility and rankings with our proven strategies.`,
    alternates: {
      canonical: `https://www.nspglobalservices.com/seo-services/${resolvedParams.service}`,
    },
    openGraph: {
      title: `${serviceName} SEO Services & Expert Optimization Solutions`,
      description: `Discover top-tier ${serviceName} SEO services from our expert optimization agency. Maximize your website's visibility and rankings with our proven strategies.`,
      url: `https://www.nspglobalservices.com/seo-services/${resolvedParams.service}`,
    },
  }
}

export default async function SEOServicePage({ params }: Props) {
  const resolvedParams = await params;
  const serviceName = resolvedParams.service
    .replace('-seo', '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <SEOService 
          heading={`${serviceName} SEO Services`} 
          subtitle={serviceName}
          serviceSlug={resolvedParams.service}
        />
      </main>
      <Footer />
    </div>
  );
}