'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from './ui/button';
import { Github } from 'lucide-react';
import Link from 'next/link';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: {
    imageUrl: string;
    imageHint: string;
  };
  imageFit?: 'contain' | 'cover';
  liveUrl?: string;
  sourceUrl?: string;
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="h-full"
    >
      <Card className="group overflow-hidden bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-indigo-900/40 backdrop-blur-xl border border-purple-500/30 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
        <CardContent className="p-0 flex flex-col h-full">
          {/* Image Section */}
          <div className="relative h-48 w-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
            <Image
              src={project.image.imageUrl}
              alt={project.title}
              fill
              className={`transition-transform duration-500 ${project.imageFit === 'cover' ? 'object-cover group-hover:scale-110' : 'object-contain group-hover:scale-105'}`}
              data-ai-hint={project.image.imageHint}
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>

          {/* Content Section */}
          <div className="p-6 flex flex-col flex-grow space-y-4">
            {/* Title */}
            <h3 className="text-xl font-bold text-white leading-tight">
              {project.title}
            </h3>

            {/* Description - Now showing full text */}
            <p className="text-sm text-white/90 leading-relaxed flex-grow">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors text-xs px-2 py-1"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              {project.sourceUrl && (
                <Link href={project.sourceUrl} target="_blank" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 backdrop-blur-sm"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                </Link>
              )}
              {project.liveUrl && (
                <Link href={project.liveUrl} target="_blank" className="flex-1">
                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                  >
                    Live Demo
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
