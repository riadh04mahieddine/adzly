'use client';

import { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export default function MicroInfluencersPage() {
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
              <h1 className="text-2xl font-semibold text-gray-900">Micro-influenceurs</h1>
              <p className="mt-2 text-gray-600">Découvrez notre sélection de micro-influenceurs avec des communautés engagées pour vos campagnes marketing.</p>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Section d'introduction */}
              <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-[#1D9D73] to-[#34D399]">
                  <h2 className="text-lg leading-6 font-medium text-white">À propos des micro-influenceurs</h2>
                  <p className="mt-1 max-w-2xl text-sm text-white opacity-90">Comment ils peuvent booster votre stratégie marketing</p>
                </div>
                <div className="px-4 py-5 sm:p-6">
                  <div className="prose max-w-none">
                    <p>
                      Les micro-influenceurs sont des créateurs de contenu avec une audience généralement comprise entre 1 000 et 100 000 abonnés. 
                      Bien que leur portée soit plus limitée que celle des macro-influenceurs, leur taux d'engagement est souvent beaucoup plus élevé, 
                      ce qui en fait des partenaires précieux pour les marques cherchant à établir des connexions authentiques avec des audiences ciblées.
                    </p>
                    
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="text-green-800 font-medium">Taux d'engagement élevé</h3>
                        <p className="text-sm text-gray-600">En moyenne 60% plus élevé que les comptes avec plus de 100k abonnés</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="text-green-800 font-medium">Authenticité</h3>
                        <p className="text-sm text-gray-600">Relations de confiance avec leur communauté</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="text-green-800 font-medium">Coût abordable</h3>
                        <p className="text-sm text-gray-600">ROI souvent supérieur aux campagnes avec des célébrités</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Filtres de recherche */}
              <div className="mt-8 bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Filtrer les micro-influenceurs</h3>
                  <div className="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-2">
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700">Catégorie</label>
                      <select
                        id="category"
                        name="category"
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#1D9D73] focus:border-[#1D9D73] sm:text-sm rounded-md"
                      >
                        <option value="">Toutes les catégories</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="saas">SaaS / B2B</option>
                        <option value="lifestyle">Lifestyle</option>
                        <option value="beauty">Beauté</option>
                        <option value="fitness">Fitness</option>
                        <option value="food">Restauration / Food</option>
                        <option value="tech">Tech</option>
                      </select>
                    </div>
                    
                    <div className="sm:col-span-2">
                      <label htmlFor="platform" className="block text-sm font-medium text-gray-700">Plateforme</label>
                      <select
                        id="platform"
                        name="platform"
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#1D9D73] focus:border-[#1D9D73] sm:text-sm rounded-md"
                      >
                        <option value="">Toutes les plateformes</option>
                        <option value="tiktok">TikTok</option>
                        <option value="instagram">Instagram</option>
                        <option value="youtube">YouTube</option>
                        <option value="linkedin">LinkedIn</option>
                      </select>
                    </div>
                    
                    <div className="sm:col-span-2">
                      <label htmlFor="followers" className="block text-sm font-medium text-gray-700">Nombre d'abonnés</label>
                      <select
                        id="followers"
                        name="followers"
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#1D9D73] focus:border-[#1D9D73] sm:text-sm rounded-md"
                      >
                        <option value="">Tous</option>
                        <option value="1k-5k">1k - 5k</option>
                        <option value="5k-10k">5k - 10k</option>
                        <option value="10k-50k">10k - 50k</option>
                        <option value="50k-100k">50k - 100k</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mt-5">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#1D9D73] hover:bg-[#34D399]"
                    >
                      Appliquer les filtres
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Liste des micro-influenceurs */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Micro-influenceurs recommandés</h2>
                
                {/* Catégorie E-commerce */}
                <div className="mb-10">
                  <h3 className="text-lg font-medium text-gray-900 mb-4 pb-2 border-b border-gray-200">E-commerce & Mode</h3>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Influenceur 1 */}
                    <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
                      <div className="px-4 py-5 sm:p-6">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-medium text-gray-900">Sophie Martin</h4>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Mode éthique
                          </span>
                        </div>
                        <div className="mt-4 flex items-center">
                          <img className="h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sophie Martin" />
                          <div className="ml-4">
                            <div className="flex space-x-3">
                              <a href="https://instagram.com/sophiemode" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                              </a>
                              <a href="https://tiktok.com/@sophiemode" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 015.2-1.74V11.9a8.66 8.66 0 003.45.75 8.42 8.42 0 003.77-.9z"/>
                                </svg>
                              </a>
                            </div>
                            <div className="mt-1 text-sm text-gray-500">
                              <span className="font-medium">25K</span> abonnés
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                            <div className="sm:col-span-1">
                              <dt className="text-sm font-medium text-gray-500">Engagement moyen</dt>
                              <dd className="mt-1 text-sm text-gray-900">8.5%</dd>
                            </div>
                            <div className="sm:col-span-1">
                              <dt className="text-sm font-medium text-gray-500">Vues moyennes</dt>
                              <dd className="mt-1 text-sm text-gray-900">15K</dd>
                            </div>
                          </dl>
                        </div>
                        <div className="mt-4">
                          <a href="mailto:contact@sophiemode.com" className="text-sm font-medium text-[#1D9D73] hover:text-[#34D399]">
                            contact@sophiemode.com
                          </a>
                        </div>
                        <div className="mt-5">
                          <button
                            type="button"
                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-[#1D9D73] hover:bg-[#34D399]"
                          >
                            Contacter
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Influenceur 2 */}
                    <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
                      <div className="px-4 py-5 sm:p-6">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-medium text-gray-900">Thomas Dubois</h4>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Lifestyle tech
                          </span>
                        </div>
                        <div className="mt-4 flex items-center">
                          <img className="h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Thomas Dubois" />
                          <div className="ml-4">
                            <div className="flex space-x-3">
                              <a href="https://instagram.com/thomastech" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                              </a>
                              <a href="https://youtube.com/thomastech" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                              </a>
                            </div>
                            <div className="mt-1 text-sm text-gray-500">
                              <span className="font-medium">42K</span> abonnés
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                            <div className="sm:col-span-1">
                              <dt className="text-sm font-medium text-gray-500">Engagement moyen</dt>
                              <dd className="mt-1 text-sm text-gray-900">6.2%</dd>
                            </div>
                            <div className="sm:col-span-1">
                              <dt className="text-sm font-medium text-gray-500">Vues moyennes</dt>
                              <dd className="mt-1 text-sm text-gray-900">22K</dd>
                            </div>
                          </dl>
                        </div>
                        <div className="mt-4">
                          <a href="mailto:thomas@techstyle.fr" className="text-sm font-medium text-[#1D9D73] hover:text-[#34D399]">
                            thomas@techstyle.fr
                          </a>
                        </div>
                        <div className="mt-5">
                          <button
                            type="button"
                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-[#1D9D73] hover:bg-[#34D399]"
                          >
                            Contacter
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Catégorie SaaS/B2B */}
                <div className="mb-10">
                  <h3 className="text-lg font-medium text-gray-900 mb-4 pb-2 border-b border-gray-200">SaaS & B2B</h3>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Influenceur 3 */}
                    <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
                      <div className="px-4 py-5 sm:p-6">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-medium text-gray-900">Julie Moreau</h4>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Marketing B2B
                          </span>
                        </div>
                        <div className="mt-4 flex items-center">
                          <img className="h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/women/68.jpg" alt="Julie Moreau" />
                          <div className="ml-4">
                            <div className="flex space-x-3">
                              <a href="https://linkedin.com/in/juliemoreau" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                              </a>
                              <a href="https://twitter.com/juliemoreauB2B" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                              </a>
                            </div>
                            <div className="mt-1 text-sm text-gray-500">
                              <span className="font-medium">15K</span> abonnés
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                            <div className="sm:col-span-1">
                              <dt className="text-sm font-medium text-gray-500">Engagement moyen</dt>
                              <dd className="mt-1 text-sm text-gray-900">9.8%</dd>
                            </div>
                            <div className="sm:col-span-1">
                              <dt className="text-sm font-medium text-gray-500">Vues moyennes</dt>
                              <dd className="mt-1 text-sm text-gray-900">8K</dd>
                            </div>
                          </dl>
                        </div>
                        <div className="mt-4">
                          <a href="mailto:julie@b2binfluence.com" className="text-sm font-medium text-[#1D9D73] hover:text-[#34D399]">
                            julie@b2binfluence.com
                          </a>
                        </div>
                        <div className="mt-5">
                          <button
                            type="button"
                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-[#1D9D73] hover:bg-[#34D399]"
                          >
                            Contacter
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Influenceur 4 */}
                    <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
                      <div className="px-4 py-5 sm:p-6">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-medium text-gray-900">Marc Lefevre</h4>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Tech & Innovation
                          </span>
                        </div>
                        <div className="mt-4 flex items-center">
                          <img className="h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/men/76.jpg" alt="Marc Lefevre" />
                          <div className="ml-4">
                            <div className="flex space-x-3">
                              <a href="https://linkedin.com/in/marclefevre" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                              </a>
                              <a href="https://youtube.com/marclefevre" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                              </a>
                            </div>
                            <div className="mt-1 text-sm text-gray-500">
                              <span className="font-medium">32K</span> abonnés
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                            <div className="sm:col-span-1">
                              <dt className="text-sm font-medium text-gray-500">Engagement moyen</dt>
                              <dd className="mt-1 text-sm text-gray-900">7.4%</dd>
                            </div>
                            <div className="sm:col-span-1">
                              <dt className="text-sm font-medium text-gray-500">Vues moyennes</dt>
                              <dd className="mt-1 text-sm text-gray-900">18K</dd>
                            </div>
                          </dl>
                        </div>
                        <div className="mt-4">
                          <a href="mailto:marc@techinnovation.fr" className="text-sm font-medium text-[#1D9D73] hover:text-[#34D399]">
                            marc@techinnovation.fr
                          </a>
                        </div>
                        <div className="mt-5">
                          <button
                            type="button"
                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-[#1D9D73] hover:bg-[#34D399]"
                          >
                            Contacter
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Section de contact */}
                <div className="mt-10 bg-white shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-[#F7941D] to-[#FDBA74]">
                    <h2 className="text-lg leading-6 font-medium text-white">Besoin d'un micro-influenceur spécifique ?</h2>
                    <p className="mt-1 max-w-2xl text-sm text-white opacity-90">Notre équipe peut vous aider à trouver le partenaire idéal</p>
                  </div>
                  <div className="px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Prénom</label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="shadow-sm focus:ring-[#1D9D73] focus:border-[#1D9D73] block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Nom</label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="shadow-sm focus:ring-[#1D9D73] focus:border-[#1D9D73] block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <div className="mt-1">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="shadow-sm focus:ring-[#1D9D73] focus:border-[#1D9D73] block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="industry" className="block text-sm font-medium text-gray-700">Secteur d'activité</label>
                        <div className="mt-1">
                          <select
                            id="industry"
                            name="industry"
                            autoComplete="industry"
                            className="shadow-sm focus:ring-[#1D9D73] focus:border-[#1D9D73] block w-full sm:text-sm border-gray-300 rounded-md"
                          >
                            <option>E-commerce</option>
                            <option>SaaS / B2B</option>
                            <option>Beauté / Cosmétique</option>
                            <option>Mode</option>
                            <option>Alimentation</option>
                            <option>Fitness / Bien-être</option>
                            <option>Autre</option>
                          </select>
                        </div>
                      </div>

                      <div className="sm:col-span-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Votre besoin</label>
                        <div className="mt-1">
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="shadow-sm focus:ring-[#1D9D73] focus:border-[#1D9D73] block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder="Décrivez votre projet et le type d'influenceur que vous recherchez..."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#F7941D] hover:bg-[#FDBA74]"
                      >
                        Envoyer ma demande
                      </button>
                    </div>
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
