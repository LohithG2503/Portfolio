'use client';

import { projectsData } from '@/lib/data';
import ProjectCard from '../project-card';
import SplitText from '@/components/ui/split-text';

function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 font-headline text-white">
            <SplitText animation="fadeInUp" delay={0.1} stagger={0.02} startOnVisible={true}>
                {children}
            </SplitText>
        </h2>
    );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-8 md:py-12 relative z-10">
      <SectionTitle>Project Gallery</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
