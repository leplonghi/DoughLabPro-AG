
import { getFirestore, Firestore } from "firebase/firestore";
import { app } from "./app";
import { useTranslation } from '@/i18n';

export let db: Firestore | null = null;

if (app) {
  try {
    db = getFirestore(app);
  } catch (e) {
    console.warn(t('common.firebase_firestore_failed_to_initialize'), e);
  }
}
