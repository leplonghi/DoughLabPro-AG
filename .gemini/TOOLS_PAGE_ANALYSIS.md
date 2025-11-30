# Análise Completa da Página Tools - DoughLabPro

## 📋 Índice
1. [Visão Geral](#visão-geral)
2. [Estrutura de Arquivos](#estrutura-de-arquivos)
3. [Hierarquia de Componentes](#hierarquia-de-componentes)
4. [Ferramentas Disponíveis](#ferramentas-disponíveis)
5. [UX/UI Design](#uxui-design)
6. [Permissões e Monetização](#permissões-e-monetização)

---

## 🎯 Visão Geral

A **Tools Page** é o painel de utilitários técnicos do DoughLabPro. Enquanto a Calculadora é a ferramenta principal, esta página abriga ferramentas especializadas para diagnóstico e otimização do processo de panificação.

### Propósito Principal
- **Centralização**: Acesso rápido a todos os utilitários auxiliares.
- **Diagnóstico**: Ferramentas para resolver problemas (DoughBot) e entender limitações de equipamento (Oven Profiler).
- **Upsell**: Demonstrar valor das ferramentas Pro (que são a maioria nesta seção).

---

## 📁 Estrutura de Arquivos

### Página Principal
```
src/pages/ToolsPage.tsx (183 linhas)
```

### Ferramentas Específicas
```
src/pages/OvenAnalysisPage.tsx (312 linhas)   # Oven Profiler Tool
src/pages/DoughbotPage.tsx (114 linhas)       # AI Diagnostic Tool
```

### Lógica de Negócio
```
src/logic/ovenProfile.ts                      # Algoritmo de análise de forno
```

---

## 🏗️ Hierarquia de Componentes

### ToolsPage (Hub)
```
ToolsPage
└── LibraryPageLayout
    ├── Hero Section
    │   ├── Gradient Background
    │   ├── Title: "Baking Tools"
    │   └── Pills: Calculation, AI Diagnostics, Oven Analysis
    │
    └── Tools Grid (Responsive)
        ├── Calculator Card (Link to /calculator)
        ├── DoughBot Card (Link to /tools-doughbot) [Pro]
        ├── Oven Profiler Card (Link to /tools-oven-analysis) [Pro]
        └── Hydration Converter Card (Coming Soon)
```

### OvenAnalysisPage (Tool)
```
OvenAnalysisPage
└── TechnicalPageLayout
    └── ProFeatureLock (Feature: tools.oven_analysis)
        ├── Input Form
        │   ├── Oven Type (Gas, Electric, Wood, etc.)
        │   ├── Max Temp (Input + Unit)
        │   ├── Baking Surface (Stone, Steel, None)
        │   ├── Rack Position (Top, Middle, Bottom)
        │   ├── Preheat Time (with Tooltip)
        │   └── Convection Toggle
        │
        ├── Analyze Button (Action)
        │
        └── Results Section (Conditional)
            ├── Summary Card (Dark Theme)
            └── Advice Grid (3 Cols)
                ├── Preheating & Rack Advice
                ├── Baking Strategy
                └── Dough Adjustments
```

### DoughbotPage (Tool)
```
DoughbotPage
└── TechnicalPageLayout
    └── ProFeatureLock (Feature: tools.doughbot)
        ├── Input Section
        │   ├── Common Problem Select (Sticky, Tearing, etc.)
        │   └── Detailed Description Textarea
        │
        ├── Diagnose Button (Action)
        │
        └── Results Placeholder
            ├── Possible Causes
            └── Suggested Solutions
```

---

## 🛠️ Ferramentas Disponíveis

### 1. FormulaLab (Calculator)
*   **Status**: Core / Free (Basic) / Pro (Advanced).
*   **Função**: Link direto para a página principal da calculadora.

### 2. Dough Diagnostic (DoughBot)
*   **Status**: Pro Only / Beta.
*   **Função**: Sistema especialista para diagnosticar falhas na massa.
*   **Estado Atual**: Interface implementada, lógica de diagnóstico simulada (placeholder).

### 3. Oven Profiler
*   **Status**: Pro Only.
*   **Função**: Analisa a termodinâmica do forno do usuário.
*   **Lógica**: Baseada em princípios físicos (ex: fornos frios precisam de mais açúcar/óleo para dourar; fornos quentes precisam de hidratação mais alta para não ressecar).
*   **Output**: Gera estratégias concretas (ex: "Use a prateleira superior", "Adicione 2% de açúcar").

### 4. Hydration Converter
*   **Status**: Coming Soon.
*   **Função**: Planejada para converter receitas entre diferentes hidratações automaticamente.

---

## 🎨 UX/UI Design

### Cards de Ferramentas
*   **Visual**: Ícones grandes em containers coloridos (`bg-lime-50`, `text-lime-600`).
*   **Badges**: "NEW" para novidades, "PRO" com ícone de cadeado para features bloqueadas.
*   **Hover**: Elevação suave e mudança de cor da borda.

### Formulários Técnicos
*   **Tooltips**: Uso extensivo de tooltips (`InfoIcon`) para educar o usuário sobre *por que* um dado é necessário (ex: "Why preheat?").
*   **Feedback**: Validação de inputs (ex: temperatura máxima inválida) com mensagens de erro em vermelho.

### Resultados
*   **Oven Profiler**: Usa um card escuro (`bg-slate-900`) para o resumo principal, destacando-o como "Veredito", seguido por cards brancos detalhados.

---

## 🔐 Permissões e Monetização

A página Tools é um forte driver de conversão para o plano Pro.

*   **Bloqueio**: DoughBot e Oven Profiler são totalmente bloqueados para usuários Free via `ProFeatureLock`.
*   **Visibilidade**: Os cards aparecem para todos, mas com badge "PRO". Ao clicar, o usuário vê a ferramenta bloqueada com a mensagem de upsell ("Unlock advanced oven analysis...").

---

**Última Atualização**: 30 de Novembro de 2024
**Versão**: 1.0
**Autor**: Análise Técnica - Antigravity AI
