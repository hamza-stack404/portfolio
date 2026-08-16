'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { TimelineItem } from './TimelineItem';
import {
  usePrefersReducedMotion,
  getAnimationVariants,
} from '@/lib/reduced-motion';

/**
 * TimelineEntry interface defines the structure for each career position
 * displayed in the career journey timeline.
 */
interface TimelineEntry {
  id: string; // Unique identifier for the timeline entry
  title: string; // Job title (e.g., 'Senior Full-Stack Developer')
  company: string; // Company or organization name
  period: string; // Employment period (e.g., '2022 - Present')
  description: string; // Brief description of the role
  achievements: string[]; // Array of key accomplishments
  technologies: string[]; // Array of technologies used in this role
}

/**
 * Timeline data containing career history entries.
 * Each entry represents a position held, ordered from most recent to oldest.
 * This data drives the timeline visualization and expandable career cards.
 */
const timelineData: TimelineEntry[] = [
  {
    id: '1',
    title: 'Senior Full-Stack Developer',
    company: 'Tech Company Inc.',
    period: '2022 - Present',
    description: 'Leading development of enterprise-scale web applications',
    achievements: [
      'Architected and implemented microservices architecture serving 1M+ users',
      'Reduced application load time by 60% through optimization',
      'Mentored team of 5 junior developers',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    id: '2',
    title: 'Full-Stack Developer',
    company: 'Startup Solutions',
    period: '2020 - 2022',
    description: 'Built and maintained multiple client-facing applications',
    achievements: [
      'Developed 10+ production applications from scratch',
      'Implemented CI/CD pipeline reducing deployment time by 80%',
      'Collaborated with design team to improve UX metrics by 40%',
    ],
    technologies: ['React', 'TypeScript', 'Express', 'MongoDB', 'Docker'],
  },
  {
    id: '3',
    title: 'Frontend Developer',
    company: 'Digital Agency',
    period: '2019 - 2020',
    description: 'Created responsive and accessible web interfaces',
    achievements: [
      'Built 20+ responsive websites with 100% accessibility compliance',
      'Improved page speed scores to 95+ on Lighthouse',
      'Established component library used across all projects',
    ],
    technologies: ['React', 'JavaScript', 'SCSS', 'Webpack'],
  },
];

/**
 * CareerTimeline Component
 * 
 * Displays a vertical timeline of career positions with:
 * - Animated entrance and view-triggered animations
 * - A vertical line connecting all timeline items
 * - Responsive design (stacked on mobile, alternating left-right on desktop)
 * - Expandable cards showing achievements and technologies for each role
 */
export function CareerTimeline() {
  const prefersReducedMotion = usePrefersReducedMotion();
  return (
    <motion.div
      variants={getAnimationVariants(prefersReducedMotion)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="space-y-6"
    >
      {/* Section heading */}
      <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 text-center">
        Career Journey
      </h3>

      {/* Container for timeline with connecting line */}
      <div className="relative">
        {/* Vertical line connecting all timeline items */}
        {/* Position: left side on mobile (md:left-1/2), centered on desktop */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-800 -translate-x-1/2" />

        {/* Timeline items container - iterates through career entries */}
        <div className="space-y-12">
          {timelineData.map((entry, index) => (
            <TimelineItem
              key={entry.id}
              entry={entry} // Career position data
              index={index} // Used for staggered animations and alternating layout
              isLast={index === timelineData.length - 1} // Flag for last item (no line needed after)
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
