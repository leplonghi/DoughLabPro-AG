import os
import re
import json
from pathlib import Path

# Carregar traduções existentes
def load_translations():
    with open('public/locales/en/translation.json', 'r', encoding='utf-8') as f:
        return json.load(f)

# Mapeamento de textos comuns para chaves existentes
COMMON_MAPPINGS = {
    # Ações
    "Save": "common.save",
    "Cancel": "common.cancel",
    "Close": "common.close",
    "Delete": "common.delete",
    "Edit": "common.edit",
    "Add": "common.add",
    "Back": "common.back",
    "Next": "common.next",
    "Finish": "common.finish",
    "Loading...": "common.loading",
    "Sign In": "common.sign_in",
    
    # Navegação
    "Home": "nav.home",
    "Calculator": "nav.calculator",
    "Learn": "nav.learn",
    "My Lab": "nav.lab",
    "Tools": "nav.tools",
    "Community": "nav.community",
    "Settings": "nav.settings",
    "Help": "nav.help",
    
    # Formulário
    "Hydration": "form.hydration",
    "Salt": "form.salt",
    "Sugar": "form.sugar",
    "Yeast": "form.yeast",
    "Oil": "form.oil",
    
    # Resultados
    "Flour": "results.flour",
    "Water": "results.water",
    "Yeast": "results.yeast",
    "Salt": "results.salt",
    "Sugar": "results.sugar",
    "Oil": "results.oil",
    
    # MyLab
    "New Bake": "mylab_page.new_bake",
    "My Batches": "mylab_page.my_batches",
    "My Recipes": "mylab_page.my_recipes",
    "My Flours": "mylab_page.my_flours",
}

def get_nested_value(obj, path):
    """Pega valor aninhado de um objeto"""
    keys = path.split('.')
    current = obj
    for key in keys:
        if isinstance(current, dict) and key in current:
            current = current[key]
        else:
            return None
    return current

def add_translation_if_missing(translations, key, value):
    """Adiciona tradução se não existir"""
    keys = key.split('.')
    current = translations
    
    for i, k in enumerate(keys[:-1]):
        if k not in current:
            current[k] = {}
        current = current[k]
    
    # Adicionar apenas se não existir
    if keys[-1] not in current:
        current[keys[-1]] = value
        return True
    return False

def process_file(file_path, translations):
    """Processa um arquivo e adiciona useTranslation"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original = content
        changes = []
        
        # Verificar se já tem useTranslation
        has_translation = 'useTranslation' in content
        
        if not has_translation:
            # Adicionar import
            if "from '@/i18n'" not in content:
                # Encontrar último import
                import_lines = list(re.finditer(r'^import .* from .*;$', content, re.MULTILINE))
                if import_lines:
                    last_import = import_lines[-1]
                    insert_pos = last_import.end()
                    content = content[:insert_pos] + "\nimport { useTranslation } from '@/i18n';" + content[insert_pos:]
            
            # Adicionar hook no componente
            component_pattern = r'(const \w+[:\s]*(?:React\.)?FC[^=]*=\s*\([^)]*\)\s*=>\s*\{)'
            def add_hook(match):
                return match.group(1) + '\n  const { t } = useTranslation();'
            content = re.sub(component_pattern, add_hook, content, count=1)
        
        # Substituir textos por chaves existentes
        for text, key in COMMON_MAPPINGS.items():
            # Verificar se a chave existe
            if get_nested_value(translations, key) is not None:
                # Substituir em JSX: >Text<
                old_pattern = f'>{re.escape(text)}<'
                new_pattern = f'>{{t(\'{key}\')}}<'
                if re.search(old_pattern, content):
                    content = re.sub(old_pattern, new_pattern, content)
                    changes.append(f"{text} -> {key}")
                
                # Substituir em atributos: "Text"
                old_pattern = f'"{re.escape(text)}"'
                new_pattern = f'{{t(\'{key}\')}}'
                if re.search(old_pattern, content):
                    content = re.sub(old_pattern, new_pattern, content)
                    changes.append(f'"{text}" -> {key}')
        
        if content != original:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True, changes
        
        return False, []
    except Exception as e:
        print(f"Erro em {file_path}: {e}")
        return False, []

def main():
    """Processa todos os arquivos"""
    translations = load_translations()
    
    src_dir = 'src'
    count = 0
    updated = 0
    
    print("🚀 Iniciando tradução completa...\n")
    
    for root, dirs, files in os.walk(src_dir):
        if 'node_modules' in root:
            continue
        
        for file in files:
            if file.endswith('.tsx'):
                file_path = os.path.join(root, file)
                count += 1
                
                success, changes = process_file(file_path, translations)
                if success:
                    updated += 1
                    print(f"✅ {file_path}")
                    if changes:
                        for change in changes[:3]:  # Mostrar primeiras 3 mudanças
                            print(f"   - {change}")
    
    print(f"\n📊 Processados: {count} arquivos")
    print(f"✅ Atualizados: {updated} arquivos")
    print(f"\n🎉 Tradução completa!")

if __name__ == "__main__":
    main()
