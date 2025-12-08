import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@/firebase/db';
import { DoughStyleDefinition } from '@/types/styles';
import { STYLES_DATA, mapRawStyleToDoughStyleDefinition } from '@/data/stylesData';

const STYLES_COLLECTION = 'styles';

/**
 * Fetches styles from Firestore.
 * Falls back to local STYLES_DATA if Firestore is empty or fails.
 */
export async function fetchStyles(): Promise<DoughStyleDefinition[]> {
    if (!db) {
        console.warn('Firestore not initialized, falling back to static styles.');
        return STYLES_DATA;
    }

    try {
        const stylesRef = collection(db, STYLES_COLLECTION);
        // Optional: Add ordering here if your Firestore docs have an 'order' field or similar
        // For now, we just fetch all.
        const q = query(stylesRef);

        const snapshot = await getDocs(q);

        if (snapshot.empty) {
            console.log('No styles found in Firestore, using local fallback.');
            return STYLES_DATA;
        }

        const remoteStyles = snapshot.docs.map(doc => {
            const data = doc.data();
            // Ensure ID from doc path if missing in data? 
            // Usually data contains ID, but good practice to allow override.
            return mapRawStyleToDoughStyleDefinition({ ...data, id: data.id || doc.id });
        });

        console.log(`Loaded ${remoteStyles.length} styles from Firestore.`);
        return remoteStyles;

    } catch (error) {
        console.error('Error fetching styles from Firestore:', error);
        return STYLES_DATA;
    }
}
