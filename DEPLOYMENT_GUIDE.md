# Deployment Guide

## Phase 11: Deployment and Final Configuration

### Prerequisites
- [ ] All testing completed (Phase 10)
- [ ] All critical issues fixed
- [ ] Environment variables configured
- [ ] Custom domain purchased (optional)
- [ ] Git repository created

### T101: Create Production Build

1. **Install dependencies** (if not already done):
```bash
npm install
```

2. **Run production build**:
```bash
npm run build
```

3. **Verify build success**:
- Check for any build errors
- Review build output for warnings
- Verify bundle sizes are reasonable

4. **Test production build locally**:
```bash
npm run start
```
- Open http://localhost:3000
- Test all functionality
- Check for console errors

### T102: Configure Deployment for Vercel

#### Option 1: Deploy via Vercel Dashboard

1. **Push code to GitHub**:
```bash
git add .
git commit -m "Initial portfolio deployment"
git push origin main
```

2. **Import project in Vercel**:
- Go to https://vercel.com
- Click "Add New Project"
- Import your GitHub repository
- Configure project settings

3. **Set environment variables**:
- Add `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- Add `NEXT_PUBLIC_FORMSPREE_ID`
- Add `NEXT_PUBLIC_SITE_URL`

4. **Deploy**:
- Click "Deploy"
- Wait for deployment to complete
- Test deployed site

#### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel
```

4. **Deploy to production**:
```bash
vercel --prod
```

### T103: Set Up Custom Domain

1. **Add domain in Vercel**:
- Go to Project Settings → Domains
- Add your custom domain
- Follow DNS configuration instructions

2. **Configure DNS**:
- Add A record or CNAME record as instructed
- Wait for DNS propagation (can take up to 48 hours)

3. **Verify domain**:
- Check domain status in Vercel dashboard
- Test site at custom domain

### T104: Verify SSL Certificate

- [ ] HTTPS is enabled automatically by Vercel
- [ ] Certificate is valid (check browser address bar)
- [ ] No mixed content warnings
- [ ] All resources load over HTTPS
- [ ] HTTP redirects to HTTPS

### T105: Configure Google Analytics 4

1. **Create GA4 property**:
- Go to https://analytics.google.com
- Create new property
- Get Measurement ID (G-XXXXXXXXXX)

2. **Add to environment variables**:
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

3. **Redeploy with new environment variable**

4. **Verify tracking**:
- Visit your site
- Check Real-Time reports in GA4
- Verify events are being tracked

5. **Set up goals/conversions**:
- Contact form submissions
- Project views
- Resume downloads
- External link clicks

### T106: Set Up Performance Monitoring

#### Vercel Analytics (Recommended)

1. **Enable in Vercel dashboard**:
- Go to Project Settings → Analytics
- Enable Web Analytics
- Enable Speed Insights

2. **Add to your app** (optional for enhanced tracking):
```bash
npm install @vercel/analytics
```

Add to `layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

#### Core Web Vitals Tracking

Already configured in `lib/analytics.ts`:
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- First Input Delay (FID)
- Time to First Byte (TTFB)

### T107: Implement Error Monitoring

#### Option 1: Sentry (Recommended)

1. **Install Sentry**:
```bash
npm install @sentry/nextjs
```

2. **Initialize Sentry**:
```bash
npx @sentry/wizard@latest -i nextjs
```

3. **Configure environment variables**:
```bash
NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn
```

#### Option 2: LogRocket

1. **Install LogRocket**:
```bash
npm install logrocket
```

2. **Initialize in app**

### T108: Test Deployed Site

- [ ] Visit production URL
- [ ] Test all pages and sections
- [ ] Verify all links work
- [ ] Test contact form submission
- [ ] Check mobile responsiveness
- [ ] Verify theme switching
- [ ] Test project filtering
- [ ] Check analytics tracking
- [ ] Verify SEO meta tags (view source)
- [ ] Test social sharing (Twitter, LinkedIn)
- [ ] Check Open Graph preview
- [ ] Verify sitemap.xml is accessible
- [ ] Check robots.txt is accessible

### T109: Verify Forms and Interactive Elements

- [ ] Contact form submits successfully
- [ ] Form validation works
- [ ] Success/error messages display
- [ ] Email notifications received (if configured)
- [ ] Project modals open correctly
- [ ] Navigation works smoothly
- [ ] Theme toggle persists
- [ ] All buttons are functional
- [ ] External links open in new tabs

### T110: Document Deployment Process

Create `DEPLOYMENT.md` with:
- Deployment steps
- Environment variables needed
- Custom domain configuration
- Troubleshooting guide
- Rollback procedures
- Update procedures

## Post-Deployment Checklist

### Immediate (Day 1)
- [ ] Monitor error logs
- [ ] Check analytics for traffic
- [ ] Test from different devices
- [ ] Verify form submissions
- [ ] Check performance metrics

### Week 1
- [ ] Review analytics data
- [ ] Check Core Web Vitals
- [ ] Monitor error rates
- [ ] Collect user feedback
- [ ] Fix any reported issues

### Ongoing
- [ ] Weekly analytics review
- [ ] Monthly performance audit
- [ ] Regular content updates
- [ ] Security updates
- [ ] Dependency updates

## Troubleshooting

### Build Fails
- Check for TypeScript errors
- Verify all dependencies are installed
- Check for missing environment variables
- Review build logs for specific errors

### Deployment Fails
- Verify Git repository is accessible
- Check Vercel account permissions
- Review deployment logs
- Ensure build command is correct

### Site Not Loading
- Check DNS configuration
- Verify domain is correctly added
- Check for SSL certificate issues
- Review Vercel deployment status

### Analytics Not Working
- Verify GA4 Measurement ID is correct
- Check environment variables are set
- Ensure analytics script is loaded
- Check browser console for errors

### Forms Not Submitting
- Verify Formspree ID is correct
- Check CORS configuration
- Review browser console for errors
- Test with different browsers

## Maintenance

### Regular Updates
```bash
# Update dependencies
npm update

# Check for outdated packages
npm outdated

# Update Next.js
npm install next@latest

# Rebuild and test
npm run build
npm run start
```

### Content Updates
1. Update content in component files
2. Test locally
3. Commit changes
4. Push to GitHub
5. Vercel auto-deploys

### Performance Optimization
- Regularly run Lighthouse audits
- Optimize images as needed
- Review and remove unused code
- Monitor bundle sizes
- Update dependencies for performance improvements

## Backup and Recovery

### Backup Strategy
- Code is backed up in Git repository
- Vercel maintains deployment history
- Export analytics data regularly
- Keep local copy of environment variables

### Rollback Procedure
1. Go to Vercel dashboard
2. Navigate to Deployments
3. Find previous working deployment
4. Click "Promote to Production"

## Support Resources

- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- Community Forums: https://github.com/vercel/next.js/discussions
