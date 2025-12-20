const fs = require('fs');

console.log('🔧 Fixing createdAt type error...\n');

const notifTemplatesFile = 'src/services/notificationTemplates.ts';
if (fs.existsSync(notifTemplatesFile)) {
    let content = fs.readFileSync(notifTemplatesFile, 'utf-8');

    // Replace new Date() with new Date().toISOString()
    content = content.replace(
        'createdAt: new Date(),',
        'createdAt: new Date().toISOString(),'
    );

    fs.writeFileSync(notifTemplatesFile, content, 'utf-8');
    console.log(`✅ Fixed: ${notifTemplatesFile}`);
}

console.log(`\n✨ Final fix applied!`);
