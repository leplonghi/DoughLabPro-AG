import Dexie, { type EntityTable } from 'dexie';
import { Batch, Levain, FavoriteItem } from '@/types';

export interface SyncQueueItem {
    id: string; // uuid
    entityName: 'bakes' | 'levains' | 'favorites';
    entityId: string;
    action: 'CREATE' | 'UPDATE' | 'DELETE';
    payload?: any;
    status: 'PENDING' | 'SYNCING' | 'FAILED';
    createdAt: string;
    retryCount: number;
}

// Database Definition
const db = new Dexie('DoughLabDB') as Dexie & {
    bakes: EntityTable<Batch, 'id'>;
    levains: EntityTable<Levain, 'id'>;
    favorites: EntityTable<FavoriteItem, 'id'>;
    syncQueue: EntityTable<SyncQueueItem, 'id'>;
};

// Version 1 Schema
db.version(1).stores({
    bakes: 'id, createdAt, styleId, status', // Indexed properties
    levains: 'id, createdAt, isDefault',
    favorites: 'id, createdAt, type, itemId',
    syncQueue: 'id, entityName, entityId, status'
});

export { db };
