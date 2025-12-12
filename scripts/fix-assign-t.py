import os
import re

TARGET_DIR = 'src/components'

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex for variable = {t('key')};
    # Pattern: identifier = {t('key')};
    pattern = re.compile(r"(\w+)\s*=\s*\{t\('([\w\._\-]+)'\)\};")

    def replacer(match):
        var_name = match.group(1)
        key = match.group(2)
        return f"{var_name} = t('{key}');"

    new_content = pattern.sub(replacer, content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Fixed assignment syntax in {filepath}")

for root, _, files in os.walk(TARGET_DIR):
    for file in files:
        if file.endswith('.tsx'):
            fix_file(os.path.join(root, file))
