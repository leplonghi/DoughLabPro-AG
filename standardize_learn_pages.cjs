
const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src/pages/learn');

function walk(dir, callback) {
    fs.readdir(dir, function (err, files) {
        if (err) throw err;
        files.forEach(function (file) {
            var filepath = path.join(dir, file);
            fs.stat(filepath, function (err, stats) {
                if (stats.isDirectory()) {
                    walk(filepath, callback);
                } else if (stats.isFile() && file.endsWith('.tsx')) {
                    callback(filepath);
                }
            });
        });
    });
}

walk(directoryPath, function (filepath) {
    if (filepath.includes('LearnComponents.tsx') || filepath.includes('LearnPage.tsx') || filepath.includes('TechnicalPageLayout.tsx')) {
        return;
    }

    fs.readFile(filepath, 'utf8', function (err, data) {
        if (err) throw err;

        let newData = data;
        let modified = false;

        // 1. Remove local Section definition (Robust Regex)
        // Matches: const Section ... = (...) => ( ... );
        // We look for "const Section" and then scan until the closing ");" that follows the JSX return.
        // This is hard with regex, so we'll use a simpler heuristic that covers the known patterns.

        const patterns = [
            /const Section: React\.FC<\{ title: string; children: React\.ReactNode \}> = \(\{ title, children \}\) => \(\s*<div className="mt-8 first:mt-0">[\s\S]*?<\/div>\s*\);\s*/,
            /const Section: React\.FC<\{ title: string; children: React\.ReactNode \}> = \(\{ title, children \}\) => \(\s*<div className="mt-10 first:mt-0">[\s\S]*?<\/div>\s*\);\s*/,
            /const Section: React\.FC<\{ title: string, icon\?: React\.ReactNode, children: React\.ReactNode \}> = \(\{ title, icon, children \}\) => \(\s*<div className="mt-8 first:mt-0">[\s\S]*?<\/div>\s*\);\s*/
        ];

        patterns.forEach(regex => {
            if (regex.test(newData)) {
                newData = newData.replace(regex, '');
                modified = true;
            }
        });

        // 2. Add Import if missing
        if (!newData.includes("import { LearnSection")) {
            // Find the last import
            const lastImportIndex = newData.lastIndexOf('import ');
            if (lastImportIndex !== -1) {
                const endOfLastImport = newData.indexOf(';', lastImportIndex);
                if (endOfLastImport !== -1) {
                    // Check if we are in a subdirectory of learn (e.g. learn/ingredients)
                    const relativePath = path.relative(path.dirname(filepath), path.join(__dirname, 'src/pages/learn'));
                    const importPath = relativePath ? `${relativePath.replace(/\\/g, '/')}/LearnComponents` : './LearnComponents';

                    newData = newData.slice(0, endOfLastImport + 1) + `\nimport { LearnSection, LearnKeyTakeaway } from '${importPath}';` + newData.slice(endOfLastImport + 1);
                    modified = true;
                }
            }
        }

        // 3. Replace usages
        if (newData.includes('<Section')) {
            newData = newData.replace(/<Section/g, '<LearnSection');
            newData = newData.replace(/<\/Section>/g, '</LearnSection>');
            modified = true;
        }

        if (modified) {
            fs.writeFile(filepath, newData, 'utf8', function (err) {
                if (err) throw err;
                console.log('Standardized: ' + filepath);
            });
        }
    });
});
