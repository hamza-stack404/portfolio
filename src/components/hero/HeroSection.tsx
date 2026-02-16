'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { AnimatedText } from './AnimatedText';
import { ParticleBackground } from './ParticleBackground';
import { ScrollIndicator } from '../ui/ScrollIndicator';
import { Button } from '../ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function HeroSection() {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/30 dark:from-primary-950 dark:via-primary-900 dark:to-neutral-950"
    >
      {!prefersReducedMotion && <ParticleBackground />}

      {/* Animated gradient orbs */}
      {!prefersReducedMotion && (
        <>
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/30 dark:bg-primary-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-400/30 dark:bg-secondary-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-400/20 dark:bg-accent-600/10 rounded-full blur-3xl animate-pulse" />
        </>
      )}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium text-sm border border-primary-200 dark:border-primary-800">
              <Sparkles className="w-4 h-4" />
              Welcome to my portfolio
            </span>
          </motion.div>

          <AnimatedText
            text="Hi, I'm Your Name"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
            delay={0.2}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold gradient-text mb-4">
              Full-Stack Developer & Creative Problem Solver
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Crafting exceptional digital experiences with modern technologies.
            Passionate about building scalable applications that make a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="group bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 shadow-glow"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-600 dark:border-primary-400 text-primary-700 dark:text-primary-300 hover:bg-primary-50 dark:hover:bg-primary-950/50"
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Tech stack badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-16 flex flex-wrap justify-center gap-3"
          >
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-neutral-200 dark:border-neutral-700 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:border-primary-400 dark:hover:border-primary-600 transition-colors"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <ScrollIndicator targetId="about" />
    </section>
  );
}
