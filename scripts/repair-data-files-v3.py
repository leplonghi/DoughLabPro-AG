import os
import re

TARGET_DIR = 'src/data/styles/regions'

def fix_line(line):
    # Fix 1: Broken string termination with comma
    # Pattern: key: 'Started text', continued text'
    # logical check: key: 'VALUE', SOMETHING' where SOMETHING isn't a new key
    # We look for lines that have:  key: ' ... ', ... '
    
    # Heuristic: if a line has `', ` followed by text that does NOT look like a new key definition, 
    # and ends with `'` or `',`, then it's likely a broken string.
    
    # Common keys this happens for
    keys = ['science', 'processScience', 'description', 'science_explanation', 'action']
    
    for key in keys:
        if f"{key}: '" in line:
            # check if we have multiple single quotes pairs
            # Split by key to get the value part
            parts = line.split(f"{key}: '")
            if len(parts) > 1:
                val_part = parts[1]
                # If we see `', ` inside
                if "', " in val_part:
                    # check if it ends with `'` or `',`
                    if val_part.strip().endswith("'") or val_part.strip().endswith("',"):
                        # Replace `', ` with `, `
                        # Be careful not to replace valid object separators.
                        # Valid object separator would be `', nextKey:` or `', }`
                        # If the text after `', ` is just text (no colon nearby), it's safe to merge.
                        
                        # simple replace for now as this dataset seems to have this specific artifact
                        # logic: replace "', " with ", " only if strictly inside the line
                        
                        # Robust way: 
                        # Find the first occurrence of `', `
                        # Check if what follows resembles a key (word followed by colon)
                        # primitive check: is there a colon in the rest of the string?
                        
                        idx = val_part.find("', ")
                        if idx != -1:
                            # check char after
                            remainder = val_part[idx+3:]
                            # if remainder contains ':', likely a new key. If not, likely broken string.
                            # Also check for '}'
                            if ':' not in remainder and '}' not in remainder:
                                fixed_val = val_part.replace("', ", ", ")
                                # Reassemble
                                line = parts[0] + f"{key}: '" + fixed_val

    # Fix 2: Internal quotes for specific words like 'French 'T45
    # e.g. '... American flours, 'French flour ...'
    # This is tricky because it looks like a close quote.
    # regex: , '([A-Z][a-z]+)
    
    if ", 'French" in line:
        line = line.replace(", 'French", ", French")
    if ", 'T45" in line:
        line = line.replace(", 'T45", ", T45")
        
    # Fix 3: escaping madness
    # method: '\\'baker_percentage\', // Low hydration standard method'
    if "method: '\\'baker_" in line:
         line = "            method: 'baker_percentage', // Low hydration standard method\n"

    # Fix 4: empty value with comma quote
    # requiresYeast: ',
    if "requiresYeast: '," in line:
        line = line.replace("requiresYeast: ',", "requiresYeast: true,")
    
    # Fix 5: allowOil: ',
    if "allowOil: '," in line:
        line = line.replace("allowOil: ',", "allowOil: true,")

    # Fix 6: fermentationTime: '\\'12-24h\', // Cold ferment helps nooks'
    if "fermentationTime: '\\'" in line:
        line = line.replace("fermentationTime: '\\'", "fermentationTime: '").replace("\',", "',")
        
    return line

def process_file(filepath):
    print(f"Fixing {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    new_lines = []
    changes = 0
    for line in lines:
        original = line
        fixed = fix_line(original)
        if fixed != original:
            changes += 1
        new_lines.append(fixed)
        
    if changes > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f"  -> Fixed {changes} lines.")
    else:
        print("  -> No changes.")

if __name__ == '__main__':
    for filename in os.listdir(TARGET_DIR):
        if filename.endswith('.ts'):
            process_file(os.path.join(TARGET_DIR, filename))
