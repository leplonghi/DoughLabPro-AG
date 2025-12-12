import os
import re

TARGET_DIR = 'src/components'

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex for key: {t('key')} (Object literal error)
    # Excludes JSX props because they use = not :
    pattern = re.compile(r"(\w+):\s*\{t\('([\w\._\-]+)'\)\}")

    def replacer(match):
        key = match.group(1)
        t_key = match.group(2)
        return f"{key}: t('{t_key}')"

    new_content = pattern.sub(replacer, content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Fixed object property syntax in {filepath}")

for root, _, files in os.walk(TARGET_DIR):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            fix_file(os.path.join(root, file))
