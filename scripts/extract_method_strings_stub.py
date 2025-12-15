import re
import json
import os

SOURCE_FILE = r'src/logic/methodGenerator.ts'
OUTPUT_JSON = r'extracted_method_strings.json'

def extract_strings():
    with open(SOURCE_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    extracted = {}
    
    # Regex to capture addStep calls
    # addStep(phase, title, action, grandma, options)
    # This is tricky because of multi-line and nested braces.
    # However, we can look for specific patterns.
    
    # 1. waterTempAdvice variables
    # let waterTempAdvice = "..."
    # let waterTempTip = "..."
    temp_vars = re.findall(r'let (waterTempAdvice|waterTempTip) = "(.*?)";', content)
    for var, val in temp_vars:
        key = f"method.vars.{var}"
        extracted[key] = val
        
    # capturing the if(isHotEnv) reassignment is harder with regex, but let's try strict matching
    # waterTempAdvice = "Use cold water..."
    reassignments = re.findall(r'(waterTempAdvice|waterTempTip) = "(.*?)";', content)
    for i, (var, val) in enumerate(reassignments):
        # We need unique keys. 
        # "Use cold water..." -> hot
        # "Use warm water..." -> cold
        suffix = "default"
        if "cold water" in val: suffix = "hot"
        elif "warm water" in val: suffix = "cold"
        elif "room temperature" in val: suffix = "room"
        elif "friction" in val: suffix = "tip.hot"
        elif "Yeast is sluggish" in val: suffix = "tip.cold"
        elif "Ideal Desired" in val: suffix = "tip.ideal"
        
        updated_key = f"method.vars.{var}.{suffix}"
        extracted[updated_key] = val

    # 2. Extract addStep arguments
    # We will look for the strings inside addStep
    # This is rough and might miss some interpolation, but it's a start.
    
    # Pattern: addStep(\s*'([A-Z]+)',\s*['"`](.*?)['"`],\s*['"`](.*?)['"`],\s*['"`](.*?)['"`]
    # This won't work well with backticks and multiline.
    
    # Let's just find strings that look like titles/instructions.
    
    # Manual definition of what we want to extract is probably safer given the complexity.
    # I will create a mapping based on a reading of the file.
    
    print(f"Extracted {len(extracted)} variable strings.")
    return extracted

if __name__ == "__main__":
    data = extract_strings()
    with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=4, ensure_ascii=False)
