'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Make sure to call loadStripe outside of a component's render to avoid
// recreating the Stripe object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface StripeContextType {
  // Add any Stripe-related state or functions here
}

const StripeContext = createContext<StripeContextType | undefined>(undefined);

export function useStripe() {
  const context = useContext(StripeContext);
  if (context === undefined) {
    throw new Error('useStripe must be used within a StripeProvider');
  }
  return context;
}

export function StripeProvider({ children }: { children: ReactNode }) {
  // Add any Stripe-related state or functions here

  const value = {
    // Export any Stripe-related state or functions here
  };

  return (
    <StripeContext.Provider value={value as StripeContextType}>
      <Elements stripe={stripePromise}>
        {children}
      </Elements>
    </StripeContext.Provider>
  );
}
