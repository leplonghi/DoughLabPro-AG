import re

TARGET = 'src/learn-constants.ts'

def fix_file(filepath):
    print(f"Fixing {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Fix unquoted name property in reference objects
    # name: Gozney blog...,
    # Regex: name: \s*([^'"].*?),
    def quote_value(match):
        val = match.group(1).strip()
        # Escape quotes if any
        val = val.replace("'", "\\'")
        return f"name: '{val}',"

    new_content = re.sub(r"name:\s*([^'\"].*?),", quote_value, content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("  -> Fixed.")
    else:
        print("  -> No changes needed.")

fix_file(TARGET)
