'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

interface DevModeStats {
  fps: number;
  memoryUsage: number;
  loadTime: number;
  components: number;
}

export function KonamiCodeDetector() {
  const [sequence, setSequence] = useState<string[]>([]);
  const [devMode, setDevMode] = useState(false);
  const [stats, setStats] = useState<DevModeStats>({
    fps: 60,
    memoryUsage: 0,
    loadTime: 0,
    components: 0,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setSequence((prev) => {
        const newSequence = [...prev, e.key].slice(-KONAMI_CODE.length);

        if (newSequence.join(',') === KONAMI_CODE.join(',')) {
          activateDevMode();
          return [];
        }

        return newSequence;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const activateDevMode = () => {
    setDevMode(true);

    // Calculate stats
    const performance = window.performance;
    const memory = (performance as any).memory;

    setStats({
      fps: 60,
      memoryUsage: memory ? Math.round(memory.usedJSHeapSize / 1048576) : 0,
      loadTime: Math.round(performance.timing.loadEventEnd - performance.timing.navigationStart),
      components: document.querySelectorAll('[class*="component"]').length,
    });

    // Enhanced console output
    console.log(
      '%c🎮 KONAMI CODE ACTIVATED!',
      'font-size: 24px; font-weight: bold; color: #10b981; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);'
    );
    console.log('%c🔧 Developer Mode: ENABLED', 'font-size: 16px; color: #14b8a6;');
    console.log('%c📊 Performance Stats:', 'font-size: 14px; color: #fbbf24;');
    console.table({
      FPS: '60',
      'Memory Usage': `${memory ? Math.round(memory.usedJSHeapSize / 1048576) : 0} MB`,
      'Load Time': `${Math.round(performance.timing.loadEventEnd - performance.timing.navigationStart)} ms`,
    });
    console.log(
      '%c💡 Try typing "hireme" for a surprise!',
      'font-size: 14px; color: #fbbf24; font-style: italic;'
    );
  };

  return (
    <AnimatePresence>
      {devMode && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="fixed top-4 right-4 z-[999] p-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-green-500/50 shadow-2xl backdrop-blur-md max-w-sm"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="text-2xl"
            >
              🔧
            </motion.div>
            <div>
              <h3 className="text-green-400 font-bold text-lg">Developer Mode</h3>
              <p className="text-neutral-400 text-xs">Konami Code Activated</p>
            </div>
            <button
              onClick={() => setDevMode(false)}
              className="ml-auto text-neutral-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>

          <div className="space-y-3">
            <StatItem label="FPS" value={stats.fps} suffix="" color="text-green-400" />
            <StatItem
              label="Memory"
              value={stats.memoryUsage}
              suffix="MB"
              color="text-blue-400"
            />
            <StatItem
              label="Load Time"
              value={stats.loadTime}
              suffix="ms"
              color="text-yellow-400"
            />
            <StatItem
              label="Components"
              value={stats.components}
              suffix=""
              color="text-purple-400"
            />
          </div>

          <div className="mt-4 pt-4 border-t border-neutral-700">
            <p className="text-xs text-neutral-500 text-center">
              Check console for more info
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function StatItem({
  label,
  value,
  suffix,
  color,
}: {
  label: string;
  value: number;
  suffix: string;
  color: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-neutral-400 text-sm">{label}</span>
      <motion.span
        className={`${color} font-mono font-bold text-lg`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 500 }}
      >
        {value}
        <span className="text-xs ml-1">{suffix}</span>
      </motion.span>
    </div>
  );
}

export function HireMeEasterEgg() {
  const [input, setInput] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        setInput((prev) => (prev + e.key).slice(-6));
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, []);

  useEffect(() => {
    if (input.toLowerCase() === 'hireme') {
      setShowModal(true);
      setInput('');

      console.log(
        '%c🎉 HIRE ME EASTER EGG FOUND!',
        'font-size: 20px; font-weight: bold; color: #10b981;'
      );
      console.log(
        '%c📧 Email: hamzasajjad2032009@gmail.com',
        'font-size: 14px; color: #14b8a6;'
      );
    }
  }, [input]);

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-[9998] flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: 'spring', damping: 15 }}
            className="relative max-w-lg w-full bg-gradient-to-br from-primary via-secondary to-accent p-8 rounded-3xl shadow-2xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              className="text-6xl mb-4"
            >
              🎉
            </motion.div>

            <h2 className="text-4xl font-bold text-white mb-4">You Found It!</h2>
            <p className="text-white/90 text-lg mb-6">
              I love curiosity! Let&apos;s work together and build something amazing.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="mailto:hamzasajjad2032009@gmail.com?subject=I%20Found%20Your%20Easter%20Egg!%20Let's%20Talk"
                className="px-6 py-3 bg-white text-primary font-bold rounded-lg hover:scale-105 transition-transform"
              >
                📧 Email Me
              </a>
              <a
                href="https://linkedin.com/in/hamza"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/10 backdrop-blur text-white font-bold rounded-lg hover:scale-105 transition-transform border border-white/30"
              >
                💼 LinkedIn
              </a>
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors text-2xl"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
