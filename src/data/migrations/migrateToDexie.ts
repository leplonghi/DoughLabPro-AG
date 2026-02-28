import { db } from '../local/db';
import { Batch, Levain, FavoriteItem } from '@/types';
import { resolveStyleId } from '../content/resolveStyleId';

export async function migrateFromLocalStorageToDexie() {
    // Check if we already migrated. A simple flag in localStorage could be enough.
    // However, the prompt says "if IndexedDB empty, import from old storage".

    try {
        const bakesCount = await db.bakes.count();
        if (bakesCount > 0) {
            // Assume migration already happened if we have records
            return;
        }

        const guestMode = !localStorage.getItem('dough-lab-auth-token'); // basic check, but could just migrate everything we find

        // Migrate Bakes
        const savedBakesStr = localStorage.getItem('dough-lab-guest-batches');
        if (savedBakesStr) {
            const bakes: Batch[] = JSON.parse(savedBakesStr);
            const migratedBakes = bakes.map(bake => ({
                ...bake,
                styleId: bake.styleId ? resolveStyleId(bake.styleId) : bake.styleId,
                doughConfig: {
                    ...bake.doughConfig,
                    recipeStyle: resolveStyleId(bake.doughConfig?.recipeStyle) as any
                }
            }));
            await db.bakes.bulkAdd(migratedBakes);
            console.log(`Migrated ${migratedBakes.length} bakes to IndexedDB`);
        }

        // Migrate Levains
        const savedLevainsStr = localStorage.getItem('dough-lab-guest-levains');
        if (savedLevainsStr) {
            const levains: Levain[] = JSON.parse(savedLevainsStr);
            await db.levains.bulkAdd(levains);
            console.log(`Migrated ${levains.length} levains to IndexedDB`);
        }

        // Migrate Favorites
        const savedFavoritesStr = localStorage.getItem('dough-lab-guest-favorites');
        if (savedFavoritesStr) {
            const favorites: FavoriteItem[] = JSON.parse(savedFavoritesStr);
            const migratedFavorites = favorites.map(f => ({
                ...f,
                itemId: f.itemId ? resolveStyleId(f.itemId) : f.itemId
            }));
            await db.favorites.bulkAdd(migratedFavorites);
            console.log(`Migrated ${migratedFavorites.length} favorites to IndexedDB`);
        }

        // We do not delete localStorage yet to maintain safety
        localStorage.setItem('dough-lab-indexeddb-migrated', 'true');
    } catch (error) {
        console.error("Failed to migrate local storage to IndexedDB:", error);
    }
}
