import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import {
    User as FirebaseUser,
    GoogleAuthProvider,
    signInWithRedirect,
    getRedirectResult,
    signInAnonymously,
    signOut,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail
} from 'firebase/auth';
import { auth, googleProvider } from '@/firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/firebase/db';
import { User } from '@/types';
import { useTranslation } from '@/i18n';

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
    const { t } = useTranslation();
    const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
    const [appUser, setAppUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    // Handle redirect result from Google Sign-In
    useEffect(() => {
        if (!auth) return;

        let isMounted = true;
        const handleRedirectResult = async () => {
            try {
                const result = await getRedirectResult(auth);
                if (result) {
                    console.log('✓ Google Sign-In redirect successful');
                }
            } catch (error) {
                console.error('Error handling redirect result:', error);
            }
        };

        handleRedirectResult();

        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        if (!auth) {
            // If auth is not initialized (e.g. missing config), stop loading
            setLoading(false);
            return;
        }
        let isMounted = true;
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!isMounted) return;

            // Release app boot blocker immediately after auth state is known.
            setLoading(false);

            if (!user) {
                setFirebaseUser(null);
                setAppUser(null);
                return;
            }

            setFirebaseUser(user);

            // Continue profile + claims hydration in background for better perceived speed.
            void (async () => {
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
                        if (!isMounted) return;

                        if (userDoc.exists()) {
                            const userData = userDoc.data() as User;
                            // Override with claims if present (claims are authoritative from admin)
                            if (isProClaim) {
                                userData.isPro = true;
                                userData.plan = 'lab_pro';
                            }
                            setAppUser({
                                ...userData,
                                uid: user.uid,
                                email: user.email || userData.email || '',
                            });
                        } else {
                            // Create new user doc if not exists
                            const newUser: User = {
                                name: user.displayName || t('common.user_250'),
                                email: user.email || '',
                            };
                            if (user.photoURL) {
                                newUser.avatar = user.photoURL;
                            }
                            await setDoc(userDocRef, newUser);
                            if (!isMounted) return;

                            setAppUser({
                                uid: user.uid,
                                ...newUser,
                                isPro: isProClaim || false,
                                plan: planClaim === 'pro' ? 'lab_pro' : ((planClaim as 'free' | 'lab_pro' | 'calculator_unlock') || 'free'),
                            });
                        }
                    } catch (error) {
                        console.error("Error fetching user data:", error);
                        if (!isMounted) return;
                        // Fallback for guest/dev mode if DB fails
                        setAppUser({
                            uid: user.uid,
                            name: user.displayName || 'User',
                            email: user.email || '',
                            isPro: isProClaim || false,
                            plan: planClaim === 'pro' ? 'lab_pro' : ((planClaim as 'free' | 'lab_pro' | 'calculator_unlock') || 'free')
                        });
                    }
                }
            })();
        });

        return () => {
            isMounted = false;
            unsubscribe();
        };
    }, []);

    const loginWithGoogle = async () => {
        if (!auth) {
            console.warn(t('auth.firebase_auth_not_initialized'));
            return;
        }
        const provider = googleProvider || new GoogleAuthProvider();
        await signInWithRedirect(auth, provider);
    };

    const loginWithEmail = async (email: string, pass: string) => {
        if (!auth) throw new Error(t('auth.firebase_auth_not_initialized_2'));
        await signInWithEmailAndPassword(auth, email, pass);
    };

    const registerWithEmail = async (email: string, pass: string, name?: string) => {
        if (!auth) throw new Error(t('auth.firebase_auth_not_initialized_3'));
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
                    name: name || t('common.user_250'),
                    email: email,
                };
                await setDoc(userDocRef, newUser);
                setAppUser({
                    ...newUser,
                    uid: userCredential.user.uid,
                    isPro: false,
                    plan: 'free',
                });
            }
        }
    };

    const resetPassword = async (email: string) => {
        if (!auth) throw new Error(t('auth.firebase_auth_not_initialized'));
        await sendPasswordResetEmail(auth, email);
    };

    const loginAsGuest = async () => {
        if (!auth) {
            throw new Error(t('auth.firebase_auth_not_initialized'));
        }
        await signInAnonymously(auth);
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
