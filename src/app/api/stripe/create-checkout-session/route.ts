import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  try {
    const { plan, userId } = await request.json();
    
    // Vérifier que l'utilisateur est authentifié
    if (!userId) {
      return NextResponse.json(
        { error: 'Vous devez être connecté pour souscrire à un abonnement.' },
        { status: 401 }
      );
    }
    
    // Définir les prix en fonction du plan
    const prices = {
      pro: {
        amount: 2900, // 29€ en centimes
        currency: 'eur',
        name: 'Abonnement Pro',
        interval: 'month',
      },
      enterprise: {
        amount: 9900, // 99€ en centimes
        currency: 'eur',
        name: 'Abonnement Enterprise',
        interval: 'month',
      },
    };
    
    // Vérifier que le plan existe
    if (!prices[plan as keyof typeof prices]) {
      return NextResponse.json(
        { error: 'Plan non valide.' },
        { status: 400 }
      );
    }
    
    const selectedPlan = prices[plan as keyof typeof prices];
    
    // Créer un produit pour l'abonnement s'il n'existe pas déjà
    const product = await stripe.products.create({
      name: selectedPlan.name,
    });
    
    // Créer un prix pour le produit
    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: selectedPlan.amount,
      currency: selectedPlan.currency,
      recurring: {
        interval: selectedPlan.interval as 'month' | 'year' | 'week' | 'day',
      },
    });
    
    // Créer une session de paiement
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/subscription?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/subscription?canceled=true`,
      metadata: {
        userId,
        plan,
      },
    });
    
    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Erreur lors de la création de la session de paiement:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de la création de la session de paiement.' },
      { status: 500 }
    );
  }
}
