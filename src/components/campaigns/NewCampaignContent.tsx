'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import DashboardHeader from '../dashboard/DashboardHeader';
import DashboardSidebar from '../dashboard/DashboardSidebar';
import InitialQuestionnaire from './InitialQuestionnaire';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NewCampaignContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { currentUser, userData, logout, incrementCampaignCount, hasReachedCampaignLimit } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [limitReached, setLimitReached] = useState(false);
  const router = useRouter();
  
  const [campaignData, setCampaignData] = useState({
    experienceLevel: '',
    platformsUsed: [],
    monthlyConversions: '',
    industry: '',
    product: '',
  });
  
  const handleLogout = async () => {
    try {
      await logout();
      window.location.href = '/';
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };
  
  // Vérifier si l'utilisateur a atteint la limite de campagnes
  useEffect(() => {
    if (userData && hasReachedCampaignLimit()) {
      setLimitReached(true);
      // Rediriger automatiquement vers la page d'abonnement
      router.push('/dashboard/subscription');
    }
  }, [userData, hasReachedCampaignLimit, router]);
  
  const handleQuestionnaireSubmit = async (data: any) => {
    // Vérifier si l'utilisateur a atteint la limite de campagnes
    if (userData && hasReachedCampaignLimit()) {
      setLimitReached(true);
      // Rediriger automatiquement vers la page d'abonnement
      router.push('/dashboard/subscription');
      return;
    }
    
    const fullCampaignData = {
      ...campaignData,
      ...data
    };
    
    setCampaignData(fullCampaignData);
    
    try {
      // Enregistrer la campagne dans Firestore
      const campaignRef = await addDoc(collection(db, "campaigns"), {
        ...fullCampaignData,
        userId: currentUser?.uid,
        createdAt: serverTimestamp()
      });
      
      console.log("Campagne créée avec succès avec ID:", campaignRef.id);
      
      // Incrémenter le compteur de campagnes
      const success = await incrementCampaignCount();
      if (!success) {
        console.error("Erreur lors de l'incrémentation du compteur de campagnes");
      }
      
      // Rediriger vers la page du plan marketing 360°
      window.location.href = `/dashboard/campaigns/marketing-plan?id=${campaignRef.id}`;
    } catch (error) {
      console.error("Erreur lors de la création de la campagne:", error);
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
                  <h1 className="text-2xl font-bold text-gray-900">Création d'une nouvelle campagne</h1>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Suivez les étapes pour créer une campagne publicitaire optimisée
                  </p>
                </div>
                
                {userData && userData.subscription.status === 'free_trial' && (
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-800 font-medium">
                      Campagnes utilisées: <span className="font-bold">{userData.campaignsCreated}/3</span>
                    </p>
                    <p className="text-xs text-blue-600 mt-1">
                      {userData.campaignsCreated >= 3 ? (
                        <Link href="/dashboard/subscription" className="underline">
                          Passez à l'abonnement pour créer plus de campagnes
                        </Link>
                      ) : (
                        `Restantes: ${3 - userData.campaignsCreated}`
                      )}
                    </p>
                  </div>
                )}
              </div>
              
              {/* Stepper */}
              <div className="px-4 py-5 sm:px-6">
                <nav className="flex items-center justify-center" aria-label="Progress">
                  <ol role="list" className="flex items-center space-x-5">
                    <li>
                      <div className={`flex items-center ${currentStep >= 1 ? 'text-blue-600' : 'text-gray-500'}`}>
                        <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border-2 ${currentStep >= 1 ? 'border-blue-600' : 'border-gray-300'}`}>
                          1
                        </span>
                        <span className="ml-3 text-sm font-medium">Questionnaire</span>
                      </div>
                    </li>
                    <li>
                      <div className={`flex items-center ${currentStep >= 2 ? 'text-blue-600' : 'text-gray-500'}`}>
                        <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border-2 ${currentStep >= 2 ? 'border-blue-600' : 'border-gray-300'}`}>
                          2
                        </span>
                        <span className="ml-3 text-sm font-medium">Analyse</span>
                      </div>
                    </li>
                    <li>
                      <div className={`flex items-center ${currentStep >= 3 ? 'text-blue-600' : 'text-gray-500'}`}>
                        <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border-2 ${currentStep >= 3 ? 'border-blue-600' : 'border-gray-300'}`}>
                          3
                        </span>
                        <span className="ml-3 text-sm font-medium">Structure</span>
                      </div>
                    </li>
                    <li>
                      <div className={`flex items-center ${currentStep >= 4 ? 'text-blue-600' : 'text-gray-500'}`}>
                        <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border-2 ${currentStep >= 4 ? 'border-blue-600' : 'border-gray-300'}`}>
                          4
                        </span>
                        <span className="ml-3 text-sm font-medium">Budget</span>
                      </div>
                    </li>
                    <li>
                      <div className={`flex items-center ${currentStep >= 5 ? 'text-blue-600' : 'text-gray-500'}`}>
                        <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border-2 ${currentStep >= 5 ? 'border-blue-600' : 'border-gray-300'}`}>
                          5
                        </span>
                        <span className="ml-3 text-sm font-medium">Résumé</span>
                      </div>
                    </li>
                  </ol>
                </nav>
              </div>
              
              {/* Content based on current step */}
              <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                {limitReached ? (
                  <div className="text-center py-12 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <svg className="mx-auto h-12 w-12 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <h3 className="mt-4 text-lg font-medium text-yellow-800">Limite de campagnes atteinte</h3>
                    <p className="mt-2 text-sm text-yellow-600 max-w-md mx-auto">
                      Vous avez atteint la limite de 3 campagnes pour votre essai gratuit. Pour créer plus de campagnes, veuillez souscrire à un abonnement.
                    </p>
                    <div className="mt-6">
                      <Link href="/dashboard/subscription" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Voir les abonnements
                      </Link>
                      <Link href="/dashboard/campaigns/history" className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Voir mes campagnes
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    {currentStep === 1 && (
                      <InitialQuestionnaire onSubmit={handleQuestionnaireSubmit} />
                    )}
                    
                    {currentStep === 2 && (
                      <div className="text-center py-12">
                        <h3 className="text-lg font-medium text-gray-900">Analyse des mots-clés</h3>
                        <p className="mt-2 text-sm text-gray-500">
                          Cette fonctionnalité sera implémentée dans la prochaine étape.
                        </p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
