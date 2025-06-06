'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { useSearchParams, useRouter } from 'next/navigation';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import Link from 'next/link';

export default function MarketingPlanPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { currentUser, userData, logout, hasReachedCampaignLimit } = useAuth();
  const [loading, setLoading] = useState(true);
  const [campaign, setCampaign] = useState<any>(null);
  const searchParams = useSearchParams();
  const campaignId = searchParams.get('id');
  const router = useRouter();

  // Vérifier si l'utilisateur a atteint la limite de campagnes et le rediriger vers la page d'abonnement
  useEffect(() => {
    if (userData && hasReachedCampaignLimit()) {
      // Rediriger automatiquement vers la page d'abonnement
      router.push('/dashboard/subscription');
    }
  }, [userData, hasReachedCampaignLimit, router]);

  useEffect(() => {
    const fetchCampaign = async () => {
      setLoading(true);
      
      try {
        // Si un ID de campagne est fourni, récupérer les données de la campagne
        if (campaignId && currentUser) {
          const campaignRef = doc(db, "campaigns", campaignId);
          const campaignSnap = await getDoc(campaignRef);
          
          if (campaignSnap.exists()) {
            const campaignData = campaignSnap.data();
            // Vérifier que la campagne appartient bien à l'utilisateur actuel
            if (campaignData.userId === currentUser.uid) {
              setCampaign({
                id: campaignSnap.id,
                ...campaignData
              });
            }
          }
        }
      } catch (error) {
        console.error("Erreur lors de la récupération de la campagne:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchCampaign();
  }, [campaignId, currentUser]);

  const handleLogout = async () => {
    try {
      await logout();
      window.location.href = '/';
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <DashboardSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <DashboardHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} handleLogout={handleLogout} />
        
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none pb-8">
          <div className="mt-8 px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Votre Plan Marketing 360°</h1>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Stratégie marketing complète basée sur vos réponses
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  {userData && userData.subscription.status === 'free_trial' && (
                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                      <p className="text-sm text-blue-800 font-medium">
                        Campagnes utilisées: <span className="font-bold">{userData.campaignsCreated}/3</span>
                      </p>
                      <p className="text-xs text-blue-600 mt-1">
                        {userData.campaignsCreated >= 3 ? (
                          <Link href="/dashboard/subscription" className="underline">
                            Passez à l'abonnement
                          </Link>
                        ) : (
                          `Restantes: ${3 - userData.campaignsCreated}`
                        )}
                      </p>
                    </div>
                  )}
                  
                  <Link href="/dashboard/campaigns/history" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Historique des campagnes
                  </Link>
                </div>
              </div>
              
              {/* Carte de service complémentaire */}
              <div className="mx-4 mb-8 overflow-hidden">
                <div className="relative">
                  {/* Bannière supérieure */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600 rounded-full opacity-10 -mt-20 -mr-20"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-600 rounded-full opacity-10 -mb-16 -ml-16"></div>
                  
                  <div className="relative bg-gradient-to-br from-white to-blue-50 border-2 border-blue-500 rounded-xl shadow-lg overflow-hidden">
                    {/* Badge "Recommandé" */}
                    <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      RECOMMANDÉ
                    </div>
                    
                    <div className="p-6 sm:p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center mb-4 md:mb-0">
                          <div className="flex-shrink-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full p-3 shadow-md">
                            <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <h2 className="text-2xl font-bold text-gray-900">Consultation Expert</h2>
                            <p className="text-blue-600 font-medium">Configuration complète de votre campagne</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center bg-blue-100 px-4 py-2 rounded-lg">
                          <div className="text-center">
                            <span className="text-3xl font-extrabold text-blue-800">300 €</span>
                            <span className="text-base font-medium text-blue-600"> / session</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 bg-white p-5 rounded-lg border border-gray-100 shadow-inner">
                        <p className="text-base text-gray-700 mb-4">
                          Bénéficiez d'un accompagnement personnalisé avec un expert marketing qui vous guidera pas à pas dans la configuration de votre campagne publicitaire pour les panneaux solaires.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-3 rounded-lg border border-blue-100">
                            <div className="flex items-center mb-2">
                              <div className="bg-blue-500 rounded-full p-1 mr-2">
                                <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <span className="font-medium text-gray-800">Appel vidéo 60 min</span>
                            </div>
                            <p className="text-xs text-gray-600">Avec un expert Google & Facebook Ads spécialisé dans votre secteur</p>
                          </div>
                          
                          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-3 rounded-lg border border-blue-100">
                            <div className="flex items-center mb-2">
                              <div className="bg-blue-500 rounded-full p-1 mr-2">
                                <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                              </div>
                              <span className="font-medium text-gray-800">Configuration en direct</span>
                            </div>
                            <p className="text-xs text-gray-600">Mise en place pratique de vos campagnes avec partage d'écran</p>
                          </div>
                          
                          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-3 rounded-lg border border-blue-100">
                            <div className="flex items-center mb-2">
                              <div className="bg-blue-500 rounded-full p-1 mr-2">
                                <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <span className="font-medium text-gray-800">Questions illimitées</span>
                            </div>
                            <p className="text-xs text-gray-600">Réponses à toutes vos interrogations techniques et stratégiques</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-center mt-6">
                          <button
                            type="button"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition hover:scale-105"
                          >
                            <svg className="-ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Réserver ma consultation
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                {loading ? (
                  <div className="flex justify-center items-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    <span className="ml-3 text-lg font-medium text-gray-700">Génération de votre plan marketing...</span>
                  </div>
                ) : (
                  <div className="space-y-8">
                    {/* Section Résumé */}
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 mb-4">Résumé de votre campagne</h2>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-blue-700">
                          Votre plan marketing 360° pour la promotion de panneaux solaires a été créé avec succès. Nous avons analysé vos réponses et préparé une stratégie marketing complète adaptée à votre secteur d'activité et à votre produit.
                        </p>
                      </div>
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-white p-4 border rounded-lg shadow-sm">
                          <p className="text-sm font-medium text-gray-500">Budget journalier</p>
                          <p className="mt-1 text-2xl font-bold text-gray-900">500 €</p>
                          <p className="text-xs text-gray-500 mt-1">Recommandé pour un ROI optimal</p>
                        </div>
                        <div className="bg-white p-4 border rounded-lg shadow-sm">
                          <p className="text-sm font-medium text-gray-500">Budget mensuel</p>
                          <p className="mt-1 text-2xl font-bold text-gray-900">15 000 €</p>
                          <p className="text-xs text-gray-500 mt-1">Basé sur 30 jours de campagne</p>
                        </div>
                        <div className="bg-white p-4 border rounded-lg shadow-sm">
                          <p className="text-sm font-medium text-gray-500">Conv. estimées/jour</p>
                          <p className="mt-1 text-2xl font-bold text-gray-900">2-3</p>
                          <p className="text-xs text-gray-500 mt-1">Demandes de devis qualifiées</p>
                        </div>
                        <div className="bg-white p-4 border rounded-lg shadow-sm">
                          <p className="text-sm font-medium text-gray-500">Conv. estimées/mois</p>
                          <p className="mt-1 text-2xl font-bold text-gray-900">60-90</p>
                          <p className="text-xs text-gray-500 mt-1">Potentiel de 5-15 installations</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Section Stratégie d'enchère */}
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 mb-4">Stratégie d'enchère</h2>
                      <div className="bg-white p-4 border rounded-lg shadow-sm mb-6">
                        <div className="flex items-center mb-3">
                          <div className="bg-yellow-100 p-2 rounded-full">
                            <svg className="h-6 w-6 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h3 className="ml-3 text-lg font-medium text-gray-900">Enchère manuelle CPC (coût par clic)</h3>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">
                          Pour votre campagne de panneaux solaires, nous recommandons la stratégie d'enchère "CPC manuel". Cette stratégie vous permet de contrôler précisément le montant maximum que vous êtes prêt à payer pour chaque clic sur vos annonces, idéal pour les débutants qui souhaitent maîtriser leurs dépenses.
                        </p>
                        <div className="bg-gray-50 p-3 rounded-md">
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Pourquoi cette stratégie ?</h4>
                          <ul className="list-disc pl-5 text-xs text-gray-600 space-y-1">
                            <li>CPC recommandé : <span className="font-medium">10€ - 15€</span> par clic selon le groupe d'annonces</li>
                            <li>Contrôle total sur vos enchères et votre budget</li>
                            <li>Idéal pour les débutants qui n'ont pas encore de données de conversion</li>
                            <li>Possibilité d'ajuster manuellement les enchères par mot-clé selon les performances</li>
                            <li>Transition possible vers des stratégies automatisées après avoir collecté suffisamment de données</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    {/* Section Stratégie */}
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 mb-4">Piliers de la stratégie</h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 border rounded-lg shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="bg-blue-100 p-2 rounded-full">
                              <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                            </div>
                            <h3 className="ml-3 text-lg font-medium text-gray-900">Acquisition</h3>
                          </div>
                          <p className="text-sm text-gray-500">
                            Stratégie d'acquisition ciblée pour attirer de nouveaux clients qualifiés via les canaux les plus pertinents pour votre secteur.
                          </p>
                        </div>
                        
                        <div className="bg-white p-4 border rounded-lg shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="bg-green-100 p-2 rounded-full">
                              <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <h3 className="ml-3 text-lg font-medium text-gray-900">Conversion</h3>
                          </div>
                          <p className="text-sm text-gray-500">
                            Optimisation des parcours utilisateurs pour maximiser les taux de conversion et réduire le coût par acquisition.
                          </p>
                        </div>
                        
                        <div className="bg-white p-4 border rounded-lg shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="bg-purple-100 p-2 rounded-full">
                              <svg className="h-6 w-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <h3 className="ml-3 text-lg font-medium text-gray-900">Fidélisation</h3>
                          </div>
                          <p className="text-sm text-gray-500">
                            Stratégies pour augmenter la valeur vie client et encourager les achats répétés et les recommandations.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Section Groupes d'annonces */}
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 mb-4">Groupes d'annonces recommandés</h2>
                      <p className="text-sm text-gray-600 mb-4">
                        Nous avons créé 5 groupes d'annonces stratégiques pour maximiser la performance de votre campagne de panneaux solaires. Chaque groupe cible un aspect spécifique et contient des mots-clés pertinents.
                      </p>
                      <div className="overflow-hidden bg-white shadow sm:rounded-md mb-6">
                        <ul className="divide-y divide-gray-200">
                          <li>
                            <div className="px-4 py-4 sm:px-6">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h3 className="text-lg font-medium text-blue-600">1. Économies d'énergie</h3>
                                </div>
                                <div className="ml-2 flex-shrink-0 flex">
                                  <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    CPC moyen estimé: 12,0€
                                  </p>
                                </div>
                              </div>
                              <div className="mt-2">
                                <p className="text-sm text-gray-700 mb-2">Cible les personnes intéressées par les économies d'énergie et la réduction de leurs factures.</p>
                                <div className="flex flex-wrap gap-1">
                                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">panneaux solaires économies</span>
                                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">réduire facture électricité</span>
                                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">installation solaire rentabilité</span>
                                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">panneau photovoltaïque économie</span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="px-4 py-4 sm:px-6">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h3 className="text-lg font-medium text-blue-600">2. Écologie et environnement</h3>
                                </div>
                                <div className="ml-2 flex-shrink-0 flex">
                                  <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    CPC moyen estimé: 10,5€
                                  </p>
                                </div>
                              </div>
                              <div className="mt-2">
                                <p className="text-sm text-gray-700 mb-2">Cible les personnes sensibles aux questions environnementales et à l'énergie verte.</p>
                                <div className="flex flex-wrap gap-1">
                                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">panneaux solaires écologiques</span>
                                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">energie renouvelable maison</span>
                                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">panneau solaire empreinte carbone</span>
                                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">maison écologique solaire</span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="px-4 py-4 sm:px-6">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h3 className="text-lg font-medium text-blue-600">3. Aides et subventions</h3>
                                </div>
                                <div className="ml-2 flex-shrink-0 flex">
                                  <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    CPC moyen estimé: 14,5€
                                  </p>
                                </div>
                              </div>
                              <div className="mt-2">
                                <p className="text-sm text-gray-700 mb-2">Cible les personnes recherchant des informations sur les aides financières disponibles.</p>
                                <div className="flex flex-wrap gap-1">
                                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">prime panneaux solaires</span>
                                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">subvention installation solaire</span>
                                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">crédit impôt panneau solaire</span>
                                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">aide état solaire 2025</span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="px-4 py-4 sm:px-6">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h3 className="text-lg font-medium text-blue-600">4. Installation et technique</h3>
                                </div>
                                <div className="ml-2 flex-shrink-0 flex">
                                  <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    CPC moyen estimé: 13,0€
                                  </p>
                                </div>
                              </div>
                              <div className="mt-2">
                                <p className="text-sm text-gray-700 mb-2">Cible les personnes intéressées par les aspects techniques et l'installation.</p>
                                <div className="flex flex-wrap gap-1">
                                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">installation panneaux solaires</span>
                                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">pose panneau photovoltaïque</span>
                                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">installateur solaire certifié</span>
                                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">rendement panneau solaire</span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="px-4 py-4 sm:px-6">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h3 className="text-lg font-medium text-blue-600">5. Comparaison et devis</h3>
                                </div>
                                <div className="ml-2 flex-shrink-0 flex">
                                  <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    CPC moyen estimé: 16,0€
                                  </p>
                                </div>
                              </div>
                              <div className="mt-2">
                                <p className="text-sm text-gray-700 mb-2">Cible les personnes prêtes à comparer et à demander des devis.</p>
                                <div className="flex flex-wrap gap-1">
                                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">devis panneaux solaires</span>
                                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">comparatif panneau photovoltaïque</span>
                                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">meilleur installateur solaire</span>
                                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">prix installation panneau solaire</span>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    {/* Section Canaux */}
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 mb-4">Canaux recommandés</h2>
                      <div className="overflow-hidden bg-white shadow sm:rounded-md">
                        <ul className="divide-y divide-gray-200">
                          <li>
                            <div className="px-4 py-4 sm:px-6">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <img src="/images/partenaire/Google__G__logo.svg.webp" alt="Google Ads" className="h-8 w-8 mr-3" />
                                  <p className="font-medium text-blue-600 truncate">Google Ads</p>
                                </div>
                                <div className="ml-2 flex-shrink-0 flex">
                                  <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    Principal (75% du budget)
                                  </p>
                                </div>
                              </div>
                              <div className="mt-2 sm:flex sm:justify-between">
                                <div className="sm:flex">
                                  <p className="flex items-center text-sm text-gray-500">
                                    Campagnes Search et Display ciblées pour les panneaux solaires
                                  </p>
                                </div>
                              </div>
                              <div className="mt-3 bg-gray-50 p-3 rounded-md">
                                <h4 className="text-sm font-medium text-gray-700 mb-2">Objectifs principaux</h4>
                                <ul className="list-disc pl-5 text-xs text-gray-600 space-y-1">
                                  <li>Acquisition de prospects qualifiés intéressés par les panneaux solaires</li>
                                  <li>Ciblage géographique précis dans les zones à fort potentiel solaire</li>
                                  <li>Optimisation pour les conversions de demandes de devis</li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="px-4 py-4 sm:px-6">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <img src="/images/partenaire/Facebook.svg.webp" alt="Facebook & Instagram Ads" className="h-8 w-8 mr-3" />
                                  <p className="font-medium text-blue-600 truncate">Facebook & Instagram Ads</p>
                                </div>
                                <div className="ml-2 flex-shrink-0 flex">
                                  <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    Retargeting (25% du budget Google)
                                  </p>
                                </div>
                              </div>
                              <div className="mt-2 sm:flex sm:justify-between">
                                <div className="sm:flex">
                                  <p className="flex items-center text-sm text-gray-500">
                                    Campagnes de remarketing pour visiteurs du site et audiences similaires
                                  </p>
                                </div>
                              </div>
                              <div className="mt-3 bg-gray-50 p-3 rounded-md">
                                <h4 className="text-sm font-medium text-gray-700 mb-2">Stratégie de retargeting</h4>
                                <ul className="list-disc pl-5 text-xs text-gray-600 space-y-1">
                                  <li>Ciblage des visiteurs du site n'ayant pas converti (75% du budget Facebook)</li>
                                  <li>Ciblage d'audiences similaires aux clients existants (25% du budget Facebook)</li>
                                  <li>Formats visuels montrant les bénéfices des panneaux solaires</li>
                                  <li>Carrousels avant/après montrant les économies réalisées par des clients satisfaits</li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="px-4 py-4 sm:px-6">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <div className="bg-blue-100 p-2 rounded-full h-8 w-8 flex items-center justify-center mr-3">
                                    <svg className="h-4 w-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                  </div>
                                  <p className="font-medium text-blue-600 truncate">Email & SMS Marketing</p>
                                </div>
                                <div className="ml-2 flex-shrink-0 flex">
                                  <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                    Recommandé (phase 2)
                                  </p>
                                </div>
                              </div>
                              <div className="mt-2 sm:flex sm:justify-between">
                                <div className="sm:flex">
                                  <p className="flex items-center text-sm text-gray-500">
                                    Nurturing et conversion des prospects
                                  </p>
                                </div>
                              </div>
                              <div className="mt-3 bg-gray-50 p-3 rounded-md">
                                <h4 className="text-sm font-medium text-gray-700 mb-2">Stratégie de collecte de leads</h4>
                                <ul className="list-disc pl-5 text-xs text-gray-600 space-y-1">
                                  <li><span className="font-medium">Création d'un ebook gratuit</span> : "Guide complet des économies avec les panneaux solaires"</li>
                                  <li><span className="font-medium">Webinaire gratuit</span> : "Comment réduire votre facture d'électricité de 70% grâce au solaire"</li>
                                  <li><span className="font-medium">Calculateur en ligne</span> : "Estimez vos économies avec les panneaux solaires"</li>
                                  <li>Séquence d'emails automatiques pour nurturing (6 emails sur 3 semaines)</li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    {/* Section Budget */}
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 mb-4">Recommandation de budget</h2>
                      <div className="bg-white p-4 border rounded-lg shadow-sm">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div className="mb-4 md:mb-0">
                            <p className="text-sm font-medium text-gray-500">Budget mensuel total</p>
                            <p className="mt-1 text-3xl font-extrabold text-gray-900">15 000 €</p>
                            <p className="text-xs text-gray-500 mt-1">Soit 500€/jour sur 30 jours</p>
                          </div>
                          <div className="flex-1 md:ml-8">
                            <div className="mb-3">
                              <div className="flex justify-between text-sm text-gray-600 mb-1">
                                <span className="font-medium">Google Ads (75%)</span>
                                <span>15 000 € / mois</span>
                              </div>
                              <div className="h-2 bg-gray-200 rounded-full">
                                <div className="h-2 bg-blue-600 rounded-full" style={{ width: '75%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-sm text-gray-600 mb-1">
                                <span className="font-medium">Facebook & Instagram (25%)</span>
                                <span>3 750 € / mois</span>
                              </div>
                              <div className="h-2 bg-gray-200 rounded-full">
                                <div className="h-2 bg-purple-500 rounded-full" style={{ width: '25%' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-yellow-50 p-3 rounded-md">
                          <h4 className="text-sm font-medium text-yellow-800 mb-1">Retour sur investissement estimé</h4>
                          <p className="text-xs text-yellow-700">
                            Avec un taux de conversion moyen de 4% et un panier moyen de 8 000€ pour une installation de panneaux solaires, 
                            le ROI estimé est de 320% (pour 60-90 leads générés par mois, convertis en 2-4 installations).  
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Section Importance des étapes */}
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 mb-4">Importance de chaque étape</h2>
                      <div className="bg-white p-4 border rounded-lg shadow-sm">
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-md font-medium text-gray-800 mb-2">1. Campagne Google Ads</h3>
                            <p className="text-sm text-gray-600">
                              La campagne Google Ads est le pilier principal de votre stratégie d'acquisition. Elle permet de capturer l'intention d'achat 
                              des utilisateurs qui recherchent activement des informations sur les panneaux solaires. Les mots-clés ciblés couvrent l'ensemble 
                              du parcours client, de la recherche d'information à la demande de devis.
                            </p>
                          </div>
                          <div>
                            <h3 className="text-md font-medium text-gray-800 mb-2">2. Retargeting Facebook & Instagram</h3>
                            <p className="text-sm text-gray-600">
                              Le retargeting est essentiel pour convertir les visiteurs qui ont montré un intérêt mais n'ont pas encore franchi le pas. 
                              En allouant 25% du budget Google à cette stratégie, vous pouvez maintenir votre marque dans l'esprit des prospects et les 
                              convaincre avec des témoignages visuels et des arguments persuasifs.
                            </p>
                          </div>
                          <div>
                            <h3 className="text-md font-medium text-gray-800 mb-2">3. Collecte de leads via contenu à valeur ajoutée</h3>
                            <p className="text-sm text-gray-600">
                              La création d'un ebook, d'un webinaire ou d'un calculateur d'économies est une stratégie puissante pour collecter des 
                              contacts qualifiés. Ces outils permettent d'établir votre expertise dans le domaine des panneaux solaires tout en 
                              récoltant des informations précieuses sur vos prospects pour les nurturing via email.
                            </p>
                          </div>
                          <div>
                            <h3 className="text-md font-medium text-gray-800 mb-2">4. Nurturing par email et SMS</h3>
                            <p className="text-sm text-gray-600">
                              Une fois les contacts obtenus, une séquence d'emails automatiques permet de maintenir l'engagement et d'accompagner 
                              le prospect dans sa décision d'achat. Cette étape est cruciale car l'achat de panneaux solaires est une décision 
                              importante qui nécessite souvent plusieurs semaines de réflexion et de recherche d'information.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Section Actions */}
                    <div className="pt-5">
                      <div className="flex justify-end">
                        <button
                          type="button"
                          className="mr-3 inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Télécharger le plan (PDF)
                        </button>
                        <button
                          type="button"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          <svg className="-ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Lancer ma campagne
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
