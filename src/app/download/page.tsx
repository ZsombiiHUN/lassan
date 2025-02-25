'use client';

import { useClientCheck } from '../../hooks/useClientCheck';
import { useState, useEffect } from 'react';

export default function DownloadPage() {
  const mounted = useClientCheck();
  const [animationComplete, setAnimationComplete] = useState(false);
  const windowsDownloadUrl = "http://lassanstorage.netlify.app/Lassan!%20(v1.8.1b).zip";
  const linuxDownloadUrl = "http://lassanstorage.netlify.app/Lassan!%20(v1.8.1b).zip";

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Betöltés...
            </h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[85vh] overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-950"></div>
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-300/20 to-indigo-300/20 dark:from-purple-900/20 dark:to-indigo-900/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-indigo-300/20 to-blue-300/20 dark:from-indigo-900/20 dark:to-blue-900/20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24 relative z-10">
        <div className={`text-center custom-transition-all duration-700 ${animationComplete ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-6'}`}>
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4">
            Legfrissebb Verzió: v1.8.1b
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl mb-4">
            <span className="block">Lassan! Letöltése</span>
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
            Készülj fel egy kihívásokkal teli játékra, amely próbára teszi a sebességedet és pontosságodat.
          </p>
        </div>

        <div className={`mt-16 custom-transition-all duration-700 delay-200 ${animationComplete ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Windows Download */}
            <div className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-xl hover:shadow-2xl custom-transition-all transform hover:-translate-y-1 flex flex-col overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100/40 to-blue-100/30 dark:from-indigo-900/20 dark:to-blue-900/10 rounded-full -translate-y-1/3 translate-x-1/3 blur-2xl"></div>
              <div className="flex-1 relative">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Windows</h3>
                </div>
                <p className="text-base text-gray-600 dark:text-gray-300 mb-6">
                  Töltsd le a Lassan! játékot Windows operációs rendszerre. Könnyen telepíthető, nincs szükség bonyolult beállításokra.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Windows 7/8/10/11</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">64-bites processzor</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Automatikus frissítések</span>
                  </div>
                </div>
              </div>
              <div>
                <a
                  href={windowsDownloadUrl}
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl custom-transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  download
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Letöltés Windowsra
                </a>
              </div>
            </div>

            {/* Linux Download */}
            <div className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-xl hover:shadow-2xl custom-transition-all transform hover:-translate-y-1 flex flex-col overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100/40 to-pink-100/30 dark:from-purple-900/20 dark:to-pink-900/10 rounded-full -translate-y-1/3 translate-x-1/3 blur-2xl"></div>
              <div className="flex-1 relative">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Linux</h3>
                </div>
                <p className="text-base text-gray-600 dark:text-gray-300 mb-6">
                  Töltsd le a Lassan! játékot Linux operációs rendszerre. Wine szükséges a futtatáshoz, de egyszerű a telepítés.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Wine 5.0 vagy újabb</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">64-bites Linux disztribúció</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Terminál-barát telepítés</span>
                  </div>
                </div>
              </div>
              <div>
                <a
                  href={linuxDownloadUrl}
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl custom-transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  download
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Letöltés Linuxra
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* System Requirements */}
        <div className={`mt-20 custom-transition-all duration-700 delay-300 ${animationComplete ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}>
          <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-indigo-100/40 to-blue-100/30 dark:from-indigo-900/20 dark:to-blue-900/10 rounded-full -translate-y-1/3 -translate-x-1/3 blur-2xl"></div>
            <div className="relative">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
                Rendszerkövetelmények
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 mr-2 text-sm">Min</span>
                    Minimális követelmények
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex">
                      <svg className="h-5 w-5 text-indigo-500 dark:text-indigo-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">Operációs rendszer: Windows 7 vagy újabb / Linux Wine 5.0+</span>
                    </li>
                    <li className="flex">
                      <svg className="h-5 w-5 text-indigo-500 dark:text-indigo-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">Processzor: 1.5 GHz vagy gyorsabb</span>
                    </li>
                    <li className="flex">
                      <svg className="h-5 w-5 text-indigo-500 dark:text-indigo-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">Memória: 2 GB RAM</span>
                    </li>
                    <li className="flex">
                      <svg className="h-5 w-5 text-indigo-500 dark:text-indigo-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">Grafika: DirectX 9 kompatibilis videókártya</span>
                    </li>
                    <li className="flex">
                      <svg className="h-5 w-5 text-indigo-500 dark:text-indigo-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">Tárhely: 100 MB szabad hely</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 mr-2 text-sm">Rec</span>
                    Ajánlott követelmények
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex">
                      <svg className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">Operációs rendszer: Windows 10/11 vagy újabb / Linux Wine 7.0+</span>
                    </li>
                    <li className="flex">
                      <svg className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">Processzor: 2.0 GHz vagy gyorsabb</span>
                    </li>
                    <li className="flex">
                      <svg className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">Memória: 4 GB RAM</span>
                    </li>
                    <li className="flex">
                      <svg className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">Grafika: DirectX 11 kompatibilis videókártya</span>
                    </li>
                    <li className="flex">
                      <svg className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">Tárhely: 200 MB szabad hely</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notes Section */}
        <div className={`mt-8 custom-transition-all duration-700 delay-400 ${animationComplete ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}>
          <div className="rounded-xl bg-yellow-50 dark:bg-yellow-900/30 p-6 border border-yellow-100 dark:border-yellow-800/50 shadow-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-100">Megjegyzés</h3>
                <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-200">
                  <p>
                    Ez a játék egy iskolai projekt keretében készült, de elképzelhető, hogy frissítjük a jövőben. Kövesd nyomon a weboldalunkat az újdonságokért!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 