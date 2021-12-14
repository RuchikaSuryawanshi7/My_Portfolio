import React from 'react';
import AboutSection from '../components/AboutSection';
// import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';
import AcheivementsSection from '../components/AcheivementsSection';
import ExtraActivitySection from '../components/ExtraActivity';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <AcheivementsSection />
      <ProjectsSection />
      <ExtraActivitySection />
      <ContactBanner />
    </div>
  );
}
