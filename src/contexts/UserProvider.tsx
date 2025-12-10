
import React, { useState, useEffect, useCallback, createContext, useContext, ReactNode, useMemo } from 'react';
import {
  User,
  Oven,
  Levain,
  FeedingEvent,
  UserContextType,
  LevainStatus,
  Goal,
  TestSeries,
  PaywallOrigin,
  DoughStyleDefinition,
  FavoriteItem,
  UserSettings,
  OvenType,
} from '@/types';
import { useToast } from '@/components/ToastProvider';
import { hoursBetween } from '@/helpers';
import { logEvent } from '@/services/analytics';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/firebase/db';
import {
  collection,
  query,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  writeBatch,
  Timestamp,
  orderBy,
  where,
  getDocs,
  getDoc,
} from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/auth';
import { PlanId } from '@/permissions';
import { isProUser } from '@/lib/permissions';
import { useBatchManager } from '@/hooks/useBatchManager';

const shouldUseFirestore = (user: User | null | any, db: any) => {
  return !!user && !!db && user.uid !== 'guest-123';
};


const UserContext = createContext<UserContextType | undefined>(undefined);

const getStatusFromLastFeeding = (levain: Levain): LevainStatus => {
  if (levain.status === 'arquivado') return 'arquivado';

  const hoursSinceLastFeeding = hoursBetween(new Date().toISOString(), levain.lastFeeding);
  const SEVEN_DAYS_IN_HOURS = 7 * 24;

  if (hoursSinceLastFeeding <= 48) {
    return 'ativo';
  } else if (hoursSinceLastFeeding > 48 && hoursSinceLastFeeding <= SEVEN_DAYS_IN_HOURS) {
    return 'precisa_atencao';
  } else {
    return 'descanso';
  }
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { addToast } = useToast();
  const { loginWithGoogle, logout: authLogout } = useAuth();

  // Local state mirrors
  const [firebaseUser, setFirebaseUser] = useState<any>(null);
  const [user, setUser] = useState<User | null>(null);
  const [userLoading, setUserLoading] = useState(true);
  const [planLoading, setPlanLoading] = useState(true);

  const [ovens, setOvens] = useState<Oven[]>([]);
  const [levains, setLevains] = useState<Levain[]>([]);
  const [goals, setGoals] = useState<Goal[]>([]);
  const [testSeries, setTestSeries] = useState<TestSeries[]>([]);
  const [userStyles, setUserStyles] = useState<DoughStyleDefinition[]>([]);
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  // Use custom hook for batches
  const { batches, addBatch, updateBatch, deleteBatch, createDraftBatch } = useBatchManager(
    firebaseUser,
    db,
    addToast
  );

  // Settings
  const [userSettings, setUserSettings] = useState<UserSettings>(() => {
    const defaults: UserSettings = {
      preferredFlourId: null,
      defaultAmbientTempC: 23,
      defaultOvenType: OvenType.ELECTRIC,
    };
    try {
      const stored = localStorage.getItem('dough-lab-user-settings');
      if (stored) {
        const parsed = JSON.parse(stored);
        return { ...defaults, ...parsed };
      }
      return defaults;
    } catch {
      return defaults;
    }
  });

  // Entitlements
  const [isSessionPro, setIsSessionPro] = useState<boolean>(false);
  const [cooldownHours, setCooldownHours] = useState(0);

  // Paywall
  const [isPaywallOpen, setIsPaywallOpen] = useState(false);
  const [paywallOrigin, setPaywallOrigin] = useState<PaywallOrigin | null>(null);

  const openPaywall = useCallback((origin: PaywallOrigin = 'general') => {
    setPaywallOrigin(origin);
    setIsPaywallOpen(true);
  }, []);

  const closePaywall = useCallback(() => {
    setIsPaywallOpen(false);
    setPaywallOrigin(null);
  }, []);

  // Sync User - Race-Safe Implementation
  useEffect(() => {
    if (!auth) return;

    const unsub = onAuthStateChanged(auth, async (authUser) => {
      setFirebaseUser(authUser);

      if (!authUser) {
        setUser(null);
        setUserLoading(false);
        setPlanLoading(false);
        // Clear data on logout
        setOvens([]);
        setLevains([]);
        setGoals([]);
        setTestSeries([]);
        setUserStyles([]);
        setFavorites([]);
        return;
      }

      setUserLoading(true);
      setPlanLoading(true);

      try {
        const ref = doc(db, 'users', authUser.uid);
        // Note: getDoc is imported from firebase/firestore
        // We need to ensure we are using the correct db instance
        // The file imports db from @/firebase/db

        // We use a try-catch block for the fetch
        let profileData: any = {};
        try {
          const snap = await getDoc(ref);
          if (snap.exists()) {
            profileData = snap.data();
          }
        } catch (err) {
          console.error("Error fetching user profile:", err);
        }

        const email = authUser.email ? authUser.email.toLowerCase() : '';
        const isAdminEmail = email === 'leplonghi@gmail.com';

        // Auto-fix Firestore for admin
        if (isAdminEmail && (profileData.plan !== 'lab_pro' || !profileData.isAdmin)) {
          console.log("Auto-upgrading admin user in Firestore...");
          try {
            await updateDoc(ref, {
              isAdmin: true,
              plan: 'lab_pro',
              isPro: true,
              updatedAt: new Date().toISOString()
            });
            // Update local profileData to reflect the change immediately
            profileData.isAdmin = true;
            profileData.plan = 'lab_pro';
            profileData.isPro = true;
          } catch (err) {
            console.error("Failed to auto-upgrade admin:", err);
          }
        }

        const plan: PlanId =
          profileData.plan === "lab_pro" ||
            profileData.plan === "pro" ||
            profileData.isPro ||
            profileData.isAdmin ||
            isAdminEmail // Keep admin override
            ? "lab_pro"
            : profileData.plan === "calculator_unlock"
              ? "calculator_unlock"
              : "free";

        const mergedProfile: User = {
          uid: authUser.uid,
          name: profileData.name || authUser.displayName || 'Baker',
          email: authUser.email || '',
          avatar: profileData.avatar || authUser.photoURL || undefined,
          plan, // Normalized plan
          isPro: plan === 'lab_pro', // Derived from plan
          isAdmin: !!profileData.isAdmin || isAdminEmail,
          trialEndsAt: profileData.trialEndsAt,
          proSince: profileData.proSince,
          proExpiresAt: profileData.proExpiresAt,
          stripeCustomerId: profileData.stripeCustomerId,
          stripeSubscriptionId: profileData.stripeSubscriptionId,
          gender: profileData.gender,
          birthDate: profileData.birthDate,
        };

        setUser(mergedProfile);
      } finally {
        setUserLoading(false);
        setPlanLoading(false);
      }
    });

    return () => unsub();
  }, []);



  // --- LOCAL FAVOURITES (Guest Mode) ---
  useEffect(() => {
    if (!firebaseUser) {
      try {
        const stored = localStorage.getItem('dough-lab-guest-favorites');
        if (stored) {
          setFavorites(JSON.parse(stored));
        }
      } catch (err) {
        console.error("Error loading guest favorites:", err);
      }
    }
  }, [firebaseUser]);

  // Generic subscription helper
  const createCollectionSubscription = useCallback(
    (
      collectionName: string,
      setter: React.Dispatch<React.SetStateAction<any[]>>,
      postProcess?: (item: any) => any
    ) => {
      if (!shouldUseFirestore(firebaseUser, db)) {
        return () => { };
      }
      const collRef = collection(db, 'users', firebaseUser.uid, collectionName);
      const q = query(collRef, orderBy('createdAt', 'desc'));

      return onSnapshot(
        q,
        (snapshot) => {
          const items = snapshot.docs.map((doc) => {
            const data = doc.data();
            Object.keys(data).forEach((key) => {
              if (data[key] instanceof Timestamp) {
                data[key] = data[key].toDate().toISOString();
              }
            });
            const processedItem = { id: doc.id, ...data };
            return postProcess ? postProcess(processedItem) : processedItem;
          });
          setter(items);
        },
        (error) => {
          console.error(`Error listening to ${collectionName}:`, error);
        }
      );
    },
    [firebaseUser]
  );

  // Subscriptions
  useEffect(() => {
    const unsubOvens = createCollectionSubscription('ovens', setOvens);
    const unsubLevains = createCollectionSubscription('levains', setLevains, (l: Levain) => ({
      ...l,
      status: getStatusFromLastFeeding(l),
    }));
    const unsubGoals = createCollectionSubscription('goals', setGoals);
    const unsubTestSeries = createCollectionSubscription('testSeries', setTestSeries);
    const unsubUserStyles = createCollectionSubscription('styles', setUserStyles);
    const unsubFavorites = createCollectionSubscription('favorites', setFavorites);

    return () => {
      unsubOvens();
      unsubLevains();
      unsubGoals();
      unsubTestSeries();
      unsubUserStyles();
      unsubFavorites();
    };
  }, [createCollectionSubscription]);

  const login = useCallback(
    (userData: User) => {
      loginWithGoogle();
    },
    [loginWithGoogle]
  );

  const logout = useCallback(() => {
    authLogout();
    setUser(null);
  }, [authLogout]);

  const updateUser = useCallback(
    async (updatedData: Partial<User>) => {
      if (user && shouldUseFirestore(firebaseUser, db)) {
        const userRef = doc(db, 'users', firebaseUser.uid);
        await updateDoc(userRef, updatedData);
      }
      setUser(prev => prev ? { ...prev, ...updatedData } : null);
    },
    [user, firebaseUser]
  );

  // User Settings Management
  useEffect(() => {
    try {
      localStorage.setItem('dough-lab-user-settings', JSON.stringify(userSettings));
    } catch (error) {
      console.error(error);
    }
  }, [userSettings]);

  const setPreferredFlour = useCallback((id: string | null) => {
    setUserSettings((prev) => ({ ...prev, preferredFlourId: id }));
  }, []);

  const setDefaultAmbientTempC = useCallback((temp: number) => {
    setUserSettings((prev) => ({ ...prev, defaultAmbientTempC: temp }));
  }, []);

  const setDefaultOvenType = useCallback((type: OvenType) => {
    setUserSettings((prev) => ({ ...prev, defaultOvenType: type }));
  }, []);

  // Helpers for CRUD - Mock Aware
  const createDoc = useCallback(
    async (collectionName: string, data: any, stateSetter?: React.Dispatch<React.SetStateAction<any[]>>) => {
      const now = new Date().toISOString();
      const docData = {
        ...data,
        createdAt: now,
        updatedAt: now,
      };

      if (shouldUseFirestore(firebaseUser, db)) {
        const collRef = collection(db, 'users', firebaseUser.uid, collectionName);
        const docRef = await addDoc(collRef, docData);
        return { ...docData, id: docRef.id };
      } else {
        // Mock Mode
        const newId = `mock-${collectionName}-${Date.now()}`;
        const newItem = { ...docData, id: newId };
        if (stateSetter) {
          stateSetter(prev => [newItem, ...prev]);
        }
        return newItem;
      }
    },
    [firebaseUser]
  );

  const updateDocFn = useCallback(
    async (collectionName: string, id: string, data: any, stateSetter?: React.Dispatch<React.SetStateAction<any[]>>) => {
      const update = { ...data, updatedAt: new Date().toISOString() };

      if (shouldUseFirestore(firebaseUser, db)) {
        const docRef = doc(db, 'users', firebaseUser.uid, collectionName, id);
        await updateDoc(docRef, update);
      } else {
        if (stateSetter) {
          stateSetter(prev => prev.map(item => item.id === id ? { ...item, ...update } : item));
        }
      }
    },
    [firebaseUser]
  );

  const deleteDocFn = useCallback(
    async (collectionName: string, id: string, stateSetter?: React.Dispatch<React.SetStateAction<any[]>>) => {
      if (shouldUseFirestore(firebaseUser, db)) {
        const docRef = doc(db, 'users', firebaseUser.uid, collectionName, id);
        await deleteDoc(docRef);
      } else {
        if (stateSetter) {
          stateSetter(prev => prev.filter(item => item.id !== id));
        }
      }
    },
    [firebaseUser]
  );

  // Ovens
  const addOven = useCallback(
    (newOvenData: Omit<Oven, 'id' | 'isDefault'>) =>
      createDoc('ovens', { ...newOvenData, isDefault: ovens.length === 0 }, setOvens),
    [createDoc, ovens.length]
  );
  const updateOven = useCallback(
    (updatedOven: Oven) => updateDocFn('ovens', updatedOven.id, updatedOven, setOvens),
    [updateDocFn]
  );
  const deleteOven = useCallback((id: string) => deleteDocFn('ovens', id, setOvens), [deleteDocFn]);
  const setDefaultOven = useCallback(
    async (id: string) => {
      if (shouldUseFirestore(firebaseUser, db)) {
        const batch = writeBatch(db);
        ovens.forEach((oven) => {
          const docRef = doc(db, 'users', firebaseUser.uid, 'ovens', oven.id);
          batch.update(docRef, { isDefault: oven.id === id });
        });
        await batch.commit();
      } else {
        setOvens(prev => prev.map(o => ({ ...o, isDefault: o.id === id })));
      }
    },
    [firebaseUser, ovens]
  );

  // Levains
  const addLevain = useCallback(
    async (
      newLevainData: Omit<
        Levain,
        'id' | 'isDefault' | 'feedingHistory' | 'status' | 'createdAt'
      >
    ) => {
      const data = {
        ...newLevainData,
        status: 'ativo',
        lastFeeding: new Date().toISOString(),
        isDefault: levains.length === 0,
        feedingHistory: [],
      };
      const newLevain = await createDoc('levains', data, setLevains);
      if (user) logEvent('levain_pet_created', { userId: user.email, levainId: newLevain.id });
    },
    [createDoc, levains.length, user]
  );

  const updateLevain = useCallback(
    async (updatedData: Partial<Levain> & { id: string }) => {
      await updateDocFn('levains', updatedData.id, updatedData, setLevains);
      if (user)
        logEvent('levain_pet_profile_updated', { userId: user.email, levainId: updatedData.id });
    },
    [updateDocFn, user]
  );

  const deleteLevain = useCallback((id: string) => deleteDocFn('levains', id, setLevains), [deleteDocFn]);
  const setDefaultLevain = useCallback(
    async (id: string) => {
      if (shouldUseFirestore(firebaseUser, db)) {
        const batch = writeBatch(db);
        levains.forEach((l) => {
          const docRef = doc(db, 'users', firebaseUser.uid, 'levains', l.id);
          batch.update(docRef, { isDefault: l.id === id });
        });
        await batch.commit();
      } else {
        setLevains(prev => prev.map(l => ({ ...l, isDefault: l.id === id })));
      }
    },
    [firebaseUser, levains]
  );

  const addFeedingEvent = useCallback(
    async (levainId: string, eventData: Omit<FeedingEvent, 'id' | 'date'>) => {
      const levain = levains.find((l) => l.id === levainId);
      if (!levain) return;
      const now = new Date().toISOString();
      const newEvent = { id: crypto.randomUUID(), date: now, ...eventData };
      const updatedHistory = [newEvent, ...levain.feedingHistory];

      await updateDocFn('levains', levainId, {
        feedingHistory: updatedHistory,
        lastFeeding: now,
        status: 'ativo',
      }, setLevains);

      if (user) logEvent('levain_pet_feeding_logged', { userId: user.email, levainId });
    },
    [levains, updateDocFn, user]
  );

  const importLevains = useCallback(
    async (levainsToImport: Levain[]) => {
      if (shouldUseFirestore(firebaseUser, db)) {
        const batch = writeBatch(db);
        levainsToImport.forEach((levain) => {
          const docRef = doc(collection(db, 'users', firebaseUser.uid, 'levains'));
          batch.set(docRef, levain);
        });
        await batch.commit();
      } else {
        setLevains(prev => [...levainsToImport, ...prev]);
      }
    },
    [firebaseUser]
  );

  // Goals
  const addGoal = useCallback(
    async (
      goalData: Omit<Goal, 'id' | 'createdAt' | 'updatedAt' | 'status' | 'progress'>
    ): Promise<Goal> => {
      const newGoal = await createDoc('goals', { ...goalData, status: 'ativo', progress: 0 }, setGoals);
      addToast('New goal created!', 'success');
      return newGoal as Goal;
    },
    [createDoc, addToast]
  );
  const updateGoal = useCallback(
    async (updatedData: any) => {
      await updateDocFn('goals', updatedData.id, updatedData, setGoals);
      addToast('Goal updated.', 'info');
    },
    [updateDocFn, addToast]
  );
  const deleteGoal = useCallback(
    async (id: string) => {
      await deleteDocFn('goals', id, setGoals);
      addToast('Goal deleted.', 'info');
    },
    [deleteDocFn, addToast]
  );
  const completeGoal = useCallback(
    async (id: string) => {
      await updateDocFn('goals', id, { status: 'concluido', progress: 100 }, setGoals);
      addToast('Goal completed!', 'success');
    },
    [updateDocFn, addToast]
  );

  // Test Series
  const addTestSeries = useCallback(
    async (
      seriesData: Omit<TestSeries, 'id' | 'createdAt' | 'updatedAt' | 'relatedBakes'>
    ): Promise<TestSeries> => {
      const newSeries = await createDoc('testSeries', { ...seriesData, relatedBakes: [] }, setTestSeries);
      addToast(`Test series created.`, 'success');
      return newSeries as TestSeries;
    },
    [createDoc, addToast]
  );
  const updateTestSeries = useCallback(
    async (updatedData: any) => {
      await updateDocFn('testSeries', updatedData.id, updatedData, setTestSeries);
      addToast('Series updated.', 'info');
    },
    [updateDocFn, addToast]
  );
  const deleteTestSeries = useCallback(
    async (id: string) => {
      await deleteDocFn('testSeries', id, setTestSeries);
      addToast('Series deleted.', 'info');
    },
    [deleteDocFn, addToast]
  );
  const attachBakeToSeries = useCallback(
    async (seriesId: string, bakeId: string) => {
      const series = testSeries.find((s) => s.id === seriesId);
      if (series && !series.relatedBakes.includes(bakeId)) {
        await updateDocFn('testSeries', seriesId, {
          relatedBakes: [...series.relatedBakes, bakeId],
        }, setTestSeries);
        addToast('Bake associated successfully!', 'success');
      } else {
        addToast('Bake already associated.', 'info');
      }
    },
    [testSeries, updateDocFn, addToast]
  );

  // User Styles
  const addUserStyle = useCallback(
    async (styleData: Omit<DoughStyleDefinition, 'id' | 'createdAt'>): Promise<DoughStyleDefinition> => {
      const newStyle = await createDoc('styles', styleData, setUserStyles);
      addToast(`Style "${styleData.name}" saved.`, 'success');
      return newStyle as DoughStyleDefinition;
    },
    [createDoc, addToast]
  );

  const deleteUserStyle = useCallback(
    async (id: string) => {
      await deleteDocFn('styles', id, setUserStyles);
      addToast('Style deleted.', 'info');
    },
    [deleteDocFn, addToast]
  );

  const updateUserStyle = useCallback(
    async (style: DoughStyleDefinition) => {
      await updateDocFn('styles', style.id, style, setUserStyles);
      addToast(`Style "${style.name}" updated.`, 'success');
    },
    [updateDocFn, addToast]
  );

  // Favorites
  const toggleFavorite = useCallback(
    async (item: Omit<FavoriteItem, 'createdAt'>) => {
      // Guest Mode Logic
      if (!shouldUseFirestore(firebaseUser, db)) {
        let newFavorites = [...favorites];
        // Use logic ID check
        const existingIndex = newFavorites.findIndex(f => (f.itemId === item.id || f.id === item.id) && f.type === item.type);

        if (existingIndex >= 0) {
          // Remove
          newFavorites.splice(existingIndex, 1);
          addToast('Removed from favorites', 'info');
        } else {
          // Add
          const newItem: FavoriteItem = {
            id: `local-${Date.now()}`, // Generic ID for list keys
            itemId: item.id,
            type: item.type,
            title: item.title,
            metadata: item.metadata || {},
            createdAt: new Date().toISOString()
          };
          newFavorites.push(newItem);
          addToast('Saved to favorites', 'success');
        }

        setFavorites(newFavorites);
        localStorage.setItem('dough-lab-guest-favorites', JSON.stringify(newFavorites));
        return;
      }

      // Firestore Logic (Logged In)
      // Use 'itemId' to look for the logical ID in the favorites array
      // Note: favorites array items have 'itemId' because we query Firestore and get all data
      const existing = favorites.find(f => (f.itemId === item.id || f.id === item.id) && f.type === item.type);

      if (existing) {
        // Remove
        // existing.id is the Firestore Document ID (from createCollectionSubscription)
        await deleteDocFn('favorites', existing.id);
        addToast('Removed from favorites', 'info');
      } else {
        // Add
        await addDoc(collection(db, 'users', firebaseUser.uid, 'favorites'), {
          itemId: item.id, // Store logical ID as itemId
          type: item.type,
          title: item.title,
          metadata: item.metadata || {},
          createdAt: new Date().toISOString()
        });
        addToast('Saved to favorites', 'success');
      }
    },
    [favorites, firebaseUser, addToast]
  );

  const isFavorite = useCallback((id: string) => {
    // Check if any favorite has itemId === id (logical) or id === id (legacy/fallback)
    return favorites.some(f => f.itemId === id || f.id === id);
  }, [favorites]);


  // Entitlements
  const grantProAccess = useCallback(async () => {
    if (user && firebaseUser) {
      const now = new Date().toISOString();
      await updateUser({
        isPro: true,
        plan: 'lab_pro',
        proSince: now
      });
      addToast('Welcome to Pro! You have unlocked all features.', 'success');
    }
    setIsSessionPro(true);
  }, [user, updateUser, firebaseUser, addToast]);

  const grantSessionProAccess = useCallback(() => setIsSessionPro(true), []);
  const grant24hPass = useCallback(() => {
    setIsSessionPro(true);
  }, []);

  const hasProAccess = isProUser(user) || isSessionPro;
  const isPassOnCooldown = false;

  const value: UserContextType = useMemo(() => ({
    isAuthenticated: !!firebaseUser,
    user,
    userLoading,
    planLoading,
    login,
    logout,
    updateUser,
    hasProAccess,
    grantProAccess,
    grantSessionProAccess,
    grant24hPass,
    isPassOnCooldown,
    cooldownHoursRemaining: cooldownHours,
    isPaywallOpen,
    paywallOrigin,
    openPaywall,
    closePaywall,
    ovens,
    addOven,
    updateOven,
    deleteOven,
    setDefaultOven,
    preferredFlourId: userSettings.preferredFlourId,
    setPreferredFlour,
    batches,
    addBatch,
    updateBatch,
    deleteBatch,
    createDraftBatch,
    levains,
    addLevain,
    updateLevain,
    deleteLevain,
    setDefaultLevain,
    addFeedingEvent,
    importLevains,
    goals,
    addGoal,
    updateGoal,
    deleteGoal,
    completeGoal,
    testSeries,
    addTestSeries,
    updateTestSeries,
    deleteTestSeries,
    attachBakeToSeries,
    userStyles,
    addUserStyle,
    deleteUserStyle,
    favorites,
    toggleFavorite,
    isFavorite,
    defaultAmbientTempC: userSettings.defaultAmbientTempC,
    setDefaultAmbientTempC,
    defaultOvenType: userSettings.defaultOvenType,
    setDefaultOvenType,
  }), [
    firebaseUser,
    db,
    user,
    login,
    logout,
    updateUser,
    hasProAccess,
    grantProAccess,
    grantSessionProAccess,
    grant24hPass,
    isPassOnCooldown,
    cooldownHours,
    isPaywallOpen,
    paywallOrigin,
    openPaywall,
    closePaywall,
    ovens,
    addOven,
    updateOven,
    deleteOven,
    setDefaultOven,
    userSettings.preferredFlourId,
    setPreferredFlour,
    batches,
    addBatch,
    updateBatch,
    deleteBatch,
    createDraftBatch,
    levains,
    addLevain,
    updateLevain,
    deleteLevain,
    setDefaultLevain,
    addFeedingEvent,
    importLevains,
    goals,
    addGoal,
    updateGoal,
    deleteGoal,
    completeGoal,
    testSeries,
    addTestSeries,
    updateTestSeries,
    deleteTestSeries,
    attachBakeToSeries,
    userStyles,
    addUserStyle,
    updateUserStyle,
    deleteUserStyle,
    favorites,
    toggleFavorite,
    isFavorite,
    userSettings.defaultAmbientTempC,
    setDefaultAmbientTempC,
    userSettings.defaultOvenType,
    setDefaultOvenType,
  ]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
