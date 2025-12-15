import os
import json
import sys

def check_json(path):
    try:
        with open(path, 'r', encoding='utf-8') as f:
            json.load(f)
        return True, None
    except Exception as e:
        return False, str(e)

if __name__ == "__main__":
    base = os.getcwd()
    locales = os.path.join(base, 'public', 'locales')
    
    for root, dirs, files in os.walk(locales):
        for file in files:
            if file.endswith('.json'):
                path = os.path.join(root, file)
                valid, err = check_json(path)
                if not valid:
                    print(f"INVALID: {path}")
                    print(f"Error: {err}")
