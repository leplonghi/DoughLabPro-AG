#!/usr/bin/env node
/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  🌍 DoughLab Pro — i18n Audit & Auto-Translation Tool      ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║  Features:                                                  ║
 * ║  1. Scans .tsx/.ts for hardcoded English strings            ║
 * ║  2. Compares translation keys across all languages          ║
 * ║  3. Auto-translates missing keys via Google Translate       ║
 * ║  4. Writes fixes directly to translation JSON files         ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║  Usage:                                                     ║
 * ║    node scripts/i18n-audit.cjs scan                         ║
 * ║    node scripts/i18n-audit.cjs sync                         ║
 * ║    node scripts/i18n-audit.cjs full                         ║
 * ║    node scripts/i18n-audit.cjs full --dry-run               ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// ═══════════════════════════════════════════════
// CONFIGURATION
// ═══════════════════════════════════════════════
const ROOT = path.join(__dirname, '..');
const SRC_DIR = path.join(ROOT, 'src');
const LOCALES_DIR = path.join(ROOT, 'public', 'locales');
const SOURCE_LANG = 'en';
const TARGET_LANGS = ['pt', 'es', 'fr', 'it', 'de'];
const ALL_LANGS = [SOURCE_LANG, ...TARGET_LANGS];

// Core namespaces to audit (skip detailed style i18n files)
const NAMESPACES = ['common', 'ui', 'calculator', 'learn', 'styles', 'errors', 'notifications', 'weather'];

// File patterns to scan for hardcoded strings
const SCAN_EXTENSIONS = ['.tsx', '.ts'];
const SCAN_IGNORE_DIRS = ['node_modules', '.git', 'dist', 'build', 'scripts', '__tests__', '.agent'];

// Map source file paths to translation namespaces
const PATH_TO_NAMESPACE = [
    { pattern: /pages[\\/]learn[\\/]|data[\\/]learn[\\/]|components[\\/]learn[\\/]/, ns: 'learn' },
    { pattern: /pages[\\/]styles[\\/]|data[\\/]styles[\\/]|components[\\/]styles[\\/]/, ns: 'styles' },
    { pattern: /components[\\/]calculator[\\/]|pages[\\/]calculator[\\/]/, ns: 'calculator' },
    { pattern: /components[\\/]modals[\\/]/, ns: 'ui' },
    { pattern: /components[\\/]layout[\\/]/, ns: 'ui' },
    { pattern: /pages[\\/]settings[\\/]/, ns: 'ui' },
    { pattern: /pages[\\/]mylab[\\/]|components[\\/]mylab[\\/]/, ns: 'ui' },
    { pattern: /contexts[\\/]/, ns: 'common' },
];
const DEFAULT_NAMESPACE = 'common';

// Strings to never flag as needing translation
const IGNORE_STRINGS = new Set([
    'DoughLab', 'DoughLab Pro', 'Doughy', 'Pro', 'AI', 'pH', 'CO2', 'DNA',
    'Google', 'Firebase', 'API', 'URL', 'HTML', 'CSS', 'JSON', 'OK',
    'N/A', 'vs', 'min', 'max', 'px', 'rem', 'em', '%', '°C', '°F',
    'w-', 'h-', 'p-', 'm-', 'bg-', 'text-', 'flex', 'grid', 'block',
    'sm', 'md', 'lg', 'xl', '2xl', 'div', 'span', 'button', 'input',
]);

// CLI args
const args = process.argv.slice(2);
const COMMAND = args.find(a => !a.startsWith('--')) || 'full';
const DRY_RUN = args.includes('--dry-run');
const VERBOSE = args.includes('--verbose');
const TRANSLATE_DELAY_MS = 150; // Delay between API calls

// ═══════════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════════

/** Flatten nested JSON to dot-separated keys */
function flattenJSON(obj, prefix = '') {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
        const fullKey = prefix ? `${prefix}.${key}` : key;
        if (value && typeof value === 'object' && !Array.isArray(value)) {
            Object.assign(result, flattenJSON(value, fullKey));
        } else {
            result[fullKey] = value;
        }
    }
    return result;
}

/** Unflatten dot-separated keys back to nested JSON */
function unflattenJSON(obj) {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
        const parts = key.split('.');
        let current = result;
        for (let i = 0; i < parts.length - 1; i++) {
            if (!current[parts[i]] || typeof current[parts[i]] !== 'object') {
                current[parts[i]] = {};
            }
            current = current[parts[i]];
        }
        current[parts[parts.length - 1]] = value;
    }
    return result;
}

/** Convert English string to a snake_case translation key */
function stringToKey(str) {
    return str
        .toLowerCase()
        .replace(/['']/g, '')
        .replace(/[^a-z0-9\s]/g, ' ')
        .trim()
        .replace(/\s+/g, '_')
        .substring(0, 60);
}

/** Get namespace based on file path */
function getNamespace(filePath) {
    const relative = path.relative(SRC_DIR, filePath).replace(/\\/g, '/');
    for (const { pattern, ns } of PATH_TO_NAMESPACE) {
        if (pattern.test(relative)) return ns;
    }
    return DEFAULT_NAMESPACE;
}

/** Recursively get all files matching extensions */
function getFiles(dir, extensions, ignorePatterns = []) {
    const results = [];
    if (!fs.existsSync(dir)) return results;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            if (ignorePatterns.some(p => entry.name === p)) continue;
            results.push(...getFiles(fullPath, extensions, ignorePatterns));
        } else if (extensions.some(ext => entry.name.endsWith(ext))) {
            results.push(fullPath);
        }
    }
    return results;
}

/** Load a JSON translation file */
function loadJSON(lang, ns) {
    const filePath = path.join(LOCALES_DIR, lang, `${ns}.json`);
    if (!fs.existsSync(filePath)) return null;
    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch {
        return null;
    }
}

/** Save a JSON translation file */
function saveJSON(lang, ns, data) {
    const filePath = path.join(LOCALES_DIR, lang, `${ns}.json`);
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
}

/** Sleep helper */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/** Check if string should be translated */
function shouldTranslate(str) {
    const trimmed = str.trim();
    if (trimmed.length < 3) return false;
    if (IGNORE_STRINGS.has(trimmed)) return false;
    if (/^\s*$/.test(trimmed)) return false;                           // Whitespace only
    if (/^[0-9.,\s%$€£¥°]+$/.test(trimmed)) return false;            // Numbers/symbols only
    if (/^(https?:|\/\/|\.\/|\.\.\/|@\/|#)/.test(trimmed)) return false;  // URLs/paths
    if (/^[a-z][a-zA-Z0-9]*$/.test(trimmed)) return false;            // camelCase identifiers
    if (/^[A-Z][a-z]+[A-Z]/.test(trimmed) && !/\s/.test(trimmed)) return false; // PascalCase
    if (/^[a-z_]+\.[a-z_]/.test(trimmed)) return false;              // i18n key format
    if (/^[a-z-]+$/.test(trimmed) && trimmed.includes('-')) return false; // CSS-like
    if (/^\{.*\}$/.test(trimmed)) return false;                        // Template expression
    if (/^(true|false|null|undefined|void|return|const|let|var)$/.test(trimmed)) return false;
    if (/^[A-Z_]{2,}$/.test(trimmed)) return false;                    // CONSTANTS
    if (/^(w|h|p|m|bg|text|flex|grid|border|rounded|shadow|ring|gap|space|font|leading|tracking)-/.test(trimmed)) return false; // Tailwind
    if (trimmed.startsWith('t(') || trimmed.startsWith("t('")) return false;
    return /[a-zA-Z]{2,}/.test(trimmed); // Must contain at least 2 letters
}

// ═══════════════════════════════════════════════
// GOOGLE TRANSLATE API (Free, no API key needed)
// ═══════════════════════════════════════════════

/** Translate text via Google Translate free API */
function translateText(text, targetLang) {
    return new Promise((resolve, reject) => {
        if (!text || text.trim().length === 0) {
            return resolve(text);
        }

        const url = new URL('https://translate.googleapis.com/translate_a/single');
        url.searchParams.set('client', 'gtx');
        url.searchParams.set('sl', 'en');
        url.searchParams.set('tl', targetLang);
        url.searchParams.set('dt', 't');
        url.searchParams.set('q', text);

        https.get(url.toString(), { timeout: 10000 }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const result = JSON.parse(data);
                    if (result && result[0]) {
                        const translated = result[0]
                            .filter(item => item && item[0])
                            .map(item => item[0])
                            .join('');
                        resolve(postProcessTranslation(translated, text));
                    } else {
                        resolve(`[AUTO] ${text}`);
                    }
                } catch (e) {
                    resolve(`[AUTO] ${text}`);
                }
            });
        }).on('error', () => {
            resolve(`[AUTO] ${text}`);
        }).on('timeout', function () {
            this.destroy();
            resolve(`[AUTO] ${text}`);
        });
    });
}

/** Post-process translation to fix common issues */
function postProcessTranslation(translated, original) {
    let result = translated;

    // Preserve {{variable}} interpolation placeholders
    const placeholders = original.match(/\{\{[^}]+\}\}/g) || [];
    const translatedPlaceholders = result.match(/\{\{[^}]+\}\}/g) || [];
    if (placeholders.length > 0 && translatedPlaceholders.length === 0) {
        // Google Translate may have mangled placeholders, try to restore them
        placeholders.forEach(ph => {
            if (!result.includes(ph)) {
                // Try to find mangled version
                const key = ph.replace(/[{}]/g, '').trim();
                const mangledPattern = new RegExp(`\\{\\{?\\s*${key}\\s*\\}?\\}`, 'i');
                if (mangledPattern.test(result)) {
                    result = result.replace(mangledPattern, ph);
                }
            }
        });
    }

    // Preserve leading/trailing whitespace pattern from original
    if (original.endsWith('...') && !result.endsWith('...')) {
        result = result.replace(/\.{1,3}$/, '') + '...';
    }
    if (original.endsWith('!') && !result.endsWith('!')) {
        result += '!';
    }

    // Capitalize first letter if original was capitalized
    if (/^[A-Z]/.test(original) && /^[a-z]/.test(result)) {
        result = result.charAt(0).toUpperCase() + result.slice(1);
    }

    return result;
}

/** Translate multiple keys in batch with rate limiting */
async function translateBatch(entries, targetLang, label = '') {
    const results = {};
    const total = Object.keys(entries).length;
    let done = 0;
    let errors = 0;

    for (const [key, enValue] of Object.entries(entries)) {
        try {
            const translated = await translateText(String(enValue), targetLang);
            results[key] = translated;
            done++;
            if (done % 25 === 0 || done === total) {
                process.stdout.write(`\r    ${label} ${targetLang}: ${done}/${total} translated`);
            }
            await sleep(TRANSLATE_DELAY_MS);
        } catch (e) {
            results[key] = `[AUTO] ${enValue}`;
            errors++;
            done++;
        }
    }

    if (total > 0) {
        const status = errors > 0 ? `⚠️  ${errors} errors` : '✅';
        console.log(`\r    ${status} ${targetLang}: ${done}/${total} completed${' '.repeat(20)}`);
    }
    return results;
}

// ═══════════════════════════════════════════════
// PHASE 1: SCAN FOR HARDCODED STRINGS
// ═══════════════════════════════════════════════

function scanHardcodedStrings() {
    console.log('\n🔍 PHASE 1: Scanning source files for hardcoded strings...');
    console.log('─'.repeat(60));

    const files = getFiles(SRC_DIR, SCAN_EXTENSIONS, SCAN_IGNORE_DIRS);
    const findings = [];

    for (const file of files) {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        const relativePath = path.relative(ROOT, file).replace(/\\/g, '/');
        const fileFindings = [];

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const lineNum = i + 1;

            // Skip comments, imports, and type declarations
            if (/^\s*(\/\/|\/\*|\*|import |export type|export interface|type |interface )/.test(line)) continue;
            // Skip lines that already use t() function
            if (/\bt\s*\(/.test(line) && !/(addToast|setError|console)\s*\(/.test(line)) continue;
            // Skip className and style lines
            if (/^\s*className[=:]/.test(line) || /^\s*style[=:]/.test(line)) continue;

            const foundStrings = [];

            // Pattern 1: JSX text between tags >Text Content<
            const jsxTextPattern = />\s*([A-Z][a-zA-Z\s''',!?.&:;/()-]{2,})\s*</g;
            let match;
            while ((match = jsxTextPattern.exec(line)) !== null) {
                const str = match[1].trim();
                if (shouldTranslate(str)) foundStrings.push(str);
            }

            // Pattern 2: Attribute strings (placeholder, title, aria-label, alt)
            const attrPattern = /(?:placeholder|title|aria-label|alt|label)=["']([^"']*[a-zA-Z]{3,}[^"']*)["']/g;
            while ((match = attrPattern.exec(line)) !== null) {
                const str = match[1].trim();
                // Skip if it's a t() call inside the attribute
                if (str.includes("t('") || str.includes('t("') || str.includes('t(`')) continue;
                if (shouldTranslate(str)) foundStrings.push(str);
            }

            // Pattern 3: addToast / setError with hardcoded strings
            const msgPattern = /(?:addToast|setError)\(\s*['"`]([^'"`]+)['"`]/g;
            while ((match = msgPattern.exec(line)) !== null) {
                const str = match[1].trim();
                if (shouldTranslate(str)) foundStrings.push(str);
            }

            // Pattern 4: Standalone text in JSX (no tag, just text on a line between JSX)
            const standaloneTextPattern = /^\s+([A-Z][a-zA-Z\s''',!?.&:;()-]{4,})\s*$/;
            const standaloneMatch = standaloneTextPattern.exec(line);
            if (standaloneMatch) {
                const str = standaloneMatch[1].trim();
                // Verify it's not an expression or variable
                if (shouldTranslate(str) && !/^(return|export|import|const|let|var|function|if|else|switch|case|break|default|new|this)/.test(str)) {
                    foundStrings.push(str);
                }
            }

            // Deduplicate
            for (const str of [...new Set(foundStrings)]) {
                fileFindings.push({
                    file: relativePath,
                    line: lineNum,
                    string: str,
                    suggestedKey: stringToKey(str),
                    namespace: getNamespace(file),
                });
            }
        }

        if (fileFindings.length > 0) {
            findings.push(...fileFindings);
        }
    }

    // Display results grouped by file
    const byFile = {};
    for (const f of findings) {
        if (!byFile[f.file]) byFile[f.file] = [];
        byFile[f.file].push(f);
    }

    const fileCount = Object.keys(byFile).length;
    console.log(`\n  Found ${findings.length} potential hardcoded strings in ${fileCount} files:\n`);

    for (const [file, items] of Object.entries(byFile)) {
        console.log(`  📄 ${file} (${items.length})`);
        for (const item of items.slice(0, VERBOSE ? 100 : 5)) {
            const key = `${item.namespace}.${item.suggestedKey}`;
            console.log(`     L${item.line}: "${item.string.substring(0, 50)}${item.string.length > 50 ? '...' : ''}" → ${key}`);
        }
        if (!VERBOSE && items.length > 5) {
            console.log(`     ... and ${items.length - 5} more (use --verbose to see all)`);
        }
    }

    return findings;
}

// ═══════════════════════════════════════════════
// PHASE 2: COMPARE & SYNC KEYS ACROSS LANGUAGES
// ═══════════════════════════════════════════════

function compareKeys() {
    console.log('\n\n📊 PHASE 2: Comparing translation keys across languages...');
    console.log('─'.repeat(60));

    const report = {};   // { namespace: { lang: { missing: [], extra: [] } } }
    const missingMap = {}; // { namespace: { flatKey: enValue } } — keys missing from at least one lang
    let totalMissing = 0;
    let totalExtra = 0;

    for (const ns of NAMESPACES) {
        const enData = loadJSON(SOURCE_LANG, ns);
        if (!enData) {
            console.log(`  ⚠️  ${ns}.json: English file not found, skipping`);
            continue;
        }

        const enFlat = flattenJSON(enData);
        const enKeys = new Set(Object.keys(enFlat));
        report[ns] = {};
        missingMap[ns] = {};

        console.log(`\n  📦 ${ns}.json (EN: ${enKeys.size} keys)`);

        for (const lang of TARGET_LANGS) {
            const langData = loadJSON(lang, ns);
            if (!langData) {
                console.log(`    ❌ ${lang}: file not found`);
                report[ns][lang] = { missing: [...enKeys], extra: [] };
                for (const key of enKeys) {
                    missingMap[ns][`${lang}::${key}`] = { lang, key, enValue: enFlat[key] };
                }
                totalMissing += enKeys.size;
                continue;
            }

            const langFlat = flattenJSON(langData);
            const langKeys = new Set(Object.keys(langFlat));

            const missing = [];
            const extra = [];

            // Keys in EN but missing from this language
            for (const key of enKeys) {
                if (!langKeys.has(key)) {
                    missing.push(key);
                    missingMap[ns][`${lang}::${key}`] = { lang, key, enValue: enFlat[key] };
                }
            }

            // Keys in this language but not in EN (orphans)
            for (const key of langKeys) {
                if (!enKeys.has(key)) {
                    extra.push(key);
                }
            }

            report[ns][lang] = { missing, extra };
            totalMissing += missing.length;
            totalExtra += extra.length;

            const status = missing.length === 0 ? '✅' : '⚠️ ';
            const extraInfo = extra.length > 0 ? ` (+${extra.length} extra)` : '';
            console.log(`    ${status} ${lang}: ${langKeys.size} keys, ${missing.length} missing${extraInfo}`);

            if (VERBOSE && missing.length > 0) {
                for (const key of missing.slice(0, 10)) {
                    console.log(`       - ${key}`);
                }
                if (missing.length > 10) console.log(`       ... and ${missing.length - 10} more`);
            }
        }
    }

    console.log(`\n  📈 Summary: ${totalMissing} missing keys, ${totalExtra} extra keys across all languages`);

    return { report, missingMap };
}

// ═══════════════════════════════════════════════
// PHASE 3: AUTO-TRANSLATE MISSING KEYS
// ═══════════════════════════════════════════════

async function autoTranslate(missingMap) {
    console.log('\n\n🔄 PHASE 3: Auto-translating missing keys...');
    console.log('─'.repeat(60));

    const translations = {}; // { namespace: { lang: { key: translatedValue } } }
    let totalToTranslate = 0;

    // Organize by namespace and language
    for (const [ns, entries] of Object.entries(missingMap)) {
        const byLang = {};
        for (const [composite, data] of Object.entries(entries)) {
            const { lang, key, enValue } = data;
            if (!byLang[lang]) byLang[lang] = {};
            byLang[lang][key] = enValue;
            totalToTranslate++;
        }

        if (Object.keys(byLang).length === 0) continue;
        translations[ns] = {};

        console.log(`\n  📦 ${ns}.json:`);

        for (const [lang, keysToTranslate] of Object.entries(byLang)) {
            const count = Object.keys(keysToTranslate).length;
            if (count === 0) continue;

            console.log(`    📝 ${lang}: ${count} keys to translate...`);
            translations[ns][lang] = await translateBatch(keysToTranslate, lang, `  `);
        }
    }

    if (totalToTranslate === 0) {
        console.log('  ✅ All languages are fully synchronized! Nothing to translate.');
    } else {
        console.log(`\n  ✅ Translated ${totalToTranslate} keys total.`);
    }

    return translations;
}

// ═══════════════════════════════════════════════
// PHASE 4: WRITE TRANSLATIONS TO FILES
// ═══════════════════════════════════════════════

function writeTranslations(translations) {
    console.log('\n\n💾 PHASE 4: Writing translations to files...');
    console.log('─'.repeat(60));

    if (DRY_RUN) {
        console.log('  🔒 DRY RUN mode — no files will be modified.\n');
    }

    let filesUpdated = 0;
    let keysAdded = 0;

    for (const [ns, langMap] of Object.entries(translations)) {
        for (const [lang, newKeys] of Object.entries(langMap)) {
            const addCount = Object.keys(newKeys).length;
            if (addCount === 0) continue;

            const existing = loadJSON(lang, ns) || {};
            const existingFlat = flattenJSON(existing);

            // Merge new translations
            for (const [key, value] of Object.entries(newKeys)) {
                existingFlat[key] = value;
            }

            // Unflatten back to nested structure
            const merged = unflattenJSON(existingFlat);

            if (!DRY_RUN) {
                saveJSON(lang, ns, merged);
                console.log(`  ✅ ${lang}/${ns}.json (+${addCount} keys)`);
            } else {
                console.log(`  🔒 ${lang}/${ns}.json would add ${addCount} keys`);
            }

            filesUpdated++;
            keysAdded += addCount;
        }
    }

    if (filesUpdated === 0) {
        console.log('  ✅ All files are up to date!');
    } else {
        console.log(`\n  📊 ${filesUpdated} files ${DRY_RUN ? 'would be' : ''} updated, ${keysAdded} keys ${DRY_RUN ? 'would be' : ''} added.`);
    }

    return { filesUpdated, keysAdded };
}

// ═══════════════════════════════════════════════
// PHASE 5: GENERATE KEYS FROM HARDCODED STRINGS
// ═══════════════════════════════════════════════

async function generateKeysFromScan(findings) {
    console.log('\n\n🔧 PHASE 5: Generating translation keys from hardcoded strings...');
    console.log('─'.repeat(60));

    if (findings.length === 0) {
        console.log('  ✅ No new hardcoded strings to generate keys for.');
        return;
    }

    // Deduplicate by string value
    const uniqueStrings = new Map();
    for (const f of findings) {
        const existing = uniqueStrings.get(f.string);
        if (!existing) {
            uniqueStrings.set(f.string, f);
        }
    }

    console.log(`  Found ${uniqueStrings.size} unique strings to generate keys for.\n`);

    // Check which keys already exist in EN
    const newEntries = {}; // { namespace: { key: enValue } }
    let skippedExisting = 0;

    for (const [str, finding] of uniqueStrings) {
        const ns = finding.namespace;
        const key = finding.suggestedKey;
        const enData = loadJSON(SOURCE_LANG, ns);
        const enFlat = enData ? flattenJSON(enData) : {};

        // Skip if key already exists
        if (enFlat[key]) {
            skippedExisting++;
            continue;
        }

        if (!newEntries[ns]) newEntries[ns] = {};
        newEntries[ns][key] = str;
    }

    if (skippedExisting > 0) {
        console.log(`  ⏭️  Skipped ${skippedExisting} strings (keys already exist in EN)`);
    }

    const totalNew = Object.values(newEntries).reduce((sum, obj) => sum + Object.keys(obj).length, 0);
    if (totalNew === 0) {
        console.log('  ✅ All detected hardcoded strings already have translation keys.');
        return;
    }

    console.log(`  📝 Generating ${totalNew} new translation keys...\n`);

    // Add to EN first
    for (const [ns, keys] of Object.entries(newEntries)) {
        const enData = loadJSON(SOURCE_LANG, ns) || {};
        for (const [key, value] of Object.entries(keys)) {
            enData[key] = value;
        }
        if (!DRY_RUN) {
            saveJSON(SOURCE_LANG, ns, enData);
            console.log(`  ✅ en/${ns}.json (+${Object.keys(keys).length} keys)`);
        } else {
            console.log(`  🔒 en/${ns}.json would add ${Object.keys(keys).length} keys`);
        }
    }

    // Translate to all target languages
    for (const lang of TARGET_LANGS) {
        console.log(`\n  🌐 Translating to ${lang}...`);
        for (const [ns, keys] of Object.entries(newEntries)) {
            const langData = loadJSON(lang, ns) || {};
            const translated = await translateBatch(keys, lang, `    `);

            for (const [key, value] of Object.entries(translated)) {
                langData[key] = value;
            }

            if (!DRY_RUN) {
                saveJSON(lang, ns, langData);
            }
        }
    }

    // Output migration hints
    console.log('\n\n  📋 MIGRATION HINTS (find-and-replace in your code):');
    console.log('  ' + '─'.repeat(56));
    let hintCount = 0;
    for (const [ns, keys] of Object.entries(newEntries)) {
        for (const [key, value] of Object.entries(keys)) {
            if (hintCount >= 20) {
                console.log(`  ... and ${totalNew - 20} more`);
                break;
            }
            const tCall = ns === 'common' ? `t('${key}')` : `t('${ns}:${key}')`;
            console.log(`  "${value.substring(0, 35)}${value.length > 35 ? '...' : ''}"  →  ${tCall}`);
            hintCount++;
        }
        if (hintCount >= 20) break;
    }
}

// ═══════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════

async function main() {
    console.log('╔══════════════════════════════════════════════════════════════╗');
    console.log('║         🌍 DoughLab Pro — i18n Audit & Translator          ║');
    console.log('╠══════════════════════════════════════════════════════════════╣');
    console.log(`║  Command: ${COMMAND.padEnd(10)} ${DRY_RUN ? '(DRY RUN)' : '         '} ${VERBOSE ? '(VERBOSE)' : '         '}           ║`);
    console.log(`║  Languages: ${ALL_LANGS.join(', ').padEnd(47)}║`);
    console.log(`║  Namespaces: ${NAMESPACES.length} core files${' '.repeat(37)}║`);
    console.log('╚══════════════════════════════════════════════════════════════╝');

    const startTime = Date.now();
    let findings = [];

    try {
        if (COMMAND === 'scan' || COMMAND === 'full') {
            findings = scanHardcodedStrings();
        }

        if (COMMAND === 'sync' || COMMAND === 'full') {
            const { report, missingMap } = compareKeys();

            // Count total missing
            const totalMissing = Object.values(missingMap).reduce(
                (sum, ns) => sum + Object.keys(ns).length, 0
            );

            if (totalMissing > 0) {
                const translations = await autoTranslate(missingMap);
                writeTranslations(translations);
            } else {
                console.log('\n  ✅ All translation files are fully synchronized!');
            }
        }

        if (COMMAND === 'full' && findings.length > 0) {
            await generateKeysFromScan(findings);
        }

    } catch (error) {
        console.error('\n❌ Error:', error.message);
        if (VERBOSE) console.error(error.stack);
    }

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);

    console.log('\n');
    console.log('═'.repeat(62));
    console.log(`  ✅ Audit complete in ${elapsed}s ${DRY_RUN ? '(DRY RUN — no files changed)' : ''}`);
    console.log('═'.repeat(62));
    console.log('');

    if (COMMAND === 'help' || COMMAND === '--help') {
        showHelp();
    }
}

function showHelp() {
    console.log(`
Usage: node scripts/i18n-audit.cjs [command] [flags]

Commands:
  scan      Scan source files for hardcoded English strings
  sync      Sync missing keys across languages (auto-translate)
  full      Run both scan + sync + generate keys (default)

Flags:
  --dry-run    Report only, don't modify any files
  --verbose    Show detailed output

Examples:
  node scripts/i18n-audit.cjs scan         # Find hardcoded strings
  node scripts/i18n-audit.cjs sync         # Sync & translate missing keys
  node scripts/i18n-audit.cjs full         # Complete audit
  node scripts/i18n-audit.cjs full --dry-run  # Preview without changes
`);
}

// Run
main().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
