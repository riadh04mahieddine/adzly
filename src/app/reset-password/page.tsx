'use client';

import ResetPasswordForm from '@/components/auth/ResetPasswordForm';
import { AuthProvider } from '@/contexts/AuthContext';
import Image from 'next/image';
import Link from 'next/link';

export default function ResetPasswordPage() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-50">
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
          <div className="bg-white p-8 rounded-lg shadow-md">
            <ResetPasswordForm />
          </div>
        </div>
      </div>
    </AuthProvider>
  );
}
