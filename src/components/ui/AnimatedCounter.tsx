'use client';

import * as React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: number | string;
  duration?: number;
}

export function AnimatedCounter({ value, duration = 2 }: AnimatedCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const count = useMotionValue(0);

  // Parse the numeric value from string (e.g., "50%" -> 50, "10k+" -> 10000)
  const numericValue = React.useMemo(() => {
    if (typeof value === 'number') return value;
    const parsed = parseFloat(value.replace(/[^0-9.]/g, ''));
    if (value.includes('k')) return parsed * 1000;
    return parsed || 0;
  }, [value]);

  // Format the display value
  const displayValue = useTransform(count, (latest) => {
    if (typeof value === 'string') {
      if (value.includes('%')) return `${Math.round(latest)}%`;
      if (value.includes('k+')) return `${Math.round(latest / 1000)}k+`;
      if (value.includes('+')) return `${Math.round(latest)}+`;
      if (value.includes('ms')) return `<${Math.round(latest)}ms`;
    }
    return Math.round(latest).toString();
  });

  React.useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, { duration });
      return controls.stop;
    }
  }, [isInView, numericValue, duration, count]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}
