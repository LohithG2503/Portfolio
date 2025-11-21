'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from './ui/button';
import { ArrowUpRight, Github } from 'lucide-react';
import Link from 'next/link';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: {
    imageUrl: string;
    imageHint: string;
  };
  liveUrl?: string;
  sourceUrl?: string;
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "50px" }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
        >
          <Card className="group overflow-hidden cursor-pointer bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-indigo-900/40 backdrop-blur-xl border border-purple-500/30 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-0">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={project.image.imageHint}
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="text-sm text-white/80 mt-1 line-clamp-2">{project.description}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="max-w-3xl bg-gradient-to-br from-purple-900/95 via-blue-900/95 to-indigo-900/95 backdrop-blur-xl border border-purple-500/30 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white">{project.title}</DialogTitle>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-white/10 text-white border-white/20">{tech}</Badge>
            ))}
          </div>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
            <div className="relative h-64 w-full rounded-md overflow-hidden border border-white/20">
                <Image
                    src={project.image.imageUrl}
                    alt={project.title}
                    fill
                    className="object-contain"
                    data-ai-hint={project.image.imageHint}
                />
            </div>
            <div className="space-y-4">
                <DialogDescription className="text-base text-white/90">
                    {project.description}
                </DialogDescription>
                <div className="flex space-x-4">
                    {project.liveUrl && (
                        <Link href={project.liveUrl} target="_blank">
                            <Button>
                                Live Demo <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    )}
                    {project.sourceUrl && (
                        <Link href={project.sourceUrl} target="_blank">
                        <Button variant="secondary">
                            Source Code <Github className="ml-2 h-4 w-4" />
                        </Button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
