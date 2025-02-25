'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './theme-toggle';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 custom-transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                Lassan!
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/leaderboard" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium custom-transition-colors">
              Ranglista
            </Link>
            <Link href="/download" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium custom-transition-colors">
              Letöltés
            </Link>
            <Link href="/login" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium custom-transition-colors">
              Bejelentkezés
            </Link>
            <Link 
              href="/register" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-5 py-2 rounded-full font-medium custom-transition-all shadow-md hover:shadow-lg active:shadow-sm"
            >
              Regisztráció
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay - Fixed position with proper z-index */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-0 left-0 w-full h-full bg-white dark:bg-gray-900 z-40 flex flex-col">
          <div className="flex justify-between items-center h-16 px-4 border-b border-gray-200 dark:border-gray-700">
            <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Lassan!
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 space-y-8 text-xl">
            <Link 
              href="/leaderboard"
              className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Ranglista
            </Link>
            <Link 
              href="/download"
              className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Letöltés
            </Link>
            <Link 
              href="/login"
              className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Bejelentkezés
            </Link>
            <Link 
              href="/register"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium shadow-md"
              onClick={() => setIsOpen(false)}
            >
              Regisztráció
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}; 