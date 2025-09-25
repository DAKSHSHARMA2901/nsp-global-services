import React from 'react';
import DigitalMarketingCaseStudy from '@/app/components/casestudy/DigitalMarketingCaseStudy';

interface PageParams {
    params: Promise<{
        service: string;
    }>;
}

export async function generateMetadata({ params }: PageParams) {
    const resolvedParams = await params;
    const serviceName = resolvedParams.service
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());

    return {
        title: `${serviceName} Digital Marketing Services`,
        description: 'NSP is a Digital Marketing Company. We build ROI-driven strategies to help achieve your business goals. Contact us today!',
        alternates: {
            canonical: `https://www.nspglobalservices.com/digital-marketing-for/${resolvedParams.service}`,
        },
        openGraph: {
            title: `${serviceName} Digital Marketing Services`,
            description: 'NSP is a Digital Marketing Company. We build ROI-driven strategies to help achieve your business goals. Contact us today!',
            url: `https://www.nspglobalservices.com/digital-marketing-for/${resolvedParams.service}`,
        }
    };
}

export default async function DigitalMarketingServicePage({ params }: PageParams) {
    const resolvedParams = await params;
    return <DigitalMarketingCaseStudy heading={resolvedParams.service} />;
}