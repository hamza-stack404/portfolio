'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter, Download } from 'lucide-react';
import dynamic from 'next/dynamic';
import { SplitText, GradientText } from '@/components/ui/TextAnimations';
import { MagneticButton, Magnetic } from '@/components/ui/MagneticButton';
import { RotatingText } from '@/components/ui/RotatingText';
import { useSmoothScroll } from '@/contexts/SmoothScrollContext';
import { useDeviceCapabilities } from '@/hooks/useViewport';

// Dynamic import for 3D scene (client-side only)
const Hero3DScene = dynamic(
  () => import('./Hero3DScene').then((mod) => ({ default: mod.Hero3DScene })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-32 h-32 rounded-full bg-primary/20 animate-pulse" />
      </div>
    ),
  }
);

const socialLinks = [
  { icon: Github, href: 'https://github.com/hamza-stack404', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/muhammad-hamza-stack', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/hamza-stack404', label: 'Twitter' },
];

const roles = [
  'Full-Stack Developer',
  'React Specialist',
  'Cloud Architect',
  'UI/UX Engineer',
  'Performance Optimizer',
];

const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Docker',
  'Kubernetes',
  'AWS',
  'PostgreSQL',
];

export function HeroSection() {
  const { scrollTo } = useSmoothScroll();
  const capabilities = useDeviceCapabilities();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-32 overflow-hidden">
      {/* Animated background gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[128px]"
        style={{
          background: 'radial-gradient(circle, rgba(4, 120, 87, 0.15) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-[128px]"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="max-w-2xl">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Available for new projects
              </span>
            </motion.div>

            {/* Main heading with split text animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="section-title hero-title text-balance">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  I turn complex
                </motion.div>
                <br />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  problems into
                </motion.div>
                <br />
                <div className="inline-flex items-center gap-3 flex-wrap">
                  <span className="gradient-text">
                    <RotatingText words={roles} interval={2500} />
                  </span>
                  <span className="text-neutral-400 dark:text-neutral-500">products</span>
                </div>
              </h1>
            </motion.div>

            {/* Subtitle with value prop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mb-10 space-y-3"
            >
              <p className="section-subtitle text-balance">
                Fast, beautiful web products built with React, TypeScript, and cloud infrastructure.
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span>📍 Karachi, Pakistan</span>
                <span className="hidden sm:inline text-neutral-300 dark:text-neutral-600">·</span>
                <span>🌍 Available for remote work</span>
                <span className="hidden sm:inline text-neutral-300 dark:text-neutral-600">·</span>
                <span>⚡ Obsessed with performance</span>
              </p>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Magnetic strength={0.2}>
                <button
                  onClick={() => scrollTo('#projects')}
                  className="btn btn-primary group"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Magnetic>
              <Magnetic strength={0.2}>
                <button
                  onClick={() => scrollTo('#contact')}
                  className="btn-secondary px-6 py-3 rounded-lg border-2 border-neutral-300 dark:border-neutral-700 hover:border-primary transition-colors"
                >
                  Let's Talk
                </button>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a
                  href="https://github.com/hamza-stack404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-6 py-3 rounded-lg border-2 border-neutral-300 dark:border-neutral-700 hover:border-primary transition-colors group inline-flex items-center gap-2"
                >
                  <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                  Resume
                </a>
              </Magnetic>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="flex items-center gap-4 mb-16"
            >
              <span className="text-sm text-neutral-500 dark:text-neutral-400">Find me on</span>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <Magnetic key={label} strength={0.3}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-full glass flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-primary hover:border-primary/30 transition-all"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  </Magnetic>
                ))}
              </div>
            </motion.div>

            {/* Tech stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                Trusted technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.8 + index * 0.05 }}
                    className="tag hover:scale-105 transition-transform cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column - 3D Scene */}
          {mounted && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block h-[600px] relative"
            >
              {capabilities.hasWebGL ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-3xl" />
                  <div className="relative h-full">
                    <Hero3DScene />
                  </div>
                </>
              ) : (
                <div className="h-full flex items-center justify-center glass rounded-3xl">
                  <p className="text-neutral-500">WebGL not supported on this device</p>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-neutral-300 dark:border-neutral-700 flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 rounded-full bg-neutral-400 dark:bg-neutral-600"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
