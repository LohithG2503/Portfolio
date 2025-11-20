'use client';

import Image from 'next/image';
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
        <Card className="group overflow-hidden cursor-pointer bg-background/60 backdrop-blur-sm border-black/5 dark:border-white/10 shadow-sm hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms`}}>
          <CardContent className="p-0">
            <div className="relative h-48 w-full">
              <Image
                src={project.image.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={project.image.imageHint}
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{project.description}</p>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
            <div className="relative h-64 w-full rounded-md overflow-hidden">
                <Image
                    src={project.image.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                    data-ai-hint={project.image.imageHint}
                />
            </div>
            <div className="space-y-4">
                <DialogDescription className="text-base text-foreground">
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
