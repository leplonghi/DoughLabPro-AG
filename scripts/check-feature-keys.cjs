const fs = require("fs");
const path = require("path");

const SRC_DIR = path.join(process.cwd(), "src");
const PERMISSIONS_FILE = path.join(SRC_DIR, "permissions.ts");

// 1. Read union type FeatureKey
const permissionsContent = fs.readFileSync(PERMISSIONS_FILE, "utf8");

const featureKeyUnionRegex =
    /export type FeatureKey\s*=\s*([^;]+);/m;

const unionMatch = permissionsContent.match(featureKeyUnionRegex);
if (!unionMatch) {
    console.error("ERROR: FeatureKey union type not found in permissions.ts");
    process.exit(1);
}

const unionBlock = unionMatch[1];

const definedFeatureKeys = [...unionBlock.matchAll(/'([^']+)'/g)].map(m => m[1]);

// 2. Read FEATURE_PLAN_MAP
const mapRegex = /FEATURE_PLAN_MAP[^=]*=\s*\{([\s\S]*?)\};/m;
const mapMatch = permissionsContent.match(mapRegex);

if (!mapMatch) {
    console.error("ERROR: FEATURE_PLAN_MAP not found in permissions.ts");
    process.exit(1);
}

const mapBlock = mapMatch[1];

const mapFeatureKeys = [...mapBlock.matchAll(/'([^']+)':/g)].map(m => m[1]);

// 3. Scan src/ for featureKey usage
let usedFeatureKeys = new Set();

function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const full = path.join(dir, file);
        const stat = fs.statSync(full);

        if (stat.isDirectory()) {
            walk(full);
        } else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
            const content = fs.readFileSync(full, "utf8");

            // capture featureKey="..."
            const matches = [
                ...content.matchAll(/featureKey=['"`]([^'"`]+)['"`]/g)
            ];

            matches.forEach((m) => usedFeatureKeys.add(m[1]));
        }
    }
}

walk(SRC_DIR);

// 4. Compare sets

const missingInMap = [...usedFeatureKeys].filter(
    (key) => !mapFeatureKeys.includes(key)
);

const missingInUnion = [...usedFeatureKeys].filter(
    (key) => !definedFeatureKeys.includes(key)
);

const unusedFeatureKeys = definedFeatureKeys.filter(
    (key) => !usedFeatureKeys.has(key)
);

// 5. Report

console.log("─────────────────────────────────────────────");
console.log("DoughLabPro FeatureKey Consistency Report");
console.log("─────────────────────────────────────────────");

console.log("\nDEFINED FeatureKeys:");
console.log(definedFeatureKeys.map(k => "  - " + k).join("\n"));

console.log("\nUSED FeatureKeys:");
console.log([...usedFeatureKeys].map(k => "  - " + k).join("\n"));

console.log("\n─────────────────────────────────────────────");
console.log("1. USED but MISSING in FEATURE_PLAN_MAP:");
if (missingInMap.length === 0) console.log("  ✔ None");
else console.log(missingInMap.map(k => "  ✖ " + k).join("\n"));

console.log("\n─────────────────────────────────────────────");
console.log("2. USED but NOT DEFINED in FeatureKey union:");
if (missingInUnion.length === 0) console.log("  ✔ None");
else console.log(missingInUnion.map(k => "  ✖ " + k).join("\n"));

console.log("\n─────────────────────────────────────────────");
console.log("3. DEFINED but NOT USED anywhere:");
if (unusedFeatureKeys.length === 0) console.log("  ✔ All used");
else console.log(unusedFeatureKeys.map(k => "  • " + k).join("\n"));

console.log("\nSCAN COMPLETE\n");
