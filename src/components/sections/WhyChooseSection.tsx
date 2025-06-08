'use client';

import Image from 'next/image';
import {
  ChartBarIcon,
  UserGroupIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

const WhyChooseSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="why-choose">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-black">On a tous une bonne raison de choisir </span>
            <span
              style={{
                background: 'linear-gradient(to right, #1D9D73, #34D399)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Adzly
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment notre plateforme transforme votre approche marketing à l'ère du digital
          </p>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Carte 1 - Plateformes publicitaires adaptées - Grande carte à gauche */}
            <div className="col-span-1 md:col-span-6 bg-white rounded-3xl shadow-sm p-8 hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
              <div>
                <h3 className="text-2xl font-bold mb-4">Plateformes publicitaires adaptées à votre projet</h3>
                <p className="text-gray-600 mb-4">
                  Nous sélectionnons les meilleures plateformes publicitaires en fonction de votre secteur d'activité, votre cible et vos objectifs marketing.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {/* Facebook */}
                  <div className="bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#1D9D73]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.9 2H3.1C2.8 2 2.5 2.1 2.3 2.3C2.1 2.5 2 2.8 2 3.1V20.9C2 21.2 2.1 21.5 2.3 21.7C2.5 21.9 2.8 22 3.1 22H12.7V14.1H10.1V11H12.7V8.7C12.7 6.1 14.2 4.8 16.5 4.8C17.6 4.8 18.5 4.9 18.8 4.9V7.6H17.3C16.1 7.6 15.9 8.2 15.9 9V11H18.7L18.3 14.1H15.9V22H20.9C21.2 22 21.5 21.9 21.7 21.7C21.9 21.5 22 21.2 22 20.9V3.1C22 2.8 21.9 2.5 21.7 2.3C21.5 2.1 21.2 2 20.9 2Z" fill="currentColor" />
                    </svg>
                  </div>
                  {/* Instagram */}
                  <div className="bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#F7941D]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" fill="currentColor" />
                    </svg>
                  </div>
                  {/* YouTube */}
                  <div className="bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#0F1A33]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50198 4.84824 2.16135 5.19941C1.82072 5.55057 1.57879 5.98541 1.46 6.46C1.14521 8.20556 0.991235 9.97631 1 11.75C0.988768 13.537 1.14277 15.3213 1.46 17.08C1.59096 17.5398 1.83831 17.9581 2.17814 18.2945C2.51798 18.6308 2.93882 18.8738 3.4 19C5.12 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.498 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0112 9.96295 22.8573 8.1787 22.54 6.42Z" fill="currentColor" />
                      <path d="M9.75 15.02L15.5 11.75L9.75 8.48001V15.02Z" fill="white" />
                    </svg>
                  </div>
                  {/* TikTok */}
                  <div className="bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center">
                    <svg className="w-12 h-12 text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.59 6.69C18.6625 6.69 17.7651 6.39361 17.0207 5.84265C16.2763 5.29169 15.7258 4.51249 15.45 3.61C15.41 3.41 15.38 3.2 15.36 3H11.6V16.69C11.6 17.3825 11.3471 18.0524 10.891 18.5485C10.4349 19.0446 9.8075 19.34 9.15 19.34C8.4925 19.34 7.86505 19.0446 7.40901 18.5485C6.95297 18.0524 6.7 17.3825 6.7 16.69C6.7 15.3 7.75 14.19 9.08 14.08C9.27 14.08 9.46 14.09 9.65 14.13V10.28C9.46 10.25 9.27 10.24 9.08 10.24C7.6395 10.24 6.25947 10.8175 5.23301 11.844C4.20655 12.8705 3.63 14.2505 3.63 15.69C3.63 17.1295 4.20655 18.5095 5.23301 19.536C6.25947 20.5625 7.6395 21.14 9.08 21.14C10.5205 21.14 11.9005 20.5625 12.927 19.536C13.9535 18.5095 14.53 17.1295 14.53 15.69V9.49C15.9164 10.5019 17.5786 11.0274 19.28 10.99V7.14C19.28 7.14 19.05 6.69 19.59 6.69Z" fill="currentColor" />
                    </svg>
                  </div>
                  {/* Pinterest */}
                  <div className="bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#E60023]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.477 2 2 6.477 2 12C2 16.237 4.636 19.855 8.356 21.312C8.268 20.521 8.189 19.295 8.391 18.416C8.573 17.633 9.563 13.827 9.563 13.827C9.563 13.827 9.264 13.227 9.264 12.334C9.264 10.942 10.07 9.918 11.077 9.918C11.931 9.918 12.346 10.557 12.346 11.33C12.346 12.19 11.797 13.471 11.516 14.657C11.281 15.647 12.018 16.453 12.992 16.453C14.759 16.453 16.122 14.557 16.122 11.797C16.122 9.119 14.202 7.287 11.951 7.287C9.29 7.287 7.707 9.353 7.707 11.723C7.707 12.638 8.012 13.595 8.442 14.126C8.49 14.181 8.525 14.249 8.542 14.322C8.559 14.396 8.559 14.472 8.541 14.545C8.465 14.857 8.32 15.448 8.288 15.582C8.245 15.763 8.149 15.796 7.959 15.71C6.728 15.133 5.939 13.227 5.939 11.683C5.939 8.231 8.194 5.557 12.189 5.557C15.389 5.557 18.05 7.876 18.05 11.723C18.05 14.886 16.068 18.024 13.196 18.024C12.19 18.024 11.241 17.504 10.942 16.896C10.942 16.896 10.465 18.6 10.358 19.027C10.149 19.854 9.595 20.856 9.217 21.489C10.09 21.825 11.03 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor" />
                    </svg>
                  </div>
                  {/* LinkedIn */}
                  <div className="bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#0A66C2]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-[#1D9D73]">
                    Facebook Ads
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-[#F7941D]">
                    Instagram Ads
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-[#0F1A33]">
                    YouTube Ads
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-black">
                    TikTok Ads
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-600">
                    Pinterest Ads
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-600">
                    LinkedIn Ads
                  </span>
                </div>
              </div>
            </div>

            {/* Carte 2 et 3 - Conteneur pour les cartes de droite en colonne */}
            <div className="col-span-1 md:col-span-6 flex flex-col gap-6">
              {/* Carte 2 - Budget optimisé - Carte en haut à droite */}
              <div className="bg-white rounded-3xl shadow-sm p-8 hover:shadow-md transition-shadow transform hover:scale-105 duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#1D9D73]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Budget optimisé</h3>
                </div>
                <p className="text-gray-600 ml-16 mb-3">
                  Nous optimisons votre budget publicitaire pour maximiser le retour sur investissement et atteindre vos objectifs commerciaux.
                </p>
                <div className="ml-16 relative h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#1D9D73] to-[#34D399] rounded-full" style={{ width: '78%' }}></div>
                </div>
                <div className="ml-16 flex justify-between text-xs text-gray-500 mt-1">
                  <span>0€</span>
                  <span className="font-medium text-[#1D9D73]">Optimisé</span>
                  <span>Budget max</span>
                </div>
              </div>

              {/* Carte 3 - Mise en contact avec des influenceurs - Carte en bas à droite */}
              <div className="bg-white rounded-3xl shadow-sm p-8 hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#F7941D]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Réseau d'influenceurs</h3>
                </div>
                <p className="text-gray-600 ml-16 mb-3">
                  Accédez à notre réseau d'influenceurs qualifiés pour promouvoir votre marque auprès d'audiences engagées et pertinentes.
                </p>
                <div className="ml-16 flex -space-x-2 overflow-hidden">
                  <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white overflow-hidden">
                    <div className="bg-gradient-to-br from-blue-300 to-indigo-500 w-full h-full"></div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-red-100 border-2 border-white overflow-hidden">
                    <div className="bg-gradient-to-br from-red-300 to-pink-500 w-full h-full"></div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-yellow-100 border-2 border-white overflow-hidden">
                    <div className="bg-gradient-to-br from-yellow-300 to-orange-500 w-full h-full"></div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-100 border-2 border-white overflow-hidden">
                    <div className="bg-gradient-to-br from-green-300 to-teal-500 w-full h-full"></div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-500">+12</div>
                </div>
              </div>
            </div>
          </div>

          {/* Carte 4 - Vidéos UGC - Grande carte sur toute la largeur */}
          <div className="col-span-1 md:col-span-12 bg-white rounded-3xl shadow-sm p-8 hover:shadow-md transition-shadow transform hover:scale-105 duration-300 mt-6">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#F7941D]">
                  <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Vidéos UGC</h3>
            </div>
            <p className="text-gray-600 ml-16 mb-3">
              Nous vous aidons à créer et à exploiter du contenu généré par les utilisateurs pour renforcer l'authenticité de votre marque et augmenter l'engagement.
            </p>
            <div className="ml-16 flex space-x-2">
              <div className="w-16 h-10 bg-gray-200 rounded-md flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
              </div>
              <div className="w-16 h-10 bg-gray-200 rounded-md flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
              </div>
              <div className="w-16 h-10 bg-gray-200 rounded-md flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Conteneur pour les cartes 5 et 6 côte à côte */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6">
            {/* Carte 5 - Plan marketing complet - Carte moyenne à gauche */}
            <div className="col-span-1 md:col-span-6 bg-white rounded-3xl shadow-sm p-8 hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#0F1A33]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Plan marketing complet</h3>
              </div>
              <p className="text-gray-600 ml-16 mb-3">
                Nous élaborons une stratégie marketing holistique qui combine tous les leviers de croissance adaptés à votre entreprise, votre secteur et vos objectifs.
              </p>
              <div className="ml-16 grid grid-cols-3 gap-2">
                <div className="bg-green-50 p-2 rounded text-xs text-center text-[#1D9D73]">Analyse</div>
                <div className="bg-green-100 p-2 rounded text-xs text-center text-[#1D9D73]">Stratégie</div>
                <div className="bg-orange-50 p-2 rounded text-xs text-center text-[#F7941D]">Contenu</div>
                <div className="bg-orange-100 p-2 rounded text-xs text-center text-[#F7941D]">Publicité</div>
                <div className="bg-blue-50 p-2 rounded text-xs text-center text-[#0F1A33]">Influence</div>
                <div className="bg-blue-100 p-2 rounded text-xs text-center text-[#0F1A33]">Mesure</div>
              </div>
            </div>

            {/* Carte 6 - Analyse des tendances - Carte moyenne à droite */}
            <div className="col-span-1 md:col-span-6 bg-white rounded-3xl shadow-sm p-8 hover:shadow-md transition-shadow transform hover:scale-105 duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#1D9D73]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Analyse des tendances</h3>
            </div>
            <p className="text-gray-600 ml-16 mb-4">
              Notre IA analyse en permanence les tendances du marché pour vous aider à anticiper les évolutions et à adapter votre stratégie marketing en conséquence.
            </p>
            <div className="ml-16 relative h-12">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F1A33] via-[#1D9D73] to-[#F7941D] rounded-lg opacity-70"></div>
              <div className="absolute h-full w-1/3 border-r border-dashed border-gray-400 flex items-center">
                <div className="w-3 h-3 bg-[#0F1A33] rounded-full absolute -right-1.5"></div>
                <span className="absolute -bottom-6 right-0 text-xs font-medium">Hier</span>
              </div>
              <div className="absolute h-full w-2/3 border-r border-dashed border-gray-400 flex items-center">
                <div className="w-3 h-3 bg-[#1D9D73] rounded-full absolute -right-1.5"></div>
                <span className="absolute -bottom-6 right-0 text-xs font-medium">Aujourd'hui</span>
              </div>
              <div className="absolute h-full w-full flex items-center">
                <div className="w-3 h-3 bg-[#F7941D] rounded-full absolute right-0"></div>
                <span className="absolute -bottom-6 right-0 text-xs font-medium">Demain</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
