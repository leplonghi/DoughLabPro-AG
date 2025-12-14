import os

def check_and_fix(filepath):
    print(f"Checking {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    new_lines = []
    changes = 0
    
    for line in lines:
        original = line
        stripped = line.strip()
        
        # 1. requiresSteam: ', -> requiresSteam: true,
        # Check specifically for the broken pattern
        if "requiresSteam:" in line and "'," in line:
            # check if the value part effectively starts with ',
            if ": '," in line.replace(" ", ""): # crude check "requiresSteam:',"
                 print(f"Found broken requiresSteam: {repr(line)}")
                 line = line.replace("',", "true,")
        
        # 2. method: \'baker... escaping using loose check
        if "method:" in line and "baker_percentage" in line:
            if "\\'" in line: 
                print(f"Found broken method escaping: {repr(line)}")
                line = line.replace("\\'", "'")
        
        # 3. fermentationTime: \'... escaping
        if "fermentationTime:" in line and "\\'" in line:
            if "N/A" in line or "12-24h" in line:
                 print(f"Found broken fermentationTime escaping: {repr(line)}")
                 line = line.replace("\\'", "'")

        # 4. Double quotes at end of property
        if stripped.endswith("'',"):
             print(f"Found double quotes at end: {repr(line)}")
             line = line.replace("'',", "',")

        if line != original:
            changes += 1
            
        new_lines.append(line)
        
    if changes > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f"  -> Saved {changes} changes.")
    else:
        print("  -> No changes.")

check_and_fix('src/data/styles/regions/europe.ts')
check_and_fix('src/data/styles/regions/latam.ts')
