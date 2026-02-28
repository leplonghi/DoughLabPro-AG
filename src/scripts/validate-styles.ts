import { STYLES_DATA, STYLES_MAP } from '../data/styles/registry';
import { useTranslation } from '@/i18n';

console.log(`\n🔍 STARTING STYLE REGISTRY VALIDATION...\n`);

// 1. Check Total Count
console.log(`✅ Total Styles Found: ${STYLES_DATA.length}`);

// 2. Check Map Integrity
if (STYLES_MAP.size !== STYLES_DATA.length) {
    console.error(`❌ CRITICAL: Duplicate IDs detected! Map Size: ${STYLES_MAP.size}, Array Length: ${STYLES_DATA.length}`);
    process.exit(1);
} else {
    console.log(`✅ ID Uniqueness: PASSED`);
}

// 3. Validation Loop
let errors = 0;

STYLES_DATA.forEach(style => {
    // Check ID format
    if (!/^[a-z0-9_]+$/.test(style.id)) {
        console.error(`⚠️  WARNING: Style ID "${style.id}" contains invalid characters. Use snake_case.`);
        errors++;
    }

    // Check Hydration
    if (!style.technicalProfile || !style.technicalProfile.hydration || style.technicalProfile.hydration.length !== 2) {
        console.error(`❌ ERROR: Style "${style.name}" missing hydration ranges.`);
        errors++;
    }

    // Check Categories map
    if (!style.family) {
        console.error(`⚠️  WARNING: Style "${style.name}" has no Family mapping.`);
    }

    // Check Description
    if (!style.description) {
        console.error(`⚠️  WARNING: Style "${style.name}" is missing description.`);
    }
});

if (errors === 0) {
    console.log(`\n🎉 SUCCESS: All ${STYLES_DATA.length} styles validated perfectly.`);
} else {
    console.log(`\n⚠️  VALIDATION COMPLETED WITH ${errors} ISSUES.`);
}
