import ContentMarketingCaseStudyModern from '@/components/casestudy/ContentMarketingCaseStudyModern';

export const metadata = {
  title: 'Content Marketing Case Study - Engage Your Audience | NSP Global Services',
  description: 'Learn how our strategic content marketing approach creates compelling content that drives engagement, builds brand authority, and converts visitors into customers.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/case-study/content-marketing',
  },
  openGraph: {
    title: 'Content Marketing Case Study - Engage Your Audience',
    description: 'Strategic content marketing that drives engagement and builds brand authority.',
    url: 'https://www.nspglobalservices.com/case-study/content-marketing',
  },
};

export default function ContentMarketingCaseStudyPage() {
  return <ContentMarketingCaseStudyModern heading="Content Marketing Services" />;
}