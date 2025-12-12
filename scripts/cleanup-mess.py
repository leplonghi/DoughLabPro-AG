import os
import re

TARGET_DIR = 'src/data/styles/regions'

def fix_file(filepath):
    print(f"Repairing {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Repair regexes
    # 1. Type annotations: 'Type['] -> Type[]
    # The [ might have been quoted as ['
    content = re.sub(r":\s*'(\w+)\[\'\]\s*=\s*\[", r": \1[] = [", content)
    
    # 2. Objects/Arrays start: ' {' -> {   or   ' [' -> [
    # Handle optional space inside quote
    content = re.sub(r":\s*' ?([{\[])", r": \1", content)
    
    # 3. Double double quotes: ' "string"' -> "string"
    content = re.sub(r":\s*' ?\"([^\"]*)\"'", r": \"\1\"", content)
    
    # 4. Double single quotes: ' 'string'' -> 'string'
    # Note: Regex parsing might be tricky with nested quotes.
    # Pattern: : ' 'String''
    content = re.sub(r":\s*' ?'([^']*)''", r": '\1'", content)
    
    # 5. Fix id: ' "string"' -> id: "string" (Captured in #3)
    
    # 6. Fix tags: ' [' -> tags: [
    # Captured in #2.
    
    # 7. Check strange array syntax: tags: ' [\'Str\'', 'Str']
    # If the first bracket was quoted: ' ['
    # Then subsequent items might be fine.
    
    # 8. category: ' \'Pizza\'' -> category: 'Pizza'
    # This is: : ' \'String\''
    # Regex #4 expects ' 'String''.
    # If it is ' \'String\'', it means escaped quote.
    content = re.sub(r":\s*' ?\\'([^']*)\\\''", r": '\1'", content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("  -> Done.")

for filename in os.listdir(TARGET_DIR):
    if filename.endswith('.ts'):
        fix_file(os.path.join(TARGET_DIR, filename))
