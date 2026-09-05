'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { BlogPreview } from './BlogPreview';
import { Button } from '@/components/ui/Button';
import { BookOpen } from 'lucide-react';
import {
  usePrefersReducedMotion,
  getAnimationVariants,
} from '@/lib/reduced-motion';
import { SplitText, GradientText, CharacterReveal } from '@/components/ui/TextAnimations';
import { ParallaxSection, ScrollReveal } from '@/components/ui/ParallaxComponents';

const recentPosts = [
  {
    id: '1',
    title: 'Building Scalable React Applications',
    excerpt: 'Learn best practices for building large-scale React applications that are maintainable and performant.',
    date: 'Feb 10, 2026',
    readTime: '5 min read',
    category: 'React',
    slug: 'building-scalable-react-applications',
  },
  {
    id: '2',
    title: 'Mastering TypeScript Generics',
    excerpt: 'A deep dive into TypeScript generics and how to use them effectively in your projects.',
    date: 'Feb 5, 2026',
    readTime: '8 min read',
    category: 'TypeScript',
    slug: 'mastering-typescript-generics',
  },
  {
    id: '3',
    title: "Next.js 15: What's New",
    excerpt: 'Exploring the latest features and improvements in Next.js 15 and how to leverage them.',
    date: 'Jan 28, 2026',
    readTime: '6 min read',
    category: 'Next.js',
    slug: 'nextjs-15-whats-new',
  },
];

export function BlogSection() {
  const prefersReducedMotion = usePrefersReducedMotion();
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-secondary-50/50 via-white to-primary-50/30 dark:from-secondary-950/30 dark:via-neutral-950 dark:to-primary-950/20 relative overflow-hidden">
      {/* Decorative gradient orbs with parallax */}
      <ParallaxSection speed={0.3} className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-10 w-96 h-96 bg-secondary-200/20 dark:bg-secondary-800/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-200/20 dark:bg-primary-800/10 rounded-full blur-3xl" />
      </ParallaxSection>

      <Container>
        <motion.div
          variants={getAnimationVariants(prefersReducedMotion)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <ScrollReveal direction="up">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 dark:bg-accent-950/30 mb-6"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6, type: 'spring' }}
            >
              <BookOpen className="w-8 h-8 text-accent-600 dark:text-accent-400" />
            </motion.div>
          </ScrollReveal>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <SplitText
              text="Latest"
              animation="fade-up"
              delay={0.2}
              staggerDelay={0.05}
              className="inline-block mr-3"
            />
            <GradientText text="Articles" animated className="inline-block" />
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto"
          >
            <CharacterReveal
              text="Thoughts, tutorials, and insights on web development"
              delay={0.5}
            />
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 relative z-10">
          {recentPosts.map((post, index) => (
            <ScrollReveal
              key={post.id}
              direction={index % 3 === 0 ? 'left' : index % 3 === 1 ? 'up' : 'right'}
              delay={index * 0.1}
            >
              <BlogPreview post={post} index={index} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.5}>
          <motion.div
            variants={getAnimationVariants(prefersReducedMotion)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center relative z-10"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-600 dark:border-primary-400 text-primary-700 dark:text-primary-300 hover:bg-primary-50 dark:hover:bg-primary-950/50 relative overflow-hidden group"
                onClick={() => {
                  window.open('https://github.com/hamza-stack404', '_blank', 'noopener,noreferrer');
                }}
              >
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">
                  <SplitText
                    text="View All on GitHub"
                    animation="fade-up"
                    staggerDelay={0.02}
                  />
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
