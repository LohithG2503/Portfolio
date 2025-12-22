'use client';

import { Suspense, lazy } from 'react';
import dynamic from 'next/dynamic';

// Lazy load heavy components for better performance
const SpaceBackground = dynamic(() => import("@/components/backgrounds/space-background"), {
  ssr: false,
  loading: () => null,
});

// Lazy load sections for code splitting
// Eager load Hero section
import HeroSection from '@/components/sections/hero-section';
const SkillsSection = lazy(() => import("@/components/sections/skills-section"));
const ProjectsSection = lazy(() => import("@/components/sections/projects-section"));
const CertificationsSection = lazy(() => import("@/components/sections/certifications-section"));
const EducationSection = lazy(() => import("@/components/sections/education-section"));
const ContactSection = lazy(() => import("@/components/sections/contact-section"));

// Loading component for sections
const SectionLoader = () => (
  <div className="py-12 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
  </div>
);

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen">
      <Suspense fallback={null}>
        <SpaceBackground className="fixed" starCount={60} nebulaCount={1} />
      </Suspense>
      <div className="relative z-10 container mx-auto px-4 pt-4 pb-8 md:pt-8 md:pb-12 lg:pt-12 lg:pb-20">
        <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
          <HeroSection />
          <Suspense fallback={<SectionLoader />}>
            <SkillsSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <ProjectsSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <CertificationsSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <EducationSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <ContactSection />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

