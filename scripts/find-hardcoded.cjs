const fs = require('fs');
const path = require('path');

// Padrões para detectar textos hardcoded
const TEXT_PATTERNS = [
    // Textos em JSX: >Text<
    />\s*([A-Z][a-zA-Z\s]{2,50})\s*</g,
    // Textos em atributos: placeholder="Text"
    /(?:placeholder|title|label|alt|aria-label)=["']([^"']{3,}?)["']/g,
    // Textos em strings: "Text"
    /"([A-Z][a-zA-Z\s]{3,50})"/g,
];

// Palavras a ignorar
const IGNORE_WORDS = [
    'React', 'useState', 'useEffect', 'useCallback', 'useMemo', 'useRef',
    'className', 'onClick', 'onChange', 'onSubmit', 'onBlur', 'onFocus',
    'div', 'span', 'button', 'input', 'select', 'option', 'textarea',
    'true', 'false', 'null', 'undefined', 'const', 'let', 'var', 'function',
    'return', 'import', 'export', 'from', 'default', 'async', 'await',
    'Type', 'Props', 'State', 'Context', 'Provider', 'Consumer',
    'Component', 'Fragment', 'Suspense', 'Lazy', 'Memo',
];

function extractHardcodedTexts(content, filePath) {
    const texts = new Set();

    // Ignorar se já usa t()
    const hasTFunction = content.includes("t('") || content.includes('t("');

    for (const pattern of TEXT_PATTERNS) {
        let match;
        while ((match = pattern.exec(content)) !== null) {
            const text = match[1].trim();

            // Filtros
            if (text.length < 3) continue;
            if (text.length > 50) continue;
            if (IGNORE_WORDS.includes(text)) continue;
            if (/^[a-z]/.test(text)) continue; // Começa com minúscula
            if (/^\d/.test(text)) continue; // Começa com número
            if (text.includes('\\')) continue; // Tem escape
            if (text.includes('{')) continue; // Tem JSX
            if (text.includes('(')) continue; // Tem função
            if (text.includes('[')) continue; // Tem array

            texts.add(text);
        }
    }

    return Array.from(texts);
}

function processDirectory(dir) {
    const results = {};

    function walk(currentPath) {
        const files = fs.readdirSync(currentPath);

        for (const file of files) {
            const filePath = path.join(currentPath, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
                if (file !== 'node_modules' && file !== '.git') {
                    walk(filePath);
                }
            } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                const content = fs.readFileSync(filePath, 'utf-8');
                const texts = extractHardcodedTexts(content, filePath);

                if (texts.length > 0) {
                    const relativePath = path.relative(process.cwd(), filePath);
                    results[relativePath] = texts;
                }
            }
        }
    }

    walk(dir);
    return results;
}

// Processar src/
console.log('🔍 Procurando textos hardcoded...\n');
const results = processDirectory('src');

// Contar total
let totalTexts = 0;
let totalFiles = 0;

for (const [file, texts] of Object.entries(results)) {
    totalFiles++;
    totalTexts += texts.length;
}

console.log(`📊 Encontrados ${totalTexts} textos em ${totalFiles} arquivos\n`);

// Mostrar primeiros 20 arquivos
const entries = Object.entries(results).slice(0, 20);
for (const [file, texts] of entries) {
    console.log(`📄 ${file} (${texts.length} textos)`);
    texts.slice(0, 5).forEach(text => console.log(`   - "${text}"`));
    if (texts.length > 5) {
        console.log(`   ... e mais ${texts.length - 5}`);
    }
    console.log('');
}

if (totalFiles > 20) {
    console.log(`... e mais ${totalFiles - 20} arquivos\n`);
}

// Salvar resultado completo
fs.writeFileSync(
    'docs/i18n-generated/hardcoded-texts.json',
    JSON.stringify(results, null, 2)
);

console.log('✅ Resultado completo salvo em: docs/i18n-generated/hardcoded-texts.json');
