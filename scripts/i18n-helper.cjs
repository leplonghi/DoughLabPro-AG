#!/usr/bin/env node

/**
 * i18n Auto-Translator Script
 * 
 * Este script ajuda a automatizar a tradução de componentes React.
 * Ele detecta textos hardcoded e sugere chaves de tradução.
 * 
 * Uso:
 * node scripts/i18n-helper.js <caminho-do-componente>
 * 
 * Exemplo:
 * node scripts/i18n-helper.js src/pages/ToolsPage.tsx
 */

const fs = require('fs');
const path = require('path');

// Padrões para detectar textos hardcoded
const PATTERNS = {
    // JSX text content: <div>Text here</div>
    jsxText: />([A-Z][^<>{}]*[a-z][^<>{}]*)</g,

    // String literals in JSX: title="Text"
    jsxAttribute: /(\w+)=["']([A-Z][^"']*[a-z][^"']*?)["']/g,

    // Template literals: `Text here`
    templateLiteral: /`([A-Z][^`]*[a-z][^`]*)`/g,

    // String literals: "Text" or 'Text'
    stringLiteral: /["']([A-Z][^"']*[a-z]{2,}[^"']*)["']/g,
};

// Textos a ignorar (componentes, variáveis, etc.)
const IGNORE_LIST = [
    'React', 'useState', 'useEffect', 'className', 'onClick',
    'onChange', 'onSubmit', 'props', 'children', 'key',
    'import', 'export', 'const', 'let', 'var', 'function',
    'return', 'if', 'else', 'for', 'while', 'switch', 'case',
    'true', 'false', 'null', 'undefined', 'NaN', 'Infinity',
];

function shouldIgnore(text) {
    // Ignorar se for muito curto
    if (text.length < 3) return true;

    // Ignorar se estiver na lista
    if (IGNORE_LIST.some(item => text.includes(item))) return true;

    // Ignorar se for código (contém símbolos)
    if (/[{}()[\];=<>]/.test(text)) return true;

    // Ignorar se for variável (começa com minúscula ou tem camelCase)
    if (/^[a-z]/.test(text) && /[A-Z]/.test(text)) return true;

    return false;
}

function generateKey(text, section = 'common') {
    // Converter texto para snake_case
    const key = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '_')
        .replace(/^_|_$/g, '')
        .substring(0, 50); // Limitar tamanho

    return `${section}.${key}`;
}

function analyzeFile(filePath) {
    console.log(`\n🔍 Analisando: ${filePath}\n`);

    if (!fs.existsSync(filePath)) {
        console.error(`❌ Arquivo não encontrado: ${filePath}`);
        return;
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    const fileName = path.basename(filePath, '.tsx');
    const section = fileName.toLowerCase().replace('page', '_page');

    const foundTexts = new Set();

    // Detectar textos hardcoded
    const jsxMatches = content.matchAll(PATTERNS.jsxText);
    for (const match of jsxMatches) {
        const text = match[1].trim();
        if (!shouldIgnore(text) && text.length > 2) {
            foundTexts.add(text);
        }
    }

    if (foundTexts.size === 0) {
        console.log('✅ Nenhum texto hardcoded encontrado! (ou componente já traduzido)');
        return;
    }

    console.log(`📝 Encontrados ${foundTexts.size} textos hardcoded:\n`);

    const suggestions = [];

    foundTexts.forEach(text => {
        const key = generateKey(text, section);
        suggestions.push({ text, key });
        console.log(`  "${text}"`);
        console.log(`  → t('${key}')\n`);
    });

    // Gerar código de exemplo
    console.log('\n📋 Código sugerido para adicionar ao componente:\n');
    console.log('// 1. Importar');
    console.log("import { useTranslation } from '@/i18n';\n");
    console.log('// 2. No componente');
    console.log('const { t } = useTranslation();\n');
    console.log('// 3. Substituir textos:');

    suggestions.slice(0, 5).forEach(({ text, key }) => {
        console.log(`// "${text}" → {t('${key}')}`);
    });

    // Gerar JSON para translation files
    console.log('\n\n📦 JSON para adicionar aos arquivos de tradução:\n');
    console.log('// English (en/translation.json):');
    console.log(`"${section}": {`);
    suggestions.forEach(({ text, key }, index) => {
        const simpleKey = key.split('.')[1];
        const comma = index < suggestions.length - 1 ? ',' : '';
        console.log(`  "${simpleKey}": "${text}"${comma}`);
    });
    console.log('}\n');

    // Salvar relatório
    const reportPath = path.join(__dirname, '../docs/i18n-analysis.md');
    const report = `# Análise i18n - ${fileName}\n\n` +
        `Arquivo: ${filePath}\n` +
        `Data: ${new Date().toISOString()}\n\n` +
        `## Textos Encontrados (${foundTexts.size})\n\n` +
        suggestions.map(({ text, key }) => `- "${text}" → \`t('${key}')\``).join('\n') +
        '\n\n## Próximos Passos\n\n' +
        '1. Adicionar chaves ao arquivo de tradução\n' +
        '2. Importar `useTranslation` no componente\n' +
        '3. Substituir textos hardcoded\n';

    fs.writeFileSync(reportPath, report);
    console.log(`\n💾 Relatório salvo em: ${reportPath}`);
}

// CLI
const args = process.argv.slice(2);

if (args.length === 0) {
    console.log(`
🌍 i18n Auto-Translator Helper

Uso:
  node scripts/i18n-helper.js <caminho-do-arquivo>

Exemplos:
  node scripts/i18n-helper.js src/pages/ToolsPage.tsx
  node scripts/i18n-helper.js src/components/ui/Button.tsx

O script irá:
  ✓ Detectar textos hardcoded
  ✓ Sugerir chaves de tradução
  ✓ Gerar código de exemplo
  ✓ Criar JSON para os arquivos de tradução
  ✓ Salvar relatório em docs/i18n-analysis.md
    `);
    process.exit(0);
}

const filePath = path.resolve(args[0]);
analyzeFile(filePath);
