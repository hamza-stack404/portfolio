'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Frontend', value: 84 },
  { name: 'Backend', value: 83 },
  { name: 'Database', value: 88 },
  { name: 'DevOps', value: 75 },
  { name: 'Testing', value: 85 },
  { name: 'Design', value: 70 },
];

export function SkillRadar() {
  const centerX = 150;
  const centerY = 150;
  const maxRadius = 120;
  const levels = 5;

  const getPoint = (angle: number, value: number) => {
    const radius = (value / 100) * maxRadius;
    const x = centerX + radius * Math.cos(angle - Math.PI / 2);
    const y = centerY + radius * Math.sin(angle - Math.PI / 2);
    return { x, y };
  };

  const angleStep = (2 * Math.PI) / skills.length;

  const dataPoints = skills.map((skill, index) => {
    const angle = index * angleStep;
    return getPoint(angle, skill.value);
  });

  const pathData = dataPoints
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
    .join(' ') + ' Z';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-8">
        Skill Distribution
      </h3>

      <svg
        viewBox="0 0 300 300"
        className="w-full max-w-md"
        role="img"
        aria-label="Skill radar chart"
      >
        {/* Background circles */}
        {Array.from({ length: levels }).map((_, i) => {
          const radius = ((i + 1) / levels) * maxRadius;
          return (
            <circle
              key={i}
              cx={centerX}
              cy={centerY}
              r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-neutral-200 dark:text-neutral-800"
            />
          );
        })}

        {/* Axis lines */}
        {skills.map((_, index) => {
          const angle = index * angleStep;
          const endPoint = getPoint(angle, 100);
          return (
            <line
              key={index}
              x1={centerX}
              y1={centerY}
              x2={endPoint.x}
              y2={endPoint.y}
              stroke="currentColor"
              strokeWidth="1"
              className="text-neutral-200 dark:text-neutral-800"
            />
          );
        })}

        {/* Data polygon */}
        <motion.path
          d={pathData}
          fill="rgba(59, 130, 246, 0.2)"
          stroke="rgb(59, 130, 246)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />

        {/* Data points */}
        {dataPoints.map((point, index) => (
          <motion.circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="rgb(59, 130, 246)"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          />
        ))}

        {/* Labels */}
        {skills.map((skill, index) => {
          const angle = index * angleStep;
          const labelPoint = getPoint(angle, 110);
          return (
            <text
              key={skill.name}
              x={labelPoint.x}
              y={labelPoint.y}
              textAnchor="middle"
              className="text-xs font-medium fill-neutral-700 dark:fill-neutral-300"
            >
              {skill.name}
            </text>
          );
        })}
      </svg>
    </motion.div>
  );
}
