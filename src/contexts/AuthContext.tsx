import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User as FirebaseUser, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/firebase/db';
import { User } from '@/types';

interface AuthContextType {
    firebaseUser: FirebaseUser | null;
    appUser: User | null;
    loading: boolean;
    loginWithGoogle: () => Promise<void>;
    logout: () => Promise<void>;
    loginAsGuest: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
    const [appUser, setAppUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!auth) {
            // If auth is not initialized (e.g. missing config), stop loading
            setLoading(false);
            return;
        }
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setFirebaseUser(user);
            if (user) {
                // Fetch app user data from Firestore
                if (db) {
                    try {
                        const userDocRef = doc(db, 'users', user.uid);
                        const userDoc = await getDoc(userDocRef);
                        if (userDoc.exists()) {
                            setAppUser(userDoc.data() as User);
                        } else {
                            // Create new user doc if not exists
                            const newUser: User = {
                                name: user.displayName || 'User',
                                email: user.email || '',
                                avatar: user.photoURL || undefined,
                                isPro: false,
                                plan: 'free',
                            };
                            await setDoc(userDocRef, newUser);
                            setAppUser(newUser);
                        }
                    } catch (error) {
                        console.error("Error fetching user data:", error);
                        // Fallback for guest/dev mode if DB fails
                        setAppUser({
                            name: user.displayName || 'User',
                            email: user.email || '',
                            isPro: false,
                            plan: 'free'
                        });
                    }
                }
            } else {
                setAppUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const loginWithGoogle = async () => {
        if (!auth) {
            console.warn("Firebase Auth not initialized");
            return;
        }
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
    };

    const loginAsGuest = async () => {
        const guestUser = {
            uid: 'guest-123',
            displayName: 'Guest User',
            email: 'guest@doughlab.pro',
            emailVerified: true,
            isAnonymous: true,
            metadata: {},
            providerData: [],
            refreshToken: '',
            tenantId: null,
            delete: async () => { },
            getIdToken: async () => 'mock-token',
            getIdTokenResult: async () => ({
                token: 'mock-token',
                signInProvider: 'custom',
                claims: {},
                authTime: Date.now().toString(),
                issuedAtTime: Date.now().toString(),
                expirationTime: (Date.now() + 3600000).toString(),
            }),
            reload: async () => { },
            toJSON: () => ({}),
            phoneNumber: null,
            photoURL: null,
            providerId: 'custom',
        } as unknown as FirebaseUser;

        setFirebaseUser(guestUser);
        setAppUser({
            name: 'Guest User',
            email: 'guest@doughlab.pro',
            isPro: true, // Give Pro access to guest for testing
            plan: 'pro',
        });
    };

    const logout = async () => {
        if (auth) {
            await signOut(auth);
        }
        setFirebaseUser(null);
        setAppUser(null);
    };

    return (
        <AuthContext.Provider value={{ firebaseUser, appUser, loading, loginWithGoogle, logout, loginAsGuest }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
