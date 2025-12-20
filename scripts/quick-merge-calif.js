import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LOCALES = path.join(__dirname, '..', 'public', 'locales', 'en');
const STYLES_JSON = path.join(LOCALES, 'styles.json');
const CALIF_JSON = path.join(LOCALES, 'california_style_COMPLETE_i18n.json');

console.log('📥 Loading files...');
const styles = JSON.parse(fs.readFileSync(STYLES_JSON, 'utf8'));
const calif = JSON.parse(fs.readFileSync(CALIF_JSON, 'utf8'));

console.log(`Before: ${Object.keys(styles).length} keys`);

console.log('🔀 Merging California...');
Object.assign(styles, calif);

console.log(`After: ${Object.keys(styles).length} keys`);

console.log('💾 Saving...');
fs.writeFileSync(STYLES_JSON, JSON.stringify(styles, null, 2), 'utf8');

console.log('✅ Done!');
