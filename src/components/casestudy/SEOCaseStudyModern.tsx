'use client';

import ModernCaseStudy from './ModernCaseStudy';

const SEOCaseStudy = ({ heading = 'SEO Services', industry }: { heading?: string; industry?: string }) => {
  return (
    <ModernCaseStudy
      service="seo"
      title={`${heading} - Drive Organic Growth`}
      description="Boost your search rankings, increase organic traffic, and maximize ROI with our comprehensive SEO strategies tailored for your industry."
      industry={industry}
    />
  );
};

export default SEOCaseStudy;