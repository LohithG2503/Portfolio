'use client';

import * as React from 'react';
import { skillsData } from '@/lib/data';
import { motion } from 'framer-motion';

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-bold text-center mb-12 font-headline text-primary">
      {children}
    </h2>
  );
}

export default function SkillsSection() {
  const duplicatedSkills = [...skillsData, ...skillsData, ...skillsData, ...skillsData];

  const totalWidth = duplicatedSkills.reduce((acc, skill) => acc + skill.name.length * 8 + 48, 0);


  const carouselVariants = {
    animate: {
      x: [0, -totalWidth / 2],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 250,
          ease: 'linear',
        },
      },
    },
  };


  return (
    <section id="skills" className="py-12 w-full overflow-hidden">
      <SectionTitle>Skills & Expertise</SectionTitle>
      <div className="w-full">
        <motion.div className="flex" variants={carouselVariants} animate="animate">
          <div className="flex">
            {duplicatedSkills.map((skill, index) => (
              <div
                key={index}
                className="p-2 flex-shrink-0"
              >
                <div className="p-4 bg-background/60 backdrop-blur-sm border-black/5 dark:border-white/10 shadow-sm rounded-lg h-full flex items-center justify-center whitespace-nowrap">
                  <p className="text-md font-medium text-center">
                    {skill.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
