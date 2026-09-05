'use client';

import { useState, useRef, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Ripple {
  x: number;
  y: number;
  id: number;
}

interface RippleButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
}

export function RippleButton({
  children,
  className = '',
  onClick,
  variant = 'primary',
  disabled = false,
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const rippleId = useRef(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || disabled) return;

    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      x,
      y,
      id: rippleId.current++,
    };

    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    createRipple(e);
    onClick?.();
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-primary-600 to-accent-600 text-white';
      case 'secondary':
        return 'bg-transparent border-2 border-neutral-300 dark:border-neutral-700 hover:border-primary';
      case 'ghost':
        return 'bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800';
      default:
        return '';
    }
  };

  return (
    <button
      ref={buttonRef}
      className={`relative overflow-hidden px-6 py-3 rounded-lg font-medium transition-all ${getVariantStyles()} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {/* Ripple effects */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute rounded-full bg-white pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: 0,
              height: 0,
              opacity: 0.5,
            }}
            initial={{ width: 0, height: 0, opacity: 0.5 }}
            animate={{ width: 500, height: 500, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>

      {/* Button content */}
      <span className="relative z-10">{children}</span>
    </button>
  );
}

// Icon animation wrapper
export function AnimatedIcon({
  children,
  animation = 'bounce',
}: {
  children: ReactNode;
  animation?: 'bounce' | 'rotate' | 'slide' | 'scale';
}) {
  const getAnimation = () => {
    switch (animation) {
      case 'bounce':
        return {
          y: [0, -4, 0],
        };
      case 'rotate':
        return {
          rotate: [0, 360],
        };
      case 'slide':
        return {
          x: [0, 4, 0],
        };
      case 'scale':
        return {
          scale: [1, 1.2, 1],
        };
    }
  };

  return (
    <motion.span
      className="inline-flex"
      whileHover={getAnimation()}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {children}
    </motion.span>
  );
}
