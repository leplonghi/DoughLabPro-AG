import os
import json
import sys

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

def get_candidates(base_dir, ns, lang):
    en_path = os.path.join(base_dir, 'public', 'locales', 'en', f"{ns}.json")
    target_path = os.path.join(base_dir, 'public', 'locales', lang, f"{ns}.json")
    
    if not os.path.exists(en_path) or not os.path.exists(target_path):
        return {}

    en_flat = flatten(load_json(en_path))
    target_flat = flatten(load_json(target_path))
    
    candidates = {}
    for k, v in en_flat.items():
        if k in target_flat:
             tv = target_flat[k]
             # Heuristic: same value, len > 2, ignore obvious IDs/codes if possible
             # Also ignore if value looks like a number or symbol only
             if tv == v and len(str(v)) > 2 and not k.endswith("_id"):
                 candidates[k] = v
    return candidates

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python script.py <ns> <lang>")
        sys.exit(1)
        
    ns = sys.argv[1]
    lang = sys.argv[2]
    base_dir = os.getcwd()
    
    candidates = get_candidates(base_dir, ns, lang)
    print(json.dumps(candidates, indent=2))
