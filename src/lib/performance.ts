// Request Animation Frame optimization
let rafId: number | null = null;
const rafCallbacks: Set<FrameRequestCallback> = new Set();

export function addRAFCallback(callback: FrameRequestCallback) {
  rafCallbacks.add(callback);

  if (!rafId) {
    const loop = (time: number) => {
      rafCallbacks.forEach(cb => cb(time));
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
  }

  return () => {
    rafCallbacks.delete(callback);
    if (rafCallbacks.size === 0 && rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  };
}

// Debounce function for resize events
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Check if element is in viewport
export function isInViewport(element: HTMLElement, offset: number = 0): boolean {
  if (!element) return false;

  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  return (
    rect.top <= windowHeight + offset &&
    rect.bottom >= -offset &&
    rect.left <= windowWidth + offset &&
    rect.right >= -offset
  );
}

// Lazy load images
export function lazyLoadImage(img: HTMLImageElement): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!img.dataset.src) {
      resolve();
      return;
    }

    const loadImage = () => {
      img.src = img.dataset.src!;
      img.onload = () => {
        img.classList.add('loaded');
        resolve();
      };
      img.onerror = reject;
    };

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            loadImage();
            observer.disconnect();
          }
        });
      }, {
        rootMargin: '50px',
      });

      observer.observe(img);
    } else {
      loadImage();
    }
  });
}

// Preload critical assets
export function preloadAssets(urls: string[]): Promise<void[]> {
  return Promise.all(
    urls.map(url => {
      return new Promise<void>((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = 'preload';

        if (url.endsWith('.woff2')) {
          link.as = 'font';
          link.type = 'font/woff2';
          link.crossOrigin = 'anonymous';
        } else if (url.match(/\.(jpg|jpeg|png|webp|avif)$/)) {
          link.as = 'image';
        }

        link.href = url;
        link.onload = () => resolve();
        link.onerror = () => reject(new Error(`Failed to preload: ${url}`));

        document.head.appendChild(link);
      });
    })
  );
}

// Get device info
export function getDeviceInfo() {
  const ua = navigator.userAgent;

  return {
    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua),
    isTablet: /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua),
    isDesktop: !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)),
    hasTouch: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
    hasHover: window.matchMedia('(hover: hover)').matches,
    prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  };
}

// Monitor performance
export function monitorPerformance() {
  if (typeof window === 'undefined' || !window.performance) return null;

  const perfData = window.performance.timing;
  const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
  const connectTime = perfData.responseEnd - perfData.requestStart;
  const renderTime = perfData.domComplete - perfData.domLoading;

  return {
    pageLoadTime,
    connectTime,
    renderTime,
    dnsTime: perfData.domainLookupEnd - perfData.domainLookupStart,
    tcpTime: perfData.connectEnd - perfData.connectStart,
  };
}

// Will-change optimization
export function optimizeWillChange(element: HTMLElement, properties: string[]) {
  element.style.willChange = properties.join(', ');

  // Remove will-change after animation
  return () => {
    setTimeout(() => {
      element.style.willChange = 'auto';
    }, 1000);
  };
}
