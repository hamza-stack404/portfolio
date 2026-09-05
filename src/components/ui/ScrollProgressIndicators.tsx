'use client';

import { motion } from 'framer-motion';
import { useScrollProgress, useSectionProgress } from '@/hooks/useScroll';

interface SectionProgressProps {
  sectionId: string;
  label?: string;
  className?: string;
}

export function SectionProgressIndicator({ sectionId, label, className = '' }: SectionProgressProps) {
  const progress = useSectionProgress(sectionId);

  return (
    <div className={`fixed right-8 top-1/2 -translate-y-1/2 z-50 ${className}`}>
      <div className="flex items-center gap-3">
        {label && (
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: progress > 0 && progress < 1 ? 1 : 0, x: progress > 0 && progress < 1 ? 0 : 10 }}
            className="text-sm font-medium text-neutral-600 dark:text-neutral-400"
          >
            {label}
          </motion.span>
        )}
        <div className="w-1 h-32 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
          <motion.div
            className="w-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full origin-top"
            style={{
              height: `${progress * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export function PageScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent origin-left z-[100]"
      style={{
        scaleX: progress,
      }}
    />
  );
}

interface CircularProgressProps {
  className?: string;
}

export function CircularScrollProgress({ className = '' }: CircularProgressProps) {
  const progress = useScrollProgress();
  const circumference = 2 * Math.PI * 18; // radius = 18

  return (
    <div className={`fixed bottom-8 right-8 z-50 ${className}`}>
      <div className="relative w-12 h-12">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 40 40">
          {/* Background circle */}
          <circle
            cx="20"
            cy="20"
            r="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-neutral-200 dark:text-neutral-800"
          />
          {/* Progress circle */}
          <motion.circle
            cx="20"
            cy="20"
            r="18"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - progress)}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(16, 185, 129)" />
              <stop offset="50%" stopColor="rgb(20, 184, 166)" />
              <stop offset="100%" stopColor="rgb(251, 191, 36)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-neutral-600 dark:text-neutral-400">
            {Math.round(progress * 100)}%
          </span>
        </div>
      </div>
    </div>
  );
}
