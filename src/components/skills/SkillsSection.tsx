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
    <section id="skills" className="py-20 bg-white dark:bg-neutral-950">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, tools, and certifications
          </p>
        </motion.div>

        <div className="space-y-16">
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
