/**
 * migrateSavedData.ts
 *
 * Migration hooks for resolving legacy/duplicate styleIds in user-saved data.
 *
 * Called at READ time (not write time) — we resolve on the way out,
 * and on the next write-back we persist the canonical ID.
 *
 * NON-NEGOTIABLES:
 *  - Never throws. Never mutates Firestore directly.
 *  - Returns a patched copy — caller decides whether to write back.
 *  - Works on Batches, Levains, Favorites, CustomPresets, UserStyles.
 *
 * Usage:
 *  const migrated = migrateBatch(rawBatch);
 *  // migrated.wasPatched === true if any ID changed
 *  // caller writes back migrated.data to Firestore if wasPatched
 */

import { resolveStyleId } from '@/data/content/resolveStyleId';

// ─────────────────────────────────────────────────────────────────────────────
// RESULT TYPE
// ─────────────────────────────────────────────────────────────────────────────

export interface MigrationResult<T> {
    data: T;
    wasPatched: boolean;
    patchedFields: string[];
}

function migrated<T>(data: T, patchedFields: string[]): MigrationResult<T> {
    return { data, wasPatched: patchedFields.length > 0, patchedFields };
}

// ─────────────────────────────────────────────────────────────────────────────
// BATCH MIGRATION
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Resolves all styleId references in a saved Batch record.
 *
 * Fields patched:
 *  - batch.styleId
 *  - batch.doughConfig.recipeStyle
 *  - batch.doughConfig.stylePresetId
 *  - batch.doughConfig.selectedStyleId
 */
export function migrateBatch<T extends Record<string, any>>(batch: T): MigrationResult<T> {
    const patched: string[] = [];
    let data = { ...batch };

    // Top-level styleId
    if (data.styleId) {
        const resolved = resolveStyleId(data.styleId);
        if (resolved !== data.styleId) {
            data = { ...data, styleId: resolved };
            patched.push('styleId');
        }
    }

    // doughConfig fields
    if (data.doughConfig) {
        let dc = { ...data.doughConfig };
        let dcPatched = false;

        if (dc.recipeStyle) {
            const resolved = resolveStyleId(dc.recipeStyle);
            if (resolved !== dc.recipeStyle) { dc.recipeStyle = resolved; dcPatched = true; patched.push('doughConfig.recipeStyle'); }
        }
        if (dc.stylePresetId) {
            const resolved = resolveStyleId(dc.stylePresetId);
            if (resolved !== dc.stylePresetId) { dc.stylePresetId = resolved; dcPatched = true; patched.push('doughConfig.stylePresetId'); }
        }
        if (dc.selectedStyleId) {
            const resolved = resolveStyleId(dc.selectedStyleId);
            if (resolved !== dc.selectedStyleId) { dc.selectedStyleId = resolved; dcPatched = true; patched.push('doughConfig.selectedStyleId'); }
        }

        if (dcPatched) data = { ...data, doughConfig: dc };
    }

    return migrated(data, patched);
}

// ─────────────────────────────────────────────────────────────────────────────
// LEVAIN MIGRATION
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Levains don't directly reference a styleId, but may store one in metadata.
 * Kept for symmetry and future-proofing.
 */
export function migrateLevain<T extends Record<string, any>>(levain: T): MigrationResult<T> {
    const patched: string[] = [];
    let data = { ...levain };

    if (data.preferredStyleId) {
        const resolved = resolveStyleId(data.preferredStyleId);
        if (resolved !== data.preferredStyleId) {
            data = { ...data, preferredStyleId: resolved };
            patched.push('preferredStyleId');
        }
    }

    return migrated(data, patched);
}

// ─────────────────────────────────────────────────────────────────────────────
// FAVORITE MIGRATION
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Favorites store {id, itemId, type, ...}.
 * For favorites of type 'style', itemId IS the styleId.
 */
export function migrateFavorite<T extends Record<string, any>>(fav: T): MigrationResult<T> {
    const patched: string[] = [];
    let data = { ...fav };

    if (data.type === 'style') {
        const idField = data.itemId || data.id;
        if (idField) {
            const resolved = resolveStyleId(idField);
            if (resolved !== idField) {
                data = { ...data, itemId: resolved };
                patched.push('itemId');
            }
        }
    }

    return migrated(data, patched);
}

// ─────────────────────────────────────────────────────────────────────────────
// CUSTOM PRESET MIGRATION
// ─────────────────────────────────────────────────────────────────────────────

export function migrateCustomPreset<T extends Record<string, any>>(preset: T): MigrationResult<T> {
    const patched: string[] = [];
    let data = { ...preset };

    if (data.recipeStyle) {
        const resolved = resolveStyleId(data.recipeStyle);
        if (resolved !== data.recipeStyle) {
            data = { ...data, recipeStyle: resolved };
            patched.push('recipeStyle');
        }
    }

    if (data.stylePresetId) {
        const resolved = resolveStyleId(data.stylePresetId);
        if (resolved !== data.stylePresetId) {
            data = { ...data, stylePresetId: resolved };
            patched.push('stylePresetId');
        }
    }

    return migrated(data, patched);
}

// ─────────────────────────────────────────────────────────────────────────────
// USER STYLE MIGRATION
// ─────────────────────────────────────────────────────────────────────────────

/**
 * User-created styles may have been derived from a legacy style.
 * Patch the baseStyleId if present.
 */
export function migrateUserStyle<T extends Record<string, any>>(style: T): MigrationResult<T> {
    const patched: string[] = [];
    let data = { ...style };

    if (data.baseStyleId) {
        const resolved = resolveStyleId(data.baseStyleId);
        if (resolved !== data.baseStyleId) {
            data = { ...data, baseStyleId: resolved };
            patched.push('baseStyleId');
        }
    }

    return migrated(data, patched);
}

// ─────────────────────────────────────────────────────────────────────────────
// BATCH ARRAY HELPERS
// ─────────────────────────────────────────────────────────────────────────────

/** Migrate an array of Batches, return patched array + patch report. */
export function migrateBatches<T extends Record<string, any>>(batches: T[]): {
    data: T[];
    totalPatched: number;
    patchReport: { id: string; fields: string[] }[];
} {
    const patchReport: { id: string; fields: string[] }[] = [];
    const data = batches.map(b => {
        const r = migrateBatch(b);
        if (r.wasPatched) patchReport.push({ id: b.id || '?', fields: r.patchedFields });
        return r.data;
    });
    return { data, totalPatched: patchReport.length, patchReport };
}

/** Migrate an array of FavoriteItems. */
export function migrateFavorites<T extends Record<string, any>>(favs: T[]): T[] {
    return favs.map(f => migrateFavorite(f).data);
}

/** Migrate an array of CustomPresets. */
export function migrateCustomPresets<T extends Record<string, any>>(presets: T[]): T[] {
    return presets.map(p => migrateCustomPreset(p).data);
}
