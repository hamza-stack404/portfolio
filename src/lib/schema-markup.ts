// JSON-LD Schema Markup for SEO

export interface PersonSchema {
  name: string;
  jobTitle: string;
  url: string;
  email: string;
  image: string;
  sameAs: string[];
  address?: {
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
}

export function generatePersonSchema(data: PersonSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: data.name,
    jobTitle: data.jobTitle,
    url: data.url,
    email: data.email,
    image: data.image,
    sameAs: data.sameAs,
    ...(data.address && {
      address: {
        "@type": "PostalAddress",
        addressLocality: data.address.addressLocality,
        addressRegion: data.address.addressRegion,
        addressCountry: data.address.addressCountry,
      },
    }),
  };
}

export interface WebsiteSchema {
  name: string;
  url: string;
  description: string;
  author: {
    name: string;
  };
}

export function generateWebsiteSchema(data: WebsiteSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: data.name,
    url: data.url,
    description: data.description,
    author: {
      "@type": "Person",
      name: data.author.name,
    },
  };
}

export interface ProjectSchema {
  name: string;
  description: string;
  url?: string;
  image?: string;
  author: {
    name: string;
  };
  dateCreated: string;
  keywords: string[];
}

export function generateProjectSchema(data: ProjectSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: data.name,
    description: data.description,
    ...(data.url && { url: data.url }),
    ...(data.image && { image: data.image }),
    author: {
      "@type": "Person",
      name: data.author.name,
    },
    dateCreated: data.dateCreated,
    keywords: data.keywords.join(", "),
  };
}

export interface BlogPostSchema {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: {
    name: string;
  };
  publisher: {
    name: string;
    logo: string;
  };
}

export function generateBlogPostSchema(data: BlogPostSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: data.headline,
    description: data.description,
    image: data.image,
    datePublished: data.datePublished,
    dateModified: data.dateModified,
    author: {
      "@type": "Person",
      name: data.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: data.publisher.name,
      logo: {
        "@type": "ImageObject",
        url: data.publisher.logo,
      },
    },
  };
}

// Helper to get schema as JSON string for injection
export function getSchemaString(schema: object): string {
  return JSON.stringify(schema);
}
