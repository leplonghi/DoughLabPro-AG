import json
import os

langs = ['en', 'pt', 'es']
mapping = {
    "auth": ["auth"],
    "calculator": ["calculator", "form", "results", "styles"],
    "dashboard": ["dashboard", "profile", "mylab", "levain_pet", "levain_onboarding", "batch_detail", "onboarding", "flours_page"],
    "marketing": ["marketing", "learn", "community", "community_page", "community_detail", "ingredientpagelayout", "meats_page", "cheeses_page", "classiccombos_page", "boldcombos_page", "assistant_page"],
    "common": [] 
}

for lang in langs:
    source_path = f"public/locales/{lang}/translation.json"
    if not os.path.exists(source_path):
        print(f"Skipping {lang}, file not found.")
        continue
        
    with open(source_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    outputs = {
        "auth": {},
        "calculator": {},
        "dashboard": {},
        "marketing": {},
        "common": {}
    }
    
    for key, value in data.items():
        placed = False
        for ns, ns_keys in mapping.items():
            if key in ns_keys:
                outputs[ns][key] = value
                placed = True
                break
        
        if not placed:
            outputs["common"][key] = value
            
    for ns, content in outputs.items():
        # Ensure common is populated if it's main, but here we just write what we found.
        # Even empty files are good to prevent 404s if referenced
        out_path = f"public/locales/{lang}/{ns}.json"
        with open(out_path, 'w', encoding='utf-8') as f:
            json.dump(content, f, indent=2, ensure_ascii=False)
        print(f"Wrote {out_path}")

print("Migration done.")
