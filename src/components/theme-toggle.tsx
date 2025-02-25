'use client';

import { useTheme } from './theme-provider';
import { useState, useEffect } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);
  
  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 custom-transition-colors dark:bg-gray-800/10 dark:hover:bg-gray-800/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:focus-visible:ring-indigo-400"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative h-5 w-5">
        {/* Sun */}
        <span 
          className={`absolute inset-0 rotate-0 transform text-black custom-transition-all duration-300 dark:-rotate-90 dark:scale-0 dark:text-white`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        </span>
        
        {/* Moon */}
        <span 
          className={`absolute inset-0 rotate-90 transform text-black custom-transition-all duration-300 dark:rotate-0 dark:scale-100 dark:text-white ${theme === 'dark' ? 'scale-100' : 'scale-0'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </span>
      </div>
    </button>
  );
} 