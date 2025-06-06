'use client';

import Image from 'next/image';
import { 
  MagnifyingGlassIcon, 
  MapIcon, 
  CogIcon, 
  ChartBarSquareIcon 
} from '@heroicons/react/24/outline';

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      title: 'Analyse',
      description: 'Nous comprenons votre secteur d\'activité, vos produits et vos objectifs business pour créer une stratégie sur mesure.',
      icon: MagnifyingGlassIcon,
    },
    {
      id: 2,
      title: 'Stratégie',
      description: 'Nous élaborons une stratégie publicitaire adaptée à votre marché et à votre audience cible.',
      icon: MapIcon,
    },
    {
      id: 3,
      title: 'Configuration',
      description: 'Nous configurons vos campagnes sur les plateformes les plus pertinentes pour votre business.',
      icon: CogIcon,
    },
    {
      id: 4,
      title: 'Optimisation',
      description: 'Nous analysons et améliorons continuellement vos performances pour maximiser votre retour sur investissement.',
      icon: ChartBarSquareIcon,
    }
  ];

  return (
    <section className="py-16 md:py-24" id="how-it-works">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-black">Comment </span>
            <span 
              style={{
                background: 'linear-gradient(to right, #2563EB, #8B5CF6)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              ça marche
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une approche consultative et personnalisée pour maximiser l'efficacité de vos campagnes publicitaires.
          </p>
        </div>

        <div className="relative">
          {/* Ligne de connexion verticale */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-violet-500 hidden md:block" style={{ transform: 'translateX(-50%)' }}></div>
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Point sur la ligne de connexion */}
                <div className="absolute left-1/2 top-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center hidden md:flex" style={{ transform: 'translate(-50%, 2rem)' }}>
                  <span className="text-white font-bold">{step.id}</span>
                </div>
                
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="flex items-center mb-4 md:hidden">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center mr-3">
                        <span className="text-white font-bold">{step.id}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 hidden md:block">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  
                  <div className="w-full md:w-1/2 bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <div className="flex items-center justify-center h-full">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-r from-blue-500 to-violet-500">
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button
            style={{
              background: 'linear-gradient(to right, #2563EB, #8B5CF6)',
              padding: '0.75rem 2rem',
              borderRadius: '9999px',
              color: 'white',
              fontWeight: 'bold',
              boxShadow: '0 0 15px rgba(139, 92, 246, 0.4)',
              position: 'relative',
              zIndex: 10,
            }}
            className="hover:opacity-90 transition-opacity group relative overflow-hidden"
          >
            <div style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <span style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
                <span style={{ fontSize: '1.125rem' }}>Essayez Gratuitement</span>
                <span style={{ fontSize: '0.875rem', opacity: 0.9, fontWeight: 'normal' }}>3 campagnes offertes</span>
              </span>
            </div>
            <span className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
