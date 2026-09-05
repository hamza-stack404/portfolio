/**
 * Navigation data — central definition of nav items and social links.
 */

export const navItems = [
  { id: 'projects', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const;

export type NavItem = typeof navItems[number];
