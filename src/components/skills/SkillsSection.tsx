'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Framer Motion', level: 85 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'GraphQL', level: 75 },
    ],
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', level: 88 },
      { name: 'Kubernetes', level: 82 },
      { name: 'AWS', level: 78 },
      { name: 'CI/CD', level: 85 },
    ],
  },
  {
    title: 'Tools & Practices',
    skills: [
      { name: 'Git', level: 92 },
      { name: 'Testing', level: 80 },
      { name: 'Agile/Scrum', level: 85 },
      { name: 'System Design', level: 82 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-neutral-500 dark:text-neutral-400">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-secondary"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay * 0.1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 lg:py-32">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16 text-center mx-auto"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Skills & Expertise</span>
          <h2 className="section-title mt-4 mb-6">
            Technologies I <span className="gradient-text">work with</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Continuously learning and adapting to build better solutions.
            Here&apos;s a snapshot of my technical toolkit.
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="card bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800"
            >
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={catIndex * 4 + skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional skills tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Also experienced with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Redis', 'WebSockets', 'OAuth', 'JWT', 'REST APIs', 'Prisma', 'Vercel', 'GitHub Actions', 'Nginx', 'Linux'].map((skill) => (
              <span key={skill} className="tag text-xs">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
