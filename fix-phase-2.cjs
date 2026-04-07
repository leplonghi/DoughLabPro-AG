const fs = require('fs');

console.log('🔧 Phase 2: Fixing remaining TypeScript errors...\n');

// Files that still need fixes
const filesToFix = [
    'src/services/levainDataService.ts',
    'src/services/storageService.ts',
    'src/utils/doughConversion.ts',
    'src/utils/learnSearch.ts',
    'src/utils/styleAdapter.ts',
    'src/utils/styleValidation.ts'
];

let fixed = 0;

filesToFix.forEach(file => {
    if (!fs.existsSync(file)) {
        console.log(`⏭️  Skipped: ${file} (not found)`);
        return;
    }

    let content = fs.readFileSync(file, 'utf-8');

    // Replace useTranslation import with i18n.t
    if (content.includes("import { useTranslation } from 'react-i18next';")) {
        content = content.replace(
            "import { useTranslation } from 'react-i18next';",
            "import i18n from '@/i18n';\nconst t = i18n.t.bind(i18n);"
        );
        fs.writeFileSync(file, content, 'utf-8');
        console.log(`✅ Fixed: ${file}`);
        fixed++;
    } else {
        console.log(`⏭️  Already fixed: ${file}`);
    }
});

// Now fix .tsx files that need const { t } = useTranslation();
const tsxFilesToFix = [
    {
        file: 'src/components/onboarding/TourGuide.tsx',
        pattern: /export const TourGuide: React\.FC<TourGuideProps> = \(\{ isOpen, onClose \}\) => \{\r?\n/,
        replacement: `export const TourGuide: React.FC<TourGuideProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
`
    },
    {
        file: 'src/components/styles/AiStyleBuilderModal.tsx',
        pattern: /export const AiStyleBuilderModal: React\.FC<AiStyleBuilderModalProps> = \(\{ isOpen, onClose, onGenerate \}\) => \{\r?\n/,
        replacement: `export const AiStyleBuilderModal: React.FC<AiStyleBuilderModalProps> = ({ isOpen, onClose, onGenerate }) => {
  const { t } = useTranslation();
`
    },
    {
        file: 'src/components/ui/CategoryBadge.tsx',
        pattern: /export const CategoryBadge: React\.FC<CategoryBadgeProps> = \(\{ category, size = 'md', className = '' \}\) => \{\r?\n/,
        replacement: `export const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category, size = 'md', className = '' }) => {
  const { t } = useTranslation();
`
    },
    {
        file: 'src/components/ui/PDFExportButton.tsx',
        pattern: /export const PDFExportButton: React\.FC<PDFExportButtonProps> = \(\{ batch, className \}\) => \{\r?\n/,
        replacement: `export const PDFExportButton: React.FC<PDFExportButtonProps> = ({ batch, className }) => {
  const { t } = useTranslation();
`
    },
    {
        file: 'src/components/ui/RecommendedProducts.tsx',
        pattern: /export const RecommendedProducts: React\.FC<RecommendedProductsProps> = \(\{ tags, title, className \}\) => \{\r?\n/,
        replacement: `export const RecommendedProducts: React.FC<RecommendedProductsProps> = ({ tags, title, className }) => {
  const { t } = useTranslation();
`
    },
    {
        file: 'src/components/ui/ShareButton.tsx',
        pattern: /export const ShareButton: React\.FC<ShareButtonProps> = \(\{ url, title, text, className \}\) => \{\r?\n/,
        replacement: `export const ShareButton: React.FC<ShareButtonProps> = ({ url, title, text, className }) => {
  const { t } = useTranslation();
`
    },
    {
        file: 'src/pages/CalculatorPage.tsx',
        pattern: /export const CalculatorPage: React\.FC = \(\) => \{\r?\n/,
        replacement: `export const CalculatorPage: React.FC = () => {
  const { t } = useTranslation();
`
    },
    {
        file: 'src/pages/legal/LegalIndexPage.tsx',
        pattern: /export const LegalIndexPage: React\.FC = \(\) => \{\r?\n/,
        replacement: `export const LegalIndexPage: React.FC = () => {
  const { t } = useTranslation();
`
    },
    {
        file: 'src/pages/mylab/levain/LevainListPage.tsx',
        pattern: /export const LevainListPage: React\.FC = \(\) => \{\r?\n/,
        replacement: `export const LevainListPage: React.FC = () => {
  const { t } = useTranslation();
`
    }
];

tsxFilesToFix.forEach(({ file, pattern, replacement }) => {
    if (!fs.existsSync(file)) {
        console.log(`⏭️  Skipped: ${file} (not found)`);
        return;
    }

    let content = fs.readFileSync(file, 'utf-8');

    // Check if already has the hook
    if (content.includes('const { t } = useTranslation();')) {
        console.log(`⏭️  Already has hook: ${file}`);
        return;
    }

    if (pattern.test(content)) {
        content = content.replace(pattern, replacement);
        fs.writeFileSync(file, content, 'utf-8');
        console.log(`✅ Added hook to: ${file}`);
        fixed++;
    } else {
        // Try a more generic approach
        const lines = content.split('\n');
        let foundComponent = false;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            // Look for component definition
            if (line.includes('export const') && line.includes('React.FC') && line.includes('= (') && line.includes(') => {')) {
                // Insert hook on next line
                lines.splice(i + 1, 0, '  const { t } = useTranslation();');
                foundComponent = true;
                break;
            }
        }

        if (foundComponent) {
            content = lines.join('\n');
            fs.writeFileSync(file, content, 'utf-8');
            console.log(`✅ Added hook (generic) to: ${file}`);
            fixed++;
        } else {
            console.log(`⚠️  Could not find component in: ${file}`);
        }
    }
});

// Fix NotificationContext.tsx - it's a context provider
const notifContextFile = 'src/contexts/NotificationContext.tsx';
if (fs.existsSync(notifContextFile)) {
    let content = fs.readFileSync(notifContextFile, 'utf-8');

    // Check if it needs fixing
    if (!content.includes('const { t } = useTranslation();') && content.includes("t('")) {
        // Find the provider component
        const providerMatch = content.match(/(export const NotificationProvider[^{]*\{)/);
        if (providerMatch) {
            content = content.replace(providerMatch[0], providerMatch[0] + '\n  const { t } = useTranslation();\n');
            fs.writeFileSync(notifContextFile, content, 'utf-8');
            console.log(`✅ Fixed: ${notifContextFile}`);
            fixed++;
        }
    }
}

console.log(`\n📊 Phase 2 Summary: ${fixed} files fixed`);
console.log(`\n✨ All fixes applied!`);
