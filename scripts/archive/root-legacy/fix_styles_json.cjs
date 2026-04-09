const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'public/locales/en/styles.json');

try {
    const content = fs.readFileSync(filePath, 'utf8');
    // JSON.parse will automatically take the last occurrence of a key
    const parsed = JSON.parse(content);
    const jsonString = JSON.stringify(parsed, null, 2);
    fs.writeFileSync(filePath, jsonString);
    console.log('Successfully de-duplicated keys in styles.json');
} catch (error) {
    console.error('Error processing JSON:', error);
}
