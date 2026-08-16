'use client';

import { useEffect } from 'react';
import { Navigation } from '@/components/navigation/Navigation';
import { Footer } from '@/components/footer/Footer';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main
        id="main-content"
        className="flex-grow flex flex-col items-center justify-center text-center px-4"
      >
        <h1 className="text-3xl font-bold text-red-500 mb-4">
          Something went wrong!
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-md">
          {error.message || 'An unexpected error occurred. Please try again later.'}
        </p>
        <Button onClick={() => reset()} size="lg">
          Try Again
        </Button>
      </main>
      <Footer />
    </div>
  );
}
