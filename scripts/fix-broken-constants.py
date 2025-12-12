import os
import re

TARGET_FILES = [
    'src/learn-constants.ts',
    'src/flours-constants.ts',
    'src/logic/methodGenerator.ts',
    'src/data/learn-content/dough-aging.ts',
    'src/types/styleDefinition.ts'
]

# Add all regions
regions_dir = 'src/data/styles/regions'
for f in os.listdir(regions_dir):
    if f.endswith('.ts'):
        TARGET_FILES.append(os.path.join(regions_dir, f))

def format_value(key):
    # key: learn.some_text -> Some Text
    parts = key.split('.')
    last = parts[-1]
    # Replace underscores
    text = last.replace('_', ' ')
    # Capitalize
    return text.capitalize() # or title()? capitalize is safer for sentences.

def fix_file(filepath):
    if not os.path.exists(filepath):
        print(f"Skipping {filepath} (not found)")
        return
        
    print(f"fixing {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Handle {t('key')} inside strings (escaped or not)
    # The regex must be careful about quotes.
    # Case: '... {t('key')} ...' -> This is the syntax error case. 
    # Python regex can match it if we assume standard key chars.
    
    # We replace t('key') or {t('key')} with the formatted string.
    # Note: If it's inside quotes, we must be careful not to introduce quotes if not needed?
    # Actually, if we have '... {t('key')} ...', the quotes around key broke the outer quotes.
    # Replacing t('key') with "Text" might fix it? '... {Text} ...' -> valid string? 
    # No. '... {Text} ...' is just string text.
    
    # Regex for t('key')
    pattern = re.compile(r"\{?t\('([\w\.\-_]+)'\)\}?")
    
    def replacer(match):
        key = match.group(1)
        # We return the formatted text.
        # But we must ensure specific characters (like quotes) inside the text are escaped if we are inside a string?
        val = format_value(key)
        # simplistic approach: just return the value.
        return val

    new_content = pattern.sub(replacer, content)
    
    # 2. Cleanup `import { useTranslation }`
    new_content = re.sub(r"import \{ useTranslation \} from '@/i18n';\n?", "", new_content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("  -> Fixed.")
    else:
        print("  -> No changes.")

for f in TARGET_FILES:
    fix_file(os.path.join('.', f))
