import json
import os
import sys

def load_json(path):
    if not os.path.exists(path):
        return {}
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def get_keys(obj, prefix=''):
    keys = set()
    for k, v in obj.items():
        if isinstance(v, dict):
            keys.update(get_keys(v, f"{prefix}{k}."))
        else:
            keys.add(f"{prefix}{k}")
    return keys

def get_missing_values(source, target, prefix=''):
    missing = {}
    for k, v in source.items():
        if isinstance(v, dict):
            # Nested object
            target_val = target.get(k, {})
            if not isinstance(target_val, dict):
                # Structure mismatch, or target has string where source has dict
                # Treat as missing entirely
                target_val = {}
            
            nested_missing = get_missing_values(v, target_val, f"{prefix}{k}.")
            if nested_missing:
                missing[k] = nested_missing
        else:
            # Leaf value
            if k not in target:
                missing[k] = v # Use source value as context
    return missing

def main():
    if len(sys.argv) < 3:
        print("Usage: python check_coverage.py <namespace> <target_lang>")
        sys.exit(1)

    namespace = sys.argv[1]
    target_lang = sys.argv[2]
    
    source_path = f"public/locales/en/{namespace}.json"
    target_path = f"public/locales/{target_lang}/{namespace}.json"
    
    print(f"Checking delta for NS: '{namespace}' | EN -> {target_lang.upper()}")
    
    if not os.path.exists(source_path):
        print(f"Error: Source file {source_path} does not exist.")
        sys.exit(1)
        
    source_data = load_json(source_path)
    target_data = load_json(target_path)
    
    missing_map = get_missing_values(source_data, target_data)
    
    if not missing_map:
        print("✅ No missing keys found. 100% coverage.")
    else:
        count = len(get_keys(missing_map))
        print(f"⚠️  Found {count} missing keys/branches.")
        print(json.dumps(missing_map, indent=2, ensure_ascii=False))

if __name__ == "__main__":
    main()
