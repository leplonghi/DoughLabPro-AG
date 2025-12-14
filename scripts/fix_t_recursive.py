import os
import re

TARGET_DIR = 'src/data'

def process_file(filepath):
    # Only process .ts files that are not index.ts (index.ts usually re-exports)
    # Actually index.ts might use t too? Let's check.
    # But usually not.
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
        return
        
    # Check if file uses t('...') 
    # Use loose regex t\(
    if not re.search(r"\bt\s*\(", content):
        return # No usage of t()
        
    # Check if t is defined
    # Look for: const t =, function t(, import ... t
    if re.search(r"\bconst\s+t\s*=", content) or \
       re.search(r"\blet\s+t\s*=", content) or \
       re.search(r"\bfunction\s+t\s*\(", content) or \
       re.search(r"import\s+.*\bt\b", content):
       # t seems defined, skipping
       return

    # Special check: ProFeatureLock.tsx style usage inside component?
    # If the usage is inside a React Component, and useTranslation is used, it is fine.
    # But this script targets `src/data` mostly. `src/data` files are usually modules/constants.
    
    print(f"Fixing missing t in {filepath}...")
    
    lines = content.splitlines()
    new_lines = []
    
    imported_added = False
    
    # We want to add import i18n from '@/i18n';
    # And const t = i18n.t.bind(i18n);
    
    # Logic: Find last import. Insert import i18n if not present.
    # Find start of code (e.g. export const). Insert const t.
    
    has_i18n_import = "import i18n from '@/i18n'" in content
    
    last_import_idx = -1
    export_idx = -1
    
    for i, line in enumerate(lines):
        if line.startswith("import "):
            last_import_idx = i
        if line.startswith("export const ") or line.startswith("export default "):
            if export_idx == -1: export_idx = i
            
    # Modify lines
    # Remove unused useTranslation import if present
    # import { useTranslation } from '@/i18n';
    # We can replace it with import i18n from '@/i18n';
    
    replaced_use_translation = False
    final_lines = []
    
    for line in lines:
        if "import { useTranslation } from '@/i18n';" in line:
            final_lines.append("import i18n from '@/i18n';")
            replaced_use_translation = True
        else:
            final_lines.append(line)
            
    # If we substituted, we have i18n. If not, maybe we need to add it.
    if not replaced_use_translation and not has_i18n_import:
        # Add after last import
        if last_import_idx != -1:
             final_lines.insert(last_import_idx + 1, "import i18n from '@/i18n';")
        else:
             final_lines.insert(0, "import i18n from '@/i18n';")
    
    # Add const t definition before first export
    # Re-calculate export index in final_lines
    for i, line in enumerate(final_lines):
         if line.startswith("export const ") or line.startswith("export default "):
             # Insert t definition
             # Add a blank line too
             final_lines.insert(i, "const t = i18n.t.bind(i18n);")
             final_lines.insert(i+1, "")
             break
             
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write("\n".join(final_lines))

if __name__ == '__main__':
    for root, dirs, files in os.walk(TARGET_DIR):
        for filename in files:
            if filename.endswith('.ts') and filename != 'index.ts':
                process_file(os.path.join(root, filename))
