/**
 * resolveStyleId
 *
 * Canonical ID resolver for all style identifiers.
 * Accepts any legacy enum value, duplicate ID, or old string and returns
 * the definitive canonical styleId.
 *
 * Rules:
 *  - If id is in aliases → return canonicalId
 *  - If id is already canonical (exists in registry, not in aliases) → return as-is
 *  - If id is unknown → return id unchanged + log warning (non-breaking)
 *
 * This module has ZERO React dependencies and can be used anywhere:
 * UserProvider, migration scripts, analytics, etc.
 */

import aliasData from './aliases.json';
import contentVersion from './content.version.json';

type AliasMap = Record<string, string>;

const ALIASES: AliasMap = aliasData.aliases as AliasMap;

let _warnedIds = new Set<string>();

/**
 * Resolve a style ID to its canonical form.
 *
 * @param id - Any style identifier (legacy enum, duplicate, or canonical)
 * @returns The canonical styleId
 */
export function resolveStyleId(id: string | null | undefined): string {
    if (!id) return id as string;

    const canonical = ALIASES[id];

    if (canonical) {
        return canonical;
    }

    // Unknown ID — warn once in dev, return as-is (non-breaking)
    const isDev = typeof import.meta !== 'undefined' && typeof import.meta.env !== 'undefined'
        ? import.meta.env.DEV
        : process.env.NODE_ENV !== 'production';

    if (isDev && !_warnedIds.has(id)) {
        _warnedIds.add(id);
        console.warn(
            `[StyleResolver v${contentVersion.version}] Unknown styleId "${id}". ` +
            `If this is a new canonical ID, add it to aliases.json if needed. ` +
            `If this is a legacy ID, add a mapping to aliases.json.`
        );
    }

    return id;
}

/**
 * Resolve an array of style IDs (e.g. favorites list).
 */
export function resolveStyleIds(ids: string[]): string[] {
    return ids.map(resolveStyleId);
}

/**
 * Check if a given ID has a canonical alias (i.e. it's a legacy/duplicate).
 */
export function isLegacyStyleId(id: string): boolean {
    return id in ALIASES;
}

/**
 * Get the full alias map (for debugging/admin use only).
 */
export function getAliasMap(): Readonly<AliasMap> {
    return ALIASES;
}

/**
 * Get content version info (for settings/debug screens).
 */
export function getContentVersion() {
    return {
        version: contentVersion.version,
        date: contentVersion.date,
        schemaVersion: contentVersion.schemaVersion,
    };
}
