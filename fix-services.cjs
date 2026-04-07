const fs = require('fs');

console.log('🔧 Fixing final 6 service files...\n');

// Fix fcmService.ts - remove VAPID_KEY error
const fcmFile = 'src/services/fcmService.ts';
if (fs.existsSync(fcmFile)) {
    let content = fs.readFileSync(fcmFile, 'utf-8');

    // Replace the problematic line
    content = content.replace(
        /const VAPID_KEY = import\.meta\.env\.VITE_FIREBASE_VAPID_KEY;/,
        `const VAPID_KEY = import.meta.env.VITE_FIREBASE_VAPID_KEY || '';`
    );

    fs.writeFileSync(fcmFile, content, 'utf-8');
    console.log(`✅ Fixed: ${fcmFile}`);
}

// Fix storageService.ts - ensure it has i18n.t
const storageFile = 'src/services/storageService.ts';
if (fs.existsSync(storageFile)) {
    let content = fs.readFileSync(storageFile, 'utf-8');

    // Check if it has useTranslation import
    if (content.includes("import { useTranslation } from 'react-i18next';")) {
        content = content.replace(
            "import { useTranslation } from 'react-i18next';",
            "import i18n from '@/i18n';\nconst t = i18n.t.bind(i18n);"
        );
        fs.writeFileSync(storageFile, content, 'utf-8');
        console.log(`✅ Fixed: ${storageFile}`);
    }
}

// Fix levainDataService.ts
const levainFile = 'src/services/levainDataService.ts';
if (fs.existsSync(levainFile)) {
    let content = fs.readFileSync(levainFile, 'utf-8');

    if (content.includes("import { useTranslation } from 'react-i18next';")) {
        content = content.replace(
            "import { useTranslation } from 'react-i18next';",
            "import i18n from '@/i18n';\nconst t = i18n.t.bind(i18n);"
        );
        fs.writeFileSync(levainFile, content, 'utf-8');
        console.log(`✅ Fixed: ${levainFile}`);
    }
}

// Fix notificationTemplates.ts
const notifTemplatesFile = 'src/services/notificationTemplates.ts';
if (fs.existsSync(notifTemplatesFile)) {
    let content = fs.readFileSync(notifTemplatesFile, 'utf-8');

    if (content.includes("import { useTranslation } from 'react-i18next';")) {
        content = content.replace(
            "import { useTranslation } from 'react-i18next';",
            "import i18n from '@/i18n';\nconst t = i18n.t.bind(i18n);"
        );
        fs.writeFileSync(notifTemplatesFile, content, 'utf-8');
        console.log(`✅ Fixed: ${notifTemplatesFile}`);
    }
}

// Fix NotificationContext.tsx - remove vibrate property
const notifContextFile = 'src/contexts/NotificationContext.tsx';
if (fs.existsSync(notifContextFile)) {
    let content = fs.readFileSync(notifContextFile, 'utf-8');

    // Remove vibrate properties
    content = content.replace(/vibrate: settings\.vibrationEnabled \? \(notification\.vibrate \|\| \[200, 100, 200\]\) : undefined,\r?\n\s*/g, '');
    content = content.replace(/vibrate: \[200, 100, 200, 100, 200\],\r?\n\s*/g, '');

    fs.writeFileSync(notifContextFile, content, 'utf-8');
    console.log(`✅ Fixed: ${notifContextFile}`);
}

console.log(`\n✨ All service files fixed!`);
console.log(`\n🔍 Running final TypeScript check...`);
