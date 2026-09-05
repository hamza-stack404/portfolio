// Font loading utility to prevent FOUT (Flash of Unstyled Text)
export function optimizeFontLoading() {
  if (typeof document === 'undefined') return;

  // Check if fonts are already loaded
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      document.documentElement.classList.add('fonts-loaded');
    });
  }

  // Fallback for browsers without Font Loading API
  if (!('fonts' in document)) {
    window.addEventListener('load', () => {
      document.documentElement.classList.add('fonts-loaded');
    });
  }
}

// Preload critical fonts
export function preloadFonts(fontUrls: string[]) {
  if (typeof document === 'undefined') return;

  fontUrls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    link.href = url;
    document.head.appendChild(link);
  });
}

// Check if a font is loaded
export async function isFontLoaded(fontFamily: string): Promise<boolean> {
  if (typeof document === 'undefined' || !document.fonts) {
    return false;
  }

  try {
    await document.fonts.load(`1rem ${fontFamily}`);
    return document.fonts.check(`1rem ${fontFamily}`);
  } catch (error) {
    console.error(`Failed to load font: ${fontFamily}`, error);
    return false;
  }
}

// Wait for all fonts to load with timeout
export function waitForFonts(timeout: number = 3000): Promise<void> {
  if (typeof document === 'undefined' || !document.fonts) {
    return Promise.resolve();
  }

  return Promise.race([
    document.fonts.ready.then(() => {}),
    new Promise<void>((resolve) => setTimeout(resolve, timeout)),
  ]);
}
