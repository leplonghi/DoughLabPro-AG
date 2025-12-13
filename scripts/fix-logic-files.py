import re

METHOD_FILE = 'src/logic/methodGenerator.ts'
ADJUST_FILE = 'src/logic/smartAdjustments.ts'

def fix_method_generator():
    print(f"Fixing {METHOD_FILE}...")
    with open(METHOD_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    # Fix references: [Item 1, Item 2] -> references: ['Item 1', 'Item 2']
    def quote_array(match):
        items_str = match.group(1)
        # Split by comma
        items = [i.strip() for i in items_str.split(',')]
        quoted_items = []
        for item in items:
            if not (item.startswith("'") or item.startswith('"')):
                item = f"'{item}'"
            quoted_items.append(item)
        return f"references: [{', '.join(quoted_items)}]"

    new_content = re.sub(r'references: \[(.+?)\]', quote_array, content)
    
    if new_content != content:
        with open(METHOD_FILE, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("  -> Fixed.")
    else:
        print("  -> No changes needed.")

def fix_smart_adjustments():
    print(f"Fixing {ADJUST_FILE}...")
    with open(ADJUST_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    # Specific fix for the broken line
    broken_str = "consider using a style like t('common.new_york'), which benefits"
    if broken_str in content:
        # It's likely inside a string like '... t('...') ...'
        # We want to replace the whole string with a backtick version
        # But matching the whole multi-line push is hard.
        # Let's replace the specific problematic fragment if we can identify the context.
        # The issue is the single quotes collide.
        
        # Regex to find the broken line:
        # '... t('common.new_york'), ...'
        # It will match as: '... t('  then common.new_york  then '), ...'
        
        # We can search for the literal sequence including the syntax error?
        # Python reads it as text.
        # Content contains: ... like t('common.new_york'), which ...
        
        # Let's replace:
        # 'Home ovens (~250°C) bake pizza slower. To compensate, consider using a style like t('common.new_york'), which benefits from oil and sugar for better color and texture at lower temperatures.'
        # with:
        # `Home ovens (~250°C) bake pizza slower. To compensate, consider using a style like ${t('common.new_york')}, which benefits from oil and sugar for better color and texture at lower temperatures.`
        
        # We need to escape regex chars.
        pattern = r"'Home ovens \(~250°C\) bake pizza slower\. To compensate, consider using a style like t\('common\.new_york'\), which benefits from oil and sugar for better color and texture at lower temperatures\.'"
        
        replacement = "`Home ovens (~250°C) bake pizza slower. To compensate, consider using a style like ${t('common.new_york')}, which benefits from oil and sugar for better color and texture at lower temperatures.`"
        
        new_content = re.sub(pattern, replacement, content)
        
        if new_content != content:
            with open(ADJUST_FILE, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print("  -> Fixed broken t() string.")
            return

    print("  -> No changes needed (or pattern not found).")
    
fix_method_generator()
fix_smart_adjustments()
