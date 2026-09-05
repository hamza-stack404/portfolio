'use client';

import { useEffect, useRef, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Hook for fade in animation on scroll
export function useFadeIn(options: gsap.TweenVars = {}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const animation = gsap.from(element, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      ...options,
    });

    return () => {
      animation.kill();
    };
  }, [options]);

  return ref;
}

// Hook for stagger animation on children
export function useStaggerAnimation(options: { stagger?: number; delay?: number } = {}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const children = ref.current.children;

    const animation = gsap.from(children, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: options.stagger ?? 0.1,
      delay: options.delay ?? 0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    return () => {
      animation.kill();
    };
  }, [options.stagger, options.delay]);

  return ref;
}

// Hook for parallax effect
export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const animation = gsap.to(element, {
      y: () => window.innerHeight * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      animation.kill();
    };
  }, [speed]);

  return ref;
}

// Hook for scroll-triggered animation with custom timeline
export function useScrollAnimation(
  animationFn: (element: HTMLElement) => gsap.core.Timeline | gsap.core.Tween,
  deps: any[] = []
) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const animation = animationFn(ref.current);

    return () => {
      if (animation) {
        animation.kill();
      }
    };
  }, deps);

  return ref;
}

// Hook for hover animation
export function useHoverAnimation(
  hoverVars: gsap.TweenVars,
  restVars: gsap.TweenVars = {}
) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    let hoverTween: gsap.core.Tween;

    const handleMouseEnter = () => {
      hoverTween = gsap.to(element, {
        duration: 0.3,
        ease: 'power2.out',
        ...hoverVars,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        duration: 0.3,
        ease: 'power2.out',
        ...restVars,
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      if (hoverTween) hoverTween.kill();
    };
  }, [hoverVars, restVars]);

  return ref;
}

// Hook for scroll velocity
export function useScrollVelocity(callback: (velocity: number) => void) {
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastTime = Date.now();

    const handleScroll = () => {
      const currentTime = Date.now();
      const currentScrollY = window.scrollY;

      const deltaY = currentScrollY - lastScrollY;
      const deltaTime = currentTime - lastTime;

      const velocity = Math.abs(deltaY / deltaTime);

      callback(velocity);

      lastScrollY = currentScrollY;
      lastTime = currentTime;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [callback]);
}

// Hook to trigger animation when element enters viewport
export function useRevealOnScroll(options: ScrollTrigger.Vars = {}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: 'top 80%',
      onEnter: () => element.classList.add('is-revealed'),
      onLeaveBack: () => element.classList.remove('is-revealed'),
      ...options,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [options]);

  return ref;
}
