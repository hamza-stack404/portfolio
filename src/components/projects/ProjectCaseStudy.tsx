'use client';

import * as React from 'react';
import { AlertCircle, CheckCircle, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

interface ProjectCaseStudyProps {
  problem?: string;
  solution?: string;
  impact?: string;
}

export function ProjectCaseStudy({ problem, solution, impact }: ProjectCaseStudyProps) {
  const sections = [
    {
      title: 'Problem',
      content: problem,
      icon: AlertCircle,
      color: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-50 dark:bg-red-950/20',
    },
    {
      title: 'Solution',
      content: solution,
      icon: CheckCircle,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-950/20',
    },
    {
      title: 'Impact',
      content: impact,
      icon: TrendingUp,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
        Case Study
      </h3>

      <div className="grid md:grid-cols-3 gap-4">
        {sections.map((section) => {
          if (!section.content) return null;

          const Icon = section.icon;

          return (
            <Card key={section.title} className={section.bgColor}>
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Icon className={`h-5 w-5 ${section.color}`} />
                  <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                    {section.title}
                  </h4>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {section.content}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
