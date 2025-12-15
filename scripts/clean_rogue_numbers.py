import os
import re

TARGET_DIR = 'src/data/styles/regions'
TARGET_BREAD = 'src/data/styles/bread'

def clean_line(line):
    # Regex to capture Key: 'Value Digits',
    # We want to remove the Digits.
    # Pattern: \s+\d+['"]
    
    # List of keys that definitely need fixing due to Enums or clean data strings
    keys_to_clean = [
        'method', 'suitability', 'category', 'difficulty', 
        'yeast_activity', 'ph_target', 'organic_acids', 'enzymatic_activity',
        'heat_distribution', 'oven_type', 'crust_development', 'crumb_structure',
        'pl_ratio', 'protein_type', 'absorption_capacity',
        'target_style' # for comparisons
    ]
    
    # Generic cleaner for "Word Number" -> "Word"
    # Be careful not to break "T65" or "Type 1" which are valid valid.
    # Heuristic: Valid numbers in these strings usually don't come at the very end after a space, 
    # OR they are specific like "Type 1".
    
    # Bad patterns seen: "Standard 8", "High 9", "Low 12", "Sourdough 6", "Pizza 19", "Flatbread 4"
    # "Medium 6", "Authentic 9", "Ideal 9"
    
    # Maybe only target specific words + number?
    # Or just "Word Space Number Quote"?
    
    for key in keys_to_clean:
        if f"{key}:" in line:
            # Check for pattern: key: 'Some Value 123',
            m = re.search(r"(\b" + key + r"\s*:\s*['\"])(.*?)(\s+\d+)(['\"],?)", line)
            if m:
                prefix = m.group(1)
                value = m.group(2)
                suffix = m.group(3) # The space + number
                closing = m.group(4)
                
                # Filter: Don't clean "Type 1", "W 200", "T 65" or dates/times if any?
                # The bad numbers seem to be random ids?
                
                # Check if value ends with " 1" or " 2" etc and looks accidental.
                # If value is "Type", keep "Type 1".
                # If value is "Sourdough", "Standard", "High", "Low", "Normal", "Pizza", "Bread", "Pastry" -> Clean
                
                clean_words = ["Sourdough", "Standard", "High", "Low", "Normal", "Pizza", "Bread", "Pastry", "Flatbread", "Snack", 
                               "Direct", "Biga", "Poolish", "Hybrid", "Scald", "Tangzhong", "Authentic", "Ideal", "Possible", 
                               "Historical", "Not Recommended", "Easy", "Medium", "Hard", "Expert", "Balanced", "Extensible",
                               "Conduction", "Convection", "Radiant", "Even", "None", "Strong wheat", "Soft wheat", "Minimal", "Restrained"]

                should_clean = False
                for w in clean_words:
                    if value.endswith(w) or value == w: 
                        should_clean = True
                        break
                    # Also handles "High 5" where value="High"
                    # What if value is "Very High"? -> "Very High 5" -> Clean " 5" -> "Very High"
                
                # Handle specific multi-word cases
                if "wheat" in value or "steam" in value or "conduction" in value.lower():
                    should_clean = True

                if value.strip() in clean_words:
                    should_clean = True
                    
                if "Type" in value: 
                    should_clean = False # Type 1, Type 550
                
                if should_clean:
                    new_line = line.replace(f"{value}{suffix}", value)
                    return new_line

    return line

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    new_lines = []
    changes = 0
    for line in lines:
        cleaned = clean_line(line)
        if cleaned != line:
            # print(f"Cleaned: {line.strip()} -> {cleaned.strip()}")
            changes += 1
        new_lines.append(cleaned)
        
    if changes > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f"Fixed {changes} lines in {os.path.basename(filepath)}")

if __name__ == '__main__':
    dirs = [TARGET_DIR, TARGET_BREAD]
    for d in dirs:
        if os.path.exists(d):
            for filename in os.listdir(d):
                if filename.endswith('.ts'):
                    process_file(os.path.join(d, filename))
