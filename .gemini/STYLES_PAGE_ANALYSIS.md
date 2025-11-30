# Análise Completa da Página Styles - DoughLabPro

## 📋 Índice
1. [Visão Geral](#visão-geral)
2. [Estrutura de Arquivos](#estrutura-de-arquivos)
3. [Hierarquia de Componentes](#hierarquia-de-componentes)
4. [Fluxo de Dados](#fluxo-de-dados)
5. [Correlações e Dependências](#correlações-e-dependências)
6. [UX/UI Design](#uxui-design)
7. [Sistema de Categorias](#sistema-de-categorias)
8. [Filtragem e Busca](#filtragem-e-busca)
9. [Permissões e Monetização](#permissões-e-monetização)
10. [Tipos e Interfaces](#tipos-e-interfaces)
11. [Dados e Conteúdo](#dados-e-conteúdo)

---

## 🎯 Visão Geral

A **Styles Page** é uma **biblioteca enciclopédica** de estilos de massa (doughs) que serve como:
- **Catálogo técnico** de receitas validadas
- **Recurso educacional** com contexto histórico e cultural
- **Ponto de entrada** para o Calculator (load style)
- **Showcase** de conteúdo Pro vs Free

### Propósito Principal
- Explorar estilos de pizza, pães, pastries, cookies, etc.
- Aprender sobre origem, técnica e parâmetros de cada estilo
- Carregar configurações diretamente no Calculator
- Criar estilos customizados (manual ou via AI)

---

## 📁 Estrutura de Arquivos

### Páginas Principais
```
src/pages/styles/
├── DoughStylesPage.tsx (552 linhas)    # Biblioteca principal
└── StyleDetailPage.tsx (350 linhas)    # Página de detalhes
```

### Componentes Relacionados
```
src/components/styles/
├── CreateStyleModal.tsx                # Modal para criar estilo manual
├── AiStyleBuilderModal.tsx            # Modal para gerar estilo via AI (Pro)
└── StyleSummaryCard.tsx               # Card de resumo (usado em outros lugares)
```

### Dados
```
src/data/
└── stylesData.ts (2044 linhas, 83KB)  # Banco de dados de estilos
```

### Modais Relacionados
```
src/components/modals/
└── ToppingPlannerModal.tsx            # Planejador de ingredientes
```

---

## 🏗️ Hierarquia de Componentes

### DoughStylesPage - Estrutura Visual

```
DoughStylesPage
└── LibraryPageLayout (wrapper)
    └── Container (mx-4 sm:mx-6)
        ├── Hero Section
        │   ├── Gradient Background (green)
        │   ├── Title: "The Global Encyclopedia of Dough"
        │   ├── Subtitle: Technical formulas description
        │   └── Feature Pills (Pizza, Pastry, Regional, Technical)
        │
        ├── Create Your Own Section
        │   ├── Manual Create Button
        │   └── AI Style Builder Button (Pro)
        │
        ├── Toppings Planner CTA
        │   └── "Open Ingredients Planner" Button
        │
        ├── Search & Filter Bar (sticky)
        │   ├── Category Filters (7 tabs)
        │   │   ├── All Styles
        │   │   ├── Pizza
        │   │   ├── Breads
        │   │   ├── Enriched
        │   │   ├── Buns
        │   │   ├── Pastry
        │   │   └── Cookies
        │   │
        │   ├── Controls
        │   │   ├── Favorites Toggle (heart icon)
        │   │   ├── Filter Toggle (funnel icon)
        │   │   ├── Sort Dropdown (Name/Newest/Hydration)
        │   │   ├── Sort Order Toggle (asc/desc)
        │   │   └── Search Input
        │   │
        │   └── Tags Filter Panel (collapsible)
        │       └── Tag Buttons (dynamic from styles)
        │
        ├── Styles Grid (grouped by category)
        │   └── For each Display Group:
        │       ├── Section Header
        │       │   ├── Group Name
        │       │   ├── Count Badge
        │       │   └── Divider Line
        │       │
        │       └── Grid (cols-1 sm:cols-2 lg:cols-3 xl:cols-4)
        │           └── StyleCard (for each style)
        │               ├── Badges (Pro/AI/Custom/New)
        │               ├── Title
        │               ├── Category Badge
        │               ├── Country Badge
        │               ├── Description
        │               ├── Technical Stats (3 badges)
        │               │   ├── Hydration
        │               │   ├── Time
        │               │   └── Skill
        │               ├── Tags (max 3)
        │               └── Action Buttons
        │                   ├── "Use Style" (primary)
        │                   ├── Delete (custom only)
        │                   └── "Details" (secondary)
        │
        └── Modals
            ├── CreateStyleModal
            ├── AiStyleBuilderModal
            └── ToppingPlannerModal
```

### StyleDetailPage - Estrutura Visual

```
StyleDetailPage
└── Container (max-w-4xl)
    ├── Back Button
    │
    └── Card (rounded-2xl shadow-lg)
        ├── Print Header (hidden on screen)
        │   ├── Logo
        │   └── "Advanced Dough Science"
        │
        ├── Header Section
        │   ├── Gradient Background
        │   ├── Title + Favorite Button
        │   ├── Description
        │   ├── Badges (category, country, year)
        │   ├── Action Bar
        │   │   ├── PDF Export Button
        │   │   └── Share Button
        │   └── Pro Badge (if applicable)
        │
        └── Content Grid (lg:grid-cols-3)
            ├── Left Column (lg:col-span-2)
            │   ├── History & Context Section
            │   │   └── Historical text
            │   │
            │   ├── Base Formula Section
            │   │   └── FormulaTable (Pro lock if isPro)
            │   │       └── Ingredients with Baker's %
            │   │
            │   ├── Notes & Risks Section
            │   │   ├── Watch Out (amber box)
            │   │   └── Chef's Notes (blue box)
            │   │
            │   └── Learn Foundations Section
            │       └── Related Learn Articles (grid)
            │
            └── Right Column (Sidebar)
                ├── Technical Parameters (Pro lock if isPro)
                │   ├── Hydration
                │   ├── Fermentation
                │   └── Oven Temp
                │
                ├── "Load into Calculator" Button (Pro lock if isPro)
                │
                ├── Recommended Tools Section
                │   └── Affiliate product suggestion
                │
                └── Pro Upsell (if free style + free user)
```

---

## 🔄 Fluxo de Dados

### Contextos Utilizados

#### 1. **UserProvider**
```typescript
const {
  userStyles,           // Estilos customizados do usuário
  addUserStyle,         // Adicionar novo estilo
  deleteUserStyle,      // Deletar estilo customizado
  isFavorite,          // Verificar se é favorito
  toggleFavorite,      // Toggle favorito
  hasProAccess,        // Verificar acesso Pro
  openPaywall,         // Abrir paywall
  user                 // Dados do usuário
} = useUser();
```

#### 2. **Permissions System**
```typescript
import { canUseFeature, getCurrentPlan } from '@/permissions';

const userPlan = getCurrentPlan(user);
const canAccess = canUseFeature(userPlan, 'styles.full_access');
```

### Props da DoughStylesPage
```typescript
interface DoughStylesPageProps {
  doughConfig: DoughConfig;              // Config atual do calculator
  onLoadStyle: (style: DoughStyleDefinition) => void;  // Carregar no calculator
  onNavigateToDetail: (styleId: string) => void;       // Navegar para detalhes
}
```

### Props da StyleDetailPage
```typescript
interface StyleDetailPageProps {
  style: DoughStyleDefinition;           // Estilo a exibir
  onLoadAndNavigate: (style: DoughStyleDefinition) => void;  // Carregar e navegar
  onBack: () => void;                    // Voltar para biblioteca
}
```

### Estado Local (DoughStylesPage)

```typescript
// Busca e Filtros
const [searchTerm, setSearchTerm] = useState('');
const [selectedCategory, setSelectedCategory] = useState<StyleCategory | 'all'>('all');
const [selectedTag, setSelectedTag] = useState<string | null>(null);
const [showFavorites, setShowFavorites] = useState(false);
const [showFilters, setShowFilters] = useState(false);

// Ordenação
const [sortBy, setSortBy] = useState<'name' | 'newest' | 'hydration'>('name');
const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

// Modais
const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
const [isAiModalOpen, setIsAiModalOpen] = useState(false);
const [styleToEdit, setStyleToEdit] = useState<Partial<DoughStyleDefinition> | undefined>(undefined);
const [isPlannerOpen, setIsPlannerOpen] = useState(false);
```

### Dados Derivados (useMemo)

#### 1. **allStyles** - Combinação de estilos
```typescript
const allStyles = useMemo(() => 
  [...STYLES_DATA, ...userStyles], 
  [userStyles]
);
```

#### 2. **availableTags** - Tags únicas
```typescript
const availableTags = useMemo(() => {
  const tags = new Set<string>();
  allStyles.forEach(style => {
    style.tags?.forEach(t => tags.add(t));
  });
  return Array.from(tags).sort();
}, [allStyles]);
```

#### 3. **stylesByGroup** - Estilos filtrados e agrupados
```typescript
const stylesByGroup = useMemo(() => {
  // 1. Filtrar
  const filtered = allStyles.filter(style => {
    const matchesSearch = /* lógica de busca */;
    const matchesCategory = /* lógica de categoria */;
    const matchesTag = /* lógica de tag */;
    const matchesFavorite = /* lógica de favorito */;
    return matchesSearch && matchesCategory && matchesTag && matchesFavorite;
  });

  // 2. Ordenar
  filtered.sort((a, b) => {
    // Por name, newest ou hydration
  });

  // 3. Agrupar
  const grouped: Record<string, DoughStyleDefinition[]> = {};
  filtered.forEach(style => {
    const groupName = getDisplayGroup(style.category);
    if (!grouped[groupName]) grouped[groupName] = [];
    grouped[groupName].push(style);
  });

  return grouped;
}, [searchTerm, selectedCategory, selectedTag, allStyles, sortBy, sortOrder, showFavorites]);
```

---

## 🔗 Correlações e Dependências

### Dependências Diretas

#### Componentes UI
```typescript
import {
  BookOpenIcon, BeakerIcon, FireIcon, CubeIcon,
  ChevronRightIcon, StarIcon, CalculatorIcon, TrashIcon,
  FlourIcon, SparklesIcon, UserCircleIcon, GlobeAltIcon,
  TagIcon, HeartIcon, BarsArrowDownIcon, BarsArrowUpIcon,
  FunnelIcon, InfoIcon, ClockIcon, ShoppingBagIcon,
  ExternalLinkIcon
} from '@/components/ui/Icons';
```

#### Dados e Tipos
```typescript
import { STYLES_DATA } from '@/data/stylesData';
import { DoughStyleDefinition, DoughConfig, StyleCategory } from '@/types';
import { AFFILIATE_PRODUCTS } from '@/data/affiliateLinks';
import { allLearnArticles } from '@/data/learn';
```

#### Componentes Customizados
```typescript
import CreateStyleModal from '@/components/styles/CreateStyleModal';
import AiStyleBuilderModal from '@/components/styles/AiStyleBuilderModal';
import { ToppingPlannerModal } from '@/components/modals/ToppingPlannerModal';
import { ProFeatureLock } from '@/components/ui/ProFeatureLock';
import { LibraryPageLayout } from '../learn/LibraryPageLayout';
import PDFExportButton from '@/components/ui/PDFExportButton';
import ShareButton from '@/components/ui/ShareButton';
import { Logo } from '@/components/ui/Logo';
```

### Dependências Indiretas

#### Via UserProvider
- **Firebase Firestore**: Persistência de estilos customizados
- **Permissions System**: Controle de acesso Pro
- **Favorites System**: Gerenciamento de favoritos

#### Via stylesData.ts
- **2044 linhas** de dados estruturados
- **~50+ estilos canônicos** (oficial)
- Estilos de: Pizza, Pães, Enriched, Buns, Pastry, Cookies

---

## 🎨 UX/UI Design

### Princípios de Design

#### 1. **Hero Section - Premium**
```css
/* Gradient verde (matching Learn page) */
bg-gradient-to-br from-[#3A6B3A] to-[#558B55]

/* Efeitos de profundidade */
- Blur circles (lime-500/10, sky-500/10)
- Badge com border: "Style Library"
- Title: "The Global Encyclopedia of Dough"
- Feature pills com dots coloridos
```

#### 2. **Sistema de Cores por Categoria**

**CategoryBadge:**
```typescript
switch (category) {
  case 'pizza':
    colorClass = 'bg-orange-50 text-orange-700 border-orange-200';
    icon = <FireIcon />;
    break;
  case 'bread':
    colorClass = 'bg-amber-50 text-amber-800 border-amber-200';
    icon = <BeakerIcon />;
    break;
  case 'enriched_bread':
    colorClass = 'bg-yellow-50 text-yellow-700 border-yellow-200';
    icon = <StarIcon />;
    break;
  case 'burger_bun':
    colorClass = 'bg-orange-50 text-orange-800 border-orange-200';
    icon = <CubeIcon />;
    break;
  case 'pastry':
    colorClass = 'bg-pink-50 text-pink-700 border-pink-200';
    icon = <SparklesIcon />;
    break;
  case 'cookie':
    colorClass = 'bg-stone-100 text-stone-700 border-stone-200';
    icon = <FlourIcon />;
    break;
}
```

#### 3. **StyleCard - Design Premium**

**Badges de Status:**
- **Pro**: `bg-gradient-to-br from-lime-400 to-lime-600` + `animate-pulse`
- **AI Generated**: `bg-gradient-to-br from-indigo-400 to-indigo-600` + `SparklesIcon`
- **Custom**: `bg-gradient-to-br from-sky-400 to-sky-600` + `UserCircleIcon`
- **New** (< 30 dias): `bg-gradient-to-br from-blue-400 to-blue-600` + `SparklesIcon`

**Hover Effects:**
```css
hover:shadow-md
hover:-translate-y-1
hover:border-lime-500
group-hover:text-lime-600
```

**Technical Badges:**
```tsx
<TechnicalBadge label="Hydration" value="65-70%" />
<TechnicalBadge label="Time" value="24h" />
<TechnicalBadge label="Skill" value="Medium" />
```

**Action Buttons:**
- Primary: `bg-lime-500` - "Use Style"
- Delete: `bg-red-50 text-red-600` - Trash icon (custom only)
- Secondary: `bg-slate-100` - "Details"

#### 4. **Filtros e Busca**

**Category Filters:**
```css
/* Active */
bg-lime-500 text-white shadow-md scale-105

/* Inactive */
bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:scale-105
```

**Sticky Bar:**
```css
sticky top-20 z-20
bg-white/80 backdrop-blur-lg
```

**Sort Controls:**
```tsx
<select> Name / Newest / Hydration </select>
<button> Asc/Desc Toggle </button>
```

**Tags Filter (Collapsible):**
```css
/* Expanded */
max-h-96 opacity-100 mb-8

/* Collapsed */
max-h-0 opacity-0 mb-0
```

#### 5. **Responsividade**

**Grid Breakpoints:**
```css
grid-cols-1              /* Mobile */
sm:grid-cols-2           /* Tablet */
lg:grid-cols-3           /* Desktop */
xl:grid-cols-4           /* Large Desktop */
```

**Hero Section:**
```css
text-2xl md:text-3xl     /* Title */
text-sm md:text-base     /* Subtitle */
p-3 md:p-4               /* Padding */
```

---

## 📊 Sistema de Categorias

### Categorias Principais (StyleCategory)

```typescript
type StyleCategory = 
  | "pizza" 
  | "bread" 
  | "enriched_bread" 
  | "burger_bun" 
  | "pastry" 
  | "cookie" 
  | "flatbread" 
  | "other";
```

### Display Groups (Agrupamento Visual)

```typescript
const getDisplayGroup = (category: StyleCategory): string => {
  switch (category) {
    case 'pizza': return 'Pizzas';
    case 'bread': return 'Breads & Rustic Loaves';
    case 'enriched_bread': return 'Enriched Breads';
    case 'flatbread': return 'Flatbreads';
    case 'burger_bun': return 'Burger Buns';
    case 'pastry': return 'Pastry & Sweet Doughs';
    case 'cookie': return 'Cookies & Confectionery';
    default: return 'Other Styles';
  }
};
```

### Ordem de Exibição

```typescript
const GROUP_ORDER = [
  'Pizzas',
  'Breads & Rustic Loaves',
  'Enriched Breads',
  'Burger Buns',
  'Pastry & Sweet Doughs',
  'Cookies & Confectionery',
  'Other Styles'
];
```

### Category Filters (UI)

```typescript
const CATEGORY_FILTERS: { id: StyleCategory | 'all', label: string }[] = [
  { id: 'all', label: 'All Styles' },
  { id: 'pizza', label: 'Pizza' },
  { id: 'bread', label: 'Breads' },
  { id: 'enriched_bread', label: 'Enriched' },
  { id: 'burger_bun', label: 'Buns' },
  { id: 'pastry', label: 'Pastry' },
  { id: 'cookie', label: 'Cookies' },
];
```

---

## 🔍 Filtragem e Busca

### Sistema de Filtros

#### 1. **Busca por Texto** (searchTerm)
```typescript
const matchesSearch = 
  style.name.toLowerCase().includes(searchLower) ||
  style.description.toLowerCase().includes(searchLower) ||
  (style.tags && style.tags.some(t => t.toLowerCase().includes(searchLower)));
```

#### 2. **Filtro por Categoria** (selectedCategory)
```typescript
const matchesCategory = 
  selectedCategory === 'all' || style.category === selectedCategory;
```

#### 3. **Filtro por Tag** (selectedTag)
```typescript
const matchesTag = 
  selectedTag ? style.tags?.includes(selectedTag) : true;
```

#### 4. **Filtro de Favoritos** (showFavorites)
```typescript
const matchesFavorite = 
  showFavorites ? isFavorite(style.id) : true;
```

### Sistema de Ordenação

#### Sort By Options
```typescript
type SortBy = 'name' | 'newest' | 'hydration';
```

#### Sort Logic
```typescript
filtered.sort((a, b) => {
  let comparison = 0;
  
  switch (sortBy) {
    case 'name':
      comparison = a.name.localeCompare(b.name);
      break;
      
    case 'newest':
      const dateA = new Date(a.releaseDate || 0).getTime();
      const dateB = new Date(b.releaseDate || 0).getTime();
      comparison = dateA - dateB;
      break;
      
    case 'hydration':
      const hydA = a.technicalProfile 
        ? (a.technicalProfile.hydration[0] + a.technicalProfile.hydration[1]) / 2 
        : a.technical.hydration;
      const hydB = b.technicalProfile 
        ? (b.technicalProfile.hydration[0] + b.technicalProfile.hydration[1]) / 2 
        : b.technical.hydration;
      comparison = hydA - hydB;
      break;
  }
  
  return sortOrder === 'asc' ? comparison : -comparison;
});
```

### Contagem por Categoria

```typescript
const countByCategory = (cat: string) => {
  if (cat === 'all') return allStyles.length;
  return allStyles.filter(s => s.category === cat).length;
};
```

---

## 🔐 Permissões e Monetização

### Sistema de Proteção

#### Feature Key
```typescript
featureKey: "styles.full_access"
```

#### Verificação de Acesso
```typescript
const handleUseStyle = (e: React.MouseEvent, style: DoughStyleDefinition) => {
  e.stopPropagation();
  
  if (style.isPro && !canUseFeature(userPlan, 'styles.full_access')) {
    openPaywall('styles');
    return;
  }
  
  if (onLoadStyle) {
    onLoadStyle(style);
  }
};
```

### Funcionalidades por Tier

#### Free Tier ✅
- **Visualizar** todos os estilos (browse)
- **Ler** história e contexto
- **Usar** estilos free no calculator
- **Criar** estilos customizados manuais (limitado)

#### Pro Tier 🌟
- **Acessar** estilos Pro completos
- **Ver** fórmulas detalhadas (Baker's %)
- **Ver** parâmetros técnicos completos
- **Usar** AI Style Builder
- **Exportar** PDFs de estilos
- **Criar** estilos ilimitados

### ProFeatureLock Locations

#### DoughStylesPage
```tsx
// AI Style Builder
<ProFeatureLock featureKey="styles.full_access" customMessage="Unlock AI Style Builder with Lab Pro.">
  <button onClick={() => setIsAiModalOpen(true)}>
    Ask AI for a Style
  </button>
</ProFeatureLock>
```

#### StyleDetailPage
```tsx
// Formula Table
{style.isPro ? (
  <ProFeatureLock featureKey="styles.full_access" customMessage="Full style specs available in Pro.">
    <FormulaTable />
  </ProFeatureLock>
) : (
  <FormulaTable />
)}

// Technical Parameters
{style.isPro ? (
  <ProFeatureLock featureKey="styles.full_access" customMessage="Technical Parameters">
    <TechnicalParams />
  </ProFeatureLock>
) : (
  <TechnicalParams />
)}

// Load Button
{style.isPro ? (
  <ProFeatureLock featureKey="styles.full_access" customMessage={`Pro Style: ${style.name}`}>
    <button onClick={() => onLoadAndNavigate(style)}>
      Load into Calculator
    </button>
  </ProFeatureLock>
) : (
  <button onClick={() => onLoadAndNavigate(style)}>
    Load into Calculator
  </button>
)}
```

### Paywall Origins
```typescript
openPaywall('styles')  // Origem específica para tracking
```

---

## 📊 Tipos e Interfaces

### DoughStyleDefinition (Principal)

```typescript
interface DoughStyleDefinition {
  // Identificação
  id: string;
  name: string;                    // Nome do estilo
  family?: string;                 // Família (ex: "Neapolitan Pizza")
  category: StyleCategory;         // Categoria principal
  
  // Metadados Expandidos
  origin: StyleOrigin;
  history: string;
  culturalContext?: string;
  isCanonical: boolean;            // Oficial vs User-created
  source: StyleSource;             // "official" | "user_manual" | "user_ai"
  createdBy?: string;              // UID se user-generated
  createdAt?: string | Timestamp;
  
  // Campos Legados (compatibilidade)
  country: string;
  year?: string;
  releaseDate?: string;            // Para badge "NEW"
  description: string;
  isPro: boolean;                  // Requer Pro?
  recipeStyle?: RecipeStyle;
  
  // Técnico
  technical: {
    hydration: number;
    salt: number;
    oil: number;
    sugar: number;
    fermentation: string;
    fermentationTechnique: FermentationTechnique;
    bakingTempC: number;
  };
  
  // Perfil Técnico Expandido
  technicalProfile?: StyleTechnicalProfile;
  
  // Referências e Metadados
  references?: Reference[];
  allowedFermentationTechniques: FermentationTechnique[];
  defaultFermentationTechnique: FermentationTechnique;
  ingredients: IngredientConfig[];
  ingredientDetails?: IngredientConfig[];
  variations?: string[];
  risks?: string[];
  notes?: string[];
  tags?: string[];
}
```

### StyleTechnicalProfile

```typescript
interface StyleTechnicalProfile {
  hydration: [number, number];     // Range
  salt: [number, number];          // Range
  oil?: [number, number];          // Range
  sugar?: [number, number];        // Range
  prefermentDescription?: string;
  flourStrength?: string;          // ex: "W280-320"
  fermentation?: {
    bulk: string;
    proof: string;
    coldRetard?: string;
  };
  ovenRecommendations?: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
  recommendedUse: string;
}
```

### StyleOrigin

```typescript
interface StyleOrigin {
  country: string;
  region?: string;
  period?: string;
}
```

### StyleSource

```typescript
type StyleSource = "official" | "user_manual" | "user_ai";
```

### StyleCategory

```typescript
type StyleCategory = 
  | "pizza" 
  | "bread" 
  | "enriched_bread" 
  | "burger_bun" 
  | "pastry" 
  | "cookie" 
  | "flatbread" 
  | "other";
```

### Reference

```typescript
interface Reference {
  source: string;
  author?: string;
  year?: string;
  url?: string;
  notes?: string;
}
```

---

## 📚 Dados e Conteúdo

### STYLES_DATA (stylesData.ts)

#### Estatísticas
- **Tamanho**: 2044 linhas, 83.5 KB
- **Estilos**: ~50+ estilos canônicos
- **Formato**: Array de objetos `DoughStyleDefinition`

#### Categorias de Estilos

**Pizzas (10 estilos):**
1. Neapolitan AVPN Classic
2. Neapolitan Contemporary (Canotto)
3. Neapolitan Home-Oven Adapted
4. New York Slice Shop
5. New York Artisan
6. Roman Teglia (Al Taglio)
7. Roman Scrocchiarella
8. Detroit Style Classic
9. Sicilian / Grandma Pan
10. Brazilian Pizzeria Gas-Deck

**Breads (15+ estilos):**
- French: Baguette Tradition, Pain de Campagne, Pain Rustique
- Italian: Ciabatta, Pane Pugliese, Focaccia Genovese
- Sourdough: Tartine Country, Mixed Grain, Heirloom Levain
- Rye: 70% Rye Sour, 100% Vollkornbrot
- Wholegrain: 100% Whole Wheat
- Sandwich: Pain de Mie / Pullman

**Enriched Breads:**
- Brioche
- Challah
- Hokkaido Milk Bread
- Dinner Rolls

**Burger Buns:**
- Brioche Bun
- Potato Bun
- Soft Bun

**Pastry:**
- Cinnamon Roll
- Danish
- Croissant (se houver)

**Cookies:**
- Classic Chocolate Chip
- Brown Butter
- Shortbread

#### Estrutura de Dados (Exemplo)

```typescript
{
  id: "neapolitan_avpn_classic",
  category: "pizza",
  family: "Neapolitan Pizza",
  variantName: "Neapolitan AVPN Classic",
  origin: { 
    country: "Italy", 
    region: "Naples", 
    period: "18th–19th century (Codified 1984)" 
  },
  history: "The 'Verace Pizza Napoletana' is the protected ancestor...",
  culturalContext: "A UNESCO Intangible Cultural Heritage item...",
  technicalProfile: {
    hydrationRange: [58, 62.5],
    saltRange: [2.5, 3.0],
    fatRange: [0, 0],
    sugarRange: [0, 0],
    preferment: "Direct dough (impasto diretto) is the standard...",
    flourStrength: "Medium-High strength (W 280–320), P/L 0.50–0.60...",
    fermentation: {
      bulk: "2h bulk at room temp, then balling",
      proof: "6–24h total maturation at room temp (18–25°C)",
      coldRetard: "Traditionally not used; modern AVPN rules allow it"
    },
    oven: {
      type: "wood_fired",
      temperatureC: [430, 485],
      notes: "Dome temp ~485°C, Floor ~430°C. Cook time strictly 60–90 seconds."
    },
    recommendedUse: ["Authentic Neapolitan Margherita", "Marinara"]
  },
  references: [
    "AVPN International Regulations",
    "Modernist Pizza",
    "UNESCO Intangible Cultural Heritage"
  ],
  isCanonical: true,
  source: "official"
}
```

---

## 🔄 Fluxos de Interação

### 1. Explorar Estilos
```
User lands on /styles
  → Hero + Category filters visible
  → User clicks category (ex: "Pizza")
  → selectedCategory = 'pizza'
  → stylesByGroup recalculates
  → Only pizza styles shown
  → User scrolls through grid
```

### 2. Buscar Estilo
```
User types in search box
  → searchTerm updates
  → stylesByGroup filters by name/description/tags
  → Results update in real-time
  → User sees filtered grid
```

### 3. Filtrar por Tag
```
User clicks "Filter" icon
  → showFilters = true
  → Tags panel expands
  → User clicks tag (ex: "high-hydration")
  → selectedTag = "high-hydration"
  → stylesByGroup filters
  → Only styles with that tag shown
```

### 4. Ver Favoritos
```
User clicks Heart icon (favorites toggle)
  → showFavorites = true
  → stylesByGroup filters by isFavorite()
  → Only favorited styles shown
```

### 5. Ordenar Estilos
```
User selects "Hydration" in sort dropdown
  → sortBy = 'hydration'
  → stylesByGroup re-sorts
  → User clicks sort order toggle
  → sortOrder = 'desc'
  → Styles now sorted high to low hydration
```

### 6. Ver Detalhes de Estilo
```
User clicks "Details" button on StyleCard
  → onNavigateToDetail(style.id)
  → Router navigates to /styles/detail/:id
  → StyleDetailPage loads
  → Shows full history, formula, parameters
```

### 7. Usar Estilo no Calculator
```
User clicks "Use Style" button
  → handleUseStyle(e, style)
  → If isPro && !hasProAccess:
      → openPaywall('styles')
      → Paywall modal opens
  → Else:
      → onLoadStyle(style)
      → Calculator loads with style config
      → User navigates to calculator
```

### 8. Criar Estilo Manual
```
User clicks "Create Manually" button
  → setIsCreateModalOpen(true)
  → CreateStyleModal opens
  → User fills form
  → onSave(styleData)
  → addUserStyle(styleData)
  → Firestore saves
  → userStyles updates
  → allStyles recalculates
  → New style appears in grid
```

### 9. Criar Estilo via AI (Pro)
```
User clicks "Ask AI for a Style"
  → ProFeatureLock checks access
  → If !hasProAccess:
      → Shows lock overlay
      → User clicks "Upgrade"
      → openPaywall('styles')
  → If hasProAccess:
      → setIsAiModalOpen(true)
      → AiStyleBuilderModal opens
      → User describes desired style
      → AI generates DoughStyleDefinition
      → handleAiStyleGenerated(style)
      → setStyleToEdit({ ...style, source: 'user_ai' })
      → setIsCreateModalOpen(true)
      → User reviews/edits AI suggestion
      → Saves to Firestore
```

### 10. Deletar Estilo Customizado
```
User clicks Trash icon on custom style card
  → handleDeleteUserStyle(e, id)
  → confirm() dialog
  → If confirmed:
      → deleteUserStyle(id)
      → Firestore deletes
      → userStyles updates
      → allStyles recalculates
      → Style removed from grid
```

### 11. Favoritar Estilo
```
User clicks Heart icon on detail page
  → toggleFavorite({ id, type: 'style', title, metadata })
  → Firestore updates favorites collection
  → isFavorite(id) returns true
  → Heart icon fills with color
```

### 12. Exportar PDF
```
User clicks "Download PDF" on detail page
  → PDFExportButton triggers
  → html2canvas captures #style-detail-content
  → jsPDF generates PDF
  → Downloads as "style-name.pdf"
```

### 13. Compartilhar Estilo
```
User clicks "Share" button
  → ShareButton triggers
  → navigator.share() API (if available)
  → Or fallback to copy link
  → User shares on social media
```

---

## 🎯 Principais Funcionalidades

### Biblioteca de Estilos

1. **Exploração Visual**
   - Grid responsivo de cards
   - Badges de status (Pro, AI, Custom, New)
   - Preview de parâmetros técnicos
   - Imagens e ícones coloridos

2. **Filtragem Avançada**
   - 7 categorias principais
   - Busca por texto
   - Filtro por tags
   - Filtro de favoritos
   - Ordenação múltipla

3. **Detalhes Completos**
   - História e contexto cultural
   - Fórmula com Baker's %
   - Parâmetros técnicos
   - Notas e riscos
   - Artigos relacionados do Learn
   - Recomendações de equipamento

4. **Criação de Estilos**
   - Manual (formulário)
   - AI-powered (Pro)
   - Edição de estilos existentes
   - Deleção de customizados

5. **Integração com Calculator**
   - Load style com um clique
   - Configuração automática
   - Navegação fluida

6. **Monetização**
   - Estilos Pro bloqueados
   - AI Builder exclusivo Pro
   - Upsell contextual
   - Paywall tracking

---

## 🔧 Componentes Reutilizáveis

### CategoryBadge
```tsx
<CategoryBadge category={style.category} />
```
- Badge colorido por categoria
- Ícone específico
- Uppercase tracking

### TechnicalBadge
```tsx
<TechnicalBadge label="Hydration" value="65-70%" />
```
- Label + Value
- Fundo slate-50
- Texto mono para valores

### StyleCard
```tsx
<StyleCard
  style={style}
  onClick={() => onNavigateToDetail(style.id)}
  onUse={(e) => handleUseStyle(e, style)}
  onDelete={!style.isCanonical ? (e) => handleDeleteUserStyle(e, style.id) : undefined}
/>
```
- Card completo com badges
- Hover effects
- Action buttons
- Conditional delete

### FormulaTable (StyleDetailPage)
```tsx
<FormulaTable />
```
- Tabela de ingredientes
- Baker's percentages
- Estilo clean

### TechnicalParams (StyleDetailPage)
```tsx
<TechnicalParams />
```
- Hydration, Fermentation, Oven Temp
- Ícones contextuais
- Formatação limpa

---

## 🎨 Design System

### Cores Principais
- **Primary**: `lime-500` (ações principais)
- **Pro**: `lime-400 to lime-600` (gradient)
- **AI**: `indigo-400 to indigo-600` (gradient)
- **Custom**: `sky-400 to sky-600` (gradient)
- **New**: `blue-400 to blue-600` (gradient)

### Categorias
- **Pizza**: `orange-50/700`
- **Bread**: `amber-50/800`
- **Enriched**: `yellow-50/700`
- **Buns**: `orange-50/800`
- **Pastry**: `pink-50/700`
- **Cookie**: `stone-100/700`

### Shadows
- `shadow-sm`: Cards padrão
- `shadow-md`: Hover states
- `shadow-lg`: CTAs e badges Pro
- `shadow-lime-200`: CTA principal

### Borders
- `border-slate-100/200`: Default
- `border-{color}-200`: Category badges
- `rounded-xl`: Cards e botões
- `rounded-2xl`: Containers grandes
- `rounded-full`: Badges e pills

### Typography
```css
/* Headers */
text-3xl font-extrabold     /* Page title */
text-2xl font-bold          /* Section headers */
text-xl font-extrabold      /* Card titles */
text-sm font-bold           /* Labels */
text-xs uppercase           /* Badges */

/* Body */
text-base leading-relaxed   /* Descriptions */
text-sm text-slate-600      /* Secondary text */
text-xs text-slate-500      /* Metadata */
```

---

## 📱 Responsividade

### Breakpoints
```css
/* Mobile First */
default                    /* Mobile (< 640px) */
sm: 640px                  /* Tablet */
md: 768px                  /* Desktop small */
lg: 1024px                 /* Desktop */
xl: 1280px                 /* Desktop large */
```

### Grid Adaptativo
```css
/* Styles Grid */
grid-cols-1              /* Mobile: 1 coluna */
sm:grid-cols-2           /* Tablet: 2 colunas */
lg:grid-cols-3           /* Desktop: 3 colunas */
xl:grid-cols-4           /* Large: 4 colunas */

/* Detail Page */
grid-cols-1              /* Mobile: stack */
lg:grid-cols-3           /* Desktop: 2/3 + 1/3 */
```

### Hero Section
```css
/* Padding */
p-3 md:p-4               /* Responsive padding */

/* Typography */
text-2xl md:text-3xl     /* Title */
text-sm md:text-base     /* Subtitle */
```

### Filter Bar
```css
/* Layout */
flex-col md:flex-row     /* Stack on mobile, row on desktop */

/* Search */
w-full md:w-64           /* Full width mobile, fixed desktop */
```

---

## 🔍 SEO e Acessibilidade

### Meta Tags (via LibraryPageLayout)
- Title: "Style Library - DoughLabPro"
- Description: "Explore technical formulas for Pizzas, Breads, Pastry..."

### Semantic HTML
```html
<section> para grupos de estilos
<h1> para título principal
<h2> para section headers
<h3> para card titles
<button> para ações
<a> para links externos
```

### ARIA Labels
```tsx
title="Show Favorites Only"
title="Filter by Tags"
title={favorited ? "Remove from favorites" : "Add to favorites"}
```

### Keyboard Navigation
- Tab order lógico
- Focus states visíveis
- Enter/Space para botões

---

## 📊 Performance

### Otimizações

#### 1. **useMemo** para cálculos pesados
```typescript
const allStyles = useMemo(...)
const availableTags = useMemo(...)
const stylesByGroup = useMemo(...)
```

#### 2. **Lazy Loading** (via AppRouter)
```typescript
const DoughStylesPage = React.lazy(() => import('@/pages/styles/DoughStylesPage'));
const StyleDetailPage = React.lazy(() => import('@/pages/styles/StyleDetailPage'));
```

#### 3. **Conditional Rendering**
```tsx
{Object.keys(stylesByGroup).length === 0 ? (
  <EmptyState />
) : (
  <StylesGrid />
)}
```

#### 4. **Event Delegation**
```tsx
onClick={(e) => {
  e.stopPropagation();
  // Handle action
}}
```

---

## 🚀 Próximas Melhorias Potenciais

1. **Filtros Avançados**
   - Range slider para hydration
   - Multi-select de tags
   - Filtro por difficulty
   - Filtro por fermentation technique

2. **Comparação de Estilos**
   - Side-by-side comparison
   - Diff de parâmetros
   - Recomendações baseadas em preferências

3. **Personalização**
   - Salvar filtros favoritos
   - Criar coleções de estilos
   - Notas pessoais em estilos

4. **Social Features**
   - Compartilhar estilos customizados
   - Votar em estilos da comunidade
   - Comentários e reviews

5. **AI Enhancements**
   - Sugestões baseadas em histórico
   - "Styles similar to this"
   - Auto-tagging de estilos customizados

---

## 📝 Notas Técnicas

### Estado Global vs Local
- **Global (UserProvider)**: userStyles, favorites, hasProAccess
- **Local (useState)**: filtros, modais, UI state
- **Derivado (useMemo)**: allStyles, availableTags, stylesByGroup

### Lazy Loading
Páginas lazy-loaded via `React.lazy()`:
```typescript
const DoughStylesPage = React.lazy(() => import('@/pages/styles/DoughStylesPage'));
```

### Error Boundaries
Todas as rotas envolvidas em `ErrorBoundary` no AppRouter.

### Suspense Fallback
```typescript
<Suspense fallback={<LoadingSpinner />}>
  {renderPage()}
</Suspense>
```

---

## 🔗 Integração com Outras Páginas

### Calculator
```typescript
onLoadStyle(style) → Calculator recebe DoughStyleDefinition
→ Configura todos os parâmetros
→ Navega para /calculator
```

### Learn
```typescript
// StyleDetailPage mostra artigos relacionados
allLearnArticles.filter(article =>
  article.tags?.some(t => style.name.toLowerCase().includes(t.toLowerCase()))
)
```

### MyLab
```typescript
// Estilos customizados salvos em UserProvider
// Acessíveis via userStyles
// Sincronizados com Firestore
```

### Community (Futuro)
```typescript
// Estilos compartilhados
// Votos e reviews
// Trending styles
```

---

## 📚 Referências de Código

### Imports Principais
```typescript
import React, { useState, useMemo } from 'react';
import { STYLES_DATA } from '@/data/stylesData';
import { DoughStyleDefinition, DoughConfig, StyleCategory } from '@/types';
import { useUser } from '@/contexts/UserProvider';
import CreateStyleModal from '@/components/styles/CreateStyleModal';
import AiStyleBuilderModal from '@/components/styles/AiStyleBuilderModal';
import { ProFeatureLock } from '@/components/ui/ProFeatureLock';
import { LibraryPageLayout } from '../learn/LibraryPageLayout';
```

### Exports
```typescript
export default DoughStylesPage;
export const StyleDetailPage;
```

---

## 🐛 Debugging e Troubleshooting

### Common Issues

1. **Estilos não aparecem**
   - Verificar STYLES_DATA carregado
   - Checar filtros ativos
   - Validar stylesByGroup

2. **Filtros não funcionam**
   - Verificar estado dos filtros
   - Checar lógica de matching
   - Validar useMemo dependencies

3. **Pro lock não funciona**
   - Verificar canUseFeature()
   - Checar user.plan
   - Validar featureKey

4. **AI Builder não abre**
   - Verificar ProFeatureLock
   - Checar hasProAccess
   - Validar modal state

5. **Load style falha**
   - Verificar onLoadStyle prop
   - Checar DoughConfig mapping
   - Validar navigation

---

## 📊 Métricas de Uso (Hipotéticas)

### Páginas Mais Acessadas
1. Styles Library (100%)
2. Pizza Styles (75%)
3. Neapolitan Detail (60%)
4. Bread Styles (50%)
5. AI Style Builder (Pro) (30%)

### Conversão Pro
- Style detail pages com Pro lock
- AI Builder exclusivo
- Paywall origin: 'styles'

### Estilos Mais Populares
1. Neapolitan AVPN Classic
2. New York Slice Shop
3. Tartine Country Loaf
4. Ciabatta High Hydration
5. Focaccia Genovese

---

**Última Atualização**: 30 de Novembro de 2024
**Versão**: 1.0
**Autor**: Análise Técnica - Antigravity AI
