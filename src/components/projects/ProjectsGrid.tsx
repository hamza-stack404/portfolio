'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { ProjectCard } from './ProjectCard';
import { FilterControls } from './FilterControls';
import { ProjectModal } from './ProjectModal';
import { useProjectFilter } from '@/hooks/useProjectFilter';

// Sample project data
const projects = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management',
    longDescription: 'Built a comprehensive e-commerce solution with advanced features including real-time inventory tracking, payment processing, order management, and analytics dashboard.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    category: 'web',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    problem: 'Client needed a scalable e-commerce solution to handle 10,000+ daily transactions',
    solution: 'Implemented microservices architecture with caching and optimized database queries',
    impact: 'Reduced page load time by 60% and increased conversion rate by 35%',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates',
    longDescription: 'Developed a real-time collaborative task management application with drag-and-drop functionality, team collaboration features, and advanced filtering.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redux'],
    category: 'web',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    problem: 'Teams struggled with coordination and task visibility across departments',
    solution: 'Created real-time collaboration features with WebSocket integration',
    impact: 'Improved team productivity by 45% and reduced missed deadlines by 60%',
  },
  {
    id: '3',
    title: 'Mobile Fitness Tracker',
    description: 'Cross-platform mobile app for tracking workouts and nutrition',
    longDescription: 'Built a comprehensive fitness tracking application with workout logging, nutrition tracking, progress analytics, and social features.',
    technologies: ['React Native', 'Firebase', 'TypeScript', 'Redux'],
    category: 'mobile',
    liveUrl: 'https://example.com',
    problem: 'Users needed an all-in-one solution for fitness and nutrition tracking',
    solution: 'Integrated multiple APIs and created intuitive UI for seamless tracking',
    impact: 'Achieved 50,000+ downloads with 4.8-star rating in first 3 months',
  },
  {
    id: '4',
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard for business intelligence',
    longDescription: 'Created an enterprise-grade analytics dashboard with customizable widgets, real-time data visualization, and advanced reporting capabilities.',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
    category: 'web',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    problem: 'Business needed real-time insights from multiple data sources',
    solution: 'Built data pipeline with real-time processing and interactive visualizations',
    impact: 'Enabled data-driven decisions resulting in 25% revenue increase',
  },
  {
    id: '5',
    title: 'AI Content Generator',
    description: 'AI-powered tool for generating marketing content',
    longDescription: 'Developed an AI-powered content generation platform that helps marketers create engaging content using advanced language models.',
    technologies: ['Next.js', 'OpenAI API', 'TypeScript', 'Prisma', 'PostgreSQL'],
    category: 'ai',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    problem: 'Marketing teams spent hours creating content variations',
    solution: 'Integrated GPT-4 API with custom prompts and content optimization',
    impact: 'Reduced content creation time by 80% while maintaining quality',
  },
  {
    id: '6',
    title: 'Social Media Scheduler',
    description: 'Multi-platform social media scheduling and analytics tool',
    longDescription: 'Built a comprehensive social media management platform supporting multiple platforms with scheduling, analytics, and team collaboration.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Bull Queue', 'AWS'],
    category: 'web',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    problem: 'Managing multiple social media accounts was time-consuming',
    solution: 'Created unified dashboard with automated scheduling and analytics',
    impact: 'Saved users average of 15 hours per week on social media management',
  },
];

export function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = React.useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const {
    filteredProjects,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    categories,
  } = useProjectFilter(projects);

  const handleViewDetails = (projectId: string) => {
    const project = projects.find((p) => p.id === projectId);
    if (project) {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  };

  return (
    <section id="projects" className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Explore my portfolio of projects showcasing expertise across various technologies
          </p>
        </motion.div>

        <div className="mb-12">
          <FilterControls
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-neutral-600 dark:text-neutral-400">
              No projects found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}
      </Container>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
