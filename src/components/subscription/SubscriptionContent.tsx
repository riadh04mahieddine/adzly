'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import DashboardHeader from '../dashboard/DashboardHeader';
import DashboardSidebar from '../dashboard/DashboardSidebar';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function SubscriptionContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser, userData, logout } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Vérifier les paramètres d'URL pour les retours de Stripe
  useEffect(() => {
    const success = searchParams.get('success');
    const canceled = searchParams.get('canceled');
    const sessionId = searchParams.get('session_id');
    
    if (success === 'true' && sessionId && currentUser) {
      toast.success('Votre abonnement a été activé avec succès!');
      
      // Mettre à jour le statut d'abonnement manuellement en environnement de développement
      // En production, cela serait géré par le webhook Stripe
      const updateSubscriptionStatus = async () => {
        try {
          // Mettre à jour le statut d'abonnement dans Firestore
          const userRef = doc(db, 'users', currentUser.uid);
          await updateDoc(userRef, {
            'subscription.status': 'active',
            'subscription.plan': 'pro',
            'subscription.updatedAt': serverTimestamp(),
            'freeTrialUsed': true,
            'campaignsLimitReached': false,
          });
          
          // Recharger les données utilisateur
          window.location.reload();
        } catch (error) {
          console.error('Erreur lors de la mise à jour du statut d\'abonnement:', error);
          toast.error('Une erreur est survenue lors de la mise à jour de votre abonnement.');
        }
      };
      
      updateSubscriptionStatus();
    } else if (canceled === 'true') {
      toast.error('Le processus d\'abonnement a été annulé.');
    }
  }, [searchParams, currentUser]);
  
  const handleLogout = async () => {
    try {
      await logout();
      router.push('/');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };
  
  const handleSubscribe = async (plan: string) => {
    if (!currentUser) {
      toast.error('Vous devez être connecté pour souscrire à un abonnement');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          plan,
          userId: currentUser.uid,
        }),
      });
      
      const data = await response.json();
      
      if (data.error) {
        toast.error(data.error);
        return;
      }
      
      // Rediriger vers la page de paiement Stripe
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Erreur lors de la création de la session de paiement:', error);
      toast.error('Une erreur est survenue lors de la création de la session de paiement');
    } finally {
      setIsLoading(false);
    }
  };

  const plans = [
    {
      name: 'Essai gratuit',
      description: 'Pour tester notre plateforme',
      price: '0€',
      features: [
        'Création de 3 campagnes',
        'Accès aux fonctionnalités de base',
        'Durée de 30 jours',
      ],
      current: userData?.subscription?.status === 'free_trial',
      disabled: userData?.subscription?.status !== 'free_trial',
    },
    {
      name: 'Pro',
      description: 'Pour les professionnels et PME',
      price: '29€',
      period: '/mois',
      features: [
        'Campagnes illimitées',
        'Optimisation IA avancée',
        'Rapports détaillés',
        'Support prioritaire',
      ],
      current: userData?.subscription?.plan === 'pro',
      primary: true,
    },
    {
      name: 'Entreprise',
      description: 'Pour les grandes entreprises',
      price: 'Sur mesure',
      features: [
        'Toutes les fonctionnalités Pro',
        'API dédiée',
        'Intégrations personnalisées',
        'Account manager dédié',
      ],
      current: userData?.subscription?.plan === 'enterprise',
    },
  ];

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Sidebar for mobile */}
      <div className={`${sidebarOpen ? 'block' : 'hidden'} fixed inset-0 flex z-40 lg:hidden`} role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true" onClick={() => setSidebarOpen(false)}></div>
        
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">Close sidebar</span>
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <DashboardSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>
      </div>
      
      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
            <DashboardSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <DashboardHeader setSidebarOpen={setSidebarOpen} handleLogout={handleLogout} />
        
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">Abonnements</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="py-4">
                {/* Limite de campagnes atteinte - message d'alerte */}
                {userData?.subscription?.status === 'free_trial' && userData?.campaignsCreated >= 3 && (
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-yellow-700">
                          <strong className="font-medium">Limite de campagnes atteinte!</strong> Vous avez utilisé vos 3 campagnes gratuites. Pour continuer à créer des campagnes marketing optimisées, veuillez souscrire à un abonnement ci-dessous.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Statistiques d'utilisation */}
                <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Utilisation des campagnes
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      Votre consommation actuelle
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Campagnes créées</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {userData?.campaignsCreated || 0}
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Limite d'essai gratuit</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {userData?.subscription?.status === 'free_trial' ? (
                            <div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div 
                                  className={`h-2.5 rounded-full ${userData?.campaignsCreated >= 3 ? 'bg-red-600' : 'bg-blue-600'}`} 
                                  style={{ width: `${Math.min((userData?.campaignsCreated / 3) * 100, 100)}%` }}
                                ></div>
                              </div>
                              <p className="text-xs mt-1">
                                {userData?.campaignsCreated}/3 campagnes utilisées
                                {userData?.campaignsCreated >= 3 && (
                                  <span className="text-red-600 font-medium"> - Limite atteinte</span>
                                )}
                              </p>
                            </div>
                          ) : (
                            <span className="text-green-600 font-medium">Illimité avec votre abonnement actuel</span>
                          )}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
                
                {/* Subscription status */}
                <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Votre abonnement actuel
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      Détails et statut de votre abonnement.
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Plan</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {userData?.subscription?.status === 'free_trial' ? 'Essai gratuit' : 
                           userData?.subscription?.plan === 'pro' ? 'Pro' : 
                           userData?.subscription?.plan === 'enterprise' ? 'Entreprise' : 'Aucun'}
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Statut</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {userData?.subscription?.status === 'free_trial' ? (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                              Essai gratuit
                            </span>
                          ) : userData?.subscription?.status === 'active' ? (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Actif
                            </span>
                          ) : (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                              Inactif
                            </span>
                          )}
                        </dd>
                      </div>
                      {userData?.subscription?.trialEnd && (
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">Fin de l'essai</dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {userData.subscription.trialEnd instanceof Date 
                              ? userData.subscription.trialEnd.toLocaleDateString()
                              : new Date((userData.subscription.trialEnd as any).seconds * 1000).toLocaleDateString()
                            }
                          </dd>
                        </div>
                      )}
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Campagnes créées</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {userData?.campaignsCreated || 0} / {userData?.subscription?.status === 'free_trial' ? '3' : '∞'}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
                
                {/* Pricing plans */}
                <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
                  {plans.map((plan) => (
                    <div 
                      key={plan.name} 
                      className={`relative p-8 bg-white border rounded-2xl shadow-sm flex flex-col ${
                        plan.primary ? 'ring-2 ring-blue-500' : ''
                      }`}
                    >
                      {plan.current && (
                        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold">
                          Abonnement actuel
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                        <p className="mt-4 flex items-baseline text-gray-900">
                          <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                          {plan.period && <span className="ml-1 text-xl font-semibold">{plan.period}</span>}
                        </p>
                        <p className="mt-6 text-gray-500">{plan.description}</p>

                        {/* Feature list */}
                        <ul role="list" className="mt-6 space-y-6">
                          {plan.features.map((feature) => (
                            <li key={feature} className="flex">
                              <svg className="flex-shrink-0 w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="ml-3 text-gray-500">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {plan.name === 'Pro' ? (
                        <button
                          onClick={() => !plan.current && !plan.disabled && handleSubscribe('pro')}
                          disabled={plan.current || plan.disabled || isLoading}
                          className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium ${
                            plan.current || plan.disabled || isLoading
                              ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                              : 'bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-700 hover:to-violet-700'
                          }`}
                        >
                          {isLoading ? 'Chargement...' : plan.current ? 'Abonnement actuel' : 'Souscrire'}
                        </button>
                      ) : plan.name === 'Entreprise' ? (
                        <Link
                          href="/contact"
                          className="mt-8 block w-full py-3 px-6 border border-gray-300 rounded-md text-center font-medium text-gray-700 bg-white hover:bg-gray-50"
                        >
                          Nous contacter
                        </Link>
                      ) : (
                        <button
                          disabled={true}
                          className="mt-8 block w-full py-3 px-6 border border-gray-200 rounded-md text-center font-medium bg-gray-100 text-gray-500 cursor-not-allowed"
                        >
                          {plan.current ? 'Abonnement actuel' : 'Non disponible'}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* FAQ */}
                <div className="mt-12 bg-white shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Questions fréquentes
                    </h3>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                      <div className="py-4 sm:py-5 sm:px-6">
                        <dt className="text-sm font-medium text-gray-900">Comment fonctionne l'essai gratuit ?</dt>
                        <dd className="mt-2 text-sm text-gray-500">
                          L'essai gratuit vous permet de créer jusqu'à 3 campagnes publicitaires et d'accéder à toutes les fonctionnalités de base pendant 30 jours.
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:px-6">
                        <dt className="text-sm font-medium text-gray-900">Puis-je annuler mon abonnement à tout moment ?</dt>
                        <dd className="mt-2 text-sm text-gray-500">
                          Oui, vous pouvez annuler votre abonnement à tout moment. Votre abonnement restera actif jusqu'à la fin de la période de facturation en cours.
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:px-6">
                        <dt className="text-sm font-medium text-gray-900">Quels moyens de paiement acceptez-vous ?</dt>
                        <dd className="mt-2 text-sm text-gray-500">
                          Nous acceptons les cartes de crédit (Visa, Mastercard, American Express) et les prélèvements SEPA pour les entreprises européennes.
                        </dd>
                      </div>
                    </dl>
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
