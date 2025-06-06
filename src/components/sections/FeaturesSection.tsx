'use client';

import { 
  ChartBarIcon, 
  ClockIcon, 
  CogIcon, 
  SparklesIcon 
} from '@heroicons/react/24/outline';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: 'Création simplifiée',
      description: 'Créez des campagnes publicitaires performantes en quelques clics grâce à notre assistant IA intuitif.',
      icon: SparklesIcon,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Optimisation automatique',
      description: 'Nos algorithmes d\'IA analysent et optimisent vos campagnes en temps réel pour maximiser votre ROI.',
      icon: CogIcon,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 3,
      title: 'Analyse unifiée',
      description: 'Visualisez les performances de toutes vos campagnes sur différentes plateformes dans un tableau de bord centralisé.',
      icon: ChartBarIcon,
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 4,
      title: 'Économie de temps',
      description: 'Automatisez les tâches répétitives et concentrez-vous sur votre stratégie globale plutôt que sur l\'exécution.',
      icon: ClockIcon,
      color: 'from-blue-600 to-violet-600'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="features">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-black">Fonctionnalités </span>
            <span 
              style={{
                background: 'linear-gradient(to right, #2563EB, #8B5CF6)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              qui font la différence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Adzly réunit tous les outils nécessaires pour créer, gérer et optimiser vos campagnes publicitaires sur toutes les plateformes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg border border-gray-100"
            >
              <div className={`w-14 h-14 rounded-lg mb-6 flex items-center justify-center bg-gradient-to-r ${feature.color}`}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
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
            }}
            className="hover:opacity-90 transition-opacity"
          >
            Découvrir toutes les fonctionnalités
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
