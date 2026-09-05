'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Calendar, Clock, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Project } from '@/data/projects';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentSection(0);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  // Handle horizontal scroll
  const scrollToSection = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const targetX = container.clientWidth * index;
      container.scrollTo({ left: targetX, behavior: 'smooth' });
      setCurrentSection(index);
    }
  };

  // Handle scroll snap detection
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const sectionWidth = container.clientWidth;
      const newSection = Math.round(scrollLeft / sectionWidth);
      setCurrentSection(newSection);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  if (!project) return null;

  const sections = [
    { id: 'hero', title: 'Overview' },
    ...(project.problem ? [{ id: 'problem', title: 'Challenge' }] : []),
    ...(project.solution ? [{ id: 'solution', title: 'Solution' }] : []),
    ...(project.results ? [{ id: 'results', title: 'Results' }] : []),
    { id: 'tech', title: 'Tech Stack' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with ripple dissolve effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100]"
          />

          {/* Modal with page curl transition */}
          <div className="fixed inset-0 z-[101] overflow-hidden">
            <div className="min-h-full flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, rotateY: -15, scale: 0.9 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                exit={{ opacity: 0, rotateY: 15, scale: 0.9 }}
                transition={{ duration: 0.5, type: 'spring', damping: 25 }}
                className="relative w-full max-w-6xl h-[85vh] bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
                style={{ perspective: '1500px' }}
              >
                {/* Close button */}
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm flex items-center justify-center hover:bg-white dark:hover:bg-neutral-800 transition-colors shadow-lg"
                >
                  <X className="w-5 h-5" />
                </motion.button>

                {/* Navigation dots */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                  {sections.map((section, index) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(index)}
                      className="group relative"
                    >
                      <motion.div
                        className={`w-2 h-2 rounded-full transition-all ${
                          currentSection === index
                            ? 'bg-primary w-8'
                            : 'bg-neutral-300 dark:bg-neutral-700 hover:bg-primary/50'
                        }`}
                        layoutId={`section-${index}`}
                      />
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white px-2 py-1 rounded">
                        {section.title}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Horizontal scroll container */}
                <div
                  ref={scrollContainerRef}
                  className="h-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory hide-scrollbar"
                  style={{ scrollbarWidth: 'none' }}
                >
                  <div className="flex h-full" style={{ width: `${sections.length * 100}%` }}>
                    {/* Section 1: Hero */}
                    <div className="w-full h-full flex-shrink-0 snap-center">
                      <div className="relative h-full flex flex-col">
                        {/* Hero Image/Video */}
                        <div className="relative h-1/2 bg-gradient-to-br from-primary/10 to-accent/10">
                          {project.video ? (
                            <video
                              src={project.video}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                          {/* Title overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-8">
                            <motion.h2
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.2 }}
                              className="text-4xl lg:text-5xl font-bold text-white mb-2"
                            >
                              {project.title}
                            </motion.h2>
                            <motion.p
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.3 }}
                              className="text-xl text-white/90"
                            >
                              {project.subtitle}
                            </motion.p>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-8 space-y-6">
                          {/* Meta info */}
                          <div className="flex flex-wrap gap-6 text-sm">
                            {project.year && (
                              <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                                <Calendar className="w-4 h-4" />
                                <span>{project.year}</span>
                              </div>
                            )}
                            {project.duration && (
                              <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                                <Clock className="w-4 h-4" />
                                <span>{project.duration}</span>
                              </div>
                            )}
                            {project.role && (
                              <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                                <Users className="w-4 h-4" />
                                <span>{project.role}</span>
                              </div>
                            )}
                          </div>

                          {/* Metrics */}
                          {project.metrics && project.metrics.length > 0 && (
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                              className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/10"
                            >
                              {project.metrics.map((metric, index) => (
                                <motion.div
                                  key={metric.label}
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                                  className="text-center"
                                >
                                  <div className="text-3xl font-bold text-primary mb-1">
                                    <AnimatedCounter value={metric.value} />
                                  </div>
                                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                                    {metric.label}
                                  </div>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}

                          {/* Description */}
                          {project.longDescription && (
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6 }}
                            >
                              <h3 className="text-xl font-bold mb-3">Overview</h3>
                              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-lg">
                                {project.longDescription}
                              </p>
                            </motion.div>
                          )}

                          {/* Action buttons */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex gap-4 pt-4"
                          >
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary flex-1 justify-center"
                              >
                                <ExternalLink className="w-4 h-4" />
                                View Live Project
                              </a>
                            )}
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary flex-1 justify-center px-6 py-3 rounded-lg border-2 border-neutral-300 dark:border-neutral-700 hover:border-primary transition-colors inline-flex items-center gap-2"
                              >
                                <Github className="w-4 h-4" />
                                View Source Code
                              </a>
                            )}
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Problem (if exists) */}
                    {project.problem && (
                      <div className="w-full h-full flex-shrink-0 snap-center flex items-center justify-center p-8">
                        <motion.div
                          initial={{ opacity: 0, x: 100 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          className="max-w-3xl space-y-6"
                        >
                          <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-500/10 rounded-full">
                            <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-sm font-semibold text-red-600 dark:text-red-400 uppercase">
                              The Challenge
                            </span>
                          </div>
                          <h3 className="text-4xl font-bold">The Problem</h3>
                          <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
                            {project.problem}
                          </p>
                        </motion.div>
                      </div>
                    )}

                    {/* Section 3: Solution (if exists) */}
                    {project.solution && (
                      <div className="w-full h-full flex-shrink-0 snap-center flex items-center justify-center p-8">
                        <motion.div
                          initial={{ opacity: 0, x: 100 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          className="max-w-3xl space-y-6"
                        >
                          <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/10 rounded-full">
                            <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase">
                              The Approach
                            </span>
                          </div>
                          <h3 className="text-4xl font-bold">The Solution</h3>
                          <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
                            {project.solution}
                          </p>
                        </motion.div>
                      </div>
                    )}

                    {/* Section 4: Results (if exists) */}
                    {project.results && (
                      <div className="w-full h-full flex-shrink-0 snap-center flex items-center justify-center p-8">
                        <motion.div
                          initial={{ opacity: 0, x: 100 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          className="max-w-3xl space-y-6"
                        >
                          <div className="inline-flex items-center gap-3 px-4 py-2 bg-green-500/10 rounded-full">
                            <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-sm font-semibold text-green-600 dark:text-green-400 uppercase">
                              The Impact
                            </span>
                          </div>
                          <h3 className="text-4xl font-bold">The Results</h3>
                          <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
                            {project.results}
                          </p>
                        </motion.div>
                      </div>
                    )}

                    {/* Section 5: Tech Stack */}
                    <div className="w-full h-full flex-shrink-0 snap-center flex items-center justify-center p-8">
                      <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl space-y-8 w-full"
                      >
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 rounded-full">
                          <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                          <span className="text-sm font-semibold text-primary uppercase">
                            Technologies
                          </span>
                        </div>
                        <h3 className="text-4xl font-bold">Tech Stack</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {project.technologies.map((tech, index) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.05 }}
                              whileHover={{ scale: 1.05, y: -5 }}
                              className="p-4 rounded-xl bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-700 text-center font-medium hover:border-primary transition-colors"
                            >
                              {tech}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Navigation arrows */}
                {currentSection > 0 && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => scrollToSection(currentSection - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm flex items-center justify-center hover:bg-white dark:hover:bg-neutral-800 transition-colors shadow-lg z-10"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </motion.button>
                )}

                {currentSection < sections.length - 1 && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => scrollToSection(currentSection + 1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm flex items-center justify-center hover:bg-white dark:hover:bg-neutral-800 transition-colors shadow-lg z-10"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.button>
                )}
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
