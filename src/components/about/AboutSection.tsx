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
      className="py-20 bg-white dark:bg-neutral-950"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            About Me
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Get to know more about my background, skills, and experience
          </p>
        </motion.div>

        <div className="space-y-16">
          <ProfessionalBio />
          <SkillsVisualization />
          <CareerTimeline />
          <ResumeCard />
        </div>
      </Container>
    </section>
  );
}
