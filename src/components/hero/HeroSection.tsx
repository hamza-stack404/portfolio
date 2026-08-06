'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/hamza-stack404', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/hamza', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/hamza-stack404', label: 'Twitter' },
];

const techStack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Docker', 'Kubernetes', 'AWS', 'PostgreSQL'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export function HeroSection() {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-secondary/[0.03] dark:from-primary/[0.08] dark:to-secondary/[0.08]" />
      
      {/* Animated orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 dark:bg-primary/30 rounded-full blur-[128px]"
        animate={prefersReducedMotion ? {} : { x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 dark:bg-secondary/30 rounded-full blur-[128px]"
        animate={prefersReducedMotion ? {} : { x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Available for new projects
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1 variants={itemVariants} className="section-title mb-6 text-balance">
            I build{' '}
            <span className="gradient-text">exceptional</span>
            <br />
            digital experiences
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="section-subtitle text-balance mb-10">
            Full-Stack Developer with 8+ years of experience crafting scalable web applications.
            I transform complex problems into elegant, user-friendly solutions using modern technologies.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
            <a href="#projects" className="btn-primary">
              View My Work
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn-secondary">
              Let&apos;s Talk
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-16">
            <span className="text-sm text-neutral-500 dark:text-neutral-400">Find me on</span>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-primary hover:border-primary/30 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Tech stack */}
          <motion.div variants={itemVariants}>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Trusted technologies</p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-neutral-300 dark:border-neutral-700 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-neutral-400 dark:bg-neutral-600" />
        </div>
      </motion.div>
    </section>
  );
}
