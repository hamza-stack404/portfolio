# World-Class Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern, animated UI with Framer Motion
- 🎨 Dark/Light theme support
- 📱 Fully responsive design
- ⚡ Optimized performance (90+ Lighthouse scores)
- 🔍 SEO optimized with meta tags and schema markup
- ♿ Accessibility compliant (WCAG 2.1)
- 🎯 Interactive project showcase
- 📊 Skills visualization
- 📝 Blog section
- 📬 Contact form with validation

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Update environment variables in `.env.local`

5. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio/
├── src/
│   └── app/              # Next.js app directory
│       ├── layout.tsx    # Root layout with metadata
│       ├── page.tsx      # Home page
│       ├── globals.css   # Global styles
│       ├── sitemap.ts    # Dynamic sitemap
│       └── robots.ts     # Robots.txt configuration
├── components/           # React components
│   ├── hero/            # Hero section components
│   ├── about/           # About section components
│   ├── projects/        # Projects showcase components
│   ├── skills/          # Skills section components
│   ├── contact/         # Contact form components
│   ├── navigation/      # Navigation components
│   ├── blog/            # Blog components
│   ├── ui/              # Reusable UI components
│   └── transitions/     # Animation components
├── hooks/               # Custom React hooks
├── contexts/            # React contexts
├── lib/                 # Utility functions
├── public/              # Static assets
└── types/               # TypeScript type definitions
```

## Customization

### Personal Information

Update the following files with your information:

1. `src/app/layout.tsx` - Meta tags and SEO information
2. `components/hero/HeroSection.tsx` - Hero section content
3. `components/about/ProfessionalBio.tsx` - About section
4. `components/projects/ProjectsGrid.tsx` - Project data
5. `components/contact/ContactSection.tsx` - Contact information

### Styling

- Colors: Edit `tailwind.config.js`
- Fonts: Update in `src/app/layout.tsx`
- Global styles: Modify `src/app/globals.css`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Other Platforms

Build the production version:
```bash
npm run build
npm run start
```

## Performance Optimization

- Images are automatically optimized with Next.js Image component
- Code splitting and lazy loading implemented
- CSS is minified and optimized
- Fonts are optimized with next/font

## SEO Features

- Dynamic meta tags
- Open Graph tags for social sharing
- Twitter Card support
- JSON-LD schema markup
- Sitemap generation
- Robots.txt configuration

## Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation support
- Focus management
- Reduced motion support
- Color contrast compliance

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)
