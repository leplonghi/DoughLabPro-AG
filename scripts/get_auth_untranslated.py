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
    
    candidates = {}
    for k, v in en_flat.items():
        if k in target_flat:
             tv = target_flat[k]
             # Heuristic: same value, len > 3, not id/technical
             if tv == v and len(str(v)) > 3 and not k.endswith("_id") and not k.endswith(".id"):
                 candidates[k] = v
                 
    return candidates

if __name__ == "__main__":
    base_dir = os.getcwd()
    # Focus on 'auth' for now
    auth_pt = get_untranslated(base_dir, "auth", "pt")
    auth_es = get_untranslated(base_dir, "auth", "es")
    
    print("AUTH PT CANDIDATES:")
    print(json.dumps(auth_pt, indent=2))
    print("\nAUTH ES CANDIDATES:")
    print(json.dumps(auth_es, indent=2))
