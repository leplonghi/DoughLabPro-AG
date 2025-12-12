import os
import re

TARGET_DIR = 'src/data/styles/regions'

def fix_file(filepath):
    print(f"Processing {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find tags array: tags: [ ... ]
    # We use re.DOTALL to handle multiline arrays
    pattern = re.compile(r"tags:\s*\[(.*?)\]", re.DOTALL)

    def replacer(match):
        inner_content = match.group(1)
        # Split by comma
        items = inner_content.split(',')
        new_items = []
        for item in items:
            item = item.strip()
            if not item:
                continue
            
            # Check if already quoted
            if item.startswith("'") or item.startswith('"') or item.startswith("`"):
                new_items.append(item)
                continue
                
            # Check if it looks like a variable/enum (no spaces, starts with Uppercase usually, or has dot)
            # But the error showed "Steam 6" which has space.
            # "Pocket" has no space.
            # We assume tags ARE strings.
            # But wait, what if there ARE enums? e.g. StyleTag.STEAM ?
            # If the code was `tags: [StyleTag.STEAM]`, quoting it `'StyleTag.STEAM'` breaks logic?
            # But looking at screenshot: `tags: [Steam 6, Pocket...]`. "Steam 6" is definitely not an enum member.
            # It's highly likely they are raw strings that lost quotes.
            
            # Additional check: If item contains space, it MUST be a string (or math expression, improbable here).
            # If item is alphanumeric, it could be variable. But in these data files, tags are strings.
            
            # Quote it !
            new_items.append(f"'{item}'")
            
        return f"tags: [{', '.join(new_items)}]"

    new_content = pattern.sub(replacer, content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"  -> Fixed tags in {filepath}")
    else:
        print(f"  -> No changes needed")

for filename in os.listdir(TARGET_DIR):
    if filename.endswith('.ts'):
        fix_file(os.path.join(TARGET_DIR, filename))
