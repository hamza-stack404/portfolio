'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

type CursorState = 'default' | 'hover' | 'click' | 'text' | 'loading' | 'drag';

interface TrailDot {
  x: number;
  y: number;
  id: number;
}

export function AdvancedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState<CursorState>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(false);
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const trailId = useRef(0);

  // Smooth spring animation
  const springConfig = { damping: 30, stiffness: 400 };
  const cursorX = useSpring(position.x, springConfig);
  const cursorY = useSpring(position.y, springConfig);

  useEffect(() => {
    // Check if device has fine pointer (mouse)
    const checkPointer = () => {
      const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
      setIsPointerFine(hasFinePointer);
    };

    checkPointer();
    const mediaQuery = window.matchMedia('(pointer: fine)');
    mediaQuery.addEventListener('change', checkPointer);

    if (!window.matchMedia('(pointer: fine)').matches) {
      return () => mediaQuery.removeEventListener('change', checkPointer);
    }

    let lastTrailTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setPosition(newPos);
      if (!isVisible) setIsVisible(true);

      // Add trail dots (throttled)
      const now = Date.now();
      if (now - lastTrailTime > 30) {
        setTrail((prev) => {
          const newTrail = [...prev, { ...newPos, id: trailId.current++ }];
          return newTrail.slice(-8); // Keep last 8 dots
        });
        lastTrailTime = now;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check for loading state
      if (target.hasAttribute('data-loading')) {
        setCursorState('loading');
      }
      // Check for draggable
      else if (target.draggable || target.hasAttribute('data-draggable')) {
        setCursorState('drag');
      }
      // Buttons and links
      else if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setCursorState('hover');
      }
      // Text inputs
      else if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        setCursorState('text');
      } else {
        setCursorState('default');
      }
    };

    const handleMouseDown = () => setCursorState('click');
    const handleMouseUp = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Return to appropriate state
      if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        setCursorState('hover');
      } else {
        setCursorState('default');
      }
    };
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      mediaQuery.removeEventListener('change', checkPointer);
    };
  }, [isVisible]);

  // Don't render on touch devices
  if (!isPointerFine) {
    return null;
  }

  const getCursorSize = () => {
    switch (cursorState) {
      case 'hover':
        return 50;
      case 'click':
        return 30;
      case 'text':
        return 4;
      case 'loading':
        return 45;
      case 'drag':
        return 55;
      default:
        return 40;
    }
  };

  const getCursorLabel = () => {
    switch (cursorState) {
      case 'hover':
        return 'CLICK';
      case 'drag':
        return 'DRAG';
      default:
        return null;
    }
  };

  const size = getCursorSize();
  const label = getCursorLabel();

  return (
    <>
      {isVisible && (
        <>
          {/* Trail dots */}
          {trail.map((dot, index) => (
            <motion.div
              key={dot.id}
              className="fixed top-0 left-0 pointer-events-none z-[9997]"
              style={{
                x: dot.x - 2,
                y: dot.y - 2,
              }}
              initial={{ opacity: 0.6, scale: 1 }}
              animate={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="w-1 h-1 rounded-full"
                style={{
                  backgroundColor: '#047857',
                  opacity: 0.6 - (index / trail.length) * 0.6,
                }}
              />
            </motion.div>
          ))}

          {/* Dot cursor - immediate follow */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            style={{
              x: position.x - 4,
              y: position.y - 4,
            }}
          >
            <div
              className="w-2 h-2 rounded-full transition-transform duration-150"
              style={{
                backgroundColor: cursorState === 'hover' ? '#10b981' : '#047857',
                mixBlendMode: 'difference',
                transform: cursorState === 'click' ? 'scale(0.5)' : 'scale(1)',
              }}
            />
          </motion.div>

          {/* Ring cursor - smooth spring follow */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9998]"
            style={{
              x: cursorX,
              y: cursorY,
            }}
          >
            {/* Text mode - vertical line */}
            {cursorState === 'text' ? (
              <motion.div
                className="rounded-sm"
                style={{
                  width: 2,
                  height: 20,
                  marginLeft: -1,
                  marginTop: -10,
                  backgroundColor: '#047857',
                  mixBlendMode: 'difference',
                }}
                animate={{ scaleY: [1, 0.8, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            ) : (
              /* Regular ring cursor */
              <div
                className="rounded-full border-2 flex items-center justify-center transition-all duration-200"
                style={{
                  width: size,
                  height: size,
                  marginLeft: -size / 2,
                  marginTop: -size / 2,
                  borderColor: cursorState === 'hover' ? '#10b981' : '#047857',
                  mixBlendMode: 'difference',
                  transform: cursorState === 'click' ? 'scale(0.8)' : 'scale(1)',
                }}
              >
                {/* Loading spinner */}
                {cursorState === 'loading' && (
                  <motion.div
                    className="w-6 h-6 border-2 border-transparent border-t-primary rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  />
                )}

                {/* Label text */}
                {label && (
                  <span
                    className="text-[8px] font-bold"
                    style={{
                      color: cursorState === 'hover' ? '#10b981' : '#047857',
                      mixBlendMode: 'difference',
                    }}
                  >
                    {label}
                  </span>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </>
  );
}
