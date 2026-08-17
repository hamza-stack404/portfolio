'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

export const MagneticButton = ({
  children,
  className,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const springX = useSpring(x, spring);
  const springY = useSpring(y, spring);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const mouseX = clientX - (left + width / 2);
    const mouseY = clientY - (top + height / 2);
    x.set(mouseX * 0.15); // Adjust multiplier for effect
    y.set(mouseY * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
      }}
      className={cn(
        'btn-primary', // Base class
        className
      )}
      {...rest}
    >
      {children}
    </motion.button>
  );
};
