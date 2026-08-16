'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { usePrefersReducedMotion } from '@/lib/reduced-motion';

/**
 * TimelineEntry interface represents a single career position in the timeline.
 */
interface TimelineEntry {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

/**
 * TimelineItemProps defines the props for individual timeline items.
 */
interface TimelineItemProps {
  entry: TimelineEntry; // The career position data
  index: number; // Position in the timeline (0-indexed, used for animations and layout)
  isLast?: boolean;
}

/**
 * TimelineItem Component
 * 
 * Renders a single career position with:
 * - Animated entrance from left/right based on position
 * - Expandable card showing role details
 * - Timeline dot on the connecting line
 * - Alternating left-right layout on desktop for visual balance
 * - Collapsible sections for achievements and technologies
 */
export function TimelineItem({ entry, index, isLast }: TimelineItemProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isExpanded, setIsExpanded] = React.useState(false);
  const isEven = index % 2 === 0;

  const initialX = prefersReducedMotion ? 0 : isEven ? -50 : 50;

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.5,
        delay: prefersReducedMotion ? 0 : index * 0.1,
      }}
      className={`relative flex items-center ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-col md:gap-8`}
    >
      {/* Timeline dot - positioned on the vertical line */}
      <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-neutral-950 -translate-x-1/2 z-10" />

      {/* Card content container - positioned to alternate sides on desktop */}
      <div className={`w-full md:w-[calc(50%-2rem)] ${isEven ? 'md:text-right' : 'md:text-left'} ml-12 md:ml-0`}>
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6 space-y-4">
            {/* Job header: title, company, and period */}
            <div>
              {/* Job title */}
              <h4 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
                {entry.title}
              </h4>
              {/* Company name */}
              <p className="text-primary-600 dark:text-primary-400 font-medium">
                {entry.company}
              </p>
              {/* Employment period */}
              <p className="text-sm text-neutral-500 dark:text-neutral-500">
                {entry.period}
              </p>
            </div>

            {/* Job description/summary */}
            <p className="text-neutral-600 dark:text-neutral-400">
              {entry.description}
            </p>

            {/* Expandable section: achievements and technologies */}
            {/* Only renders when isExpanded is true */}
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                className="space-y-4"
              >
                {/* Key Achievements section */}
                <div>
                  <h5 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                    Key Achievements
                  </h5>
                  <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                    {entry.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        {/* Bullet point */}
                        <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies section - displayed as badge pills */}
                <div>
                  <h5 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                    Technologies
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {entry.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-950/30 text-primary-700 dark:text-primary-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Expand/Collapse toggle button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full"
            >
              {isExpanded ? (
                <>
                  Show Less <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Show More <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Spacer element for desktop layout - creates space on opposite side of timeline */}
      {/* Ensures proper alignment when items alternate left-right */}
      <div className="hidden md:block w-[calc(50%-2rem)]" />
    </motion.div>
  );
}
