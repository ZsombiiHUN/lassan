import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-indigo-600">404</h1>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        Az oldal nem található
      </h2>
      <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
        Sajnáljuk, a keresett oldal nem található vagy már nem létezik.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Vissza a főoldalra
      </Link>
    </div>
  );
} 