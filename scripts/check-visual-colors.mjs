import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd(), 'src');
const strict = process.argv.includes('--strict');

const ignorePatterns = [
  /src[\\/]+components[\\/]+ui[\\/]+(AppSurface|StatusBadge|InlineNotice|MetricCard|InfoCard|SectionCard|EmptyStateCard|TechnicalBadge)\.tsx$/,
];

const bannedPattern =
  /\b(?:bg|text|border)-(?:slate|gray|stone|zinc|blue|indigo|cyan|sky|violet|purple|pink|rose)-\d+(?:\/\d+)?\b/g;

const offenders = [];

const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }
    if (!/\.(tsx|ts)$/.test(entry.name)) continue;
    if (ignorePatterns.some((pattern) => pattern.test(fullPath))) continue;

    const content = fs.readFileSync(fullPath, 'utf8');
    const matches = [...content.matchAll(bannedPattern)].map((match) => match[0]);
    if (matches.length) {
      offenders.push({
        file: fullPath,
        matches: [...new Set(matches)].slice(0, 12),
        count: matches.length,
      });
    }
  }
};

walk(root);

if (!offenders.length) {
  console.log('Visual color check passed: no direct legacy color utilities found.');
  process.exit(0);
}

console.log('Visual color drift report:');
for (const offender of offenders.slice(0, 25)) {
  console.log(`- ${path.relative(process.cwd(), offender.file)} (${offender.count})`);
  console.log(`  ${offender.matches.join(', ')}`);
}

if (strict) {
  process.exit(1);
}

console.log('\nNon-strict mode: report only. Run with --strict to fail on offenders.');
