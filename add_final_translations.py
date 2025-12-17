import json

# Load existing translations
with open('public/locales/en/styles.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Add missing translations
new_translations = {
    "montreal_bagel": "Montreal Bagel",
    "flour_tortilla_sonora": "Flour Tortilla Sonora"
}

data.update(new_translations)

# Save
with open('public/locales/en/styles.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=4, ensure_ascii=False)

print(f"✅ Added {len(new_translations)} translations")
print(f"📚 Total keys: {len(data)}")
