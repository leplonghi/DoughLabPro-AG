import os

TARGET_DIR = 'src/data/styles/regions'

def fix_file(filepath):
    print(f"Polishing {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Global unescape of double quotes
    content = content.replace('\\"', '"')
    
    # Specific italy.ts fixes
    content = content.replace("'Naples', Campania'", "'Naples, Campania'")
    content = content.replace("60',", "60,") # hydration
    content = content.replace("450',", "450,") # ovenTemp
    
    # Fix broken object/array starts if regex missed
    content = content.replace("examples: ['", "examples: [")
    content = content.replace("base_formula: ['", "base_formula: [")
    content = content.replace("specs: {'", "specs: {")
    content = content.replace("scientificProfile: {'", "scientificProfile: {")
    content = content.replace("flourRheology: {'", "flourRheology: {")
    
    # Fix 24h", -> "24h", (Already fixed by \\" -> ")
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("  -> Done.")

for filename in os.listdir(TARGET_DIR):
    if filename.endswith('.ts'):
        fix_file(os.path.join(TARGET_DIR, filename))
