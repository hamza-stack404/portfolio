export function smoothScrollTo(targetId: string) {
  const element = document.getElementById(targetId);

  if (!element) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    element.scrollIntoView();
  } else {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

export function scrollToTop() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    window.scrollTo(0, 0);
  } else {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
