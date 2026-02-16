'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface TimelineEntry {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface TimelineItemProps {
  entry: TimelineEntry;
  index: number;
  isLast: boolean;
}

export function TimelineItem({ entry, index, isLast }: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex items-center ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-col md:gap-8`}
    >
      {/* Timeline dot */}
      <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-neutral-950 -translate-x-1/2 z-10" />

      {/* Content */}
      <div className={`w-full md:w-[calc(50%-2rem)] ${isEven ? 'md:text-right' : 'md:text-left'} ml-12 md:ml-0`}>
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6 space-y-4">
            <div>
              <h4 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
                {entry.title}
              </h4>
              <p className="text-primary-600 dark:text-primary-400 font-medium">
                {entry.company}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500">
                {entry.period}
              </p>
            </div>

            <p className="text-neutral-600 dark:text-neutral-400">
              {entry.description}
            </p>

            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div>
                  <h5 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                    Key Achievements
                  </h5>
                  <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                    {entry.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

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

      {/* Spacer for the other side on desktop */}
      <div className="hidden md:block w-[calc(50%-2rem)]" />
    </motion.div>
  );
}
