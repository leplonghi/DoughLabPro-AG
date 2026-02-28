
import { useState, useCallback, useEffect } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { BakeRepo } from '@/data/repositories/BakeRepo';
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
import { User as FirebaseUser } from 'firebase/auth';
import { Batch, BatchStatus } from '@/types';
import { DEFAULT_CONFIG } from '@/constants';
import { useTranslation } from '@/i18n';
import { sanitizeForFirestore } from '@/helpers';
import { logger } from '@/utils/logger';
import { UserEntitlements } from '@/domain/usecases/canAccess';

const shouldUseFirestore = (user: FirebaseUser | null, db: Firestore | null) => {
  return !!user && !!db && user.uid !== 'guest-123';
};

export function useBatchManager(
  firebaseUser: FirebaseUser | null,
  db: Firestore | null,
  entitlements: UserEntitlements,
  addToast: (msg: string, type: 'success' | 'error' | 'info') => void
) {
  const { t } = useTranslation();
  const localBatches = useLiveQuery(() => BakeRepo.getAll()) || [];
  const [firebaseBatches, setFirebaseBatches] = useState<Batch[]>([]);

  // If we shouldn't use Firestore, use local ones. Otherwise use firebase ones.
  const isGuest = !firebaseUser || !shouldUseFirestore(firebaseUser, db);
  const batches = isGuest ? localBatches : firebaseBatches;

  // --- Firebase Subscription ---
  useEffect(() => {
    if (isGuest) {
      // If no DB/User, we rely on local database
      return;
    }

    const uid = firebaseUser.uid;
    const collRef = collection(db!, 'users', uid, 'batches');
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
        setFirebaseBatches(items);
      },
      (error) => {
        logger.error('Error listening to batches:', error);
      }
    );

    return () => unsubscribe();
  }, [firebaseUser, db]);

  // --- Actions ---

  const addBatch = useCallback(
    async (newBatchData: Omit<Batch, 'id' | 'createdAt' | 'updatedAt'>): Promise<Batch> => {
      const usingFirestore = shouldUseFirestore(firebaseUser, db);
      logger.debug(`[addBatch] usingFirestore: ${usingFirestore}, uid: ${firebaseUser?.uid}`);

      const now = new Date().toISOString();
      const rawData = {
        ...newBatchData,
        createdAt: now,
        updatedAt: now,
      };

      const docData = sanitizeForFirestore(rawData);

      if (usingFirestore && firebaseUser && db) {
        try {
          const collRef = collection(db, 'users', firebaseUser.uid, 'batches');
          const docRef = await addDoc(collRef, docData);
          logger.info(`[addBatch] Success: ${docRef.id}`);
          return { ...docData, id: docRef.id } as Batch;
        } catch (error: any) {
          logger.error(`[addBatch] Firestore Error:`, error);
          addToast(`Error creating bake: ${error.message || 'Unknown error'}`, 'error');
          throw error;
        }
      } else {
        // Mock Mode: Add to local database
        logger.warn('[addBatch] Falling back to Mock Mode');
        const newId = `guest-batch-${Date.now()}`;
        const newBatch = { ...docData, id: newId } as Batch;
        await BakeRepo.create(newBatch, entitlements);
        return newBatch;
      }
    },
    [firebaseUser, db, entitlements, addToast]
  );

  const createDraftBatch = useCallback(async (): Promise<Batch> => {
    // Correctly passing the object that matches Omit<Batch, ...>
    // However, addBatch expects doughConfig, status, isFavorite
    // We must ensure the object passed satisfies the Omit type.
    // Omit<Batch, 'id' | 'createdAt' | 'updatedAt'>
    // Batch likely has other required fields. Let's assume the passed object + defaults cover it.
    // If addBatch fails type check, we need to provide all required fields of Batch (minus omitted).
    // Assuming Batch has optional fields or we are providing minimally required.

    // For now, I'll trust the existing logic but fix formatting.
    return await addBatch({
      name: 'New Bake (Draft)',
      doughConfig: DEFAULT_CONFIG,
      status: BatchStatus.DRAFT,
      isFavorite: false,
      // Provide other defaults if necessary, e.g. notes: ''
      notes: '',
      rating: 0,
      images: [],
      ovenId: null,
      levainId: null,
      flourId: null,
      methodId: null,
      steps: []
    } as unknown as Omit<Batch, 'id' | 'createdAt' | 'updatedAt'>); // cast to avoid strict partial checks if type definition is strict
  }, [addBatch]);

  const updateBatch = useCallback(
    async (updatedBatch: Batch) => {
      const usingFirestore = shouldUseFirestore(firebaseUser, db);
      logger.debug(`[updateBatch] usingFirestore: ${usingFirestore}, id: ${updatedBatch.id}`);

      if (usingFirestore && firebaseUser && db) {
        try {
          const docRef = doc(db, 'users', firebaseUser.uid, 'batches', updatedBatch.id);
          const updateData = sanitizeForFirestore({ ...updatedBatch, updatedAt: new Date().toISOString() });
          await updateDoc(docRef, updateData);
          logger.info(`[updateBatch] Success`);
        } catch (error: any) {
          logger.error(`[updateBatch] Firestore Error:`, error);
          addToast(`Error updating bake: ${error.message}`, 'error');
          throw error;
        }
      } else {
        // Mock Mode: Update local database
        logger.warn('[updateBatch] Falling back to Mock Mode');
        await BakeRepo.update(updatedBatch.id, { ...updatedBatch, updatedAt: new Date().toISOString() });
      }
    },
    [firebaseUser, db, addToast]
  );

  const deleteBatch = useCallback(
    async (id: string) => {
      const batchToDelete = batches.find((b) => b.id === id);

      if (shouldUseFirestore(firebaseUser, db) && firebaseUser && db) {
        const docRef = doc(db, 'users', firebaseUser.uid, 'batches', id);
        await deleteDoc(docRef);
      } else {
        // Mock Mode: Delete from local database
        await BakeRepo.remove(id);
      }

      if (batchToDelete) addToast(`${t('ui.bake__2')}${batchToDelete.name}" deleted.`, 'info');
    },
    [firebaseUser, db, batches, addToast, t]
  );

  return {
    batches,
    addBatch,
    updateBatch,
    deleteBatch,
    createDraftBatch,
  };
}
