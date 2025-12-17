import json
import re
import os

# Read styles.json
styles_json_path = r'c:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\public\locales\en\styles.json'

with open(styles_json_path, 'r', encoding='utf-8') as f:
    styles_data = json.load(f)

# Find all keys ending with '_name' and their values
name_keys = {}
for key, value in styles_data.items():
    if key.endswith('_name'):
        name_keys[key] = value

print(f"Total '_name' keys: {len(name_keys)}")
print("\nKeys with placeholder values (containing 'name' in value):")
for key, value in sorted(name_keys.items()):
    if 'name' in value.lower():
        print(f"  {key}: {value}")

print("\n\nAll '_name' keys:")
for key, value in sorted(name_keys.items())[:20]:
    print(f"  {key}: {value}")
