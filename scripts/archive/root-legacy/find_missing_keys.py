import json
import re
import os

# Read all TypeScript files in regions directory
regions_dir = r'c:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\src\data\styles\regions'
styles_json_path = r'c:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\public\locales\en\styles.json'

# Find all translation keys used in TypeScript files
used_keys = set()
for filename in os.listdir(regions_dir):
    if filename.endswith('.ts'):
        filepath = os.path.join(regions_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            # Find all strings that start with 'styles.'
            matches = re.findall(r"['\"]styles\.([a-z0-9_]+)['\"]", content)
            used_keys.update(matches)

# Read existing keys from styles.json
with open(styles_json_path, 'r', encoding='utf-8') as f:
    styles_data = json.load(f)
    existing_keys = set(styles_data.keys())

# Find missing keys
missing_keys = used_keys - existing_keys

print(f"Total keys used: {len(used_keys)}")
print(f"Existing keys: {len(existing_keys)}")
print(f"Missing keys: {len(missing_keys)}")
print("\nMissing keys (sorted):")
for key in sorted(missing_keys):
    print(f"  - {key}")
