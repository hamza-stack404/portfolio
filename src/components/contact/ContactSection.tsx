'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { ContactForm } from './ContactForm';
import {
  usePrefersReducedMotion,
  getAnimationVariants,
} from '@/lib/reduced-motion';
import { SplitText, GradientText, CharacterReveal } from '@/components/ui/TextAnimations';
import { ScrollReveal, ParallaxSection } from '@/components/ui/ParallaxComponents';

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
  { icon: Linkedin, href: 'https://linkedin.com/in/muhammad-hamza-stack', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/hamza-stack404', label: 'Twitter' },
];

export function ContactSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="contact" className="py-24 lg:py-32 bg-neutral-50/50 dark:bg-neutral-900/30 relative overflow-hidden">
      {/* Background decoration with parallax */}
      <ParallaxSection speed={0.4} className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </ParallaxSection>

      <div className="container">
        {/* Section header */}
        <motion.div
          variants={getAnimationVariants(prefersReducedMotion)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-2xl mb-16 text-center mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-primary font-semibold text-sm uppercase tracking-wider inline-block"
          >
            <CharacterReveal text="Get In Touch" delay={0} />
          </motion.span>

          <h2 className="section-title mt-4 mb-6">
            <SplitText
              text="Let's build something"
              animation="fade-up"
              delay={0.2}
              staggerDelay={0.05}
            />
            <br />
            <GradientText text="amazing" animated />
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="section-subtitle mx-auto"
          >
            Have a project in mind or just want to chat? I&apos;d love to hear from you.
            I typically respond within 24 hours.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact info */}
          <ScrollReveal direction="left" className="lg:col-span-2 space-y-8">
            {/* Contact details */}
            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="flex items-start gap-4 group"
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 relative overflow-hidden"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, type: 'spring' }}
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Icon className="w-5 h-5 text-primary relative z-10" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="font-medium hover:text-primary transition-colors inline-block"
                      >
                        <motion.span
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.2 }}
                        >
                          {value}
                        </motion.span>
                      </a>
                    ) : (
                      <p className="font-medium">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                <GradientText text="Connect on social" />
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: 0.4 + index * 0.1,
                      type: 'spring',
                      stiffness: 500,
                    }}
                    whileHover={{
                      scale: 1.15,
                      y: -4,
                      rotate: 5,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-xl glass flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-primary hover:border-primary/30 transition-all relative overflow-hidden group"
                  >
                    {/* Gradient background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Icon className="w-5 h-5 relative z-10" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability card */}
            <ScrollReveal direction="up" delay={0.5}>
              <motion.div
                className="card bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 dark:border-primary/10 relative overflow-hidden"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                    </span>
                    <span className="font-semibold">
                      <SplitText
                        text="Currently Available"
                        animation="fade-up"
                        staggerDelay={0.03}
                      />
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    I&apos;m currently accepting new projects. Let&apos;s discuss how I can help
                    bring your ideas to life.
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal direction="right" className="lg:col-span-3">
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
