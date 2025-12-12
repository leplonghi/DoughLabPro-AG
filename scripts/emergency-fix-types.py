import os
import re

def fix_broken_types(root_dir):
    print(f"Scanning {root_dir}...")
    fixed_count = 0
    files_fixed = 0
    
    # Patterns to revert
    # We want to revert things like t('auth.promise') back to Promise
    replacements = [
        # Broad regex for .promise
        (r"\{?t\('[\w\._\-]+\.promise'\)\}?", "Promise"),
        (r"\{?t\('Promise'\)\}?", "Promise"),
        
        # Broad regex for .void
        (r"\{?t\('[\w\._\-]+\.void'\)\}?", "void"),
        (r"\{?t\('void'\)\}?", "void"),
        
        # Broad regex for .string
        (r"\{?t\('[\w\._\-]+\.string'\)\}?", "string"),
        (r"\{?t\('string'\)\}?", "string"),
        
        # Broad regex for .boolean
        (r"\{?t\('[\w\._\-]+\.boolean'\)\}?", "boolean"),
        (r"\{?t\('boolean'\)\}?", "boolean"),
        
        # Broad regex for .number
        (r"\{?t\('[\w\._\-]+\.number'\)\}?", "number"),
        (r"\{?t\('number'\)\}?", "number"),
    ]

    for dirpath, _, filenames in os.walk(root_dir):
        for filename in filenames:
            if not filename.endswith(('.tsx', '.ts')):
                continue
            
            filepath = os.path.join(dirpath, filename)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                original_content = content
                
                for pattern, replacement in replacements:
                    # Using regex sub
                    content = re.sub(pattern, replacement, content)

                if content != original_content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"Fixed types in: {filepath}")
                    files_fixed += 1
            except Exception as e:
                print(f"Error processing {filepath}: {e}")

    print(f"Total files fixed: {files_fixed}")

fix_broken_types("src")
