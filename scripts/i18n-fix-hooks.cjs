
const fs = require('fs');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, '../src');

// Lista de arquivos identificados como problemáticos
const TARGET_FILES = [
    'src/community/components/CommunityTopics.tsx',
    'src/components/AssistantPage.tsx',
    'src/components/calculator/UnitSelector.tsx',
    'src/components/dashboard/Header.tsx',
    'src/components/dashboard/sections/AssemblySection.tsx',
    'src/components/dashboard/sections/LabSection.tsx',
    'src/components/dashboard/sections/SchedulerSection.tsx',
    'src/components/modals/FlavorComponentProfileModal.tsx',
    'src/components/notifications/NotificationAnalyticsDashboard.tsx',
    'src/components/notifications/NotificationList.tsx',
    'src/components/ui/AnimatedInput.tsx',
    'src/components/ui/AnimatedToast.tsx',
    'src/components/weather/TemperatureDetector.tsx',
    'src/components/weather/WeatherWidget.tsx',
    'src/features/calculator/presentation/components/CalculatorInputs.tsx',
    'src/pages/ProductionDashboard.tsx',
];

function fixFile(relativePath) {
    const fullPath = path.join(__dirname, '..', relativePath);

    if (!fs.existsSync(fullPath)) {
        console.warn(`⚠️ File not found: ${relativePath}`);
        return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    let originalContent = content;
    let modified = false;

    // 1. ADD IMPORT
    if (!content.includes("import { useTranslation }") && !content.includes('import {useTranslation}')) {
        if (content.startsWith('import ')) {
            content = "import { useTranslation } from 'react-i18next';\n" + content;
            modified = true;
        } else {
            content = "import { useTranslation } from 'react-i18next';\n" + content;
            modified = true;
        }
    }

    // 2. INJECT HOOK
    const usesT = content.match(/[^a-zA-Z]t\s*\(/);
    const hasHook = content.includes('const { t } = useTranslation') || content.includes('const {t} = useTranslation');
    const isClass = content.includes('class ') && content.includes('extends React.Component');

    if (usesT && !hasHook && !isClass) {

        const patterns = [
            // 1. FC with Destructuring: export const Comp: React.FC<Props> = ({...}) => {
            { regex: /(export\s+const\s+\w+\s*:\s*React\.FC(?:<.*?>)?\s*=\s*\(\{.*?\}\)\s*=>\s*\{)/s, name: "FC with Destructuring" },

            // 2. FC No Props: export const Comp: React.FC<Props> = () => {
            // OR export const Comp: React.FC = () => {
            { regex: /(export\s+const\s+\w+\s*:\s*React\.FC(?:<.*?>)?\s*=\s*\(\)\s*=>\s*\{)/s, name: "FC No Props" },

            // 3. FC with Props arg: export const Comp: React.FC<Props> = (props) => {
            { regex: /(export\s+const\s+\w+\s*:\s*React\.FC(?:<.*?>)?\s*=\s*\(\w+\)\s*=>\s*\{)/s, name: "FC with Props arg" },

            // 4. Const Destructuring: export const Comp = ({...}) => {
            { regex: /(export\s+const\s+\w+\s*=\s*\(\{.*?\}\)\s*=>\s*\{)/s, name: "Const Destructuring" },

            // 5. Const No Props: export const Comp = () => {
            { regex: /(export\s+const\s+\w+\s*=\s*\(\)\s*=>\s*\{)/s, name: "Const No Props" },

            // 6. Const Props arg: export const Comp = (props) => {
            { regex: /(export\s+const\s+\w+\s*=\s*\(\w+\)\s*=>\s*\{)/s, name: "Const Props arg" },

            // 7. Default Function: export default function Comp(...) {
            { regex: /(export\s+default\s+function\s+\w*\s*\(.*?\)\s*\{)/s, name: "Default Function" },

            // 8. Plain Function: function Comp(...) {
            { regex: /(function\s+\w+\s*\(.*?\)\s*\{)/s, name: "Plain Function" },

            // 9. React.memo: const Comp = React.memo(...)
            { regex: /(const\s+\w+\s*=\s*React\.memo\(\(.*?\)\s*=>\s*\{)/s, name: "React.memo" }
        ];

        let injected = false;
        for (const p of patterns) {
            if (p.regex.test(content)) {
                content = content.replace(p.regex, (match) => {
                    return `${match}\n    const { t } = useTranslation();`;
                });
                injected = true;
                modified = true;
                console.log(`✅ Injected hook into ${relativePath} using pattern: ${p.name}`);
                break;
            }
        }

        if (!injected) {
            console.error(`❌ FAILED to inject hook in ${relativePath}. Structure mismatch.`);
            const snippet = content.match(/export\s+(const|default|function).*/)?.[0] || content.slice(0, 100);
            console.log(`   Snippet: ${snippet.slice(0, 80)}...`);
        }
    } else {
        if (!modified) {
            console.log(`ℹ️  Skipping ${relativePath} (hook present or t() not used)`);
        }
    }

    if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`💾 Saved ${relativePath}`);
    }
}

console.log("🚀 Starting hook injection fixes (Round 3)...");
TARGET_FILES.forEach(fixFile);
console.log("🏁 Fix complete.");
