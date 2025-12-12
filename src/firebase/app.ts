
import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { firebaseConfig, isFirebaseConfigured } from "./config";
import { useTranslation } from '@/i18n';

export let app: FirebaseApp | null = null;

if (isFirebaseConfigured) {
  try {
    if (getApps().length > 0) {
      app = getApp();
    } else {
      app = initializeApp(firebaseConfig);
    }
  } catch (error) {
    console.warn("Failed to initialize Firebase App:", error);
    app = null;
  }
} else {
  console.warn(t('ui.firebase_configuration_missing_app_running_in_mock'));
}
