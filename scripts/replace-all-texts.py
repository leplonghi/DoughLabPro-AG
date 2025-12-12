import json
import re
import os

# Carregar mapeamento
with open('docs/i18n-generated/text-to-key-mapping.json', 'r', encoding='utf-8') as f:
    mappings = json.load(f)

def escape_regex(text):
    """Escapa caracteres especiais para regex"""
    return re.escape(text)

def replace_texts_in_file(file_path, text_map):
    """Substitui textos hardcoded por t() em um arquivo"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original = content
        replacements = 0
        
        for text, key in text_map.items():
            # Padrão 1: >Text< em JSX
            pattern1 = f'>{escape_regex(text)}<'
            replacement1 = f'>{{t(\'{key}\')}}<'
            if re.search(pattern1, content):
                content = re.sub(pattern1, replacement1, content)
                replacements += 1
            
            # Padrão 2: "Text" em atributos
            pattern2 = f'"{escape_regex(text)}"'
            replacement2 = f'{{t(\'{key}\')}}'
            # Evitar substituir em imports e outras strings
            if re.search(f'(?:placeholder|title|label|alt|aria-label)={pattern2}', content):
                content = re.sub(f'((?:placeholder|title|label|alt|aria-label)=){pattern2}', f'\\1{replacement2}', content)
                replacements += 1
        
        if content != original:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True, replacements
        
        return False, 0
    except Exception as e:
        print(f"❌ Erro em {file_path}: {e}")
        return False, 0

# Processar arquivos
total_files = 0
total_replacements = 0
updated_files = 0

print("🔄 Substituindo textos hardcoded por t()...\n")

for file_path, text_map in mappings.items():
    if not text_map:
        continue
    
    total_files += 1
    success, count = replace_texts_in_file(file_path, text_map)
    
    if success:
        updated_files += 1
        total_replacements += count
        print(f"✅ {file_path} ({count} substituições)")

print(f"\n📊 Processados: {total_files} arquivos")
print(f"✅ Atualizados: {updated_files} arquivos")
print(f"🔄 Total de substituições: {total_replacements}")
print(f"\n🎉 Tradução completa!")
