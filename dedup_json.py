import json
import os

file_path = r'c:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\public\locales\en\styles.json'

with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Since JSON with duplicate keys is technically invalid for json.load() (it usually picks the last one)
# but we want to be sure what we are doing.
# json.loads() in Python 3.7+ preserves the last key by default.

try:
    data = json.loads(text)
    print(f"Successfully loaded JSON. Total keys: {len(data)}")
    
    # Write it back out. This will naturally deduplicate by keeping the LAST occurrence.
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    print("Deduplicated and rewrote styles.json successfully.")
except Exception as e:
    print(f"Error: {e}")
