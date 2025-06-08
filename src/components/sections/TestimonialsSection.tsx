'use client';

import { useState } from 'react';
import Image from 'next/image';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const TestimonialsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 4;

  const testimonials = [
    // SaaS
    {
      id: 1,
      name: "Thomas Durand",
      company: "CloudFlow",
      role: "Directeur Marketing",
      type: "SaaS",
      image: "/images/avatars/avatar-1.png",
      content: "Adzly a transformé notre stratégie d'acquisition. Nous avons réduit notre CPA de 42% tout en augmentant notre taux de conversion. L'interface est intuitive et les recommandations sont pertinentes.",
      rating: 5
    },
    {
      id: 2,
      name: "Sophie Martin",
      company: "DataSync",
      role: "CMO",
      type: "SaaS",
      image: "/images/avatars/avatar-2.png",
      content: "La plateforme Adzly nous permet de gérer nos campagnes sur plusieurs canaux avec une efficacité remarquable. Le ROI a augmenté de 78% en seulement 3 mois.",
      rating: 5
    },
    {
      id: 3,
      name: "Alexandre Petit",
      company: "TaskMaster",
      role: "Growth Manager",
      type: "SaaS",
      image: "/images/avatars/avatar-3.png",
      content: "L'analyse prédictive d'Adzly nous a permis d'identifier les segments les plus rentables pour notre solution SaaS. Résultat : +35% de leads qualifiés.",
      rating: 4
    },
    // Startups
    {
      id: 4,
      name: "Julie Leroy",
      company: "GreenTech",
      role: "Fondatrice",
      type: "Startup",
      image: "/images/avatars/avatar-4.png",
      content: "En tant que startup avec un budget limité, Adzly nous a aidés à maximiser chaque euro investi. Leur approche consultative a fait toute la différence.",
      rating: 5
    },
    {
      id: 5,
      name: "Maxime Dubois",
      company: "FinTech Solutions",
      role: "CEO",
      type: "Startup",
      image: "/images/avatars/avatar-1.png",
      content: "Nous avons testé plusieurs solutions avant de découvrir Adzly. La différence est flagrante : notre taux d'acquisition a doublé et notre coût par lead a diminué de 37%.",
      rating: 5
    },
    {
      id: 6,
      name: "Camille Bernard",
      company: "MediConnect",
      role: "Directrice Commerciale",
      type: "Startup",
      image: "/images/avatars/avatar-2.png",
      content: "Adzly comprend les défis spécifiques des startups en santé. Leur expertise sectorielle nous a permis de cibler efficacement les professionnels de santé.",
      rating: 4
    },
    // PME
    {
      id: 7,
      name: "Philippe Moreau",
      company: "Bâti-Pro",
      role: "Directeur Général",
      type: "PME",
      image: "/images/avatars/avatar-3.png",
      content: "Notre PME dans le secteur du bâtiment n'avait jamais vraiment exploité le digital. Avec Adzly, nous avons multiplié par 3 nos demandes de devis qualifiées.",
      rating: 5
    },
    {
      id: 8,
      name: "Nathalie Roux",
      company: "Mobilier Design",
      role: "Responsable Marketing",
      type: "PME",
      image: "/images/avatars/avatar-4.png",
      content: "La simplicité d'utilisation d'Adzly nous a séduits. Même avec une petite équipe, nous gérons efficacement nos campagnes sur Google et Facebook.",
      rating: 4
    },
    {
      id: 9,
      name: "Laurent Girard",
      company: "Imprimerie Moderne",
      role: "Gérant",
      type: "PME",
      image: "/images/avatars/avatar-1.png",
      content: "Adzly nous a aidés à digitaliser notre activité traditionnelle d'imprimerie. Nous touchons maintenant une clientèle plus large et plus jeune.",
      rating: 5
    },
    // TPE
    {
      id: 10,
      name: "Marie Leclerc",
      company: "Fleuriste Passion",
      role: "Propriétaire",
      type: "TPE",
      image: "/images/avatars/avatar-2.png",
      content: "Je n'y connaissais rien en publicité en ligne. Adzly a tout simplifié et m'a permis d'attirer une clientèle locale fidèle. Mon chiffre d'affaires a augmenté de 25%.",
      rating: 5
    },
    {
      id: 11,
      name: "Paul Dupont",
      company: "Boulangerie Artisanale",
      role: "Artisan",
      type: "TPE",
      image: "/images/avatars/avatar-3.png",
      content: "Grâce à Adzly, notre petite boulangerie attire maintenant des clients dans un rayon de 15km. Les campagnes locales sont extrêmement efficaces.",
      rating: 4
    },
    {
      id: 12,
      name: "Sylvie Mercier",
      company: "Institut Beauté & Bien-être",
      role: "Gérante",
      type: "TPE",
      image: "/images/avatars/avatar-4.png",
      content: "Adzly m'a permis de remplir mon agenda en ciblant précisément ma clientèle idéale. Le retour sur investissement est impressionnant pour une petite structure comme la mienne.",
      rating: 5
    },
    // Services
    {
      id: 13,
      name: "Michel Lambert",
      company: "Cabinet Conseil RH",
      role: "Consultant Senior",
      type: "Services",
      image: "/images/avatars/avatar-1.png",
      content: "En tant que cabinet de conseil, notre cycle de vente est long. Adzly nous a aidés à générer des leads B2B qualifiés et à nourrir la relation jusqu'à la conversion.",
      rating: 4
    },
    {
      id: 14,
      name: "Isabelle Fournier",
      company: "Agence Immobilière Premium",
      role: "Directrice",
      type: "Services",
      image: "/images/avatars/avatar-2.png",
      content: "La précision du ciblage d'Adzly est impressionnante. Nous touchons exactement les acheteurs potentiels pour nos biens immobiliers haut de gamme.",
      rating: 5
    },
    // E-commerce
    {
      id: 15,
      name: "Nicolas Blanc",
      company: "SportShop",
      role: "E-commerce Manager",
      type: "E-commerce",
      image: "/images/avatars/avatar-3.png",
      content: "Notre boutique en ligne a vu son taux de conversion augmenter de 28% grâce aux campagnes optimisées par Adzly. Le retargeting intelligent fait toute la différence.",
      rating: 5
    },
    {
      id: 16,
      name: "Emma Rousseau",
      company: "Mode Éthique",
      role: "Fondatrice",
      type: "E-commerce",
      image: "/images/avatars/avatar-4.png",
      content: "Adzly nous a aidés à trouver notre audience de niche pour nos vêtements éthiques. Notre communauté s'est agrandie et nos ventes ont augmenté de 65% en 6 mois.",
      rating: 5
    }
  ];

  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <StarIcon 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-black">Ce que disent </span>
            <span 
              style={{
                background: 'linear-gradient(to right, #1D9D73, #34D399)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              nos clients
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment Adzly transforme la stratégie marketing de nos clients grâce à notre IA et notre contenu UGC.
          </p>
        </div>

        {/* Filtres par type d'entreprise */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['Tous', 'SaaS', 'Startup', 'PME', 'TPE', 'Services', 'E-commerce'].map((type) => (
            <button
              key={type}
              className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-700 hover:bg-[#1D9D73]/10 hover:text-[#1D9D73] hover:border-[#1D9D73]/20 transition-all"
            >
              {type}
            </button>
          ))}
        </div>

        {/* Témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-3">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    width={48} 
                    height={48} 
                    className="rounded-full" 
                  />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                  <div className="flex mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 flex-grow">{testimonial.content}</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-xs font-medium px-2 py-1 bg-[#1D9D73]/10 rounded-full text-[#1D9D73]">
                  {testimonial.type}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-12 gap-2">
          <button 
            onClick={prevPage}
            className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          
          {Array(totalPages).fill(0).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                currentPage === i 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {i + 1}
            </button>
          ))}
          
          <button 
            onClick={nextPage}
            className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
