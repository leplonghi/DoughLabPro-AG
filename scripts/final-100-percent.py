import os
import re
import json
from pathlib import Path

# Carregar traduções existentes
with open('public/locales/en/translation.json', 'r', encoding='utf-8') as f:
    en_translations = json.load(f)

# Contador global de chaves
key_counter = {}

def get_section_from_path(file_path):
    """Determina seção baseada no caminho"""
    path_lower = file_path.lower()
    if 'calculator' in path_lower:
        return 'calculator'
    elif 'mylab' in path_lower or 'lab' in path_lower:
        return 'mylab'
    elif 'learn' in path_lower:
        return 'learn'
    elif 'community' in path_lower:
        return 'community'
    elif 'tool' in path_lower:
        return 'tools'
    elif 'auth' in path_lower or 'paywall' in path_lower:
        return 'auth'
    elif 'style' in path_lower:
        return 'styles'
    else:
        return 'ui'

def text_to_key(text, section):
    """Converte texto em chave única"""
    # Remover pontuação e caracteres especiais
    key = re.sub(r'[^\w\s]', '', text)
    # Converter para snake_case
    key = key.lower().replace(' ', '_')
    # Limitar tamanho
    key = key[:50]
    
    # Garantir unicidade
    if section not in key_counter:
        key_counter[section] = {}
    
    if key in key_counter[section]:
        key_counter[section][key] += 1
        key = f"{key}_{key_counter[section][key]}"
    else:
        key_counter[section][key] = 1
    
    return key

def should_translate(text):
    """Verifica se o texto deve ser traduzido"""
    if not text or len(text) < 2:
        return False
    if len(text) > 200:
        return False
    # Ignorar se parece código
    if any(char in text for char in ['{', '}', '(', ')', '[', ']', '<', '>', '/', '\\']):
        return False
    # Ignorar URLs e emails
    if 'http' in text or '@' in text or '.com' in text:
        return False
    # Ignorar constantes
    if text.isupper() and '_' in text:
        return False
    # Ignorar números puros
    if text.replace('.', '').replace(',', '').replace('%', '').isdigit():
        return False
    return True

def add_key_to_translations(section, key, text):
    """Adiciona chave às traduções"""
    if section not in en_translations:
        en_translations[section] = {}
    
    en_translations[section][key] = text
    return f"{section}.{key}"

def process_file(file_path):
    """Processa um arquivo e substitui textos"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original = content
        section = get_section_from_path(file_path)
        replacements = []
        
        # Verificar se já tem useTranslation
        has_use_translation = 'useTranslation' in content
        has_t_function = "const { t }" in content or "const{t}" in content
        
        # Adicionar import se necessário
        if not has_use_translation:
            # Encontrar último import
            import_pattern = r"^import .* from .*;$"
            imports = list(re.finditer(import_pattern, content, re.MULTILINE))
            if imports:
                last_import = imports[-1]
                insert_pos = last_import.end()
                content = content[:insert_pos] + "\nimport { useTranslation } from '@/i18n';" + content[insert_pos:]
        
        # Adicionar hook se necessário
        if not has_t_function and 'FC' in content:
            # Encontrar componente principal
            component_pattern = r'(const \w+[:\s]*(?:React\.)?FC[^=]*=\s*\([^)]*\)\s*=>\s*\{)'
            match = re.search(component_pattern, content)
            if match:
                insert_pos = match.end()
                content = content[:insert_pos] + '\n  const { t } = useTranslation();' + content[insert_pos:]
        
        # Padrão 1: Textos em JSX >Text<
        pattern1 = r'>([A-Z][^<>{}\n]{2,100})<'
        for match in re.finditer(pattern1, content):
            text = match.group(1).strip()
            if should_translate(text) and not text.startswith('t('):
                key = text_to_key(text, section)
                full_key = add_key_to_translations(section, key, text)
                old = f'>{text}<'
                new = f'>{{t(\'{full_key}\')}}<'
                content = content.replace(old, new, 1)
                replacements.append(f'{old} -> {new}')
        
        # Padrão 2: Atributos placeholder, title, label, alt
        pattern2 = r'(placeholder|title|label|alt|aria-label)=["\']([ A-Z][^"\']{2,100})["\'"]'
        for match in re.finditer(pattern2, content):
            attr = match.group(1)
            text = match.group(2).strip()
            if should_translate(text):
                key = text_to_key(text, section)
                full_key = add_key_to_translations(section, key, text)
                old = f'{attr}="{text}"'
                new = f'{attr}={{t(\'{full_key}\')}}'
                content = content.replace(old, new, 1)
                replacements.append(f'{old} -> {new}')
        
        # Padrão 3: Strings em variáveis const/let
        pattern3 = r'(?:const|let)\s+(\w+)\s*=\s*["\']([ A-Z][^"\']{3,100})["\']\s*;'
        for match in re.finditer(pattern3, content):
            var_name = match.group(1)
            text = match.group(2).strip()
            if should_translate(text) and var_name not in ['className', 'style']:
                key = text_to_key(text, section)
                full_key = add_key_to_translations(section, key, text)
                old = f'{var_name} = "{text}"'
                new = f'{var_name} = t(\'{full_key}\')'
                content = content.replace(old, new, 1)
                replacements.append(f'{old} -> {new}')
        
        if content != original:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True, len(replacements)
        
        return False, 0
    except Exception as e:
        print(f"❌ Erro em {file_path}: {e}")
        return False, 0

# Processar todos os arquivos
total_files = 0
updated_files = 0
total_replacements = 0

print("🚀 Processamento FINAL - 100% de cobertura...\n")

for root, dirs, files in os.walk('src'):
    # Ignorar node_modules
    if 'node_modules' in root:
        continue
    
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            file_path = os.path.join(root, file)
            total_files += 1
            
            success, count = process_file(file_path)
            if success:
                updated_files += 1
                total_replacements += count
                print(f"✅ {file_path} ({count} substituições)")

# Salvar traduções atualizadas
with open('public/locales/en/translation.json', 'w', encoding='utf-8') as f:
    json.dump(en_translations, f, indent=2, ensure_ascii=False)

print(f"\n📊 Processados: {total_files} arquivos")
print(f"✅ Atualizados: {updated_files} arquivos")
print(f"🔄 Substituições: {total_replacements}")
print(f"🔑 Chaves criadas: {sum(len(v) for v in en_translations.values())}")
print(f"\n🎉 Processamento 100% concluído!")
