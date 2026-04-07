import json
import os

file_path = r'c:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\public\locales\en\styles.json'

try:
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    print("styles.json is VALID JSON.")
    print(f"Total keys: {len(data)}")
except Exception as e:
    print(f"Error: {e}")
