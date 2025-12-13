import os
import re

TARGET_DIR = 'src/data/styles/regions'

def fix_line(line):
    keys = ['requiresYeast', 'requiresSteam', 'allowOil', 'isPro', 'requiresSourdough']
    key_pattern = "(" + "|".join(keys) + ")"
    
    # Regex to find quoted booleans
    # key: 'true...' or key: "true..."
    # strict start
    match = re.match(r"^\s*" + key_pattern + r":\s*['\"](true|false)(.*)['\"]{1,2}(,?)\s*$", line.strip())
    # Note: line.strip() removes trailing newline.
    # The regex needs to handle the content after true/false which might include // comment
    
    # Using search instead of match for easier indentation handling
    match = re.search(r"(\s*" + key_pattern + r":\s*)(['\"])(true|false)(.*?)(['\"]{1,2})(,?)(.*)", line)
    
    if match:
        prefix = match.group(1)
        quote_start = match.group(2)
        bool_val = match.group(3)
        rest_content = match.group(4) # might be " // comment" or garbage
        quote_end = match.group(5)
        comma = match.group(6)
        trailing = match.group(7) # comments after the quotes?
        
        # We want to unquote.
        # If rest_content contains //, we need to ensure comma is BEFORE //
        
        # Clean rest_content
        # It might contain the comment itself " // comment" (still inside the quote string in the file)
        
        comment = ""
        if "//" in rest_content:
            parts = rest_content.split("//", 1)
            # parts[0] is garbage before comment (should be empty usually)
            # parts[1] is comment
            comment = " //" + parts[1]
        elif "//" in trailing:
            comment = trailing
            
        # If there was no comma matched (it might have been consumed by rest_content or missing), add one.
        
        new_line = f"{prefix}{bool_val},{comment}\n"
        return new_line

    return line

def process_file(filepath):
    print(f"Fixing booleans in {filepath}...")
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

for filename in os.listdir(TARGET_DIR):
    if filename.endswith('.ts'):
        process_file(os.path.join(TARGET_DIR, filename))
