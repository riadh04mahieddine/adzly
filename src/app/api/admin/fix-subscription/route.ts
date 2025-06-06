import { NextRequest, NextResponse } from 'next/server';
import { doc, getFirestore, updateDoc, getDoc } from 'firebase/firestore';

// Cette API est une solution temporaire pour corriger les problèmes d'abonnement
// Elle devrait être protégée par une authentification admin en production

export async function POST(request: NextRequest) {
  try {
    const { userId } = await request.json();
    
    if (!userId) {
      return NextResponse.json({ error: 'UserId is required' }, { status: 400 });
    }
    
    const db = getFirestore();
    const userRef = doc(db, 'users', userId);
    
    // Vérifier si l'utilisateur existe
    const userDoc = await getDoc(userRef);
    if (!userDoc.exists()) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    
    // Mettre à jour le statut d'abonnement
    await updateDoc(userRef, {
      'subscription.status': 'active',
      'subscription.plan': 'pro',
      'campaignsLimitReached': false,
    });
    
    return NextResponse.json({ 
      success: true, 
      message: 'Subscription status updated successfully' 
    });
    
  } catch (error) {
    console.error('Error fixing subscription:', error);
    return NextResponse.json(
      { error: 'Failed to update subscription status' },
      { status: 500 }
    );
  }
}
