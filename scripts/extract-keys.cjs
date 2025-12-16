const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');
const outputFile = path.join(__dirname, '../extracted_keys_2.txt');

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            if (file.endsWith('.ts') || file.endsWith('.tsx')) {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });

    return arrayOfFiles;
}

const files = getAllFiles(srcDir);
const keys = new Set();

// Regex to find t('key') or t("key")
// Matches t('key') or t("key") or t(`key`)
// Also i18nKey="key" or i18nKey='key'
// Also t('ns:key')
const tRegex = /\bt\(\s*(['"`])(.*?)\1/g;
const i18nKeyRegex = /i18nKey=(['"`])(.*?)\1/g;

files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');

    let match;
    while ((match = tRegex.exec(content)) !== null) {
        keys.add(match[2]);
    }

    while ((match = i18nKeyRegex.exec(content)) !== null) {
        keys.add(match[2]);
    }
});

const keyList = Array.from(keys).join('\n');
fs.writeFileSync(outputFile, keyList, 'utf8');
console.log(`Extracted ${keys.size} keys to ${outputFile}`);
