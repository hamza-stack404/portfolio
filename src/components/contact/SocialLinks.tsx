'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/hamza-stack404',
    color: 'hover:text-neutral-900 dark:hover:text-neutral-50',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/muhammad-hamza-stack404/',
    color: 'hover:text-blue-600 dark:hover:text-blue-400',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com',
    color: 'hover:text-sky-500 dark:hover:text-sky-400',
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:hamzasajjad2032009@gmail.com',
    color: 'hover:text-red-600 dark:hover:text-red-400',
  },
];

export function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 text-center">
        Connect With Me
      </h3>

      <div className="flex justify-center gap-4">
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 transition-colors ${link.color}`}
              aria-label={link.name}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
}
