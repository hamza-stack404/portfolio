'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Coffee, Zap } from 'lucide-react';
import {
  usePrefersReducedMotion,
  getAnimationVariants,
} from '@/lib/reduced-motion';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { SplitText, GradientText, CharacterReveal } from '@/components/ui/TextAnimations';
import { ParallaxSection, ScrollReveal, ScrollScale } from '@/components/ui/ParallaxComponents';

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '15+', label: 'Projects Completed' },
  { value: '5+', label: 'Open Source Repos' },
  { value: '1k+', label: 'GitHub Commits' },
];

const experiences = [
  {
    period: '2025 - 2026',
    role: 'Frontend Developer',
    company: 'Self-Employed',
    description: 'Leading development of scalable web applications for international clients. Specializing in React, Node.js, and cloud-native architectures.',
  },
  {
    period: '2024 - 2025',
    role: 'AI Agent SDK',
    company: 'Self-Employed',
    description: 'Built and maintained microservices serving 10k+ daily users. Implemented CI/CD pipelines and containerized deployments.',
  },
  {
    period: '2024 - 2024',
    role: 'Python Developer',
    company: 'Self-Employed',
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
  const [hoveredParagraph, setHoveredParagraph] = React.useState<number | null>(null);

  return (
    <section id="about" className="py-24 lg:py-32 bg-neutral-50/50 dark:bg-neutral-900/30 relative overflow-hidden">
      {/* Background decoration with parallax */}
      <ParallaxSection speed={0.3} className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </ParallaxSection>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.span
              variants={itemVariants}
              className="text-primary font-semibold text-sm uppercase tracking-wider inline-block"
            >
              <CharacterReveal text="About Me" delay={0} />
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="section-title mt-4 mb-6"
            >
              <SplitText
                text="Passionate about"
                animation="fade-up"
                delay={0.2}
                staggerDelay={0.05}
              />
              {' '}
              <GradientText text="building" animated />
              {' '}
              <SplitText
                text="great software"
                animation="fade-up"
                delay={0.6}
                staggerDelay={0.05}
              />
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-neutral-600 dark:text-neutral-300 leading-relaxed"
            >
              {[
                "I'm Muhammad Hamza, a Full-Stack Developer based in Karachi, Pakistan with 2 years of experience crafting digital products that users love.",
                "My journey started with a curiosity for how things work on the web. Today, I specialize in building scalable applications using React, Next.js, TypeScript, and Node.js, with deep expertise in cloud-native architectures using Docker and Kubernetes.",
                "I believe great software is born at the intersection of technical excellence and genuine understanding of user needs. Every line of code I write aims to solve real problems."
              ].map((text, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                  <motion.p
                    className="relative p-4 rounded-lg transition-all duration-300"
                    onHoverStart={() => setHoveredParagraph(index)}
                    onHoverEnd={() => setHoveredParagraph(null)}
                    animate={{
                      backgroundColor: hoveredParagraph === index
                        ? 'rgba(16, 185, 129, 0.05)'
                        : 'transparent',
                      x: hoveredParagraph === index ? 4 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {text}
                    {hoveredParagraph === index && (
                      <motion.div
                        layoutId="paragraph-highlight"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </motion.p>
                </ScrollReveal>
              ))}
            </motion.div>

            {/* Quick facts */}
            <ScrollReveal direction="up" delay={0.3}>
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-6 mt-8"
              >
                {[
                  { icon: MapPin, text: 'Karachi, Pakistan' },
                  { icon: Calendar, text: '2 Years Experience' },
                  { icon: Coffee, text: 'Coffee Enthusiast' },
                  { icon: Zap, text: 'Open Source Contributor' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                    whileHover={{ scale: 1.05, x: 4 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <item.icon className="w-4 h-4 text-primary" />
                    {item.text}
                  </motion.div>
                ))}
              </motion.div>
            </ScrollReveal>
          </motion.div>

          {/* Right column - Stats + Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-10"
          >
            {/* Stats grid with scroll scale effect */}
            <ScrollScale minScale={0.9} maxScale={1}>
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-4"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="card bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 text-center relative overflow-hidden group"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      <motion.div
                        className="text-3xl font-bold mb-1"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, type: 'spring' }}
                      >
                        <GradientText text={stat.value} animated />
                      </motion.div>
                      <div className="text-sm text-neutral-500 dark:text-neutral-400">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </ScrollScale>

            {/* Experience timeline with enhanced animations */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold mb-6">
                <SplitText
                  text="Experience"
                  animation="fade-up"
                  staggerDelay={0.05}
                />
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <ScrollReveal key={index} direction="right" delay={index * 0.1}>
                    <motion.div
                      className="relative pl-6 border-l-2 border-neutral-200 dark:border-neutral-800 group"
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <motion.div
                        className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-neutral-950"
                        whileHover={{ scale: 1.5 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      />

                      <span className="text-xs text-primary font-semibold">{exp.period}</span>
                      <h4 className="font-semibold mt-1 group-hover:text-primary transition-colors">
                        {exp.role}
                      </h4>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">{exp.company}</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                        {exp.description}
                      </p>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
