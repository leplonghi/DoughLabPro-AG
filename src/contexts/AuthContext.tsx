import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import {
    User as FirebaseUser,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail
} from 'firebase/auth';
import { auth } from '@/firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/firebase/db';
import { User } from '@/types';

interface AuthContextType {
    firebaseUser: FirebaseUser | null;
    appUser: User | null;
    loading: boolean;
    loginWithGoogle: () => Promise<void>;
    loginWithEmail: (email: string, pass: string) => Promise<void>;
    registerWithEmail: (email: string, pass: string, name?: string) => Promise<void>;
    resetPassword: (email: string) => Promise<void>;
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
                // Check for custom claims
                let isProClaim = false;
                let planClaim = 'free';

                try {
                    const tokenResult = await user.getIdTokenResult();
                    const claims = tokenResult.claims;
                    // Check for our custom app_metadata claim
                    const appMetadata = claims.app_metadata as { pro?: boolean; plan?: string } | undefined;

                    if (appMetadata) {
                        isProClaim = appMetadata.pro === true;
                        if (appMetadata.plan) planClaim = appMetadata.plan;
                    }
                } catch (e) {
                    console.error("Error getting token result:", e);
                }

                // Fetch app user data from Firestore
                if (db) {
                    try {
                        const userDocRef = doc(db, 'users', user.uid);
                        const userDoc = await getDoc(userDocRef);
                        if (userDoc.exists()) {
                            const userData = userDoc.data() as User;
                            // Override with claims if present (claims are authoritative from admin)
                            if (isProClaim) {
                                userData.isPro = true;
                                userData.plan = 'pro';
                            }
                            setAppUser(userData);
                        } else {
                            // Create new user doc if not exists
                            const newUser: User = {
                                name: user.displayName || 'User',
                                email: user.email || '',
                                avatar: user.photoURL || undefined,
                                isPro: isProClaim || false,
                                plan: (planClaim as 'free' | 'pro') || 'free',
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
                            isPro: isProClaim || false,
                            plan: (planClaim as 'free' | 'pro') || 'free'
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
        // Use the configured provider from our auth module if available, otherwise create a new one
        const provider = (await import('@/firebase/auth')).googleProvider || new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
    };

    const loginWithEmail = async (email: string, pass: string) => {
        if (!auth) throw new Error("Firebase Auth not initialized");
        await signInWithEmailAndPassword(auth, email, pass);
    };

    const registerWithEmail = async (email: string, pass: string, name?: string) => {
        if (!auth) throw new Error("Firebase Auth not initialized");
        const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
        // We can update the profile immediately if name is provided
        // But onAuthStateChanged might trigger first. 
        // Ideally we update profile before the effect runs or inside the effect if we can.
        // For simplicity, let's just let the effect create the user doc. 
        // If we want to save the name, we might need to update the profile or the doc manually here.
        // The effect uses `user.displayName`.
        if (name && auth.currentUser) {
            // We could update profile here if we imported updateProfile
            // But let's just rely on the user doc creation logic or update it manually.
            // The effect creates the doc if it doesn't exist.
            // Let's manually create/update the doc here to ensure name is saved.
            if (db) {
                const userDocRef = doc(db, 'users', userCredential.user.uid);
                const newUser: User = {
                    name: name || 'User',
                    email: email,
                    isPro: false,
                    plan: 'free',
                };
                await setDoc(userDocRef, newUser);
                setAppUser(newUser);
            }
        }
    };

    const resetPassword = async (email: string) => {
        if (!auth) throw new Error("Firebase Auth not initialized");
        await sendPasswordResetEmail(auth, email);
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

    const value = React.useMemo(() => ({
        firebaseUser,
        appUser,
        loading,
        loginWithGoogle,
        loginWithEmail,
        registerWithEmail,
        resetPassword,
        logout,
        loginAsGuest
    }), [firebaseUser, appUser, loading]);

    return (
        <AuthContext.Provider value={value}>
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
