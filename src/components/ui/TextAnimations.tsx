'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'rotate-in' | 'slide-up' | 'elastic' | 'gradient-wipe';
  delay?: number;
  staggerDelay?: number;
  type?: 'words' | 'chars';
}

export function SplitText({
  text,
  className = '',
  animation = 'fade-up',
  delay = 0,
  staggerDelay = 0.03,
  type = 'words',
}: SplitTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const elements = type === 'words' ? text.split(' ') : text.split('');

  const variants = {
    'fade-up': {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    'fade-in': {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    'rotate-in': {
      hidden: { opacity: 0, rotateX: -90 },
      visible: { opacity: 1, rotateX: 0 },
    },
    'slide-up': {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    'elastic': {
      hidden: { opacity: 0, scale: 0, rotate: -180 },
      visible: { opacity: 1, scale: 1, rotate: 0 },
    },
    'gradient-wipe': {
      hidden: { opacity: 0, backgroundPosition: '0% 50%' },
      visible: { opacity: 1, backgroundPosition: '100% 50%' },
    },
  };

  const selectedVariant = variants[animation];

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div className="flex flex-wrap gap-x-[0.5ch]">
        {elements.map((element, index) => (
          <motion.span
            key={index}
            variants={selectedVariant}
            initial="hidden"
            animate={controls}
            transition={{
              duration: 0.6,
              delay: delay + index * staggerDelay,
              ease: animation === 'elastic' ? [0.68, -0.55, 0.265, 1.55] : 'easeOut',
              type: animation === 'elastic' ? 'spring' : 'tween',
            }}
            className="inline-block"
            style={{
              perspective: '1000px',
              transformStyle: 'preserve-3d',
            }}
          >
            {element}
            {type === 'words' && index < elements.length - 1 && ' '}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export function ScrambleText({ text, className = '', delay = 0, speed = 50 }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let iterations = 0;

    const interval = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split('')
          .map((char, index) => {
            if (index < iterations) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iterations >= text.length) {
        clearInterval(interval);
        setHasAnimated(true);
      }

      iterations += 1 / 3;
    }, speed);

    return () => clearInterval(interval);
  }, [isInView, text, speed, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  );
}

interface TypewriterProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  cursor?: boolean;
}

export function Typewriter({
  text,
  className = '',
  delay = 0,
  speed = 50,
  cursor = true,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(cursor);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => setShowCursor(false), 1000);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, text, speed, delay]);

  return (
    <span ref={ref} className={className}>
      {displayText}
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
          className="inline-block w-[2px] h-[1em] bg-current ml-1"
        />
      )}
    </span>
  );
}

interface GradientTextProps {
  text: string;
  className?: string;
  animated?: boolean;
}

export function GradientText({ text, className = '', animated = true }: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent ${
        animated ? 'bg-[length:200%_auto] animate-gradient-wipe' : ''
      } ${className}`}
    >
      {text}
    </span>
  );
}

interface RotatingTextProps {
  texts: string[];
  className?: string;
  interval?: number;
}

export function RotatingText({ texts, className = '', interval = 3000 }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <div className={`relative inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -20, rotateX: 90 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="inline-block"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

interface CharacterRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function CharacterReveal({ text, className = '', delay = 0 }: CharacterRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, rotateX: 0 }
              : { opacity: 0, y: 50, rotateX: -90 }
          }
          transition={{
            duration: 0.5,
            delay: delay + index * 0.03,
            ease: 'easeOut',
          }}
          className="inline-block"
          style={{
            transformStyle: 'preserve-3d',
            perspective: '1000px',
          }}
        >
          {char === ' ' ? ' ' : char}
        </motion.span>
      ))}
    </div>
  );
}
