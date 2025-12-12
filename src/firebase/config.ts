
// Safely retrieve environment variables.
// We explicitly access properties to ensure build tools (like Vite) can perform static replacement,
// but we guard against runtime crashes if import.meta.env is undefined.

const getEnv = (key: string): string | undefined => {
  try {
    // @ts-ignore
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      // @ts-ignore
      return import.meta.env[key];
    }
  } catch (e) {
    // Ignore errors
  }

  try {
    if (typeof process !== 'undefined' && process.env) {
      return process.env[key];
    }
  } catch (e) {
    // Ignore errors
  }
  
  return undefined;
};

// Updated configuration for doughlabpro-fire
export const firebaseConfig = {
  apiKey: t('ui.aizasyaanrmjdbor6nqnkdkcamwldmgfq9igci4'),
  authDomain: "doughlabpro-fire.firebaseapp.com",
  projectId: "doughlabpro-fire",
  storageBucket: "doughlabpro-fire.firebasestorage.app",
  messagingSenderId: "378525744520",
  appId: "1:378525744520:web:be5f298ea65b6d28004e3d"
};

export const isFirebaseConfigured = !!firebaseConfig.apiKey && !!firebaseConfig.projectId;
