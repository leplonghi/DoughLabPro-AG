import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "@/firebase/app";

export const uploadImage = async (file: File, path: string): Promise<string> => {
    if (!app) throw new Error("Firebase not initialized");

    const storage = getStorage(app);
    const storageRef = ref(storage, path);

    try {
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        return url;
    } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
    }
};
