# 🧪 Assembly Lab - Guia Completo

## 📍 Onde Encontrar os Ingredientes (Toppings, Recheios, Molhos)

O **Assembly Lab** é a **Step 6** do calculador DoughLabPro, onde você pode adicionar e gerenciar todos os ingredientes de finalização da sua receita.

---

## 🎯 Como Acessar o Assembly Lab

### Passo a Passo:

1. **Navegue para o Calculador**
   - Acesse: `http://localhost:5173/#/calculator`

2. **Complete as Etapas Anteriores**
   
   O Assembly Lab só aparece depois que você completa as etapas básicas:
   
   ✅ **Step 1: Choose Your Style** (Escolha o estilo de massa)
   - Exemplo: Neapolitan, New York, Detroit, etc.
   
   ✅ **Step 2: Define Quantity** (Defina a quantidade)
   - Número de pizzas/pães
   - Peso da bola de massa
   
   ✅ **Step 3: Customize Ingredients** (Ingredientes da massa)
   - Hidratação, sal, óleo, açúcar
   
   ✅ **Step 4: Fermentation Strategy** (Estratégia de fermentação)
   - Direto, Poolish, Biga, Sourdough
   
   ✅ **Step 5: Baking Environment** (Ambiente de cozimento)
   - Temperatura ambiente, tipo de forno

3. **Role a Página para Baixo**
   
   Após completar as 5 etapas acima, **role a página para baixo** e você verá:
   
   ```
   ┌─────────────────────────────────────────┐
   │  6️⃣  Assembly Lab                       │
   │  Construct your final product profile  │
   │                                         │
   │  🛡️ Flavor Assembly                     │
   │  ┌───────────────────────────────────┐ │
   │  │ Current Stack                     │ │
   │  │ • Low Moisture Mozzarella  150g   │ │
   │  │ • Classic Tomato Sauce     100g   │ │
   │  │ • Cup & Char Pepperoni      80g   │ │
   │  └───────────────────────────────────┘ │
   │                                         │
   │  Recommended for [Your Style]:          │
   │  [+ Mozzarella] [+ BBQ Sauce] [+ ...]  │
   │                                         │
   │  ┌─────────────────────────────────┐   │
   │  │ 🧪 Create Custom Ingredient     │   │
   │  └─────────────────────────────────┘   │
   └─────────────────────────────────────────┘
   ```

---

## 🧀 Tipos de Ingredientes Disponíveis

### 1. **Sauces (Molhos)**
- `tomato_sauce_classic` - Classic Tomato Sauce
- `bbq_sauce` - BBQ Sauce
- `white_sauce_bechamel` - Béchamel / White Base

### 2. **Toppings (Coberturas)**
- `mozz_low_moisture` - Low Moisture Mozzarella
- `mozz_fresh` - Fresh Mozzarella (Fior di Latte)
- `pepperoni_cup` - Cup & Char Pepperoni
- E mais de **40 ingredientes** no catálogo `flavorComponents.ts`!

### 3. **Fillings (Recheios)**
- `ricotta_filling` - Ricotta & Herb
- Ideal para calzones e pastéis

### 4. **Glazes (Acabamentos)**
- Ingredientes aplicados após o forno

---

## 🎨 Funcionalidades do Assembly Lab

### ✨ Adicionar Ingredientes Oficiais
1. Clique em qualquer ingrediente recomendado (ex: `+ Mozzarella`)
2. O ingrediente é adicionado automaticamente com a quantidade sugerida
3. Você pode ajustar a quantidade manualmente

### 🔬 Criar Ingredientes Customizados
1. Clique no botão **"Create Custom Ingredient"** (verde lima)
2. Preencha:
   - Nome do ingrediente
   - Categoria (sauce, topping, filling, glaze)
   - Perfil técnico (moisture, fat, sugar)
3. A **IA valida** o ingrediente e sugere compatibilidade com estilos

### 📊 Análise de IA
O Assembly Lab analisa automaticamente sua combinação e fornece:
- **Classificação**: Standard, Variation, ou Experimental
- **Impacto Técnico**: Moisture, fat, thermal behavior
- **Sugestões**: Melhorias e avisos

### 💡 Tooltips Ricos
Passe o mouse sobre qualquer ingrediente para ver:
- 📍 **Origem**: De onde vem o ingrediente
- 🔬 **Implementação**: Como usar tecnicamente
- 💡 **Combinações Clássicas**: Pairings tradicionais
- ⏰ **Momento de Aplicação**: Pre-oven ou post-oven
- 📚 **Referências**: Fontes científicas e culinárias

---

## 🗂️ Estrutura de Arquivos

### Dados de Ingredientes:
```
src/
├── data/
│   ├── ingredients/
│   │   └── official.ts          # Ingredientes oficiais do lab
│   └── flavorComponents.ts      # Catálogo completo (40+ ingredientes)
├── types/
│   └── ingredients.ts           # Tipos TypeScript
└── components/
    └── calculator/
        └── ingredients/
            ├── AssemblySection.tsx          # UI principal
            └── IngredientCreatorModal.tsx   # Modal de criação
```

### Adicionar Novos Ingredientes Oficiais:

Edite: `src/data/ingredients/official.ts`

```typescript
{
    id: 'seu_ingrediente',
    visibleName: 'Nome Visível',
    category: 'topping', // ou 'sauce', 'filling', 'glaze'
    technicalProfile: {
        moistureLevel: 'medium',
        fatContent: 'high',
        sugarContent: 'low',
        thermalBehavior: 'Descrição do comportamento',
        weightImpact: 'Medium'
    },
    compatibilityByStyle: {
        'new_york_slice_v2': 'validated',
        'neapolitan_v2': 'variation'
    },
    source: 'lab'
}
```

---

## 🐛 Troubleshooting

### ❌ "Não vejo o Assembly Lab"

**Possíveis causas:**

1. **Você não completou as etapas anteriores**
   - ✅ Solução: Complete Steps 1-5 primeiro

2. **Você está no modo Basic e não rolou a página**
   - ✅ Solução: Role para baixo após completar as etapas

3. **Erro de navegação no React Router**
   - ✅ Solução: Verifique o console do navegador
   - Se houver erro `useNavigate()`, verifique se o componente está dentro de um `<Router>`

### ❌ "Os ingredientes não aparecem"

**Verifique:**
1. O arquivo `src/data/ingredients/official.ts` está sendo importado corretamente
2. O `assemblyStyle` está definido (linha 152 do `CalculatorForm.tsx`)
3. Não há erros no console do navegador

---

## 📝 Exemplo de Uso Completo

```typescript
// Configuração de uma pizza New York com Assembly
const config: DoughConfig = {
    // ... configurações básicas ...
    assemblyIncrements: [
        {
            id: 'mozz_low_moisture',
            visibleName: 'Low Moisture Mozzarella',
            category: 'topping',
            // ... perfil técnico ...
        },
        {
            id: 'tomato_sauce_classic',
            visibleName: 'Classic Tomato Sauce',
            category: 'sauce',
            // ... perfil técnico ...
        },
        {
            id: 'pepperoni_cup',
            visibleName: 'Cup & Char Pepperoni',
            category: 'topping',
            // ... perfil técnico ...
        }
    ]
};
```

---

## 🎓 Recursos Adicionais

### Flavor Components Catalog
Veja todos os 40+ ingredientes disponíveis em:
- `src/data/flavorComponents.ts`

Inclui ingredientes como:
- Queijos: Burrata, Stracciatella, Provolone, Pecorino Romano, Parmesan
- Carnes: Prosciutto Crudo, 'Nduja, Italian Sausage, Bacon
- Vegetais: Mushrooms, Onion, Olives, Capers, Bell Peppers, Eggplant
- E muito mais!

### AI Service
O serviço de IA que valida ingredientes:
- `src/services/IngredientAIService.ts`

---

## 🚀 Próximos Passos

1. **Navegue para o calculador**: `http://localhost:5173/#/calculator`
2. **Complete as Steps 1-5**
3. **Role para baixo até ver "Assembly Lab"**
4. **Experimente adicionar ingredientes!**

---

**Criado por:** DoughLabPro Team  
**Última atualização:** 2025-12-16
