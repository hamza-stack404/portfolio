// Global animation configuration
export const animationConfig = {
  // Timing
  duration: {
    instant: 0,
    fast: 0.3,
    normal: 0.6,
    slow: 1,
    verySlow: 1.5,
  },

  // Easing curves
  ease: {
    smooth: [0.25, 0.46, 0.45, 0.94],
    snappy: [0.4, 0, 0.2, 1],
    bounce: [0.68, -0.55, 0.265, 1.55],
    elastic: [0.87, 0, 0.13, 1],
    exponential: [0.95, 0.05, 0.795, 0.035],
  },

  // Stagger delays
  stagger: {
    tight: 0.05,
    normal: 0.1,
    loose: 0.2,
    veryLoose: 0.3,
  },

  // Scroll animation settings
  scroll: {
    start: 'top 80%',
    end: 'bottom 20%',
    scrub: true,
    toggleActions: 'play none none reverse',
  },

  // Parallax speeds
  parallax: {
    slow: 0.3,
    medium: 0.5,
    fast: 0.8,
  },

  // 3D transforms
  perspective: {
    near: 800,
    normal: 1200,
    far: 2000,
  },

  // Reduced motion overrides
  reducedMotion: {
    duration: 0.01,
    ease: 'linear',
    stagger: 0,
  },
};

// Helper to get animation config based on user preferences
export function getAnimationConfig(prefersReducedMotion: boolean) {
  if (prefersReducedMotion) {
    return {
      duration: animationConfig.reducedMotion.duration,
      ease: animationConfig.reducedMotion.ease,
      stagger: animationConfig.reducedMotion.stagger,
    };
  }

  return {
    duration: animationConfig.duration.normal,
    ease: animationConfig.ease.smooth,
    stagger: animationConfig.stagger.normal,
  };
}

// Breakpoints (matching Tailwind)
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

// Z-index layers
export const zIndex = {
  background: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  overlay: 1200,
  modal: 1300,
  popover: 1400,
  toast: 1500,
  tooltip: 1600,
  cursor: 9999,
  loading: 9999,
};
