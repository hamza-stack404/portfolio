'use client';

import { Github, Linkedin, Twitter, Heart, ArrowUp } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/hamza-stack404', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/hamza', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/hamza-stack404', label: 'Twitter' },
];

const footerLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="container">
        <div className="py-12 grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <button onClick={scrollToTop} className="text-xl font-bold mb-2">
              <span className="text-primary-600 dark:text-primary-400">H</span>
              <span className="text-neutral-900 dark:text-neutral-100">amza</span>
            </button>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Full-Stack Developer building exceptional digital experiences.
            </p>
          </div>

          {/* Links */}
          <nav className="flex justify-center gap-6">
            {footerLinks.map(({ label, href }) => (
              <button
                key={label}
                onClick={() => scrollTo(href.slice(1))}
                className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Social + Back to top */}
          <div className="flex items-center justify-end gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-neutral-500 hover:text-primary hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-neutral-500 hover:text-primary hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500 dark:text-neutral-400 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> by Muhammad Hamza
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            &copy; {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
