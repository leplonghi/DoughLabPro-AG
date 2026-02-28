import { db, SyncQueueItem } from '../local/db';
import { Batch } from '@/types';
import { canSaveBake, UserEntitlements } from '../../domain/usecases/canAccess';

export class BakeRepo {
    static async getAll(): Promise<Batch[]> {
        return db.bakes.orderBy('createdAt').reverse().toArray();
    }

    static async getById(id: string): Promise<Batch | undefined> {
        return db.bakes.get(id);
    }

    static async count(): Promise<number> {
        return db.bakes.count();
    }

    static async create(bake: Batch, entitlements: UserEntitlements): Promise<void> {
        const count = await this.count();
        const check = canSaveBake(entitlements, count);
        if (!check.granted) {
            throw new Error(check.reason);
        }
        await db.bakes.add(bake);
        await this.queueSync('CREATE', bake.id, bake);
    }

    static async update(id: string, updates: Partial<Batch>): Promise<void> {
        await db.bakes.update(id, updates);
        const updated = await this.getById(id);
        if (updated) {
            await this.queueSync('UPDATE', id, updated);
        }
    }

    static async remove(id: string): Promise<void> {
        await db.bakes.delete(id);
        await this.queueSync('DELETE', id);
    }

    static async queueSync(action: 'CREATE' | 'UPDATE' | 'DELETE', entityId: string, payload?: any) {
        // Enqueue an action to be synced to Firebase later
        const syncItem: SyncQueueItem = {
            id: crypto.randomUUID(),
            entityName: 'bakes',
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
