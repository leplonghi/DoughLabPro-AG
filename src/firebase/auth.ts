
import { getAuth, GoogleAuthProvider, Auth, indexedDBLocalPersistence, initializeAuth } from "firebase/auth";
import { app } from "./app";
import { isNativePlatform } from '@/capacitor/platform';
import i18n from '@/i18n';

export let auth: Auth | null = null;
export let googleProvider: GoogleAuthProvider | null = null;

if (app) {
  try {
    if (isNativePlatform()) {
      try {
        auth = initializeAuth(app, {
          persistence: indexedDBLocalPersistence,
        });
      } catch {
        auth = getAuth(app);
      }
    } else {
      auth = getAuth(app);
    }

    googleProvider = new GoogleAuthProvider();
    googleProvider.setCustomParameters({ prompt: "select_account" });
  } catch (e) {
    console.warn(i18n.t('auth.firebase_auth_failed_to_initialize'), e);
  }
}
