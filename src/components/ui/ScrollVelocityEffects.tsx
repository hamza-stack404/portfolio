'use client';

import { motion } from 'framer-motion';
import { useScrollVelocity } from '@/hooks/useScroll';

interface ScrollVelocityEffectProps {
  children: React.ReactNode;
  className?: string;
  blurThreshold?: number;
  maxBlur?: number;
}

export function ScrollVelocityEffect({
  children,
  className = '',
  blurThreshold = 0.5,
  maxBlur = 4,
}: ScrollVelocityEffectProps) {
  const { velocity, isScrolling } = useScrollVelocity();

  // Calculate blur amount based on velocity
  const blurAmount = velocity > blurThreshold ? Math.min((velocity - blurThreshold) * 2, maxBlur) : 0;

  return (
    <motion.div
      className={className}
      style={{
        filter: `blur(${blurAmount}px)`,
      }}
      transition={{ duration: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

interface ScrollDirectionIndicatorProps {
  className?: string;
}

export function ScrollDirectionIndicator({ className = '' }: ScrollDirectionIndicatorProps) {
  const { direction, isScrolling, velocity } = useScrollVelocity();

  if (!isScrolling || velocity < 0.3) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      className={`fixed left-1/2 -translate-x-1/2 z-50 ${
        direction === 'down' ? 'bottom-8' : 'top-8'
      } ${className}`}
    >
      <div className="px-6 py-3 rounded-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-lg border border-neutral-200 dark:border-neutral-800 flex items-center gap-2">
        <motion.div
          animate={{
            y: direction === 'down' ? [0, 4, 0] : [0, -4, 0],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="text-primary"
        >
          {direction === 'down' ? '↓' : '↑'}
        </motion.div>
        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {direction === 'down' ? 'Scrolling Down' : 'Scrolling Up'}
        </span>
        <div className="flex gap-1">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-3 bg-primary rounded-full"
              animate={{
                scaleY: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

interface FastScrollWarningProps {
  threshold?: number;
}

export function FastScrollWarning({ threshold = 2 }: FastScrollWarningProps) {
  const { velocity, isScrolling } = useScrollVelocity();

  const isFastScrolling = isScrolling && velocity > threshold;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: isFastScrolling ? 1 : 0,
        y: isFastScrolling ? 0 : -20,
      }}
      className="fixed top-24 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
    >
      <div className="px-6 py-3 rounded-full bg-gradient-to-r from-accent/90 to-primary/90 backdrop-blur-md shadow-xl border border-white/20 flex items-center gap-3">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="text-white text-xl"
        >
          ⚡
        </motion.div>
        <span className="text-sm font-bold text-white">
          Whoa! Slow down to enjoy the details
        </span>
      </div>
    </motion.div>
  );
}
