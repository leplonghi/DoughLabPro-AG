import os
import re

TARGET_DIR = 'src/data/styles/regions'

def fix_file(filepath):
    print(f"Fixing splits in {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    new_lines = []
    changes = 0
    for line in lines:
        original = line
        # 1. Fix split strings: key: 'Str1', 'Str2',
        # Matches: key: '...', '...',
        match = re.match(r"^(\s*\w+:\s*)'([^']+)', '([^']+)',\s*$", line)
        if match:
             # Merge with space or comma?
             # description: '... bread', 'characterized ...',
             # Original likely: '... bread, characterized ...'
             # So use comma space? Or just whatever matches.
             # Wait. The comma between ' and ' was part of original string?
             # 'Str1', 'Str2' -> Original 'Str1, Str2'
             prefix = match.group(1)
             p1 = match.group(2)
             p2 = match.group(3)
             line = f"{prefix}'{p1}, {p2}',\n"
             changes += 1
             
        # 2. Fix references garbage: references: [Wheat ...']',
        if 'references: [' in line and "']" in line:
            # Dangerous to parse. Just reset to empty.
            if not 'source:' in line: # If it's validish, keep it.
                line = re.sub(r'references: \[.*', 'references: [],', line)
                changes += 1

        # 3. Fix process: action: 'Str1', 'Str2',
        # Also split string.
        # Logic 1 handles "key: '...', '...',".
        # But if it has tags?
        # tags: ['A', 'B'], matches logic 1 key='tags'.
        # We MUST NOT merge tags!
        # tags expects array `string[]`.
        # description expects `string`.
        # So we only merge if key is in [description, history_context, action, science, notes, tip, explanation, answer].
        # And NOT tags, base_formula, etc.
        
        target_keys = ['description', 'history_context', 'action', 'science', 'notes', 'tip', 'explanation', 'answer', 'scenerio', 'difference', 'why_choose_this']
        
        # Refined regex check
        # Check if line starts with specific key
        is_target = False
        for k in target_keys:
            if re.search(r'\b' + k + r':', line):
                is_target = True
                break
        
        if is_target and "', '" in line:
             # It implies split string.
             # e.g. action: 'Cook...', 'Cool.',
             # Merge pairs
             line = line.replace("', '", ", ")
             changes += 1

        new_lines.append(line)
        
    if changes > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f"  -> Fixed {changes} lines.")
    else:
        print("  -> No changes.")

for filename in os.listdir(TARGET_DIR):
    if filename.endswith('.ts'):
        fix_file(os.path.join(TARGET_DIR, filename))
