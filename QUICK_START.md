# Quick Start Guide

Get your portfolio running in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

If you encounter issues, try:
```bash
npm install --legacy-peer-deps
```

## Step 2: Install Missing Package

```bash
npm install class-variance-authority
```

## Step 3: Create Environment File

```bash
cp .env.example .env.local
```

Edit `.env.local` (optional for now):
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FORMSPREE_ID=your-formspree-id
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Step 4: Start Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Step 5: Customize Your Content

### Update Your Name
File: `components/hero/HeroSection.tsx` (Line 35)
```typescript
<AnimatedText text="Hi, I'm [Your Name]" />
```

### Update Your Bio
File: `components/about/ProfessionalBio.tsx` (Lines 40-60)

### Add Your Projects
File: `components/projects/ProjectsGrid.tsx` (Lines 10-100)

### Update Contact Info
File: `components/contact/ContactSection.tsx` (Lines 50-80)

## Common Issues

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### Build Errors
```bash
npm run type-check
```

### Styling Issues
```bash
npm run dev
# Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
```

## Next Steps

1. ✅ Customize all content with your information
2. ✅ Add your project images to `/public/projects/`
3. ✅ Test all features locally
4. ✅ Follow TESTING_CHECKLIST.md
5. ✅ Deploy using DEPLOYMENT_GUIDE.md

## Need Help?

- Check README.md for detailed documentation
- Review PROJECT_SUMMARY.md for overview
- See IMPLEMENTATION_STATUS.md for what's built

Happy coding! 🚀
