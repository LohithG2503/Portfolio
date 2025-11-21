'use client';

import * as React from 'react';
import { skillsData } from '@/lib/data';
import SplitText from '@/components/ui/split-text';
import LogoLoop from '@/components/ui/logo-loop';

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 font-headline text-white">
      <SplitText animation="fadeInUp" delay={0.1} stagger={0.02} startOnVisible={true}>
        {children}
      </SplitText>
    </h2>
  );
}

export default function SkillsSection() {
  // Convert skills to LogoLoop format
  const skillLogos = skillsData.map(skill => ({
    name: skill.name,
    title: skill.name,
  }));

  return (
    <section id="skills" className="py-8 md:py-12 w-full overflow-hidden relative z-10">
      <SectionTitle>Skills & Expertise</SectionTitle>
      <div className="w-full" style={{ height: '120px' }}>
        <LogoLoop
          logos={skillLogos}
          speed={80}
          direction="left"
          logoHeight={60}
          gap={24}
          hoverSpeed={20}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutColor="#1a0a2e"
          ariaLabel="Technology skills"
          className="h-full"
        />
      </div>
    </section>
  );
}
