
const fs = require('fs');
const path = require('path');

// --- CONFIG ---
const SRC_DIR = path.resolve(__dirname, '../src');
const LOCALES_DIR = path.resolve(__dirname, '../public/locales');
const IGNORE_DIRS = ['node_modules', '.git', 'build', 'dist', 'locales', 'assets'];
const TARGET_EXTS = ['.tsx']; // Focando apenas em componentes visuais por segurança

// --- HELPER: Load existing translations keys ---
// Carrega todas as chaves existentes (EN) para mapaer "Texto" -> "namespace.key"
function loadTranslationMap() {
    const map = new Map(); // "Normalized Text" -> "namespace.key"
    const namespaces = ['common', 'ui', 'calculator', 'learn', 'styles', 'errors', 'notifications', 'weather'];

    namespaces.forEach(ns => {
        try {
            const filePath = path.join(LOCALES_DIR, 'en', `${ns}.json`);
            if (fs.existsSync(filePath)) {

                function recurse(obj, prefix) {
                    for (const [k, v] of Object.entries(obj)) {
                        const key = prefix ? `${prefix}.${k}` : k;
                        if (typeof v === 'string') {
                            // Normaliza o texto para busca (trim)
                            const text = v.trim();
                            if (text.length > 2) {
                                map.set(text, `${ns}:${key}`); // Usa : como separador padrao i18next
                            }
                        } else if (typeof v === 'object') {
                            recurse(v, key);
                        }
                    }
                }

                const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                recurse(json, '');
            }
        } catch (e) {
            console.error(`Error loading ${ns}.json:`, e);
        }
    });
    return map;
}

const translationMap = loadTranslationMap();
console.log(`Loaded ${translationMap.size} translation keys.`);

// --- HELPER: Escape Regex ---
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// --- REPLACE FUNCTION ---
function processFile(filePath) {
    if (filePath.includes('i18n.ts')) return; // Pula config

    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let modified = false;

    // 1. Identificar strings hardcoded (usando regex para JSX Text: >Texto<)
    // CUIDADO: Isso pode quebrar coisas se o texto tiver caracteres especiais de regex
    // Vamos iterar sobre AS CHAVES CONHECIDAS para garantir match exato
    // Isso é ineficiente (O(N*M)), mas seguro.

    // Melhor abordagem: Ler o arquivo e procurar padroes de string, depois ver se bate com chave

    // Regex para capturar texto entre tags JSX (simples)
    // >\s*([^<{]+?)\s*<
    content = content.replace(/>\s*([^<{]+?)\s*</g, (match, textRef) => {
        const text = textRef.trim();
        if (translationMap.has(text)) {
            const key = translationMap.get(text);
            const ns = key.split(':')[0];
            const k = key.split(':')[1];
            // Se for common, as vezes usa sem namespace, mas melhor explicito
            console.log(`[JSX] Replacing "${text}" -> {t('${key}')} in ${path.basename(filePath)}`);
            modified = true;
            return `>{t('${key}')}<`;
        }
        return match;
    });

    // Regex para atributos especificos
    // placeholder="Texto"
    const attrs = ['placeholder', 'title', 'label', 'alt', 'aria-label'];
    attrs.forEach(attr => {
        // Regex simplificada: attr="valor" ou attr='valor'
        const regex = new RegExp(`${attr}=['"]([^'"]+)['"]`, 'g');
        content = content.replace(regex, (match, textRef) => {
            const text = textRef.trim();
            if (translationMap.has(text)) {
                const key = translationMap.get(text);
                console.log(`[ATTR] Replacing ${attr}="${text}" -> ${attr}={t('${key}')} in ${path.basename(filePath)}`);
                modified = true;
                return `${attr}={t('${key}')}`;
            }
            return match;
        });
    });

    if (modified) {
        // --- INJEÇÃO DE HOOK ---
        const hasImport = content.includes('useTranslation') && content.includes('react-i18next');
        const hasHook = content.includes('useTranslation()');

        // Se nao tem import, adiciona
        if (!hasImport) {
            if (content.match(/^import /)) {
                // Adiciona apos o ultimo import ou primeiro
                content = `import { useTranslation } from 'react-i18next';\n` + content;
            }
        }

        // Se nao tem hook, tenta injetar
        if (!hasHook) {
            // Procura definicao de componente funcional:
            // export const Comp = (...) => {
            // export default function Comp(...) {
            // function Comp(...) {

            const regexFunc = /(export\s+default\s+function\s+\w+\s*\(.*?\)\s*\{|export\s+const\s+\w+\s*=\s*\(.*?\)\s*=>\s*\{|function\s+\w+\s*\(.*?\)\s*\{)/;

            if (regexFunc.test(content)) {
                content = content.replace(regexFunc, (match) => {
                    return `${match}\n  const { t } = useTranslation();`;
                });
                console.log(`   + Injected 'const { t } = useTranslation();'`);
            } else {
                console.warn(`   ⚠️  Could not inject hook automatically. Please check manually.`);
            }
        }

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed ${path.basename(filePath)}\n`);
    }
}

// --- MAIN WALKER ---
function walk(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            if (!IGNORE_DIRS.includes(file)) walk(fullPath);
        } else {
            if (TARGET_EXTS.includes(path.extname(file))) {
                processFile(fullPath);
            }
        }
    });
}

console.log("🚀 Starting automatic i18n replacement in .tsx files...");
walk(SRC_DIR);
console.log("🏁 Replacement complete.");
