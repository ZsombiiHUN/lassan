'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useClientCheck } from '../hooks/useClientCheck';

export default function Home() {
  const mounted = useClientCheck();
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Animated Elements */}
      <section className="relative min-h-screen flex items-center pt-16 mb-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-950"></div>
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-300/20 to-indigo-300/20 dark:from-purple-900/20 dark:to-indigo-900/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-indigo-300/20 to-blue-300/20 dark:from-indigo-900/20 dark:to-blue-900/20 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-12 md:pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className={`lg:col-span-6 custom-transition-all duration-1000 ease-out ${animationComplete ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4">
                Újdonság: 2024-es UPDATE
              </span>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-4">
                <span className="block text-gray-900 dark:text-white">
                  Teszteld a reakcióidőd
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                  Lassan! játékkal
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl leading-relaxed">
                Javítsd a reakcióidődet és pontosságodat egy izgalmas kihívással. Mérd össze tudásodat másokkal a globális ranglistán.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/download"
                  className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full text-lg font-medium custom-transition-all shadow-lg hover:shadow-xl active:shadow-md"
                >
                  Letöltés Ingyen
                </Link>
                <Link
                  href="/leaderboard"
                  className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full text-lg font-medium border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 custom-transition-all shadow-md hover:shadow-lg"
                >
                  Ranglista
                </Link>
              </div>
              
              <div className="mt-12 flex items-center space-x-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-10 h-10 rounded-full bg-gradient-to-r ${
                      i % 2 === 0 
                        ? 'from-indigo-400 to-purple-400 dark:from-indigo-600 dark:to-purple-600' 
                        : 'from-purple-400 to-indigo-400 dark:from-purple-600 dark:to-indigo-600'
                    } border-2 border-white dark:border-gray-900`}></div>
                  ))}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold text-gray-900 dark:text-white">100+</span> aktív játékos
                </div>
              </div>
            </div>
            
            <div className={`lg:col-span-6 custom-transition-all duration-1000 delay-300 ease-out ${animationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 dark:from-indigo-900/20 dark:to-purple-900/20 z-10"></div>
                <Image
                  src="/gameplay1.gif"
                  alt="Játék előnézet"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Seamless connection with curved SVG wave */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-white dark:bg-gray-950"></div>
        <svg className="relative block w-full" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L48 8.33333C96 16.6667 192 33.3333 288 41.6667C384 50 480 50 576 41.6667C672 33.3333 768 16.6667 864 8.33333C960 0 1056 0 1152 8.33333C1248 16.6667 1344 33.3333 1392 41.6667L1440 50V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V0Z" fill="currentColor" className="text-gray-50 dark:text-gray-900"></path>
        </svg>
      </div>
      
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Fedezd fel a Lassan! előnyeit</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Tökéletesített játékélmény a maximális szórakozás érdekében</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl custom-transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Precíz Reakcióidő Teszt</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Teszteld a reakcióidődet különböző nehézségi szinteken, és követheted a fejlődésedet idővel.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Milliszekundum pontosság
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fokozatos nehézségi szintek
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl custom-transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Testreszabható Élmény</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Szabd személyre a játékélményt különböző témákkal és feloldhatsz speciális kozmétikai elemeket.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Különleges témák és skinek
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Teljesítmény-alapú jutalmak
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl custom-transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Globális Rangsor</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Versenyezz játékosokkal a világon és nézd meg, hol állsz a ranglistán.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Valós idejű rangsorok
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Szezonális versenyek
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section - Seamless connection with curved SVG wave */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-white dark:bg-gray-950"></div>
        <svg className="relative block w-full text-white dark:text-gray-950" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(180deg)' }}>
          <path d="M0 0L48 8.33333C96 16.6667 192 33.3333 288 41.6667C384 50 480 50 576 41.6667C672 33.3333 768 16.6667 864 8.33333C960 0 1056 0 1152 8.33333C1248 16.6667 1344 33.3333 1392 41.6667L1440 50V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V0Z" fill="currentColor"></path>
        </svg>
      </div>

      {/* Statistics Section with background patterns */}
      <section className="py-20 relative overflow-hidden bg-white dark:bg-gray-950">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-indigo-100/40 to-purple-100/40 dark:from-indigo-900/10 dark:to-purple-900/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-100/40 to-indigo-100/40 dark:from-purple-900/10 dark:to-indigo-900/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Játékos Statisztikák</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Az izgalmas számok a Lassan! világából</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                100+
              </div>
              <p className="text-gray-600 dark:text-gray-400">Aktív játékos</p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                125ms
              </div>
              <p className="text-gray-600 dark:text-gray-400">Átlagos reakcióidő</p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-red-600 dark:from-pink-400 dark:to-red-400">
                48
              </div>
              <p className="text-gray-600 dark:text-gray-400">Különböző szint</p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                24/7
              </div>
              <p className="text-gray-600 dark:text-gray-400">Szerver elérhetőség</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section - Seamless connection with curved SVG wave */}
      <div className="relative">
        <svg className="relative block w-full" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L48 8.33333C96 16.6667 192 33.3333 288 41.6667C384 50 480 50 576 41.6667C672 33.3333 768 16.6667 864 8.33333C960 0 1056 0 1152 8.33333C1248 16.6667 1344 33.3333 1392 41.6667L1440 50V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V0Z" fill="currentColor" className="text-indigo-600 dark:text-indigo-700"></path>
        </svg>
      </div>
      
      {/* CTA Section with enhanced design */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Készen állsz a kihívásra?</h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Töltsd le a Lassan! játékot most és teszteld a reflexeidet!
            </p>
            <Link
              href="/download"
              className="inline-block px-8 py-4 bg-white text-indigo-600 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:bg-gray-100 custom-transition-all transform hover:-translate-y-1"
            >
              Ingyenes Letöltés
            </Link>
            
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-indigo-300/20 rounded-full blur-lg"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
