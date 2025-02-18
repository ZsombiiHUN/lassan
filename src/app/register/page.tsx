'use client';

import { useState } from 'react';
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
}

export default function RegisterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
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
        username: 'Hiba történt a regisztráció során. Kérjük, próbáld újra később.',
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Fiók létrehozása
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          Már van fiókod?{' '}
          <Link
            href="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            Jelentkezz be
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Felhasználónév
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  disabled={isLoading}
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className={`block w-full appearance-none rounded-md border ${
                    errors.username ? 'border-red-300' : 'border-gray-300 dark:border-gray-600'
                  } px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-700 dark:text-white sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed`}
                />
                {errors.username && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.username}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="displayName"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Megjelenítendő név
              </label>
              <div className="mt-1">
                <input
                  id="displayName"
                  name="displayName"
                  type="text"
                  required
                  disabled={isLoading}
                  value={formData.displayName}
                  onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                  className={`block w-full appearance-none rounded-md border ${
                    errors.displayName ? 'border-red-300' : 'border-gray-300 dark:border-gray-600'
                  } px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-700 dark:text-white sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed`}
                />
                {errors.displayName && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.displayName}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Jelszó
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  disabled={isLoading}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className={`block w-full appearance-none rounded-md border ${
                    errors.password ? 'border-red-300' : 'border-gray-300 dark:border-gray-600'
                  } px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-700 dark:text-white sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed`}
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.password}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Jelszó megerősítése
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  disabled={isLoading}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className={`block w-full appearance-none rounded-md border ${
                    errors.confirmPassword ? 'border-red-300' : 'border-gray-300 dark:border-gray-600'
                  } px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-700 dark:text-white sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed`}
                />
                {errors.confirmPassword && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Regisztráció...' : 'Regisztráció'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 