'use client';

import { Navigation } from '@/components/navigation/Navigation';
import { Footer } from '@/components/footer/Footer';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main
        id="main-content"
        className="flex-grow flex flex-col items-center justify-center text-center px-4 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-9xl font-bold text-primary-600 dark:text-primary-400 mb-4 animate-bounce">
            404
          </h1>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
            Lost in the Digital Void
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-md mx-auto">
            Looks like this page took a wrong turn in the codebase.
            Even the best developers get 404s sometimes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary group">
              <Home className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-secondary group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </button>
          </div>

          <p className="mt-8 text-sm text-neutral-500 dark:text-neutral-500">
            Error Code: <code className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-primary-600 dark:text-primary-400">HTTP_404_NOT_FOUND</code>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
