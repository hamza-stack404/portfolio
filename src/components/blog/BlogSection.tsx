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
    title: 'Next.js 15: What\'s New',
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
    <section className="py-20 bg-gradient-to-br from-secondary-50/50 via-white to-primary-50/30 dark:from-secondary-950/30 dark:via-neutral-950 dark:to-primary-950/20 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-secondary-200/20 dark:bg-secondary-800/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-200/20 dark:bg-primary-800/10 rounded-full blur-3xl" />

      <Container>
        <motion.div
          variants={getAnimationVariants(prefersReducedMotion)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12 relative z-10"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 dark:bg-accent-950/30 mb-4">
            <BookOpen className="w-8 h-8 text-accent-600 dark:text-accent-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Latest Articles
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 relative z-10">
          {recentPosts.map((post, index) => (
            <BlogPreview key={post.id} post={post} index={index} />
          ))}
        </div>

        <motion.div
          variants={getAnimationVariants(prefersReducedMotion)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center relative z-10"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary-600 dark:border-primary-400 text-primary-700 dark:text-primary-300 hover:bg-primary-50 dark:hover:bg-primary-950/50"
            onClick={() => {
              // Navigate to blog page
              console.log('Navigate to /blog');
            }}
          >
            View All Articles
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
