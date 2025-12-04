
import { DoughStyleDefinition, FermentationTechnique, RecipeStyle, BakeType, IngredientConfig } from '../types';
import { getFirestore, collection, getDocs, Firestore } from 'firebase/firestore';
import { STYLES_DATA, mapRawStyleToDoughStyleDefinition } from '../data/stylesData';
import { app } from '../firebase/app';

let db: Firestore | null = null;
if (app) {
    try {
        db = getFirestore(app);
    } catch (e) {
        console.warn('Firebase Firestore failed to initialize in stylesService', e);
    }
}

export async function fetchStyles(): Promise<DoughStyleDefinition[]> {
    if (!db) {
        console.warn('Firestore not initialized, returning static styles.');
        return STYLES_DATA;
    }

    try {
        const stylesRef = collection(db, 'styles');
        const snapshot = await getDocs(stylesRef);

        if (snapshot.empty) {
            console.log('No styles found in Firestore, returning static styles.');
            return STYLES_DATA;
        }

        const styles: DoughStyleDefinition[] = [];
        snapshot.forEach((doc) => {
            const rawData = doc.data();
            // Ensure ID is from doc if not in data
            const rawWithId = { ...rawData, id: doc.id };
            
            try {
                // Try to map using the standard mapper
                // Note: The mapper expects specific fields like 'technicalProfile'
                // If the Firestore data structure matches RAW_CANONICAL_STYLES, this works perfectly.
                const mappedStyle = mapRawStyleToDoughStyleDefinition(rawWithId);
                styles.push(mappedStyle);
            } catch (err) {
                console.warn(`Failed to map style ${doc.id}:`, err);
                // Optionally fall back to pushing rawData as is if it matches DoughStyleDefinition directly
                // but strictly speaking we should trust our mapper or fix the data.
            }
        });

        if (styles.length === 0) {
            return STYLES_DATA;
        }

        return styles;

    } catch (error) {
        console.error('Error fetching styles from Firestore:', error);
        return STYLES_DATA;
    }
}
