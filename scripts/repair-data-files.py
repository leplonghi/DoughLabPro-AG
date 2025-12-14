import os
import re

TARGET_DIR = 'src/data/styles/regions'
LEARN_FILE = 'src/learn-constants.ts'

def fix_line(line):
    # 1. Fix array of unquoted strings (Generic)
    keys = ['recommendedUse', 'canonical', 'modern', 'regional', 'tags', 'references']
    for key in keys:
        if re.search(r'\b' + key + r':\s*\[', line):
            match = re.search(r'\[(.*)\]', line)
            if match:
                content = match.group(1)
                if not content.strip(): continue
                items = [i.strip() for i in content.split(',')]
                quoted_items = []
                for item in items:
                    if not item: continue
                    # Quote if not quoted
                    if not ((item.startswith("'") and item.endswith("'")) or (item.startswith('"') and item.endswith('"'))):
                         item = f"'{item}'"
                    quoted_items.append(item)
                line = re.sub(r'\[.*\]', f'[{", ".join(quoted_items)}]', line)

    # 2. Fix base_formula object syntax: { name: 'Water 3, percentage: 60 }', -> { name: 'Water 3', percentage: 60 }
    if "percentage:" in line and "name:" in line:
        # Case: { name: 'Name, percentage: Val }', or similar
        # Regex to capture content between name: and percentage:
        # Expected: { name: 'Name', percentage: Val }
        # Broken: { name: 'Name, percentage: Val }'
        
        # Check for the broken pattern specifically: 
        # ends with }', or }'
        if line.strip().endswith("}',") or line.strip().endswith("}'"):
             # extract name and percentage
             # name: 'foo, percentage: bar }'
             m = re.search(r"name:\s*'(.+),\s*percentage:\s*(.+)\s*\}'", line)
             if m:
                 name_part = m.group(1).strip()
                 pct_part = m.group(2).replace('}', '').strip()
                 # reconstruct
                 # preserve indent?
                 indent = line[:line.find('{')]
                 line = f"{indent}{{ name: '{name_part}', percentage: {pct_part} }},\n"

    # 3. Fix subRegion: 'Naples, 'Campania', -> 'Naples, Campania',
    if "subRegion:" in line:
        m = re.search(r"subRegion:\s*'([^']+),\s*'([^']+)',", line)
        if m:
            line = line.replace(f"'{m.group(1)}, '{m.group(2)}'", f"'{m.group(1)}, {m.group(2)}'")

    # 4. Fix split strings in science/description fields
    # Pattern: key: 'Part 1', Part 2' -> key: "Part 1, Part 2"
    # Keys to watch: science, processScience, description, history_context, explanation, result, correction, answer, intro, why, howTo
    text_keys = ['science', 'processScience', 'description', 'history_context', 'explanation', 'result', 'correction', 'answer', 'intro', 'why', 'howTo']
    
    for key in text_keys:
        if re.search(r'\b' + key + r'\s*:\s*', line):
            # Check if it has internal quotes: 'text', text'
            # Look for: '...', ...'
            if re.search(r"'.*',\s*.*'", line):
                # Try to merge. 
                # e.g. 'text', preventing' -> 'text, preventing'
                # Remove the ', ' sequence if it looks like it's splitting a sentence
                # Heuristic: replace ', ' with ', ' (no change) vs remove ' ?
                # We want to remove the single quotes around the comma.
                # replace: ', ' -> , 
                # caution: don't break valid lists if any... but these fields are usually strings.
                
                # Regex replace: '(\S+)',\s*'(\S+)' -> '\1, \2'? 
                # The text might be longer.
                # Pattern: replace ', ' with , (middle of string)
                # We only do this if the line starts with key: ' and ends with ',
                
                # Check strict start/end to be safe
                # key: '...
                if re.search(r"^\s*" + key + r":\s*'", line):
                    # Replace internal ', ' with , 
                    # use non-greedy matching?
                    
                    # Instead of complex regex, let's just strip the internal quotes if we detect multiple segments
                    # Extract the value part
                    key_part, val_part = line.split(':', 1)
                    val_part = val_part.strip()
                    if val_part.startswith("'") and val_part.endswith("',"):
                        # remove start/end/comma
                        inner = val_part[1:-2] # remove ' and ',
                        # check if it has ', ' inside
                        if "', " in inner or "'," in inner:
                             fixed_inner = inner.replace("', ", ", ").replace("',", ", ")
                             line = f"{key_part}: '{fixed_inner}',\n"
                    elif val_part.startswith("'") and val_part.endswith("'"):
                        # case without trailing comma
                        inner = val_part[1:-1]
                        if "', " in inner or "'," in inner:
                             fixed_inner = inner.replace("', ", ", ").replace("',", ", ")
                             line = f"{key_part}: '{fixed_inner}'\n"

    # 5. Fix allowOil: ', -> allowOil: true,
    if "allowOil: '," in line:
        line = line.replace("allowOil: ',", "allowOil: true,")

    # 6. Fix general garbage at end of lines like }'
    # Only if not handled by #2
    if line.strip().endswith("}'") and "percentage" not in line: 
         line = line.replace("}'", "}")
    if line.strip().endswith("}',") and "percentage" not in line:
         line = line.replace("}',", "},")

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
            # print(f"Change: {original.strip()} -> {fixed.strip()}") 
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
