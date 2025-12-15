
import json
import os

files = [
    "public/locales/en/dashboard.json",
    "public/locales/pt/dashboard.json",
    "public/locales/es/dashboard.json",
    "public/locales/en/calculator.json",
    "public/locales/pt/calculator.json",
    "public/locales/es/calculator.json"
]

for file_path in files:
    if os.path.exists(file_path):
        print(f"Processing {file_path}...")
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
            print(f"  [OK] Deduplicated and formatted.")
        except Exception as e:
            print(f"  [FAIL] {e}")
    else:
        print(f"Skipping {file_path} (not found)")
