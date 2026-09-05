export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  problem?: string;
  solution?: string;
  results?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'design' | 'other';
  technologies: string[];
  image: string;
  images?: string[];
  video?: string;
  liveUrl?: string;
  githubUrl?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  year: string;
  duration?: string;
  role?: string;
  team?: string;
}

export interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

export const allTechnologies: FilterOption[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'react', label: 'React' },
  { id: 'nextjs', label: 'Next.js' },
  { id: 'typescript', label: 'TypeScript' },
  { id: 'nodejs', label: 'Node.js' },
  { id: 'docker', label: 'Docker' },
  { id: 'kubernetes', label: 'Kubernetes' },
  { id: 'aws', label: 'AWS' },
  { id: 'postgresql', label: 'PostgreSQL' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Full-Stack Todo Application',
    subtitle: 'Real-time collaborative task management',
    description: 'A comprehensive task management platform enabling teams to collaborate in real-time with instant synchronization, role-based access, and Kubernetes-powered scalability.',
    longDescription: 'Built from the ground up to handle enterprise-scale collaboration, this platform combines modern web technologies with cloud-native architecture to deliver a seamless experience for distributed teams.',
    problem: 'Teams struggled with fragmented task tracking across multiple tools, leading to missed deadlines, duplicate work, and communication gaps. Existing solutions were either too simple or too complex, with poor real-time collaboration features.',
    solution: 'Architected a unified platform with WebSocket-based real-time synchronization, containerized microservices architecture on Kubernetes, and an intuitive drag-and-drop interface. Implemented role-based access control, task dependencies, and automated notifications.',
    results: 'Deployed to production serving 500+ active users across 15 organizations. Achieved 99.9% uptime, <100ms latency for real-time updates, and 50% faster project completion rates compared to previous workflows.',
    featured: false,
    category: 'web',
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'WebSockets', 'Kubernetes', 'Docker', 'PostgreSQL', 'Redis'],
    image: '/projects/todo-app.jpg',
    images: ['/projects/todo-app.jpg', '/projects/todo-app-2.jpg', '/projects/todo-app-3.jpg'],
    liveUrl: 'https://hamza-full-stack-web.vercel.app/',
    githubUrl: 'https://github.com/hamza-stack404/Full-stack-web-application',
    metrics: [
      { label: 'Active Users', value: '500+' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Latency', value: '<100ms' },
      { label: 'Faster Delivery', value: '50%' },
    ],
    year: '2024',
    duration: '6 months',
    role: 'Full-Stack Developer',
    team: 'Solo Project',
  },
  {
    id: '2',
    title: 'AI Humanoid Robotics Guide',
    subtitle: 'Comprehensive technical documentation',
    description: 'A definitive 300+ page guide exploring the intersection of physical robotics, artificial intelligence, and humanoid design principles.',
    longDescription: 'This comprehensive guide serves as a bridge between theoretical AI concepts and practical robotics implementation, covering everything from sensor fusion to autonomous decision-making.',
    problem: 'No unified resource existed that combined robotics hardware, AI algorithms, and humanoid design principles. Students and researchers had to piece together information from dozens of scattered sources.',
    solution: 'Authored a structured 12-chapter guide synthesizing knowledge from robotics, computer vision, machine learning, and mechanical engineering. Included practical examples, code snippets, and case studies from leading robotics labs like Boston Dynamics and Tesla AI.',
    results: 'Over 500 downloads in the first month, 4.8/5 average rating, adopted as supplementary material by 3 universities. Received positive feedback from robotics researchers and industry professionals.',
    featured: true,
    category: 'other',
    technologies: ['AI/ML', 'Computer Vision', 'Robotics', 'Python', 'TensorFlow', 'ROS'],
    image: '/projects/robotics-book.jpg',
    githubUrl: 'https://github.com/hamza-stack404/Physical-AI-Humanoid-Robotics-',
    metrics: [
      { label: 'Downloads', value: '500+' },
      { label: 'Rating', value: '4.8/5' },
      { label: 'Chapters', value: '12' },
      { label: 'Pages', value: '300+' },
    ],
    year: '2024',
    duration: '4 months',
    role: 'Author & Researcher',
  },
  {
    id: '3',
    title: 'Cloud-Native Microservices Platform',
    subtitle: 'Enterprise-grade infrastructure',
    description: 'Architected and deployed a scalable cloud platform serving 10,000+ daily active users with auto-scaling, CI/CD pipelines, and comprehensive monitoring.',
    longDescription: 'Transformed a monolithic legacy application into a modern microservices architecture, improving deployment frequency, system reliability, and development velocity.',
    problem: 'Legacy monolithic architecture couldn\'t scale with growing user base, causing frequent downtime and slow feature delivery. Deployments took hours and often failed, requiring manual rollbacks.',
    solution: 'Migrated to event-driven microservices on Kubernetes with GitOps workflows, distributed tracing with Jaeger, and automated rollback capabilities. Implemented circuit breakers, rate limiting, and comprehensive observability.',
    results: 'Reduced infrastructure costs by 40%, improved deployment frequency from weekly to daily, achieved 99.95% uptime, and decreased incident response time by 70%. Zero-downtime deployments became standard.',
    featured: true,
    category: 'web',
    technologies: ['Kubernetes', 'Docker', 'Terraform', 'Prometheus', 'Grafana', 'Go', 'gRPC', 'Apache Kafka'],
    image: '/projects/microservices.jpg',
    metrics: [
      { label: 'Daily Users', value: '10k+' },
      { label: 'Faster Deploys', value: '3x' },
      { label: 'Cost Reduction', value: '40%' },
      { label: 'Uptime', value: '99.95%' },
    ],
    year: '2024',
    duration: '8 months',
    role: 'DevOps Engineer',
    team: '5 Engineers',
  },
  {
    id: '4',
    title: 'E-Commerce Platform',
    subtitle: 'Modern shopping experience',
    description: 'Built a high-performance e-commerce platform with Stripe integration, inventory management, and admin dashboard.',
    featured: false,
    category: 'web',
    technologies: ['Next.js', 'React', 'Stripe', 'Prisma', 'PostgreSQL', 'Tailwind'],
    image: '/projects/ecommerce.jpg',
    liveUrl: '#',
    githubUrl: '#',
    metrics: [
      { label: 'Products', value: '1000+' },
      { label: 'Conversion', value: '3.2%' },
      { label: 'Load Time', value: '<1s' },
    ],
    year: '2024',
    duration: '3 months',
  },
  {
    id: '5',
    title: 'Real-Time Analytics Dashboard',
    subtitle: 'Data visualization platform',
    description: 'Interactive dashboard for monitoring system metrics with real-time updates and customizable widgets.',
    featured: false,
    category: 'web',
    technologies: ['React', 'D3.js', 'Node.js', 'Socket.io', 'MongoDB'],
    image: '/projects/dashboard.jpg',
    metrics: [
      { label: 'Data Points', value: '1M+/day' },
      { label: 'Update Rate', value: 'Real-time' },
      { label: 'Widgets', value: '15+' },
    ],
    year: '2023',
    duration: '2 months',
  },
  {
    id: '6',
    title: 'Developer Portfolio Template',
    subtitle: 'Open-source template',
    description: 'A modern, customizable portfolio template for developers with animations and dark mode.',
    featured: false,
    category: 'design',
    technologies: ['Next.js', 'Tailwind', 'Framer Motion', 'TypeScript'],
    image: '/projects/portfolio-template.jpg',
    githubUrl: '#',
    metrics: [
      { label: 'GitHub Stars', value: '200+' },
      { label: 'Forks', value: '50+' },
      { label: 'Downloads', value: '1k+' },
    ],
    year: '2023',
  },
];
