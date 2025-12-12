import os
import re

def fix_syntax_errors(file_path):
    """Corrige erros de sintaxe comuns da automação"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original = content
        
        # Padrão 1: {t('key')} dentro de ternário ou expressão
        # Exemplo: ? "text" : {t('key')} -> ? "text" : t('key')
        content = re.sub(r':\s*\{t\(([^)]+)\)\}', r': t(\1)', content)
        content = re.sub(r'\?\s*\{t\(([^)]+)\)\}', r'? t(\1)', content)
        
        # Padrão 2: {{t('key')}} (duplo)
        content = re.sub(r'\{\{t\(([^)]+)\)\}\}', r'{t(\1)}', content)
        
        # Padrão 3: {t('key')} em atributos que esperam string
        # label={{t('key')}} -> label={t('key')}
        content = re.sub(r'=\{\{t\(([^)]+)\)\}\}', r'={t(\1)}', content)
        
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
                
                if fix_syntax_errors(file_path):
                    fixed += 1
                    print(f"✅ Corrigido: {file_path}")
    
    print(f"\n📊 Processados: {count} arquivos")
    print(f"✅ Corrigidos: {fixed} arquivos")

if __name__ == "__main__":
    main()
