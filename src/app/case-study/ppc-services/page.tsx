import PPCCaseStudyModern from '@/components/casestudy/PPCCaseStudyModern';

export const metadata = {
  title: 'PPC Services Case Study - Maximize Your Ad Spend | NSP Global Services',
  description: 'Discover our data-driven PPC campaigns that drive immediate results. Get more leads, sales, and brand visibility through strategic paid advertising.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/case-study/ppc-services',
  },
  openGraph: {
    title: 'PPC Services Case Study - Maximize Your Ad Spend',
    description: 'Data-driven PPC campaigns that deliver immediate results and maximize ROI.',
    url: 'https://www.nspglobalservices.com/case-study/ppc-services',
  },
};

export default function PPCCaseStudyPage() {
  return <PPCCaseStudyModern heading="PPC Services" />;
}