'use client';

import { useEffect } from 'react';

const ASCII_LOGO = `
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   ███╗   ███╗██╗   ██╗██╗  ██╗ █████╗ ███╗   ███╗███╗   ║
║   ████╗ ████║██║   ██║██║  ██║██╔══██╗████╗ ████║██║   ║
║   ██╔████╔██║██║   ██║███████║███████║██╔████╔██║███║   ║
║   ██║╚██╔╝██║██║   ██║██╔══██║██╔══██║██║╚██╔╝██║╚══╝   ║
║   ██║ ╚═╝ ██║╚██████╔╝██║  ██║██║  ██║██║ ╚═╝ ██║███╗   ║
║   ╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚══╝   ║
║                                                           ║
║         Full-Stack Developer | React Specialist          ║
║                  Award-Winning Portfolio                 ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
`;

const COMMANDS = {
  help: {
    description: 'Show all available commands',
    action: () => {
      console.log('%c📚 Available Commands:', 'font-size: 16px; font-weight: bold; color: #10b981;');
      console.log('');
      Object.entries(COMMANDS).forEach(([cmd, { description }]) => {
        console.log(`%c${cmd.padEnd(15)}%c${description}`, 'color: #14b8a6; font-weight: bold;', 'color: #fff;');
      });
      console.log('');
      console.log('%cType: help.<command>() to run', 'color: #fbbf24; font-style: italic;');
    },
  },
  about: {
    description: 'Learn about Muhammad Hamza',
    action: () => {
      console.log('%c👨‍💻 About Me', 'font-size: 16px; font-weight: bold; color: #10b981;');
      console.log('');
      console.log('%cName:%c Muhammad Hamza', 'font-weight: bold; color: #14b8a6;', 'color: #fff;');
      console.log('%cRole:%c Full-Stack Developer', 'font-weight: bold; color: #14b8a6;', 'color: #fff;');
      console.log('%cLocation:%c Karachi, Pakistan', 'font-weight: bold; color: #14b8a6;', 'color: #fff;');
      console.log('%cExperience:%c 2+ years', 'font-weight: bold; color: #14b8a6;', 'color: #fff;');
      console.log('');
      console.log('%c💡 Specializing in React, Next.js, TypeScript, and Cloud Architecture', 'color: #fbbf24;');
    },
  },
  skills: {
    description: 'View technical skills',
    action: () => {
      console.log('%c🛠️ Technical Skills', 'font-size: 16px; font-weight: bold; color: #10b981;');
      console.log('');
      console.table({
        Frontend: 'React, Next.js, TypeScript, Tailwind CSS',
        Backend: 'Node.js, Express, PostgreSQL, MongoDB',
        DevOps: 'Docker, Kubernetes, AWS, CI/CD',
        Tools: 'Git, GSAP, Three.js, Framer Motion',
      });
    },
  },
  projects: {
    description: 'List featured projects',
    action: () => {
      console.log('%c🚀 Featured Projects', 'font-size: 16px; font-weight: bold; color: #10b981;');
      console.log('');
      console.table([
        {
          Project: 'Full-Stack Todo App',
          Tech: 'React, Next.js, Kubernetes',
          Users: '500+',
          Status: '✅ Live',
        },
        {
          Project: 'Cloud Microservices',
          Tech: 'Node.js, Docker, AWS',
          Users: '10k+',
          Status: '✅ Live',
        },
        {
          Project: 'AI Robotics Guide',
          Tech: 'Python, TensorFlow, ROS',
          Users: '500+ downloads',
          Status: '📚 Published',
        },
      ]);
      console.log('');
      console.log('%cScroll down to see them all!', 'color: #fbbf24;');
    },
  },
  contact: {
    description: 'Get contact information',
    action: () => {
      console.log('%c📬 Contact Information', 'font-size: 16px; font-weight: bold; color: #10b981;');
      console.log('');
      console.log('%c📧 Email:%c hamzasajjad2032009@gmail.com', 'font-weight: bold; color: #14b8a6;', 'color: #fff;');
      console.log('%c💼 LinkedIn:%c linkedin.com/in/hamza', 'font-weight: bold; color: #14b8a6;', 'color: #fff;');
      console.log('%c🐙 GitHub:%c github.com/hamza-stack404', 'font-weight: bold; color: #14b8a6;', 'color: #fff;');
      console.log('');
      console.log('%c💡 Available for new projects!', 'color: #10b981; font-weight: bold;');
    },
  },
  tech: {
    description: 'View tech stack details',
    action: () => {
      console.log('%c⚙️ Technology Stack', 'font-size: 16px; font-weight: bold; color: #10b981;');
      console.log('');
      console.log('%cThis portfolio is built with:', 'color: #fbbf24;');
      console.table({
        Framework: 'Next.js 16',
        Styling: 'Tailwind CSS v4',
        Animations: 'Framer Motion + GSAP',
        '3D Graphics': 'Three.js + React Three Fiber',
        'Smooth Scroll': 'Lenis',
        Performance: '95+ Lighthouse Score',
      });
    },
  },
  secrets: {
    description: '🤫 Find hidden features',
    action: () => {
      console.log('%c🎮 Secret Commands', 'font-size: 16px; font-weight: bold; color: #10b981;');
      console.log('');
      console.log('%c1.%c Konami Code: ↑↑↓↓←→←→BA', 'font-weight: bold; color: #14b8a6;', 'color: #fff;');
      console.log('%c2.%c Type "hireme" anywhere on the page', 'font-weight: bold; color: #14b8a6;', 'color: #fff;');
      console.log('%c3.%c Click the logo 5 times', 'font-weight: bold; color: #14b8a6;', 'color: #fff;');
      console.log('%c4.%c Scroll to 50% for a surprise', 'font-weight: bold; color: #14b8a6;', 'color: #fff;');
      console.log('');
      console.log('%c🎉 Good luck finding them all!', 'color: #fbbf24; font-style: italic;');
    },
  },
  source: {
    description: 'View source code',
    action: () => {
      console.log('%c💻 Source Code', 'font-size: 16px; font-weight: bold; color: #10b981;');
      console.log('');
      console.log('%cThis portfolio is open source!', 'color: #fff;');
      console.log('');
      console.log('%c🐙 GitHub:%c github.com/hamza-stack404', 'font-weight: bold; color: #14b8a6;', 'color: #fff;');
      console.log('');
      console.log('%c⭐ Star it if you like it!', 'color: #fbbf24;');
    },
  },
};

export function ConsoleEnhancement() {
  useEffect(() => {
    // Print ASCII logo
    console.log('%c' + ASCII_LOGO, 'color: #10b981; font-family: monospace;');

    console.log('');
    console.log(
      '%c👋 Welcome to my portfolio!',
      'font-size: 20px; font-weight: bold; color: #10b981;'
    );
    console.log('');
    console.log(
      '%cI see you\'re a fellow developer! 👨‍💻',
      'font-size: 14px; color: #14b8a6;'
    );
    console.log('');
    console.log(
      '%cType %chelp.help()%c in the console to see available commands.',
      'color: #fff;',
      'color: #fbbf24; font-weight: bold; background: #1f2937; padding: 2px 6px; border-radius: 4px;',
      'color: #fff;'
    );
    console.log('');
    console.log('%c💡 Pro tip: Try the Konami Code! ↑↑↓↓←→←→BA', 'color: #fbbf24; font-style: italic;');
    console.log('');
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #374151;');
    console.log('');

    // Build info
    console.log('%c🔧 Build Information', 'font-size: 14px; font-weight: bold; color: #10b981;');
    console.table({
      Version: '2.0.0',
      'Build Date': new Date().toLocaleDateString(),
      Environment: process.env.NODE_ENV,
      'Next.js': '16.1.6',
      React: '19.2.3',
    });
    console.log('');

    // Make commands globally available
    (window as any).help = COMMANDS;

    // Add custom styling for errors
    const originalError = console.error;
    console.error = (...args) => {
      console.log('%c❌ Error:', 'color: #ef4444; font-weight: bold;');
      originalError.apply(console, args);
    };

    // Add custom styling for warnings
    const originalWarn = console.warn;
    console.warn = (...args) => {
      console.log('%c⚠️ Warning:', 'color: #f59e0b; font-weight: bold;');
      originalWarn.apply(console, args);
    };

    return () => {
      console.error = originalError;
      console.warn = originalWarn;
    };
  }, []);

  return null;
}
