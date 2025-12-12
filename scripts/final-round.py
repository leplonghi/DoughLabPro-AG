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
    if not text or len(text) < 2 or len(text) > 300:
        return False
    # Permitir alguns caracteres especiais agora
    if text.count('{') > 2 or text.count('(') > 2:
        return False
    if 'http' in text or '@' in text or '.com' in text:
        return False
    if text.isupper() and len(text) > 10:
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
        
        # PADRÃO FINAL 1: Strings em return statements
        # return "Text"
        pattern1 = r'return\s+["\']([A-Za-z][^"\']{2,100})["\']'
        for match in re.finditer(pattern1, content):
            text = match.group(1).strip()
            if should_translate(text):
                key = make_key(text, section)
                full_key = add_key(section, key, text)
                old = f'return "{text}"'
                new = f'return t(\'{full_key}\')'
                if old in content:
                    content = content.replace(old, new, 1)
                    changes += 1
        
        # PADRÃO FINAL 2: Strings após operador ||
        # || "Default text"
        pattern2 = r'\|\|\s+["\']([A-Za-z][^"\']{2,100})["\']'
        for match in re.finditer(pattern2, content):
            text = match.group(1).strip()
            if should_translate(text):
                key = make_key(text, section)
                full_key = add_key(section, key, text)
                old = f'|| "{text}"'
                new = f'|| t(\'{full_key}\')'
                if old in content:
                    content = content.replace(old, new, 1)
                    changes += 1
        
        # PADRÃO FINAL 3: Strings em switch/case
        # case "value": return "Text"
        pattern3 = r'case\s+["\'][^"\']+["\']\s*:\s*return\s+["\']([A-Za-z][^"\']{2,100})["\']'
        for match in re.finditer(pattern3, content):
            text = match.group(1).strip()
            if should_translate(text):
                key = make_key(text, section)
                full_key = add_key(section, key, text)
                old = f'return "{text}"'
                new = f'return t(\'{full_key}\')'
                if old in content:
                    content = content.replace(old, new, 1)
                    changes += 1
        
        # PADRÃO FINAL 4: Strings em throw/Error
        # throw new Error("Message")
        pattern4 = r'(?:throw|Error)\(["\']([A-Za-z][^"\']{2,100})["\']'
        for match in re.finditer(pattern4, content):
            text = match.group(1).strip()
            if should_translate(text) and 'error' not in text.lower():
                key = make_key(text, section)
                full_key = add_key(section, key, text)
                old = f'("{text}")'
                new = f'(t(\'{full_key}\'))'
                if old in content:
                    content = content.replace(old, new, 1)
                    changes += 1
        
        # PADRÃO FINAL 5: Strings em console.log/warn/error
        # console.log("Message")
        pattern5 = r'console\.\w+\(["\']([A-Za-z][^"\']{2,100})["\']'
        for match in re.finditer(pattern5, content):
            text = match.group(1).strip()
            if should_translate(text) and len(text) > 10:
                key = make_key(text, section)
                full_key = add_key(section, key, text)
                old = f'("{text}")'
                new = f'(t(\'{full_key}\'))'
                if old in content:
                    content = content.replace(old, new, 1)
                    changes += 1
        
        # PADRÃO FINAL 6: Strings em arrays com map
        # .map(() => "Text")
        pattern6 = r'\.map\([^)]*=>\s*["\']([A-Za-z][^"\']{2,100})["\']'
        for match in re.finditer(pattern6, content):
            text = match.group(1).strip()
            if should_translate(text):
                key = make_key(text, section)
                full_key = add_key(section, key, text)
                old = f'=> "{text}"'
                new = f'=> t(\'{full_key}\')'
                if old in content:
                    content = content.replace(old, new, 1)
                    changes += 1
        
        # PADRÃO FINAL 7: Strings em filter/find
        # .filter(x => x.type === "Text")
        pattern7 = r'===\s*["\']([A-Z][a-zA-Z\s]{2,50})["\']'
        for match in re.finditer(pattern7, content):
            text = match.group(1).strip()
            if should_translate(text) and ' ' in text:  # Apenas se tiver espaço (é frase)
                key = make_key(text, section)
                full_key = add_key(section, key, text)
                old = f'=== "{text}"'
                new = f'=== t(\'{full_key}\')'
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

print("🚀 RODADA FINAL - Padrões Específicos...\n")

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
print(f"\n🎉 Rodada final concluída!")
