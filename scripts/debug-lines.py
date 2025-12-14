import os

def check_file(filepath):
    print(f"Checking {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        for i, line in enumerate(f):
            if "fermentationTime" in line or "method:" in line or "requiresSteam" in line:
               if "N/A" in line or "baker_" in line or "requiresSteam" in line:
                   print(f"Line {i+1}: {repr(line)}")

check_file('src/data/styles/regions/europe.ts')
check_file('src/data/styles/regions/latam.ts')
