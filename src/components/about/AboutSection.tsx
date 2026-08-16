'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Coffee, Zap } from 'lucide-react';
import {
  usePrefersReducedMotion,
  getAnimationVariants,
} from '@/lib/reduced-motion';

const stats = [
  { value: '8+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '30+', label: 'Happy Clients' },
  { value: '10k+', label: 'Users Served' },
];

const experiences = [
  {
    period: '2022 - Present',
    role: 'Senior Full-Stack Developer',
    company: 'Freelance',
    description: 'Leading development of scalable web applications for international clients. Specializing in React, Node.js, and cloud-native architectures.',
  },
  {
    period: '2020 - 2022',
    role: 'Full-Stack Developer',
    company: 'Tech Startup',
    description: 'Built and maintained microservices serving 10k+ daily users. Implemented CI/CD pipelines and containerized deployments.',
  },
  {
    period: '2018 - 2020',
    role: 'Frontend Developer',
    company: 'Digital Agency',
    description: 'Developed responsive web applications for diverse clients. Introduced modern frameworks and best practices to the team.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export function AboutSection() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const itemVariants = getAnimationVariants(prefersReducedMotion);

  return (
    <section id="about" className="py-24 lg:py-32 bg-neutral-50/50 dark:bg-neutral-900/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.span variants={itemVariants} className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Me
            </motion.span>
            <motion.h2 variants={itemVariants} className="section-title mt-4 mb-6">
              Passionate about <span className="gradient-text">building</span> great software
            </motion.h2>
            <motion.div variants={itemVariants} className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
              <p>
                I&apos;m Muhammad Hamza, a Full-Stack Developer based in Karachi, Pakistan with over 8 years
                of experience crafting digital products that users love.
              </p>
              <p>
                My journey started with a curiosity for how things work on the web. Today, I specialize in
                building scalable applications using React, Next.js, TypeScript, and Node.js, with deep
                expertise in cloud-native architectures using Docker and Kubernetes.
              </p>
              <p>
                I believe great software is born at the intersection of technical excellence and genuine
                understanding of user needs. Every line of code I write aims to solve real problems.
              </p>
            </motion.div>

            {/* Quick facts */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <MapPin className="w-4 h-4 text-primary" />
                Karachi, Pakistan
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <Calendar className="w-4 h-4 text-primary" />
                8+ Years Experience
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <Coffee className="w-4 h-4 text-primary" />
                Coffee Enthusiast
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <Zap className="w-4 h-4 text-primary" />
                Open Source Contributor
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Stats + Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-10"
          >
            {/* Stats grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="card bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Experience timeline */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold mb-6">Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-neutral-200 dark:border-neutral-800">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-neutral-950" />
                    <span className="text-xs text-primary font-semibold">{exp.period}</span>
                    <h4 className="font-semibold mt-1">{exp.role}</h4>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">{exp.company}</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
