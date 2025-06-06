'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  User, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

interface UserData {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  campaignsCreated: number;
  freeTrialUsed: boolean;
  subscription: {
    status: 'free_trial' | 'active' | 'canceled' | 'expired';
    plan: string | null;
    trialEnd: Date | null;
  };
  createdAt: any;
}

interface AuthContextType {
  currentUser: User | null;
  userData: UserData | null;
  loading: boolean;
  signup: (email: string, password: string, name: string) => Promise<User>;
  login: (email: string, password: string) => Promise<User>;
  loginWithGoogle: () => Promise<User>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateUserProfile: (data: { displayName?: string, photoURL?: string }) => Promise<void>;
  incrementCampaignCount: () => Promise<boolean>;
  hasReachedCampaignLimit: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  async function signup(email: string, password: string, name: string) {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    
    // Update profile with display name
    await updateProfile(result.user, {
      displayName: name
    });
    
    // Create user document in Firestore
    await setDoc(doc(db, "users", result.user.uid), {
      uid: result.user.uid,
      email: result.user.email,
      displayName: name,
      photoURL: result.user.photoURL,
      campaignsCreated: 0,
      freeTrialUsed: false,
      subscription: {
        status: 'free_trial',
        plan: null,
        trialEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      },
      createdAt: serverTimestamp()
    });
    
    return result.user;
  }

  function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password)
      .then(result => result.user);
  }

  function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
      .then(async (result) => {
        // Check if this is a new user
        const userRef = doc(db, "users", result.user.uid);
        const userSnap = await getDoc(userRef);
        
        if (!userSnap.exists()) {
          // Create user profile in Firestore for new Google users
          await setDoc(userRef, {
            uid: result.user.uid,
            email: result.user.email,
            displayName: result.user.displayName,
            photoURL: result.user.photoURL,
            campaignsCreated: 0,
            freeTrialUsed: false,
            subscription: {
              status: 'free_trial',
              plan: null,
              trialEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
            },
            createdAt: serverTimestamp()
          });
        }
        
        return result.user;
      });
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email: string) {
    return sendPasswordResetEmail(auth, email);
  }

  async function updateUserProfile(data: { displayName?: string, photoURL?: string }) {
    if (!currentUser) return;
    
    await updateProfile(currentUser, data);
    
    // Update Firestore document as well
    const userRef = doc(db, "users", currentUser.uid);
    await setDoc(userRef, data, { merge: true });
  }
  
  // Fonction pour incrémenter le compteur de campagnes
  async function incrementCampaignCount() {
    if (!currentUser || !userData) return false;
    
    // Vérifier si l'utilisateur a atteint la limite
    if (hasReachedCampaignLimit()) return false;
    
    try {
      const userRef = doc(db, "users", currentUser.uid);
      const newCount = (userData.campaignsCreated || 0) + 1;
      
      // Mettre à jour le compteur dans Firestore
      await setDoc(userRef, { campaignsCreated: newCount }, { merge: true });
      
      // Mettre à jour le state local
      setUserData({
        ...userData,
        campaignsCreated: newCount
      });
      
      return true;
    } catch (error) {
      console.error("Erreur lors de l'incrémentation du compteur de campagnes:", error);
      return false;
    }
  }
  
  // Fonction pour vérifier si l'utilisateur a atteint la limite de campagnes
  function hasReachedCampaignLimit() {
    if (!userData) return true; // Par sécurité, si pas de données utilisateur
    
    // Vérifier si l'utilisateur est en essai gratuit et a créé 3 campagnes ou plus
    return userData.subscription.status === 'free_trial' && userData.campaignsCreated >= 3;
  }

  async function fetchUserData(user: User) {
    try {
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
      
      if (userSnap.exists()) {
        setUserData(userSnap.data() as UserData);
      } else {
        // Create user profile if it doesn't exist
        const newUserData: UserData = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          campaignsCreated: 0,
          freeTrialUsed: false,
          subscription: {
            status: 'free_trial',
            plan: null,
            trialEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
          },
          createdAt: serverTimestamp()
        };
        
        await setDoc(userRef, newUserData);
        setUserData(newUserData);
        console.log("Created new user profile", newUserData);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      
      if (user) {
        await fetchUserData(user);
      } else {
        setUserData(null);
      }
      
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userData,
    loading,
    signup,
    login,
    loginWithGoogle,
    logout,
    resetPassword,
    updateUserProfile,
    incrementCampaignCount,
    hasReachedCampaignLimit
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
