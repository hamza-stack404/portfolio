'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { TechnologyBadge } from './TechnologyBadge';
import { ProjectCaseStudy } from './ProjectCaseStudy';

interface ProjectModalProps {
  project: {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    category: string;
    image?: string;
    liveUrl?: string;
    githubUrl?: string;
    longDescription?: string;
    problem?: string;
    solution?: string;
    impact?: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 dark:bg-neutral-800/90 hover:bg-white dark:hover:bg-neutral-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Content */}
              <div className="max-h-[80vh] overflow-y-auto">
                {/* Header Image */}
                {project.image && (
                  <div className="relative h-64 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-950/30 dark:to-accent-950/30">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="p-8 space-y-6">
                  {/* Title and Category */}
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-950/30 text-primary-700 dark:text-primary-300 rounded-full mb-3">
                      {project.category}
                    </span>
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">
                      {project.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-neutral-600 dark:text-neutral-400">
                    {project.longDescription || project.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-3">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <TechnologyBadge key={tech} technology={tech} variant="primary" />
                      ))}
                    </div>
                  </div>

                  {/* Case Study */}
                  {(project.problem || project.solution || project.impact) && (
                    <ProjectCaseStudy
                      problem={project.problem}
                      solution={project.solution}
                      impact={project.impact}
                    />
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    {project.liveUrl && (
                      <Button
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        className="flex-1"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        className="flex-1"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Source Code
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
