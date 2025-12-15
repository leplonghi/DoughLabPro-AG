import os
import json

def load_json(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def flatten(data, prefix=""):
    items = {}
    for k, v in data.items():
        key = f"{prefix}.{k}" if prefix else k
        if isinstance(v, dict):
            items.update(flatten(v, key))
        else:
            items[key] = v
    return items

def get_untranslated(base_dir, ns, lang):
    en_path = os.path.join(base_dir, 'public', 'locales', 'en', f"{ns}.json")
    target_path = os.path.join(base_dir, 'public', 'locales', lang, f"{ns}.json")
    
    if not os.path.exists(en_path) or not os.path.exists(target_path):
        return {}

    en_flat = flatten(load_json(en_path))
    target_flat = flatten(load_json(target_path))
    
    untranslated = {}
    for k, v in en_flat.items():
        # Heuristic: Value is identical to English, and it has some length (not just "W" or "0")
        if k in target_flat and target_flat[k] == v and len(str(v)) > 1:
            # Skip obvious technical keys if needed, but user wants 100%
            untranslated[k] = v
            
    return untranslated

if __name__ == "__main__":
    base_dir = os.getcwd()
    namespaces = ['common', 'calculator', 'dashboard', 'marketing']
    languages = ['pt', 'es']
    
    report = {}
    
    for ns in namespaces:
        report[ns] = {}
        for lang in languages:
            data = get_untranslated(base_dir, ns, lang)
            report[ns][lang] = data
            print(f"{ns} {lang}: {len(data)} untranslated items found.")
            
    with open('untranslated_report.json', 'w', encoding='utf-8') as f:
        json.dump(report, f, indent=2, ensure_ascii=False)
