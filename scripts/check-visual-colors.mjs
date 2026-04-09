import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const root = path.resolve(process.cwd(), 'src');
const strict = process.argv.includes('--strict');
const changedOnly = process.argv.includes('--changed-only');

const ignorePatterns = [
  /src[\\/]+components[\\/]+ui[\\/]+(AppSurface|StatusBadge|InlineNotice|MetricCard|InfoCard|SectionCard|EmptyStateCard|TechnicalBadge)\.tsx$/,
  /src[\\/]+components[\\/]+ui[\\/]+(AppPageLayout|AppSectionBlock)\.tsx$/,
  /src[\\/]+community[\\/]+/,
  /src[\\/]+components[\\/]+AdminTools\.tsx$/,
  /src[\\/]+components[\\/]+AffiliateGrid\.tsx$/,
  /src[\\/]+components[\\/]+auth[\\/]+RequireFeature\.tsx$/,
  /src[\\/]+components[\\/]+AffiliateIngredientLink\.tsx$/,
  /src[\\/]+components[\\/]+AffiliateDisclaimer\.tsx$/,
  /src[\\/]+components[\\/]+batch[\\/]+BatchTimerActions\.tsx$/,
  /src[\\/]+components[\\/]+calculator[\\/]+AccordionSection\.tsx$/,
  /src[\\/]+components[\\/]+calculator[\\/]+AffiliateIngredientRow\.tsx$/,
  /src[\\/]+components[\\/]+calculator[\\/]+DifficultyLevelSelector\.tsx$/,
  /src[\\/]+components[\\/]+calculator[\\/]+FlourSelector\.tsx$/,
  /src[\\/]+components[\\/]+calculator[\\/]+HydrationInput\.tsx$/,
  /src[\\/]+components[\\/]+calculator[\\/]+HydrationVisualizer\.tsx$/,
  /src[\\/]+components[\\/]+calculator[\\/]+ProductionTimeline\.tsx$/,
  /src[\\/]+components[\\/]+calculator[\\/]+ReverseSchedule\.tsx$/,
  /src[\\/]+components[\\/]+calculator[\\/]+StyleContextBar\.tsx$/,
  /src[\\/]+components[\\/]+calculator[\\/]+TargetTimeInput\.tsx$/,
  /src[\\/]+components[\\/]+calculator[\\/]+TechnicalMethodPanel\.tsx$/,
  /src[\\/]+components[\\/]+calculator[\\/]+UiModeToggle\.tsx$/,
  /src[\\/]+components[\\/]+calculator[\\/]+UnitSelector\.tsx$/,
  /src[\\/]+components[\\/]+calculator[\\/]+wizard[\\/]+WizardMode\.tsx$/,
  /src[\\/]+components[\\/]+calculator[\\/]+ingredients[\\/]+AssemblySection\.tsx$/,
  /src[\\/]+components[\\/]+calculator[\\/]+ingredients[\\/]+DidacticTooltips\.tsx$/,
  /src[\\/]+components[\\/]+calculator[\\/]+ingredients[\\/]+IngredientCreatorModal\.tsx$/,
  /src[\\/]+components[\\/]+calculator[\\/]+sections[\\/]+EnvironmentSection\.tsx$/,
  /src[\\/]+components[\\/]+calculator[\\/]+sections[\\/]+FermentationSection\.tsx$/,
  /src[\\/]+components[\\/]+calculator[\\/]+sections[\\/]+IngredientsSection\.tsx$/,
  /src[\\/]+components[\\/]+calculator[\\/]+sections[\\/]+QuantitySection\.tsx$/,
  /src[\\/]+components[\\/]+calculator[\\/]+sections[\\/]+StyleSection\.tsx$/,
  /src[\\/]+components[\\/]+CalculatorForm\.tsx$/,
  /src[\\/]+components[\\/]+community[\\/]+CommunityCreatePost\.tsx$/,
];

const bannedPattern =
  /\b(?:bg|text|border)-(?:slate|gray|stone|zinc|blue|indigo|cyan|sky|violet|purple|pink|rose)-\d+(?:\/\d+)?\b/g;

const layoutFilesPattern =
  /src[\\/]+(?:(?:pages)|(?:community[\\/]+pages))[\\/].+Page\.tsx$|src[\\/]+components[\\/]+PlansPage\.tsx$/;

const allowedLayoutImports = [
  'AppPageLayout',
  'LibraryPageLayout',
  'AppShellHeader',
  'SectionCard',
  'AppSectionBlock',
  'PageHero',
  'TechnicalPageLayout',
  'IngredientPageLayout',
  'LegalPageLayout',
  'LevainLayout',
];

const offenders = [];
const layoutOffenders = [];

const changedFiles = (() => {
  if (!changedOnly) return null;

  try {
    const tracked = execSync('git diff --name-only --diff-filter=ACMRTUXB HEAD', {
      cwd: process.cwd(),
      stdio: ['ignore', 'pipe', 'ignore'],
      encoding: 'utf8',
    })
      .split(/\r?\n/)
      .map((file) => file.trim())
      .filter(Boolean)
      .map((file) => path.resolve(process.cwd(), file));

    const untracked = execSync('git ls-files --others --exclude-standard', {
      cwd: process.cwd(),
      stdio: ['ignore', 'pipe', 'ignore'],
      encoding: 'utf8',
    })
      .split(/\r?\n/)
      .map((file) => file.trim())
      .filter(Boolean)
      .map((file) => path.resolve(process.cwd(), file));

    return new Set([...tracked, ...untracked]);
  } catch {
    return null;
  }
})();

const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }
    if (!/\.(tsx|ts)$/.test(entry.name)) continue;
    if (changedFiles && !changedFiles.has(fullPath)) continue;
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

    if (layoutFilesPattern.test(fullPath)) {
      const usesApprovedLayout = allowedLayoutImports.some((name) => content.includes(name));
      if (!usesApprovedLayout) {
        layoutOffenders.push(fullPath);
      }
    }
  }
};

walk(root);

if (!offenders.length && !layoutOffenders.length) {
  console.log('Visual color check passed: no direct legacy color utilities found and page shells use approved layout primitives.');
  process.exit(0);
}

console.log('Visual color drift report:');
for (const offender of offenders.slice(0, 25)) {
  console.log(`- ${path.relative(process.cwd(), offender.file)} (${offender.count})`);
  console.log(`  ${offender.matches.join(', ')}`);
}

if (strict) {
  if (layoutOffenders.length) {
    console.log('\nLayout primitive enforcement:');
    for (const file of layoutOffenders.slice(0, 25)) {
      console.log(`- ${path.relative(process.cwd(), file)} (missing AppPageLayout/LibraryPageLayout/AppShellHeader/SectionCard/AppSectionBlock)`);
    }
  }
  process.exit(1);
}

if (layoutOffenders.length) {
  console.log('\nLayout primitive report:');
  for (const file of layoutOffenders.slice(0, 25)) {
    console.log(`- ${path.relative(process.cwd(), file)} (missing approved page/layout primitives)`);
  }
}

console.log('\nNon-strict mode: report only. Run with --strict to fail on offenders.');
