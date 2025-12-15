
import re
import json
import os

files = [
    r"c:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\src\data\styles\regions\north_america.ts",
    r"c:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\src\data\styles\regions\europe.ts",
    r"c:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\src\data\styles\regions\italy.ts"
]

def extract_extended(file_path):
    extracted = []
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    lines = content.split('\n')
    current_style_id = None
    
    for i, line in enumerate(lines):
        line_stripped = line.strip()
        
        # ID detection
        id_match = re.search(r'id:\s*["\']([^"\']+)["\']', line_stripped)
        if id_match:
            current_style_id = id_match.group(1).replace('-', '_')
            continue

        if not current_style_id:
            continue

        for method in ['direct', 'biga', 'poolish']:
            if line_stripped.startswith(f"{method}: {{"):
                # extract notes
                m = re.search(r'notes:\s*(["\'])(.*?)\1', line_stripped)
                if m:
                    val = m.group(2)
                    quote_char = m.group(1)
                    if len(val) > 2:
                        # Construct the exact match string from the line source to avoid regex reconstruction errors
                        # The target content should be just the value string "..." inclusive of keys?
                        # No, TargetContent in replace tool is the specialized string.
                        # Ideally, we replace `"some note"` with `"key_name"`.
                        # So TargetContent should be `"{val}"` (with quotes) or `'val'`.
                        # But wait, python print might change quotes.
                        # I will store the *whole line content* relating to notes?
                        # Or just the value + quotes.
                        # The tool replaces TargetContent.
                        # The line is: `direct: { suitable: true, notes: 'The classic...' },`
                        # I want to replace `'The classic...'` with `"key"`.
                        target_content = f"{quote_char}{val}{quote_char}"
                        key = f"{current_style_id}_method_{method}_notes"
                        
                        extracted.append({
                            "key": key,
                            "target": target_content,
                            "line": i + 1,
                            "file": file_path
                        })

    return extracted

all_data = []
for fp in files:
    all_data.extend(extract_extended(fp))

print(json.dumps(all_data, indent=4))
