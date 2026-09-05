'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Mail, Menu, X } from 'lucide-react';
import { useHapticFeedback } from '@/hooks/useTouchGestures';

interface NavItem {
  id: string;
  label: string;
  icon: typeof Home;
  href: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: Home, href: '#home' },
  { id: 'about', label: 'About', icon: User, href: '#about' },
  { id: 'projects', label: 'Projects', icon: Briefcase, href: '#projects' },
  { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' },
];

export function MobileBottomNav() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(true);
  const haptic = useHapticFeedback();

  // Check if mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);

      // Detect active section
      const sections = navItems.map(item => document.querySelector(item.href));
      const current = sections.findIndex(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current !== -1) {
        setActiveSection(navItems[current].id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (item: NavItem) => {
    haptic.light();
    setActiveSection(item.id);
    const element = document.querySelector(item.href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isMobile) {
    return null;
  }

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: isVisible ? 0 : 100 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
    >
      <div className="relative">
        {/* Background with blur */}
        <div className="absolute inset-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-t border-neutral-200 dark:border-neutral-800" />

        {/* Active indicator background */}
        <motion.div
          className="absolute top-0 h-1 bg-gradient-to-r from-primary to-accent"
          initial={false}
          animate={{
            left: `${navItems.findIndex(item => item.id === activeSection) * (100 / navItems.length)}%`,
            width: `${100 / navItems.length}%`,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />

        {/* Nav items */}
        <div className="relative grid grid-cols-4 px-4 py-3 safe-area-bottom">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className="flex flex-col items-center gap-1 relative"
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1.1 : 1,
                    y: isActive ? -2 : 0,
                  }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className={`p-2 rounded-xl ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </motion.div>
                <span
                  className={`text-xs font-medium ${
                    isActive
                      ? 'text-primary'
                      : 'text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  {item.label}
                </span>

                {/* Active dot indicator */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -top-1 w-1 h-1 rounded-full bg-primary"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    />
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const haptic = useHapticFeedback();

  // Check if mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const actions = [
    { id: 'email', label: 'Email', icon: '📧', href: 'mailto:hamzasajjad2032009@gmail.com' },
    { id: 'linkedin', label: 'LinkedIn', icon: '💼', href: 'https://linkedin.com/in/hamza' },
    { id: 'github', label: 'GitHub', icon: '🐙', href: 'https://github.com/hamza-stack404' },
  ];

  const toggleMenu = () => {
    haptic.medium();
    setIsOpen(!isOpen);
  };

  if (!isMobile) {
    return null;
  }

  return (
    <div className="fixed bottom-24 right-6 z-40 lg:hidden">
      {/* Action buttons */}
      <AnimatePresence>
        {isOpen && (
          <motion.div className="absolute bottom-16 right-0 flex flex-col gap-3">
            {actions.map((action, index) => (
              <motion.a
                key={action.id}
                href={action.href}
                target={action.id !== 'email' ? '_blank' : undefined}
                rel={action.id !== 'email' ? 'noopener noreferrer' : undefined}
                initial={{ scale: 0, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0, y: 20 }}
                transition={{ delay: index * 0.05 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => haptic.light()}
                className="flex items-center gap-3 bg-white dark:bg-neutral-800 px-4 py-3 rounded-full shadow-lg border border-neutral-200 dark:border-neutral-700"
              >
                <span className="text-2xl">{action.icon}</span>
                <span className="text-sm font-medium pr-2">{action.label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        onClick={toggleMenu}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg flex items-center justify-center text-white"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.div>
      </motion.button>
    </div>
  );
}

export function MobileMenuDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const haptic = useHapticFeedback();

  const toggleDrawer = () => {
    haptic.medium();
    setIsOpen(!isOpen);
  };

  const handleNavClick = (href: string) => {
    haptic.light();
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={toggleDrawer}
        className="fixed top-4 right-4 z-50 lg:hidden w-10 h-10 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-lg flex items-center justify-center"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleDrawer}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
            />

            {/* Drawer content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-white dark:bg-neutral-900 shadow-2xl z-[70] p-6"
            >
              <button
                onClick={toggleDrawer}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mt-12 space-y-4">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavClick(item.href)}
                      whileTap={{ scale: 0.95 }}
                      className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    >
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="font-medium">{item.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
