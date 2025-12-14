import os
import re

TARGET_DIR = 'src/data/styles/regions'

def fix_line(line):
    # Fix 1: Double single quotes at end of property
    # e.g. explanation: '... dot.'' -> '... dot.'
    if line.strip().endswith("'',") or line.strip().endswith("''"):
         line = line.replace("'',", "',").replace("''", "'")

    # Fix 2: fermentationTime escaping madness
    # fermentationTime: '\\'12-24h\', // ...'
    if "fermentationTime: '\\'" in line:
        line = line.replace("fermentationTime: '\\'", "fermentationTime: '").replace("\',", "',")
        
    # Fix 3: method escaping
    # method: '\\'baker_percentage\',
    if "method: '\\'baker_" in line:
        line = "            method: 'baker_percentage', // Low hydration standard method\n"
        
    # Fix 4: requiresSteam: ', -> requiresSteam: true,
    # Context: if escaping or empty. 
    if "requiresSteam: '," in line:
        line = line.replace("requiresSteam: ',", "requiresSteam: true,")
        
    # Fix 5: requiresYeast: ', -> requiresYeast: true,
    if "requiresYeast: '," in line:
        line = line.replace("requiresYeast: ',", "requiresYeast: true,")
        
    # Fix 6: fermentationTime: '\\'N/A\',
    if "fermentationTime: '\\'N/A\'," in line:
        line = line.replace("fermentationTime: '\\'N/A\',", "fermentationTime: 'N/A',")
    
    # Fix 7: allowOil: ',
    if "allowOil: '," in line:
         line = line.replace("allowOil: ',", "allowOil: true,")

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
