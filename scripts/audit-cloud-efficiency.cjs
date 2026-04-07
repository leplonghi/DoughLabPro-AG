
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('\x1b[36m%s\x1b[0m', '--- DoughLabPro Cloud Efficiency & Cost Audit ---');

const ROOT_DIR = process.cwd();
const SRC_DIR = path.join(ROOT_DIR, 'src');

const auditResults = {
    firestore: [],
    maps: [],
    gemini: [],
    orphans: []
};

// Utility to recursively find strings in files
function searchFiles(dir, includes, targetStrings) {
    let results = [];
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            results = results.concat(searchFiles(fullPath, includes, targetStrings));
        } else if (includes.some(ext => file.endsWith(ext))) {
            const content = fs.readFileSync(fullPath, 'utf8');
            const lines = content.split('\n');
            lines.forEach((line, index) => {
                targetStrings.forEach(target => {
                    if (line.includes(target)) {
                        results.push({ file: fullPath, line: index + 1, content: line.trim(), target });
                    }
                });
            });
        }
    });
    return results;
}

// 1. Audit Firestore Queries
function auditFirestore() {
    console.log('\nChecking Firestore Queries...');
    const matches = searchFiles(SRC_DIR, ['.ts', '.tsx'], ['collection(']);
    matches.forEach(m => {
        if (!m.content.includes('.limit(') && !m.content.includes('doc(')) {
            auditResults.firestore.push({
                file: m.file,
                issue: 'Potential uncapped query (missing .limit())',
                snippet: m.content
            });
        }
    });
}

// 2. Audit Potential Maps Usage
function auditMaps() {
    console.log('Checking Maps/Geolocation APIs...');
    const matches = searchFiles(SRC_DIR, ['.ts', '.tsx'], ['fetch(', 'nominatim', 'maps.googleapis.com']);
    matches.forEach(m => {
        if (m.content.includes('maps.googleapis.com')) {
            auditResults.maps.push({
                file: m.file,
                issue: 'Google Maps API call detected (Costly)',
                snippet: m.content
            });
        }
    });
}

// 3. Audit Gemini API usage
function auditGemini() {
    console.log('Checking Gemini AI Integration...');
    const matches = searchFiles(SRC_DIR, ['.ts', '.tsx'], ['GoogleGenerativeAI']);
    matches.forEach(m => {
        auditResults.gemini.push({
            file: m.file,
            issue: 'Gemini API direct usage (Ensure budget limits are set in GCP)',
            snippet: m.content
        });
    });
}

// 4. Identify "Orphaned" Root Scripts
function auditOrphans() {
    console.log('Checking for orphaned scripts/files in root...');
    const files = fs.readdirSync(ROOT_DIR);
    const scripts = files.filter(f => f.endsWith('.cjs') || f.endsWith('.py') || (f.endsWith('.js') && !f.includes('config')));

    scripts.forEach(script => {
        // Simple check: is it mentioned in package.json or README?
        const pkg = fs.readFileSync(path.join(ROOT_DIR, 'package.json'), 'utf8');
        const readme = fs.readFileSync(path.join(ROOT_DIR, 'README.md'), 'utf8');

        if (!pkg.includes(script) && !readme.includes(script)) {
            auditResults.orphans.push({
                file: script,
                issue: 'Potential orphaned script (not in package.json/README)'
            });
        }
    });
}

// --- Run Audit ---
auditFirestore();
auditMaps();
auditGemini();
auditOrphans();

// --- Report ---
console.log('\n\x1b[32m%s\x1b[0m', '--- Audit Report Summary ---');

if (auditResults.firestore.length > 0) {
    console.log('\x1b[33m%s\x1b[0m', `\n[Firestore] Found ${auditResults.firestore.length} queries without explicit limits:`);
    auditResults.firestore.slice(0, 5).forEach(r => console.log(` - ${path.relative(ROOT_DIR, r.file)}: ${r.snippet}`));
} else {
    console.log('✅ Firestore queries look efficient.');
}

if (auditResults.maps.length > 0) {
    console.log('\x1b[31m%s\x1b[0m', `\n[Maps] Found ${auditResults.maps.length} costly Google Maps calls:`);
    auditResults.maps.forEach(r => console.log(` - ${path.relative(ROOT_DIR, r.file)}`));
} else {
    console.log('✅ Using free geolocation alternatives (Nominatim/Open-Meteo).');
}

if (auditResults.orphans.length > 0) {
    console.log('\x1b[33m%s\x1b[0m', `\n[Orphans] Found ${auditResults.orphans.length} scripts that might be obsolete:`);
    auditResults.orphans.slice(0, 5).forEach(r => console.log(` - ${r.file}`));
}

console.log('\n\x1b[36m%s\x1b[0m', 'Recommendation: Create a BUDGET ALERT in GCP Console for R$ 50,00 immediately.');
console.log('\x1b[36m%s\x1b[0m', 'Run "npx firebase deploy --only firestore:rules" to ensure production limits are active.');
