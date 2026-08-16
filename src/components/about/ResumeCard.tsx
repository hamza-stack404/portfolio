'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  usePrefersReducedMotion,
  getAnimationVariants,
} from '@/lib/reduced-motion';

export function ResumeCard() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const handleDownload = (format: 'pdf' | 'docx') => {
    // In a real implementation, this would trigger a download
    console.log(`Downloading resume in ${format} format`);
    // You would typically have these files in your public folder
    // window.open(`/resume.${format}`, '_blank');
  };

  return (
    <motion.div
      variants={getAnimationVariants(prefersReducedMotion)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="max-w-2xl mx-auto"
    >
      <Card className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-950/20 dark:to-accent-950/20 border-primary-200 dark:border-primary-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="w-12 h-12 rounded-lg bg-primary-600 dark:bg-primary-500 flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <span>Download My Resume</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-neutral-600 dark:text-neutral-400">
            Get a comprehensive overview of my experience, skills, and achievements.
            Available in multiple formats for your convenience.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={() => handleDownload('pdf')}
              className="flex-1 group"
              size="lg"
            >
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              Download PDF
            </Button>
            <Button
              onClick={() => handleDownload('docx')}
              variant="outline"
              className="flex-1 group"
              size="lg"
            >
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              Download DOCX
            </Button>
          </div>

          <p className="text-xs text-neutral-500 dark:text-neutral-500 text-center">
            Last updated: February 2026
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
