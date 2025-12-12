import os
import re

TARGET_DIR = 'src/data/styles/regions'

def fix_content(content):
    # 1. Fix Assignments: const name: 'Type = {' -> const name: Type = {
    # Handles both = { and = [
    content = re.sub(r":\s*'(\w+)\s*=\s*([{\[])'", r": \1 = \2", content)

    # 2. Fix Object/Array property starts: key: {' or key: ['
    # Handles key: {' and key: ' {' (space)
    content = re.sub(r":\s*'?\s*?([{\[])'", r": \1", content)

    # 3. Fix numbers trailing quote: 70', -> 70,
    content = re.sub(r"(\d+)',", r"\1,", content)
    
    # 4. Fix booleans trailing quote: true', -> true,
    content = re.sub(r"(true|false)',", r"\1,", content)

    # 5. Fix double quotes trailing single quote: "', -> ",
    content = re.sub(r"\"',", r"\",", content)

    # 6. Fix array start with missing quote for first item?
    # e.g. [Clam chowder',
    # We want ['Clam chowder',
    # Match [ followed by non-quote chars, ending in ',
    def fix_array_start(match):
        item = match.group(1)
        # return ['Item',
        return f"['{item}',"
    
    content = re.sub(r"\[\s*([a-zA-Z0-9][^'\"\[]*?)',", fix_array_start, content)
    
    # 7. Fix array item ending with ]
    # e.g. Dungeness crab], -> Dungeness crab'],
    # Only if it looks like text (alphanumeric end).
    content = re.sub(r"([a-zA-Z0-9])\],", r"\1'],", content)
    
    # 8. Fix array item middle? 
    # e.g. Garlic 2',
    # If it was [..., Garlic 2', ...]
    # It should be 'Garlic 2',
    # Match , Space Item ',
    content = re.sub(r",\s*([a-zA-Z0-9][^'\"\[]*?)',", r", '\1',", content)
    
    # 9. Fix generic ' [' -> [
    content = re.sub(r":\s*'\s*\[", ": [", content)
    content = re.sub(r":\s*'\s*\{", ": {", content)

    # 10. Fix 'Type['] -> Type[] (for any remaining)
    content = re.sub(r":\s*'(\w+)\[\'\]", r": \1[]", content)

    return content

def process_file(filepath):
    print(f"Reconstructing {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = fix_content(content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("  -> Modified.")
    else:
        print("  -> No change.")

for filename in os.listdir(TARGET_DIR):
    if filename.endswith('.ts'):
        process_file(os.path.join(TARGET_DIR, filename))
