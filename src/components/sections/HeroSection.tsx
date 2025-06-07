'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';

const HeroSection = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Traitement de l'inscription
    console.log('Email soumis:', email);
    alert(`Merci pour votre inscription! Nous vous contacterons bientôt.`);
  };

  return (
    <section 
      className="py-16 md:py-24 overflow-hidden relative" 
      id="hero"
      style={{
        backgroundImage: 'url(/images/wave-bg.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* En-tête avec avatars et badge */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center">
            <div className="flex -space-x-4 mr-5">
              <div className="w-14 h-14 rounded-full border-2 border-white shadow-md overflow-hidden">
                <Image src="/images/avatars/avatar-1.png" alt="Client 1" width={56} height={56} className="w-full h-full object-cover" />
              </div>
              <div className="w-14 h-14 rounded-full border-2 border-white shadow-md overflow-hidden">
                <Image src="/images/avatars/avatar-2.png" alt="Client 2" width={56} height={56} className="w-full h-full object-cover" />
              </div>
              <div className="w-14 h-14 rounded-full border-2 border-white shadow-md overflow-hidden">
                <Image src="/images/avatars/avatar-3.png" alt="Client 3" width={56} height={56} className="w-full h-full object-cover" />
              </div>
              <div className="w-14 h-14 rounded-full border-2 border-white shadow-md overflow-hidden">
                <Image src="/images/avatars/avatar-4.png" alt="Client 4" width={56} height={56} className="w-full h-full object-cover" />
              </div>
              <div className="w-14 h-14 rounded-full bg-white shadow-lg border-2 border-gray-100 flex items-center justify-center text-lg font-bold text-adzly-blue">+</div>
            </div>
            <p className="text-base font-medium text-black">
              <span className="font-bold">+400 entrepreneurs</span> nous font confiance
            </p>
          </div>
          
          <div className="flex items-center bg-purple-50 px-5 py-3 rounded-full shadow-sm">
            <svg className="h-6 w-6 text-adzly-violet mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-base font-medium text-black">Économisez 200+ heures de travail</span>
          </div>
        </div>
        
        {/* Titre principal et contenu */}
        <div className="text-center max-w-4xl mx-auto mb-16 relative">    
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-black">Adzly: </span>
            <span 
              style={{
                background: 'linear-gradient(to right, #2563EB, #8B5CF6)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Votre stratégie de croissance digitale à l'ère de l'IA
            </span>
          </h1>
          
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            Contrairement aux autres solutions, Adzly orchestre tous vos leviers de croissance en un seul plan : publicité, contenu viral, micro-influenceurs et analyse de tendances.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center mb-8">
            <button
              onClick={handleSubmit}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(to right, #2563EB, #8B5CF6)',
                color: 'white',
                fontWeight: 'bold',
                padding: '1rem 2rem',
                borderRadius: '9999px',
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.6)',
                transition: 'all 0.8s ease',
                transform: 'scale(1.05)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
              className="group"
            >
              <div style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <SparklesIcon className="h-5 w-5 text-white" />
                <span style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
                  <span style={{ fontSize: '1.125rem' }}>Essayez Gratuitement</span>
                  <span style={{ fontSize: '0.875rem', opacity: 0.9, fontWeight: 'normal' }}>3 campagnes offertes</span>
                </span>
              </div>
              <span className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </button>
          </div>
          
          {/* Logos des partenaires */}
          <div className="mb-12">
            <p className="text-base font-medium text-gray-700 mb-6 text-center">Nos plateformes partenaires pour vos campagnes publicitaires</p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
              <div className="h-12 w-auto">
                <Image src="/images/partenaire/Google__G__logo.svg.webp" alt="Google" width={48} height={48} className="h-full w-auto" />
              </div>
              <div className="h-12 w-auto">
                <Image src="/images/partenaire/Facebook.svg.webp" alt="Facebook" width={48} height={48} className="h-full w-auto" />
              </div>
              <div className="h-10 w-auto">
                <Image src="/images/partenaire/LinkedIn_logo.png" alt="LinkedIn" width={140} height={40} className="h-full w-auto" />
              </div>
              <div className="h-12 w-auto">
                <Image src="/images/partenaire/insta.jpeg" alt="Instagram" width={48} height={48} className="h-full w-auto" />
              </div>
              <div className="h-12 w-auto">
                <Image src="/images/partenaire/pinterest.png" alt="Pinterest" width={48} height={48} className="h-full w-auto" />
              </div>
              <div className="h-12 w-auto">
                <Image src="/images/partenaire/snap.png" alt="Snapchat" width={54} height={54} className="" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Image principale avec effet */}
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute -inset-1 bg-gradient-to-r from-adzly-blue to-adzly-violet rounded-2xl blur-lg opacity-30"></div>
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <Image
              src="/images/adzly-solution.png"
              alt="Adzly Dashboard"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
          
          {/* Badge en bas à droite */}
          <div className="absolute -bottom-4 -right-4 bg-white py-2 px-4 rounded-lg shadow-lg border border-gray-100 flex items-center">
            <span className="text-sm font-bold bg-gradient-to-r from-adzly-blue to-adzly-violet bg-clip-text text-transparent">Économisez 149€</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
