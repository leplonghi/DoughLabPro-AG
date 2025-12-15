
import re
import json

def extract_strings(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex definitions are tricky for nested structures. 
    # Instead, we will iterate line by line and try to identify context.
    # This is a heuristic approach.
    
    extracted = {}
    
    # We need to know which style we are in.
    # const variableName: DoughStyleDefinition = { ... id: "style_id" ... }
    
    current_style_id = None
    
    # Simple state machine
    # capturing fields
    
    lines = content.split('\n')
    
    # We want to map: keys -> english text
    # Key format: {style_id}_{section}_{field_suffix}
    
    # Example: new_york_slice_science_flour
    
    for i, line in enumerate(lines):
        line = line.strip()
        
        # Detect style ID
        id_match = re.search(r'id:\s*["\']([^"\']+)["\']', line)
        if id_match:
            current_style_id = id_match.group(1)
            # special case for v2 ids if we want cleaner keys
            if "_v2" in current_style_id:
                # maybe keep it as is to match the ID
                pass
            continue
            
        if not current_style_id:
            continue
            
        # Helper to extract value string
        def get_val(l):
            m = re.search(r':\s*["\'](.+)["\']', l)
            if m:
                val = m.group(1)
                # Filter out values that look like keys (no spaces, snake_case) 
                # or are very short, or simple numbers/enums
                if " " not in val and "_" in val: return None # Likely a key
                if len(val) < 10: return None # Likely data
                if val.endswith('png'): return None # Image
                return val
            return None

        # Science Explanation
        if "science_explanation:" in line:
            val = get_val(line)
            if val: extracted[f"{current_style_id}_science_flour"] = val
            
        # Process Science
        if "processScience:" in line:
            val = get_val(line)
            if val: extracted[f"{current_style_id}_science_process"] = val
            
        # Hydration Logic
        if "hydrationLogic:" in line:
            val = get_val(line)
            if val: extracted[f"{current_style_id}_dd_hydration"] = val
            
        # Comparison Difference (Deep Dive or Education)
        # This one is hard because it's inside an array of objects
        if "difference:" in line:
             val = get_val(line)
             if val: 
                 # We need a unique suffix. 
                 # We'll just generate a hash or index if we were parsing strictly.
                 # For now, let's just use the partial content as key constraint or just unique index
                 # But we can't easily auto-replace if we don't know which one it is.
                 # Let's skip complex array items for this simple script and do them manually or smarter later.
                 pass

    # For now, let's just focus on the big blocks: science_explanation, processScience, hydrationLogic
    # And maybe `notes` if they are unique enough.
    
    return extracted

extracted_data = extract_strings(r'c:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\src\data\styles\regions\north_america.ts')

print(json.dumps(extracted_data, indent=4))
