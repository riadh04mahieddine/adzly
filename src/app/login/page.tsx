'use client';

import LoginForm from '@/components/auth/LoginForm';
import { AuthProvider } from '@/contexts/AuthContext';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex">
        {/* Left side - Form */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
          <div className="w-full max-w-md">
            <div className="text-center mb-10">
              <Link href="/">
                <Image 
                  src="/logo.svg" 
                  alt="Adzly Logo" 
                  width={120} 
                  height={40}
                  className="mx-auto"
                />
              </Link>
            </div>
            <LoginForm />
          </div>
        </div>
        
        {/* Right side - Image */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-90"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12">
            <h2 className="text-3xl font-bold mb-6">Bienvenue sur Adzly</h2>
            <p className="text-xl mb-8 text-center">
              Connectez-vous pour accéder à votre tableau de bord et gérer vos campagnes publicitaires.
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Accès à toutes vos campagnes</span>
              </div>
              <div className="flex items-center">
                <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Rapports de performance en temps réel</span>
              </div>
              <div className="flex items-center">
                <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Recommandations personnalisées</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthProvider>
  );
}
