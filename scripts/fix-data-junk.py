import os
import re

TARGET_DIR = 'src/data/styles/regions'

def fix_line(line):
    # Fix tags: ['A, 'B'] -> ['A', 'B'] is handled, but let's re-apply just in case
    # Also handle [Use manteca'] -> ['Use manteca']
    # Array Item missing start quote:
    # Pattern: [Text']
    if '[' in line and ']' in line:
        # Check for [Value']
        # regex: \[\s*([^'\[]+?)'\]
        line = re.sub(r"\[\s*([^'\[]+?)'\]", r"['\1']", line)
        
        # Check for ['Value]
        line = re.sub(r"\['([^'\]]+?)\s*\]", r"['\1']", line)
        
    # Fix Property Value missing start quote
    # key: Value',
    # keys: tip, scenario, target_style, question, method, vsStyle, explanation, result, correction, answer, context, suitability, difference, notes, why_choose_this
    keys = ['tip', 'scenario', 'target_style', 'question', 'method', 'vsStyle', 'explanation', 'result', 'correction', 'answer', 'context', 'suitability', 'difference', 'notes', 'why_choose_this']
    
    # regex: (key):\s*([^'{\[]+?)',
    # Note: Value shouldn't start with ' or { or [
    
    key_pattern = "(" + "|".join(keys) + ")"
    
    # 1. Missing start quote: key: Value',
    # e.g. tip: Seethrough',
    line = re.sub(r"(\b" + key_pattern + r"\b:\s*)([^'{\[\n]+?)',", r"\1'\2',", line)
    
    # 2. Missing end quote: key: 'Value,
    # e.g. suitability: 'Authentic 16,
    # We must be careful not to match 'Value', 
    # Match 'Value, where Value does NOT contain '
    line = re.sub(r"(\b" + key_pattern + r"\b:\s*')([^']+?),", r"\1\2',", line)
    
    # 3. Totally unquoted: key: Value,
    # e.g. scenario: Hard 34,
    # Must avoid matching valid numbers or bools if possible, or assume strings for these keys.
    # These keys are primarily string fields.
    # We should exclude if it looks like number? 
    # Hard 34 has space.
    # But checking if unquoted:
    # Look for key: Value,
    # Value doesn't start with ' or " or { or [.
    # Value doesn't end with ' or ".
    # Value is not true/false.
    
    def quote_unquoted(match):
        prefix = match.group(1) # key: 
        val = match.group(2)
        if val.strip() in ['true', 'false']: return match.group(0)
        # If number
        if re.match(r'^\d+(\.\d+)?$', val.strip()): return match.group(0)
        
        return f"{prefix}'{val}',"

    line = re.sub(r"(\b" + key_pattern + r"\b:\s*)([^'\"{\[\n]+?),", quote_unquoted, line)
    
    # 4. Rogue split within string: ... , '...
    # description: '... cheese, 'topped ...'
    # We want to remove the ' after comma space if it looks suspicious.
    # But blindly replacing ", '" with ", " might be dangerous.
    # Let's apply it only if the line starts with a description/history/etc key.
    long_keys = ['description', 'history_context', 'processScience', 'science', 'action', 'notes', 'tip', 'explanation', 'difference', 'why_choose_this']
    if re.match(r"^\s*(" + "|".join(long_keys) + r"):", line):
        # If line has ", '" -> replace with ", "
        if ", '" in line:
            line = line.replace(", '", ", ")
            
        # Also clean up "''" at end of line (Double single quotes) resulting from manual fixes?
        # e.g. Neapolitan.'' -> Neapolitan.'
        if "''" in line:
            line = line.replace("''", "'")

    return line

def process_file(filepath):
    print(f"Fixing junk in {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    new_lines = []
    changes = 0
    for line in lines:
        original = line
        fixed = fix_line(original)
        if fixed != original:
            changes += 1
        new_lines.append(fixed)
        
    if changes > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f"  -> Fixed {changes} lines.")
    else:
        print("  -> No changes.")

for filename in os.listdir(TARGET_DIR):
    if filename.endswith('.ts'):
        process_file(os.path.join(TARGET_DIR, filename))
