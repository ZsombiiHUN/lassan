'use client';

import { useClientCheck } from '../../hooks/useClientCheck';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Type definitions for our data
interface LeaderboardEntry {
  id: number;
  rank: number;
  username: string;
  displayName: string;
  score: number;
  date: string;
  avatar?: string;
}

// Mock data for leaderboard
const leaderboardData: LeaderboardEntry[] = [
];

export default function LeaderboardPage() {
  const mounted = useClientCheck();
  const [animationComplete, setAnimationComplete] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentTab, setCurrentTab] = useState<'all' | 'weekly' | 'monthly'>('all');

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Filter the leaderboard data based on search term
  const filteredData = leaderboardData.filter(entry => 
    entry.username.toLowerCase().includes(searchTerm.toLowerCase()) || 
    entry.displayName.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950"></div>
        <div className="absolute top-0 left-0 -translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-300/20 to-indigo-300/20 dark:from-blue-900/20 dark:to-indigo-900/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-indigo-300/20 to-purple-300/20 dark:from-indigo-900/20 dark:to-purple-900/20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24 relative z-10">
        <div className={`text-center custom-transition-all duration-700 ${animationComplete ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-6'}`}>
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            Legjobb Játékosok
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl mb-4">
            <span className="block">Lassan! Ranglista</span>
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
            Fedezd fel a legjobb játékosokat és versenyezz a legmagasabb pontszámokért.
          </p>
        </div>

        {/* Search and filter section */}
        <div className={`mt-12 custom-transition-all duration-700 delay-150 ${animationComplete ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}>
          <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white/80 dark:bg-gray-700/80 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 custom-transition-all sm:text-sm"
                  placeholder="Játékos keresése..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => setCurrentTab('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium custom-transition-all ${
                    currentTab === 'all' 
                      ? 'bg-blue-500 text-white shadow-md' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  Összes
                </button>
                <button
                  onClick={() => setCurrentTab('weekly')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium custom-transition-all ${
                    currentTab === 'weekly' 
                      ? 'bg-blue-500 text-white shadow-md' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  Heti
                </button>
                <button
                  onClick={() => setCurrentTab('monthly')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium custom-transition-all ${
                    currentTab === 'monthly' 
                      ? 'bg-blue-500 text-white shadow-md' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  Havi
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className={`mt-8 custom-transition-all duration-700 delay-300 ${animationComplete ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}>
          <div className="relative overflow-hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-xl rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-900/50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Helyezés
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Játékos
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Pontszám
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Dátum
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white/50 dark:bg-gray-800/50 divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredData.length > 0 ? (
                    filteredData.map((entry, index) => (
                      <tr key={entry.id} className={`${
                        index % 2 === 0 ? 'bg-white/50 dark:bg-gray-800/50' : 'bg-gray-50/50 dark:bg-gray-900/50'
                      } custom-transition-all hover:bg-blue-50/70 dark:hover:bg-blue-900/30`}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm ${
                              entry.rank === 1 ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/70 dark:text-yellow-200' :
                              entry.rank === 2 ? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200' :
                              entry.rank === 3 ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/70 dark:text-amber-200' :
                              'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200'
                            }`}>
                              {entry.rank}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 relative">
                              {entry.avatar ? (
                                <Image
                                  className="h-10 w-10 rounded-full"
                                  src={entry.avatar}
                                  alt={entry.displayName}
                                  width={40}
                                  height={40}
                                />
                              ) : (
                                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-medium">
                                  {entry.displayName.charAt(0)}
                                </div>
                              )}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {entry.displayName}
                              </div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                @{entry.username}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{entry.score.toLocaleString()}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">karakterek/perc</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {new Date(entry.date).toLocaleDateString('hu-HU', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="px-6 py-12 text-center">
                        <div className="flex flex-col items-center justify-center">
                          <svg className="w-12 h-12 text-gray-400 dark:text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.5 15.5l-5-5 5-5m-5 5h12" />
                          </svg>
                          <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">Nincs találat</p>
                          <p className="text-gray-400 dark:text-gray-500 text-sm mt-1">Próbálj más keresési feltételt</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Information About Ranking */}
        <div className={`mt-12 custom-transition-all duration-700 delay-400 ${animationComplete ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}>
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 shadow-xl p-8 text-white">
            <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
            <div className="relative">
              <h2 className="text-2xl font-bold mb-4">Hogyan kerülhetsz a ranglistára?</h2>
              <p className="text-blue-100 mb-6">
                A ranglistára kerüléshez játssz a Lassan! játékkal és érj el magas pontszámot. A pontszámokat automatikusan rögzítjük és frissítjük.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-5">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Játssz</h3>
                  </div>
                  <p className="text-blue-100">
                    Töltsd le és játssz a Lassan! játékkal. Gyakorolj és fejleszd a gépelési sebességedet.
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-5">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Érj el magas pontot</h3>
                  </div>
                  <p className="text-blue-100">
                    Minél gyorsabban és pontosabban gépelsz, annál magasabb pontszámot érsz el.
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-5">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Kerülj a ranglistára</h3>
                  </div>
                  <p className="text-blue-100">
                    Ha elég magas pontszámot érsz el, felkerülsz a ranglistára és megmutathatod tudásodat a világnak.
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