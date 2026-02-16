'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Cloud,
  GitBranch,
  Terminal,
  Palette,
  Package,
  Wrench,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

const toolCategories = [
  {
    name: 'Development',
    icon: Code2,
    tools: ['VS Code', 'WebStorm', 'Cursor', 'Postman'],
  },
  {
    name: 'Version Control',
    icon: GitBranch,
    tools: ['Git', 'GitHub', 'GitLab', 'Bitbucket'],
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    tools: ['AWS', 'Vercel', 'Docker', 'Kubernetes'],
  },
  {
    name: 'Databases',
    icon: Database,
    tools: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'],
  },
  {
    name: 'Package Managers',
    icon: Package,
    tools: ['npm', 'yarn', 'pnpm', 'bun'],
  },
  {
    name: 'Design Tools',
    icon: Palette,
    tools: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop'],
  },
  {
    name: 'Terminal',
    icon: Terminal,
    tools: ['Bash', 'Zsh', 'PowerShell', 'iTerm2'],
  },
  {
    name: 'Build Tools',
    icon: Wrench,
    tools: ['Webpack', 'Vite', 'Turbopack', 'esbuild'],
  },
];

export function ToolsDisplay() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="text-center">
        <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">
          Tools & Technologies
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400">
          The tools I use daily to build exceptional products
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {toolCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-950/30 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                      {category.name}
                    </h4>
                  </div>

                  <ul className="space-y-2">
                    {category.tools.map((tool) => (
                      <li
                        key={tool}
                        className="text-sm text-neutral-600 dark:text-neutral-400 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                        {tool}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
