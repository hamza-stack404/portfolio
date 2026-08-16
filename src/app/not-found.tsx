import { Navigation } from '@/components/navigation/Navigation';
import { Footer } from '@/components/footer/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main
        id="main-content"
        className="flex-grow flex flex-col items-center justify-center text-center px-4"
      >
        <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-3xl font-semibold mt-4 mb-2">Page Not Found</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-md">
          Sorry, we couldn&apos;t find the page you were looking for. It might have been
          moved, deleted, or maybe you just mistyped the URL.
        </p>
        <Button asChild size="lg">
          <Link href="/">Go Back Home</Link>
        </Button>
      </main>
      <Footer />
    </div>
  );
}
