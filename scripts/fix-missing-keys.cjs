const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../public/locales/en');
const keysFile = path.join(__dirname, '../extracted_keys_2.txt');

// Helper to get nested value
function getNestedValue(obj, keyPath) {
    const parts = keyPath.split('.');
    let current = obj;
    for (const part of parts) {
        if (current === undefined || current === null) return undefined;
        current = current[part];
    }
    return current;
}

// Helper to set nested value
function setNestedValue(obj, keyPath, value) {
    const parts = keyPath.split('.');
    let current = obj;
    for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        if (!current[part]) current[part] = {};
        current = current[part];
    }
    current[parts[parts.length - 1]] = value;
}

// Helper to generate text from key
function generateText(key) {
    // Remove last segment if it is a number (e.g. _2, _11)
    let cleanKey = key.replace(/_\d+$/, '');

    // Replace underscores with spaces
    let text = cleanKey.replace(/_/g, ' ');

    // Capitalize first letter
    text = text.charAt(0).toUpperCase() + text.slice(1);

    return text;
}

// Load namespaces
const namespaces = {};
const files = fs.readdirSync(localesDir);
for (const file of files) {
    if (file.endsWith('.json')) {
        const ns = path.basename(file, '.json');
        namespaces[ns] = JSON.parse(fs.readFileSync(path.join(localesDir, file), 'utf8').replace(/^\uFEFF/, ''));
    }
}

const uniqueKeys = [...new Set(fs.readFileSync(keysFile, 'utf8').split('\n').map(k => k.trim()).filter(k => k))];
const missingMap = {}; // { namespace: { keyPath: value } }

for (const key of uniqueKeys) {
    // Check if dynamic
    if (key.includes('${') || key.endsWith('.')) continue;

    let found = false;
    let targetNs = 'common';
    let keyPath = key;

    // Detection logic same as validation
    if (key.includes(':')) {
        const [ns, realKey] = key.split(':');
        if (namespaces[ns]) {
            targetNs = ns;
            keyPath = realKey;
            if (getNestedValue(namespaces[ns], realKey) !== undefined) found = true;
        }
    } else if (key.includes('.')) {
        const parts = key.split('.');
        if (namespaces[parts[0]]) {
            targetNs = parts[0];
            keyPath = parts.slice(1).join('.');
            if (getNestedValue(namespaces[targetNs], keyPath) !== undefined) found = true;
        }
    }

    if (!found) {
        // Double check global search
        for (const ns in namespaces) {
            if (getNestedValue(namespaces[ns], key) !== undefined) {
                found = true;
                break;
            }
        }
    }

    if (!found) {
        // Map to correct file if possible
        if (key.startsWith('styles.')) {
            targetNs = 'styles';
            keyPath = key.replace('styles.', '');
        } else if (key.startsWith('form.')) {
            targetNs = 'calculator';
            keyPath = key; // Keep form.x structure in calculator.json
        } else if (key.startsWith('notification.')) {
            targetNs = 'common';
            keyPath = key;
        } else if (key.startsWith('batch_detail.')) {
            targetNs = 'dashboard';
            keyPath = key;
        } else if (key.startsWith('learn.')) {
            targetNs = 'common';
            keyPath = key;
        }

        if (!missingMap[targetNs]) missingMap[targetNs] = {};
        missingMap[targetNs][keyPath] = generateText(keyPath.split('.').pop()); // Generate text from last part of key
    }
}

// Apply changes
for (const ns in missingMap) {
    const changes = missingMap[ns];
    if (Object.keys(changes).length > 0) {
        console.log(`Adding ${Object.keys(changes).length} keys to ${ns}.json`);
        const data = namespaces[ns];
        for (const k in changes) {
            setNestedValue(data, k, changes[k]);
        }
        fs.writeFileSync(path.join(localesDir, `${ns}.json`), JSON.stringify(data, null, 4), 'utf8');
    }
}
