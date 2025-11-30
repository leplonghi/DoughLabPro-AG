# Análise Completa da Página Community - DoughLabPro

## 📋 Índice
1. [Visão Geral](#visão-geral)
2. [Estrutura de Arquivos](#estrutura-de-arquivos)
3. [Hierarquia de Componentes](#hierarquia-de-componentes)
4. [Fluxo de Dados](#fluxo-de-dados)
5. [UX/UI Design](#uxui-design)
6. [Funcionalidades Sociais](#funcionalidades-sociais)
7. [Integrações](#integrações)

---

## 🎯 Visão Geral

A **Community Page** é o hub social do DoughLabPro, onde usuários podem descobrir receitas, compartilhar suas criações e clonar fórmulas de outros padeiros.

### Propósito Principal
- **Inspiração**: Feed visual de pães e pizzas feitos pela comunidade.
- **Compartilhamento**: Plataforma para exibir sucessos (e falhas aprendidas).
- **Colaboração**: Clonagem de receitas ("Forking") para experimentação própria.
- **Gamificação**: Visualização de stats públicos e reputação.

---

## 📁 Estrutura de Arquivos

### Página Principal
```
src/pages/CommunityPage.tsx (124 linhas)
```

### Componentes da Comunidade
```
src/components/community/
├── CommunityFeed.tsx                   # Lista de posts
├── CommunityPostCard.tsx               # Card individual de receita
├── CommunityCreatePost.tsx             # CTA para criar post
└── CommunityProfileSidebar.tsx         # Perfil resumido do usuário
```

### Dados
```
src/data/communityStore.ts              # Mock/API para buscar posts
```

---

## 🏗️ Hierarquia de Componentes

```
CommunityPage
└── LibraryPageLayout
    ├── Hero Section
    │   ├── Gradient Background
    │   ├── Title: "Community Hub"
    │   └── Stats Pills (Share, Inspire, Connect, Learn)
    │
    └── Grid Layout (lg:grid-cols-12)
        │
        ├── Left Column (lg:col-span-3) - Profile
        │   └── CommunityProfileSidebar
        │       ├── User Avatar & Name
        │       ├── Stats (Total Bakes, Avg Rating)
        │       └── Public Recipes Progress Bar
        │
        ├── Center Column (lg:col-span-6) - Feed
        │   └── CommunityFeed
        │       ├── Loading State (Spinner)
        │       ├── Empty State
        │       └── List of CommunityPostCard
        │           ├── Header (User, Date, Like Button)
        │           ├── Photo (Aspect Video)
        │           ├── Stats Grid (Hydration, Salt, Time)
        │           └── Footer (Style Name, Clone Button)
        │
        └── Right Column (lg:col-span-3) - Actions
            └── CommunityCreatePost
                ├── Icon & Title
                ├── Description
                └── CTA Button ("Go to My Lab")
```

---

## 🔄 Fluxo de Dados

### Fetching de Posts
1.  `CommunityPage` monta.
2.  `useEffect` chama `getAllCommunityBatches()`.
3.  Dados são carregados em `communityBatches` state.
4.  `useMemo` adapta os dados de `CommunityBatch` para o formato `Batch` genérico usado na UI.

### Clonagem de Receita
1.  Usuário clica em "Clone Recipe" no `CommunityPostCard`.
2.  Evento sobe para `CommunityPage` via prop `onCloneBatch`.
3.  `CommunityPage` chama `onLoadInspiration(batch.doughConfig)`.
4.  App redireciona para o Calculator com a configuração carregada.

### Criação de Post (Fluxo Indireto)
1.  Usuário vê `CommunityCreatePost`.
2.  Clica em "Go to My Lab".
3.  Navega para `/mylab/fornadas`.
4.  Lá (fora desta página), o usuário seleciona um batch e marca como "Public".

---

## 🎨 UX/UI Design

### Layout Responsivo
*   **Mobile**: Coluna única empilhada. Ordem: Create Post (Topo) -> Feed -> Profile.
*   **Desktop**: Layout de 3 colunas balanceado. Profile (Esq) -> Feed (Centro) -> Create Post (Dir).

### Identidade Visual
*   **Hero**: Consistente com Learn e Styles (Gradiente verde, ícones flutuantes).
*   **Cards**: Design limpo (`bg-white`, `rounded-2xl`, `shadow-sm`).
*   **Stats Visuals**:
    *   Hydration/Salt/Time destacados em grid cinza claro.
    *   Avatar com inicial do usuário.

### Feedback
*   **Loading**: Spinner centralizado.
*   **Empty State**: Mensagem amigável se não houver posts.
*   **Hover Effects**: Sombras suaves e transições de cor em botões.

---

## 🤝 Funcionalidades Sociais

### Feed
- Visualização cronológica (implícita).
- Fotos de destaque (se disponíveis).
- Resumo técnico rápido (Hydration, Salt, Time).

### Interação
- **Like**: Botão de coração (visual por enquanto).
- **Clone**: Funcionalidade core para copiar a receita.

### Perfil
- Resumo rápido da atividade do usuário.
- Incentivo visual (barra de progresso) para publicar mais receitas.

---

## 🔗 Integrações

### Com Calculator
- Ação de "Clone" alimenta diretamente o Calculator.

### Com MyLab
- O fluxo de criação de posts depende do histórico de fornadas do MyLab.

### Com UserProvider
- `CommunityProfileSidebar` consome dados do usuário logado (`user`, `batches`) para mostrar estatísticas reais.

---

**Última Atualização**: 30 de Novembro de 2024
**Versão**: 1.0
**Autor**: Análise Técnica - Antigravity AI
