'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const ProblemSolutionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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

  const problems = [
    "Trop de canaux marketing différents à gérer",
    "Difficile de savoir où investir son budget",
    "Manque de visibilité sur les performances",
    "Contenu peu authentique qui ne convertit pas",
    "Chronophage et complexe à mettre en place"
  ];

  const solutions = [
    "Une stratégie unifiée combinant tous les canaux pertinents",
    "Recommandations IA précises basées sur votre secteur et audience",
    "Tableau de bord centralisé pour suivre tous vos résultats",
    "Contenu UGC authentique créé par des créateurs sélectionnés",
    "Mise en place rapide et gestion simplifiée par notre équipe"
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" ref={ref}>
      {/* Formes organiques flottantes */}
      <motion.div 
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#1D9D73]/20 opacity-30 blur-3xl z-0"
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
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#F7941D]/20 opacity-30 blur-3xl z-0"
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
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-black">Le défi des entrepreneurs </span>
            <span 
              style={{
                background: 'linear-gradient(to right, #F7941D, #1D9D73)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              d'aujourd'hui
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Face à la multiplication des canaux marketing, comment choisir la bonne stratégie sans se disperser ?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Colonne des problèmes */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative overflow-hidden"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-red-50 rounded-full -translate-y-1/2 translate-x-1/2 z-0"></div>
            
            <div className="relative z-10">
              <motion.div 
                className="flex items-center mb-6"
                variants={fadeIn}
              >
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                  <XCircleIcon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Sans Adzly</h3>
              </motion.div>
              
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    variants={fadeIn}
                  >
                    <XCircleIcon className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{problem}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.div 
                className="mt-8 bg-red-50 p-4 rounded-lg border border-red-100"
                variants={fadeIn}
              >
                <p className="text-sm text-red-700 italic">
                  "J'ai essayé plusieurs agences et outils marketing, mais aucun ne m'a offert une solution complète. J'ai perdu beaucoup de temps et d'argent sans obtenir de résultats concrets."
                </p>
                <p className="text-sm font-medium text-gray-700 mt-2">— Sophie M., e-commerçante</p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Colonne des solutions */}
          <motion.div 
            className="bg-gradient-to-br from-[#1D9D73]/10 to-[#34D399]/10 rounded-2xl shadow-xl p-8 border border-gray-100 relative overflow-hidden"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#1D9D73]/10 rounded-full -translate-y-1/2 translate-x-1/2 z-0"></div>
            
            <div className="relative z-10">
              <motion.div 
                className="flex items-center mb-6"
                variants={fadeIn}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1D9D73] to-[#34D399] flex items-center justify-center mr-4">
                  <CheckCircleIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">
                  <span
                    style={{
                      background: 'linear-gradient(to right, #1D9D73, #34D399)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent'
                    }}
                  >
                    Avec Adzly
                  </span>
                </h3>
              </motion.div>
              
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    variants={fadeIn}
                  >
                    <CheckCircleIcon className="w-6 h-6 text-[#1D9D73] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{solution}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.div 
                className="mt-8 bg-gradient-to-r from-[#1D9D73]/10 to-[#34D399]/10 p-4 rounded-lg border border-[#1D9D73]/30"
                variants={fadeIn}
              >
                <p className="text-sm text-[#0F1A33] italic">
                  "Grâce à l'IA d'Adzly et leurs créateurs de contenu UGC, nous avons pu déployer une stratégie marketing complète qui a boosté notre ROI de 215% en 3 mois !"
                </p>
                <p className="text-sm font-medium text-gray-700 mt-2">— Marc L., fondateur de startup</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Image centrale illustrant la transformation */}
        <motion.div 
          className="mt-16 relative mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#1D9D73] to-[#34D399] rounded-2xl blur-lg opacity-20"></div>
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold mb-4">Votre transformation marketing</h3>
                <p className="text-gray-600 mb-6">
                  Passez d'une approche fragmentée et chronophage à une stratégie unifiée et performante, sans effort.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  <span>Résultats visibles en quelques semaines</span>
                </div>
              </div>
              <div className="relative h-64">
                <Image
                  src="/images/votre-transformation-marketing.png"
                  alt="Transformation marketing avec Adzly"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
