
import { getAuth, GoogleAuthProvider, Auth, connectAuthEmulator } from "firebase/auth";
import { app } from "./app";
import i18n from '@/i18n';

export let auth: Auth | null = null;
export let googleProvider: GoogleAuthProvider | null = null;

if (app) {
  try {
    auth = getAuth(app);
    googleProvider = new GoogleAuthProvider();
    googleProvider.setCustomParameters({ prompt: "select_account" });

    // Connect to local emulator ONLY if explicitly on localhost in dev mode
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const useEmulator = import.meta.env.DEV && isLocalhost;

    if (useEmulator) {
      try {
        // Only connect if not already connected (prevents "Already initialized" error)
        if (!auth.emulatorConfig) {
          connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
          console.log('🔥 Connected to Firebase Auth Emulator');
        }
      } catch (e) {
        // Emulator might not be running, that's ok
        console.warn('Firebase Auth Emulator not available:', e);
      }
    } else if (!isLocalhost || !import.meta.env.DEV) {
      console.log('✓ Using real Firebase authentication');
    }
  } catch (e) {
    console.warn(i18n.t('auth.firebase_auth_failed_to_initialize'), e);
  }
}
