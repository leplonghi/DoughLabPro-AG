import os
import re

TARGET_FILES = [
    'src/pages/learn/ingredients/BoldCombosPage.tsx'
]

def fix_file(filepath):
    if not os.path.exists(filepath):
        print(f"Skipping {filepath}")
        return

    print(f"Fixing {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Match t('key'): -> [t('key')]:
    new_content = re.sub(r"t\('([^']+)'\):", r"[t('\1')]:", content)
    new_content = re.sub(r't\("([^"]+)"\):', r'[t("\1")]:', new_content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("  -> Fixed.")
    else:
        print("  -> No changes needed.")

for f in TARGET_FILES:
    fix_file(f)
