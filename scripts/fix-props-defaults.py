import os
import re

TARGET_DIR = 'src/components'

def format_value(key):
    parts = key.split('.')
    last = parts[-1]
    return last.replace('_', ' ').title()

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex for prop={t('key')} or prop=t('key') in destructuring default
    # Pattern: identifier = {?t('key')}?,
    # Note: checks for trailing comma which is common in multi-line props
    pattern = re.compile(r"(\w+)\s*=\s*\{?t\('([\w\._\-]+)'\)\}?(\s*,)")

    def replacer(match):
        prop = match.group(1)
        key = match.group(2)
        comma = match.group(3)
        val = format_value(key)
        return f"{prop} = '{val}'{comma}"

    new_content = pattern.sub(replacer, content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Fixed props defaults in {filepath}")

for root, _, files in os.walk(TARGET_DIR):
    for file in files:
        if file.endswith('.tsx'):
            fix_file(os.path.join(root, file))
