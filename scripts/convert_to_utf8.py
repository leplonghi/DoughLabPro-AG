
import json

try:
    with open('extracted_science.json', 'r', encoding='utf-16') as f:
        content = json.load(f)
except Exception:
    with open('extracted_science.json', 'r', encoding='utf-8') as f:
        content = json.load(f)

with open('extracted_science_utf8.json', 'w', encoding='utf-8') as f:
    json.dump(content, f, indent=4, ensure_ascii=False)
