import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Default GSAP config for smooth animations
gsap.config({
  force3D: true,
  nullTargetWarn: false,
});

// ScrollTrigger defaults
ScrollTrigger.defaults({
  markers: false, // Set to true for debugging
});

export { gsap, ScrollTrigger };

// Utility: Fade in animation
export const fadeIn = (element: gsap.TweenTarget, options = {}) => {
  return gsap.from(element, {
    opacity: 0,
    y: 60,
    duration: 1,
    ease: 'power3.out',
    ...options,
  });
};

// Utility: Fade in with stagger
export const fadeInStagger = (elements: gsap.TweenTarget, options = {}) => {
  return gsap.from(elements, {
    opacity: 0,
    y: 60,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
    ...options,
  });
};

// Utility: Scale in animation
export const scaleIn = (element: gsap.TweenTarget, options = {}) => {
  return gsap.from(element, {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: 'back.out(1.4)',
    ...options,
  });
};

// Utility: Slide in from direction
export const slideIn = (
  element: gsap.TweenTarget,
  direction: 'left' | 'right' | 'top' | 'bottom' = 'bottom',
  options = {}
) => {
  const directions = {
    left: { x: -100 },
    right: { x: 100 },
    top: { y: -100 },
    bottom: { y: 100 },
  };

  return gsap.from(element, {
    ...directions[direction],
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    ...options,
  });
};

// Utility: Parallax effect
export const createParallax = (
  element: gsap.TweenTarget,
  speed: number = 0.5,
  options = {}
) => {
  return gsap.to(element, {
    y: () => window.innerHeight * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element as gsap.DOMTarget,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      ...options,
    },
  });
};

// Utility: Split text animation (requires splitting.js)
export const splitTextReveal = (
  element: gsap.TweenTarget,
  options = {}
) => {
  return gsap.from(element, {
    opacity: 0,
    y: 100,
    rotateX: -90,
    stagger: 0.02,
    duration: 0.8,
    ease: 'power3.out',
    ...options,
  });
};

// Refresh ScrollTrigger (call after DOM changes)
export const refreshScrollTrigger = () => {
  if (typeof window !== 'undefined') {
    ScrollTrigger.refresh();
  }
};

// Kill all ScrollTrigger instances
export const killScrollTriggers = () => {
  if (typeof window !== 'undefined') {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }
};
