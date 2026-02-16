'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { AnimatedText } from './AnimatedText';
import { ParticleBackground } from './ParticleBackground';
import { ScrollIndicator } from '../ui/ScrollIndicator';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-primary-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950"
    >
      {!prefersReducedMotion && <ParticleBackground />}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
              Welcome to my portfolio
            </p>
          </motion.div>

          <AnimatedText
            text="Hi, I'm Your Name"
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-neutral-900 dark:text-neutral-50 mb-6"
            delay={0.2}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto"
          >
            Full-Stack Developer crafting exceptional digital experiences with modern technologies
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="group">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </div>

      <ScrollIndicator targetId="about" />
    </section>
  );
}
