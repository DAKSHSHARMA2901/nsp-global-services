'use client';

import ModernCaseStudy from './ModernCaseStudy';

const PPCCaseStudy = ({ heading = 'PPC Services', industry }: { heading?: string; industry?: string }) => {
  return (
    <ModernCaseStudy
      service="ppc"
      title={`${heading} - Maximize Your Ad Spend`}
      description="Drive immediate results with our data-driven PPC campaigns. Get more leads, sales, and brand visibility through strategic paid advertising."
      industry={industry}
    />
  );
};

export default PPCCaseStudy;