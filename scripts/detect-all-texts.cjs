const fs = require('fs');
const path = require('path');

// Padrões para detectar TODOS os textos
const COMPREHENSIVE_PATTERNS = [
    // Padrão 1: Textos em JSX >Text<
    {
        regex: />([A-Z][a-zA-Z\s,.'!?-]{2,80})</g,
        type: 'jsx_content'
    },
    // Padrão 2: Atributos com aspas duplas
    {
        regex: /(\w+)=["']([A-Z][a-zA-Z\s,.'!?-]{2,80})["']/g,
        type: 'attribute'
    },
    // Padrão 3: Strings em variáveis const/let
    {
        regex: /(?:const|let)\s+\w+\s*=\s*["']([A-Z][a-zA-Z\s,.'!?-]{3,80})["']/g,
        type: 'variable'
    },
    // Padrão 4: Strings em arrays
    {
        regex: /\[[\s\S]*?["']([A-Z][a-zA-Z\s,.'!?-]{3,80})["'][\s\S]*?\]/g,
        type: 'array'
    },
    // Padrão 5: Strings em objetos
    {
        regex: /\{\s*\w+:\s*["']([A-Z][a-zA-Z\s,.'!?-]{3,80})["']/g,
        type: 'object'
    },
    // Padrão 6: Template literals
    {
        regex: /`([A-Z][a-zA-Z\s,.'!?-]{3,80})`/g,
        type: 'template'
    },
    // Padrão 7: Ternários
    {
        regex: /\?\s*["']([A-Z][a-zA-Z\s,.'!?-]{3,80})["']\s*:/g,
        type: 'ternary'
    },
];

// Palavras a ignorar
const IGNORE_LIST = new Set([
    'React', 'useState', 'useEffect', 'useCallback', 'useMemo', 'useRef',
    'className', 'onClick', 'onChange', 'onSubmit', 'Type', 'Props',
    'Component', 'Fragment', 'Suspense', 'Lazy', 'Memo', 'Context',
    'Provider', 'Consumer', 'Router', 'Route', 'Link', 'Navigate',
    'String', 'Number', 'Boolean', 'Array', 'Object', 'Function',
    'Error', 'Promise', 'Date', 'Math', 'JSON', 'Console',
]);

function shouldIgnore(text) {
    if (text.length < 3 || text.length > 80) return true;
    if (IGNORE_LIST.has(text)) return true;
    if (/^[a-z]/.test(text)) return true; // Começa com minúscula
    if (/^\d/.test(text)) return true; // Começa com número
    if (text.includes('\\')) return true; // Tem escape
    if (text.includes('{')) return true; // Tem JSX
    if (text.includes('(')) return true; // Tem função
    if (text.includes('[')) return true; // Tem array
    if (text.includes('$')) return true; // Tem template
    if (text.includes('http')) return true; // URL
    if (text.includes('@')) return true; // Email
    if (/^[A-Z_]+$/.test(text)) return true; // CONSTANTE
    return false;
}

function extractAllTexts(content, filePath) {
    const texts = new Map(); // text -> type

    for (const pattern of COMPREHENSIVE_PATTERNS) {
        let match;
        const regex = new RegExp(pattern.regex.source, pattern.regex.flags);

        while ((match = regex.exec(content)) !== null) {
            const text = match[1]?.trim();
            if (!text) continue;
            if (shouldIgnore(text)) continue;

            texts.set(text, pattern.type);
        }
    }

    return texts;
}

function processDirectory(dir) {
    const allTexts = new Map(); // text -> Set of files

    function walk(currentPath) {
        const files = fs.readdirSync(currentPath);

        for (const file of files) {
            const filePath = path.join(currentPath, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
                if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
                    walk(filePath);
                }
            } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                const content = fs.readFileSync(filePath, 'utf-8');
                const texts = extractAllTexts(content, filePath);

                for (const [text, type] of texts) {
                    if (!allTexts.has(text)) {
                        allTexts.set(text, new Set());
                    }
                    allTexts.get(text).add(path.relative(process.cwd(), filePath));
                }
            }
        }
    }

    walk(dir);
    return allTexts;
}

console.log('🔍 Detectando TODOS os textos hardcoded...\n');
const allTexts = processDirectory('src');

// Converter para formato JSON
const result = {};
for (const [text, files] of allTexts) {
    result[text] = Array.from(files);
}

// Salvar
fs.writeFileSync(
    'docs/i18n-generated/all-hardcoded-texts.json',
    JSON.stringify(result, null, 2)
);

console.log(`📊 Total de textos únicos: ${allTexts.size}`);
console.log(`📁 Salvos em: docs/i18n-generated/all-hardcoded-texts.json`);

// Mostrar amostra
console.log('\n📝 Amostra (primeiros 20):');
let count = 0;
for (const [text, files] of allTexts) {
    if (count++ >= 20) break;
    console.log(`  - "${text}" (${files.size} arquivo${files.size > 1 ? 's' : ''})`);
}

if (allTexts.size > 20) {
    console.log(`  ... e mais ${allTexts.size - 20} textos`);
}
