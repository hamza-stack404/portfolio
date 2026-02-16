'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface CertificationCardProps {
  certification: {
    id: string;
    title: string;
    issuer: string;
    date: string;
    validationUrl?: string;
    credentialId?: string;
  };
  index: number;
}

export function CertificationCard({ certification, index }: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-accent-100 dark:bg-accent-950/30 flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-accent-600 dark:text-accent-400" />
            </div>

            <div className="flex-1 space-y-2">
              <h4 className="font-semibold text-lg text-neutral-900 dark:text-neutral-50">
                {certification.title}
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {certification.issuer}
              </p>

              <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-500">
                <Calendar className="w-4 h-4" />
                <span>{certification.date}</span>
              </div>

              {certification.credentialId && (
                <p className="text-xs text-neutral-500 dark:text-neutral-500 font-mono">
                  ID: {certification.credentialId}
                </p>
              )}
            </div>
          </div>

          {certification.validationUrl && (
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onClick={() => window.open(certification.validationUrl, '_blank')}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Verify Certificate
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
