import os
import re
import json

# Carregar chaves existentes
with open('public/locales/en/translation.json', 'r', encoding='utf-8') as f:
    translations = json.load(f)

def get_nested_key(obj, path):
    """Verifica se uma chave aninhada existe"""
    keys = path.split('.')
    current = obj
    for key in keys:
        if isinstance(current, dict) and key in current:
            current = current[key]
        else:
            return None
    return current

def revert_invalid_keys(file_path):
    """Reverte chaves t() que não existem nos arquivos de tradução"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original = content
        
        # Encontrar todos os usos de t('key')
        pattern = r"t\('([^']+)'\)"
        matches = re.findall(pattern, content)
        
        for key in matches:
            # Verificar se a chave existe
            value = get_nested_key(translations, key)
            if value is None:
                # Chave não existe - reverter para texto hardcoded
                # Tentar adivinhar o texto original
                parts = key.split('.')
                text = parts[-1].replace('_', ' ').title()
                
                # Substituir t('key') por "Text"
                content = content.replace(f"t('{key}')", f'"{text}"')
                print(f"  ⚠️  Revertido: {key} -> \"{text}\"")
        
        if content != original:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
    except Exception as e:
        print(f"Erro em {file_path}: {e}")
        return False

def main():
    """Processa todos os arquivos .tsx"""
    src_dir = 'src'
    count = 0
    fixed = 0
    
    for root, dirs, files in os.walk(src_dir):
        if 'node_modules' in root:
            continue
        
        for file in files:
            if file.endswith('.tsx'):
                file_path = os.path.join(root, file)
                count += 1
                
                print(f"Verificando: {file_path}")
                if revert_invalid_keys(file_path):
                    fixed += 1
                    print(f"✅ Corrigido: {file_path}\n")
    
    print(f"\n📊 Processados: {count} arquivos")
    print(f"✅ Corrigidos: {fixed} arquivos")

if __name__ == "__main__":
    main()
