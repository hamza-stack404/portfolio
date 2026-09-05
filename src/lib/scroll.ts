/**
 * Smoothly scrolls to a section by ID.
 * Works with both native scroll and Lenis.
 */
export function scrollToSection(id: string): void {
  // Remove leading # if present
  const cleanId = id.startsWith('#') ? id.slice(1) : id;
  const element = document.getElementById(cleanId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/** Alias kept for backwards-compatibility with older components. */
export const smoothScrollTo = scrollToSection;

/**
 * Scrolls to the top of the page.
 */
export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
