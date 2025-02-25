'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface RegisterFormData {
  username: string;
  displayName: string;
  password: string;
  confirmPassword: string;
}

interface RegisterFormErrors {
  username: string;
  displayName: string;
  password: string;
  confirmPassword: string;
  general?: string;
}

export default function RegisterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [formData, setFormData] = useState<RegisterFormData>({
    username: '',
    displayName: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<RegisterFormErrors>({
    username: '',
    displayName: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      username: '',
      displayName: '',
      password: '',
      confirmPassword: '',
    };

    // Username validation
    if (formData.username.length < 3) {
      newErrors.username = 'A felhasználónévnek legalább 3 karakter hosszúnak kell lennie';
      isValid = false;
    } else if (!/^[a-zA-Z0-9_-]+$/.test(formData.username)) {
      newErrors.username = 'A felhasználónév csak betűket, számokat, kötőjelet és aláhúzást tartalmazhat';
      isValid = false;
    }

    // Display name validation
    if (formData.displayName.length < 2) {
      newErrors.displayName = 'A megjelenítendő névnek legalább 2 karakter hosszúnak kell lennie';
      isValid = false;
    }

    // Password validation
    if (formData.password.length < 8) {
      newErrors.password = 'A jelszónak legalább 8 karakter hosszúnak kell lennie';
      isValid = false;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'A jelszónak tartalmaznia kell kis- és nagybetűt, valamint számot';
      isValid = false;
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'A jelszavak nem egyeznek';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm() || isLoading) return;

    try {
      setIsLoading(true);
      
      // TODO: Implement API call here
      // const response = await fetch('/api/auth/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     username: formData.username,
      //     displayName: formData.displayName,
      //     password: formData.password,
      //   }),
      // });
      
      // if (!response.ok) throw new Error('Registration failed');
      
      // Redirect to login page after successful registration
      router.push('/login');
    } catch (error) {
      console.error('Registration error:', error);
      setErrors(prev => ({
        ...prev,
        general: 'Hiba történt a regisztráció során. Kérjük, próbáld újra később.',
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-[90vh] flex flex-col justify-center py-12 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-gray-950">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-950"></div>
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-300/20 to-indigo-300/20 dark:from-purple-900/10 dark:to-indigo-900/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-indigo-300/20 to-blue-300/20 dark:from-indigo-900/10 dark:to-blue-900/10 blur-3xl"></div>
      </div>

      <div className={`sm:mx-auto sm:w-full sm:max-w-md relative z-10 custom-transition-all duration-700 ${animationComplete ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-6'}`}>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Fiók létrehozása
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Már van fiókod?{' '}
            <Link
              href="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 custom-transition-colors"
            >
              Jelentkezz be
            </Link>
          </p>
        </div>
      </div>

      <div className={`mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10 custom-transition-all duration-700 delay-200 ${animationComplete ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}>
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm py-8 px-4 shadow-xl sm:rounded-xl sm:px-10 border border-gray-100 dark:border-gray-700">
          {errors.general && (
            <div className="mb-4 p-3 rounded-md bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-600 dark:text-red-400">{errors.general}</p>
                </div>
              </div>
            </div>
          )}
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Felhasználónév
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  disabled={isLoading}
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className={`block w-full pl-10 appearance-none rounded-md border ${
                    errors.username ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500'
                  } px-3 py-2 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 dark:bg-gray-700/70 dark:text-white sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed custom-transition-all`}
                  placeholder="johnsmith123"
                />
                {errors.username && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
              {errors.username && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.username}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="displayName"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Megjelenítendő név
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  id="displayName"
                  name="displayName"
                  type="text"
                  required
                  disabled={isLoading}
                  value={formData.displayName}
                  onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                  className={`block w-full pl-10 appearance-none rounded-md border ${
                    errors.displayName ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500'
                  } px-3 py-2 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 dark:bg-gray-700/70 dark:text-white sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed custom-transition-all`}
                  placeholder="John Smith"
                />
                {errors.displayName && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
              {errors.displayName && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.displayName}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Jelszó
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  disabled={isLoading}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className={`block w-full pl-10 appearance-none rounded-md border ${
                    errors.password ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500'
                  } px-3 py-2 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 dark:bg-gray-700/70 dark:text-white sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed custom-transition-all`}
                  placeholder="••••••••"
                />
                {errors.password && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
              {errors.password && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.password}</p>
              )}
              {!errors.password && (
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Legalább 8 karakter, egy nagybetű, egy kisbetű és egy szám.
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Jelszó megerősítése
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  disabled={isLoading}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className={`block w-full pl-10 appearance-none rounded-md border ${
                    errors.confirmPassword ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500'
                  } px-3 py-2 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 dark:bg-gray-700/70 dark:text-white sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed custom-transition-all`}
                  placeholder="••••••••"
                />
                {errors.confirmPassword && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
              {errors.confirmPassword && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                Elfogadom a <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">felhasználási feltételeket</a> és az <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">adatvédelmi irányelveket</a>
              </label>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="relative flex w-full justify-center rounded-md border border-transparent bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 py-2 px-4 text-sm font-medium text-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed custom-transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {isLoading && (
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
                {isLoading ? 'Regisztráció...' : 'Regisztráció'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 