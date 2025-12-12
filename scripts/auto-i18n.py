import os
import re
import json

# Textos comuns e suas chaves
COMMON_TRANSLATIONS = {
    "Save": "common.save",
    "Cancel": "common.cancel",
    "Close": "common.close",
    "Delete": "common.delete",
    "Edit": "common.edit",
    "Add": "common.add",
    "Loading...": "common.loading",
    "Back": "common.back",
    "Next": "common.next",
    "Finish": "common.finish",
    "Skip": "common.skip",
    "Save Changes": "common.save_changes",
    "Sign In": "common.sign_in",
    "Reset Fields": "calculator.reset_button",
    "Choose Your Style": "calculator.steps.step_1",
    "Define Quantity": "calculator.steps.step_2",
    "Customize Ingredients": "calculator.steps.step_3",
    "Fermentation Strategy": "calculator.steps.step_4",
    "Baking Environment": "calculator.steps.step_5",
    "Yeast Type": "form.yeast_type",
    "Hydration": "form.hydration",
    "Salt": "form.salt",
    "Generic Starter": "form.generic_starter",
    "Selected Levain": "form.selected_levain",
    "Last Fed": "form.last_fed",
    "Status": "form.status",
    "Active": "form.status_active",
    "Needs Attention": "form.status_needs_attention",
    "Resting": "form.status_resting",
    "No starters found in My Lab.": "form.no_starters",
    "Create Levain": "form.create_levain",
    "Advanced Ingredients": "form.advanced_ingredients",
}

def add_use_translation(content):
    """Adiciona import e hook useTranslation se não existir"""
    
    # Verificar se já tem useTranslation
    if "useTranslation" in content:
        return content
    
    # Adicionar import
    if "from '@/i18n'" not in content:
        # Encontrar última linha de import
        import_lines = []
        lines = content.split('\n')
        last_import_idx = 0
        
        for i, line in enumerate(lines):
            if line.strip().startswith('import '):
                last_import_idx = i
        
        # Inserir import após último import
        lines.insert(last_import_idx + 1, "import { useTranslation } from '@/i18n';")
        content = '\n'.join(lines)
    
    # Adicionar hook no componente
    # Procurar por padrão de componente funcional
    component_pattern = r'(const \w+[:\s]*React\.FC[^=]*=\s*\([^)]*\)\s*=>\s*\{)'
    
    def add_hook(match):
        return match.group(1) + '\n  const { t } = useTranslation();'
    
    content = re.sub(component_pattern, add_hook, content, count=1)
    
    return content

def replace_hardcoded_texts(content):
    """Substitui textos hardcoded por t()"""
    
    for text, key in COMMON_TRANSLATIONS.items():
        # Padrão para texto em JSX: >Text<
        content = re.sub(
            f'>{re.escape(text)}<',
            f'>{{t(\'{key}\')}}<',
            content
        )
        
        # Padrão para texto em atributos: "Text"
        content = re.sub(
            f'"{re.escape(text)}"',
            f'{{t(\'{key}\')}}',
            content
        )
    
    return content

def process_file(file_path):
    """Processa um arquivo .tsx"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original = content
        
        # Adicionar useTranslation
        content = add_use_translation(content)
        
        # Substituir textos
        content = replace_hardcoded_texts(content)
        
        # Salvar se mudou
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
    updated = 0
    
    for root, dirs, files in os.walk(src_dir):
        # Ignorar node_modules
        if 'node_modules' in root:
            continue
        
        for file in files:
            if file.endswith('.tsx'):
                file_path = os.path.join(root, file)
                count += 1
                
                if process_file(file_path):
                    updated += 1
                    print(f"✅ {file_path}")
                else:
                    print(f"⏭️  {file_path}")
    
    print(f"\n🎉 Processados: {count} arquivos")
    print(f"✅ Atualizados: {updated} arquivos")

if __name__ == "__main__":
    main()
