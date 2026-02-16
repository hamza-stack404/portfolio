# Portfolio Website Quickstart Guide

## Development Setup

### Prerequisites
- Node.js 18+ LTS
- npm or yarn package manager
- Git version control

### Installation Steps

1. **Clone and initialize the project:**
```bash
npm create next-app@latest portfolio
cd portfolio
```

2. **Install dependencies:**
```bash
npm install framer-motion tailwindcss autoprefixer postcss lucide-react clsx tailwind-merge
npm install --save-dev @types/react @types/node eslint-config-next
```

3. **Initialize Tailwind CSS:**
```bash
npx tailwindcss init -p
```

4. **Configure Tailwind CSS** (`tailwind.config.js`):
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#0f172a',
        },
        secondary: {
          500: '#0ea5e9',
          900: '#0c4a6e',
        },
        accent: {
          500: '#8b5cf6',
          900: '#581c87',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
```

5. **Set up global styles** (`app/globals.css`):
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 0, 0, 0;
    --background-end-rgb: 0, 0, 0;
  }
}

body {
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb));
}
```

6. **Start development server:**
```bash
npm run dev
```

## Key Scripts

### Development
```bash
npm run dev          # Start development server
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run linter
```

### Additional Commands
```bash
npx eslint . --fix   # Auto-fix linting issues
npx prettier --write . # Format all files
```

## Folder Structure
```
portfolio/
├── app/                 # Next.js 13+ App Router
│   ├── components/      # Reusable components
│   ├── lib/            # Utilities and helpers
│   ├── public/         # Static assets
│   └── globals.css     # Global styles
├── components/         # UI components
│   ├── ui/            # Base UI components
│   ├── hero/          # Hero section components
│   ├── about/         # About section components
│   ├── projects/      # Projects section components
│   └── contact/       # Contact section components
├── hooks/             # Custom React hooks
├── contexts/          # React Context providers
├── styles/            # Additional style files
├── types/             # TypeScript type definitions
├── package.json
└── tailwind.config.js
```

## Environment Variables

Create `.env.local` file:
```env
# Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Contact Form (choose one)
CONTACT_FORM_SERVICE=formspree
CONTACT_FORM_ENDPOINT=your-formspree-endpoint

# Content Management (optional)
CMS_API_URL=your-cms-url
CMS_TOKEN=your-cms-token
```

## Development Workflow

1. **Feature Development:**
   - Create feature branch: `git checkout -b feature/new-component`
   - Develop and test components
   - Run `npm run lint` and `npm run build` to ensure everything works
   - Submit pull request for review

2. **Component Development:**
   - Create component in appropriate directory
   - Add proper TypeScript interfaces
   - Include Storybook stories if applicable
   - Test responsiveness and accessibility

3. **Performance Testing:**
   - Run `npm run build` to ensure production build works
   - Use Chrome DevTools to measure Core Web Vitals
   - Test on various devices and network conditions

## Deployment

### Vercel (Recommended)
1. Push code to GitHub/GitLab/Bitbucket
2. Connect repository to Vercel
3. Configure build settings:
   - Build Command: `next build`
   - Output Directory: `out`
   - Development Command: `npm run dev`

### Alternative Hosting
- Netlify: Place `netlify.toml` in root with build configuration
- AWS Amplify: Configure build settings in Amplify Console
- Custom server: Run `npm run start` after build