'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HorizontalScrollShowcaseProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function HorizontalScrollShowcase({ children, title, className = '' }: HorizontalScrollShowcaseProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-66.66%']);

  return (
    <section ref={targetRef} className={`relative h-[300vh] ${className}`}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {title && (
          <div className="absolute top-8 left-8 z-10">
            <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
              {title}
            </h2>
          </div>
        )}
        <motion.div style={{ x }} className="flex gap-8 px-8">
          {children}
        </motion.div>
      </div>
    </section>
  );
}

interface TechStackShowcaseProps {
  className?: string;
}

export function TechStackShowcase({ className = '' }: TechStackShowcaseProps) {
  const techCategories = [
    {
      title: 'Frontend Excellence',
      description: 'Building interactive, performant user interfaces',
      technologies: [
        { name: 'React', icon: '⚛️', color: 'from-blue-500 to-cyan-500' },
        { name: 'Next.js', icon: '▲', color: 'from-neutral-800 to-neutral-600' },
        { name: 'TypeScript', icon: 'TS', color: 'from-blue-600 to-blue-400' },
        { name: 'Tailwind CSS', icon: '🎨', color: 'from-cyan-500 to-blue-500' },
      ],
    },
    {
      title: 'Backend Power',
      description: 'Scalable server-side architecture',
      technologies: [
        { name: 'Node.js', icon: '🟢', color: 'from-green-600 to-green-400' },
        { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-700 to-blue-500' },
        { name: 'GraphQL', icon: '◆', color: 'from-pink-500 to-purple-500' },
        { name: 'Redis', icon: '⚡', color: 'from-red-600 to-red-400' },
      ],
    },
    {
      title: 'DevOps & Cloud',
      description: 'Infrastructure as code, automated deployments',
      technologies: [
        { name: 'Docker', icon: '🐳', color: 'from-blue-500 to-blue-600' },
        { name: 'Kubernetes', icon: '☸️', color: 'from-blue-600 to-purple-600' },
        { name: 'AWS', icon: '☁️', color: 'from-orange-500 to-yellow-500' },
        { name: 'GitHub Actions', icon: '⚙️', color: 'from-neutral-700 to-neutral-900' },
      ],
    },
  ];

  return (
    <HorizontalScrollShowcase
      title="Technology Stack"
      className="bg-neutral-50 dark:bg-neutral-950"
    >
      {techCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.title}
          className="flex-shrink-0 w-[80vw] lg:w-[40vw] h-[70vh]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: '-20%' }}
          transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
        >
          <div className="h-full card bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 p-8 flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {category.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 flex-1">
              {category.technologies.map((tech, techIndex) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: techIndex * 0.1 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="relative group cursor-pointer"
                >
                  <div
                    className={`h-full p-6 rounded-2xl bg-gradient-to-br ${tech.color} flex flex-col items-center justify-center text-white relative overflow-hidden`}
                  >
                    {/* Animated shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ['-100%', '200%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: 'easeInOut',
                      }}
                    />

                    <div className="text-5xl mb-3 relative z-10">{tech.icon}</div>
                    <div className="text-sm font-bold text-center relative z-10">
                      {tech.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}

      {/* End card */}
      <motion.div
        className="flex-shrink-0 w-[80vw] lg:w-[40vw] h-[70vh] flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        <div className="text-center">
          <div className="text-6xl mb-6">🚀</div>
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Ready to Build
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-md">
            Combining these technologies to create exceptional digital experiences
          </p>
        </div>
      </motion.div>
    </HorizontalScrollShowcase>
  );
}
