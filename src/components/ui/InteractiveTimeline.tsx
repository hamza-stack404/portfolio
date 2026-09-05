'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Briefcase, Award, Download } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: 'work' | 'education' | 'achievement';
}

const timelineData: TimelineEvent[] = [
  {
    year: '2025-2026',
    title: 'Frontend Developer',
    company: 'Self-Employed',
    location: 'Karachi, Pakistan',
    description: 'Leading development of scalable web applications for international clients.',
    achievements: [
      'Built 15+ production applications',
      'Achieved 95+ Lighthouse scores',
      'Implemented CI/CD pipelines',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Docker'],
    type: 'work',
  },
  {
    year: '2024-2025',
    title: 'AI Agent SDK Developer',
    company: 'Self-Employed',
    location: 'Karachi, Pakistan',
    description: 'Built and maintained microservices serving 10k+ daily users.',
    achievements: [
      'Reduced response time by 40%',
      'Implemented auto-scaling',
      'Built monitoring dashboards',
    ],
    technologies: ['Node.js', 'Python', 'AI/ML', 'Kubernetes'],
    type: 'work',
  },
  {
    year: '2024',
    title: 'Python Developer',
    company: 'Self-Employed',
    location: 'Karachi, Pakistan',
    description: 'Developed responsive web applications for diverse clients.',
    achievements: [
      'Delivered 10+ client projects',
      'Introduced modern frameworks',
      'Mentored junior developers',
    ],
    technologies: ['Python', 'Django', 'FastAPI', 'PostgreSQL'],
    type: 'work',
  },
];

export function InteractiveTimeline() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [filter, setFilter] = useState<'all' | 'work' | 'education' | 'achievement'>('all');

  const filteredData = timelineData.filter(
    (event) => filter === 'all' || event.type === filter
  );

  return (
    <div className="py-24 lg:py-32 bg-neutral-50/50 dark:bg-neutral-900/30">
      <div className="container">
        <div className="max-w-2xl mb-16 text-center mx-auto">
          <h2 className="section-title mb-6">
            My <span className="text-primary">Journey</span>
          </h2>
          <p className="section-subtitle">
            An interactive timeline of my professional experience and achievements
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {(['all', 'work', 'education', 'achievement'] as const).map((type) => (
            <motion.button
              key={type}
              onClick={() => setFilter(type)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                filter === type
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          <div className="space-y-12">
            {filteredData.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-20"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-neutral-950 shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.5 }}
                  onClick={() => setSelectedEvent(event)}
                />

                {/* Event card */}
                <motion.div
                  className="card bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 cursor-pointer"
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-primary font-bold text-sm mb-1">{event.year}</div>
                      <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {event.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        event.type === 'work'
                          ? 'bg-blue-100 dark:bg-blue-900/30'
                          : event.type === 'education'
                          ? 'bg-green-100 dark:bg-green-900/30'
                          : 'bg-yellow-100 dark:bg-yellow-900/30'
                      }`}
                    >
                      {event.type === 'work' ? (
                        <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      ) : event.type === 'education' ? (
                        <Calendar className="w-6 h-6 text-green-600 dark:text-green-400" />
                      ) : (
                        <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                      )}
                    </motion.div>
                  </div>

                  <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {event.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {event.technologies.length > 4 && (
                      <span className="text-xs px-3 py-1 text-neutral-500">
                        +{event.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Download Resume Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary inline-flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Full Resume
          </motion.button>
        </motion.div>
      </div>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-2xl w-full bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              >
                ✕
              </button>

              <div className="text-primary font-bold text-sm mb-2">{selectedEvent.year}</div>
              <h3 className="text-2xl font-bold mb-4">{selectedEvent.title}</h3>

              <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400 mb-6">
                <span className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" />
                  {selectedEvent.company}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {selectedEvent.location}
                </span>
              </div>

              <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                {selectedEvent.description}
              </p>

              <div className="mb-6">
                <h4 className="font-bold mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {selectedEvent.achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-2 text-neutral-600 dark:text-neutral-300"
                    >
                      <span className="text-primary mt-1">✓</span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedEvent.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
