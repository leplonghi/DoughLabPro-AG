import os
import json
import sys

def load_json_keys(file_path, prefix=""):
    keys = set()
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            
        def recurse(obj, current_prefix):
            if isinstance(obj, dict):
                for k, v in obj.items():
                    new_prefix = f"{current_prefix}.{k}" if current_prefix else k
                    recurse(v, new_prefix)
            else:
                keys.add(current_prefix)
                
        recurse(data, prefix)
    except Exception as e:
        print(f"Error loading {file_path}: {e}")
    return keys

def validate_i18n(base_dir):
    locales_dir = os.path.join(base_dir, 'public', 'locales')
    
    if not os.path.exists(locales_dir):
        print(f"Locales directory not found at {locales_dir}")
        return False

    languages = ['en', 'pt', 'es']
    namespaces = ['translation', 'common', 'calculator'] # Add others if discovered, but usually filenames in 'en' dir
    
    # Discover actual namespaces based on 'en' directory
    en_dir = os.path.join(locales_dir, 'en')
    if os.path.exists(en_dir):
        namespaces = [f.replace('.json', '') for f in os.listdir(en_dir) if f.endswith('.json')]
    
    print(f"Validating languages: {languages}")
    print(f"Namespaces found: {namespaces}")
    print("-" * 50)
    
    all_passed = True
    
    for ns in namespaces:
        print(f"Checking namespace: {ns}")
        
        # Load Base (EN)
        en_path = os.path.join(locales_dir, 'en', f"{ns}.json")
        en_keys = load_json_keys(en_path)
        
        if not en_keys:
            print(f"  WARNING: English namespace {ns} is empty or missing.")
            continue
            
        for lang in ['pt', 'es']:
            lang_path = os.path.join(locales_dir, lang, f"{ns}.json")
            if not os.path.exists(lang_path):
                print(f"  [FAIL] {lang}: File missing: {lang_path}")
                all_passed = False
                continue
                
            lang_keys = load_json_keys(lang_path)
            
            missing = en_keys - lang_keys
            extra = lang_keys - en_keys
            
            if missing:
                print(f"  [FAIL] {lang}: Missing {len(missing)} keys")
                for k in list(missing)[:5]: # Show first 5
                    print(f"    - {k}")
                if len(missing) > 5:
                    print(f"    ... and {len(missing) - 5} more")
                all_passed = False
            
            if extra:
                print(f"  [WARN] {lang}: Has {len(extra)} extra keys (potentially deprecated)")
                # Extra keys are technically not a failure for "completeness", but good to know
                
            if not missing and not extra:
                print(f"  [OK] {lang}: 100% Match")
        print("-" * 50)

    return all_passed

if __name__ == "__main__":
    current_dir = os.getcwd()
    success = validate_i18n(current_dir)
    if success:
        print("\n✅ PHASE 8 VALIDATION PASSED: All keys present in all languages.")
        sys.exit(0)
    else:
        print("\n❌ PHASE 8 VALIDATION FAILED: Missing keys detected.")
        sys.exit(1)
