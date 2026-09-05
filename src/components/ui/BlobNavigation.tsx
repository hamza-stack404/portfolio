'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

interface BlobNavigationProps {
  items: NavItem[];
  activeId?: string;
  onItemClick?: (id: string) => void;
}

export function BlobNavigation({ items, activeId, onItemClick }: BlobNavigationProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const activeIndex = items.findIndex((item) => item.id === (hoveredId || activeId));

  return (
    <nav className="relative flex items-center gap-1 bg-neutral-100 dark:bg-neutral-800 p-1 rounded-full">
      {/* Animated blob background */}
      {activeIndex !== -1 && (
        <motion.div
          className="absolute h-10 bg-primary rounded-full"
          layoutId="blob"
          initial={false}
          animate={{
            left: `${(activeIndex / items.length) * 100}%`,
            width: `${100 / items.length}%`,
          }}
          transition={{
            type: 'spring',
            stiffness: 380,
            damping: 30,
          }}
          style={{
            zIndex: 0,
          }}
        />
      )}

      {/* Navigation items */}
      {items.map((item) => {
        const isActive = item.id === activeId;
        const isHovered = item.id === hoveredId;

        return (
          <button
            key={item.id}
            onClick={() => onItemClick?.(item.id)}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`
              relative z-10 px-6 py-2 rounded-full text-sm font-medium
              transition-colors duration-200
              ${
                isActive || isHovered
                  ? 'text-white'
                  : 'text-neutral-600 dark:text-neutral-400'
              }
            `}
          >
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}

// Minimal navigation with underline indicator
export function UnderlineNavigation({
  items,
  activeId,
  onItemClick,
}: BlobNavigationProps) {
  return (
    <nav className="flex items-center gap-8">
      {items.map((item) => {
        const isActive = item.id === activeId;

        return (
          <button
            key={item.id}
            onClick={() => onItemClick?.(item.id)}
            className="relative pb-2 text-sm font-medium transition-colors"
          >
            <span
              className={
                isActive
                  ? 'text-primary'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-primary'
              }
            >
              {item.label}
            </span>

            {/* Animated underline */}
            {isActive && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                initial={false}
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
}

// Dot indicator navigation
export function DotNavigation({ items, activeId, onItemClick }: BlobNavigationProps) {
  return (
    <nav className="flex flex-col gap-4">
      {items.map((item) => {
        const isActive = item.id === activeId;

        return (
          <button
            key={item.id}
            onClick={() => onItemClick?.(item.id)}
            className="flex items-center gap-3 group"
          >
            {/* Dot indicator */}
            <div className="relative w-2 h-2">
              <motion.div
                className="absolute inset-0 rounded-full bg-primary"
                animate={{
                  scale: isActive ? 1 : 0.5,
                  opacity: isActive ? 1 : 0.3,
                }}
                transition={{ duration: 0.3 }}
              />
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              )}
            </div>

            {/* Label */}
            <span
              className={`
                text-sm font-medium transition-colors
                ${
                  isActive
                    ? 'text-primary'
                    : 'text-neutral-600 dark:text-neutral-400 group-hover:text-primary'
                }
              `}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
