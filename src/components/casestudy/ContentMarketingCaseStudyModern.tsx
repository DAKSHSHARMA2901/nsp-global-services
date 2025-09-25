'use client';

import ModernCaseStudy from './ModernCaseStudy';

const ContentMarketingCaseStudy = ({ heading = 'Content Marketing Services', industry }: { heading?: string; industry?: string }) => {
  return (
    <ModernCaseStudy
      service="content"
      title={`${heading} - Engage Your Audience`}
      description="Create compelling content that drives engagement, builds brand authority, and converts visitors into loyal customers with our strategic content marketing approach."
      industry={industry}
    />
  );
};

export default ContentMarketingCaseStudy;