# 🗺️ Mapa Completo: Onde Encontrar Ingredientes (Toppings, Molhos, Recheios)

## 📍 Sim! Os ingredientes estão disponíveis em MÚLTIPLAS páginas!

---

## 🎯 **1. CALCULADOR - Assembly Lab (Página Principal)**

### 📍 Localização:
```
http://localhost:5173/#/calculator
```

### 🔍 Como Acessar:
1. Navegue para o Calculador
2. Complete as Steps 1-5 (Style, Quantity, Ingredients, Fermentation, Environment)
3. **Role para baixo** até ver **"Step 6: Assembly Lab"**

### ✨ O que você pode fazer:
- ✅ Adicionar ingredientes oficiais (molhos, queijos, carnes, vegetais)
- ✅ Criar ingredientes customizados com IA
- ✅ Ajustar quantidades em gramas
- ✅ Ver análise de IA da sua combinação
- ✅ Ver tooltips ricos com informações técnicas

### 📊 Ingredientes Disponíveis:
- **Sauces**: Classic Tomato, BBQ, Béchamel
- **Toppings**: Mozzarella (low moisture/fresh), Pepperoni
- **Fillings**: Ricotta & Herb
- **+ 40 ingredientes** no catálogo completo!

---

## 📚 **2. LEARN - Ingredient Guide (Biblioteca Educacional)**

### 📍 Localização:
```
http://localhost:5173/#/learn/ingredients
```

### 🔍 Como Acessar:
1. Clique em **"Learn"** no menu principal
2. Clique em **"Ingredients"**

### ✨ O que você encontra:
Uma biblioteca completa com **12 categorias** de ingredientes:

#### 🌾 **1. Flours**
- Ciência da força (W), P/L, tipos de moagem
- Página: `/learn/ingredients/flours`

#### 🧪 **2. Yeasts**
- Fermento comercial, sourdough, ciência da fermentação
- Página: `/learn/article/yeast-leavening-agents`

#### 🧀 **3. Cheeses**
- Mozzarella, Parmesan, Provolone
- Umidade, derretimento, sabor
- Página: `/learn/ingredients/cheeses`

#### 🥓 **4. Meats & Cured Meats**
- Pepperoni, Prosciutto, dicas de preparo
- Página: `/learn/ingredients/meats`

#### 🥬 **5. Vegetables**
- Como preparar vegetais para pizza
- Evitar excesso de umidade
- Página: `/learn/ingredients/vegetables`

#### 🍅 **6. Sauces**
- San Marzano, bases brancas, pestos
- Fundação do sabor
- Página: `/learn/ingredients/sauces`

#### 🫒 **7. Oils & Fats**
- Azeite de oliva, óleos infundidos
- Comportamento no calor
- Página: `/learn/ingredients/oils`

#### 🌿 **8. Herbs & Spices**
- Orégano, manjericão, especiarias
- Ciência aromática
- Página: `/learn/ingredients/oils-spices`

#### 🍕 **9. Classic Combos**
- Margherita, Pepperoni, Four Cheese
- Receitas que nunca falham
- Página: `/learn/ingredients/classic-combos`

#### ✨ **10. Bold Combos**
- Combinações criativas e surpreendentes
- Página: `/learn/ingredients/bold-combos`

#### 🧩 **11. Pairing Tool**
- Ferramenta interativa para descobrir combinações
- Página: `/learn/ingredients/pairing-tool`

#### 📋 **12. Ready Toppings**
- Biblioteca de combinações preparadas
- Pesos e medidas para sua pizza
- Página: `/learn/ingredients/ready-toppings`

---

## 🎨 **3. STYLES - Flavor Intelligence (Por Estilo)**

### 📍 Localização:
```
http://localhost:5173/#/styles
```

### 🔍 Como Acessar:
1. Navegue para **"Styles"**
2. Clique em qualquer estilo (ex: Neapolitan, New York, Detroit)
3. **Role para baixo** até ver **"Flavor Intelligence"**

### ✨ O que você encontra:
- **Ingredientes recomendados** para cada estilo específico
- Filtrados automaticamente por compatibilidade
- Informações sobre:
  - 📍 Categoria do ingrediente
  - ⏰ Momento de aplicação (Pre-oven ou Post-oven)
  - 🔬 Perfil técnico completo

### 📊 Exemplo (Neapolitan):
```
Flavor Intelligence
Recommended components rooted in tradition and technique.

[Cheese] Fior di Latte          • Cook
[Finish] Pecorino Romano        • Finish
[Cheese] Burrata                • Finish
[Meat]   Prosciutto Crudo       • Finish
[Vegetal] Cherry Tomatoes       • Cook
```

### 🎯 Vantagem:
Ver **apenas os ingredientes autênticos** para aquele estilo específico!

---

## 🧪 **4. INGREDIENT CREATOR MODAL (Criação de Customizados)**

### 📍 Localização:
Disponível em **2 lugares**:

#### A) No Calculador (Assembly Lab):
```
http://localhost:5173/#/calculator
→ Step 6: Assembly Lab
→ Botão verde: "Create Custom Ingredient"
```

#### B) Dentro do Modal:
- Aba **"Create Custom"**: Crie do zero com IA
- Aba **"Browse Library"**: Navegue pelos 40+ ingredientes do catálogo

### ✨ O que você pode fazer:
1. **Criar Ingrediente Customizado**:
   - Nome
   - Categoria (sauce, topping, filling, glaze)
   - Perfil técnico (moisture, fat, sugar)
   - IA valida e sugere compatibilidade

2. **Navegar Biblioteca Completa**:
   - Filtrar por categoria
   - Ver todos os 40+ ingredientes
   - Adicionar diretamente à sua receita

---

## 📂 **Estrutura de Arquivos (Para Desenvolvedores)**

### Dados de Ingredientes:

```
src/
├── data/
│   ├── ingredients/
│   │   └── official.ts              # 4 ingredientes oficiais básicos
│   └── flavorComponents.ts          # 40+ ingredientes completos
│
├── types/
│   ├── ingredients.ts               # Tipos TypeScript
│   └── flavor.ts                    # Tipos de Flavor Components
│
├── components/
│   ├── calculator/
│   │   └── ingredients/
│   │       ├── AssemblySection.tsx          # UI do Assembly Lab
│   │       └── IngredientCreatorModal.tsx   # Modal de criação
│   └── FlavorComponentProfileModal.tsx      # Modal de perfil completo
│
└── pages/
    ├── CalculatorPage.tsx           # Calculador principal
    ├── learn/
    │   ├── IngredientsPage.tsx      # Hub de ingredientes
    │   └── ingredients/
    │       ├── ReadyToppingsPage.tsx
    │       ├── CheesesPage.tsx
    │       ├── MeatsPage.tsx
    │       └── ... (outras categorias)
    └── styles/
        └── StyleDetailPage.tsx      # Página de detalhes do estilo
```

---

## 🗂️ **Catálogo Completo de Ingredientes**

### Arquivo: `src/data/flavorComponents.ts`

#### 🧀 **Queijos (Cheeses)**:
1. Mozzarella (Low Moisture)
2. Fior di Latte (Fresh Mozzarella)
3. Burrata
4. Stracciatella
5. Provolone
6. Pecorino Romano
7. Parmigiano Reggiano / Grana
8. Ricotta
9. Fontina

#### 🥓 **Carnes (Meats)**:
10. Pepperoni
11. Calabresa
12. Ham (Prosciutto Cotto)
13. Prosciutto Crudo
14. 'Nduja
15. Italian Sausage (Fresh)
16. Bacon / Pancetta
17. Anchovies

#### 🥬 **Vegetais (Vegetables)**:
18. Mushrooms (Funghi)
19. Onion
20. Olives
21. Capers
22. Bell Peppers
23. Eggplant (Aubergine)
24. Zucchini
25. Cherry Tomatoes
26. Arugula (Rúcula)
27. Basil

#### 🌿 **Acabamentos (Finish)**:
28. Garlic & Oregano
29. Pecorino Romano (também usado como finish)
30. Parmesan (também usado como finish)
31. Fresh Basil
32. Truffle Oil
33. Hot Honey
34. Balsamic Reduction

#### 🍅 **Molhos (Sauces)**:
35. San Marzano Tomato
36. Passata
37. Pesto Genovese
38. White Sauce (Béchamel)
39. BBQ Sauce
40. Olive Oil (Extra Virgin)

E mais ingredientes sendo adicionados constantemente!

---

## 🎯 **Resumo: Onde Acessar**

| Localização | URL | O que você encontra |
|-------------|-----|---------------------|
| **Assembly Lab** | `/calculator` → Step 6 | Adicionar ingredientes à receita, criar customizados, análise de IA |
| **Learn Hub** | `/learn/ingredients` | 12 categorias educacionais sobre ingredientes |
| **Style Details** | `/styles` → [Estilo] | Ingredientes recomendados para cada estilo específico |
| **Creator Modal** | Dentro do Assembly Lab | Biblioteca completa de 40+ ingredientes |

---

## 💡 **Dicas de Navegação**

### ✅ **Para Adicionar Ingredientes à Receita**:
→ Use o **Assembly Lab** no Calculador (Step 6)

### ✅ **Para Aprender Sobre Ingredientes**:
→ Use o **Learn Hub** (`/learn/ingredients`)

### ✅ **Para Ver Ingredientes Autênticos de um Estilo**:
→ Use a página de **Style Details** (`/styles` → escolha um estilo)

### ✅ **Para Navegar o Catálogo Completo**:
→ Use o **Ingredient Creator Modal** (botão verde no Assembly Lab)

---

## 🚀 **Próximos Passos**

1. **Explore o Learn Hub**: `/learn/ingredients`
2. **Veja os ingredientes por estilo**: `/styles` → escolha um estilo
3. **Adicione ingredientes no calculador**: `/calculator` → Step 6
4. **Navegue o catálogo completo**: Assembly Lab → "Create Custom Ingredient" → Aba "Browse Library"

---

**Criado por:** DoughLabPro Team  
**Última atualização:** 2025-12-16  
**Total de ingredientes catalogados:** 40+
