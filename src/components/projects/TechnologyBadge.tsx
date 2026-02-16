'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface TechnologyBadgeProps {
  technology: string;
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
  className?: string;
}

const variantStyles = {
  default: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300',
  primary: 'bg-primary-100 dark:bg-primary-950/30 text-primary-700 dark:text-primary-300',
  secondary: 'bg-secondary-100 dark:bg-secondary-950/30 text-secondary-700 dark:text-secondary-300',
  accent: 'bg-accent-100 dark:bg-accent-950/30 text-accent-700 dark:text-accent-300',
};

export function TechnologyBadge({
  technology,
  variant = 'default',
  className,
}: TechnologyBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors',
        variantStyles[variant],
        className
      )}
    >
      {technology}
    </span>
  );
}
