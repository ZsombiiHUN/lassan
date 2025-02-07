export default function DownloadPage() {
  const windowsDownloadUrl = "http://lassanstorage.netlify.app/Lassan!%20(v1.8.1b).zip";
  const linuxDownloadUrl = "http://lassanstorage.netlify.app/Lassan!%20(v1.8.1b).zip";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          <span className="block">Lassan! Letöltése</span>
          <span className="block text-indigo-600">v1.8.1b</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Készülj fel egy kihívásokkal teli játékra, amely próbára teszi a sebességedet és pontosságodat.
        </p>
      </div>

      <div className="mt-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Windows Download */}
          <div className="relative rounded-2xl border border-gray-200 dark:border-gray-800 p-8 shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Windows</h3>
              <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
                Letöltés Windows operációs rendszerre. Windows 7 vagy újabb verzió szükséges.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">Windows 7/8/10/11</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">64-bites processzor</span>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <a
                href={windowsDownloadUrl}
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                download
              >
                Letöltés Windowsra
              </a>
            </div>
          </div>

          {/* Linux Download */}
          <div className="relative rounded-2xl border border-gray-200 dark:border-gray-800 p-8 shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Linux</h3>
              <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
                Letöltés Linux operációs rendszerre. Wine szükséges a futtatáshoz.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">Wine 5.0 vagy újabb</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">64-bites Linux disztribúció</span>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <a
                href={linuxDownloadUrl}
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                download
              >
                Letöltés Linuxra
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* System Requirements */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Rendszerkövetelmények</h2>
        <div className="mt-6 border-t border-gray-200 dark:border-gray-800 pt-6">
          <dl className="space-y-8">
            <div>
              <dt className="text-lg font-medium text-gray-900 dark:text-white">Minimális követelmények</dt>
              <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Operációs rendszer: Windows 7 vagy újabb / Linux Wine 5.0+</li>
                  <li>Processzor: 1.5 GHz vagy gyorsabb</li>
                  <li>Memória: 2 GB RAM</li>
                  <li>Grafika: DirectX 9 kompatibilis videókártya</li>
                  <li>Tárhely: 100 MB szabad hely</li>
                </ul>
              </dd>
            </div>
            <div>
              <dt className="text-lg font-medium text-gray-900 dark:text-white">Ajánlott követelmények</dt>
              <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Operációs rendszer: Windows 10/11 vagy újabb / Linux Wine 7.0+</li>
                  <li>Processzor: 2.0 GHz vagy gyorsabb</li>
                  <li>Memória: 4 GB RAM</li>
                  <li>Grafika: DirectX 11 kompatibilis videókártya</li>
                  <li>Tárhely: 200 MB szabad hely</li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Notes Section */}
      <div className="mt-16 mb-20">
        <div className="rounded-md bg-yellow-50 dark:bg-yellow-900/30 p-4">
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
                  Ez a játék egy iskolai projekt keretében készült, de elképzelhető, hogy frissítjük a jövőben.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 