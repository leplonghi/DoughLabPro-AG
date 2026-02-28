import { db, SyncQueueItem } from '../local/db';
import { FavoriteItem } from '@/types';

export class FavoriteRepo {
    static async getAll(): Promise<FavoriteItem[]> {
        return db.favorites.orderBy('createdAt').reverse().toArray();
    }

    static async getById(id: string): Promise<FavoriteItem | undefined> {
        return db.favorites.get(id);
    }

    static async create(favorite: FavoriteItem): Promise<void> {
        await db.favorites.add(favorite);
        await this.queueSync('CREATE', favorite.id, favorite);
    }

    static async remove(id: string): Promise<void> {
        await db.favorites.delete(id);
        await this.queueSync('DELETE', id);
    }

    static async queueSync(action: 'CREATE' | 'UPDATE' | 'DELETE', entityId: string, payload?: any) {
        // Enqueue an action to be synced to Firebase later
        const syncItem: SyncQueueItem = {
            id: crypto.randomUUID(),
            entityName: 'favorites',
            entityId,
            action,
            payload,
            status: 'PENDING',
            createdAt: new Date().toISOString(),
            retryCount: 0
        };
        await db.syncQueue.add(syncItem);
    }
}
