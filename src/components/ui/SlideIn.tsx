'use client';

import * as React from 'react';
import { motion, Variants } from 'framer-motion';
import { useOnScreen } from '@/hooks/useOnScreen';

interface SlideInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  distance?: number;
}

export function SlideIn({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  direction = 'left',
  distance = 100,
}: SlideInProps) {
  const [ref, isVisible] = useOnScreen<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const directionOffset = {
    left: { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
    up: { x: 0, y: -distance },
    down: { x: 0, y: distance },
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...directionOffset[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
