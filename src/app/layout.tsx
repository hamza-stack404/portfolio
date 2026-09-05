import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { SmoothScrollProvider } from "@/contexts/SmoothScrollContext";
import { LoadingScreen, PerformanceMonitor } from "@/components/ui/Loading";
import { AdvancedCursor } from "@/components/ui/AdvancedCursor";
import { PageScrollProgress } from "@/components/ui/ScrollProgressIndicators";
import { KonamiCodeDetector, HireMeEasterEgg } from "@/components/ui/KonamiCode";
import { ConsoleEnhancement } from "@/components/ui/ConsoleEnhancement";
import { MobileBottomNav, FloatingActionButton } from "@/components/mobile/MobileNavigation";

const inter = localFont({
  src: '../fonts/Inter-Variable.woff2',
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

// Using system monospace fonts for Phase 1
// Will add custom monospace font in later phases
const monoFont = {
  variable: '--font-jetbrains-mono',
};

export const metadata: Metadata = {
  title: {
    default: "Muhammad Hamza - Full-Stack Developer | Award-Winning Portfolio",
    template: "%s | Muhammad Hamza",
  },
  description:
    "Award-winning portfolio showcasing high-performance web applications built with React, Next.js, TypeScript, and cutting-edge web technologies.",
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Next.js Expert",
    "TypeScript",
    "Node.js",
    "Award-Winning Portfolio",
    "Web Development",
    "GSAP Animations",
    "3D Web Experiences",
    "Performance Optimization",
  ],
  authors: [{ name: "Muhammad Hamza", url: "https://hamzadev.com" }],
  creator: "Muhammad Hamza",
  publisher: "Muhammad Hamza",
  metadataBase: new URL("https://hamzadev.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hamzadev.com/",
    title: "Muhammad Hamza - Award-Winning Full-Stack Developer",
    description:
      "Experience cutting-edge web development with seamless animations and interactive 3D experiences.",
    siteName: "Muhammad Hamza Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Hamza - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hamza - Award-Winning Developer",
    description:
      "Building exceptional digital experiences with React, Next.js, and modern web technologies.",
    creator: "@hamza-stack404",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="lenis">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  function getInitialTheme() {
    try {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) return storedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch (e) {
      return 'dark';
    }
  }
  const theme = getInitialTheme();
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  }
})()
    `,
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#047857" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Hamza",
              jobTitle: "Full-Stack Developer",
              url: "https://hamzadev.com",
              email: "hamzasajjad2032009@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Karachi",
                addressCountry: "PK",
              },
              sameAs: [
                "https://github.com/hamza-stack404",
                "https://linkedin.com/in/muhammad-hamza-stack",
                "https://x.com/hamza-stack404",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "GSAP",
                "Three.js",
                "Web Performance",
                "Docker",
                "Kubernetes",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${monoFont.variable} font-sans antialiased`}
      >
        {/* Skip to main content — required for keyboard accessibility (WCAG 2.4.1) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-medium focus:shadow-lg"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <SmoothScrollProvider>
            <LoadingScreen />
            <AdvancedCursor />
            <PageScrollProgress />
            <KonamiCodeDetector />
            <HireMeEasterEgg />
            <ConsoleEnhancement />
            <MobileBottomNav />
            <FloatingActionButton />
            {children}
            <PerformanceMonitor />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
