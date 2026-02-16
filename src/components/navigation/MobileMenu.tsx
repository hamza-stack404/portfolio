'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  id: string;
  label: string;
}

interface MobileMenuProps {
  navItems: NavItem[];
  activeSection: string;
  onNavClick: (id: string) => void;
  onClose: () => void;
}

export function MobileMenu({
  navItems,
  activeSection,
  onNavClick,
  onClose,
}: MobileMenuProps) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 bottom-0 w-64 bg-white dark:bg-neutral-950 shadow-xl z-50 md:hidden"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-800">
            <span className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Menu
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <button
                    onClick={() => onNavClick(item.id)}
                    className={cn(
                      'w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors',
                      activeSection === item.id
                        ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/30'
                        : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                    )}
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.div>
    </>
  );
}
