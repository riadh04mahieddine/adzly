'use client';

import { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';

export default function ContentCreationPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    router.push('/login');
  };

  // Données des tendances TikTok (à remplacer par des données réelles)
  const trendingContent = [
    {
      id: 1,
      title: "Transition produit 'Made Me Buy'",
      creator: "@maratrium",
      views: "2.5M",
      likes: "320K",
      videoUrl: "https://www.tiktok.com/@maratrium/video/7243988723939329281",
      thumbnailUrl: "/images/trends/trend1.jpg",
      description: "Transition avant/après montrant l'impact d'un produit sur la vie quotidienne.",
      businessAdaptation: "Parfait pour les produits de beauté, gadgets, vêtements ou tout produit avec un avant/après visible.",
      howToCreate: "Filmez-vous avant d'utiliser le produit, puis après l'avoir utilisé. Utilisez une transition simple en claquant des doigts ou en couvrant la caméra."
    },
    {
      id: 2,
      title: "POV: Client satisfait",
      creator: "@maratrium",
      views: "1.8M",
      likes: "210K",
      videoUrl: "https://www.tiktok.com/@maratrium/video/7272696344599538949",
      thumbnailUrl: "/images/trends/trend2.jpg",
      description: "Vidéo point de vue (POV) montrant la réaction d'un client satisfait après avoir utilisé votre produit/service.",
      businessAdaptation: "Idéal pour les services, restaurants, expériences ou produits qui résolvent un problème spécifique.",
      howToCreate: "Filmez une personne frustrée par un problème, puis montrez sa réaction positive après avoir découvert votre solution."
    },
    {
      id: 3,
      title: "Déballage produit ASMR",
      creator: "Tendance populaire",
      views: "3.2M",
      likes: "450K",
      videoUrl: "https://www.tiktok.com/tag/unboxingasmr",
      thumbnailUrl: "/images/trends/trend3.jpg",
      description: "Vidéo de déballage de produit avec son ASMR satisfaisant et gros plans sur les détails.",
      businessAdaptation: "Excellent pour les produits avec un packaging soigné ou une expérience de déballage intéressante.",
      howToCreate: "Utilisez un microphone de qualité, filmez en gros plan le déballage de votre produit en mettant l'accent sur les sons satisfaisants."
    }
  ];

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Sidebar pour mobile */}
      <div className="lg:hidden">
        <DashboardSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
      
      {/* Sidebar pour desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          <DashboardSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>
      </div>
      
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <DashboardHeader setSidebarOpen={setSidebarOpen} handleLogout={handleLogout} />
        
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">Création de contenu</h1>
              <p className="mt-2 text-gray-600">Découvrez les dernières tendances TikTok et apprenez à les adapter à votre activité.</p>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Section vidéo explicative */}
              <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-[#1D9D73] to-[#34D399]">
                  <h2 className="text-lg leading-6 font-medium text-white">Comment créer du contenu viral pour votre entreprise</h2>
                  <p className="mt-1 max-w-2xl text-sm text-white opacity-90">Apprenez les bases de la création de contenu TikTok adapté à votre business</p>
                </div>
                <div className="px-4 py-5 sm:p-6">
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                    <iframe 
                      className="w-full h-96"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                      title="Comment créer du contenu TikTok pour votre entreprise" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-900">Points clés :</h3>
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-gray-500">
                      <li>Identifiez les tendances qui correspondent à votre marque</li>
                      <li>Adaptez le contenu à votre produit ou service</li>
                      <li>Soyez authentique et montrez la personnalité de votre marque</li>
                      <li>Utilisez des transitions simples mais efficaces</li>
                      <li>Ajoutez des textes explicatifs pour clarifier votre message</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Tendances actuelles */}
              <h2 className="mt-8 text-xl font-semibold text-gray-900">Tendances actuelles</h2>
              <p className="text-gray-600 mb-6">Mises à jour régulièrement par notre équipe</p>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {trendingContent.map((trend) => (
                  <div key={trend.id} className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="relative h-48">
                      <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">Aperçu non disponible</span>
                      </div>
                      {/* Remplacer par de vraies miniatures quand disponibles */}
                      {/* <Image 
                        src={trend.thumbnailUrl} 
                        alt={trend.title} 
                        layout="fill" 
                        objectFit="cover" 
                      /> */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                        <div className="flex items-center">
                          <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">TikTok</span>
                          <span className="ml-2 text-white text-xs">{trend.views} vues</span>
                          <span className="ml-2 text-white text-xs">♥ {trend.likes}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-medium text-gray-900">{trend.title}</h3>
                        <span className="text-sm text-gray-500">{trend.creator}</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">{trend.description}</p>
                      
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-900">Comment l'adapter à votre business :</h4>
                        <p className="mt-1 text-sm text-gray-600">{trend.businessAdaptation}</p>
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-900">Comment le créer :</h4>
                        <p className="mt-1 text-sm text-gray-600">{trend.howToCreate}</p>
                      </div>
                      
                      <div className="mt-4 flex justify-between">
                        <a 
                          href={trend.videoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-[#1D9D73] hover:bg-[#34D399]"
                        >
                          Voir l'exemple
                        </a>
                        <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                          Sauvegarder
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Créateur à suivre */}
              <div className="mt-10 bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h2 className="text-lg leading-6 font-medium text-gray-900">Créateur à suivre : @maratrium</h2>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">Expert en marketing TikTok avec des vidéos adaptables à de nombreux business</p>
                </div>
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gray-200"></div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Maratrium</h3>
                      <p className="text-sm text-gray-500">Créateur de contenu marketing et tendances virales</p>
                    </div>
                    <a 
                      href="https://www.tiktok.com/@maratrium" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="ml-auto inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-black hover:bg-gray-800"
                    >
                      Voir sur TikTok
                    </a>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">
                      Maratrium crée régulièrement du contenu marketing facile à adapter pour les entreprises. 
                      Ses vidéos sont connues pour leur simplicité et leur efficacité, parfaites pour les débutants 
                      qui souhaitent créer du contenu TikTok pour leur business.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Besoin d'aide personnalisée */}
              <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-[#F7941D] to-[#FDBA74]">
                  <h2 className="text-lg leading-6 font-medium text-white">Besoin d'aide pour créer votre contenu ?</h2>
                  <p className="mt-1 max-w-2xl text-sm text-white opacity-90">Notre équipe peut vous aider à adapter ces tendances à votre business</p>
                </div>
                <div className="px-4 py-5 sm:p-6">
                  <p className="text-sm text-gray-600">
                    Si vous avez besoin d'aide pour créer du contenu adapté à votre entreprise, notre équipe d'experts 
                    peut vous accompagner dans la création de vidéos TikTok efficaces et engageantes.
                  </p>
                  <div className="mt-5">
                    <button 
                      type="button" 
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#F7941D] hover:bg-[#FDBA74]"
                    >
                      Demander un accompagnement
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
