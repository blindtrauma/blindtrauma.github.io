import PageTransition from '@/components/layout/PageTransition';
import HeroSection from '@/components/sections/HeroSection';
import MarqueeSection from '@/components/sections/MarqueeSection';
import ServicesSection from '@/components/sections/ServicesSection';
import StatsSection from '@/components/sections/StatsSection';
import PortfolioPreview from '@/components/sections/PortfolioPreview';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PressSection from '@/components/sections/PressSection';
import InstagramSection from '@/components/sections/InstagramSection';
import CTABanner from '@/components/sections/CTABanner';

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <StatsSection />
      <PortfolioPreview />
      <TestimonialsSection />
      <PressSection />
      <InstagramSection />
      <CTABanner />
    </PageTransition>
  );
}
