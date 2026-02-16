import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yourportfolio.com';

  // Static pages
  const routes = ['', '/about', '/projects', '/skills', '/blog', '/contact'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
    })
  );

  // Add blog posts dynamically (example)
  const blogPosts = [
    'building-scalable-react-applications',
    'mastering-typescript-generics',
    'nextjs-15-whats-new',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...routes, ...blogPosts];
}
