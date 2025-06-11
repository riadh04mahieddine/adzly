'use client';

import { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export default function UGCVideosPage() {
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
              <h1 className="text-2xl font-semibold text-gray-900">Vidéos UGC</h1>
              <p className="mt-2 text-gray-600">Trouvez des créateurs de contenu pour vos campagnes publicitaires.</p>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Section d'introduction aux vidéos UGC */}
              <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-[#1D9D73] to-[#34D399]">
                  <h2 className="text-lg leading-6 font-medium text-white">Qu'est-ce que le contenu UGC ?</h2>
                  <p className="mt-1 max-w-2xl text-sm text-white opacity-90">User Generated Content : du contenu authentique créé par de vrais utilisateurs</p>
                </div>
                <div className="px-4 py-5 sm:p-6">
                  <div className="prose max-w-none">
                    <p>
                      Les vidéos UGC (User Generated Content) sont des contenus créés par des utilisateurs réels plutôt que par des professionnels du marketing. 
                      Ces vidéos sont perçues comme plus authentiques et génèrent en moyenne <strong>un taux de conversion 2 à 3 fois supérieur</strong> aux publicités traditionnelles.
                    </p>
                    
                    <h3 className="mt-4">Pourquoi utiliser des vidéos UGC ?</h3>
                    <ul className="mt-2 list-disc pl-5 space-y-1">
                      <li>Authenticité perçue par les consommateurs</li>
                      <li>Meilleur taux d'engagement sur les réseaux sociaux</li>
                      <li>Coût inférieur aux productions professionnelles</li>
                      <li>Contenu facilement adaptable à différentes plateformes</li>
                      <li>Renforce la confiance dans votre marque</li>
                    </ul>
                    
                    <div className="mt-4 p-4 bg-yellow-50 rounded-md">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-yellow-800">Conseil Adzly</h3>
                          <div className="mt-2 text-sm text-yellow-700">
                            <p>
                              Pour des résultats optimaux, combinez des vidéos UGC avec vos campagnes publicitaires payantes. 
                              Nos données montrent que cette approche peut réduire le coût d'acquisition client jusqu'à 40%.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Vidéo explicative */}
              <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h2 className="text-lg leading-6 font-medium text-gray-900">Comment utiliser les vidéos UGC pour votre business</h2>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">Regardez notre tutoriel pour comprendre comment intégrer des vidéos UGC à votre stratégie marketing</p>
                </div>
                <div className="px-4 py-5 sm:p-6">
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                    <iframe 
                      className="w-full h-96"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                      title="Comment utiliser les vidéos UGC pour votre business" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
              
              {/* Plateformes d'affiliation UGC */}
              <h2 className="mt-8 text-xl font-semibold text-gray-900">Plateformes de créateurs UGC</h2>
              <p className="text-gray-600 mb-6">Découvrez nos plateformes partenaires pour trouver des créateurs de contenu UGC</p>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Plateforme francophone */}
                <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900">Octoly</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Francophone
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Plateforme spécialisée dans la mise en relation avec des créateurs UGC francophones et internationaux.
                      Idéal pour les entreprises ciblant le marché français, belge, suisse ou canadien.
                    </p>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-900">Avantages :</h4>
                      <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-gray-500">
                        <li>Plus de 10 000 créateurs vérifiés dont de nombreux francophones</li>
                        <li>Tarifs négociés pour les clients Adzly (-15%)</li>
                        <li>Livraison rapide (3-5 jours)</li>
                        <li>Gestion des droits simplifiée</li>
                      </ul>
                    </div>
                    <div className="mt-5">
                      <a
                        href="https://www.octoly.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#1D9D73] hover:bg-[#34D399]"
                      >
                        Explorer la plateforme
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Plateforme anglophone */}
                <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900">Insense</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        International
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Plateforme mondiale de créateurs UGC avec une forte présence aux États-Unis et au Royaume-Uni.
                      Idéal pour les entreprises souhaitant cibler un marché international.
                    </p>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-900">Avantages :</h4>
                      <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-gray-500">
                        <li>Plus de 35 000 créateurs dans 100+ pays</li>
                        <li>Intégration directe avec les plateformes publicitaires</li>
                        <li>Système de brief automatisé</li>
                        <li>Gestion des droits simplifiée</li>
                      </ul>
                    </div>
                    <div className="mt-5">
                      <a
                        href="https://insense.pro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#1D9D73] hover:bg-[#34D399]"
                      >
                        Explorer la plateforme
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Exemples de vidéos UGC */}
              <h2 className="mt-8 text-xl font-semibold text-gray-900">Exemples de vidéos UGC</h2>
              <p className="text-gray-600 mb-6">Découvrez quelques exemples de vidéos UGC réalisées pour différents secteurs</p>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Exemple 1 */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="relative pb-[56.25%] h-0">
                    <iframe 
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                      title="Exemple UGC - E-commerce mode" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="px-4 py-4">
                    <h3 className="text-lg font-medium text-gray-900">UGC pour e-commerce mode</h3>
                    <p className="mt-1 text-sm text-gray-500">Unboxing et essayage de vêtements avec avis authentique</p>
                  </div>
                </div>
                
                {/* Exemple 2 */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="relative pb-[56.25%] h-0">
                    <iframe 
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                      title="Exemple UGC - SaaS B2B" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="px-4 py-4">
                    <h3 className="text-lg font-medium text-gray-900">UGC pour SaaS B2B</h3>
                    <p className="mt-1 text-sm text-gray-500">Témoignage client montrant les bénéfices concrets du logiciel</p>
                  </div>
                </div>
                
                {/* Exemple 3 */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="relative pb-[56.25%] h-0">
                    <iframe 
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                      title="Exemple UGC - Restaurant" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="px-4 py-4">
                    <h3 className="text-lg font-medium text-gray-900">UGC pour restaurant</h3>
                    <p className="mt-1 text-sm text-gray-500">Expérience client authentique avec focus sur l'ambiance et les plats</p>
                  </div>
                </div>
              </div>
              
              {/* Consultation personnalisée */}
              <div className="mt-10 bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-[#F7941D] to-[#FDBA74]">
                  <h2 className="text-lg leading-6 font-medium text-white">Besoin d'aide pour trouver les bons créateurs UGC ?</h2>
                  <p className="mt-1 max-w-2xl text-sm text-white opacity-90">Demandez une consultation personnalisée avec un expert Adzly</p>
                </div>
                <div className="px-4 py-5 sm:p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Prénom</label>
                        <div className="mt-1">
                          <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="shadow-sm focus:ring-[#1D9D73] focus:border-[#1D9D73] block w-full sm:text-sm border-gray-300 rounded-md" />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Nom</label>
                        <div className="mt-1">
                          <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="shadow-sm focus:ring-[#1D9D73] focus:border-[#1D9D73] block w-full sm:text-sm border-gray-300 rounded-md" />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <div className="mt-1">
                          <input id="email" name="email" type="email" autoComplete="email" className="shadow-sm focus:ring-[#1D9D73] focus:border-[#1D9D73] block w-full sm:text-sm border-gray-300 rounded-md" />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700">Entreprise</label>
                        <div className="mt-1">
                          <input type="text" name="company" id="company" autoComplete="organization" className="shadow-sm focus:ring-[#1D9D73] focus:border-[#1D9D73] block w-full sm:text-sm border-gray-300 rounded-md" />
                        </div>
                      </div>

                      <div className="sm:col-span-6">
                        <label htmlFor="sector" className="block text-sm font-medium text-gray-700">Secteur d'activité</label>
                        <div className="mt-1">
                          <select id="sector" name="sector" autoComplete="sector" className="shadow-sm focus:ring-[#1D9D73] focus:border-[#1D9D73] block w-full sm:text-sm border-gray-300 rounded-md">
                            <option>E-commerce</option>
                            <option>SaaS / Tech</option>
                            <option>Restauration</option>
                            <option>Beauté / Cosmétiques</option>
                            <option>Santé / Bien-être</option>
                            <option>Finance</option>
                            <option>Immobilier</option>
                            <option>Autre</option>
                          </select>
                        </div>
                      </div>

                      <div className="sm:col-span-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Votre besoin</label>
                        <div className="mt-1">
                          <textarea id="message" name="message" rows={4} className="shadow-sm focus:ring-[#1D9D73] focus:border-[#1D9D73] block w-full sm:text-sm border-gray-300 rounded-md" defaultValue={''} />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">Décrivez brièvement votre projet et vos attentes concernant les vidéos UGC.</p>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-[#F7941D] to-[#FDBA74] hover:from-[#FDBA74] hover:to-[#F7941D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F7941D]"
                      >
                        Demander une consultation
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
