import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PPCService from '@/components/PPCService';

type Props = {
  params: Promise<{ service: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const serviceName = resolvedParams.service
    .replace('-ppc-services', '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${serviceName} PPC Services & Expert Online Advertising Solutions`,
    description: `Discover top-tier ${serviceName} paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`,
    alternates: {
      canonical: `https://www.nspglobalservices.com/ppc-services/${resolvedParams.service}`,
    },
    openGraph: {
      title: `${serviceName} PPC Services & Expert Online Advertising Solutions`,
      description: `Discover top-tier ${serviceName} paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`,
      url: `https://www.nspglobalservices.com/ppc-services/${resolvedParams.service}`,
    },
  }
}

export default async function PPCServicePage({ params }: Props) {
  const resolvedParams = await params;
  const serviceName = resolvedParams.service
    .replace('-ppc-services', '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PPCService 
          heading={`${serviceName} PPC Services`} 
          subtitle={serviceName}
          serviceSlug={resolvedParams.service}
        />
      </main>
      <Footer />
    </div>
  );
}