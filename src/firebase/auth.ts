
import { getAuth, GoogleAuthProvider, Auth } from "firebase/auth";
import { app } from "./app";

import { logger } from '@/utils/logger';

export let auth: Auth | null = null;
export let googleProvider: GoogleAuthProvider | null = null;

if (app) {
  try {
    auth = getAuth(app);
    googleProvider = new GoogleAuthProvider();
    googleProvider.setCustomParameters({ prompt: "select_account" });
  } catch (e) {
    logger.warn("Firebase Auth failed to initialize", e);
  }
}
