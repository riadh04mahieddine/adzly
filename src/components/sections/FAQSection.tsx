'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Comment Adzly peut-il améliorer mes campagnes publicitaires ?",
      answer: "Adzly analyse votre secteur d'activité, votre audience cible et vos objectifs pour créer des campagnes optimisées sur les plateformes les plus pertinentes. Notre technologie d'IA ajuste continuellement vos campagnes pour maximiser votre ROI et réduire le coût par acquisition."
    },
    {
      question: "Combien de temps faut-il pour voir des résultats ?",
      answer: "La plupart de nos clients constatent une amélioration de leurs performances publicitaires dès les 2 premières semaines. Pour des résultats optimaux, nous recommandons une période d'au moins 1 mois pour permettre à nos algorithmes d'apprentissage d'optimiser pleinement vos campagnes."
    },
    {
      question: "Dois-je avoir des connaissances en marketing digital pour utiliser Adzly ?",
      answer: "Non, Adzly est conçu pour être accessible à tous, même sans expertise en marketing digital. Notre interface intuitive et notre approche consultative vous guident à chaque étape. Nous nous occupons des aspects techniques pendant que vous vous concentrez sur votre business."
    },
    {
      question: "Quelles plateformes publicitaires sont prises en charge ?",
      answer: "Adzly prend en charge les principales plateformes publicitaires dont Google Ads, Facebook/Instagram Ads, LinkedIn Ads, Pinterest Ads et Snapchat Ads. Nous ajoutons régulièrement de nouvelles plateformes pour vous offrir une couverture maximale."
    },
    {
      question: "Puis-je annuler mon abonnement à tout moment ?",
      answer: "Oui, vous pouvez annuler votre abonnement à tout moment sans frais supplémentaires. Nous proposons également une garantie satisfait ou remboursé de 14 jours pour vous permettre d'essayer Adzly sans risque."
    },
    {
      question: "Comment fonctionne le support client ?",
      answer: "Tous nos clients bénéficient d'un support par email avec un temps de réponse moyen de 24h. Les clients du plan Croissance ont accès à un support prioritaire 24/7 par chat et appel vidéo pour une assistance immédiate."
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
                background: 'linear-gradient(to right, #2563EB, #8B5CF6)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              fréquentes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tout ce que vous devez savoir sur Adzly et comment nous pouvons vous aider à optimiser vos campagnes publicitaires.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-sm border ${openIndex === index ? 'border-blue-200' : 'border-gray-100'} overflow-hidden transition-all duration-200`}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-lg text-gray-900">{faq.question}</span>
                <ChevronDownIcon 
                  className={`h-5 w-5 text-blue-500 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`} 
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
