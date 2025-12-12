#!/usr/bin/env node

/**
 * i18n Batch Translator
 * 
 * Este script automatiza a tradução de múltiplos componentes de uma vez.
 * Ele processa todos os arquivos em um diretório e gera as chaves necessárias.
 * 
 * Uso:
 * node scripts/i18n-batch.js <diretório>
 * 
 * Exemplo:
 * node scripts/i18n-batch.js src/pages/mylab
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Função para extrair textos de um arquivo
function extractTexts(content) {
    const texts = new Set();

    // Padrão 1: Texto entre tags JSX >Text<
    const jsxTextPattern = />([A-Z][^<>{}]*[a-z][^<>{}]*)</g;
    let match;
    while ((match = jsxTextPattern.exec(content)) !== null) {
        const text = match[1].trim();
        if (text.length > 2 && !text.includes('{') && !text.includes('import')) {
            texts.add(text);
        }
    }

    // Padrão 2: Strings em atributos title="Text"
    const attrPattern = /(?:title|placeholder|label|alt)=["']([^"']+)["']/g;
    while ((match = attrPattern.exec(content)) !== null) {
        const text = match[1].trim();
        if (text.length > 2 && /[A-Z]/.test(text)) {
            texts.add(text);
        }
    }

    return Array.from(texts);
}

// Função para gerar chave de tradução
function textToKey(text) {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '_')
        .replace(/^_|_$/g, '')
        .substring(0, 40);
}

// Função para processar um diretório
function processDirectory(dir) {
    console.log(`\n🔍 Processando diretório: ${dir}\n`);

    const files = glob.sync(`${dir}/**/*.tsx`);

    if (files.length === 0) {
        console.log('❌ Nenhum arquivo .tsx encontrado');
        return;
    }

    console.log(`📁 Encontrados ${files.length} arquivos\n`);

    const allKeys = {};
    const fileReports = [];

    files.forEach(file => {
        const content = fs.readFileSync(file, 'utf-8');
        const fileName = path.basename(file, '.tsx');
        const section = fileName.toLowerCase().replace(/page$/, '_page');

        // Pular se já usa useTranslation
        if (content.includes('useTranslation')) {
            console.log(`⏭️  ${fileName} - Já traduzido`);
            return;
        }

        const texts = extractTexts(content);

        if (texts.length === 0) {
            console.log(`✅ ${fileName} - Sem textos hardcoded`);
            return;
        }

        console.log(`📝 ${fileName} - ${texts.length} textos encontrados`);

        if (!allKeys[section]) {
            allKeys[section] = {};
        }

        texts.forEach(text => {
            const key = textToKey(text);
            allKeys[section][key] = text;
        });

        fileReports.push({
            file,
            fileName,
            section,
            count: texts.length,
            texts
        });
    });

    // Gerar arquivo de chaves
    console.log('\n\n📦 Gerando arquivos de tradução...\n');

    const outputDir = path.join(__dirname, '../docs/i18n-generated');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Gerar JSON para English
    const enPath = path.join(outputDir, 'keys-en.json');
    fs.writeFileSync(enPath, JSON.stringify(allKeys, null, 2));
    console.log(`✅ Chaves EN: ${enPath}`);

    // Gerar relatório markdown
    const reportPath = path.join(outputDir, 'batch-report.md');
    let report = `# i18n Batch Analysis Report\n\n`;
    report += `Generated: ${new Date().toISOString()}\n`;
    report += `Directory: ${dir}\n`;
    report += `Files processed: ${fileReports.length}\n\n`;

    report += `## Summary\n\n`;
    report += `Total sections: ${Object.keys(allKeys).length}\n`;
    report += `Total keys: ${Object.values(allKeys).reduce((sum, section) => sum + Object.keys(section).length, 0)}\n\n`;

    report += `## Files\n\n`;
    fileReports.forEach(({ fileName, section, count, texts }) => {
        report += `### ${fileName}\n\n`;
        report += `Section: \`${section}\`\n`;
        report += `Keys: ${count}\n\n`;
        report += `Texts found:\n`;
        texts.slice(0, 10).forEach(text => {
            report += `- "${text}"\n`;
        });
        if (texts.length > 10) {
            report += `- ... and ${texts.length - 10} more\n`;
        }
        report += '\n';
    });

    report += `## Next Steps\n\n`;
    report += `1. Review generated keys in \`${enPath}\`\n`;
    report += `2. Translate to Portuguese and Spanish\n`;
    report += `3. Merge into main translation files\n`;
    report += `4. Update components with \`useTranslation\`\n`;

    fs.writeFileSync(reportPath, report);
    console.log(`✅ Relatório: ${reportPath}\n`);

    // Mostrar estatísticas
    console.log('\n📊 Estatísticas:\n');
    Object.entries(allKeys).forEach(([section, keys]) => {
        console.log(`  ${section}: ${Object.keys(keys).length} chaves`);
    });

    console.log('\n✨ Concluído!\n');
}

// CLI
const args = process.argv.slice(2);

if (args.length === 0) {
    console.log(`
🌍 i18n Batch Translator

Uso:
  node scripts/i18n-batch.js <diretório>

Exemplos:
  node scripts/i18n-batch.js src/pages
  node scripts/i18n-batch.js src/pages/mylab
  node scripts/i18n-batch.js src/components/ui

O script irá:
  ✓ Processar todos os arquivos .tsx no diretório
  ✓ Extrair textos hardcoded
  ✓ Gerar chaves de tradução
  ✓ Criar arquivo JSON com todas as chaves
  ✓ Gerar relatório detalhado
    `);
    process.exit(0);
}

const dir = path.resolve(args[0]);

if (!fs.existsSync(dir)) {
    console.error(`❌ Diretório não encontrado: ${dir}`);
    process.exit(1);
}

processDirectory(dir);
