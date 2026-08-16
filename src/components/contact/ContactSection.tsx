'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { ContactForm } from './ContactForm';
import {
  usePrefersReducedMotion,
  getAnimationVariants,
} from '@/lib/reduced-motion';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hamzasajjad2032009@gmail.com',
    href: 'mailto:hamzasajjad2032009@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+92 327 3892478',
    href: 'tel:+923273892478',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Karachi, Pakistan',
    href: null,
  },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/hamza-stack404', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/hamza', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/hamza-stack404', label: 'Twitter' },
];

export function ContactSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="contact" className="py-24 lg:py-32 bg-neutral-50/50 dark:bg-neutral-900/30">
      <div className="container">
        {/* Section header */}
        <motion.div
          variants={getAnimationVariants(prefersReducedMotion)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-2xl mb-16 text-center mx-auto"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="section-title mt-4 mb-6">
            Let&apos;s build something <span className="gradient-text">amazing</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or just want to chat? I&apos;d love to hear from you.
            I typically respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact details */}
            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">{label}</p>
                    {href ? (
                      <a href={href} className="font-medium hover:text-primary transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Connect on social</p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-xl glass flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-primary hover:border-primary/30 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="card bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 dark:border-primary/10">
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                <span className="font-semibold">Currently Available</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                I&apos;m currently accepting new projects. Let&apos;s discuss how I can help bring your ideas to life.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
            className="lg:col-span-3"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
