'use client';

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import HealingProcessSection from './components/HealingProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import FinalCTASection from './components/FinalCTASection';

export default function Home() {
  return (
    <div className="bg-[#F7F6F2]">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <HealingProcessSection />
      <TestimonialsSection />
      <FinalCTASection />
    </div>
  );
}

