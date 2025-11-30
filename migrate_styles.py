import re
import json
import os

# Path to the file
file_path = r'c:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\src\data\stylesData.ts'

# Read the file
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the RAW_CANONICAL_STYLES array content
# We look for "export const RAW_CANONICAL_STYLES = [" and the closing "];"
start_marker = "export const RAW_CANONICAL_STYLES = ["
end_marker = "];"

start_index = content.find(start_marker)
if start_index == -1:
    print("Could not find start marker")
    exit(1)

start_index += len(start_marker)
# Find the matching closing bracket is hard with nested objects.
# But we know the file structure. It ends with "];" before the transformation logic.
# Let's just take everything until the transformation logic starts.
# The transformation logic starts with "// Transform Raw Canonical Data"
transform_marker = "// Transform Raw Canonical Data"
end_index = content.find(transform_marker)

if end_index == -1:
    print("Could not find transform marker")
    exit(1)

# Backtrack to find the closing "];"
array_content = content[start_index:end_index]
array_content = array_content.strip()
if array_content.endswith('];'):
    array_content = array_content[:-2]
elif array_content.endswith(']'):
    array_content = array_content[:-1]

# Now we have the content of the array. It's a list of JS objects.
# We need to parse this. Since it's JS, not JSON (keys are not quoted), we can't use json.loads directly.
# We'll use a simple approach: split by "}," (assuming formatting is consistent) and process each block.
# Or better, use regex to find each object.

# The file is well formatted. Each object starts with "  {" and ends with "  },"
# We can split by "  },"
objects_raw = array_content.split("  },\n")

styles = []

def parse_js_object(raw_obj):
    # This is a hacky parser.
    # We'll extract fields using regex.
    obj = {}
    
    def get_field(name, text):
        pattern = re.compile(r'\b' + name + r':\s*(.*?),?\n', re.DOTALL)
        match = pattern.search(text)
        if match:
            val = match.group(1).strip()
            # Clean up trailing comma if present (regex might catch it)
            if val.endswith(','):
                val = val[:-1]
            # Handle strings
            if val.startswith('"') and val.endswith('"'):
                return val[1:-1]
            # Handle numbers
            if val.replace('.', '', 1).isdigit():
                return float(val)
            # Handle arrays (simple ones)
            if val.startswith('[') and val.endswith(']'):
                return val
            return val
        return None

    def get_block(name, text):
        # Extract a block like "origin: { ... }"
        pattern = re.compile(r'\b' + name + r':\s*\{(.*?)\}', re.DOTALL)
        match = pattern.search(text)
        if match:
            return match.group(1)
        return None

    obj['id'] = get_field('id', raw_obj)
    obj['category'] = get_field('category', raw_obj)
    obj['family'] = get_field('family', raw_obj)
    obj['variantName'] = get_field('variantName', raw_obj)
    
    origin_block = get_block('origin', raw_obj)
    if origin_block:
        obj['origin'] = {
            'country': get_field('country', origin_block),
            'region': get_field('region', origin_block),
            'period': get_field('period', origin_block)
        }
    
    obj['history'] = get_field('history', raw_obj)
    obj['culturalContext'] = get_field('culturalContext', raw_obj)
    
    tech_block = get_block('technicalProfile', raw_obj)
    if tech_block:
        obj['technicalProfile'] = {
            'hydrationRange': get_field('hydrationRange', tech_block),
            'saltRange': get_field('saltRange', tech_block),
            'fatRange': get_field('fatRange', tech_block),
            'sugarRange': get_field('sugarRange', tech_block),
            'preferment': get_field('preferment', tech_block),
            'flourStrength': get_field('flourStrength', tech_block),
            'oven': get_block('oven', tech_block),
            'fermentation': get_block('fermentation', tech_block),
            'recommendedUse': get_field('recommendedUse', tech_block)
        }
        # Parse nested oven and fermentation
        if obj['technicalProfile']['oven']:
            oven_block = obj['technicalProfile']['oven']
            obj['technicalProfile']['oven'] = {
                'type': get_field('type', oven_block),
                'temperatureC': get_field('temperatureC', oven_block),
                'notes': get_field('notes', oven_block)
            }
        if obj['technicalProfile']['fermentation']:
            ferm_block = obj['technicalProfile']['fermentation']
            obj['technicalProfile']['fermentation'] = {
                'bulk': get_field('bulk', ferm_block),
                'proof': get_field('proof', ferm_block),
                'coldRetard': get_field('coldRetard', ferm_block)
            }

    # References is an array of strings
    refs_match = re.search(r'references:\s*\[(.*?)\]', raw_obj, re.DOTALL)
    if refs_match:
        refs_str = refs_match.group(1)
        # Split by comma, strip quotes
        refs = [r.strip().strip('"') for r in refs_str.split(',')]
        obj['references'] = refs
    
    obj['isCanonical'] = True
    obj['source'] = "official"
    
    return obj

parsed_styles = []
for raw in objects_raw:
    if not raw.strip(): continue
    # Add back the closing brace if missing due to split
    if not raw.strip().endswith('}'):
        raw += "  }"
    parsed_styles.append(parse_js_object(raw))

# Grouping Logic
grouped_styles = {}
# Map of old IDs to new Group IDs
id_map = {
    'neapolitan_avpn_classic': 'neapolitan',
    'neapolitan_contemporary_high_hydration': 'neapolitan',
    'neapolitan_home_oven_adapted': 'neapolitan',
    'new_york_slice_shop': 'new_york',
    'new_york_artisan_cold_ferment': 'new_york',
    'ciabatta_high_hydration': 'ciabatta'
}

# Process styles
final_styles = []
processed_ids = set()

for style in parsed_styles:
    old_id = style['id']
    if not old_id: continue
    
    group_id = id_map.get(old_id, old_id)
    
    if group_id in processed_ids:
        # It's a substyle of an already processed group
        # Find the group
        for s in final_styles:
            if s['id'] == group_id:
                # Add as substyle
                substyle = {
                    'id': old_id,
                    'title': style['variantName'],
                    'description': style['history'][:100] + "...", # Brief description
                    'technicalAdjustments': {}, # Populate if needed
                    'notes': [],
                    'isNew': False
                }
                s['substyles'].append(substyle)
                break
        continue
    
    # New Group
    new_style = {
        'id': group_id,
        'name': style['variantName'] if group_id == old_id else style['family'], # Use family name for groups
        'family': style['family'],
        'category': style['category'],
        'description': style['history'].split('.')[0] + '.',
        'origin': style['origin'],
        'history': style['history'],
        'culturalContext': style['culturalContext'],
        'isCanonical': True,
        'source': "official",
        'releaseDate': "2025-01-01",
        'technicalProfile': {
            'hydration': style['technicalProfile']['hydrationRange'],
            'salt': style['technicalProfile']['saltRange'],
            'oil': style['technicalProfile']['fatRange'],
            'sugar': style['technicalProfile']['sugarRange'],
            'flourStrength': style['technicalProfile']['flourStrength'],
            'fermentation': style['technicalProfile']['fermentation'],
            'oven': style['technicalProfile']['oven'],
            'difficulty': "Medium" # Default
        },
        'substyles': [],
        'regionExpressions': [],
        'seasonalVariants': [],
        'experimentalVariants': [],
        'tags': [],
        'references': [{'source': r} for r in style.get('references', [])]
    }
    
    # If this is a group leader (like neapolitan), add itself as the first substyle?
    # Or just keep it as the main profile.
    # The prompt says: "ciabatta: { substyles: [ { title: 'Poolish Classic', id: 'ciabatta_poolish' } ... ] }"
    # So the main style has a profile, and substyles are variations.
    
    if group_id != old_id:
        # This is the first of a group (e.g. neapolitan_avpn_classic -> neapolitan)
        # Add the first one as a substyle too?
        # Usually the main profile represents the "Classic" or "Base".
        # Let's add it as a substyle "Classic"
        new_style['substyles'].append({
            'id': old_id,
            'title': style['variantName'],
            'description': "Classic definition.",
            'isNew': False
        })
        # Update name to be more generic
        if group_id == 'neapolitan': new_style['name'] = 'Neapolitan Pizza'
        if group_id == 'new_york': new_style['name'] = 'New York Style Pizza'
        if group_id == 'ciabatta': new_style['name'] = 'Ciabatta'

    final_styles.append(new_style)
    processed_ids.add(group_id)

# Generate TS Output
ts_output = """
import { DoughStyleDefinition, StyleCategory } from '../types';

export const STYLES_DATA: DoughStyleDefinition[] = [
"""

def format_ts_object(obj, indent=2):
    lines = []
    spaces = " " * indent
    lines.append(spaces + "{")
    for key, value in obj.items():
        if key == 'technicalProfile':
            lines.append(spaces + "  technicalProfile: {")
            tp = value
            lines.append(spaces + f"    hydration: {tp['hydration']},")
            lines.append(spaces + f"    salt: {tp['salt']},")
            lines.append(spaces + f"    oil: {tp['oil']},")
            lines.append(spaces + f"    sugar: {tp['sugar']},")
            lines.append(spaces + f"    flourStrength: \"{tp['flourStrength']}\",")
            lines.append(spaces + "    fermentation: {")
            lines.append(spaces + f"      bulk: \"{tp['fermentation']['bulk']}\",")
            lines.append(spaces + f"      proof: \"{tp['fermentation']['proof']}\",")
            lines.append(spaces + f"      coldRetard: \"{tp['fermentation']['coldRetard']}\"")
            lines.append(spaces + "    },")
            lines.append(spaces + "    oven: {")
            lines.append(spaces + f"      temperatureC: {tp['oven']['temperatureC']},")
            lines.append(spaces + f"      type: \"{tp['oven']['type']}\",")
            lines.append(spaces + f"      notes: \"{tp['oven']['notes']}\"")
            lines.append(spaces + "    },")
            lines.append(spaces + f"    difficulty: \"{tp['difficulty']}\"")
            lines.append(spaces + "  },")
        elif key == 'origin':
            lines.append(spaces + f"  origin: {{ country: \"{value['country']}\", region: \"{value.get('region', '')}\", period: \"{value.get('period', '')}\" }},")
        elif key == 'substyles':
            lines.append(spaces + "  substyles: [")
            for sub in value:
                lines.append(spaces + "    {")
                lines.append(spaces + f"      id: \"{sub['id']}\",")
                lines.append(spaces + f"      title: \"{sub['title']}\",")
                lines.append(spaces + f"      description: \"{sub['description']}\",")
                lines.append(spaces + "      isNew: " + str(sub['isNew']).lower())
                lines.append(spaces + "    },")
            lines.append(spaces + "  ],")
        elif key == 'references':
             lines.append(spaces + "  references: [")
             for ref in value:
                 lines.append(spaces + f"    {{ source: \"{ref['source']}\" }},")
             lines.append(spaces + "  ],")
        elif isinstance(value, list):
            lines.append(spaces + f"  {key}: [],")
        elif isinstance(value, str):
            safe_val = value.replace('"', '\\"').replace('\n', ' ')
            lines.append(spaces + f"  {key}: \"{safe_val}\",")
        elif isinstance(value, bool):
            lines.append(spaces + f"  {key}: {str(value).lower()},")
        else:
            lines.append(spaces + f"  {key}: {value},")
    lines.append(spaces + "},")
    return "\n".join(lines)

for style in final_styles:
    ts_output += format_ts_object(style) + "\n"

ts_output += "];\n"

# Write to file
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(ts_output)

print("Migration complete!")
