'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { BlogPreview } from './BlogPreview';
import { Button } from '@/components/ui/Button';
import { BookOpen } from 'lucide-react';

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
  return (
    <section className="py-20 bg-white dark:bg-neutral-950">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 dark:bg-accent-950/30 mb-4">
            <BookOpen className="w-8 h-8 text-accent-600 dark:text-accent-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Latest Articles
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {recentPosts.map((post, index) => (
            <BlogPreview key={post.id} post={post} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button
            size="lg"
            variant="outline"
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
