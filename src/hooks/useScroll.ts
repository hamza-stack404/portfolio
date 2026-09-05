'use client';

import { useEffect, useState, useRef } from 'react';

interface ScrollVelocity {
  velocity: number;
  direction: 'up' | 'down' | 'none';
  isScrolling: boolean;
}

export function useScrollVelocity() {
  const [scrollVelocity, setScrollVelocity] = useState<ScrollVelocity>({
    velocity: 0,
    direction: 'none',
    isScrolling: false,
  });

  const lastScrollY = useRef(0);
  const lastTimestamp = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTimestamp = Date.now();

      // Calculate velocity (pixels per millisecond)
      const deltaY = currentScrollY - lastScrollY.current;
      const deltaTime = currentTimestamp - lastTimestamp.current;
      const velocity = deltaTime > 0 ? Math.abs(deltaY / deltaTime) : 0;

      // Determine direction
      let direction: 'up' | 'down' | 'none' = 'none';
      if (deltaY > 0) direction = 'down';
      else if (deltaY < 0) direction = 'up';

      setScrollVelocity({
        velocity,
        direction,
        isScrolling: true,
      });

      // Clear existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Set isScrolling to false after scrolling stops
      scrollTimeout.current = setTimeout(() => {
        setScrollVelocity((prev) => ({
          ...prev,
          isScrolling: false,
          velocity: 0,
        }));
      }, 150);

      lastScrollY.current = currentScrollY;
      lastTimestamp.current = currentTimestamp;
    };

    // Initialize
    lastScrollY.current = window.scrollY;
    lastTimestamp.current = Date.now();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return scrollVelocity;
}

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = scrollTop / (documentHeight - windowHeight);
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    handleScroll(); // Initial calculation
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollProgress;
}

export function useSectionProgress(sectionId: string) {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    sectionRef.current = document.getElementById(sectionId);

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;

      // Calculate progress from when section enters viewport to when it leaves
      const startOffset = windowHeight;
      const endOffset = -sectionHeight;
      const totalScroll = startOffset - endOffset;
      const currentScroll = startOffset - rect.top;

      const sectionProgress = Math.min(Math.max(currentScroll / totalScroll, 0), 1);
      setProgress(sectionProgress);
    };

    handleScroll(); // Initial calculation
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionId]);

  return progress;
}
