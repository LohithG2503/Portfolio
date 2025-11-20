import { projectsData } from '@/lib/data';
import ProjectCard from '../project-card';

function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-3xl font-bold text-center mb-12 font-headline text-primary">
            {children}
        </h2>
    );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12">
      <SectionTitle>Project Gallery</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
