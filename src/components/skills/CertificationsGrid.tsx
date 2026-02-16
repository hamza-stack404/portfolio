'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { CertificationCard } from './CertificationCard';

const certifications = [
  {
    id: '1',
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'January 2024',
    validationUrl: 'https://aws.amazon.com/verification',
    credentialId: 'AWS-CSA-2024-001',
  },
  {
    id: '2',
    title: 'Professional Scrum Master I',
    issuer: 'Scrum.org',
    date: 'November 2023',
    validationUrl: 'https://scrum.org/certificates',
    credentialId: 'PSM-I-2023-456',
  },
  {
    id: '3',
    title: 'Meta Front-End Developer',
    issuer: 'Meta (Coursera)',
    date: 'August 2023',
    validationUrl: 'https://coursera.org/verify',
    credentialId: 'META-FE-2023-789',
  },
  {
    id: '4',
    title: 'Google Cloud Professional',
    issuer: 'Google Cloud',
    date: 'June 2023',
    validationUrl: 'https://cloud.google.com/certification',
    credentialId: 'GCP-PRO-2023-321',
  },
];

export function CertificationsGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="text-center">
        <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">
          Certifications
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400">
          Professional certifications and achievements
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <CertificationCard key={cert.id} certification={cert} index={index} />
        ))}
      </div>
    </motion.div>
  );
}
