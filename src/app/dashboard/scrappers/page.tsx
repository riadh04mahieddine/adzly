'use client';

import { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export default function ScrappersPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    router.push('/login');
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Sidebar pour mobile */}
      <div className="lg:hidden">
        <DashboardSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
      
      {/* Sidebar pour desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          <DashboardSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>
      </div>
      
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <DashboardHeader setSidebarOpen={setSidebarOpen} handleLogout={handleLogout} />
        
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">Scrappers</h1>
              <p className="mt-2 text-gray-600">Outils d'extraction de données pour optimiser votre stratégie marketing.</p>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Section d'introduction aux scrappers */}
              <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-[#1D9D73] to-[#34D399]">
                  <h2 className="text-lg leading-6 font-medium text-white">Qu'est-ce qu'un scrapper ?</h2>
                  <p className="mt-1 max-w-2xl text-sm text-white opacity-90">Des outils pour collecter automatiquement des données pertinentes pour votre business</p>
                </div>
                <div className="px-4 py-5 sm:p-6">
                  <div className="prose max-w-none">
                    <p>
                      Les scrappers sont des outils qui permettent d'extraire automatiquement des données à partir de sites web, 
                      de réseaux sociaux ou d'autres sources en ligne. Ces données peuvent être utilisées pour analyser la concurrence, 
                      identifier des tendances, ou trouver des opportunités de marché.
                    </p>
                    
                    <div className="mt-4 p-4 bg-yellow-50 rounded-md">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-yellow-800">Important</h3>
                          <div className="mt-2 text-sm text-yellow-700">
                            <p>
                              L'utilisation de scrappers doit se faire dans le respect des conditions d'utilisation des sites web 
                              et des réglementations sur la protection des données. Adzly ne peut être tenu responsable d'une 
                              utilisation non conforme de ces outils.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Outils de scrapping disponibles */}
              <h2 className="mt-8 text-xl font-semibold text-gray-900">Outils disponibles</h2>
              <p className="text-gray-600 mb-6">Explorez nos différents outils d'extraction de données</p>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Outil 1 */}
                <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-[#1D9D73] rounded-md p-3">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg font-medium text-gray-900">Scrapper de produits</h3>
                        <p className="mt-2 text-sm text-gray-500">
                          Extrayez des informations sur les produits de vos concurrents (prix, caractéristiques, avis).
                        </p>
                      </div>
                    </div>
                    <div className="mt-5">
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#1D9D73] hover:bg-[#34D399]"
                      >
                        Utiliser l'outil
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Outil 2 */}
                <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-[#1D9D73] rounded-md p-3">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg font-medium text-gray-900">Scrapper de mots-clés</h3>
                        <p className="mt-2 text-sm text-gray-500">
                          Identifiez les mots-clés les plus performants dans votre secteur d'activité.
                        </p>
                      </div>
                    </div>
                    <div className="mt-5">
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#1D9D73] hover:bg-[#34D399]"
                      >
                        Utiliser l'outil
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Outil 3 */}
                <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-[#1D9D73] rounded-md p-3">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg font-medium text-gray-900">Scrapper de réseaux sociaux</h3>
                        <p className="mt-2 text-sm text-gray-500">
                          Analysez les tendances et les performances des contenus sur les réseaux sociaux.
                        </p>
                      </div>
                    </div>
                    <div className="mt-5">
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#1D9D73] hover:bg-[#34D399]"
                      >
                        Utiliser l'outil
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tutoriel d'utilisation */}
              <div className="mt-10 bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h2 className="text-lg leading-6 font-medium text-gray-900">Comment utiliser nos scrappers</h2>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">Tutoriel pas à pas pour extraire et analyser des données</p>
                </div>
                <div className="px-4 py-5 sm:p-6">
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                    <iframe 
                      className="w-full h-96"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                      title="Comment utiliser les scrappers Adzly" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-900">Étapes principales</h3>
                    <ol className="mt-4 list-decimal pl-5 space-y-2 text-sm text-gray-500">
                      <li>
                        <strong>Sélectionnez votre outil</strong> - Choisissez l'outil de scrapping adapté à vos besoins
                      </li>
                      <li>
                        <strong>Configurez les paramètres</strong> - Définissez les sources, la fréquence et les données à extraire
                      </li>
                      <li>
                        <strong>Lancez l'extraction</strong> - Démarrez le processus d'extraction des données
                      </li>
                      <li>
                        <strong>Analysez les résultats</strong> - Explorez les données collectées via notre interface d'analyse
                      </li>
                      <li>
                        <strong>Exportez les données</strong> - Téléchargez les résultats au format CSV, Excel ou JSON
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              
              {/* Cas d'utilisation */}
              <div className="mt-10 bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-[#F7941D] to-[#FDBA74]">
                  <h2 className="text-lg leading-6 font-medium text-white">Cas d'utilisation</h2>
                  <p className="mt-1 max-w-2xl text-sm text-white opacity-90">Comment nos clients utilisent les scrappers pour optimiser leur marketing</p>
                </div>
                <div className="px-4 py-5 sm:p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">E-commerce : Analyse concurrentielle</h3>
                      <p className="mt-2 text-sm text-gray-500">
                        Une boutique en ligne de produits cosmétiques utilise notre scrapper de produits pour surveiller 
                        les prix et les promotions de ses concurrents. Cela leur permet d'ajuster leur stratégie tarifaire 
                        en temps réel et d'optimiser leurs marges.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">SaaS : Optimisation SEO</h3>
                      <p className="mt-2 text-sm text-gray-500">
                        Une entreprise de logiciel B2B utilise notre scrapper de mots-clés pour identifier les termes 
                        les plus recherchés dans son secteur. Grâce à ces données, ils ont pu optimiser leur contenu 
                        et augmenter leur trafic organique de 45% en 3 mois.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Agence marketing : Analyse de tendances</h3>
                      <p className="mt-2 text-sm text-gray-500">
                        Une agence marketing utilise notre scrapper de réseaux sociaux pour analyser les contenus viraux 
                        dans différents secteurs. Ces insights leur permettent de créer des campagnes plus performantes 
                        pour leurs clients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Demande d'accès */}
              <div className="mt-10 bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Besoin d'un scrapper personnalisé ?</h3>
                  <div className="mt-2 max-w-xl text-sm text-gray-500">
                    <p>Nos équipes peuvent développer des solutions d'extraction de données sur mesure pour votre entreprise.</p>
                  </div>
                  <div className="mt-5">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#F7941D] hover:bg-[#FDBA74]"
                    >
                      Demander un devis
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
