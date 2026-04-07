import json
import os

file_path = r'c:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\public\locales\en\styles.json'

with open(file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

# Add difficulty_easy if missing
if 'styles.difficulty_easy' not in data:
    data['styles.difficulty_easy'] = 'Easy'

# Ensure other difficulties are correct
data['styles.difficulty_medium'] = 'Medium'
data['styles.difficulty_hard'] = 'Hard'
data['styles.difficulty_advanced'] = 'Advanced'

# Remove the weird Chicago intro key if it exists
if 'styles.a_hearty_knifeandfork_meal_iconic_to_chicago_culin' in data:
    del data['styles.a_hearty_knifeandfork_meal_iconic_to_chicago_culin']

# Sort keys alphabetically to keep it clean (optional but good)
# Actually, the user might want a specific order. I'll just sort to avoid duplicates better.
sorted_data = dict(sorted(data.items()))

with open(file_path, 'w', encoding='utf-8') as f:
    json.dump(sorted_data, f, indent=2, ensure_ascii=False)

print("Updated styles.json with difficulty_easy and removed redundant Chicago key.")
