'use client';

import { useClientCheck } from '../hooks/useClientCheck';
import Link from 'next/link';

export default function NotFound() {
  const mounted = useClientCheck();

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <div className="space-y-4">
        <h1 className="text-6xl font-bold text-indigo-600">404</h1>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Az oldal nem található
        </h2>
        <p className="text-base text-gray-500 dark:text-gray-400 max-w-md mx-auto">
          {mounted && typeof window !== 'undefined' && localStorage.getItem('lastPath')
            ? `Nem található erőforrás: ${localStorage.getItem('lastPath')}`
            : 'A kért erőforrás nem található'}
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
          >
            Vissza a főoldalra
          </Link>
        </div>
      </div>
    </div>
  );
} 