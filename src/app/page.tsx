import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ToolsMarquee from '@/components/ToolsMarquee';
import TrustedPartners from '@/components/TrustedPartners';
import ServicesSection from '@/components/ServicesSection';
import ExpertiseSection from '@/components/ExpertiseSection';
import ProcessSteps from '@/components/ProcessSteps';
import PortfolioGallery from '@/components/PortfolioGallery';
import KeyBenefits from '@/components/KeyBenefits';
import WhyChoose from '@/components/WhyChoose';
import JoinAgency from '@/components/JoinAgency';
import FeaturesSection from '@/components/FeaturesSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ToolsMarquee />
        <TrustedPartners />
        <StatsSection />
        <ServicesSection />
        <ExpertiseSection />
        <ProcessSteps />
        <PortfolioGallery />
        <KeyBenefits />
        <WhyChoose />
        <JoinAgency />
        <FeaturesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
