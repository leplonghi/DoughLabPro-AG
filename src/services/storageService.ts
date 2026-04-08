import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "@/firebase/app";
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

const MAX_UPLOAD_SIZE_BYTES = 5 * 1024 * 1024;
const IMAGE_CONTENT_TYPE_PREFIX = "image/";

const sanitizePathSegment = (segment: string) =>
    segment
        .replace(/\\/g, "/")
        .split("/")
        .filter(Boolean)
        .map((part) => part.replace(/[^a-zA-Z0-9._-]/g, "_"))
        .join("/");

export const uploadImage = async (file: File, path: string): Promise<string> => {
    if (!app) throw new Error('Firebase not initialized');
    if (!file.type.startsWith(IMAGE_CONTENT_TYPE_PREFIX)) {
        throw new Error('Only image uploads are supported.');
    }
    if (file.size > MAX_UPLOAD_SIZE_BYTES) {
        throw new Error('Image must be smaller than 5MB.');
    }

    const safePath = sanitizePathSegment(path);
    if (!safePath) {
        throw new Error('Invalid upload path.');
    }

    const storage = getStorage(app);
    const storageRef = ref(storage, safePath);

    try {
        await uploadBytes(storageRef, file, {
            contentType: file.type,
            cacheControl: 'public,max-age=3600',
        });
        const url = await getDownloadURL(storageRef);
        return url;
    } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
    }
};

import { Levain } from "@/types";
import { useTranslation } from '@/i18n';

export const exportLevains = (levains: Levain[]) => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(levains));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "levains_backup.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
};

export const importLevains = async (file: File): Promise<Levain[]> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const json = JSON.parse(event.target?.result as string);
                resolve(json);
            } catch (error) {
                reject(error);
            }
        };
        reader.onerror = (error) => reject(error);
        reader.readAsText(file);
    });
};
