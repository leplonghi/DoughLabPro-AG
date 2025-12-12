import os
import re

def fix_duplicate_imports(file_path):
    """Corrige imports duplicados no arquivo"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original = content
        
        # Padrão para detectar import duplicado dentro de outro import
        pattern = r"(import \{[^}]*)(import \{ useTranslation \} from '@/i18n';)"
        
        if re.search(pattern, content):
            # Remover o import duplicado de dentro do bloco
            content = re.sub(pattern, r'\1', content)
            
            # Adicionar o import correto após os imports
            if "import { useTranslation } from '@/i18n';" not in content:
                # Encontrar último import
                imports = list(re.finditer(r'^import .* from .*;$', content, re.MULTILINE))
                if imports:
                    last_import = imports[-1]
                    insert_pos = last_import.end()
                    content = content[:insert_pos] + "\nimport { useTranslation } from '@/i18n';" + content[insert_pos:]
        
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
                
                if fix_duplicate_imports(file_path):
                    fixed += 1
                    print(f"✅ Corrigido: {file_path}")
    
    print(f"\n📊 Processados: {count} arquivos")
    print(f"✅ Corrigidos: {fixed} arquivos")

if __name__ == "__main__":
    main()
