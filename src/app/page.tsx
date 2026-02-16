'use client';

import * as React from 'react';
import { HeroSection } from '@/components/hero/HeroSection';
import { Navigation } from '@/components/navigation/Navigation';
import { AboutSection } from '@/components/about/AboutSection';
import { ProjectsGrid } from '@/components/projects/ProjectsGrid';
import { SkillsSection } from '@/components/skills/SkillsSection';
import { BlogSection } from '@/components/blog/BlogSection';
import { ContactSection } from '@/components/contact/ContactSection';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ProjectsGrid />
        <SkillsSection />
        <BlogSection />
        <ContactSection />
      </main>
    </>
  );
}
