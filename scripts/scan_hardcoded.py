
import os
import re

def scan_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find text between tags that usually indicates visible content
    # We ignore standard whitespace
    # We try to exclude {...} blocks
    # This is a rough heuristic
    
    suspicious_lines = []
    
    lines = content.split('\n')
    for i, line in enumerate(lines):
        # simple check for text between > and <
        matches = re.findall(r'>([^<>{}]+)<', line)
        for match in matches:
            text = match.strip()
            if text and len(text) > 2 and not text.startswith('&'):
                # filter out likely code artifacts
                if not re.match(r'^[0-9\.,]+$', text): # ignore just numbers
                    suspicious_lines.append((i+1, text, line.strip()))

        # Check for placeholder="Text" or title="Text"
        attr_matches = re.findall(r'(placeholder|title|alt|label)=["\']([^"\'{}]+)["\']', line)
        for attr, text in attr_matches:
            if len(text) > 2:
                 suspicious_lines.append((i+1, f"[{attr}] {text}", line.strip()))

    return suspicious_lines

def main():
    target_dir = r'c:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\src'
    
    print(f"Scanning {target_dir} for potential hardcoded strings...")
    
    for root, dirs, files in os.walk(target_dir):
        for file in files:
            if file.endswith('.tsx'):
                filepath = os.path.join(root, file)
                # Skip some known files or node_modules if needed (not here)
                
                results = scan_file(filepath)
                if results:
                    print(f"\n--- {file} ---")
                    # Limit output per file to avoid spamming
                    for linenum, text, context in results[:5]: 
                        print(f"Line {linenum}: {text}")

if __name__ == "__main__":
    main()
