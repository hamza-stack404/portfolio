'use client';

import { useState, useRef, InputHTMLAttributes } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, AlertCircle } from 'lucide-react';

interface FloatingInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  label: string;
  error?: string;
  success?: boolean;
  icon?: React.ReactNode;
}

export function FloatingInput({
  label,
  error,
  success,
  icon,
  ...props
}: FloatingInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(e.target.value.length > 0);
    props.onChange?.(e);
  };

  const isLabelFloating = isFocused || hasValue;

  return (
    <div className="relative w-full">
      {/* Input container */}
      <div className="relative">
        {/* Icon */}
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">
            {icon}
          </div>
        )}

        {/* Input field */}
        <input
          ref={inputRef}
          {...props}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full px-4 py-3 ${icon ? 'pl-10' : ''} pr-10
            bg-transparent
            border-2 rounded-lg
            transition-all duration-300
            ${
              error
                ? 'border-red-500 focus:border-red-500'
                : success
                ? 'border-green-500 focus:border-green-500'
                : 'border-neutral-300 dark:border-neutral-700 focus:border-primary'
            }
            ${error || success ? '' : 'focus:shadow-[0_0_0_3px_rgba(4,120,87,0.1)]'}
            outline-none
          `}
        />

        {/* Floating label */}
        <motion.label
          className={`
            absolute left-4 ${icon ? 'left-10' : 'left-4'}
            pointer-events-none
            transition-all duration-300
            ${
              error
                ? 'text-red-500'
                : success
                ? 'text-green-500'
                : isFocused
                ? 'text-primary'
                : 'text-neutral-500'
            }
          `}
          animate={{
            top: isLabelFloating ? -10 : '50%',
            y: isLabelFloating ? 0 : '-50%',
            fontSize: isLabelFloating ? '0.75rem' : '1rem',
            paddingLeft: isLabelFloating ? '0.5rem' : '0',
            paddingRight: isLabelFloating ? '0.5rem' : '0',
            backgroundColor: isLabelFloating ? 'hsl(var(--background))' : 'transparent',
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          {label}
        </motion.label>

        {/* Status icon */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <AnimatePresence mode="wait">
            {error && (
              <motion.div
                key="error"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <AlertCircle className="w-5 h-5 text-red-500" />
              </motion.div>
            )}
            {success && !error && (
              <motion.div
                key="success"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <Check className="w-5 h-5 text-green-500" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Focus ring animation */}
        {isFocused && !error && !success && (
          <motion.div
            className="absolute inset-0 rounded-lg border-2 border-primary pointer-events-none"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </div>

      {/* Error message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <motion.p
              className="text-sm text-red-500 mt-2 flex items-center gap-1"
              initial={{ x: -10 }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            >
              <X className="w-4 h-4" />
              {error}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Floating textarea
export function FloatingTextarea({
  label,
  error,
  ...props
}: {
  label: string;
  error?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHasValue(e.target.value.length > 0);
    props.onChange?.(e);
  };

  const isLabelFloating = isFocused || hasValue;

  return (
    <div className="relative w-full">
      <div className="relative">
        <textarea
          {...props}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full px-4 py-3
            bg-transparent
            border-2 rounded-lg
            transition-all duration-300
            resize-none
            ${
              error
                ? 'border-red-500 focus:border-red-500'
                : 'border-neutral-300 dark:border-neutral-700 focus:border-primary'
            }
            ${error ? '' : 'focus:shadow-[0_0_0_3px_rgba(4,120,87,0.1)]'}
            outline-none
          `}
        />

        <motion.label
          className={`
            absolute left-4 top-3
            pointer-events-none
            transition-all duration-300
            ${error ? 'text-red-500' : isFocused ? 'text-primary' : 'text-neutral-500'}
          `}
          animate={{
            top: isLabelFloating ? -10 : 12,
            fontSize: isLabelFloating ? '0.75rem' : '1rem',
            paddingLeft: isLabelFloating ? '0.5rem' : '0',
            paddingRight: isLabelFloating ? '0.5rem' : '0',
            backgroundColor: isLabelFloating ? 'hsl(var(--background))' : 'transparent',
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          {label}
        </motion.label>
      </div>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-sm text-red-500 mt-2"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
