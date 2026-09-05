'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsComplete(true), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Monitor actual page load
    if (document.readyState === 'complete') {
      setProgress(100);
      setTimeout(() => setIsComplete(true), 500);
    } else {
      window.addEventListener('load', () => {
        setProgress(100);
        setTimeout(() => setIsComplete(true), 500);
      });
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (isComplete) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[9999] bg-neutral-950 flex items-center justify-center"
      >
        <div className="text-center">
          {/* Logo/Brand */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold">
              <span className="text-primary-500">H</span>
              <span className="text-white">amza</span>
            </h1>
          </motion.div>

          {/* Progress Bar */}
          <div className="w-64 h-1 bg-neutral-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-500 to-accent-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>

          {/* Progress Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-neutral-400 text-sm"
          >
            {Math.round(progress)}%
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// Performance monitor component (dev only)
export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<{
    fps: number;
    memory?: number;
  }>({
    fps: 0,
  });

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    let frameCount = 0;
    let lastTime = performance.now();
    let animationFrameId: number;

    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();

      if (currentTime >= lastTime + 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));

        // @ts-ignore - memory is experimental
        const memory = performance.memory
          // @ts-ignore
          ? Math.round(performance.memory.usedJSHeapSize / 1048576)
          : undefined;

        setMetrics({ fps, memory });
        frameCount = 0;
        lastTime = currentTime;
      }

      animationFrameId = requestAnimationFrame(measureFPS);
    };

    animationFrameId = requestAnimationFrame(measureFPS);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <div className="fixed bottom-4 left-4 z-[9999] bg-black/80 text-white text-xs p-2 rounded font-mono">
      <div>FPS: {metrics.fps}</div>
      {metrics.memory && <div>Memory: {metrics.memory}MB</div>}
    </div>
  );
}
