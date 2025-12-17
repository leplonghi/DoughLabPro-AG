# 🏗️ Proposta de Padronização: Nomenclatura de Ingredientes

## 📊 **Problema Atual**

O DoughLabPro tem **2 sistemas paralelos** com nomenclaturas confusas:

### Sistema 1: "Increments"
- Arquivo: `types/ingredients.ts`
- Usado em: Assembly Lab (calculador)
- Problema: Nome genérico e confuso

### Sistema 2: "Flavor Components"
- Arquivo: `types/flavor.ts`
- Usado em: Styles, Learn
- Problema: Não integrado com o calculador

---

## ✅ **Solução Proposta: Hierarquia Clara**

```
INGREDIENTES (Ingredients)
├── BASE INGREDIENTS (Dough Ingredients)
│   ├── Farinha (Flour)
│   ├── Água (Water)
│   ├── Sal (Salt)
│   ├── Fermento (Yeast)
│   ├── Óleo (Oil)
│   └── Açúcar (Sugar)
│
└── ASSEMBLY COMPONENTS (Componentes de Montagem)
    ├── Molhos (Sauces)
    ├── Coberturas (Toppings)
    ├── Recheios (Fillings)
    └── Acabamentos (Finishes/Glazes)
```

---

## 🎯 **Nova Nomenclatura Padronizada**

### **1. DOUGH INGREDIENTS** (Ingredientes da Massa)
**Português**: Ingredientes Base  
**Inglês**: Base Ingredients / Dough Ingredients  
**Localização**: Steps 1-5 do calculador

**Componentes**:
- `flour` - Farinha
- `water` - Água
- `salt` - Sal
- `yeast` - Fermento
- `oil` - Óleo/Gordura
- `sugar` - Açúcar

**Interface TypeScript**:
```typescript
export interface DoughIngredient {
    id: string;
    name: string;
    type: 'flour' | 'water' | 'salt' | 'yeast' | 'oil' | 'sugar';
    bakerPercentage: number;
    role: 'structural'; // Todos são estruturais
}
```

---

### **2. ASSEMBLY COMPONENTS** (Componentes de Montagem)
**Português**: Componentes de Montagem / Ingredientes de Finalização  
**Inglês**: Assembly Components / Topping Components  
**Localização**: Step 6 (Assembly Lab) do calculador

**Categorias**:
- `sauce` - Molhos
- `topping` - Coberturas
- `filling` - Recheios
- `finish` - Acabamentos

**Interface TypeScript**:
```typescript
export type AssemblyCategory = 'sauce' | 'topping' | 'filling' | 'finish';

export interface AssemblyComponent {
    id: string;
    name: string;
    category: AssemblyCategory;
    technicalProfile: TechnicalProfile;
    compatibilityByStyle: Record<string, Compatibility>;
    applicationMoment: 'pre_oven' | 'post_oven' | 'mid_bake';
    source: 'official' | 'user';
}
```

---

## 📝 **Renomeações Necessárias**

### **Arquivos de Tipos**:

#### ❌ ANTES:
```
types/ingredients.ts  → "Increment", "UserIngredient"
types/flavor.ts       → "FlavorComponent"
```

#### ✅ DEPOIS:
```
types/doughIngredients.ts    → "DoughIngredient"
types/assemblyComponents.ts  → "AssemblyComponent", "UserComponent"
types/flavor.ts              → Manter para compatibilidade (alias)
```

### **Arquivos de Dados**:

#### ❌ ANTES:
```
data/ingredients/official.ts  → officialIncrements[]
data/flavorComponents.ts      → FLAVOR_COMPONENTS[]
```

#### ✅ DEPOIS:
```
data/doughIngredients/base.ts      → BASE_INGREDIENTS[]
data/assemblyComponents/official.ts → OFFICIAL_COMPONENTS[]
data/assemblyComponents/catalog.ts  → COMPONENT_CATALOG[] (merge com flavorComponents)
```

---

## 🎨 **UI/UX: Nomenclatura para o Usuário**

### **Português (Brasil)**:

| Contexto | Nome Técnico | Nome para Usuário |
|----------|--------------|-------------------|
| Steps 1-5 | Dough Ingredients | **Ingredientes da Massa** |
| Step 6 | Assembly Components | **Ingredientes de Montagem** |
| Categoria: sauce | sauce | **Molhos** |
| Categoria: topping | topping | **Coberturas** |
| Categoria: filling | filling | **Recheios** |
| Categoria: finish | finish | **Acabamentos** |

### **Inglês (English)**:

| Contexto | Nome Técnico | Nome para Usuário |
|----------|--------------|-------------------|
| Steps 1-5 | Dough Ingredients | **Dough Ingredients** |
| Step 6 | Assembly Components | **Toppings & Assembly** |
| Categoria: sauce | sauce | **Sauces** |
| Categoria: topping | topping | **Toppings** |
| Categoria: filling | filling | **Fillings** |
| Categoria: finish | finish | **Finishes** |

---

## 🔄 **Migração: Plano de Implementação**

### **Fase 1: Criar Novos Tipos (Sem Quebrar)**
```typescript
// types/assemblyComponents.ts (NOVO)
export type AssemblyCategory = 'sauce' | 'topping' | 'filling' | 'finish';

export interface AssemblyComponent {
    id: string;
    name: string;
    category: AssemblyCategory;
    // ... resto dos campos
}

// Alias para compatibilidade
export type Increment = AssemblyComponent;
export type UserIngredient = AssemblyComponent & { source: 'user' };
```

### **Fase 2: Atualizar Componentes Gradualmente**
1. Atualizar `AssemblySection.tsx` para usar novos tipos
2. Atualizar `IngredientCreatorModal.tsx`
3. Atualizar `FlavorComponentProfileModal.tsx`

### **Fase 3: Atualizar Traduções**
```json
// public/locales/en/calculator.json
{
  "dough_ingredients": "Dough Ingredients",
  "assembly_components": "Toppings & Assembly",
  "assembly_lab_title": "Assembly Lab",
  "assembly_lab_desc": "Add sauces, toppings, fillings, and finishes to complete your recipe",
  
  "category_sauce": "Sauces",
  "category_topping": "Toppings",
  "category_filling": "Fillings",
  "category_finish": "Finishes"
}
```

```json
// public/locales/pt/calculator.json
{
  "dough_ingredients": "Ingredientes da Massa",
  "assembly_components": "Ingredientes de Montagem",
  "assembly_lab_title": "Laboratório de Montagem",
  "assembly_lab_desc": "Adicione molhos, coberturas, recheios e acabamentos para completar sua receita",
  
  "category_sauce": "Molhos",
  "category_topping": "Coberturas",
  "category_filling": "Recheios",
  "category_finish": "Acabamentos"
}
```

### **Fase 4: Deprecar Nomes Antigos**
- Adicionar comentários `@deprecated` nos tipos antigos
- Manter aliases por 2-3 versões
- Remover completamente após migração

---

## 📚 **Documentação Atualizada**

### **Para Desenvolvedores**:
```typescript
/**
 * DOUGH INGREDIENTS (Ingredientes da Massa)
 * 
 * Componentes estruturais que formam a massa.
 * Gerenciados nas Steps 1-5 do calculador.
 * 
 * Exemplos: Flour, Water, Salt, Yeast, Oil, Sugar
 */
export interface DoughIngredient { ... }

/**
 * ASSEMBLY COMPONENTS (Componentes de Montagem)
 * 
 * Elementos de finalização que vão sobre/dentro da massa.
 * Gerenciados na Step 6 (Assembly Lab) do calculador.
 * 
 * Categorias:
 * - sauce: Molhos (tomato, BBQ, pesto)
 * - topping: Coberturas (queijos, carnes, vegetais)
 * - filling: Recheios (para calzones, pastéis)
 * - finish: Acabamentos (azeite, ervas, mel)
 */
export interface AssemblyComponent { ... }
```

### **Para Usuários (UI)**:
```
┌─────────────────────────────────────────┐
│  CALCULADOR DOUGHLABPRO                 │
├─────────────────────────────────────────┤
│  Step 1-5: Ingredientes da Massa        │
│  • Farinha, Água, Sal, Fermento         │
│  • Óleo, Açúcar                         │
│                                         │
│  Step 6: Ingredientes de Montagem       │
│  • Molhos (Tomato, BBQ, Pesto)          │
│  • Coberturas (Queijos, Carnes)         │
│  • Recheios (Ricotta, etc)              │
│  • Acabamentos (Azeite, Ervas)          │
└─────────────────────────────────────────┘
```

---

## ✅ **Benefícios da Padronização**

1. **Clareza**: Distinção óbvia entre ingredientes da massa e de montagem
2. **Consistência**: Mesma nomenclatura em todo o código
3. **Internacionalização**: Fácil tradução para PT/EN
4. **Escalabilidade**: Fácil adicionar novos tipos no futuro
5. **Manutenibilidade**: Código mais legível e documentado

---

## 🚀 **Próximos Passos**

1. **Revisar e Aprovar** esta proposta
2. **Criar novos arquivos de tipos** (Fase 1)
3. **Atualizar componentes** gradualmente (Fase 2)
4. **Atualizar traduções** (Fase 3)
5. **Testar** em desenvolvimento
6. **Deploy** para produção

---

**Criado por:** DoughLabPro Team  
**Data:** 2025-12-16  
**Status:** Proposta para Revisão
