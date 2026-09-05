'use client';

import * as React from 'react';
import { motion, useSpring } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';
import { usePrefersReducedMotion } from '@/lib/reduced-motion';

export function CustomCursor() {
  const mousePosition = useMousePosition();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isHovering, setIsHovering] = React.useState(false);
  const [isPointerFine, setIsPointerFine] = React.useState(false);

  // Smooth spring animation for the ring
  const springConfig = { stiffness: 300, damping: 30 };
  const cursorX = useSpring(mousePosition.x, springConfig);
  const cursorY = useSpring(mousePosition.y, springConfig);

  React.useEffect(() => {
    // Check if device has fine pointer (not touch)
    const checkPointer = () => {
      setIsPointerFine(window.matchMedia('(pointer: fine)').matches);
    };
    checkPointer();

    const mediaQuery = window.matchMedia('(pointer: fine)');
    mediaQuery.addEventListener('change', checkPointer);

    return () => mediaQuery.removeEventListener('change', checkPointer);
  }, []);

  React.useEffect(() => {
    // Listen for hover over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.hasAttribute('data-cursor')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.hasAttribute('data-cursor')
      ) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  // Don't render on touch devices or when reduced motion is preferred
  if (!isPointerFine || prefersReducedMotion) {
    return null;
  }

  return (
    <>
      {/* Dot - follows immediately with no easing */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
        style={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: isHovering ? 0.5 : 1,
          backgroundColor: '#047857',
          mixBlendMode: 'difference',
        }}
      />

      {/* Ring - follows with spring easing */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          marginLeft: isHovering ? -24 : -16,
          marginTop: isHovering ? -24 : -16,
          border: '2px solid #047857',
          mixBlendMode: 'difference',
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
