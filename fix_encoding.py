import json
import codecs

# Read the file with UTF-8 encoding
with codecs.open(r'c:\Users\eduar\Desktop\DoughLabPro\LonghisDough\public\locales\en\calculator.json', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix common encoding issues - more comprehensive list
replacements = {
    'Ã‚Â°C': '°C',
    'Ã‚Â°F': '°F',
    'Ã‚Â¢': '¢',
    'PÃ£o': 'Pão',
    'FrancÃªs': 'Francês',
    'FranÃ§aise': 'Française',
    'ÃƒÂ  TÃƒÂªte': 'à Tête',
    'Ã  TÃªte': 'à Tête',
    'RugbrÃ¸d': 'Rugbrød',
    # Additional patterns
    '\u00c3\u0192\u00c2 ': 'à ',
    '\u00c3\u0192\u00c2\u00aa': 'ê',
}

for old, new in replacements.items():
    content = content.replace(old, new)

# Write back with UTF-8 encoding
with codecs.open(r'c:\Users\eduar\Desktop\DoughLabPro\LonghisDough\public\locales\en\calculator.json', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed encoding issues!")
