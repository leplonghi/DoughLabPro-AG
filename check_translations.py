import json

with open('public/locales/en/styles.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f'✅ JSON válido com {len(data)} chaves')
print(f'\nVerificando chaves específicas:')
print(f'  chicago_tavern_style_2 = "{data.get("chicago_tavern_style_2", "NOT FOUND")}"')
print(f'  chicago_tavern_desc = "{data.get("chicago_tavern_desc", "NOT FOUND")}"')
print(f'  chicago_tavern_history = "{data.get("chicago_tavern_history", "NOT FOUND")}"')
