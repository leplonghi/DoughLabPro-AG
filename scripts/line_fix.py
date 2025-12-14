import os

def fix_line_at_index(filepath, line_index, expected_part, new_line_content):
    print(f"Checking {filepath} at line {line_index+1}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    if line_index < len(lines):
        current_line = lines[line_index]
        if expected_part in current_line:
            print(f"  Found matching line: {repr(current_line)}")
            lines[line_index] = new_line_content + "\n"
            print(f"  Replaced with: {repr(lines[line_index])}")
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.writelines(lines)
            print("  -> Saved.")
        else:
            print(f"  Target mismatch at line {line_index+1}. Content: {repr(current_line)}")
    else:
        print(f"  Line index {line_index} out of range.")

# Latam 116: requiresSteam
fix_line_at_index('src/data/styles/regions/latam.ts', 115, "requiresSteam:", "            requiresSteam: true,")

# Europe 227: method
fix_line_at_index('src/data/styles/regions/europe.ts', 226, "method:", "            method: 'baker_percentage', // Low hydration standard method")

# Europe 326: fermentationTime
fix_line_at_index('src/data/styles/regions/europe.ts', 325, "fermentationTime:", "            fermentationTime: '12-24h', // Cold ferment helps nooks")
