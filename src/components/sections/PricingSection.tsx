'use client';

import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      id: 'free',
      name: 'Essai',
      description: 'Découvrez les fonctionnalités de base et testez notre plateforme pendant 14 jours.',
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        'Audit marketing gratuit',
        '1 campagne active',
        'Accès à 1 plateforme publicitaire',
        'Recommandations IA basiques',
        'Rapports de performance mensuels',
        'Documentation et tutoriels',
        'Assistance communautaire'
      ],
      cta: 'Commencer gratuitement',
      popular: false,
      isFree: true
    },
    {
      id: 'solo',
      name: 'Solo',
      description: 'Parfait pour les entrepreneurs individuels et les petites entreprises.',
      monthlyPrice: 29.99,
      annualPrice: 299.90, // ~10 mois au lieu de 12 (2 mois offerts)
      features: [
        'Jusqu\'à 5 campagnes actives',
        'Accès à 3 plateformes publicitaires',
        'Suggestions de contenu organique',
        'Analyse de tendances basique',
        'Rapports de performance hebdomadaires',
        'Assistance par email',
        'Optimisation automatique basique'
      ],
      cta: 'Commencer avec Solo',
      popular: false
    },
    {
      id: 'growth',
      name: 'Croissance',
      description: 'Idéal pour les entreprises en pleine expansion et les équipes marketing.',
      monthlyPrice: 59.99,
      annualPrice: 599.90, // ~10 mois au lieu de 12 (2 mois offerts)
      features: [
        'Jusqu\'à 20 campagnes actives',
        'Accès à toutes les plateformes publicitaires',
        'Stratégie de contenu avancée',
        'Analyse de tendances approfondie',
        'Suggestions de micro-influenceurs',
        'Rapports de performance quotidiens',
        'Assistance prioritaire 24/7',
        'Optimisation automatique avancée',
        'Analyses concurrentielles',
        'Intégration CRM'
      ],
      cta: 'Commencer avec Croissance',
      popular: true
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2
    }).format(price);
  };

  return (
    <section className="py-16 md:py-24" id="pricing">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-black">Tarifs </span>
            <span 
              style={{
                background: 'linear-gradient(to right, #1D9D73, #34D399)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              transparents
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez le plan qui correspond à vos besoins et commencez à transformer votre stratégie marketing avec notre IA et notre contenu UGC.
          </p>
        </div>

        {/* Toggle Mensuel/Annuel */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-full flex items-center">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!isAnnual ? 'bg-white shadow-md text-[#1D9D73]' : 'text-gray-500'}`}
              onClick={() => setIsAnnual(false)}
            >
              Mensuel
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${isAnnual ? 'bg-white shadow-md text-[#1D9D73]' : 'text-gray-500'}`}
              onClick={() => setIsAnnual(true)}
            >
              Annuel
              <span className="ml-1 text-xs py-0.5 px-2 bg-[#1D9D73]/10 text-[#1D9D73] rounded-full">-16%</span>
            </button>
          </div>
        </div>

        {/* Plans de tarification */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`bg-white rounded-2xl shadow-lg border ${plan.popular ? 'border-[#1D9D73]' : 'border-gray-200'} overflow-hidden relative`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#1D9D73] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Populaire
                </div>
              )}
              {plan.isFree && (
                <div className="absolute top-0 right-0 bg-[#F7941D] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Nouveau
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  {plan.isFree ? (
                    <>
                      <span className="text-4xl font-bold text-gray-900">Gratuit</span>
                      <span className="text-gray-500 ml-2">pendant 14 jours</span>
                    </>
                  ) : (
                    <>
                      <span className="text-4xl font-bold text-gray-900">
                        {formatPrice(isAnnual ? plan.annualPrice / 12 : plan.monthlyPrice)}
                      </span>
                      <span className="text-gray-500 ml-2">/mois</span>
                      {isAnnual && (
                        <div className="text-green-600 text-sm mt-1">
                          Facturé {formatPrice(plan.annualPrice)} par an (2 mois offerts)
                        </div>
                      )}
                    </>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  style={{
                    background: plan.popular 
                      ? 'linear-gradient(to right, #1D9D73, #34D399)'
                      : plan.isFree 
                        ? 'linear-gradient(to right, #F7941D, #FDBA74)'
                        : 'white',
                    color: (plan.popular || plan.isFree) ? 'white' : '#1D9D73',
                    border: (plan.popular || plan.isFree) ? 'none' : '1px solid #1D9D73',
                  }}
                  className="w-full py-3 px-4 rounded-lg font-medium text-center transition-all hover:opacity-90"
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Garantie */}
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            <span className="font-medium">Satisfait ou remboursé.</span> Essayez Adzly pendant 14 jours sans risque.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
