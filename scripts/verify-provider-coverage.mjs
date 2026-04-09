import fs from 'node:fs';
import path from 'node:path';

const repoRoot = process.cwd();
const srcDir = path.join(repoRoot, 'src');
const contextsDir = path.join(srcDir, 'contexts');
const appProvidersPath = path.join(srcDir, 'app', 'AppProviders.tsx');

const readFile = (filePath) => fs.readFileSync(filePath, 'utf8');
const walk = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(fullPath));
    else files.push(fullPath);
  }
  return files;
};

const contextFiles = walk(contextsDir).filter((file) => file.endsWith('.tsx') || file.endsWith('.ts'));

const hooksToProviders = new Map();

for (const file of contextFiles) {
  const content = readFile(file);
  const hookRegex = /export const (use[A-Za-z0-9_]+)\s*=\s*\(\)\s*(?::\s*[^=]+)?=>\s*{[\s\S]*?throw new Error\('.*?within (?:an|a) ([A-Za-z0-9_]+)'\)/g;
  for (const match of content.matchAll(hookRegex)) {
    const hookName = match[1];
    const providerName = match[2];
    hooksToProviders.set(hookName, providerName);
  }
}

const allSourceFiles = walk(srcDir).filter((file) => (file.endsWith('.tsx') || file.endsWith('.ts')) && !file.includes(`${path.sep}contexts${path.sep}`));
const usedHooks = new Set();

for (const file of allSourceFiles) {
  const content = readFile(file);
  for (const hookName of hooksToProviders.keys()) {
    const regex = new RegExp(`\\b${hookName}\\s*\\(`, 'g');
    if (regex.test(content)) usedHooks.add(hookName);
  }
}

const appProvidersContent = readFile(appProvidersPath);
const missingProviders = [];

for (const hookName of usedHooks) {
  const providerName = hooksToProviders.get(hookName);
  if (!providerName) continue;

  const importRegex = new RegExp(`\\b${providerName}\\b`);
  const jsxRegex = new RegExp(`<${providerName}[\\s>]`);

  if (!importRegex.test(appProvidersContent) || !jsxRegex.test(appProvidersContent)) {
    missingProviders.push({ hookName, providerName });
  }
}

if (missingProviders.length > 0) {
  console.error('Provider coverage check failed. Missing providers in AppProviders:');
  for (const item of missingProviders) {
    console.error(`- ${item.hookName} requires ${item.providerName}`);
  }
  process.exit(1);
}

console.log(`Provider coverage OK. Checked ${usedHooks.size} used context hooks.`);
