'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, XCircle } from 'lucide-react';
import { usePrefersReducedMotion } from '@/lib/reduced-motion';

type AvailabilityStatus = 'available' | 'limited' | 'unavailable';

interface AvailabilityStatusProps {
  status?: AvailabilityStatus;
  customMessage?: string;
}

const statusConfig = {
  available: {
    icon: CheckCircle,
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-50 dark:bg-green-950/20',
    borderColor: 'border-green-200 dark:border-green-800',
    message: 'Available for new projects',
  },
  limited: {
    icon: Clock,
    color: 'text-yellow-600 dark:text-yellow-400',
    bgColor: 'bg-yellow-50 dark:bg-yellow-950/20',
    borderColor: 'border-yellow-200 dark:border-yellow-800',
    message: 'Limited availability',
  },
  unavailable: {
    icon: XCircle,
    color: 'text-red-600 dark:text-red-400',
    bgColor: 'bg-red-50 dark:bg-red-950/20',
    borderColor: 'border-red-200 dark:border-red-800',
    message: 'Currently unavailable',
  },
};

export function AvailabilityStatus({
  status = 'available',
  customMessage,
}: AvailabilityStatusProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
      className={`p-4 rounded-lg border ${config.bgColor} ${config.borderColor}`}
    >
      <div className="flex items-center gap-3">
        <Icon className={`w-6 h-6 ${config.color}`} />
        <div>
          <p className={`font-semibold ${config.color}`}>
            {customMessage || config.message}
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
            Feel free to reach out for collaborations or inquiries
          </p>
        </div>
      </div>
    </motion.div>
  );
}
