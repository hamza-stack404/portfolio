'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Info } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { TechnologyBadge } from './TechnologyBadge';
import Image from 'next/image';
import {
  usePrefersReducedMotion,
  getAnimationVariants,
} from '@/lib/reduced-motion';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    category: string;
    image?: string;
    liveUrl?: string;
    githubUrl?: string;
  };
  onViewDetails?: (projectId: string) => void;
}

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  return (
    <motion.div
      variants={getAnimationVariants(prefersReducedMotion)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden group hover:shadow-xl transition-shadow">
        {/* Project Image */}
        <div className="relative h-48 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-950/30 dark:to-accent-950/30 overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-6xl font-bold text-primary-200 dark:text-primary-900">
                {project.title.charAt(0)}
              </span>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 text-xs font-medium bg-white/90 dark:bg-neutral-950/90 text-neutral-900 dark:text-neutral-50 rounded-full backdrop-blur-sm">
              {project.category}
            </span>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-xl">{project.title}</CardTitle>
        </CardHeader>

        <CardContent className="flex-1 space-y-4">
          <p className="text-neutral-600 dark:text-neutral-400 line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <TechnologyBadge key={tech} technology={tech} variant="primary" />
            ))}
            {project.technologies.length > 4 && (
              <span className="text-xs text-neutral-500 dark:text-neutral-500 self-center">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex gap-2">
          {project.liveUrl && (
            <Button
              variant="default"
              size="sm"
              className="flex-1"
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </Button>
          )}
          {onViewDetails && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onViewDetails(project.id)}
            >
              <Info className="h-4 w-4" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
