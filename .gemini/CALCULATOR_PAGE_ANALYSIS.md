# Análise Completa da Página Calculator - DoughLabPro

## 📋 Índice
1. [Visão Geral](#visão-geral)
2. [Estrutura de Arquivos](#estrutura-de-arquivos)
3. [Hierarquia de Componentes](#hierarquia-de-componentes)
4. [Fluxo de Dados e Estado](#fluxo-de-dados-e-estado)
5. [Lógica de Cálculo](#lógica-de-cálculo)
6. [UX/UI Design](#uxui-design)
7. [Funcionalidades e Seções](#funcionalidades-e-seções)
8. [Permissões e Monetização](#permissões-e-monetização)
9. [Integrações e Dependências](#integrações-e-dependências)
10. [Onboarding e Ajuda](#onboarding-e-ajuda)

---

## 🎯 Visão Geral

A **Calculator Page** é o núcleo funcional ("core engine") do DoughLabPro. É onde a mágica acontece: o usuário define parâmetros técnicos e a aplicação gera uma receita precisa (fórmula) e um método de preparo passo a passo.

### Propósito Principal
- **Precisão**: Calcular gramaturas exatas baseadas em porcentagens de padeiro (Baker's Math).
- **Flexibilidade**: Suportar múltiplos métodos de fermentação (Direto, Biga, Poolish, Levain).
- **Educação**: Ensinar o impacto de cada variável (hidratação, sal, tempo) via tooltips e links para o Learn.
- **Workflow**: Servir como ponto de partida para criar uma "Fornada" (Batch) e rastrear resultados.

---

## 📁 Estrutura de Arquivos

### Página Principal
```
src/pages/CalculatorPage.tsx (147 linhas)
```

### Componentes Core
```
src/components/
├── CalculatorForm.tsx (393 linhas)         # Container do formulário (Lado Esquerdo)
└── ResultsDisplay.tsx (329 linhas)         # Container de resultados (Lado Direito)
```

### Seções do Formulário (Modular)
```
src/components/calculator/sections/
├── StyleSection.tsx                        # Seleção de Estilo/Preset
├── FermentationSection.tsx                 # Configuração de Fermentação
├── QuantitySection.tsx                     # Qtd e Peso das Bolas
├── IngredientsSection.tsx (315 linhas)     # Sliders de Ingredientes (Hydration, Salt...)
└── EnvironmentSection.tsx                  # Temp Ambiente e Umidade (Pro)
```

### Componentes Auxiliares
```
src/components/calculator/
├── AccordionSection.tsx                    # Wrapper colapsável para seções
├── TechnicalMethodPanel.tsx                # Gerador de passo a passo
├── IngredientTableEditor.tsx               # Editor avançado de ingredientes
└── UiModeToggle.tsx                        # Toggle Basic/Advanced
```

---

## 🏗️ Hierarquia de Componentes

```
CalculatorPage
├── Layout (Grid 2 Colunas: lg:grid-cols-2)
│
├── Coluna Esquerda (Formulário - Sticky)
│   ├── Header
│   │   ├── UiModeToggle (Basic/Advanced)
│   │   └── InfoTooltip
│   │
│   └── CalculatorForm
│       ├── Style Badge (Target Style)
│       ├── Load Custom Preset (Select + Actions) [Advanced Only]
│       │
│       ├── StyleSection
│       │   └── Bake Type & Style Selectors
│       │
│       ├── FermentationSection
│       │   ├── Technique Selector (Direct, Biga, Poolish, Levain)
│       │   ├── Preferment % Slider
│       │   └── Time/Temp Inputs
│       │
│       ├── QuantitySection
│       │   ├── Number of Balls Input
│       │   └── Ball Weight Input
│       │
│       ├── IngredientsSection (Accordion)
│       │   ├── Basic Mode: CompactParamCards (Read-only preview)
│       │   ├── Advanced Mode: SliderInputs (Hydration, Salt, Oil, Sugar)
│       │   ├── Yeast Selector & Slider
│       │   ├── Levain Details (se YeastType == Levain)
│       │   └── Advanced Ingredients Table (Pro Lock)
│       │
│       ├── EnvironmentSection (Pro Lock)
│       │   └── Temperature & Humidity Inputs
│       │
│       ├── Notes Section (Pro Lock)
│       │   └── Textarea
│       │
│       ├── Save Preset Section (Pro Lock)
│       │   └── Save Button
│       │
│       └── Reset Button
│
└── Coluna Direita (Resultados)
    └── ResultsDisplay
        ├── Header (Title + Unit Toggle: g/oz/vol)
        │
        ├── Summary Cards (Grid)
        │   ├── Total Dough Weight
        │   └── Single Ball Weight
        │
        ├── Pre-ferment Summary (se aplicável)
        │   └── Flour/Water/Yeast breakdown
        │
        ├── Main Ingredients List
        │   └── Rows: Flour, Water, Salt, Yeast, Oil, Sugar
        │
        ├── Action Buttons
        │   ├── "Start New Batch" (Primary CTA)
        │   ├── "Social Card" (Share)
        │   └── "PDF" (Export)
        │
        └── TechnicalMethodPanel
            ├── Step-by-step instructions
            └── Dynamic timings based on config
```

---

## 🔄 Fluxo de Dados e Estado

### Estado Principal (Elevado)
O estado da calculadora geralmente reside em `App.tsx` ou um hook customizado `useCalculator` (não visível aqui, mas inferido pelas props), e é passado para `CalculatorPage` via props.

```typescript
interface CalculatorPageProps {
  config: DoughConfig;              // O objeto de configuração central
  results: DoughResult | null;      // O resultado calculado (output)
  onConfigChange: (partial) => void;// Função para atualizar config
  // ... handlers para ações específicas
}
```

### DoughConfig (Input)
O objeto `DoughConfig` é a "source of truth".
```typescript
interface DoughConfig {
  recipeStyle: string;
  bakeType: BakeType;
  hydration: number;
  salt: number;
  oil: number;
  sugar: number;
  yeastType: YeastType;
  yeastPercentage: number;
  fermentationTechnique: FermentationTechnique;
  prefermentPercentage?: number;
  numPizzas: number;
  ballWeight: number;
  // ... e mais
}
```

### DoughResult (Output)
Calculado em tempo real (provavelmente via `useEffect` ou `useMemo` no pai) sempre que `config` muda.
```typescript
interface DoughResult {
  totalFlour: number;
  totalWater: number;
  totalDough: number;
  finalDough: { flour, water, salt, ... }; // Ingredientes da massa final
  preferment?: { flour, water, yeast };    // Ingredientes do pré-fermento
  ingredientWeights: IngredientWeight[];   // Lista plana para display
}
```

### Atualizações de Estado
1. Usuário move um slider em `IngredientsSection`.
2. `handleNumberChange` chama `onConfigChange({ hydration: 70 })`.
3. O componente pai atualiza o estado `config`.
4. A lógica de cálculo roda novamente.
5. `CalculatorPage` re-renderiza com novos `config` e `results`.

---

## 🧮 Lógica de Cálculo

A lógica matemática (Baker's Math) é abstraída do componente de UI, mas os componentes de UI preparam os dados para ela.

### Modos de Operação
1.  **Basic Mode (Guided)**:
    *   Esconde sliders complexos.
    *   Mostra cards de resumo.
    *   Simplifica opções de fermentação.
2.  **Advanced Mode**:
    *   Libera controle total (sliders, inputs numéricos).
    *   Permite edição de ingredientes avançados.
    *   Permite salvar presets.

### Fermentação
A calculadora lida com complexidade de fermentação:
*   **Direto**: Todos os ingredientes misturados de uma vez.
*   **Biga/Poolish**: Separa parte da farinha/água/fermento para um pré-fermento. O `ResultsDisplay` mostra isso em uma seção separada ("Preferment").
*   **Levain**: Integra dados do `UserProvider` (`levains`) para usar a hidratação real do levain do usuário no cálculo final.

---

## 🎨 UX/UI Design

### Layout Responsivo
*   **Desktop**: Layout de duas colunas lado-a-lado. Formulário à esquerda (sticky), resultados à direita. Permite ver o impacto das mudanças em tempo real.
*   **Mobile**: Stack vertical. Formulário primeiro, resultados abaixo.

### Feedback Visual
*   **Sliders**: Uso de `SliderInput` customizado que combina range slider + input numérico.
*   **Cores Semânticas**:
    *   Água/Hidratação: Azul (`text-blue-500`)
    *   Sal: Cinza (`text-slate-500`)
    *   Óleo: Âmbar (`text-amber-500`)
    *   Açúcar: Rosa (`text-pink-500`)
    *   Fermento/Levain: Laranja/Verde
*   **Tooltips**: Explicações ricas sobre cada parâmetro (ex: "Higher hydration creates an open crumb...").

### Interatividade
*   **Hover Effects**: Cards e botões têm estados de hover claros (`hover:shadow-md`, `hover:bg-lime-600`).
*   **Transições**: `transition-all` suave em quase todos os elementos interativos.
*   **Empty States**: `ResultsDisplay` tem um estado vazio bonito ("Your Formula Awaits") se não houver resultados.

---

## 🛠️ Funcionalidades e Seções

### 1. Style & Preset Management
*   **Presets Oficiais**: Carregados de `STYLES_DATA`.
*   **Presets Customizados**: Salvos em `localStorage` (via `customPresets.ts`).
*   **Target Style**: Badge mostrando qual estilo está sendo mirado.

### 2. Ingredients Management
*   **Core**: Farinha, Água, Sal, Fermento, Óleo, Açúcar.
*   **Advanced (Pro)**: Adição de ingredientes extras (ex: malte, leite em pó) via `IngredientTableEditor`.
*   **Yeast Types**: Suporte a IDY (Instant), ADY (Active Dry), Fresh Yeast, Sourdough Starter, User Levain.

### 3. Fermentation Control
*   **Techniques**: Direct, Biga, Poolish, Sourdough.
*   **Hours & Temp**: Inputs para Bulk Fermentation e Proofing.

### 4. Results & Actions
*   **Unit Toggle**: Alternar entre Gramas (g), Onças (oz) e Volume (xícaras/colheres - aproximado).
*   **Start Batch**: Cria um "Draft Batch" e navega para o MyLab.
*   **Export**: PDF profissional ou Social Card (imagem compartilhável).

---

## 🔐 Permissões e Monetização

A página é fortemente integrada com o sistema `ProFeatureLock`.

### Features Bloqueadas (Pro Only)
1.  **Advanced Ingredients**: Adicionar ingredientes além dos básicos.
    *   *UI*: Bloqueio visual sobre a tabela de ingredientes.
2.  **Environment Controls**: Inputs de temperatura ambiente e umidade.
    *   *UI*: Seção inteira bloqueada.
3.  **Notes**: Campo de texto livre.
    *   *UI*: Seção bloqueada.
4.  **Save Custom Presets**: Capacidade de salvar fórmulas pessoais.
    *   *UI*: Botão de salvar bloqueado.
5.  **Export PDF**: Gerar PDF da receita.
    *   *UI*: Ícone de cadeado no botão PDF.
6.  **Social Sharing**: Gerar card social.
    *   *UI*: Ícone de cadeado no botão Social Card.

### Upsell Strategy
*   Mensagens contextuais ("Unlock advanced environment controls...", "Save your custom formulas...").
*   Banner de rodapé no formulário para usuários Free ("Stop guessing. Start mastering...").

---

## 🔗 Integrações e Dependências

### Contextos
*   **UserProvider**:
    *   `levains`: Para popular o dropdown de levains do usuário.
    *   `userStyles`: Para carregar estilos criados pelo usuário.
    *   `user`: Para verificar plano (Free/Pro).
*   **ToastProvider**: Para feedback de ações (Salvar, Copiar link, Erros).
*   **Translation (i18n)**: Todo o texto é traduzido (`t('key')`).

### Helpers & Logic
*   `customPresets.ts`: Lógica de CRUD para presets locais.
*   `stylesData.ts`: Dados estáticos dos estilos oficiais.
*   `methodGenerator.ts`: Gera o texto do passo a passo baseado na config.
*   `exportService.ts`: Gera o PDF.

---

## 🎓 Onboarding e Ajuda

### Onboarding Tooltip
A página suporta um fluxo de onboarding guiado (`OnboardingTooltip`).
*   **Steps**:
    1.  Formulário (Visão geral)
    2.  Num Pizzas (Quantidade)
    3.  Resultados (Onde ver a saída)
    4.  Save Button (Como iniciar)
*   **Refs**: `useRef` é usado para focar elementos específicos durante o tour.

### Learn Integration
*   Cada slider tem um link `learnArticle` associado (ex: `getArticleById('water')`).
*   Isso conecta a ferramenta prática (Calculadora) com a teoria (Learn Section).

---

**Última Atualização**: 30 de Novembro de 2024
**Versão**: 1.0
**Autor**: Análise Técnica - Antigravity AI
