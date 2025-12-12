import os
import re

TARGET_DIR = 'src/data/styles/regions'

def fix_line(line):
    # 1. Unquote numbers at end of array: 78'] -> 78]
    # Be careful not to unquote strings ending in digits if they start with quote?
    # But [70, 78'] has NO start quote for 78.
    # So if we match `(\s|\[)(\d+)'\]`, we replace with `\1\2]`.
    line = re.sub(r"(\s|\[)(\d+)'\]", r"\1\2]", line)
    
    # 2. Unquote booleans at end: true'] -> true]
    line = re.sub(r"(\s|\[)(true|false)'\]", r"\1\2]", line)
    
    # 3. Check for unbalanced single quotes
    # Ignore comments //
    code_part = line.split('//')[0]
    
    # Count quotes (naively)
    # Don't count escaped quotes
    quotes = code_part.replace("\\'", "")
    q_count = quotes.count("'")
    
    if q_count % 2 == 1:
        # Odd number of quotes. Missing closing quote?
        # Check if line ends with , or ; or nothing
        stripped = code_part.rstrip()
        
        # Heuristic: If it has "name: 'Value," (comma at end), insert ' before comma.
        if stripped.endswith(','):
            # Replace last char with ',
            # But ensure we don't break "tags: ['val'," -> 2 quotes.
            # If tags: ['val', count is 2. Even.
            # If name: 'Val, count is 1. Odd.
            # So append ' before comma.
            last_comma_index = line.rfind(',')
            if last_comma_index != -1:
                line = line[:last_comma_index] + "'" + line[last_comma_index:]
        elif stripped.endswith('{') or stripped.endswith('['):
             # e.g. 'Type = {
             # We fixed this with regex previously.
             pass
        else:
             # Just append ' to end of code?
             # e.g. difficulty: 'Hard
             # Append '
             # But preserving trailing newline?
             # line includes newline usually in buffer? No, iterate lines.
             if line.endswith('\n'):
                 line = line[:-1] + "'\n"
             else:
                 line = line + "'"
                 
    # 4. Remove backslashes before quotes if they are double?
    # e.g. \" -> "
    line = line.replace('\\"', '"')
    
    # 5. Fix tags: ["sour", -> remove backslash if present
    # If "sour\",
    # Can check for \",
    line = line.replace('\\",', '",')
    
    return line

def process_file(filepath):
    print(f"Restoring {filepath}...")
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
