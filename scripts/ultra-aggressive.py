import os
import re
import json

# Carregar traduções
with open('public/locales/en/translation.json', 'r', encoding='utf-8') as f:
    en_trans = json.load(f)

key_counter = {}

def get_section(path):
    p = path.lower()
    if 'calculator' in p: return 'calculator'
    if 'mylab' in p or 'lab' in p: return 'mylab'
    if 'learn' in p: return 'learn'
    if 'community' in p: return 'community'
    if 'tool' in p: return 'tools'
    if 'auth' in p or 'paywall' in p: return 'auth'
    if 'style' in p: return 'styles'
    return 'ui'

def make_key(text, section):
    key = re.sub(r'[^\w\s]', '', text).lower().replace(' ', '_')[:50]
    if section not in key_counter:
        key_counter[section] = {}
    if key in key_counter[section]:
        key_counter[section][key] += 1
        key = f"{key}_{key_counter[section][key]}"
    else:
        key_counter[section][key] = 1
    return key

def should_translate(text):
    if not text or len(text) < 2 or len(text) > 200:
        return False
    if any(c in text for c in ['{', '}', '(', ')', '[', ']', '<', '>', '/', '\\']):
        return False
    if 'http' in text or '@' in text or '.com' in text:
        return False
    if text.isupper() and '_' in text:
        return False
    if text.replace('.', '').replace(',', '').replace('%', '').isdigit():
        return False
    return True

def add_key(section, key, text):
    if section not in en_trans:
        en_trans[section] = {}
    en_trans[section][key] = text
    return f"{section}.{key}"

def process_file(path):
    try:
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original = content
        section = get_section(path)
        changes = 0
        
        # Garantir useTranslation
        if 'useTranslation' not in content:
            imports = list(re.finditer(r"^import .* from .*;$", content, re.MULTILINE))
            if imports:
                pos = imports[-1].end()
                content = content[:pos] + "\nimport { useTranslation } from '@/i18n';" + content[pos:]
        
        # Garantir hook
        if "const { t }" not in content and "const{t}" not in content and 'FC' in content:
            match = re.search(r'(const \w+[:\s]*(?:React\.)?FC[^=]*=\s*\([^)]*\)\s*=>\s*\{)', content)
            if match:
                pos = match.end()
                content = content[:pos] + '\n  const { t } = useTranslation();' + content[pos:]
        
        # PADRÃO 1: Template literals com texto fixo
        # `Some text ${var}` -> `${t('key')} ${var}`
        pattern1 = r'`([A-Z][^`$]*?)\$\{[^}]+\}'
        for match in re.finditer(pattern1, content):
            text = match.group(1).strip()
            if should_translate(text) and len(text) > 3:
                key = make_key(text, section)
                full_key = add_key(section, key, text)
                old = f'`{text}$'
                new = f'`${{t(\'{full_key}\')}}$'
                if old in content:
                    content = content.replace(old, new, 1)
                    changes += 1
        
        # PADRÃO 2: Arrays de strings
        # ["Text 1", "Text 2"] -> [t('key1'), t('key2')]
        pattern2 = r'\[(["\'][A-Z][^"\']{2,50}["\'][,\s]*)+\]'
        for match in re.finditer(pattern2, content):
            array_content = match.group(0)
            strings = re.findall(r'["\']([A-Z][^"\']{2,50})["\']', array_content)
            if strings:
                new_array = '['
                for i, text in enumerate(strings):
                    if should_translate(text):
                        key = make_key(text, section)
                        full_key = add_key(section, key, text)
                        new_array += f"t('{full_key}')"
                        if i < len(strings) - 1:
                            new_array += ', '
                new_array += ']'
                if len(strings) > 0:
                    content = content.replace(array_content, new_array, 1)
                    changes += len(strings)
        
        # PADRÃO 3: Objetos com propriedades de texto
        # { title: "Text" } -> { title: t('key') }
        pattern3 = r'(\w+):\s*["\']([A-Z][^"\']{2,80})["\']'
        for match in re.finditer(pattern3, content):
            prop = match.group(1)
            text = match.group(2).strip()
            if should_translate(text) and prop not in ['className', 'style', 'type', 'name', 'id']:
                key = make_key(text, section)
                full_key = add_key(section, key, text)
                old = f'{prop}: "{text}"'
                new = f'{prop}: t(\'{full_key}\')'
                if old in content:
                    content = content.replace(old, new, 1)
                    changes += 1
        
        # PADRÃO 4: Ternários com strings
        # condition ? "Text A" : "Text B"
        pattern4 = r'\?\s*["\']([A-Z][^"\']{2,80})["\']'
        for match in re.finditer(pattern4, content):
            text = match.group(1).strip()
            if should_translate(text):
                key = make_key(text, section)
                full_key = add_key(section, key, text)
                old = f'? "{text}"'
                new = f'? t(\'{full_key}\')'
                if old in content:
                    content = content.replace(old, new, 1)
                    changes += 1
        
        pattern5 = r':\s*["\']([A-Z][^"\']{2,80})["\']'
        for match in re.finditer(pattern5, content):
            text = match.group(1).strip()
            if should_translate(text) and ': "' + text + '"' in content:
                key = make_key(text, section)
                full_key = add_key(section, key, text)
                old = f': "{text}"'
                new = f': t(\'{full_key}\')'
                if old in content:
                    content = content.replace(old, new, 1)
                    changes += 1
        
        if content != original:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True, changes
        
        return False, 0
    except Exception as e:
        print(f"❌ {path}: {e}")
        return False, 0

# Processar
total = 0
updated = 0
total_changes = 0

print("🚀 Processamento ULTRA-AGRESSIVO...\n")

for root, dirs, files in os.walk('src'):
    if 'node_modules' in root:
        continue
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            path = os.path.join(root, file)
            total += 1
            success, changes = process_file(path)
            if success:
                updated += 1
                total_changes += changes
                print(f"✅ {path} ({changes})")

# Salvar
with open('public/locales/en/translation.json', 'w', encoding='utf-8') as f:
    json.dump(en_trans, f, indent=2, ensure_ascii=False)

print(f"\n📊 Processados: {total}")
print(f"✅ Atualizados: {updated}")
print(f"🔄 Mudanças: {total_changes}")
print(f"🔑 Chaves totais: {sum(len(v) for v in en_trans.values())}")
print(f"\n🎉 Concluído!")
