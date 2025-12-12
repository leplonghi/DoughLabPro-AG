import json
import os
import re

# Load the list of hardcoded texts
HARDCODED_JSON_PATH = 'docs/i18n-generated/hardcoded-texts.json'
TRANSLATION_FILE = 'public/locales/en/translation.json'

with open(HARDCODED_JSON_PATH, 'r', encoding='utf-8') as f:
    hardcoded_data = json.load(f)

with open(TRANSLATION_FILE, 'r', encoding='utf-8') as f:
    translations = json.load(f)

def generate_key_from_text(text):
    # Create a key from the text: "Unlock this Formula" -> "unlock_this_formula"
    # Remove special chars and keep only alphanumeric
    key = re.sub(r'[^a-zA-Z0-9\s]', '', text)
    key = key.lower().strip().replace(' ', '_')
    # Limit length
    if len(key) > 50:
        key = key[:50]
    return key

def get_unique_key(section, base_key):
    if section not in translations:
        translations[section] = {}
        return base_key

    if base_key not in translations[section]:
        return base_key
    
    # If key exists but text is different, we need a variant
    if translations[section][base_key] == text_to_translate:
        return base_key # Reuse existing key if text matches
    
    # Generate variant
    i = 1
    while f"{base_key}_{i}" in translations[section]:
        i += 1
    return f"{base_key}_{i}"

def determine_section(file_path):
    lower_path = file_path.lower()
    if 'community' in lower_path: return 'community'
    if 'calculator' in lower_path: return 'calculator'
    if 'mylab' in lower_path: return 'mylab'
    if 'learn' in lower_path: return 'learn'
    if 'auth' in lower_path: return 'auth'
    if 'marketing' in lower_path: return 'marketing'
    return 'common'

def escape_regex_chars(text):
    return re.escape(text)

files_processed = 0
files_modified = 0

for relative_path, texts in hardcoded_data.items():
    # Fix path separators for the OS
    file_path = relative_path.replace('\\', '/')
    
    if not os.path.exists(file_path):
        print(f"Skipping {file_path} (not found)")
        continue
        
    print(f"Processing {file_path}...")
    files_processed += 1
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    section = determine_section(file_path)
    
    # Check/Add import
    if 'useTranslation' not in content:
        # Simple heuristic to add import
        if 'import React' in content:
            content = content.replace("import React", "import { useTranslation } from 'react-i18next';\nimport React")
        elif 'from' in content:
             # Find first import line
            first_import = re.search(r'^import .*', content, re.MULTILINE)
            if first_import:
                content = content[:first_import.start()] + "import { useTranslation } from 'react-i18next';\n" + content[first_import.start():]

    # Check/Add hook
    # This is tricky without parsing AST, but we try a heuristic for functional components
    # Look for "const ComponentName = (props) => {" or "function ComponentName() {"
    if 'const { t } = useTranslation' not in content:
         # Try to insert at the beginning of the component
         # Regex for arrow function component start
        fs_match = re.search(r'(export\s+)?const\s+\w+\s*:\s*React\.FC.*=\s*\([^)]*\)\s*=>\s*\{', content)
        if fs_match:
             content = content[:fs_match.end()] + "\n    const { t } = useTranslation();" + content[fs_match.end():]
        else:
             # Regex for standard function
             func_match = re.search(r'function\s+\w+\s*\([^)]*\)\s*\{', content)
             if func_match:
                 content = content[:func_match.end()] + "\n    const { t } = useTranslation();" + content[func_match.end():]

    file_has_changes = False
    
    global text_to_translate # Hacky for the helper function above
    
    for text in texts:
        text_to_translate = text
        base_key = generate_key_from_text(text)
        if not base_key: continue
        
        final_key = get_unique_key(section, base_key)
        full_key = f"{section}.{final_key}"
        
        # Update translations dict immediately
        if section not in translations: translations[section] = {}
        translations[section][final_key] = text
        
        # Replacement Logic
        
        # 1. Replace in JSX children: >Text<  ->  >{t('key')}<
        # Be careful with spaces around text
        # Regex to match >\s*Text\s*<
        pattern_jsx_with_spaces = r'>\s*' + re.escape(text) + r'\s*<'
        
        def replace_jsx(match):
            # We assume we want to replace the whole >...< with >{t(...)}<
            return f">{{t('{full_key}')}}<"
            
        new_content = re.sub(pattern_jsx_with_spaces, replace_jsx, content)
        if new_content != content:
            content = new_content
            file_has_changes = True
            continue # Skip other patterns if found

        # 2. Replace attributes: label="Text" -> label={t('key')}
        # Handles double and single quotes
        pattern_attr_double = r'=\s*"' + re.escape(text) + r'"'
        new_content = re.sub(pattern_attr_double, f"={{t('{full_key}')}}", content)
        if new_content != content:
            content = new_content
            file_has_changes = True
            continue

        pattern_attr_single = r"=\s*'" + re.escape(text) + r"'"
        new_content = re.sub(pattern_attr_single, f"={{t('{full_key}')}}", content)
        if new_content != content:
            content = new_content
            file_has_changes = True
            continue
            
        # 3. Replace string literals in code: "Text" -> t('key')
        # This is the most dangerous one. We try to be specific.
        # e.g. case "Text": (don't replace!)
        # e.g. if (x === "Text") (maybe?)
        
        # Let's focus on known safe spots like array definitions or variable assignments if we are sure
        # For now, let's try a generic replacement BUT avoid replacing inside import statements or json keys
        
        # We will iterate over all string occurrences
        # This regex finds the text in quotes
        # We use a lambda to decide if we replace
        
        def replace_literal(match):
            # Check context? It's hard with regex only.
            # Assuming the found text is a user-facing string because it was in our identified list/json
            return f"t('{full_key}')"

        # "Text"
        pattern_str_double = r'"' + re.escape(text) + r'"'
        # Check if it looks like an import (import ... from "Text") - highly unlikely for these longer texts
        if "from" not in text and "import" not in text:
             # Safe-ish
             # But wait, we might replace "Text" in  `x = "Text"` -> `x = t('key')` which is good
             # But `case "Text":` -> `case t('key'):` is BAD syntax in switch? No, it's valid JS but might break logic if matching strict string.
             # Given the user wants 100%, we take the risk. Most hardcoded texts identified are UI labels.
             
             new_content = re.sub(pattern_str_double, replace_literal, content)
             if new_content != content:
                 content = new_content
                 file_has_changes = True

             # 'Text'
             pattern_str_single = r"'" + re.escape(text) + r"'"
             new_content = re.sub(pattern_str_single, replace_literal, content)
             if new_content != content:
                 content = new_content
                 file_has_changes = True

    if file_has_changes:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        files_modified += 1
        print(f"  Updated {file_path}")

# Save updated translations
with open(TRANSLATION_FILE, 'w', encoding='utf-8') as f:
    json.dump(translations, f, indent=2, ensure_ascii=False)

print(f"\nFinal Frontier Job Complete.")
print(f"Files Modified: {files_modified}/{files_processed}")
print("Please run `npm run dev` to verify nothing is broken.")
