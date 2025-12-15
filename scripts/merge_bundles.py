
import json
import os

locale_dir = r"c:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\public\locales"

bundles = {
    'en': r"c:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\translations_bundle_en.json",
    'es': r"c:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\translations_bundle_es.json",
    'pt': r"c:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\translations_bundle_pt.json"
}

def merge_json(target_path, source_path):
    print(f"Merging {source_path} into {target_path}...")
    try:
        with open(target_path, 'r', encoding='utf-8') as f:
            target_data = json.load(f)
    except FileNotFoundError:
        target_data = {}
    
    with open(source_path, 'r', encoding='utf-8') as f:
        source_data = json.load(f)
        
    # Update target with source
    target_data.update(source_data)
    
    # Sort keys for consistent diffs
    # target_data = dict(sorted(target_data.items())) # Optional: sort keys
    
    with open(target_path, 'w', encoding='utf-8') as f:
        json.dump(target_data, f, indent=4, ensure_ascii=False)
    print(f"Success.")

for lang, bundle_path in bundles.items():
    target_path = os.path.join(locale_dir, lang, "calculator.json")
    merge_json(target_path, bundle_path)
