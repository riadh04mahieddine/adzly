'use client';

import { AuthProvider } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import SubscriptionContent from '@/components/subscription/SubscriptionContent';

export default function SubscriptionPage() {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <SubscriptionContent />
      </ProtectedRoute>
    </AuthProvider>
  );
}
