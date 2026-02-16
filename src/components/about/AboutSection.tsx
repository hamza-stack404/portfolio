'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { ProfessionalBio } from './ProfessionalBio';
import { SkillsVisualization } from './SkillsVisualization';
import { CareerTimeline } from './CareerTimeline';
import { ResumeCard } from './ResumeCard';

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-primary-50/50 via-white to-secondary-50/30 dark:from-primary-950/30 dark:via-neutral-950 dark:to-secondary-950/20 relative overflow-hidden"
    >
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 dark:bg-primary-800/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200/20 dark:bg-secondary-800/10 rounded-full blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Get to know more about my background, skills, and experience
          </p>
        </motion.div>

        <div className="space-y-16 relative z-10">
          <ProfessionalBio />
          <SkillsVisualization />
          <CareerTimeline />
          <ResumeCard />
        </div>
      </Container>
    </section>
  );
}
