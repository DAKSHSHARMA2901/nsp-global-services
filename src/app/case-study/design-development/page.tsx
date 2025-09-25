import ModernCaseStudy from '@/components/casestudy/ModernCaseStudy';

export const metadata = {
  title: 'Design & Development Case Study - Website Redesign Success | NSP Global Services',
  description: 'See how our web design and development services helped increase conversion rates by 45% and improve page load times by 70%.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/case-study/design-development',
  },
  openGraph: {
    title: 'Design & Development Case Study - Website Redesign Success',
    description: 'Real results from our web design and development project',
    url: 'https://www.nspglobalservices.com/case-study/design-development',
  },
};

export default function DesignDevelopmentCaseStudy() {
  return (
    <ModernCaseStudy
      service="design"
      title="E-commerce Website Redesign Success"
      description="Complete website transformation that increased conversions by 45% and improved user experience across all devices"
      industry="Fashion & Retail"
    />
  );
}