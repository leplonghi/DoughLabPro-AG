
import json
import sys
import collections

def dedupe_json(file_path):
    print(f"Processing {file_path}...")
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            # Load as pairs to detect duplicates if needed, but standard load keeps last
            # To preserve order, we can use object_pairs_hook=collections.OrderedDict
            # But standard dict in recent python is ordered.
            # However, standard json.load stops us from seeing if there were duplicates.
            # It just silently keeps the last one.
            # If we want to be sure, we can just load and dump.
            data = json.load(f)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=4, ensure_ascii=False)
        print(f"Successfully deduped {file_path}")
    except Exception as e:
        print(f"Error processing {file_path}: {e}")

if __name__ == "__main__":
    files = [
        r"c:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\public\locales\en\calculator.json",
        r"c:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\public\locales\es\calculator.json",
        r"c:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\public\locales\pt\calculator.json"
    ]
    for fp in files:
        dedupe_json(fp)
