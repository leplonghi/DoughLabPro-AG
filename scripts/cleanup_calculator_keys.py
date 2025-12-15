import json
import os

def load_json(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_json(path, data):
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

def sync_keys(source, target):
    """
    Recursively remove keys from target that are not in source.
    """
    keys_to_remove = []
    
    # Check for keys in target not in source
    for k in target:
        if k not in source:
            keys_to_remove.append(k)
    
    for k in keys_to_remove:
        print(f"Removing extra key: {k}")
        del target[k]

    # Recurse
    for k, v in source.items():
        if k in target and isinstance(v, dict) and isinstance(target[k], dict):
            sync_keys(v, target[k])

base_path = os.path.join("public", "locales")
en_path = os.path.join(base_path, "en", "calculator.json")
pt_path = os.path.join(base_path, "pt", "calculator.json")

print("Cleaning up PT calculator keys...")
en_data = load_json(en_path)
pt_data = load_json(pt_path)

sync_keys(en_data, pt_data)

save_json(pt_path, pt_data)
print("Done.")
