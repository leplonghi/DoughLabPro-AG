import os
import re

TARGET_DIR = 'src/data/styles/regions'

def fix_line(line):
    original = line
    
    # 1. Remove trailing single quote after ]
    # e.g. salt: [2.0, 2.5']', -> salt: [2.0, 2.5'],
    # Matches ]', and replaces with ],
    line = line.replace("]',", "],")
    
    # 2. Remove trailing single quote after ] w/o comma (if applicable)
    # line.replace("]'", "]") ? Warning: Might match inside string.
    # Safe if anchored to end of line?
    line = re.sub(r"\]'\s*$", "]", line)
    
    # 3. Remove trailing single quote after "
    # e.g. description: "..."', -> description: "...",
    line = line.replace('"\',', '",')
    line = re.sub(r"\"'\s*$", '"', line)
    
    # 4. Remove quote on numbers inside array end
    # e.g. 2.5'] -> 2.5]
    # Regex: (\d)'\] -> \1]
    line = re.sub(r"(\d)'\]", r"\1]", line)
    
    # 5. Fix references garbage: }]', -> }],
    line = line.replace("}]',", "}],")
    
    # 6. Fix "A thin', rectangular" -> "A thin, rectangular"
    # This is a heuristic. If we see ', inside a string line that starts with "
    # We should probably remove the '
    # But ONLY if it looks like a join artifact.
    # e.g. "', " -> ", "
    if '": "' in line or ": \"" in line: # It is a double quoted property
         line = line.replace("', ", ", ")
         
    # 7. Check for unmatched single quote at VERY end of line
    # If line ends with ', and it's not a string property?
    # e.g. difficulty: 'Easy 12',
    # That is valid.
    # What about difficulty: 'Easy 12'', (Double quote)?
    # Replace '' with '
    line = line.replace("'',", "',")
    
    return line

def process_file(filepath):
    print(f"Emergency fixing {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    new_lines = []
    changes = 0
    for line in lines:
        fixed = fix_line(line)
        if fixed != line:
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
