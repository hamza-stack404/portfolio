'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategoryProps {
  category: {
    name: string;
    skills: Skill[];
  };
  index: number;
}

export function SkillCategory({ category, index }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="space-y-4"
    >
      <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
        {category.name}
      </h4>

      <div className="space-y-3">
        {category.skills.map((skill, skillIndex) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
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
                transition={{
                  duration: 1,
                  delay: index * 0.1 + skillIndex * 0.05,
                  ease: 'easeOut',
                }}
                className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
