'use client';

import { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export default function AIAgentPage() {
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
              <h1 className="text-2xl font-semibold text-gray-900">Agent IA</h1>
              <p className="mt-2 text-gray-600">Utilisez notre intelligence artificielle pour optimiser vos campagnes marketing.</p>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Section d'introduction à l'Agent IA */}
              <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-[#1D9D73] to-[#34D399]">
                  <h2 className="text-lg leading-6 font-medium text-white">Votre assistant marketing IA</h2>
                  <p className="mt-1 max-w-2xl text-sm text-white opacity-90">Automatisez et optimisez vos campagnes grâce à l'intelligence artificielle</p>
                </div>
                <div className="px-4 py-5 sm:p-6">
                  <div className="prose max-w-none">
                    <p>
                      Notre Agent IA est conçu pour vous aider à optimiser vos campagnes marketing en automatisant 
                      les tâches répétitives et en vous fournissant des insights basés sur l'analyse de données.
                    </p>
                    
                    <h3 className="mt-4">Fonctionnalités disponibles :</h3>
                    <ul className="mt-2 list-disc pl-5 space-y-1">
                      <li>Génération de textes publicitaires optimisés pour différentes plateformes</li>
                      <li>Analyse de la performance de vos campagnes avec recommandations</li>
                      <li>Identification des meilleures audiences cibles</li>
                      <li>Optimisation des budgets publicitaires</li>
                      <li>Suggestions de mots-clés pertinents</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Outils IA disponibles */}
              <h2 className="mt-8 text-xl font-semibold text-gray-900">Outils IA disponibles</h2>
              <p className="text-gray-600 mb-6">Explorez nos différents outils d'intelligence artificielle</p>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Outil 1 */}
                <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-[#1D9D73] rounded-md p-3">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg font-medium text-gray-900">Générateur de textes</h3>
                        <p className="mt-2 text-sm text-gray-500">
                          Créez des textes publicitaires, des descriptions de produits et des accroches optimisés pour vos campagnes.
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg font-medium text-gray-900">Analyseur de performance</h3>
                        <p className="mt-2 text-sm text-gray-500">
                          Analysez les performances de vos campagnes et recevez des recommandations d'optimisation.
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg font-medium text-gray-900">Ciblage d'audience</h3>
                        <p className="mt-2 text-sm text-gray-500">
                          Identifiez les segments d'audience les plus pertinents pour vos produits ou services.
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
              
              {/* Démo interactive */}
              <div className="mt-10 bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h2 className="text-lg leading-6 font-medium text-gray-900">Essayez notre IA</h2>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">Générez un exemple de texte publicitaire pour votre entreprise</p>
                </div>
                <div className="px-4 py-5 sm:p-6">
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="business-type" className="block text-sm font-medium text-gray-700">Type d'entreprise</label>
                      <div className="mt-1">
                        <input type="text" name="business-type" id="business-type" className="shadow-sm focus:ring-[#1D9D73] focus:border-[#1D9D73] block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Ex: Restaurant italien, Agence web, etc." />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="target-audience" className="block text-sm font-medium text-gray-700">Audience cible</label>
                      <div className="mt-1">
                        <input type="text" name="target-audience" id="target-audience" className="shadow-sm focus:ring-[#1D9D73] focus:border-[#1D9D73] block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Ex: Jeunes professionnels, Familles, etc." />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="platform" className="block text-sm font-medium text-gray-700">Plateforme</label>
                      <div className="mt-1">
                        <select id="platform" name="platform" className="shadow-sm focus:ring-[#1D9D73] focus:border-[#1D9D73] block w-full sm:text-sm border-gray-300 rounded-md">
                          <option>Facebook</option>
                          <option>Instagram</option>
                          <option>Google Ads</option>
                          <option>TikTok</option>
                          <option>LinkedIn</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="tone" className="block text-sm font-medium text-gray-700">Ton</label>
                      <div className="mt-1">
                        <select id="tone" name="tone" className="shadow-sm focus:ring-[#1D9D73] focus:border-[#1D9D73] block w-full sm:text-sm border-gray-300 rounded-md">
                          <option>Professionnel</option>
                          <option>Décontracté</option>
                          <option>Humoristique</option>
                          <option>Informatif</option>
                          <option>Persuasif</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#1D9D73] hover:bg-[#34D399]"
                      >
                        Générer un exemple
                      </button>
                    </div>
                  </form>
                  
                  {/* Résultat de la génération (à afficher après soumission) */}
                  <div className="mt-8 p-4 bg-gray-50 rounded-md hidden">
                    <h3 className="text-lg font-medium text-gray-900">Texte généré</h3>
                    <div className="mt-2 p-4 bg-white rounded border border-gray-200">
                      <p className="text-gray-700">
                        Le texte généré par l'IA apparaîtra ici après soumission du formulaire.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Prochainement */}
              <div className="mt-10 bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-[#F7941D] to-[#FDBA74]">
                  <h2 className="text-lg leading-6 font-medium text-white">Prochainement</h2>
                  <p className="mt-1 max-w-2xl text-sm text-white opacity-90">Nouvelles fonctionnalités en développement</p>
                </div>
                <div className="px-4 py-5 sm:p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-[#F7941D]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-900">Génération d'images publicitaires</h3>
                        <p className="mt-1 text-sm text-gray-500">Créez des visuels publicitaires personnalisés grâce à l'IA générative.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-[#F7941D]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-900">Assistant conversationnel</h3>
                        <p className="mt-1 text-sm text-gray-500">Posez vos questions marketing à notre assistant IA et obtenez des réponses personnalisées.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-[#F7941D]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-900">Prédiction de ROI</h3>
                        <p className="mt-1 text-sm text-gray-500">Estimez le retour sur investissement de vos campagnes avant même de les lancer.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
