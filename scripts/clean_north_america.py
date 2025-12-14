
import re

file_path = r'C:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\src\data\styles\regions\north_america.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix 1: Remove garbage numbers from Enum values
# Pattern: 'EnumName Number' (e.g., 'Medium 74', 'Direct 14')
# Enums: Difficulty (Easy, Medium, Hard, Expert)
# Methods: Direct, Biga, Poolish, Sourdough, Hybrid, Scald, Tangzhong
# Suitability: Ideal, Possible, Not Recommended, Historical, Authentic

patterns = [
    r"'(Easy|Medium|Hard|Expert)\s+\d+'",
    r"'(Direct|Biga|Poolish|Sourdough|Hybrid|Scald|Tangzhong)\s+\d+'",
    r"'(Ideal|Possible|Not Recommended|Historical|Authentic)\s+\d+'"
]

for p in patterns:
    content = re.sub(p, r"'\1'", content)

# Fix 2: Replace invalid placeholders
content = content.replace("method: 'method'", "method: 'Direct'")
content = content.replace("suitability: 'suitability'", "suitability: 'Possible'")

# Fix 3: Ensure references are objects in this file (Legacy Schema)
# Find references: ["Some String"] and convert to references: [{ source: "Some String" }]
# This simple regex handles the single-string case which is most common here
def ref_replacer(match):
    # match.group(1) is the inner string content including quotes
    val = match.group(1)
    # If it's already an object-like string string key, skip? No, we are looking for valid string literals in array
    # e.g. references: ["Foo"]
    # We want references: [{ source: "Foo" }]
    return f'references: [{{ source: {val} }}]'

# Regex for single item string array: references: \s*\[\s*(["'][^"']+["'])\s*\]
content = re.sub(r'references:\s*\[\s*(["\'][^"\']+["\'])\s*\]', ref_replacer, content)


with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed north_america.ts")
