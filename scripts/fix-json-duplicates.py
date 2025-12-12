import json
import sys
from collections import OrderedDict

def remove_duplicates(file_path):
    """Remove duplicate keys from JSON file, keeping the last occurrence"""
    print(f"Processing: {file_path}")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Parse JSON
    data = json.loads(content)
    
    # Count duplicates before
    def count_keys(obj, path=""):
        count = 0
        seen = set()
        if isinstance(obj, dict):
            for key in obj.keys():
                full_key = f"{path}.{key}" if path else key
                if key in seen:
                    count += 1
                    print(f"  Found duplicate: {full_key}")
                seen.add(key)
                count += count_keys(obj[key], full_key)
        return count
    
    duplicates = count_keys(data)
    
    if duplicates == 0:
        print("  ✅ No duplicates found!")
        return
    
    print(f"  Found {duplicates} duplicate(s)")
    
    # Remove duplicates (JSON.loads already does this by keeping last occurrence)
    # Just re-save the file
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    print(f"  ✅ Fixed! Saved to {file_path}")

if __name__ == "__main__":
    files = [
        "public/locales/en/translation.json",
        "public/locales/pt/translation.json",
        "public/locales/es/translation.json"
    ]
    
    for file_path in files:
        try:
            remove_duplicates(file_path)
        except Exception as e:
            print(f"  ❌ Error: {e}")
        print()
