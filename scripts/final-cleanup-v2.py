import os
import re

TARGET_DIR = 'src/data/styles/regions'

def fix_file(filepath):
    print(f"Final Repair {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Restore Array/Object start
    content = re.sub(r":\s*'\[", ": [", content)
    content = re.sub(r":\s*'\{", ": {", content)
    
    # 2. Fix id: \" -> id: "
    content = re.sub(r': \\"', ': "', content)
    
    # 3. Fix history_context: ' " -> history_context: "
    content = re.sub(r": ' \"", ': "', content)
    
    # 3b. Fix generic double quote start: : ' "
    # Already covered?
    
    # 4. Fix subRegion: ' \' -> subRegion: '
    content = re.sub(r": ' \\'", ": '", content)
    
    # 5. Fix tags start: ['High
    # It might see [\'High
    content = re.sub(r"\[\\'", "['", content)
    
    # 6. Fix tags end: High heat 2\'',
    # We replace \'', with ',
    content = re.sub(r"\\'',", "',", content)
    
    # 7. Fix tags last item: Wood fired\'' (before ])
    # We replace \'' with '
    content = re.sub(r"\\''\]", "']", content)
    
    # 8. Type annotations: 'Type['] -> Type[]
    # My previous script ran this. But checking again.
    content = re.sub(r": '(\w+)\[\'\]", r": \1[]", content)
    
    # 9. base_formula: ['
    # Handled by #1 (': \[' matches ': [')?
    # No. ' [' vs '['.
    # Regex 1 matches `:\s*'\[`. Coverage good.
    
    # 10. hydration: { ideal: ... (inside obj).
    # Content has ' {' ?
    # Regex 1 matches `:\s*'{`. Coverge good.
    
    # 11. Fix trailing ' ' in quotes?
    # e.g. history_context ... oven."
    # If it was ' "..."', we made it "...". Trailing quote?
    # Regex 3 matches : ' " and replaces with : ".
    # But does it remove the trailing single quote?
    # : ' "Value"'
    # Regex `r": ' \""` matches start.
    # It leaves `Value"'`.
    # So we end up with `"Value"'`. THIS IS BAD.
    # We must match the trailing `'` too!
    
    # Updated Regex 3: : ' "..."' -> : "..."
    content = re.sub(r": ' \"([^\"]*)\"'", r": \"\1\"", content)
    
    # Updated Regex 4: : ' \'...\'' -> : '...'
    # Handle the subRegion mess `' \'Naples', Campania'`
    # Maybe regex replace ` ' \'` with `' `? 
    # Or just brute force the known pattern for subRegion lines?
    # line by line fix might be safer for subRegion.
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    # Second pass for line-based fixes if regex misses (e.g. subRegion)
    # Re-reading is easier logic
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    final_lines = []
    for line in lines:
        # Fix subRegion specific mess
        if "subRegion: ' \\'" in line:
            # subRegion: ' \'Naples', Campania',
            # We want subRegion: 'Naples, Campania',
            # Replace ' \' with '
            line = line.replace("subRegion: ' \\'", "subRegion: '")
            # Replace ', Campania', with ', Campania',?
            # Replace ' (trailing) with nothing?
            # The line likely ends with `',`.
            # If it was `' \'...\'',`, we effectively have `...''`.
            # Let's clean double single quotes `''` -> `'`
            line = line.replace("''", "'")
            
        # Fix history_context trailing single quote if Regex failed
        if 'history_context: "' in line and line.strip().endswith("',"):
             line = line.replace("',", ",")
             
        final_lines.append(line)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.writelines(final_lines)

    print("  -> Done.")

for filename in os.listdir(TARGET_DIR):
    if filename.endswith('.ts'):
        fix_file(os.path.join(TARGET_DIR, filename))
