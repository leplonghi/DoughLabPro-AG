import { ALL_STYLES } from '../src/data/styles';
import { validateAllStyles } from '../src/utils/styleValidation';

async function run() {
    console.log('Running Style Validation & Autofix Check...');

    const results = validateAllStyles(ALL_STYLES);
    let errorCount = 0;
    let warningCount = 0;

    Object.entries(results).forEach(([id, result]) => {
        if (!result.isValid || result.warnings.length > 0) {
            console.log(`\nStyle: ${id}`);
            if (result.errors.length > 0) {
                console.error('  Errors:', result.errors);
                errorCount += result.errors.length;
            }
            if (result.warnings.length > 0) {
                console.warn('  Warnings:', result.warnings);
                warningCount += result.warnings.length;
            }
        }
    });

    console.log('\n-----------------------------------');
    console.log(`Validation Complete.`);
    console.log(`Errors: ${errorCount}`);
    console.log(`Warnings: ${warningCount}`);

    if (errorCount === 0) {
        console.log('All styles are valid!');
    } else {
        console.log('Please fix the errors above manually.');
    }
}

run().catch(console.error);
