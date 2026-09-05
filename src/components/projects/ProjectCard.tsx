'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { Project } from '@/data/projects';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  onViewDetails: (project: Project) => void;
}

export function ProjectCard({ project, featured = false, onViewDetails }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse position for gradient border effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15 };
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);

  // Handle mouse move for 3D tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const x = e.clientX - centerX;
    const y = e.clientY - centerY;

    const rotateYValue = (x / rect.width) * 10;
    const rotateXValue = -(y / rect.height) * 10;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  // Orbiting tech icons
  const displayedTechs = project.technologies.slice(0, featured ? 5 : 4);
  const techCount = displayedTechs.length;

  return (
    <motion.article
      ref={cardRef}
      className="group relative card bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden cursor-pointer"
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => onViewDetails(project)}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Rotating gradient border */}
      <div className="absolute inset-0 rounded-inherit opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-inherit bg-gradient-to-r from-primary via-secondary to-accent opacity-50 blur-sm animate-rotate-border" />
      </div>

      {/* Featured badge */}
      {project.featured && (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', delay: 0.2 }}
          className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-gradient-to-r from-primary to-secondary backdrop-blur-sm text-white text-xs font-bold rounded-full shadow-lg"
        >
          ⭐ Featured
        </motion.div>
      )}

      {/* Project image with hover zoom and parallax */}
      <div className="relative h-64 -mx-6 -mt-6 mb-6 overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <motion.div
          animate={{
            scale: isHovered ? 1.15 : 1,
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative w-full h-full"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority={featured}
          />
        </motion.div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Hover action buttons with magnetic effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-end justify-center pb-6 gap-3"
        >
          {project.liveUrl && (
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.liveUrl, '_blank');
              }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-sm px-5 py-2.5 shadow-lg"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </motion.button>
          )}
          {project.githubUrl && (
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.githubUrl, '_blank');
              }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-sm px-5 py-2.5 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm shadow-lg"
            >
              <Github className="w-4 h-4" />
              Code
            </motion.button>
          )}
        </motion.div>

        {/* Orbiting tech icons on hover */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {displayedTechs.map((tech, index) => {
              const angle = (index / techCount) * Math.PI * 2;
              const radius = 80;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: `calc(50% + ${x}px)`,
                    y: `calc(50% + ${y}px)`,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: 'spring',
                  }}
                  className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md rounded-full text-xs font-semibold shadow-lg border border-primary/20"
                  style={{
                    animation: `orbit 8s linear infinite`,
                    animationDelay: `${-index * (8 / techCount)}s`,
                  }}
                >
                  {tech}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-4 relative z-10">
        {/* Title */}
        <div>
          <motion.h3
            className="text-xl font-bold mb-1 group-hover:text-primary transition-colors flex items-center"
            animate={{ x: isHovered ? 4 : 0 }}
          >
            {project.title}
            <motion.span
              animate={{
                opacity: isHovered ? 1 : 0,
                x: isHovered ? 0 : -10,
              }}
            >
              <ArrowUpRight className="inline w-5 h-5 ml-1" />
            </motion.span>
          </motion.h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">{project.subtitle}</p>
        </div>

        {/* Description */}
        <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Metrics with animated counters */}
        {project.metrics && project.metrics.length > 0 && (
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4 border-y border-neutral-100 dark:border-neutral-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {project.metrics.slice(0, featured ? 4 : 3).map((metric, index) => (
              <motion.div
                key={metric.label}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <div className="text-lg font-bold text-primary">
                  {isHovered ? <AnimatedCounter value={metric.value} /> : metric.value}
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, featured ? 6 : 4).map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 text-neutral-700 dark:text-neutral-300 hover:from-primary/10 hover:to-primary/5 hover:text-primary transition-all font-medium shadow-sm"
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > (featured ? 6 : 4) && (
            <span className="text-xs px-3 py-1.5 text-neutral-500 font-medium">
              +{project.technologies.length - (featured ? 6 : 4)}
            </span>
          )}
        </div>

        {/* Meta info */}
        <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400 pt-2">
          <span className="font-medium">{project.year}</span>
          {project.duration && (
            <>
              <span>•</span>
              <span>{project.duration}</span>
            </>
          )}
          {project.role && (
            <>
              <span>•</span>
              <span>{project.role}</span>
            </>
          )}
        </div>
      </div>

      {/* Animated shine effect on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
        animate={{
          background: isHovered
            ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
            : 'transparent',
        }}
        style={{
          backgroundSize: '200% 100%',
          animation: isHovered ? 'shine 2s infinite' : 'none',
        }}
      />

      <style jsx>{`
        @keyframes rotate-border {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes shine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(80px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
        }
      `}</style>
    </motion.article>
  );
}
