
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
        files[fname].append({
            "TargetContent": item['target'],
            "ReplacementContent": f'"{item["key"]}"',
            "StartLine": item['line'],
            "EndLine": item['line'],
            "AllowMultiple": False
        })

    for fname, chunks in files.items():
        print(f"--- FILE: {fname} ---")
        print(json.dumps(chunks, indent=4))
        print("\n")

if __name__ == "__main__":
    generate_tool_calls()
