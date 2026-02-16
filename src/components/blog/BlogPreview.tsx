'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

interface BlogPreviewProps {
  post: BlogPost;
  index: number;
}

export function BlogPreview({ post, index }: BlogPreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow group">
        <CardContent className="p-6 space-y-4">
          {/* Category Badge */}
          <span className="inline-block px-3 py-1 text-xs font-medium bg-accent-100 dark:bg-accent-950/30 text-accent-700 dark:text-accent-300 rounded-full">
            {post.category}
          </span>

          {/* Title */}
          <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-neutral-600 dark:text-neutral-400 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-500">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Read More Button */}
          <Button
            variant="ghost"
            className="w-full group/btn"
            onClick={() => {
              // Navigate to blog post
              console.log(`Navigate to /blog/${post.slug}`);
            }}
          >
            Read More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
