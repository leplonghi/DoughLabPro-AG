# Análise Completa da Página Learn - DoughLabPro

## 📋 Índice
1. [Visão Geral](#visão-geral)
2. [Estrutura de Arquivos](#estrutura-de-arquivos)
3. [Hierarquia de Componentes](#hierarquia-de-componentes)
4. [Fluxo de Navegação](#fluxo-de-navegação)
5. [Estrutura de Dados (Conteúdo)](#estrutura-de-dados-conteúdo)
6. [UX/UI Design](#uxui-design)
7. [Modos de Leitura](#modos-de-leitura)
8. [Categorias e Taxonomia](#categorias-e-taxonomia)
9. [Integrações](#integrações)

---

## 🎯 Visão Geral

A **Learn Page** (DoughLab Learning Hub) é a base de conhecimento científica do aplicativo. Diferente de um blog comum, ela funciona como uma enciclopédia interativa e estruturada, focada na ciência da panificação.

### Propósito Principal
- **Educação Profunda**: Explicar o "porquê" por trás das técnicas (química, física, biologia).
- **Acessibilidade**: Traduzir conceitos complexos para linguagem acessível (Grandma Mode).
- **Referência Rápida**: Fornecer resumos executivos e dicas práticas (Summary Mode).
- **Troubleshooting**: Ajudar a diagnosticar e corrigir problemas comuns.

---

## 📁 Estrutura de Arquivos

### Páginas e Roteamento
```
src/pages/learn/
├── LearnPage.tsx (22 linhas)           # Entry point / Router wrapper
├── LearnHomePage.tsx (294 linhas)      # Dashboard / Library Index
└── LearnArticlePage.tsx (97 linhas)    # Article Viewer Container
```

### Componentes de Renderização
```
src/components/learn/
├── LearnArticleRenderer.tsx (390 linhas) # Renderizador de conteúdo rico
└── LearnComponents.tsx                 # UI reutilizável (Collapse, etc)
```

### Dados (Content CMS)
```
src/data/learn-content/
├── index.ts (159 linhas)               # Registro central de módulos
├── [topic].ts (ex: water.ts)           # Arquivos de conteúdo individual
└── ... (60+ módulos)
```

---

## 🏗️ Hierarquia de Componentes

### LearnHomePage

```
LearnHomePage
└── LibraryPageLayout
    ├── Hero Section
    │   ├── Gradient Background
    │   ├── Title: "DoughLab Learning Hub"
    │   └── CTA: "Explore All Articles"
    │
    ├── Category Grid (3 cols)
    │   └── CategoryCard (x6)
    │       ├── Icon + Color Theme
    │       ├── Title & Description
    │       └── "View Articles" Link
    │
    └── Search Bar
        ├── Input (Debounced)
        └── Search Icon
```

### LearnArticlePage

```
LearnArticlePage
├── Breadcrumb Bar (Sticky)
│   └── Learn > Category > Article Title
│
├── LearnArticleRenderer
│   ├── Header Section
│   │   ├── Category Badge
│   │   ├── Difficulty Badge
│   │   ├── Title & Subtitle
│   │   └── Tags
│   │
│   ├── Mode Selector (Sticky)
│   │   ├── Technical Mode (Default)
│   │   ├── Grandma Mode (Simplified)
│   │   └── Summary Mode (Executive)
│   │
│   └── Content Body (Dynamic)
│       ├── Introduction
│       ├── History & Context
│       ├── Technical Foundations
│       ├── Impact on Dough/Baking
│       ├── Practical Ranges
│       ├── Pro Tips (Amber Box)
│       ├── Critical Points (Red Box)
│       └── FAQ / References
│
└── Related Articles Footer
    └── Grid of 3 related cards
```

---

## 🔄 Fluxo de Navegação

1.  **Entrada**: Usuário acessa `/learn`.
2.  **Exploração**:
    *   Clica em uma **Categoria** -> Filtra lista de artigos.
    *   Usa a **Busca** -> Filtra lista em tempo real.
    *   Clica em "Explore All" -> Mostra tudo.
3.  **Seleção**: Clica em um `LearnArticleCard`.
4.  **Leitura**: Navega para `/learn/article/:id`.
5.  **Interação**:
    *   Alterna modos de leitura (Technical/Grandma/Summary).
    *   Expande seções de FAQ/Referências.
    *   Clica em tags ou links internos.
6.  **Saída/Continuação**:
    *   Clica em "Related Articles" no rodapé.
    *   Usa breadcrumbs para voltar.

---

## 📚 Estrutura de Dados (Conteúdo)

O conteúdo é tipado via `LearnArticleData` e estruturado para suportar renderização rica.

```typescript
interface LearnArticleData {
  id: string;
  title: string;
  subtitle: string;
  category: LearnCategory;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  tags: string[];
  
  // Conteúdo Principal
  intro: string;
  history?: string;
  technicalFoundations?: string[];
  doughImpact?: string[];
  bakingImpact?: string[];
  
  // Dados Práticos
  practicalRanges?: {
    label: string;
    min?: number;
    max?: number;
    unit?: string;
    recommended?: number;
    notes?: string;
  }[];
  
  // Dicas e Avisos
  proTips?: string[];
  criticalPoints?: string[];
  
  // Variantes
  regionalVariants?: string[];
  variantsAndImplications?: {
    variant: string;
    description: string;
  }[];
  
  // FAQ & Refs
  faq?: { q: string; a: string }[];
  references?: string[];
  
  // Modos Alternativos
  grandmaVersion?: GrandmaArticleData;
}
```

---

## 🎨 UX/UI Design

### Identidade Visual
*   **Hero**: Gradiente verde (`from-[#3A6B3A] to-[#558B55]`) consistente com a marca "Lab".
*   **Tipografia**: Hierarquia clara com `text-slate-900` para títulos e `text-slate-600` para corpo.
*   **Espaçamento**: Generoso (`p-6`, `p-8`) para facilitar leitura longa.

### Sistema de Cores por Categoria
Cada categoria tem um tema de cor aplicado a ícones, bordas e fundos:
*   **Ingredient Science**: Lime (`lime-500`)
*   **Dough Science**: Sky (`sky-500`)
*   **Fermentation Science**: Amber (`amber-500`)
*   **Baking Science**: Rose (`rose-500`)
*   **Process Techniques**: Teal (`teal-500`)
*   **Troubleshooting**: Purple (`purple-500`)

### Componentes de Leitura
*   **Sticky Mode Selector**: Permite trocar de modo a qualquer momento sem perder o contexto.
*   **Callout Boxes**:
    *   *Pro Tips*: Fundo âmbar, ícone de lâmpada.
    *   *Critical Points*: Fundo vermelho claro, ícone de alerta.
    *   *Standard Sections*: Cards brancos com borda sutil e sombra.

---

## 👓 Modos de Leitura

Uma feature única do DoughLabPro é a capacidade de adaptar o conteúdo ao perfil do leitor:

1.  **Technical Mode (Default)**
    *   Conteúdo completo, científico e detalhado.
    *   Foca em química, física e dados precisos.
    *   Ideal para: Profissionais e entusiastas sérios.

2.  **Grandma Mode (Simplificado)**
    *   Linguagem coloquial e acolhedora.
    *   Analogias simples (ex: "O fermento é como um bichinho com fome").
    *   Remove jargão técnico.
    *   Ideal para: Iniciantes ou leitura casual.

3.  **Summary Mode (Executivo)**
    *   Gerado automaticamente (`summaryGenerator.ts`).
    *   Lista bullet-points ("Key Takeaways").
    *   Resumo introdutório curto.
    *   Ideal para: Revisão rápida ou consulta durante o trabalho.

---

## 🏷️ Categorias e Taxonomia

As 6 categorias principais cobrem todo o espectro do conhecimento:

1.  **Ingredient Science**: Farinha, Água, Sal, Gorduras, Açúcares.
2.  **Dough & Gluten Science**: Reologia, Estrutura, Glúten.
3.  **Fermentation Science**: Leveduras, Curvas, Temperatura, Prefermentos.
4.  **Baking Science**: Transferência de calor, Fornos, Maillard.
5.  **Process Techniques**: Boleamento, Laminação, Shaping.
6.  **Troubleshooting**: Diagnóstico de problemas (Gummy Crumb, Pale Crust, etc.).

---

## 🔗 Integrações

### Com Calculator
*   Os sliders da calculadora linkam diretamente para artigos relevantes (ex: Slider de Sal -> Artigo "Salt Function in Dough").

### Com Styles
*   Páginas de detalhes de estilo sugerem artigos de "Learn Foundations" relevantes para aquele estilo.

### Com MyLab
*   Insights e dicas no dashboard podem linkar para artigos de aprofundamento.

---

**Última Atualização**: 30 de Novembro de 2024
**Versão**: 1.0
**Autor**: Análise Técnica - Antigravity AI
