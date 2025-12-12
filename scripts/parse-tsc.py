import re

def parse_tsc_output():
    try:
        # Try UTF-16 first (PowerShell default)
        with open('tsc_errors_3.txt', 'r', encoding='utf-16') as f:
            content = f.read()
    except UnicodeError:
        try:
            with open('tsc_errors_3.txt', 'r', encoding='utf-8') as f:
                content = f.read()
        except Exception:
            with open('tsc_errors_3.txt', 'r', errors='ignore') as f: # Fallback
                content = f.read()

    lines = content.splitlines()
    syntax_errors = []
    
    # Regex for TS error: file(line,col): error TSxxxx: message
    # We focus on TS1xxx (Syntax)
    error_pattern = re.compile(r"(.*)\(\d+,\d+\): error (TS1\d+): (.*)")
    
    for line in lines:
        match = error_pattern.match(line)
        if match:
            file, code, msg = match.groups()
            syntax_errors.append(f"{file} - {code}: {msg}")
            
    if syntax_errors:
        print(f"Found {len(syntax_errors)} SYNTAX errors:")
        for err in syntax_errors:
            print(err)
    else:
        print("No syntax errors found (TS1xxx).")

    # Also count Total errors
    total = len([l for l in lines if ": error TS" in l])
    print(f"Total TS errors: {total}")

parse_tsc_output()
