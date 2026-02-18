'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'Next.js', level: 90, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Language' },
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'Tailwind CSS', level: 95, category: 'Styling' },
  { name: 'Neon db', level: 80, category: 'Database' },
];

export function SkillsVisualization() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 text-center">
        Technical Skills
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="space-y-2"
          >
            <div className="flex justify-between items-center">
              <span className="font-medium text-neutral-900 dark:text-neutral-50">
                {skill.name}
              </span>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                {skill.level}%
              </span>
            </div>
            <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.05, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
              />
            </div>
            <span className="text-xs text-neutral-500 dark:text-neutral-500">
              {skill.category}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
