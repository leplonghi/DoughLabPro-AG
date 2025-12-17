
import { useState, useCallback, useEffect } from 'react';
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  Timestamp,
  Firestore,
} from 'firebase/firestore';
import { User as FirebaseUser } from '@firebase/auth';
import { Batch, BatchStatus } from '@/types';
import { DEFAULT_CONFIG } from '@/constants';
import { useTranslation } from '@/i18n';
import { sanitizeForFirestore } from '@/helpers';

const shouldUseFirestore = (user: any, db: any) => {
  return !!user && !!db && user.uid !== 'guest-123';
};

export function useBatchManager(
  firebaseUser: FirebaseUser | null,
  db: Firestore | null,
  addToast: (msg: string, type: 'success' | 'error' | 'info') => void
) {
  const { t } = useTranslation();
  const [batches, setBatches] = useState<Batch[]>([]);

  // --- Firebase Subscription ---
  useEffect(() => {
    if (!shouldUseFirestore(firebaseUser, db)) {
      // If no DB/User, we rely on local state managed by actions below
      // We might optionally load from localStorage here for persistence in mock mode
      return;
    }

    const uid = firebaseUser.uid;
    const collRef = collection(db, 'users', uid, 'batches');
    const q = query(collRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const items = snapshot.docs.map((doc) => {
          const data = doc.data();
          Object.keys(data).forEach((key) => {
            if (data[key] instanceof Timestamp) {
              data[key] = data[key].toDate().toISOString();
            }
          });
          return { id: doc.id, ...data } as Batch;
        });
        setBatches(items);
      },
      (error) => {
        console.error('Error listening to batches:', error);
      }
    );

    return () => unsubscribe();
  }, [firebaseUser, db]);

  // --- Actions ---

  const addBatch = useCallback(
    async (newBatchData: Omit<Batch, 'id' | 'createdAt' | 'updatedAt'>): Promise<Batch> => {
      const usingFirestore = shouldUseFirestore(firebaseUser, db);
      console.log(`[addBatch] usingFirestore: ${usingFirestore}, uid: ${firebaseUser?.uid}`);

      const now = new Date().toISOString();
      const rawData = {
        ...newBatchData,
        createdAt: now,
        updatedAt: now,
      };

      const docData = sanitizeForFirestore(rawData);

      if (usingFirestore) {
        try {
          const collRef = collection(db, 'users', firebaseUser.uid, 'batches');
          const docRef = await addDoc(collRef, docData);
          console.log(`[addBatch] Success: ${docRef.id}`);
          return { ...docData, id: docRef.id } as Batch;
        } catch (error: any) {
          console.error(`[addBatch] Firestore Error:`, error);
          addToast(`Error creating bake: ${error.message}`, 'error');
          throw error;
        }
      } else {
        // Mock Mode: Add to local state
        console.warn('[addBatch] Falling back to Mock Mode');
        const newId = `mock-batch-${Date.now()}`;
        const newBatch = { ...docData, id: newId } as Batch;
        setBatches(prev => [newBatch, ...prev]);
        return newBatch;
      }
    },
    [firebaseUser, db, addToast]
  );

  const createDraftBatch = useCallback(async (): Promise<Batch> => {
    return await addBatch({
      name: 'New Bake (Draft)',
      doughConfig: DEFAULT_CONFIG,
      status: BatchStatus.DRAFT,
      isFavorite: false,
    });
  }, [addBatch]);

  const updateBatch = useCallback(
    async (updatedBatch: Batch) => {
      const usingFirestore = shouldUseFirestore(firebaseUser, db);
      console.log(`[updateBatch] usingFirestore: ${usingFirestore}, id: ${updatedBatch.id}`);

      if (usingFirestore) {
        try {
          const docRef = doc(db, 'users', firebaseUser.uid, 'batches', updatedBatch.id);
          const updateData = sanitizeForFirestore({ ...updatedBatch, updatedAt: new Date().toISOString() });
          await updateDoc(docRef, updateData);
          console.log(`[updateBatch] Success`);
        } catch (error: any) {
          console.error(`[updateBatch] Firestore Error:`, error);
          addToast(`Error updating bake: ${error.message}`, 'error');
          throw error;
        }
      } else {
        // Mock Mode
        console.warn('[updateBatch] Falling back to Mock Mode');
        setBatches(prev => prev.map(b => b.id === updatedBatch.id ? { ...updatedBatch, updatedAt: new Date().toISOString() } : b));
      }
    },
    [firebaseUser, db, addToast]
  );

  const deleteBatch = useCallback(
    async (id: string) => {
      const batchToDelete = batches.find((b) => b.id === id);

      if (shouldUseFirestore(firebaseUser, db)) {
        const docRef = doc(db, 'users', firebaseUser.uid, 'batches', id);
        await deleteDoc(docRef);
      } else {
        // Mock Mode
        setBatches(prev => prev.filter(b => b.id !== id));
      }

      if (batchToDelete) addToast(`${t('ui.bake__2')}${batchToDelete.name}" deleted.`, 'info');
    },
    [firebaseUser, db, batches, addToast]
  );

  return {
    batches,
    addBatch,
    updateBatch,
    deleteBatch,
    createDraftBatch,
  };
}
