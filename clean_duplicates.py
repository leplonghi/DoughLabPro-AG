import json
import sys

# Read the file
with open('public/locales/en/styles.json', 'r', encoding='utf-8') as f:
    content = f.read()

# Parse JSON - this automatically removes duplicates (keeps last occurrence)
data = json.loads(content)

print(f'Unique keys in cleaned file: {len(data)}')

# Write cleaned version with proper formatting
with open('public/locales/en/styles.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=4, ensure_ascii=False)

print('✅ File cleaned and saved!')
print('All duplicate keys have been removed.')
