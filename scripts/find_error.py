import os

def find_error(filename_part):
    print(f"Searching errors for {filename_part}...")
    log_file = 'tsc_errors_7.txt'
    if not os.path.exists(log_file): return
    
    with open(log_file, 'r', encoding='utf-8', errors='ignore') as f: # Use utf-8 ignore to survive encoding mess
        lines = f.readlines()
        
    for i, line in enumerate(lines):
        if filename_part in line:
            print(f"Match line {i}: {line.strip()}")
            # Print next few lines too as they might contain the error message
            for j in range(1, 4):
                if i+j < len(lines):
                    print(f"  {lines[i+j].strip()}")

find_error('ProFeatureLock')
