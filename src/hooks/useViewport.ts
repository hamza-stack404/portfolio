'use client';

import { useState, useEffect } from 'react';
import { debounce } from '@/lib/performance';

interface ViewportState {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLandscape: boolean;
}

export function useViewport() {
  const [viewport, setViewport] = useState<ViewportState>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    isLandscape: false,
  });

  useEffect(() => {
    const updateViewport = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setViewport({
        width,
        height,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
        isLandscape: width > height,
      });
    };

    updateViewport();

    const debouncedUpdate = debounce(updateViewport, 150);
    window.addEventListener('resize', debouncedUpdate);

    return () => {
      window.removeEventListener('resize', debouncedUpdate);
    };
  }, []);

  return viewport;
}

// Hook to detect if element is in viewport
export function useInViewport(ref: React.RefObject<HTMLElement>, options?: IntersectionObserverInit) {
  const [isInViewport, setIsInViewport] = useState(false);
  const [hasBeenInViewport, setHasBeenInViewport] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
        if (entry.isIntersecting) {
          setHasBeenInViewport(true);
        }
      },
      {
        threshold: 0.1,
        ...options,
      }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return { isInViewport, hasBeenInViewport };
}

// Hook to get scroll position
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0,
    direction: 'down' as 'up' | 'down',
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrollPosition({
        x: window.scrollX,
        y: currentScrollY,
        direction: currentScrollY > lastScrollY ? 'down' : 'up',
      });

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
}

// Hook to detect device capabilities
export function useDeviceCapabilities() {
  const [capabilities, setCapabilities] = useState({
    hasTouch: false,
    hasHover: true,
    prefersReducedMotion: false,
    hasWebGL: false,
    connectionType: 'unknown' as string,
  });

  useEffect(() => {
    // Check touch support
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Check hover capability
    const hasHover = window.matchMedia('(hover: hover)').matches;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Check WebGL support
    const canvas = document.createElement('canvas');
    const hasWebGL = !!(
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl')
    );

    // Check connection type (if available)
    // @ts-ignore - experimental API
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const connectionType = connection?.effectiveType || 'unknown';

    setCapabilities({
      hasTouch,
      hasHover,
      prefersReducedMotion,
      hasWebGL,
      connectionType,
    });
  }, []);

  return capabilities;
}
