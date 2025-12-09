
import { getStorage, FirebaseStorage } from "firebase/storage";
import { app } from "./app";

export let storage: FirebaseStorage | null = null;

if (app) {
    try {
        storage = getStorage(app);
    } catch (e) {
        console.warn("Firebase Storage failed to initialize", e);
    }
}
