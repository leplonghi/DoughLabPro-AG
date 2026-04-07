const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔒 Creating backup before migration...\n');

const timestamp = new Date().toISOString().replace(/[:.]/g, '-').substring(0, 19);
const backupDir = `./backups/pre-i18n-migration-${timestamp}`;

// Create backup directory
if (!fs.existsSync('./backups')) {
    fs.mkdirSync('./backups');
}
fs.mkdirSync(backupDir);

// Load report to know which files to backup
const report = JSON.parse(fs.readFileSync('./hardcoded-strings-report.json', 'utf-8'));

console.log(`📦 Backing up ${report.length} files to: ${backupDir}\n`);

let backedUp = 0;

report.forEach((fileReport, idx) => {
    const filePath = fileReport.file;

    if (fs.existsSync(filePath)) {
        const relativePath = filePath;
        const backupPath = path.join(backupDir, relativePath);

        // Create directory structure
        const backupDirPath = path.dirname(backupPath);
        if (!fs.existsSync(backupDirPath)) {
            fs.mkdirSync(backupDirPath, { recursive: true });
        }

        // Copy file
        fs.copyFileSync(filePath, backupPath);
        backedUp++;

        if ((idx + 1) % 10 === 0) {
            console.log(`   Progress: ${idx + 1}/${report.length} files backed up...`);
        }
    }
});

console.log(`\n✅ Backup complete: ${backedUp} files backed up`);
console.log(`📁 Backup location: ${backupDir}`);

// Create restore script
const restoreScript = `
const fs = require('fs');
const path = require('path');

console.log('🔄 Restoring files from backup...');

const backupDir = '${backupDir}';
const files = ${JSON.stringify(report.map(r => r.file))};

let restored = 0;

files.forEach(file => {
  const backupPath = path.join(backupDir, file);
  if (fs.existsSync(backupPath)) {
    fs.copyFileSync(backupPath, file);
    restored++;
  }
});

console.log(\`✅ Restored \${restored} files\`);
`;

fs.writeFileSync('./restore-backup.cjs', restoreScript);
console.log(`\n📝 Restore script created: restore-backup.cjs`);
console.log(`   To restore: node restore-backup.cjs`);

console.log(`\n✅ Ready to proceed with migration!`);
