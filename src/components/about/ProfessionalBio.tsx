'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';
import { Code2, Rocket, Users, Zap } from 'lucide-react';
import {
  usePrefersReducedMotion,
  getAnimationVariants,
} from '@/lib/reduced-motion';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and well-documented code',
  },
  {
    icon: Rocket,
    title: 'Fast Delivery',
    description: 'Delivering high-quality solutions on time and within scope',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Collaborating effectively with cross-functional teams',
  },
  {
    icon: Zap,
    title: 'Problem Solver',
    description: 'Finding creative solutions to complex technical challenges',
  },
];

export function ProfessionalBio() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      variants={getAnimationVariants(prefersReducedMotion)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="grid md:grid-cols-2 gap-8"
    >
      {/* Bio Text */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">
          Professional Background
        </h3>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            I&apos;m a passionate full-stack developer with 2 years of experience building
            modern web applications. My journey in software development started with a
            curiosity about how things work, which evolved into a career dedicated to
            creating exceptional digital experiences.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            I specialize in React, Next.js, TypeScript, and Node.js, with a strong focus
            on performance optimization, accessibility, and user experience. I believe in
            writing clean, maintainable code and following best practices to deliver
            solutions that stand the test of time.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            When I&apos;m not coding, you&apos;ll find me contributing to open-source projects,
            writing technical articles, or exploring new technologies to stay at the
            forefront of web development.
          </p>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-2 gap-4">
        {highlights.map((highlight, index) => (
          <motion.div
            key={highlight.title}
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.3,
              delay: prefersReducedMotion ? 0 : index * 0.1,
            }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-950/30 flex items-center justify-center">
                  <highlight.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                  {highlight.title}
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
