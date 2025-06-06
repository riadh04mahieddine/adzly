'use client';

import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';

export default function DashboardOverview() {
  const { userData } = useAuth();
  
  // Données fictives pour la démonstration
  const stats = [
    { name: 'Campagnes actives', value: '0' },
    { name: 'Impressions', value: '0' },
    { name: 'Clics', value: '0' },
    { name: 'Taux de conversion', value: '0%' },
  ];
  
  return (
    <div className="space-y-6">
      {/* Welcome message */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Bienvenue {userData?.displayName || 'sur Adzly'}
          </h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>
              Commencez par créer votre première campagne publicitaire ou explorez nos recommandations personnalisées.
            </p>
          </div>
          
          {/* Trial status */}
          {userData?.subscription?.status === 'free_trial' && (
            <div className="mt-4 p-4 bg-blue-50 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3 flex-1 md:flex md:justify-between">
                  <p className="text-sm text-blue-700">
                    Vous êtes en période d'essai. {userData?.campaignsCreated || 0}/3 campagnes créées.
                  </p>
                  <p className="mt-3 text-sm md:mt-0 md:ml-6">
                    <Link href="/dashboard/subscription" className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600">
                      Voir les offres <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          )}
          
          <div className="mt-5">
            <Link
              href="/dashboard/campaigns/new"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700"
            >
              Créer une campagne
            </Link>
          </div>
        </div>
      </div>
      
      {/* Stats */}
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Statistiques globales
        </h3>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  {stat.name}
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {stat.value}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
      
      {/* Create first campaign CTA */}
      {(!userData?.campaignsCreated || userData.campaignsCreated === 0) && (
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Créez votre première campagne
            </h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>
                Notre assistant IA vous guidera pas à pas pour créer une campagne optimisée pour votre secteur d'activité.
              </p>
            </div>
            <div className="mt-5">
              <Link
                href="/dashboard/campaigns/new"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700"
              >
                Commencer
              </Link>
            </div>
          </div>
        </div>
      )}
      
      {/* Recent campaigns */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Campagnes récentes
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Vos dernières campagnes publicitaires
          </p>
        </div>
        
        {(!userData?.campaignsCreated || userData.campaignsCreated === 0) ? (
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <p className="text-sm text-gray-500 italic">
              Vous n'avez pas encore créé de campagne.
            </p>
          </div>
        ) : (
          <div className="border-t border-gray-200">
            <ul role="list" className="divide-y divide-gray-200">
              {/* Example campaign item - would be replaced with real data */}
              <li className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-blue-600 truncate">
                    Nom de la campagne
                  </p>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      100 impressions
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <p>
                      Créée le <time dateTime="2023-01-01">1 Jan 2023</time>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
