
import re
import json
import os

files = [
    r"c:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\src\data\styles\regions\north_america.ts",
    r"c:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\src\data\styles\regions\europe.ts",
    r"c:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\src\data\styles\regions\italy.ts"
]

def extract_from_file(file_path):
    extracted = {}
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    lines = content.split('\n')
    current_style_id = None
    
    for i, line in enumerate(lines):
        line_stripped = line.strip()
        
        # ID detection
        id_match = re.search(r'id:\s*["\']([^"\']+)["\']', line_stripped)
        if id_match:
            current_style_id = id_match.group(1)
            # Normalize ID for keys? 
            # Some IDs have - or _v2. usage: new_york_slice_v2 -> new_york_slice_v2_science_flour
            # We will use the ID exactly as in the file to be safe, or maybe sanitize it?
            # existing keys used snake_case. `baguette-tradition` -> `baguette_tradition`? 
            # The user manually keyed `baguette_tradition_name` for `baguette-tradition`.
            # So I should probably sanitize the ID: replace - with _.
            if current_style_id:
                current_style_id = current_style_id.replace('-', '_')
            continue
            
        if not current_style_id:
            continue
            
        def get_val(l):
            # Matches: key: "value", or key: 'value',
            # We want the content inside matching quotes.
            # Handle escaped quotes?
            # Simple regex: : \s* (["']) (.*?) \1
            m = re.search(r':\s*(["\'])(.*?)\1', l)
            if m:
                val = m.group(2)
                # Filter out likely keys or short vals
                if len(val) < 5: return None
                if val.endswith('.png'): return None
                return val
            return None

        # science_explanation
        if "science_explanation:" in line_stripped:
            val = get_val(line_stripped)
            if val: extracted[f"{current_style_id}_science_flour"] = val

        # processScience
        if "processScience:" in line_stripped:
            val = get_val(line_stripped)
            if val: extracted[f"{current_style_id}_science_process"] = val

        # hydrationLogic
        if "hydrationLogic:" in line_stripped:
            val = get_val(line_stripped)
            if val: extracted[f"{current_style_id}_dd_hydration"] = val

    return extracted

all_data = {}
for fp in files:
    all_data.update(extract_from_file(fp))

print(json.dumps(all_data, indent=4))
