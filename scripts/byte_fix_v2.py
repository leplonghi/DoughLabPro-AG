import os

def check_and_fix(filepath):
    print(f"Checking {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    new_lines = []
    changes = 0
    
    for line in lines:
        original = line
        
        # Check specific broken lines by content content
        if "method:" in line and "baker_percentage" in line:
             # Fix method escaping if present
             if "\\'" in line: # Backslash + Quote
                 print(f"Found suspect line (method): {repr(line)}")
                 # We want to remove the backslash before the quote
                 # But handle if it's start or end
                 # Case: 'baker... \'
                 new_line = line.replace("\\'", "'")
                 # Check if we removed too many backslashes (e.g. at start)
                 # method: '\'baker...
                 # result: method: ''baker... -> method: 'baker...
                 # This simple replace is probably fine for these specific strings
                 new_lines.append(new_line)
                 changes += 1
                 continue

        if "fermentationTime:" in line and ("N/A" in line or "12-24h" in line):
            if "\\'" in line:
                print(f"Found suspect line (fermentationTime): {repr(line)}")
                new_line = line.replace("\\'", "'")
                new_lines.append(new_line)
                changes += 1
                continue
                
        if "requiresSteam:" in line and "'," in line:
            # requiresSteam: ',
            # check if just ',
            val_part = line.split(":", 1)[1].strip()
            if val_part == "',":
                print(f"Found suspect line (requiresSteam): {repr(line)}")
                new_line = line.replace("',", "true,")
                new_lines.append(new_line)
                changes += 1
                continue

        # Double Single Quote Fix
        if line.strip().endswith("'',"):
            print(f"Found suspect line (double quote): {repr(line)}")
            new_line = line.replace("'',", "',")
            new_lines.append(new_line)
            changes += 1
            continue

        new_lines.append(line)
            
    if changes > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f"  -> Saved {changes} changes.")
    else:
        print("  -> No changes.")

check_and_fix('src/data/styles/regions/europe.ts')
check_and_fix('src/data/styles/regions/latam.ts')
