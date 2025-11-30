# Análise Completa da Página MyLabs - DoughLabPro

## 📋 Índice
1. [Visão Geral](#visão-geral)
2. [Estrutura de Arquivos](#estrutura-de-arquivos)
3. [Hierarquia de Componentes](#hierarquia-de-componentes)
4. [Fluxo de Dados](#fluxo-de-dados)
5. [Correlações e Dependências](#correlações-e-dependências)
6. [UX/UI Design](#uxui-design)
7. [Rotas e Navegação](#rotas-e-navegação)
8. [Permissões e Controle de Acesso](#permissões-e-controle-de-acesso)
9. [Tipos e Interfaces](#tipos-e-interfaces)

---

## 🎯 Visão Geral

A página **MyLabs** é o hub central do aplicativo DoughLabPro, funcionando como um dashboard personalizado onde o usuário gerencia todo seu laboratório de panificação. É a página padrão (fallback) do aplicativo e o ponto de entrada principal após o login.

### Propósito Principal
- Dashboard pessoal do usuário
- Centro de controle para todas as funcionalidades do "laboratório"
- Visualização de estatísticas e progresso
- Acesso rápido a todas as sub-páginas do MyLab

---

## 📁 Estrutura de Arquivos

### Arquivo Principal
```
src/pages/MyLabPage.tsx (303 linhas)
```

### Sub-páginas do MyLab
```
src/pages/mylab/
├── MyLabLayout.tsx                    # Layout wrapper (minimalista)
├── MyLabBatchesPage.tsx              # Histórico de fornadas
├── MyLabComparisonsPage.tsx          # Comparações A/B (Pro)
├── MyLabDoughsPage.tsx               # Massas salvas (Pro)
├── MyLabFloursPage.tsx               # Inventário de farinhas (Pro)
├── MyLabInsightsPage.tsx             # Analytics e insights (Pro)
├── MyLabLevainPetPage.tsx            # Levain Pet (Pro)
├── MyLabRecipesPage.tsx              # Receitas salvas (Pro)
├── MyLabSensoryDiaryPage.tsx         # Diário sensorial (Pro)
├── ObjectivesPage.tsx                # Metas e objetivos (Pro)
├── TimelinePage.tsx                  # Timeline de atividades
├── CompareRecipesPage.tsx            # Comparação de receitas (Pro)
├── ConsistencyListPage.tsx           # Testes de consistência (Pro)
├── ConsistencyDetailPage.tsx         # Detalhes de série de testes (Pro)
└── levain/
    ├── LevainLayout.tsx              # Layout para seção de levain
    ├── LevainListPage.tsx            # Lista de starters
    ├── LevainDetailPage.tsx          # Detalhes de um starter
    ├── LevainFormPage.tsx            # Formulário de criação/edição
    └── components/
        ├── LevainAssistant.tsx       # Assistente de levain
        ├── LevainFeedingForm.tsx     # Formulário de alimentação
        ├── LevainInsights.tsx        # Insights do levain
        └── LevainProfile.tsx         # Perfil do levain
```

---

## 🏗️ Hierarquia de Componentes

### Estrutura Visual da MyLabPage

```
MyLabPage
└── MyLabLayout (wrapper minimalista)
    └── Container (max-w-7xl mx-auto)
        ├── Header Section
        │   ├── Greeting + User Name
        │   ├── Subtitle
        │   └── "New Bake" Button → Calculator
        │
        ├── Main Grid (lg:grid-cols-3)
        │   ├── Left Column (lg:col-span-2)
        │   │   ├── Status Cards Row (grid sm:grid-cols-2)
        │   │   │   ├── Levain Status Widget
        │   │   │   │   ├── Icon + Title
        │   │   │   │   ├── Active Levain Info
        │   │   │   │   └── onClick → mylab/levain
        │   │   │   │
        │   │   │   └── Last Bake Widget
        │   │   │       ├── Icon + Title
        │   │   │       ├── Recent Batch Info
        │   │   │       └── onClick → batch detail
        │   │   │
        │   │   ├── Quick Actions Grid (grid cols-2 sm:cols-3 lg:cols-4)
        │   │   │   ├── My Bakes → mylab/fornadas
        │   │   │   ├── Levain → mylab/levain
        │   │   │   ├── Consistency → mylab/consistency (Pro)
        │   │   │   ├── Comparisons → mylab/comparacoes
        │   │   │   ├── Goals → mylab/objetivos (Pro)
        │   │   │   ├── Insights → mylab/insights
        │   │   │   └── My Flours → mylab/farinhas (Pro)
        │   │   │
        │   │   └── Active Goal Banner (conditional)
        │   │       ├── Goal Title + Progress
        │   │       ├── Progress Bar
        │   │       └── Update Button
        │   │
        │   └── Right Column (Sidebar)
        │       ├── Lab Performance Card
        │       │   ├── Total Bakes Stat
        │       │   ├── Success Rate Stat
        │       │   └── Recommended Reading Link
        │       │
        │       ├── Pro Tip Card
        │       │   └── Daily Tip Content
        │       │
        │       └── LearnAffiliateBlock
        │           └── Affiliate content
        │
        └── QuickAction Component (reusable)
            ├── Icon
            ├── Label
            └── SubLabel
```

---

## 🔄 Fluxo de Dados

### Contextos Utilizados

#### 1. **UserProvider** (Principal)
```typescript
const { user, batches, levains, goals } = useUser();
```

**Dados Consumidos:**
- `user`: Informações do usuário (nome, email, plano)
- `batches`: Array de todas as fornadas
- `levains`: Array de todos os starters
- `goals`: Array de metas do usuário

**Dados Derivados Localmente:**
```typescript
// Computed values usando useMemo
const activeLevain = levains.find(l => l.status === 'ativo')
const lastBake = batches[batches.length - 1]
const activeGoal = goals.find(g => g.status === 'ativo')
const totalBakes = batches.length
const successRate = calculateSuccessRate(batches)
```

#### 2. **RouterContext**
```typescript
const { navigate } = useRouter();
```
Usado para navegação entre páginas.

### Props Recebidas
```typescript
interface MyLabPageProps {
  onNavigate: (page: Page) => void;
  onCreateDraftBatch: () => void;
  onLoadAndNavigate?: (config: any) => void;
}
```

### Fluxo de Navegação
```
MyLabPage
  ├─→ onNavigate('calculator') → CalculatorPage
  ├─→ onNavigate('mylab/levain') → LevainListPage
  ├─→ onNavigate('mylab/fornadas') → MyLabBatchesPage
  ├─→ onNavigate('mylab/consistency') → ConsistencyListPage (Pro)
  ├─→ onNavigate('mylab/comparacoes') → MyLabComparisonsPage
  ├─→ onNavigate('mylab/objetivos') → ObjectivesPage (Pro)
  ├─→ onNavigate('mylab/insights') → MyLabInsightsPage
  ├─→ onNavigate('mylab/farinhas') → MyLabFloursPage (Pro)
  ├─→ onNavigate('batch', batchId) → BatchDetailPage
  └─→ onNavigate('learn/fermentation') → LearnArticlePage
```

---

## 🔗 Correlações e Dependências

### Dependências Diretas

#### Componentes UI
```typescript
import {
  PlusCircleIcon,
  DocumentTextIcon,
  FireIcon,
  ChartBarIcon,
  BeakerIcon,
  SparklesIcon,
  ClockIcon,
  ScaleIcon,
  ArrowsRightLeftIcon,
  ClipboardDocumentCheckIcon
} from '@/components/ui/Icons';
```

#### Componentes de Layout
```typescript
import MyLabLayout from './mylab/MyLabLayout';
import LearnAffiliateBlock from '@/components/learn/LearnAffiliateBlock';
```

#### Contextos
```typescript
import { useUser } from '@/contexts/UserProvider';
```

#### Tipos
```typescript
import { Page } from '@/types';
```

### Dependências Indiretas

#### Via UserProvider
- **Firebase Firestore**: Persistência de dados
- **useBatchManager**: Hook para gerenciar batches
- **Permissions System**: Controle de acesso Pro

#### Via Router
- **AppRouter.tsx**: Sistema de roteamento
- **RouterContext**: Navegação global

---

## 🎨 UX/UI Design

### Princípios de Design

#### 1. **Layout Responsivo**
```css
/* Mobile First */
grid-cols-1           /* Mobile */
sm:grid-cols-2        /* Tablet */
lg:grid-cols-3        /* Desktop */
lg:col-span-2         /* Desktop - coluna principal */
```

#### 2. **Hierarquia Visual**
- **Header**: Saudação personalizada + CTA principal
- **Status Cards**: Informações críticas (Levain + Last Bake)
- **Quick Actions**: Acesso rápido a funcionalidades
- **Sidebar**: Métricas e dicas

#### 3. **Sistema de Cores**

**Status Cards:**
- Levain: `orange-500/600` (laranja - fogo/fermentação)
- Last Bake: `blue-500/600` (azul - experimento)

**Quick Actions:**
- My Bakes: `blue-500`
- Levain: `orange-500`
- Consistency: `cyan-500`
- Comparisons: `purple-500`
- Goals: `indigo-500`
- Insights: `rose-500`
- Flours: `emerald-500`

**Primary CTA:**
- New Bake: `lime-500/600` (verde limão - ação principal)

**Goal Banner:**
- Gradient: `indigo-500 to purple-600`

#### 4. **Espaçamento (Compacto)**
```css
/* Recentemente otimizado para ser mais fino */
gap-3           /* Cards row */
gap-2           /* Quick actions */
p-4             /* Card padding (reduzido) */
space-y-4       /* Vertical spacing */
```

#### 5. **Interatividade**

**Hover States:**
```css
hover:border-orange-200    /* Levain card */
hover:border-blue-200      /* Batch card */
hover:border-lime-200      /* Quick actions */
hover:shadow-md            /* Elevation */
hover:-translate-y-0.5     /* Lift effect */
```

**Active States:**
```css
active:scale-95            /* Button press */
```

**Transitions:**
```css
transition-all             /* Smooth animations */
animate-fade-in            /* Page entrance */
```

#### 6. **Tipografia**
```css
/* Headers */
text-xl md:text-2xl        /* Page title */
text-base                  /* Card titles */
text-sm                    /* Subtitles */
text-xs                    /* Labels/metadata */

/* Weights */
font-bold                  /* Emphasis */
font-semibold              /* Buttons */
font-medium                /* Links */
```

### Componentes Reutilizáveis

#### QuickAction Component
```typescript
const QuickAction: React.FC<{
  icon: React.ReactNode;
  label: string;
  subLabel: string;
  onClick: () => void;
}> = ({ icon, label, subLabel, onClick }) => (
  <button className="flex flex-col items-center justify-center p-3 
    rounded-xl bg-white border border-slate-100 shadow-sm 
    hover:shadow-md hover:border-lime-200 transition-all 
    hover:-translate-y-0.5">
    <div className="mb-2 p-1.5 rounded-full bg-slate-50">
      {icon}
    </div>
    <span className="text-xs font-bold text-slate-900">{label}</span>
    <span className="text-xs text-slate-500">{subLabel}</span>
  </button>
);
```

### Lógica de Saudação
```typescript
const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
};
```

### Cálculo de Success Rate
```typescript
const successRate = useMemo(() => {
  if (totalBakes === 0) return 0;
  const ratedBakes = batches.filter(b => b.rating);
  if (ratedBakes.length === 0) return 0;
  const avgRating = ratedBakes.reduce((acc, b) => 
    acc + (b.rating || 0), 0) / ratedBakes.length;
  return Math.round((avgRating / 5) * 100);
}, [batches, totalBakes]);
```

---

## 🛣️ Rotas e Navegação

### Rotas Principais do MyLab

#### AppRouter.tsx - Mapeamento
```typescript
switch (route) {
  case 'mylab':
  case 'lab':
    return protect(<MyLabPage ... />);
  
  case 'mylab/receitas':
    return protectPro(<MyLabRecipesPage ... />);
  
  case 'mylab/receitas/comparar':
    return protectPro(<CompareRecipesPage ... />);
  
  case 'mylab/massas':
    return protectPro(<MyLabDoughsPage ... />);
  
  case 'mylab/farinhas':
    return protectPro(<MyLabFloursPage ... />);
  
  case 'mylab/fornadas':
    return protect(<MyLabBatchesPage ... />);
  
  case 'mylab/diario-sensorial':
    return protectPro(<MyLabSensoryDiaryPage ... />);
  
  case 'mylab/comparacoes':
    return protect(<MyLabComparisonsPage ... />);
  
  case 'mylab/insights':
    return protect(<MyLabInsightsPage ... />);
  
  case 'mylab/timeline':
    return protect(<TimelinePage ... />);
  
  case 'mylab/objetivos':
    return protectPro(<ObjectivesPage ... />);
  
  case 'mylab/consistency':
    return protectPro(<ConsistencyListPage ... />);
  
  case 'mylab/levain-pet':
    return protectPro(<MyLabLevainPetPage />);
  
  case 'mylab/levain':
    return protect(<LevainListPage ... />);
  
  case 'mylab/levain/detail':
    return protect(<LevainDetailPage levainId={routeParams} ... />);
  
  case 'mylab/consistency/detail':
    return protectPro(<ConsistencyDetailPage seriesId={routeParams} ... />);
  
  default:
    return protect(<MyLabPage ... />); // Fallback
}
```

### Hierarquia de Rotas
```
/mylab (ou /) → Dashboard principal
├── /mylab/fornadas → Histórico de bakes
├── /mylab/levain → Lista de starters
│   └── /mylab/levain/detail/:id → Detalhes do starter
├── /mylab/consistency → Testes de consistência (Pro)
│   └── /mylab/consistency/detail/:id → Série específica (Pro)
├── /mylab/comparacoes → Comparações A/B
├── /mylab/objetivos → Metas (Pro)
├── /mylab/insights → Analytics (Pro)
├── /mylab/farinhas → Inventário de farinhas (Pro)
├── /mylab/receitas → Receitas salvas (Pro)
│   └── /mylab/receitas/comparar → Comparar receitas (Pro)
├── /mylab/massas → Massas salvas (Pro)
├── /mylab/diario-sensorial → Diário sensorial (Pro)
├── /mylab/timeline → Timeline de atividades
└── /mylab/levain-pet → Levain Pet (Pro)
```

---

## 🔐 Permissões e Controle de Acesso

### Sistema de Proteção

#### RequireAuth (Base)
```typescript
const protect = (component: React.ReactNode) => (
  <RequireAuth onOpenAuth={() => setIsAuthModalOpen(true)}>
    {component}
  </RequireAuth>
);
```
- Requer login
- Abre modal de autenticação se não autenticado

#### RequirePro (Premium)
```typescript
const protectPro = (component: React.ReactNode) => (
  <RequireAuth onOpenAuth={() => setIsAuthModalOpen(true)}>
    <RequirePro>
      {component}
    </RequirePro>
  </RequireAuth>
);
```
- Requer login + plano Pro
- Abre paywall se não for Pro

### Funcionalidades por Tier

#### Free Tier
✅ **Acesso Completo:**
- MyLab Dashboard
- My Bakes (Fornadas)
- Levain Management (básico)
- Comparisons (limitado)
- Insights (limitado)
- Timeline

#### Pro Tier
✅ **Acesso Adicional:**
- Recipes (Receitas salvas)
- Compare Recipes (Comparação de receitas)
- Doughs (Massas salvas)
- Flours Inventory (Inventário de farinhas)
- Sensory Diary (Diário sensorial)
- Objectives (Metas e objetivos)
- Consistency Tests (Testes de consistência)
- Levain Pet (Gamificação)
- Advanced Insights (Analytics avançados)

### ProFeatureLock Component

Usado nas sub-páginas para bloquear conteúdo:
```typescript
<ProFeatureLock
  featureKey="mylab.unlimited_advanced"
  customMessage="Unlock deep insights with Lab Pro."
  className="min-h-[25rem] flex items-center justify-center"
>
  {/* Conteúdo Pro */}
</ProFeatureLock>
```

**Feature Keys:**
- `mylab.unlimited_advanced` - Funcionalidades avançadas
- `app.theme_customization` - Customização de tema
- Outros definidos em `permissions.ts`

---

## 📊 Tipos e Interfaces

### Principais Tipos Utilizados

#### Batch (Fornada)
```typescript
interface Batch {
  id: string;
  name: string;
  doughConfig: DoughConfig;
  doughResult?: DoughResult | null;
  createdAt: string;
  updatedAt: string;
  rating?: number; // 1-5
  status: BatchStatus;
  notes?: string;
  photoUrl?: string;
  isFavorite: boolean;
  isPublic?: boolean;
  bulkTimeHours?: number;
  proofTimeHours?: number;
  ovenType?: OvenType;
  styleId?: string;
}
```

#### Levain (Starter)
```typescript
interface Levain {
  id: string;
  name: string;
  hydration: number;
  baseFlourType?: string;
  createdAt: string;
  updatedAt?: string;
  lastFeeding: string;
  totalWeight: number;
  isDefault: boolean;
  status: LevainStatus; // "ativo" | "precisa_atencao" | "descanso" | "arquivado"
  typicalUse?: string;
  notes?: string;
  feedingHistory: FeedingEvent[];
  notificationEnabled?: boolean;
  idealFeedingIntervalHours?: number;
}
```

#### Goal (Meta)
```typescript
interface Goal {
  id: string;
  title: string;
  description: string;
  status: GoalStatus; // "ativo" | "concluido"
  progress: number;
  createdAt: string;
  updatedAt: string;
  targetType: GoalTargetType; // "style" | "hydration" | "frequency" | "levain"
  targetValue: string | number;
}
```

#### TestSeries (Série de Testes)
```typescript
interface TestSeries {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  parameters: {
    variable: TestSeriesVariable; // "hydration" | "flour" | "fermentation_time" | "other"
    steps: (string | number)[];
  };
  relatedBakes: string[]; // IDs de batches
}
```

#### User
```typescript
interface User {
  name: string;
  email: string;
  avatar?: string;
  birthDate?: string;
  gender?: Gender;
  isPro?: boolean;
  plan?: 'free' | 'pro' | 'calculator_unlock' | 'lab_pro';
  proSince?: string;
  proExpiresAt?: string;
  trialEndsAt?: string | null;
  stripeCustomerId?: string | null;
  stripeSubscriptionId?: string | null;
}
```

---

## 🔄 Fluxos de Interação

### 1. Criar Nova Fornada
```
User clicks "New Bake" button
  → onNavigate('calculator')
  → CalculatorPage loads
  → User configures dough
  → onStartBatch()
  → Batch created in UserProvider
  → Navigate to batch detail
```

### 2. Gerenciar Levain
```
User clicks Levain Status Card
  → onNavigate('mylab/levain')
  → LevainListPage loads
  → User selects levain
  → onNavigate('mylab/levain/detail', levainId)
  → LevainDetailPage loads
  → User can feed, edit, or delete
```

### 3. Ver Histórico de Bakes
```
User clicks "My Bakes" quick action
  → onNavigate('mylab/fornadas')
  → MyLabBatchesPage loads
  → Displays filtered list of batches
  → User clicks batch card
  → onNavigate('batch', batchId)
  → BatchDetailPage loads
```

### 4. Criar Meta
```
User clicks "Goals" quick action
  → onNavigate('mylab/objetivos')
  → ObjectivesPage loads (Pro check)
  → User clicks "New Goal"
  → GoalModal opens
  → User fills form
  → addGoal() in UserProvider
  → Goal appears in dashboard
```

### 5. Comparar Fornadas
```
User clicks "Comparisons" quick action
  → onNavigate('mylab/comparacoes')
  → MyLabComparisonsPage loads
  → User selects batches to compare
  → Side-by-side comparison view
```

---

## 📈 Métricas e Analytics

### Estatísticas Calculadas

#### Total Bakes
```typescript
const totalBakes = batches.length;
```

#### Success Rate
```typescript
const successRate = useMemo(() => {
  if (totalBakes === 0) return 0;
  const ratedBakes = batches.filter(b => b.rating);
  if (ratedBakes.length === 0) return 0;
  const avgRating = ratedBakes.reduce((acc, b) => 
    acc + (b.rating || 0), 0) / ratedBakes.length;
  return Math.round((avgRating / 5) * 100);
}, [batches, totalBakes]);
```

#### Active Levain
```typescript
const activeLevain = useMemo(() => 
  levains.find(l => l.status === 'ativo'), [levains]
);
```

#### Last Bake
```typescript
const lastBake = useMemo(() => 
  batches.length > 0 ? batches[batches.length - 1] : null, 
  [batches]
);
```

#### Active Goal
```typescript
const activeGoal = useMemo(() => 
  goals.find(g => g.status === 'ativo'), [goals]
);
```

---

## 🎯 Principais Funcionalidades

### Dashboard Features

1. **Personalização**
   - Saudação baseada em horário
   - Nome do usuário exibido
   - Estatísticas personalizadas

2. **Status em Tempo Real**
   - Levain ativo e última alimentação
   - Última fornada e suas características
   - Meta ativa e progresso

3. **Acesso Rápido**
   - 7 quick actions para funcionalidades principais
   - Navegação com um clique
   - Ícones coloridos para identificação visual

4. **Insights e Recomendações**
   - Performance do laboratório
   - Taxa de sucesso
   - Leitura recomendada
   - Dica diária (Pro Tip)

5. **Monetização**
   - Affiliate block integrado
   - Upsell para funcionalidades Pro
   - Paywall integrado

---

## 🔧 Otimizações Recentes

### UI Compacta (Novembro 2024)
- Redução de padding em cards: `p-6` → `p-4`
- Gaps reduzidos: `gap-6` → `gap-3` / `gap-2`
- Títulos menores: `text-2xl` → `text-xl md:text-2xl`
- Layout mais fino para desktop

### Performance
- `useMemo` para cálculos derivados
- Lazy loading de sub-páginas
- Suspense boundaries

---

## 🚀 Próximas Melhorias Potenciais

1. **Gamificação**
   - Badges e achievements
   - Streak tracking
   - Leaderboard

2. **Insights Avançados**
   - Gráficos de tendências
   - Análise preditiva
   - Recomendações baseadas em IA

3. **Colaboração**
   - Compartilhar metas com amigos
   - Desafios comunitários
   - Comparações sociais

4. **Automação**
   - Notificações de levain
   - Lembretes de metas
   - Sugestões automáticas de experimentos

---

## 📝 Notas Técnicas

### Estado Global vs Local
- **Global (UserProvider)**: batches, levains, goals, user
- **Local (useMemo)**: derivações e cálculos

### Lazy Loading
Todas as sub-páginas são lazy-loaded via `React.lazy()`:
```typescript
const MyLabBatchesPage = React.lazy(() => 
  import('@/pages/mylab/MyLabBatchesPage')
);
```

### Error Boundaries
Todas as rotas são envolvidas em `ErrorBoundary` no AppRouter.

### Suspense Fallback
```typescript
<Suspense fallback={<LoadingSpinner />}>
  {renderPage()}
</Suspense>
```

---

## 🎨 Design System

### Cores Principais
- **Primary**: `lime-500` (ações principais)
- **Success**: `green-600`
- **Warning**: `yellow-600`
- **Error**: `red-600`
- **Info**: `blue-600`

### Shadows
- `shadow-sm`: Cards padrão
- `shadow-md`: Hover states
- `shadow-lg`: CTAs e banners
- `shadow-{color}-500/20`: Colored shadows

### Borders
- `border-slate-100`: Default
- `border-{color}-200`: Hover states
- `rounded-xl`: Cards e botões
- `rounded-2xl`: Containers grandes

---

## 📚 Referências de Código

### Imports Principais
```typescript
import React, { useMemo } from 'react';
import { useUser } from '@/contexts/UserProvider';
import MyLabLayout from './mylab/MyLabLayout';
import { Page } from '@/types';
import LearnAffiliateBlock from '@/components/learn/LearnAffiliateBlock';
```

### Exports
```typescript
export default MyLabPage;
```

---

## 🔍 Debugging e Troubleshooting

### Common Issues

1. **Batches não aparecem**
   - Verificar UserProvider
   - Checar Firestore sync
   - Validar filtros

2. **Levain status incorreto**
   - Verificar `getStatusFromLastFeeding()`
   - Checar `lastFeeding` timestamp

3. **Success rate = 0**
   - Verificar se batches têm `rating`
   - Checar cálculo no useMemo

4. **Navegação não funciona**
   - Verificar RouterContext
   - Checar route mapping no AppRouter

---

## 📊 Métricas de Uso (Hipotéticas)

### Páginas Mais Acessadas
1. MyLab Dashboard (100%)
2. My Bakes (85%)
3. Levain Management (60%)
4. Calculator (via New Bake) (75%)
5. Insights (Pro) (40%)

### Conversão Pro
- Quick Actions com badge Pro
- ProFeatureLock em sub-páginas
- Paywall origin tracking

---

**Última Atualização**: 30 de Novembro de 2024
**Versão**: 1.0
**Autor**: Análise Técnica - Antigravity AI
