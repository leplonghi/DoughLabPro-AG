import os

def fix_file(filepath, replacements):
    print(f"Fixing {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content
    for target, replacement in replacements:
        if target in new_content:
            print(f"  Found target: {repr(target)}")
            new_content = new_content.replace(target, replacement)
        else:
            print(f"  Target NOT found: {repr(target)}")
            
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("  -> Saved changes.")
    else:
        print("  -> No changes.")

# Europe replacements
europe_replacements = [
    (r"method: '\\'baker_percentage\',", "method: 'baker_percentage',"),
    (r"fermentationTime: '\\'12-24h\',", "fermentationTime: '12-24h',"),
     # Try alternative if above fails (maybe different escaping in view)
    (r"method: '\'baker_percentage\',", "method: 'baker_percentage',"),
    (r"fermentationTime: '\'12-24h\',", "fermentationTime: '12-24h',"),
]

fix_file('src/data/styles/regions/europe.ts', europe_replacements)

# Latam replacements
latam_replacements = [
    (r"fermentationTime: '\\'N/A\',", "fermentationTime: 'N/A',"),
    (r"requiresSteam: ',", "requiresSteam: true,"),
    (r"dough.''", "dough.'"),
    (r"structure.''", "structure.'"),
    # Alternatives
    (r"fermentationTime: '\'N/A\',", "fermentationTime: 'N/A',"),
]

fix_file('src/data/styles/regions/latam.ts', latam_replacements)
