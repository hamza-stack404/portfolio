'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: '1',
    title: 'Full-Stack Todo App',
    subtitle: 'Real-time collaborative task management',
    description: 'A comprehensive task management platform enabling teams to collaborate in real-time with instant synchronization, role-based access, and Kubernetes-powered scalability.',
    problem: 'Teams struggled with fragmented task tracking across multiple tools, leading to missed deadlines and communication gaps.',
    solution: 'Built a unified platform with WebSocket-based real-time sync, containerized microservices on Kubernetes, and an intuitive drag-and-drop interface.',
    metrics: [
      { value: '50%', label: 'Faster delivery' },
      { value: '99.9%', label: 'Uptime' },
      { value: '<100ms', label: 'Latency' },
    ],
    technologies: ['React', 'Node.js', 'WebSockets', 'Kubernetes', 'Docker', 'PostgreSQL'],
    image: '/projects/todo-app.jpg',
    liveUrl: 'https://hamza-full-stack-web.vercel.app/',
    githubUrl: 'https://github.com/hamza-stack404/Full-stack-web-application',
    featured: true,
  },
  {
    id: '2',
    title: 'AI Humanoid Robotics Guide',
    subtitle: 'Comprehensive technical book',
    description: 'A definitive guide exploring the intersection of physical robotics, artificial intelligence, and humanoid design. Covers cutting-edge algorithms for perception, decision-making, and human-robot interaction.',
    problem: 'No comprehensive resource existed that unified robotics, AI, and humanoid design principles for students and researchers.',
    solution: 'Authored a 12-chapter book synthesizing knowledge from multiple disciplines, with practical examples and case studies from leading robotics labs.',
    metrics: [
      { value: '500+', label: 'Downloads' },
      { value: '4.8/5', label: 'Rating' },
      { value: '12', label: 'Chapters' },
    ],
    technologies: ['Technical Writing', 'AI/ML', 'Robotics', 'Research'],
    image: '/projects/robotics-book.jpg',
    githubUrl: 'https://github.com/hamza-stack404/Physical-AI-Humanoid-Robotics-',
    featured: true,
  },
  {
    id: '3',
    title: 'Cloud-Native Microservices Platform',
    subtitle: 'Enterprise-grade infrastructure',
    description: 'Architected and deployed a cloud-native platform serving 10k+ daily users with auto-scaling, CI/CD pipelines, and comprehensive monitoring.',
    problem: 'Legacy monolithic architecture couldn\'t scale with growing user base, causing frequent downtime and slow feature delivery.',
    solution: 'Migrated to microservices on Kubernetes with GitOps workflows, distributed tracing, and automated rollback capabilities.',
    metrics: [
      { value: '10k+', label: 'Daily users' },
      { value: '3x', label: 'Faster deploys' },
      { value: '40%', label: 'Cost reduction' },
    ],
    technologies: ['Kubernetes', 'Docker', 'Terraform', 'Prometheus', 'Go', 'gRPC'],
    image: '/projects/microservices.jpg',
    featured: true,
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative card bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 overflow-hidden"
    >
      {/* Project image */}
      <div className="relative h-64 -mx-6 -mt-6 mb-6 overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <div className="flex gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                View Code
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
            {project.title}
            <ArrowUpRight className="inline w-5 h-5 ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">{project.subtitle}</p>
        </div>

        <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 py-4 border-y border-neutral-100 dark:border-neutral-800">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="text-lg font-bold text-primary">{metric.value}</div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Problem/Solution */}
        <details className="group/details">
          <summary className="cursor-pointer text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-primary transition-colors">
            View Case Study
          </summary>
          <div className="mt-4 space-y-4 text-sm">
            <div>
              <h4 className="font-semibold text-red-500 mb-1">Problem</h4>
              <p className="text-neutral-600 dark:text-neutral-400">{project.problem}</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-500 mb-1">Solution</h4>
              <p className="text-neutral-600 dark:text-neutral-400">{project.solution}</p>
            </div>
          </div>
        </details>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="text-xs px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Featured Work</span>
          <h2 className="section-title mt-4 mb-6">
            Projects that <span className="gradient-text">deliver results</span>
          </h2>
          <p className="section-subtitle">
            Each project represents a unique challenge solved with modern technologies.
            Here are some of my favorite works.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
