import os
import re
import json

PROJECT_ROOT = '.'
TRANSLATION_FILE = 'public/locales/en/translation.json'

def load_translations():
    with open(TRANSLATION_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)

def flatten_keys(data, parent_key=''):
    keys = set()
    for k, v in data.items():
        new_key = f"{parent_key}.{k}" if parent_key else k
        if isinstance(v, dict):
            keys.update(flatten_keys(v, new_key))
        else:
            keys.add(new_key)
    return keys

def audit_files(valid_keys):
    errors = []
    warnings = []
    
    # Regex to find t('key') or t("key") with word boundary
    # We capture the key content
    t_pattern = re.compile(r"\bt\(['\"]([\w\.\-_]+)['\"]\)")
    
    # Suspicious patterns
    double_braces = re.compile(r"\{\{t\(") # {{t('...')}} might be valid in some contexts but suspicious in children
    
    for root_dir, _, files in os.walk(os.path.join(PROJECT_ROOT, 'src')):
        for file in files:
            if not file.endswith(('.tsx', '.ts')):
                continue
                
            path = os.path.join(root_dir, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
                
            # Check for t() usage
            matches = t_pattern.findall(content)
            for key in matches:
                # Validate key existence
                parts = key.split('.')
                # Validation logic for nested keys is tricky if we just have the set of full paths
                # But our flatten_keys produces full paths like 'common.save'
                
                if key not in valid_keys:
                    # Try to see if it's a dynamic key? (rare in this codebase)
                    if '${' in key:
                        warnings.append(f"Dynamic key usage in {path}: {key}")
                    else:
                        errors.append(f"Missing Key in {path}: '{key}'")

            # Check for suspicious syntax
            if double_braces.search(content):
                 # This is valid for objects prop={{ key: t('...') }} but invalid for children <div>{{t()}}</div>
                 # Simple heuristic check
                 pass 

    return errors, warnings

def check_json_quality(data):
    issues = []
    
    def check_node(node, path=''):
        for k, v in node.items():
            current_path = f"{path}.{k}" if path else k
            if isinstance(v, dict):
                check_node(v, current_path)
            else:
                # Check value for suspicious stuff
                if not isinstance(v, str):
                    continue
                    
                # Check for code artifacts
                if "=>" in v or "();" in v or "return " in v:
                    issues.append(f"Suspicious value in JSON at '{current_path}': {v} (Looks like code)")
                
                # Check for empty values
                if not v.strip():
                    issues.append(f"Empty translation at '{current_path}'")
                    
                # Check for double curly braces (interpolation) without closing
                if "{{" in v and "}}" not in v:
                     issues.append(f"Broken interpolation in '{current_path}': {v}")

    check_node(data)
    return issues

print("🔍 Auditing i18n Implementation...")

translations = load_translations()
valid_keys_set = flatten_keys(translations)

print(f"✅ Loaded {len(valid_keys_set)} translation keys.")

# Check JSON content quality
json_issues = check_json_quality(translations)
if json_issues:
    print("\n⚠️  JSON Content Issues Found:")
    for issue in json_issues:
        print(f"  - {issue}")
else:
    print("✅ JSON content looks clean.")

# Audit source code
code_errors, code_warnings = audit_files(valid_keys_set)

with open('docs/audit-missing-keys.json', 'w', encoding='utf-8') as f:
    json.dump(code_errors, f, indent=2)
print(f"Saved {len(code_errors)} errors to docs/audit-missing-keys.json")

if code_errors:
    print(f"\n❌ Found {len(code_errors)} missing keys in code:")
    for err in code_errors[:20]: # Show first 20
        print(f"  - {err}")
    if len(code_errors) > 20: print(f"  ...and {len(code_errors)-20} more.")
else:
    print("✅ No missing keys found in code.")

if code_warnings:
    print(f"\n⚠️  {len(code_warnings)} Warnings:")
    for warn in code_warnings[:10]:
        print(f"  - {warn}")

if not json_issues and not code_errors:
    print("\n🎉 AUDIT PASSED: Implementation looks solid!")
else:
    print("\n⚠️  AUDIT FAILED: Please fix the issues above.")
