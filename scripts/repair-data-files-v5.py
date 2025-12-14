import os
import re

TARGET_DIR = 'src/data/styles/regions'

def process_file(filepath):
    print(f"Processing {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    new_lines = []
    changes = 0
    
    for line in lines:
        original = line
        
        # Latam Line 25 specific fix
        if "fermentationTime" in line and "N/A" in line and "\\'" in line:
             # Fix the broken escaping
             # Pattern: fermentationTime: \'N/A\', //
             # Replace with: fermentationTime: 'N/A', //
             line = line.replace("\\'N/A\\',", "'N/A',")
             
        # Europe Line 227 specific fix
        if "method:" in line and "baker_percentage" in line and "\\'" in line:
            # Fix method: \'baker_percentage\',
            line = line.replace("\\'baker_percentage\\',", "'baker_percentage',")

        # Europe Line 326 specific fix
        # fermentationTime: \'12-24h\',
        if "fermentationTime" in line and "12-24h" in line and "\\'" in line:
            line = line.replace("\\'12-24h\\',", "'12-24h',")
            
        # Latam Line 116 requiresSteam: ',
        if "requiresSteam: '," in line:
            line = line.replace("requiresSteam: ',", "requiresSteam: true,")

        # Generic escapes fix if missed
        if ": '\\'" in line and "\\'," in line:
            # key: \'val\', -> key: 'val',
            # Be careful with regex
            line = re.sub(r":\s*'\\'(.*)\\'\s*,", r": '\1',", line)

        # Fix double single quotes at end
        if line.strip().endswith("'',"):
            line = line.replace("'',", "',")

        if line != original:
            print(f"Fixed: {original.strip()} -> {line.strip()}")
            changes += 1
            
        new_lines.append(line)
        
    if changes > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f"  -> Saved {changes} changes.")
    else:
        print("  -> No matched changes.")

if __name__ == '__main__':
    for filename in os.listdir(TARGET_DIR):
        if filename.endswith('.ts'):
            process_file(os.path.join(TARGET_DIR, filename))
