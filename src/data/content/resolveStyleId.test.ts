/**
 * resolveStyleId.test.ts
 *
 * Unit tests for the canonical style ID resolver.
 * Run with: npm test -- resolveStyleId
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';

// --- Mocks (must be before import of the module under test) ---

// Inline mock for aliases.json so tests don't depend on filesystem
vi.mock('@/data/content/aliases.json', () => ({
    default: {
        aliases: {
            // Duplicate NY styles → canonical
            new_york_slice_v2: 'new_york_style',
            new_york_artisan_cold_ferment: 'new_york_style',
            NY_STYLE: 'new_york_style',
            ny_style: 'new_york_style',
            NEW_YORK: 'new_york_style',
            // Neapolitan
            neapolitan_home_oven_adapted: 'neapolitan_avpn_classic',
            NEAPOLITAN: 'neapolitan_avpn_classic',
            neapolitan: 'neapolitan_avpn_classic',
            // Legacy enum strings
            SOURDOUGH: 'sf_sourdough',
            sourdough: 'sf_sourdough',
            BRIOCHE: 'brioche',
            DETROIT: 'detroit_style_classic',
            chicago: 'chicago_deep_dish',
            CHICAGO: 'chicago_deep_dish',
            sicilian: 'sicilian_grandma_pan',
            SICILIAN: 'sicilian_grandma_pan',
        },
        _comment: 'mock',
        _duplicateReport: {},
    },
}));

vi.mock('@/data/content/content.version.json', () => ({
    default: {
        version: '1.0.0',
        date: '2026-02-28',
        schemaVersion: 3,
    },
}));

// Import AFTER mocks
import {
    resolveStyleId,
    resolveStyleIds,
    isLegacyStyleId,
    getAliasMap,
    getContentVersion,
} from '@/data/content/resolveStyleId';

// ─────────────────────────────────────────────────────────────────────────────
// resolveStyleId
// ─────────────────────────────────────────────────────────────────────────────

describe('resolveStyleId', () => {
    it('returns the canonical ID for a known alias', () => {
        expect(resolveStyleId('new_york_slice_v2')).toBe('new_york_style');
        expect(resolveStyleId('NY_STYLE')).toBe('new_york_style');
        expect(resolveStyleId('new_york_artisan_cold_ferment')).toBe('new_york_style');
        expect(resolveStyleId('NEW_YORK')).toBe('new_york_style');
    });

    it('resolves case-sensitive legacy enum string values', () => {
        expect(resolveStyleId('SOURDOUGH')).toBe('sf_sourdough');
        expect(resolveStyleId('sourdough')).toBe('sf_sourdough');
        expect(resolveStyleId('NEAPOLITAN')).toBe('neapolitan_avpn_classic');
        expect(resolveStyleId('DETROIT')).toBe('detroit_style_classic');
    });

    it('returns an already-canonical ID unchanged', () => {
        // Canonical IDs are NOT in the alias map
        expect(resolveStyleId('new_york_style')).toBe('new_york_style');
        expect(resolveStyleId('neapolitan_avpn_classic')).toBe('neapolitan_avpn_classic');
        expect(resolveStyleId('sf_sourdough')).toBe('sf_sourdough');
    });

    it('returns an unknown ID unchanged (non-breaking)', () => {
        expect(resolveStyleId('completely_unknown_id_xyz')).toBe('completely_unknown_id_xyz');
    });

    it('handles null gracefully', () => {
        expect(resolveStyleId(null)).toBeNull();
    });

    it('handles undefined gracefully', () => {
        expect(resolveStyleId(undefined)).toBeUndefined();
    });

    it('handles empty string gracefully', () => {
        // Empty string is falsy — returns as-is
        expect(resolveStyleId('')).toBe('');
    });
});

// ─────────────────────────────────────────────────────────────────────────────
// resolveStyleIds (batch)
// ─────────────────────────────────────────────────────────────────────────────

describe('resolveStyleIds', () => {
    it('resolves all IDs in an array', () => {
        const result = resolveStyleIds([
            'new_york_slice_v2',
            'neapolitan_avpn_classic', // already canonical
            'SOURDOUGH',
        ]);
        expect(result).toEqual([
            'new_york_style',
            'neapolitan_avpn_classic',
            'sf_sourdough',
        ]);
    });

    it('handles an empty array', () => {
        expect(resolveStyleIds([])).toEqual([]);
    });
});

// ─────────────────────────────────────────────────────────────────────────────
// isLegacyStyleId
// ─────────────────────────────────────────────────────────────────────────────

describe('isLegacyStyleId', () => {
    it('returns true for legacy/duplicate IDs', () => {
        expect(isLegacyStyleId('new_york_slice_v2')).toBe(true);
        expect(isLegacyStyleId('NY_STYLE')).toBe(true);
        expect(isLegacyStyleId('SOURDOUGH')).toBe(true);
        expect(isLegacyStyleId('chicago')).toBe(true);
    });

    it('returns false for canonical IDs', () => {
        expect(isLegacyStyleId('new_york_style')).toBe(false);
        expect(isLegacyStyleId('sf_sourdough')).toBe(false);
        expect(isLegacyStyleId('neapolitan_avpn_classic')).toBe(false);
    });

    it('returns false for unknown IDs', () => {
        expect(isLegacyStyleId('some_future_canonical_id')).toBe(false);
    });
});

// ─────────────────────────────────────────────────────────────────────────────
// getContentVersion
// ─────────────────────────────────────────────────────────────────────────────

describe('getContentVersion', () => {
    it('returns version info', () => {
        const { version, date, schemaVersion } = getContentVersion();
        expect(version).toBe('1.0.0');
        expect(date).toBe('2026-02-28');
        expect(schemaVersion).toBe(3);
    });
});

// ─────────────────────────────────────────────────────────────────────────────
// getAliasMap
// ─────────────────────────────────────────────────────────────────────────────

describe('getAliasMap', () => {
    it('returns a non-empty readonly map', () => {
        const map = getAliasMap();
        expect(Object.keys(map).length).toBeGreaterThan(0);
        expect(map['new_york_slice_v2']).toBe('new_york_style');
    });
});
