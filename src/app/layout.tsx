import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = localFont({
  src: '../fonts/Inter-Variable.woff2',
  variable: '--font-inter',
  display: 'swap',
});

// Using Google Fonts for JetBrains Mono as a fallback because of download issues.
// To use local fonts for JetBrains Mono:
// 1. Add the font file to the `src/fonts` directory.
// 2. Uncomment the localFont definition below.
// 3. Comment out the Google Fonts definition below.
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});
// const jetbrainsMono = localFont({
//   src: '../fonts/JetBrainsMono-Variable.woff2',
//   variable: '--font-jetbrains-mono',
//   display: 'swap',
// });

export const metadata: Metadata = {
  title: {
    default: "Muhammad Hamza - Full-Stack Developer Portfolio",
    template: "%s | Muhammad Hamza",
  },
  description:
    "Full-Stack Developer specializing in React, Next.js, TypeScript, and Node.js. Building exceptional digital experiences with modern technologies.",
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Web Development",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Muhammad Hamza" }],
  creator: "Muhammad Hamza",
  publisher: "Muhammad Hamza",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hamzadev.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hamzadev.com/",
    title: "Muhammad Hamza - Full-Stack Developer Portfolio",
    description:
      "Full-Stack Developer specializing in React, Next.js, TypeScript, and Node.js. Building exceptional digital experiences.",
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
    title: "Muhammad Hamza - Full-Stack Developer Portfolio",
    description:
      "Full-Stack Developer specializing in React, Next.js, TypeScript, and Node.js.",
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
    <html lang="en" suppressHydrationWarning>
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
      return 'light';
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
        <meta name="theme-color" content="#6366f1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Hamza",
              jobTitle: "Full-Stack Developer",
              url: "https://hamzadev.com",
              sameAs: [
                "https://github.com/hamza-stack404",
                "https://linkedin.com/in/hamza",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Docker",
                "Kubernetes",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary-600 focus:text-white"
        >
          Skip to content
        </a>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
