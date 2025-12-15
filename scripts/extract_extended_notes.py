
import re
import json
import os

files = [
    r"c:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\src\data\styles\regions\north_america.ts",
    r"c:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\src\data\styles\regions\europe.ts",
    r"c:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\src\data\styles\regions\italy.ts"
]

def extract_extended(file_path):
    extracted = {}
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    lines = content.split('\n')
    current_style_id = None
    
    # Simple state machine or just iterating
    for i, line in enumerate(lines):
        line_stripped = line.strip()
        
        # ID detection
        id_match = re.search(r'id:\s*["\']([^"\']+)["\']', line_stripped)
        if id_match:
            current_style_id = id_match.group(1).replace('-', '_')
            continue

        if not current_style_id:
            continue

        # methodSuitability notes
        # Pattern: key: { suitable: bool, notes: "..." }
        # We look for lines like: direct: { suitable: true, notes: '...' },
        # or multiline? Usually usually on one line or close.
        # Regex for the specific keys direct/biga/poolish
        
        for method in ['direct', 'biga', 'poolish']:
            # This regex assumes the structure is mostly on one line or handled by dotall if I used finding on full content, 
            # but line by line is safer for context if unique.
            # actually notes might be on the next line.
            # Let's try to match the method key first.
            if line_stripped.startswith(f"{method}: {{"):
                # extract notes
                m = re.search(r'notes:\s*(["\'])(.*?)\1', line_stripped)
                if m:
                    val = m.group(2)
                    if len(val) > 2:
                       extracted[f"{current_style_id}_method_{method}_notes"] = val

    return extracted

all_data = {}
for fp in files:
    all_data.update(extract_extended(fp))

print(json.dumps(all_data, indent=4))
