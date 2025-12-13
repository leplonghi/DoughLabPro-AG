import os
import re

TARGET_DIR = 'src/data/styles/regions'

def fix_line(line):
    # Fix tags: ['A, 'B'] -> ['A', 'B']
    # Regex: Look for 'Text, 'Text inside brackets?
    # Or just replace ", '" with "', '" inside line if it starts with tags:?
    if 'tags: [' in line:
        # Replace ", '" with "', '"
        # Check if we have 'Text, 'Text
        # Pattern: '([^']+), '([^']+)
        # We want: '$1', '$2'
        # But we must be careful not to break valid stuff.
        # Valid: 'A', 'B'.
        # Broken: 'A, 'B'.
        # The broken one has NO quote after A.
        # So we look for: Quote, Chars, Comma, Space, Quote.
        # r"'([^']+), '
        # Check if the char before comma is NOT a quote.
        line = re.sub(r"'([^']+)(?<!'), '", r"'\1', '", line)
        
        # Also fix trailing garbage in tags like 'Heavy]
        # 'Heavy] -> 'Heavy']
        line = re.sub(r"'([^']+?)(?<!')\]", r"'\1']", line)

    # Fix split strings in properties
    # pattern: key: 'Part1', Part2...
    # We look for: key: 'Part1', (space) Part2
    # The comma is the separator.
    # Exclude tags or arrays.
    keys = ['description', 'history_context', 'processScience', 'science', 'action', 'notes', 'tip', 'explanation', 'difference', 'why_choose_this']
    
    # Construct regex for keys
    key_pattern = r"^\s*(" + "|".join(keys) + r"):\s*"
    
    match = re.match(key_pattern, line)
    if match:
        # Found a target property.
        # Check for the broken pattern: 'Part1', Part2
        # r"'([^']+)',\s*([^']+)"
        # But allow Part2 to contain anything until end of line?
        # And Part2 usually ends with quote+comma if it was a string?
        # The file content in latam.ts line 13 ends with version creates its unique texture.',
        
        # So: key: 'Part1', Part2...End'
        # We want to merge all to "Part1, Part2...End"
        
        # Regex to capture:
        # Group 1: key: 
        # Group 2: First part inside quotes
        # Group 3: The rest (garbage)
        
        # Check if line contains ', (quote comma space) followed by non-quote?
        if "', " in line:
            # Check if text AFTER ', starts with quote?
            # If valid: 'A', 'B' -> starts with '
            # If broken: 'A', B... -> starts with non-quote
            
            parts = line.split("', ")
            if len(parts) > 1:
                # Check parts[1] start
                if not parts[1].strip().startswith("'"):
                    # BROKEN DETECTED
                    # Merge logic
                    # We need to strip the initial ' of parts[0] (after key) and the final ', of the line.
                    # Then double quote the whole thing.
                    
                    # Extract key
                    key_part = match.group(0) # indent + key: 
                    # Get value part
                    value_part = line[len(key_part):].strip()
                    
                    # Value part starts with '
                    # Ends with ', (hopefully)
                    if value_part.startswith("'") and value_part.endswith("',"):
                        inner = value_part[1:-2] # Strip ' and ',
                        # inner is "Part1', Part2...End"
                        # Actually split was at ', 
                        # inner = "Part1', Part2...End"
                        # We want to replace ', ' with ', ' (merge) OR just remove the internal quote?
                        # Original error was splitting a sentence.
                        # "Originating...", uses...
                        # So we want to KEEP the text, remove the internal quote artifact if it's garbage?
                        # Or just wrap in double quotes?
                        
                        # Let's simple wrap in double quotes and escape inner double quotes.
                        # But we must remove the internal ' and split.
                        # The internal was ', '
                        # So just replace ', ' with ', ' ?
                        # No, the broken line has: 'Part1', Part2
                        # The broken line in file is: 'Part1', Part2
                        
                        # Wait, line 13: history_context: 'Part1', uses...
                        # Python readlines() gives us the string as is.
                        # It is literally: key: 'Part1', uses...
                        
                        clean_val = value_part
                        # Remove start '
                        if clean_val.startswith("'"): clean_val = clean_val[1:]
                        # Remove end ',
                        if clean_val.endswith("',"): clean_val = clean_val[:-2]
                        # Remove end ' (if different)
                        elif clean_val.endswith("'"): clean_val = clean_val[:-1]
                        
                        # Now clean_val = "Part1', uses..."
                        # We want "Part1, uses..."
                        # Replace ', ' with ', '
                        clean_val = clean_val.replace("', ", ", ")
                        clean_val = clean_val.replace('", ', ", ")
                        
                        # Escape double quotes
                        clean_val = clean_val.replace('"', '\\"')
                        
                        line = f'{key_part}"{clean_val}",\n'
                        
    return line

def process_file(filepath):
    print(f"Fixing Broken Strings in {filepath}...")
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

for filename in os.listdir(TARGET_DIR):
    if filename.endswith('.ts'):
        process_file(os.path.join(TARGET_DIR, filename))
