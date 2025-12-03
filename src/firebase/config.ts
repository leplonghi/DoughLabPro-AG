
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

export const firebaseConfig = {
  apiKey: "AIzaSyCzF7Gjn4BlX6M1AimsIg-KN5UEaXI4QXY",
  authDomain: "doughlabpro-app.firebaseapp.com",
  projectId: "doughlabpro-app",
  storageBucket: "doughlabpro-app.firebasestorage.app",
  messagingSenderId: "685833068696",
  appId: "1:685833068696:web:4e6f1a60df40c1319bf0ed"
};

export const isFirebaseConfigured = !!firebaseConfig.apiKey && !!firebaseConfig.projectId;
