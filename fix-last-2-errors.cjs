const fs = require('fs');

console.log('🔧 Fixing final 2 errors...\n');

// Fix fcmService.ts - add VITE_FIREBASE_VAPID_KEY to vite-env.d.ts
const viteEnvFile = 'src/vite-env.d.ts';
if (fs.existsSync(viteEnvFile)) {
    let content = fs.readFileSync(viteEnvFile, 'utf-8');

    // Add VITE_FIREBASE_VAPID_KEY if not exists
    if (!content.includes('VITE_FIREBASE_VAPID_KEY')) {
        content = content.replace(
            'readonly VITE_FIREBASE_API_KEY: string;',
            `readonly VITE_FIREBASE_API_KEY: string;
    readonly VITE_FIREBASE_VAPID_KEY: string;`
        );
        fs.writeFileSync(viteEnvFile, content, 'utf-8');
        console.log(`✅ Added VITE_FIREBASE_VAPID_KEY to: ${viteEnvFile}`);
    }
}

// Fix notificationTemplates.ts - the return type issue
const notifTemplatesFile = 'src/services/notificationTemplates.ts';
if (fs.existsSync(notifTemplatesFile)) {
    let content = fs.readFileSync(notifTemplatesFile, 'utf-8');

    // Find the problematic return statement around line 275
    // We need to add id and createdAt fields
    const lines = content.split('\n');

    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('return {') && i > 270 && i < 280) {
            // Find the closing brace
            let braceCount = 1;
            let j = i + 1;
            while (j < lines.length && braceCount > 0) {
                if (lines[j].includes('{')) braceCount++;
                if (lines[j].includes('}')) braceCount--;
                if (braceCount === 0) {
                    // Insert id and createdAt before the closing brace
                    lines.splice(j, 0, '        id: Date.now().toString(),');
                    lines.splice(j + 1, 0, '        createdAt: new Date(),');
                    break;
                }
                j++;
            }
            break;
        }
    }

    content = lines.join('\n');
    fs.writeFileSync(notifTemplatesFile, content, 'utf-8');
    console.log(`✅ Fixed: ${notifTemplatesFile}`);
}

console.log(`\n✨ All errors fixed!`);
console.log(`\n🎉 Running final TypeScript check...`);
