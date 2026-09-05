/**
 * Central content data — single source of truth for personal info.
 * Update this file to reflect changes everywhere in the portfolio.
 */

export const personalInfo = {
  name: 'Muhammad Hamza',
  shortName: 'Hamza',
  title: 'Full-Stack Developer',
  tagline: 'I turn complex problems into fast, beautiful web products.',
  valueProp: 'Based in Karachi · Available for remote work · Obsessed with performance',
  email: 'hamzasajjad2032009@gmail.com',
  phone: '+92 327 3892478',
  location: 'Karachi, Pakistan',
  website: 'https://hamzadev.com',
  availability: 'Available for new projects',
  github: 'https://github.com/hamza-stack404',
} as const;

export const socialLinks = [
  {
    platform: 'GitHub',
    href: 'https://github.com/hamza-stack404',
    label: 'GitHub',
  },
  {
    platform: 'LinkedIn',
    href: 'https://linkedin.com/in/muhammad-hamza-stack',
    label: 'LinkedIn',
  },
  {
    platform: 'Twitter',
    href: 'https://x.com/hamza-stack404',
    label: 'Twitter (X)',
  },
] as const;

export type SocialLink = typeof socialLinks[number];
