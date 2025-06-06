'use client';

import { AuthProvider } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import NewCampaignContent from '@/components/campaigns/NewCampaignContent';

export default function NewCampaignPage() {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <NewCampaignContent />
      </ProtectedRoute>
    </AuthProvider>
  );
}
