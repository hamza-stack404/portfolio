'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { SkillCategory } from './SkillCategory';

const skillCategories = [
  {
    name: 'Frontend Development',
    skills: [
      { name: 'React/Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'HTML/CSS', level: 98 },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express/Fastify', level: 85 },
      { name: 'GraphQL', level: 75 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    name: 'Database & Tools',
    skills: [
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 85 },
      { name: 'Redis', level: 75 },
      { name: 'Git', level: 95 },
    ],
  },
];

export function ProficiencyBars() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">
        Technical Proficiency
      </h3>

      {skillCategories.map((category, index) => (
        <SkillCategory
          key={category.name}
          category={category}
          index={index}
        />
      ))}
    </motion.div>
  );
}
