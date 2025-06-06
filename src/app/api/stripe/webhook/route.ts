import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { headers } from 'next/headers';
import { doc, getFirestore, updateDoc, serverTimestamp } from 'firebase/firestore';

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// Webhook secret for verifying the event
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(request: Request) {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature') as string;

    let event: Stripe.Event;

    // Verify the event with the webhook secret
    try {
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        webhookSecret!
      );
    } catch (err) {
      console.error(`Webhook signature verification failed: ${err}`);
      return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 });
    }

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        
        // Récupérer les métadonnées de la session
        const { userId, plan } = session.metadata || {};
        
        if (userId && plan) {
          // Mettre à jour le statut d'abonnement de l'utilisateur dans Firestore
          const db = getFirestore();
          const userRef = doc(db, 'users', userId);
          
          await updateDoc(userRef, {
            'subscription.status': 'active',
            'subscription.plan': plan,
            'subscription.updatedAt': serverTimestamp(),
            'freeTrialUsed': true,
            // Réinitialiser le compteur de campagnes pour permettre la création illimitée
            // Nous gardons la valeur existante pour l'historique mais elle n'est plus limitante
            'campaignsLimitReached': false,
          });
          
          console.log(`Abonnement mis à jour pour l'utilisateur ${userId} au plan ${plan}`);
        }
        break;
      }
      
      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice;
        // Gérer le renouvellement d'abonnement
        break;
      }
      
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        // Gérer l'annulation d'abonnement
        const { userId } = subscription.metadata || {};
        
        if (userId) {
          const db = getFirestore();
          const userRef = doc(db, 'users', userId);
          
          await updateDoc(userRef, {
            'subscription.status': 'canceled',
            'subscription.updatedAt': serverTimestamp(),
          });
          
          console.log(`Abonnement annulé pour l'utilisateur ${userId}`);
        }
        break;
      }
      
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
}
