# DoughLabPro i18n Analysis Report

Generated: 2025-12-16 10:42:25

## Executive Summary

- **Translation Files**: 11
- **Total Translation Keys**: 2292
- **Components Using i18n**: 293
- **Components Missing 'styles' Namespace**: 20

## Translation Files Overview

| Namespace | Keys | Sample Keys |
|-----------|------|-------------|
| auth | 1 | auth... |
| calculator | 135 | form, results, calculator... |
| common | 94 | common, nav, diary_page... |
| dashboard | 8 | dashboard, profile, levain_pet... |
| doughbot | 7 | common_issue_label, common_problems, description_placeholder... |
| marketing | 14 | community_page, community_detail, learn... |
| method | 2 | steps, vars... |
| mylab | 6 | pro_lab_analytics, pro_analytics, lab_capacity_reached... |
| profile | 10 | name, email, free_member... |
| settings | 4 | general, settings_page, form... |
| styles | 2011 | control_of_enzymatic_activity_and_gluten_developme, variable_2, na... |


## Namespace Usage Statistics

| Namespace | Components Using |
|-----------|------------------|
| default | 205 |
| common | 19 |
| calculator | 11 |
| styles | 7 |
| auth | 4 |
| method | 3 |
| profile | 3 |
| dashboard | 3 |
| general | 1 |
| doughbot | 1 |
| settings | 1 |
| marketing | 1 |


## Components Potentially Missing 'styles' Namespace

### AppRouter.tsx
- **Current Namespaces**: 
- **Reason**: Uses style objects but missing styles namespace

### ai\assistantClient.ts
- **Current Namespaces**: 
- **Reason**: Uses style objects but missing styles namespace

### components\calculator\ingredients\IngredientCreatorModal.tsx
- **Current Namespaces**: default
- **Reason**: Uses style objects but missing styles namespace

### components\styles\AiStyleBuilderModal.tsx
- **Current Namespaces**: default
- **Reason**: Uses style objects but missing styles namespace

### components\styles\CreateStyleModal.tsx
- **Current Namespaces**: default
- **Reason**: Uses style objects but missing styles namespace

### contexts\CalculatorContext.tsx
- **Current Namespaces**: default
- **Reason**: Uses style objects but missing styles namespace

### contexts\StylesProvider.tsx
- **Current Namespaces**: default
- **Reason**: Uses style objects but missing styles namespace

### contexts\UserProvider.tsx
- **Current Namespaces**: default
- **Reason**: Uses style objects but missing styles namespace

### data\stylesData.ts
- **Current Namespaces**: 
- **Reason**: Uses style objects but missing styles namespace

### data\styles\builder.ts
- **Current Namespaces**: 
- **Reason**: Uses style objects but missing styles namespace

### hooks\useStyleSearch.ts
- **Current Namespaces**: 
- **Reason**: Uses style objects but missing styles namespace

### logic\presetLogic.ts
- **Current Namespaces**: 
- **Reason**: Uses style objects but missing styles namespace

### marketing\social\socialApis.ts
- **Current Namespaces**: 
- **Reason**: Uses style objects but missing styles namespace

### marketing\social\SocialShare.tsx
- **Current Namespaces**: default
- **Reason**: Uses style objects but missing styles namespace

### pages\styles\StyleDetailPage.tsx
- **Current Namespaces**: default
- **Reason**: Uses style objects but missing styles namespace

### scripts\validate-styles.ts
- **Current Namespaces**: 
- **Reason**: Uses style objects but missing styles namespace

### services\stylesService.ts
- **Current Namespaces**: 
- **Reason**: Uses style objects but missing styles namespace

### types\dough.ts
- **Current Namespaces**: 
- **Reason**: Uses style objects but missing styles namespace

### utils\doughConversion.ts
- **Current Namespaces**: 
- **Reason**: Uses style objects but missing styles namespace

### utils\styleAdapter.ts
- **Current Namespaces**: 
- **Reason**: Uses style objects but missing styles namespace



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
