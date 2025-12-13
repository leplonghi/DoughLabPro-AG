import os
import re

TARGET_DIR = 'src/data/styles/regions'
LEARN_FILE = 'src/learn-constants.ts'

def fix_line(line):
    # Fix array of unquoted strings often used in pairings
    # keys: recommendedUse, canonical, modern, regional
    keys = ['recommendedUse', 'canonical', 'modern', 'regional']
    
    # Check if line starts with key
    # regex: ^\s*(key):\s*\[(.+)\]
    
    for key in keys:
        if re.search(r'\b' + key + r':\s*\[', line):
            # Extract content inside brackets
            match = re.search(r'\[(.*)\]', line)
            if match:
                content = match.group(1)
                if not content.strip(): continue
                
                # Split by comma
                items = [i.strip() for i in content.split(',')]
                quoted_items = []
                for item in items:
                    # If item is invalid (empty), skip
                    if not item: continue
                    # Quote if not quoted
                    if not (item.startswith("'") or item.startswith('"')):
                        # handle potential internal garbage
                        # item = Classic tomato garlic 2
                        # just quote it
                        item = f"'{item}'"
                    quoted_items.append(item)
                
                # Reconstruct line
                line = re.sub(r'\[.*\]', f'[{", ".join(quoted_items)}]', line)

    # Re-run the junk fix logic from before for safety? 
    # (The previous run fixed 28 lines, so it works, but adding it here keeps it all in one script if needed.
    # But for now let's just focus on the array fix + specific learn-constants fix).
    return line

def process_file(filepath):
    print(f"Fixing arrays in {filepath}...")
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
        
def fix_learn_constants():
    print(f"Fixing {LEARN_FILE}...")
    if not os.path.exists(LEARN_FILE):
        return
        
    with open(LEARN_FILE, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Fix the specific broken line: name: '\'King ... \'',
    # Replace with: name: 'King ... ',
    
    # Regex for '\' at start of string value?
    # name: '\'
    
    def repl(m):
        return "name: 'King Arthur Baking – Baker\\'s Percentage',"
        
    new_content = re.sub(r"name:\s*'\\'King Arthur.*',", repl, content)
    
    # Also fix general case of name: '\' ... \''
    # regex: name: '\\'(.+?)\\''
    new_content = re.sub(r"name:\s*'\\'(.+?)\\'',", r"name: '\1',", new_content)
    
    if new_content != content:
        with open(LEARN_FILE, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("  -> Fixed learn constants.")
    else:
        print("  -> No changes in learn constants.")

for filename in os.listdir(TARGET_DIR):
    if filename.endswith('.ts'):
        process_file(os.path.join(TARGET_DIR, filename))
        
fix_learn_constants()
