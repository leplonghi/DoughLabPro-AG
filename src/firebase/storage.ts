
import { getStorage, FirebaseStorage } from "firebase/storage";
import { app } from "./app";
import i18n from '@/i18n';

export let storage: FirebaseStorage | null = null;

if (app) {
    try {
        storage = getStorage(app);
    } catch (e) {
        console.warn(i18n.t('common.firebase_storage_failed_to_initialize'), e);
    }
}
