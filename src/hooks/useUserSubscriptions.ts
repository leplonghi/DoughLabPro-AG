import React, { useEffect, useCallback } from 'react';
import { collection, query, orderBy, onSnapshot, Timestamp } from 'firebase/firestore';
import { db } from '@/firebase/db';
import { monitor } from '@/infrastructure/monitoring';
import { Levain, LevainStatus } from '@/types';
import { hoursBetween } from '@/helpers';
import { migrateFavorite, migrateCustomPreset } from '@/data/migrations/migrateSavedData';

const shouldUseFirestore = (user: any, db: any) => {
    return !!user && !!db && user.uid !== 'guest-123' && user.uid !== 'vip-guest-user';
};

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

interface UserSubscriptionsSetters {
    setOvens: React.Dispatch<React.SetStateAction<any[]>>;
    setLevains: React.Dispatch<React.SetStateAction<any[]>>;
    setGoals: React.Dispatch<React.SetStateAction<any[]>>;
    setTestSeries: React.Dispatch<React.SetStateAction<any[]>>;
    setUserStyles: React.Dispatch<React.SetStateAction<any[]>>;
    setFavorites: React.Dispatch<React.SetStateAction<any[]>>;
    setCustomPresets: React.Dispatch<React.SetStateAction<any[]>>;
    setCustomToppings: React.Dispatch<React.SetStateAction<any[]>>;
}

export function useUserSubscriptions(firebaseUser: any, setters: UserSubscriptionsSetters) {
    const {
        setOvens,
        setLevains,
        setGoals,
        setTestSeries,
        setUserStyles,
        setFavorites,
        setCustomPresets,
        setCustomToppings
    } = setters;

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
                    monitor.trackError(error, { context: `listener_${collectionName}` });
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
        // Migrate favorites & customPresets at read time (alias resolution)
        const unsubFavorites = createCollectionSubscription('favorites', setFavorites,
            (item: any) => migrateFavorite(item).data
        );
        const unsubCustomPresets = createCollectionSubscription('customPresets', setCustomPresets,
            (item: any) => migrateCustomPreset(item).data
        );
        const unsubCustomToppings = createCollectionSubscription('customToppings', setCustomToppings);

        return () => {
            unsubOvens();
            unsubLevains();
            unsubGoals();
            unsubTestSeries();
            unsubUserStyles();
            unsubFavorites();
            unsubCustomPresets();
            unsubCustomToppings();
        };
    }, [createCollectionSubscription, setOvens, setLevains, setGoals, setTestSeries, setUserStyles, setFavorites, setCustomPresets, setCustomToppings]);
}
