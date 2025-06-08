'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Comment l'IA d'Adzly améliore-t-elle ma stratégie marketing ?",
      answer: "Notre intelligence artificielle analyse votre secteur d'activité, votre audience cible et les tendances actuelles pour créer une stratégie marketing personnalisée. Elle optimise continuellement vos campagnes sur toutes les plateformes pour maximiser votre ROI et détecte automatiquement les opportunités de croissance."
    },
    {
      question: "Comment fonctionne la création de contenu UGC avec Adzly ?",
      answer: "Nous sélectionnons des créateurs de contenu spécifiquement adaptés à votre marque et votre secteur. Ces créateurs produisent des vidéos authentiques et engageantes qui convertissent mieux que les publicités traditionnelles. Tout le processus est géré par notre équipe, de la sélection des créateurs à la production finale."
    },
    {
      question: "Dois-je avoir des connaissances en marketing digital pour utiliser Adzly ?",
      answer: "Non, Adzly est conçu pour être accessible à tous, même sans expertise en marketing digital. Notre équipe et notre IA s'occupent de tous les aspects techniques pendant que vous vous concentrez sur votre business. Nous vous fournissons des rapports clairs et des recommandations actionables."
    },
    {
      question: "Quelles plateformes sont couvertes par Adzly ?",
      answer: "Adzly couvre toutes les principales plateformes : Facebook, Instagram, TikTok, LinkedIn, Pinterest, YouTube, Google Ads et plus encore. Notre approche multi-plateforme vous permet d'atteindre votre audience idéale où qu'elle se trouve, avec une stratégie cohérente et optimisée."
    },
    {
      question: "Combien de temps faut-il pour voir des résultats ?",
      answer: "La plupart de nos clients constatent une amélioration significative dès le premier mois. Notre contenu UGC commence à générer des résultats immédiatement, tandis que notre IA optimise continuellement vos campagnes pour des performances croissantes au fil du temps."
    },
    {
      question: "Comment débuter avec Adzly ?",
      answer: "Il suffit de demander une démo gratuite sur notre site. Nous réaliserons un audit complet de votre stratégie marketing actuelle et vous proposerons un plan personnalisé. Notre équipe vous accompagnera ensuite à chaque étape de la mise en place de votre nouvelle stratégie."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="faq">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-black">Questions </span>
            <span 
              style={{
                background: 'linear-gradient(to right, #1D9D73, #34D399)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              fréquentes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tout ce que vous devez savoir sur Adzly et comment notre IA et notre contenu UGC peuvent transformer votre stratégie marketing.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-sm border ${openIndex === index ? 'border-[#1D9D73]/30' : 'border-gray-100'} overflow-hidden transition-all duration-200`}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-lg text-gray-900">{faq.question}</span>
                <ChevronDownIcon 
                  className={`h-5 w-5 text-[#1D9D73] transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`} 
                />
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'}`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Vous avez d'autres questions ?</p>
          <a 
            href="#contact" 
            className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            Contactez-nous →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
