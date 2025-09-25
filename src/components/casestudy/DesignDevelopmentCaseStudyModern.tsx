'use client';

import ModernCaseStudy from './ModernCaseStudy';

const DesignDevelopmentCaseStudy = ({ heading = 'Design & Development Services', industry }: { heading?: string; industry?: string }) => {
  return (
    <ModernCaseStudy
      service="design"
      title={`${heading} - Build Digital Excellence`}
      description="Create stunning, high-performing websites and applications that convert visitors into customers with our expert design and development services."
      industry={industry}
    />
  );
};

export default DesignDevelopmentCaseStudy;