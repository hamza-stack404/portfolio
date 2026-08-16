// Google Analytics 4 Integration

declare global {
  interface Window {
    gtag?: {
      (command: 'js', date: Date): void;
      (command: 'config', targetId: string, config?: Record<string, unknown>): void;
      (command: 'event', action: string, params?: Record<string, unknown>): void;
      (command: string, ...args: unknown[]): void;
    };
    dataLayer?: unknown[];
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return;

  // Load gtag.js script
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(...args);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
  });
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track contact form submissions
export const trackContactFormSubmission = (success: boolean) => {
  trackEvent(
    success ? 'form_submission_success' : 'form_submission_error',
    'Contact Form',
    success ? 'Success' : 'Error'
  );
};

// Track project views
export const trackProjectView = (projectTitle: string) => {
  trackEvent('view_project', 'Projects', projectTitle);
};

// Track external link clicks
export const trackExternalLink = (url: string, label: string) => {
  trackEvent('click_external_link', 'External Links', label);
};

// Track resume downloads
export const trackResumeDownload = (format: string) => {
  trackEvent('download_resume', 'Resume', format);
};

// Track social media clicks
export const trackSocialClick = (platform: string) => {
  trackEvent('click_social', 'Social Media', platform);
};

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll_depth', 'Engagement', `${percentage}%`, percentage);
};

// Track time on page
export const trackTimeOnPage = (seconds: number) => {
  trackEvent('time_on_page', 'Engagement', `${seconds}s`, seconds);
};
