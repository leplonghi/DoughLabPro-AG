import os
import re

TARGET_DIR = 'src/data/styles/regions'

def needs_quotes(val):
    val = val.strip()
    if not val:
        return False
        
    # Numbers (integer, float)
    if re.match(r'^-?\d+(\.\d+)?$', val):
        return False
    
    # Booleans / null
    if val in ['true', 'false', 'null', 'undefined']:
        return False
        
    # Enums / Object access (contains dot)
    if '.' in val: # e.g. RecipeStyle.NEAPOLITAN
        return False
        
    # Identifier-like (alphanumeric + underscore + $). 
    # If it's a valid identifier, it COULD be a variable.
    # But "Water", "Salt", "Medium" in these files are likely Strings.
    # However, to be safe, we ONLY quote if it has spaces or odd chars.
    # "Water 3" -> Has space -> Quote.
    # "W280320" -> No space. -> Identifier? -> If unquoted, it's a variable reference.
    # But W280320 is NOT defined. It's a string code.
    # So we should quote it.
    
    # Heuristic: If it's not a number, boolean, or dot-property, quote it.
    # Unless it matches a known import? "RecipeStyle", "DoughStyle".
    # If val is "RecipeStyle" -> Don't quote.
    # If val is "Type" -> Don't quote?
    
    if val in ['RecipeStyle', 'DoughStyle']:
        return False
        
    return True

def fix_file(filepath):
    print(f"Processing {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Regex to find unquoted values in object properties
    # key: value
    # We match key, colon, whitespace.
    # Then NEGATIVE lookahead for quotes ["'`].
    # Then capture value characters until , or } or ] or newline.
    # We exclude { [ to avoid matching start of objects/arrays.
    
    # We use re.sub with callback.
    # We must be careful about comments? Hopefully none inline.
    
    pattern = re.compile(r'(\w+):\s*(?!["\'`\[\{])([^,}\]\n]+?)(?=\s*[,}\]\n])')

    def replacer(match):
        key = match.group(1)
        val = match.group(2)
        
        if needs_quotes(val):
            # Escape quotes
            val_esc = val.replace("'", "\\'")
            return f"{key}: '{val_esc}'"
        
        return match.group(0) # No change

    new_content = pattern.sub(replacer, content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"  -> Fixed unquoted values.")
    else:
        print(f"  -> No changes.")

for filename in os.listdir(TARGET_DIR):
    if filename.endswith('.ts'):
        fix_file(os.path.join(TARGET_DIR, filename))
