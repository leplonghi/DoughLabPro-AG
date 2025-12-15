
import { getFirestore, Firestore } from "firebase/firestore";
import { app } from "./app";
import i18n from '@/i18n';

export let db: Firestore | null = null;

if (app) {
  try {
    db = getFirestore(app);
  } catch (e) {
    console.warn(i18n.t('common.firebase_firestore_failed_to_initialize'), e);
  }
}
