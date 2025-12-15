import os
import json

def load_json(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def flatten(data, prefix=""):
    items = {}
    for k, v in data.items():
        key = f"{prefix}.{k}" if prefix else k
        if isinstance(v, dict):
            items.update(flatten(v, key))
        else:
            items[key] = v
    return items

def audit_namespace(base_dir, ns):
    en_path = os.path.join(base_dir, 'public', 'locales', 'en', f"{ns}.json")
    pt_path = os.path.join(base_dir, 'public', 'locales', 'pt', f"{ns}.json")
    es_path = os.path.join(base_dir, 'public', 'locales', 'es', f"{ns}.json")
    
    if not os.path.exists(en_path):
        return {"error": f"EN file missing for {ns}"}

    en_data = load_json(en_path)
    en_flat = flatten(en_data)
    
    report = {
        "ns": ns, 
        "missing_pt": {}, 
        "missing_es": {},
        "empty_pt": {},
        "empty_es": {},
        "same_as_en_pt": {},
        "same_as_en_es": {}
    }
    
    # Check PT
    if os.path.exists(pt_path):
        pt_data = load_json(pt_path)
        pt_flat = flatten(pt_data)
        for k, v in en_flat.items():
            if k not in pt_flat:
                report["missing_pt"][k] = v
            elif pt_flat[k] == "":
                report["empty_pt"][k] = v
            elif pt_flat[k] == v and len(str(v)) > 3 and not k.endswith("_id") and not k.endswith(".id"):
                # Heuristic: same value, length > 3, not an ID
                report["same_as_en_pt"][k] = v
    else:
        report["missing_pt"] = en_flat

    # Check ES
    if os.path.exists(es_path):
        es_data = load_json(es_path)
        es_flat = flatten(es_data)
        for k, v in en_flat.items():
            if k not in es_flat:
                report["missing_es"][k] = v
            elif es_flat[k] == "":
                report["empty_es"][k] = v
            elif es_flat[k] == v and len(str(v)) > 3 and not k.endswith("_id") and not k.endswith(".id"):
                 report["same_as_en_es"][k] = v
    else:
        report["missing_es"] = en_flat

    return report

if __name__ == "__main__":
    namespaces = ["auth", "calculator", "common", "dashboard", "marketing"]
    base_dir = os.getcwd()
    full_report = {}
    
    for ns in namespaces:
        full_report[ns] = audit_namespace(base_dir, ns)
    
    # summarize to avoid huge output if everything is fine
    summary = {}
    for ns, data in full_report.items():
        summary[ns] = {
            "missing_pt": len(data["missing_pt"]),
            "missing_es": len(data["missing_es"]),
            "empty_pt": len(data["empty_pt"]),
            "empty_es": len(data["empty_es"]),
            "same_as_en_pt_count": len(data["same_as_en_pt"]),
            "same_as_en_es_count": len(data["same_as_en_es"]),
            # "samples_pt": list(data["same_as_en_pt"].keys())[:5]
        }
        
    print(json.dumps(summary, indent=2))
    
    # detailed print if needed
    # print(json.dumps(full_report, indent=2, ensure_ascii=False))
