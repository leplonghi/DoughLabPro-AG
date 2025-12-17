import json

# Load existing translations
with open('public/locales/en/styles.json', 'r', encoding='utf-8') as f:
    existing = json.load(f)

# Load new translations
with open('missing_translations.json', 'r', encoding='utf-8') as f:
    new_translations = json.load(f)

# Merge
print(f"📚 Existing keys: {len(existing)}")
print(f"➕ Adding keys: {len(new_translations)}")

existing.update(new_translations)

print(f"✅ Total keys after merge: {len(existing)}")

# Save merged file
with open('public/locales/en/styles.json', 'w', encoding='utf-8') as f:
    json.dump(existing, f, indent=4, ensure_ascii=False)

print("💾 Merged translations saved to styles.json!")
