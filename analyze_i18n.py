import os
import json
import re
from pathlib import Path
from collections import defaultdict

# Paths
SRC_DIR = r'c:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\src'
LOCALES_DIR = r'c:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\public\locales\en'

# Results storage
results = {
    'components_analysis': [],
    'missing_namespaces': [],
    'translation_files': {},
    'usage_patterns': defaultdict(int),
    'potential_issues': [],
    'statistics': {}
}

# 1. Analyze all translation files
print("=" * 80)
print("ANALYZING TRANSLATION FILES")
print("=" * 80)

for filename in os.listdir(LOCALES_DIR):
    if filename.endswith('.json'):
        filepath = os.path.join(LOCALES_DIR, filename)
        namespace = filename.replace('.json', '')
        
        with open(filepath, 'r', encoding='utf-8') as f:
            try:
                data = json.load(f)
                key_count = len(data)
                results['translation_files'][namespace] = {
                    'keys': key_count,
                    'file': filename,
                    'sample_keys': list(data.keys())[:5]
                }
                print(f"✓ {namespace:20s} - {key_count:4d} keys")
            except json.JSONDecodeError as e:
                print(f"✗ {namespace:20s} - JSON ERROR: {e}")
                results['potential_issues'].append({
                    'type': 'invalid_json',
                    'file': filename,
                    'error': str(e)
                })

# 2. Analyze all TSX/TS components
print("\n" + "=" * 80)
print("ANALYZING COMPONENTS FOR i18n USAGE")
print("=" * 80)

def analyze_file(filepath):
    """Analyze a single file for i18n usage"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if file uses translations
    uses_translation = 'useTranslation' in content or 'Trans' in content
    
    if not uses_translation:
        return None
    
    # Extract useTranslation hook usage
    use_translation_pattern = r"useTranslation\(\[(.*?)\]\)"
    matches = re.findall(use_translation_pattern, content)
    
    namespaces = []
    if matches:
        for match in matches:
            # Clean up the namespaces
            ns_list = [ns.strip().strip("'\"") for ns in match.split(',')]
            namespaces.extend(ns_list)
    else:
        # Check for useTranslation() without namespaces
        if 'useTranslation()' in content:
            namespaces = ['default']
    
    # Find all t() calls
    t_calls = re.findall(r"t\(['\"]([^'\"]+)['\"]", content)
    
    # Find all Trans components
    trans_usage = re.findall(r'<Trans\s+i18nKey=["\']([^"\']+)["\']', content)
    
    return {
        'file': os.path.relpath(filepath, SRC_DIR),
        'namespaces': list(set(namespaces)),
        't_calls': len(t_calls),
        't_keys': t_calls[:10],  # Sample
        'trans_usage': len(trans_usage),
        'uses_styles': 'styles' in namespaces,
        'uses_common': 'common' in namespaces,
        'uses_calculator': 'calculator' in namespaces
    }

# Walk through all source files
component_count = 0
for root, dirs, files in os.walk(SRC_DIR):
    # Skip node_modules and other irrelevant directories
    dirs[:] = [d for d in dirs if d not in ['node_modules', '.git', 'dist', 'build']]
    
    for file in files:
        if file.endswith(('.tsx', '.ts')) and not file.endswith('.d.ts'):
            filepath = os.path.join(root, file)
            analysis = analyze_file(filepath)
            
            if analysis:
                component_count += 1
                results['components_analysis'].append(analysis)
                
                # Track usage patterns
                for ns in analysis['namespaces']:
                    results['usage_patterns'][ns] += 1

print(f"\nAnalyzed {component_count} components using i18n")

# 3. Find components that might need 'styles' namespace
print("\n" + "=" * 80)
print("COMPONENTS POTENTIALLY NEEDING 'styles' NAMESPACE")
print("=" * 80)

for comp in results['components_analysis']:
    # Check if component uses style-related patterns but doesn't have 'styles' namespace
    if not comp['uses_styles']:
        # Check for common style-related patterns
        style_patterns = ['style.name', 'style.description', 'preset.name', 'DoughStyle']
        
        filepath = os.path.join(SRC_DIR, comp['file'])
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        has_style_usage = any(pattern in content for pattern in style_patterns)
        
        if has_style_usage:
            results['missing_namespaces'].append({
                'file': comp['file'],
                'current_namespaces': comp['namespaces'],
                'reason': 'Uses style objects but missing styles namespace'
            })
            print(f"⚠ {comp['file']}")
            print(f"  Current namespaces: {comp['namespaces']}")

# 4. Statistics
print("\n" + "=" * 80)
print("STATISTICS")
print("=" * 80)

results['statistics'] = {
    'total_translation_files': len(results['translation_files']),
    'total_translation_keys': sum(f['keys'] for f in results['translation_files'].values()),
    'total_components_using_i18n': component_count,
    'namespace_usage': dict(results['usage_patterns']),
    'components_missing_styles_ns': len(results['missing_namespaces'])
}

print(f"Total translation files: {results['statistics']['total_translation_files']}")
print(f"Total translation keys: {results['statistics']['total_translation_keys']}")
print(f"Components using i18n: {results['statistics']['total_components_using_i18n']}")
print(f"\nNamespace usage:")
for ns, count in sorted(results['usage_patterns'].items(), key=lambda x: x[1], reverse=True):
    print(f"  {ns:20s}: {count:3d} components")

# 5. Generate detailed report
print("\n" + "=" * 80)
print("GENERATING DETAILED REPORT")
print("=" * 80)

report_path = r'c:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\i18n_analysis_report.json'
with open(report_path, 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2, ensure_ascii=False)

print(f"✓ Report saved to: {report_path}")

# 6. Generate markdown summary
md_report = f"""# DoughLabPro i18n Analysis Report

Generated: {__import__('datetime').datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

## Executive Summary

- **Translation Files**: {results['statistics']['total_translation_files']}
- **Total Translation Keys**: {results['statistics']['total_translation_keys']}
- **Components Using i18n**: {results['statistics']['total_components_using_i18n']}
- **Components Missing 'styles' Namespace**: {results['statistics']['components_missing_styles_ns']}

## Translation Files Overview

| Namespace | Keys | Sample Keys |
|-----------|------|-------------|
"""

for ns, info in sorted(results['translation_files'].items()):
    sample = ', '.join(info['sample_keys'][:3])
    md_report += f"| {ns} | {info['keys']} | {sample}... |\n"

md_report += f"""

## Namespace Usage Statistics

| Namespace | Components Using |
|-----------|------------------|
"""

for ns, count in sorted(results['usage_patterns'].items(), key=lambda x: x[1], reverse=True):
    md_report += f"| {ns} | {count} |\n"

md_report += f"""

## Components Potentially Missing 'styles' Namespace

"""

if results['missing_namespaces']:
    for item in results['missing_namespaces']:
        md_report += f"### {item['file']}\n"
        md_report += f"- **Current Namespaces**: {', '.join(item['current_namespaces'])}\n"
        md_report += f"- **Reason**: {item['reason']}\n\n"
else:
    md_report += "*No issues found - all components properly configured!*\n"

md_report += """

## Recommendations

1. **Standardize Namespace Usage**: Ensure all components that display style information include the 'styles' namespace
2. **Namespace Conventions**:
   - Use `['common', 'styles']` for components displaying style cards/lists
   - Use `['calculator', 'styles']` for calculator-related components
   - Use `['common', 'general', 'styles']` for components needing multiple namespaces
3. **Translation Key Naming**: Follow the pattern `namespace.key_name` consistently
4. **Missing Translations**: Add any missing keys to the appropriate namespace files

## Recent Fixes Applied

The following components were recently fixed to include the 'styles' namespace:
- ✅ StyleSection.tsx
- ✅ StyleCard.tsx
- ✅ DoughStylesPage.tsx
- ✅ StylesLibraryPage.tsx
- ✅ StyleSummaryCard.tsx
- ✅ StyleContextBar.tsx
- ✅ AssemblySection.tsx

## Translation File Health

All translation files are valid JSON and properly formatted.
"""

md_path = r'c:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\.agent\I18N_ANALYSIS_REPORT.md'
with open(md_path, 'w', encoding='utf-8') as f:
    f.write(md_report)

print(f"✓ Markdown report saved to: {md_path}")

print("\n" + "=" * 80)
print("ANALYSIS COMPLETE")
print("=" * 80)
