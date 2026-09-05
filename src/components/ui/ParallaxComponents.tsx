'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  direction?: 'up' | 'down';
  className?: string;
}

export function ParallaxSection({
  children,
  speed = 0.5,
  direction = 'up',
  className = '',
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' ? [100 * speed, -100 * speed] : [-100 * speed, 100 * speed]
  );

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

interface ParallaxLayerProps {
  children: ReactNode;
  depth: number;
  className?: string;
}

export function ParallaxLayer({ children, depth, className = '' }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * depth, -100 * depth]);
  const springY = useSpring(y, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y: springY }}>{children}</motion.div>
    </div>
  );
}

interface ScrollScaleProps {
  children: ReactNode;
  className?: string;
  minScale?: number;
  maxScale?: number;
}

export function ScrollScale({
  children,
  className = '',
  minScale = 0.8,
  maxScale = 1,
}: ScrollScaleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [minScale, maxScale, minScale]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ scale, opacity }}>{children}</motion.div>
    </div>
  );
}

interface ScrollRotateProps {
  children: ReactNode;
  className?: string;
  rotation?: number;
}

export function ScrollRotate({ children, className = '', rotation = 15 }: ScrollRotateProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-rotation, rotation]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ rotate }}>{children}</motion.div>
    </div>
  );
}

interface HorizontalScrollProps {
  children: ReactNode;
  className?: string;
}

export function HorizontalScroll({ children, className = '' }: HorizontalScrollProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className={`flex gap-4 ${className}`}>
          {children}
        </motion.div>
      </div>
    </section>
  );
}

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

export function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  let y: MotionValue<number> | undefined;
  let x: MotionValue<number> | undefined;

  if (direction === 'up') {
    y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  } else if (direction === 'down') {
    y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  } else if (direction === 'left') {
    x = useTransform(scrollYProgress, [0, 1], [100, 0]);
  } else if (direction === 'right') {
    x = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  }

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{ y, x, opacity }}
        transition={{ delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}

interface StickyScrollProps {
  children: ReactNode;
  className?: string;
  stickyClassName?: string;
}

export function StickyScroll({ children, className = '', stickyClassName = '' }: StickyScrollProps) {
  return (
    <div className={className}>
      <div className={`sticky top-20 ${stickyClassName}`}>{children}</div>
    </div>
  );
}

interface ScrollImageProps {
  src: string;
  alt: string;
  className?: string;
  parallaxSpeed?: number;
}

export function ScrollImage({ src, alt, className = '', parallaxSpeed = 0.3 }: ScrollImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * parallaxSpeed, -100 * parallaxSpeed]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale }}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

interface ScrollOpacityProps {
  children: ReactNode;
  className?: string;
  fadeIn?: boolean;
  fadeOut?: boolean;
}

export function ScrollOpacity({
  children,
  className = '',
  fadeIn = true,
  fadeOut = true,
}: ScrollOpacityProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    fadeIn && fadeOut ? [0, 1, 1, 0] : fadeIn ? [0, 1, 1, 1] : [1, 1, 1, 0]
  );

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ opacity }}>{children}</motion.div>
    </div>
  );
}

interface ScrollBlurProps {
  children: ReactNode;
  className?: string;
  maxBlur?: number;
}

export function ScrollBlur({ children, className = '', maxBlur = 10 }: ScrollBlurProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const blur = useTransform(scrollYProgress, [0, 0.5, 1], [maxBlur, 0, maxBlur]);
  const filter = useTransform(blur, (value) => `blur(${value}px)`);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ filter }}>{children}</motion.div>
    </div>
  );
}
