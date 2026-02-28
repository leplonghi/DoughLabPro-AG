/**
 * migrateSavedData.test.ts
 *
 * Unit tests for migration helpers.
 * Run with: npm test -- migrateSavedData
 */

import { describe, it, expect, vi } from 'vitest';

// Mock alias resolver so tests don't depend on real aliases.json
vi.mock('@/data/content/resolveStyleId', () => ({
    resolveStyleId: (id: string) => {
        const MAP: Record<string, string> = {
            new_york_slice_v2: 'new_york_style',
            NY_STYLE: 'new_york_style',
            SOURDOUGH: 'sf_sourdough',
            sicilian: 'sicilian_grandma_pan',
        };
        return MAP[id] ?? id;
    },
}));

import {
    migrateBatch,
    migrateFavorite,
    migrateCustomPreset,
    migrateUserStyle,
    migrateBatches,
    migrateFavorites,
    migrateCustomPresets,
} from '@/data/migrations/migrateSavedData';

// ─────────────────────────────────────────────────────────────────────────────
// migrateBatch
// ─────────────────────────────────────────────────────────────────────────────

describe('migrateBatch', () => {
    it('patches styleId when it is a legacy alias', () => {
        const batch = {
            id: 'b1',
            name: 'Test',
            styleId: 'new_york_slice_v2',
        };
        const result = migrateBatch(batch);
        expect(result.data.styleId).toBe('new_york_style');
        expect(result.wasPatched).toBe(true);
        expect(result.patchedFields).toContain('styleId');
    });

    it('patches doughConfig.recipeStyle when it is a legacy alias', () => {
        const batch = {
            id: 'b2',
            name: 'Test',
            doughConfig: { recipeStyle: 'SOURDOUGH', hydration: 75 },
        };
        const result = migrateBatch(batch);
        expect(result.data.doughConfig.recipeStyle).toBe('sf_sourdough');
        expect(result.wasPatched).toBe(true);
        expect(result.patchedFields).toContain('doughConfig.recipeStyle');
    });

    it('does not patch when IDs are already canonical', () => {
        const batch = {
            id: 'b3',
            styleId: 'neapolitan_avpn_classic',
            doughConfig: { recipeStyle: 'neapolitan_avpn_classic' },
        };
        const result = migrateBatch(batch);
        expect(result.wasPatched).toBe(false);
        expect(result.patchedFields).toHaveLength(0);
    });

    it('does not mutate the original object', () => {
        const batch = { id: 'b4', styleId: 'NY_STYLE' };
        const original = { ...batch };
        migrateBatch(batch);
        expect(batch).toEqual(original); // unchanged
    });

    it('handles batch with no styleId gracefully', () => {
        const batch = { id: 'b5', name: 'No style' };
        const result = migrateBatch(batch);
        expect(result.wasPatched).toBe(false);
    });
});

// ─────────────────────────────────────────────────────────────────────────────
// migrateFavorite
// ─────────────────────────────────────────────────────────────────────────────

describe('migrateFavorite', () => {
    it('patches itemId for style favorites with legacy IDs', () => {
        const fav = { id: 'f1', type: 'style', itemId: 'new_york_slice_v2', title: 'NY' };
        const result = migrateFavorite(fav);
        expect(result.data.itemId).toBe('new_york_style');
        expect(result.wasPatched).toBe(true);
    });

    it('does not patch non-style favorites', () => {
        const fav = { id: 'f2', type: 'batch', itemId: 'some_batch_id', title: 'B' };
        const result = migrateFavorite(fav);
        expect(result.wasPatched).toBe(false);
        expect(result.data.itemId).toBe('some_batch_id');
    });

    it('is a no-op when itemId is already canonical', () => {
        const fav = { id: 'f3', type: 'style', itemId: 'neapolitan_avpn_classic', title: 'Neo' };
        const result = migrateFavorite(fav);
        expect(result.wasPatched).toBe(false);
    });
});

// ─────────────────────────────────────────────────────────────────────────────
// migrateCustomPreset
// ─────────────────────────────────────────────────────────────────────────────

describe('migrateCustomPreset', () => {
    it('patches recipeStyle when legacy', () => {
        const preset = { id: 'cp1', recipeStyle: 'sicilian' };
        const result = migrateCustomPreset(preset);
        expect(result.data.recipeStyle).toBe('sicilian_grandma_pan');
        expect(result.wasPatched).toBe(true);
    });

    it('patches stylePresetId when legacy', () => {
        const preset = { id: 'cp2', stylePresetId: 'new_york_slice_v2' };
        const result = migrateCustomPreset(preset);
        expect(result.data.stylePresetId).toBe('new_york_style');
        expect(result.wasPatched).toBe(true);
    });
});

// ─────────────────────────────────────────────────────────────────────────────
// migrateUserStyle
// ─────────────────────────────────────────────────────────────────────────────

describe('migrateUserStyle', () => {
    it('patches baseStyleId when legacy', () => {
        const style = { id: 'us1', baseStyleId: 'NY_STYLE' };
        const result = migrateUserStyle(style);
        expect(result.data.baseStyleId).toBe('new_york_style');
        expect(result.wasPatched).toBe(true);
    });

    it('is a no-op when no baseStyleId', () => {
        const style = { id: 'us2', name: 'My Style' };
        const result = migrateUserStyle(style);
        expect(result.wasPatched).toBe(false);
    });
});

// ─────────────────────────────────────────────────────────────────────────────
// Batch helpers
// ─────────────────────────────────────────────────────────────────────────────

describe('migrateBatches', () => {
    it('migrates all batches and reports patched count', () => {
        const batches = [
            { id: 'b1', styleId: 'new_york_slice_v2' },
            { id: 'b2', styleId: 'neapolitan_avpn_classic' }, // already canonical
            { id: 'b3', styleId: 'SOURDOUGH' },
        ];
        const { data, totalPatched, patchReport } = migrateBatches(batches);
        expect(data[0].styleId).toBe('new_york_style');
        expect(data[1].styleId).toBe('neapolitan_avpn_classic');
        expect(data[2].styleId).toBe('sf_sourdough');
        expect(totalPatched).toBe(2);
        expect(patchReport).toHaveLength(2);
        expect(patchReport[0].id).toBe('b1');
        expect(patchReport[1].id).toBe('b3');
    });
});

describe('migrateFavorites', () => {
    it('migrates all style favorites in one pass', () => {
        const favs = [
            { id: 'f1', type: 'style', itemId: 'sicilian', title: 'S' },
            { id: 'f2', type: 'batch', itemId: 'some_batch', title: 'B' },
        ];
        const result = migrateFavorites(favs);
        expect(result[0].itemId).toBe('sicilian_grandma_pan');
        expect(result[1].itemId).toBe('some_batch'); // unchanged
    });
});

describe('migrateCustomPresets', () => {
    it('migrates all presets', () => {
        const presets = [
            { id: 'p1', recipeStyle: 'SOURDOUGH' },
            { id: 'p2', recipeStyle: 'neapolitan_avpn_classic' },
        ];
        const result = migrateCustomPresets(presets);
        expect(result[0].recipeStyle).toBe('sf_sourdough');
        expect(result[1].recipeStyle).toBe('neapolitan_avpn_classic');
    });
});
