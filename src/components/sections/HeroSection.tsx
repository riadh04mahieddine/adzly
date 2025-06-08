'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRightIcon, SparklesIcon, LightBulbIcon, ClockIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Définir le style CSS pour l'animation de brillance
const shineKeyframes = `
@keyframes shine {
  from {
    transform: translateX(-100%) skewX(-15deg);
  }
  to {
    transform: translateX(150%) skewX(-15deg);
  }
}
`;

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const handleSubmit = () => {
    console.log('Stratégie demandée');
  };
  
  // Animations
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const shimmer = {
    hidden: { backgroundPosition: '200% 0' },
    visible: {
      backgroundPosition: '-200% 0',
      transition: {
        repeat: Infinity,
        duration: 3,
        ease: 'linear'
      }
    }
  };

  return (
    <>
      {/* Injecter le style CSS pour l'animation de brillance */}
      <style jsx global>{shineKeyframes}</style>
      
      <section 
        className="py-16 md:py-24 overflow-hidden relative" 
        id="hero"
        ref={ref}
      >
        {/* Fond avec motif géométrique subtil et dégradé */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366F1' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }} />
        </div>
        
        {/* Dégradé de fond */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-purple-50 z-0" />
        
        {/* Formes organiques flottantes */}
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gradient-to-r from-[#F7941D]/20 to-[#1D9D73]/20 blur-3xl z-0"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-gradient-to-r from-[#1D9D73]/20 to-[#F7941D]/20 blur-3xl z-0"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "easeInOut",
          }}
        />
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          {/* Titre principal et contenu */}
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-16 relative"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerChildren}
          >    
            <motion.div variants={fadeIn} className="relative inline-block mb-2">
              <span className="bg-gradient-to-r from-[#1D9D73] to-[#34D399] text-white text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">
                <span className="flex items-center">
                  <LightBulbIcon className="h-4 w-4 mr-1.5" />
                  <span>Solution marketing complète</span>
                </span>
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight"
              variants={fadeIn}
            >
              <span className="text-gray-900">Comment promouvoir</span><br />
              <span className="text-gray-900">efficacement mon entreprise</span>
              <span className="text-[#F7941D] ml-2 relative inline-block">
                <span className="relative z-10">🤔</span>
                <motion.span 
                  className="absolute -inset-1 rounded-full bg-purple-100 z-0"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
              variants={fadeIn}
            >
              <span className="font-semibold">Publicité payante, référencement naturel ou création de contenu :</span>
              <span className="relative mx-2 px-2">
                <span className="relative z-10">ne choisissez plus.</span>
                <span className="absolute bottom-0 left-0 right-0 h-3 bg-[#1D9D73] opacity-40 z-0" />
              </span>
              <motion.span 
                className="font-bold bg-clip-text text-transparent relative inline-block"
                style={{
                  backgroundImage: 'linear-gradient(to right, #1D9D73, #34D399)',
                  backgroundSize: '200% auto',
                }}
                variants={shimmer}
                initial="hidden"
                animate="visible"
              >
                Adzly crée votre stratégie complète adaptée à votre entreprise.
              </motion.span>
            </motion.p>
            
            {/* Social proof et badges */}
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-6 mb-10"
              variants={fadeIn}
            >
              <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <div className="flex -space-x-2 mr-3">
                  <div className="w-8 h-8 rounded-full border-2 border-white shadow-sm overflow-hidden">
                    <Image src="/images/avatars/avatar-1.png" alt="Client 1" width={32} height={32} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white shadow-sm overflow-hidden">
                    <Image src="/images/avatars/avatar-2.png" alt="Client 2" width={32} height={32} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white shadow-sm overflow-hidden">
                    <Image src="/images/avatars/avatar-3.png" alt="Client 3" width={32} height={32} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-[#1D9D73] text-xs font-semibold">+1,200 entrepreneurs</div>
                  <span className="text-xs text-gray-500">font déjà confiance à Adzly</span>
                </div>
              </div>
              
              <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <ClockIcon className="h-5 w-5 text-[#F7941D] mr-2" />
                <span className="text-sm font-medium text-gray-800">Économisez 200+ heures de travail</span>
              </div>
            </motion.div>
            
            {/* CTA Button */}
            <motion.div 
              className="flex justify-center mb-12"
              variants={fadeIn}
            >
              <div className="relative">
                {/* Animation de pulse autour du bouton */}
                <motion.div 
                  className="absolute -inset-1.5 rounded-full opacity-0"
                  style={{ background: 'linear-gradient(to right, #1D9D73, #34D399)' }}
                  animate={{ opacity: [0, 0.5, 0], scale: [0.95, 1.05, 0.95] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <motion.button
                  onClick={handleSubmit}
                  className="relative flex items-center gap-2 bg-gradient-to-r from-[#1D9D73] to-[#34D399] text-white font-bold py-4 px-8 rounded-full shadow-xl group overflow-hidden z-10"
                  whileHover={{ scale: 1.03, boxShadow: '0 20px 25px -5px rgba(29, 157, 115, 0.4), 0 8px 10px -6px rgba(29, 157, 115, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1D9D73] to-[#34D399] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -inset-full top-0 block w-1/2 h-full z-5 transform -skew-x-20 bg-gradient-to-r from-transparent to-white opacity-40" 
                       style={{ animation: 'shine 2s infinite' }} />
                  
                  <div className="relative flex items-center gap-2 z-10">
                    <SparklesIcon className="h-5 w-5 text-white" />
                    <span className="text-lg">Créer ma stratégie gratuitement</span>
                    <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </motion.button>
                
                
              </div>
            </motion.div>
          </motion.div>
          
          {/* Logos des partenaires */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <p className="text-base font-medium text-gray-600 mb-6 text-center">Nos plateformes partenaires pour vos campagnes</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {[
                { src: "/images/partenaire/Google__G__logo.svg.webp", alt: "Google", width: 32, height: 32 },
                { src: "/images/partenaire/Facebook.svg.webp", alt: "Facebook", width: 32, height: 32 },
                { src: "/images/partenaire/LinkedIn_logo.png", alt: "LinkedIn", width: 100, height: 24 },
                { src: "/images/partenaire/insta.jpeg", alt: "Instagram", width: 32, height: 32 },
                { src: "/images/partenaire/pinterest.png", alt: "Pinterest", width: 32, height: 32 },
                { src: "/images/partenaire/snap.png", alt: "Snapchat", width: 32, height: 32 }
              ].map((logo, index) => (
                <motion.div 
                  key={index}
                  className="relative group"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1D9D73]/30 to-[#34D399]/30 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-white p-3 rounded-full shadow-sm border border-gray-100">
                    <Image 
                      src={logo.src} 
                      alt={logo.alt} 
                      width={logo.width} 
                      height={logo.height} 
                      className="h-6 w-auto object-contain" 
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Image principale avec effet */}
          <motion.div 
            className="relative mx-auto max-w-5xl"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#1D9D73] to-[#34D399] rounded-2xl blur-lg opacity-30"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <Image
                src="/images/adzly-solution.png"
                alt="Adzly Dashboard"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
              
              {/* Overlay avec effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent pointer-events-none" />
            </div>
            
            
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
