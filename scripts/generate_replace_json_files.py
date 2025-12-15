
import json
import os

def generate_tool_calls():
    try:
        with open('extracted_notes_lines.json', 'r', encoding='utf-16') as f:
            data = json.load(f)
    except:
        with open('extracted_notes_lines.json', 'r', encoding='utf-8') as f:
            data = json.load(f)

    files = {}
    for item in data:
        fname = item['file']
        if fname not in files:
            files[fname] = []
        
        # ReplacementChunk
        # Ensure TargetContent has quotes around it if it was a string in source
        # My extractor saved `quote_char + val + quote_char` as target. perfect.
        files[fname].append({
            "TargetContent": item['target'],
            "ReplacementContent": f'"{item["key"]}"',
            "StartLine": item['line'],
            "EndLine": item['line'],
            "AllowMultiple": False
        })

    for fname, chunks in files.items():
        base = os.path.basename(fname).replace('.ts', '')
        with open(f'chunks_{base}.json', 'w', encoding='utf-8') as f:
            json.dump(chunks, f, indent=4)

if __name__ == "__main__":
    generate_tool_calls()
