'use client';

import { useState, useEffect } from 'react';
import SpaceBackground from '@/components/backgrounds/space-background';
import HeroSection from '@/components/sections/hero-section';
import SkillsSection from '@/components/sections/skills-section';
import ProjectsSection from '@/components/sections/projects-section';
import CertificationsSection from '@/components/sections/certifications-section';
import EducationSection from '@/components/sections/education-section';
import ContactSection from '@/components/sections/contact-section';

export default function PortfolioPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Show loading state until mounted
  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <SpaceBackground className="fixed" starCount={60} nebulaCount={1} />
      <div className="relative z-10 container mx-auto px-4 pt-4 pb-8 md:pt-8 md:pb-12 lg:pt-12 lg:pb-20">
        <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificationsSection />
          <EducationSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
