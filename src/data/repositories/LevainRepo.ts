import { db, SyncQueueItem } from '../local/db';
import { Levain } from '@/types';
import { canCreateLevain, UserEntitlements } from '../../domain/usecases/canAccess';

export class LevainRepo {
    static async getAll(): Promise<Levain[]> {
        return db.levains.orderBy('createdAt').reverse().toArray();
    }

    static async getById(id: string): Promise<Levain | undefined> {
        return db.levains.get(id);
    }

    static async count(): Promise<number> {
        return db.levains.count();
    }

    static async create(levain: Levain, entitlements: UserEntitlements): Promise<void> {
        const count = await this.count();
        const check = canCreateLevain(entitlements, count);
        if (!check.granted) {
            throw new Error(check.reason);
        }
        await db.levains.add(levain);
        await this.queueSync('CREATE', levain.id, levain);
    }

    static async update(id: string, updates: Partial<Levain>): Promise<void> {
        await db.levains.update(id, updates);
        const updated = await this.getById(id);
        if (updated) {
            await this.queueSync('UPDATE', id, updated);
        }
    }

    static async remove(id: string): Promise<void> {
        await db.levains.delete(id);
        await this.queueSync('DELETE', id);
    }

    static async queueSync(action: 'CREATE' | 'UPDATE' | 'DELETE', entityId: string, payload?: any) {
        // Enqueue an action to be synced to Firebase later
        const syncItem: SyncQueueItem = {
            id: crypto.randomUUID(),
            entityName: 'levains',
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
