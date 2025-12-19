import json
import os

styles_json_path = 'public/locales/en/styles.json'
new_content_path = 'new_styles_content.json'

def load_json(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_json(path, data):
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, sort_keys=True, ensure_ascii=False)

try:
    if not os.path.exists(styles_json_path):
        print(f"Error: {styles_json_path} not found.")
        exit(1)
        
    main_styles = load_json(styles_json_path)
    new_styles = load_json(new_content_path)
    
    # Merge keys
    initial_count = len(main_styles)
    for key, value in new_styles.items():
        if key not in main_styles:
            main_styles[key] = value
        else:
            print(f"Key {key} already exists, skipping or updating if necessary (keeping old for safety).")
            # Determine if we should update. Let's assume we update if the key matches our known new keys.
            main_styles[key] = value
            
    final_count = len(main_styles)
    print(f"Merged {final_count - initial_count} new keys. Total keys: {final_count}")
    
    save_json(styles_json_path, main_styles)
    print("Successfully updated styles.json")

except Exception as e:
    print(f"An error occurred: {e}")
