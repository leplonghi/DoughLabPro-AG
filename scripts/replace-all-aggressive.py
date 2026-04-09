import json
import re

# Carregar mapeamento
with open('docs/i18n-generated/text-to-key-mapping.json', 'r', encoding='utf-8') as f:
    mappings = json.load(f)

def replace_all_patterns(file_path, text_map):
    """Substitui textos hardcoded usando múltiplos padrões"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original = content
        replacements = []
        
        for text, key in text_map.items():
            # Escapar caracteres especiais
            escaped_text = re.escape(text)
            
            # Padrão 1: >Text< em JSX
            pattern1 = f'>{escaped_text}<'
            if re.search(pattern1, content):
                content = re.sub(pattern1, f'>{{t(\'{key}\')}}<', content)
                replacements.append(f">'{text}'< -> t('{key}')")
            
            # Padrão 2: "Text" em atributos
            pattern2 = f'"{escaped_text}"'
            # Verificar se é em atributo
            if re.search(f'\\w+={pattern2}', content):
                content = re.sub(f'(\\w+)={pattern2}', f'\\1={{t(\'{key}\')}}', content)
                replacements.append(f'attr="{text}" -> attr={{t(\'{key}\')}}"')
            
            # Padrão 3: 'Text' em atributos (aspas simples)
            pattern3 = f"'{escaped_text}'"
            if re.search(f'\\w+={pattern3}', content):
                content = re.sub(f'(\\w+)={pattern3}', f'\\1={{t(\'{key}\')}}', content)
                replacements.append(f"attr='{text}' -> attr={{t('{key}')}}")
            
            # Padrão 4: {Text} em JSX (sem aspas)
            pattern4 = f'{{"{escaped_text}"}}'
            if pattern4 in content:
                content = content.replace(pattern4, f'{{t(\'{key}\')}}')
                replacements.append(f'{{"{text}"}} -> {{t(\'{key}\')}}"')
            
            # Padrão 5: Texto solto em JSX (entre tags)
            # Cuidado: só substituir se não estiver em comentário ou string
            # Verificar se está entre > e <
            if re.search(f'>{escaped_text}<', content):
                # Já foi tratado no padrão 1
                pass
        
        if content != original:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True, len(replacements), replacements
        
        return False, 0, []
    except Exception as e:
        print(f"❌ Erro em {file_path}: {e}")
        return False, 0, []

# Processar arquivos
total_files = 0
total_replacements = 0
updated_files = 0

print("🔄 Substituindo TODOS os textos hardcoded...\n")

for file_path, text_map in mappings.items():
    if not text_map:
        continue
    
    total_files += 1
    success, count, replacements = replace_all_patterns(file_path, text_map)
    
    if success:
        updated_files += 1
        total_replacements += count
        print(f"✅ {file_path} ({count} substituições)")
        # Mostrar primeiras 3 substituições
        for r in replacements[:3]:
            print(f"   - {r}")
        if len(replacements) > 3:
            print(f"   ... e mais {len(replacements) - 3}")

print(f"\n📊 Processados: {total_files} arquivos")
print(f"✅ Atualizados: {updated_files} arquivos")
print(f"🔄 Total de substituições: {total_replacements}")
print(f"\n🎉 Tradução completa!")
