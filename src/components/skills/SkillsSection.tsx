'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  usePrefersReducedMotion,
  getAnimationVariants,
} from '@/lib/reduced-motion';
import { SplitText, GradientText } from '@/components/ui/TextAnimations';
import { ScrollReveal, ParallaxSection } from '@/components/ui/ParallaxComponents';

// Tech grid — clean chip layout, no subjective percentages
const skillCategories = [
  {
    title: 'Frontend',
    icon: '🖥️',
    color: 'from-blue-500/10 to-cyan-500/10 border-blue-500/20',
    skills: [
      'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
      'Framer Motion', 'GSAP', 'Three.js', 'HTML5 / CSS3',
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: 'from-emerald-500/10 to-teal-500/10 border-emerald-500/20',
    skills: [
      'Node.js', 'Express', 'PostgreSQL', 'MongoDB',
      'Redis', 'GraphQL', 'REST APIs', 'WebSockets',
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: '☁️',
    color: 'from-orange-500/10 to-amber-500/10 border-orange-500/20',
    skills: [
      'Docker', 'Kubernetes', 'AWS', 'CI/CD',
      'GitHub Actions', 'Nginx', 'Vercel', 'Linux',
    ],
  },
  {
    title: 'Tools & Practices',
    icon: '🛠️',
    color: 'from-purple-500/10 to-violet-500/10 border-purple-500/20',
    skills: [
      'Git', 'Prisma', 'OAuth / JWT', 'Testing',
      'System Design', 'Agile/Scrum', 'Figma', 'VS Code',
    ],
  },
];

const currentlyLearning = ['Rust', 'Go', 'Web3 / Solidity', 'AI/ML Integration'];

export function SkillsSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="skills" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <ParallaxSection speed={0.5} className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </ParallaxSection>

      <div className="container">
        {/* Section header */}
        <motion.div
          variants={getAnimationVariants(prefersReducedMotion)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-2xl mb-16 text-center mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-primary font-semibold text-sm uppercase tracking-wider inline-block"
          >
            Skills &amp; Expertise
          </motion.span>

          <h2 className="section-title mt-4 mb-6">
            <SplitText
              text="Technologies I"
              animation="fade-up"
              delay={0.2}
              staggerDelay={0.05}
            />
            {' '}
            <GradientText text="work with" animated />
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="section-subtitle mx-auto"
          >
            Continuously learning and adapting to build better solutions.
            Here&apos;s a snapshot of my technical toolkit.
          </motion.p>
        </motion.div>

        {/* Skills tech grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal
              key={category.title}
              direction={categoryIndex % 2 === 0 ? 'left' : 'right'}
              delay={categoryIndex * 0.1}
            >
              <motion.div
                className={`rounded-2xl border bg-gradient-to-br ${category.color} p-6 relative overflow-hidden group`}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                <div className="relative z-10">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-2xl" aria-hidden="true">{category.icon}</span>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                      {category.title}
                    </h3>
                  </div>

                  {/* Tech chips grid */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: prefersReducedMotion ? 0 : categoryIndex * 0.05 + skillIndex * 0.04,
                          type: 'spring',
                          stiffness: 400,
                        }}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/70 dark:bg-neutral-900/70 border border-neutral-200/60 dark:border-neutral-700/60 text-neutral-700 dark:text-neutral-300 hover:border-primary/40 hover:text-primary dark:hover:text-primary-400 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Currently learning */}
        <ScrollReveal direction="up" delay={0.4}>
          <motion.div
            className="text-center"
            variants={getAnimationVariants(prefersReducedMotion, 0.3)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 mb-4 uppercase tracking-wider">
              Currently Learning
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {currentlyLearning.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.08,
                    type: 'spring',
                    stiffness: 500,
                  }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 dark:bg-primary/20 border border-primary/30 text-primary-700 dark:text-primary-300 cursor-default"
                >
                  🌱 {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
