import codecs

# Read the file
with codecs.open(r'c:\Users\eduar\Desktop\DoughLabPro\LonghisDough\public\locales\en\calculator.json', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Fix line 290 (index 289)
for i, line in enumerate(lines):
    if 'brioche_tete_name' in line:
        lines[i] = '        "brioche_tete_name": "Brioche à Tête",\r\n'
        print(f"Fixed line {i+1}")
        break

# Write back
with codecs.open(r'c:\Users\eduar\Desktop\DoughLabPro\LonghisDough\public\locales\en\calculator.json', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Done!")
