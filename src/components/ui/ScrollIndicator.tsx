'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { smoothScrollTo } from '@/lib/scroll';

interface ScrollIndicatorProps {
  targetId?: string;
}

export function ScrollIndicator({ targetId = 'about' }: ScrollIndicatorProps) {
  const scrollProgress = useScrollProgress();
  const isVisible = scrollProgress < 10;

  const handleClick = () => {
    if (targetId) {
      smoothScrollTo(targetId);
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
    >
      <button
        onClick={handleClick}
        className="flex flex-col items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        aria-label="Scroll to next section"
      >
        <span className="text-sm font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </button>
    </motion.div>
  );
}
