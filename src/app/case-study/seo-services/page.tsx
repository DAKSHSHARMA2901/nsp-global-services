import SEOCaseStudyModern from '@/components/casestudy/SEOCaseStudyModern';

export const metadata = {
  title: 'SEO Services Case Study - Drive Organic Growth | NSP Global Services',
  description: 'Explore our comprehensive SEO services and see how we help businesses boost their search rankings, increase organic traffic, and maximize ROI.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/case-study/seo-services',
  },
  openGraph: {
    title: 'SEO Services Case Study - Drive Organic Growth',
    description: 'Comprehensive SEO strategies that boost rankings and drive organic traffic.',
    url: 'https://www.nspglobalservices.com/case-study/seo-services',
  },
};

export default function SEOCaseStudyPage() {
  return <SEOCaseStudyModern heading="SEO Services" />;
}