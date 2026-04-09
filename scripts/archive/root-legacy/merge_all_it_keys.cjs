const fs = require('fs');
const path = require('path');

const targetPath = 'public/locales/en/styles.json';
const tempFiles = [
    'temp_tonda.json',
    'temp_focaccia.json',
    'temp_sfincione.json',
    'temp_toscano.json',
    'temp_ciabatta.json'
];

try {
    const targetData = JSON.parse(fs.readFileSync(targetPath, 'utf8'));

    tempFiles.forEach(file => {
        if (fs.existsSync(file)) {
            const tempData = JSON.parse(fs.readFileSync(file, 'utf8'));
            Object.assign(targetData, tempData);
            console.log(`Merged ${file}`);
        } else {
            console.warn(`File ${file} not found`);
        }
    });

    fs.writeFileSync(targetPath, JSON.stringify(targetData, null, 2));
    console.log('Successfully merged all keys into ' + targetPath);
} catch (error) {
    console.error('Error merging keys:', error);
}
