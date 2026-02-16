'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { SkillCategory } from './SkillCategory';

const skillCategories = [
  {
    name: 'Frontend Development',
    skills: [
      { name: 'React/Next.js', level: 80 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 89 },
      { name: 'Javascript', level: 80 },
      { name: 'HTML/CSS', level: 90 },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Python', level: 90 },
      { name: 'Docker', level: 80 },
      { name: 'FastAPI', level: 80 },
    ],
  },
  {
    name: 'Database & Tools',
    skills: [
      { name: 'PostgreSQL', level: 80 },
      { name: 'NeonDB', level: 80 },
      { name: 'Git', level: 95 },
      { name: 'VS Code', level: 95 },
      
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
