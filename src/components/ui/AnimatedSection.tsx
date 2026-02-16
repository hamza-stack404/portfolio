'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { useOnScreen } from '@/hooks/useOnScreen';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
}: AnimatedSectionProps) {
  const [ref, isVisible] = useOnScreen<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
