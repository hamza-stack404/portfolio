'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SkillRadar } from './SkillRadar';
import { ProficiencyBars } from './ProficiencyBars';
import { CertificationsGrid } from './CertificationsGrid';
import { ToolsDisplay } from './ToolsDisplay';

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-accent-50/50 via-white to-primary-50/30 dark:from-accent-950/30 dark:via-neutral-950 dark:to-primary-950/20 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-200/20 dark:bg-accent-800/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-200/20 dark:bg-primary-800/10 rounded-full blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, tools, and certifications
          </p>
        </motion.div>

        <div className="space-y-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SkillRadar />
            <ProficiencyBars />
          </div>

          <ToolsDisplay />
          <CertificationsGrid />
        </div>
      </Container>
    </section>
  );
}
