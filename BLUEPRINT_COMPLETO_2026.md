# 📘 BLUEPRINT COMPLETO - DoughLabPro 2026

> **Documento Técnico Definitivo**  
> Data: Janeiro 2026  
> Versão: 1.0.0  
> Projeto: DoughLabPro (doughlabpro-fire)

---

## 📋 ÍNDICE

1. [Visão Geral](#visao-geral)
2. [Arquitetura Técnica](#arquitetura-tecnica)
3. [Stack Tecnológica](#stack-tecnologica)
4. [Estrutura do Projeto](#estrutura-do-projeto)
5. [Firebase & Cloud Services](#firebase-cloud-services)
6. [Recursos e Funcionalidades](#recursos-funcionalidades)
7. [Autenticação e Permissões](#autenticacao-permissoes)
8. [Monetização (Stripe)](#monetizacao-stripe)
9. [Internacionalização (i18n)](#internacionalizacao)
10. [Custos e Gestão de Recursos](#custos-gestao)
11. [Deploy e CI/CD](#deploy-cicd)
12. [Roadmap e Evolução](#roadmap)
13. [Segurança](#seguranca)
14. [Performance](#performance)
15. [Documentação de Suporte](#documentacao-suporte)

---

## 🎯 VISÃO GERAL {#visao-geral}

### Propósito do Aplicativo

**DoughLabPro** é uma plataforma profissional de cálculo e análise de massas de panificação, focada em:
- Cálculo preciso de fórmulas de pães e pizzas
- Análise científica de fermentação e hidratação
- Gestão de receitas, lotes e produção
- Comunidade de padeiros profissionais e amadores
- Educação através de conteúdo científico

### Proposta de Valor

1. **Para Padeiros Amadores**: Calculadora inteligente que ensina ciência da panificação
2. **Para Profissionais**: Gestão de produção, custos e planejamento
3. **Para Pizzaiolos**: Cálculo específico para diferentes estilos de pizza
4. **Para Educadores**: Conteúdo científico detalhado sobre fermentação

### Modelo de Negócio

- **Freemium**: Acesso básico gratuito
- **Pro (€9.99/mês)**: Recursos avançados de cálculo
- **Master (€19.99/mês)**: IA, produção e comunidade
- **Afiliação**: Produtos de panificação e farinhas

---

## 🏗️ ARQUITETURA TÉCNICA {#arquitetura-tecnica}

### Diagrama de Arquitetura

```
┌─────────────────────────────────────────────────────────────┐
│                    CLIENT LAYER (React)                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │Calculator│  │Community │  │MyLab     │  │  Learn   │   │
│  │  Pages   │  │  Pages   │  │  Pages   │  │  Pages   │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
│         ▲              ▲              ▲              ▲      │
│         └──────────────┴──────────────┴──────────────┘      │
│                            │                                │
│                    ┌───────┴────────┐                       │
│                    │   CONTEXTS     │                       │
│                    │  (State Mgmt)  │                       │
│                    └───────┬────────┘                       │
└────────────────────────────┼────────────────────────────────┘
                             │
┌────────────────────────────┼────────────────────────────────┐
│                    SERVICES LAYER                           │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │ Firebase │  │  Stripe  │  │  Gemini  │  │Analytics │   │
│  │ Services │  │ Services │  │   AI     │  │          │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└────────────────────────────┼────────────────────────────────┘
                             │
┌────────────────────────────┼────────────────────────────────┐
│                    BACKEND LAYER                            │
│  ┌──────────────────────────────────────────────────────┐  │
│  │           Firebase Cloud Functions (Node.js)         │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐          │  │
│  │  │Community │  │  Stripe  │  │   Rate   │          │  │
│  │  │ Triggers │  │ Webhooks │  │ Limiting │          │  │
│  │  └──────────┘  └──────────┘  └──────────┘          │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────────────────┼────────────────────────────────┘
                             │
┌────────────────────────────┼────────────────────────────────┐
│                    DATA LAYER                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │  Firestore   │  │   Storage    │  │    Stripe    │     │
│  │  (NoSQL DB)  │  │  (Files)     │  │  (Payments)  │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
└─────────────────────────────────────────────────────────────┘
```

### Fluxo de Dados Principal

1. **Usuário** → React App (Vite)
2. **React App** → Context Providers (State Management)
3. **Contexts** → Firebase Services (Auth, Firestore, Storage)
4. **Firebase** → Cloud Functions (Business Logic)
5. **Cloud Functions** → External APIs (Stripe, Gemini)

---

## 💻 STACK TECNOLÓGICA {#stack-tecnologica}

### Frontend

```json
{
  "framework": "React 19.2.0",
  "language": "TypeScript 5.3.3",
  "buildTool": "Vite 5.2.0",
  "styling": "Tailwind CSS 3.4.17",
  "routing": "React Router DOM 6.22.3",
  "animations": "Framer Motion 12.23.26",
  "i18n": "i18next 25.7.2 + react-i18next 16.4.1",
  "icons": "Lucide React 0.555.0 + Heroicons 2.2.0",
  "ui": "Headless UI 2.2.9"
}
```

### Backend (Firebase)

```json
{
  "platform": "Firebase (Google Cloud)",
  "projectId": "doughlabpro-fire",
  "services": {
    "auth": "Firebase Authentication",
    "database": "Cloud Firestore (nam5)",
    "storage": "Cloud Storage",
    "functions": "Cloud Functions (Node.js)",
    "hosting": "Firebase Hosting"
  }
}
```

### Serviços Externos

```json
{
  "payments": "Stripe (€ 9.99 Pro, € 19.99 Master)",
  "ai": "Google Gemini AI (@google/genai 1.29.0)",
  "analytics": "Firebase Analytics",
  "cdn": "Firebase Hosting CDN"
}
```

### Dependências Principais

```json
{
  "production": {
    "@firebase/app": "^0.14.6",
    "@firebase/auth": "^1.11.1",
    "@google/genai": "^1.29.0",
    "@stripe/stripe-js": "^8.5.3",
    "decimal.js": "^10.6.0",
    "firebase": "^12.6.0",
    "framer-motion": "^12.23.26",
    "html2canvas": "^1.4.1",
    "i18next": "^25.7.2",
    "jspdf": "^3.0.4",
    "react": "^19.2.0",
    "react-router-dom": "^6.22.3"
  },
  "development": {
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.22",
    "firebase-tools": "^13.5.0",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.3.3",
    "vitest": "^4.0.16"
  }
}
```

---

## 📁 ESTRUTURA DO PROJETO {#estrutura-do-projeto}

### Árvore de Diretórios Principal

```
doughlabpro/
├── .agent/                    # Workflows e automações
│   └── workflows/
│       ├── cost-management.md
│       ├── deploy.md
│       └── monetization-integration.md
├── .firebase/                 # Cache do Firebase
├── functions/                 # Cloud Functions (Backend)
│   ├── src/
│   │   ├── community/        # Triggers de comunidade
│   │   ├── stripe/           # Webhooks Stripe
│   │   └── utils/            # Utilidades
│   ├── package.json
│   └── tsconfig.json
├── public/                    # Assets estáticos
│   ├── locales/              # Traduções i18n
│   │   ├── en/
│   │   ├── es/
│   │   ├── pt/
│   │   ├── it/
│   │   └── fr/
│   ├── images/               # Imagens públicas
│   └── fonts/                # Fontes customizadas
├── scripts/                   # Scripts de automação
│   ├── audit-cloud-efficiency.cjs
│   ├── generate-style.js
│   └── validate-styles.ts
├── src/                       # Código fonte principal
│   ├── ai/                   # Integrações de IA
│   ├── components/           # Componentes React
│   ├── contexts/             # Context Providers
│   ├── data/                 # Dados estáticos (farinhas, estilos)
│   ├── features/             # Features modulares
│   ├── firebase/             # Configuração Firebase
│   ├── hooks/                # Custom Hooks
│   ├── logic/                # Lógica de negócio
│   ├── pages/                # Páginas/Rotas
│   ├── services/             # Serviços externos
│   ├── types/                # TypeScript types
│   ├── utils/                # Utilitários
│   ├── App.tsx               # Componente raiz
│   ├── AppRouter.tsx         # Configuração de rotas
│   ├── index.tsx             # Entry point
│   └── index.css             # Estilos globais
├── .env                       # Variáveis de ambiente
├── .gitignore
├── firebase.json              # Config Firebase
├── firestore.rules            # Regras de segurança Firestore
├── firestore.indexes.json     # Índices Firestore
├── storage.rules              # Regras de segurança Storage
├── package.json               # Dependências NPM
├── tailwind.config.js         # Config Tailwind
├── tsconfig.json              # Config TypeScript
├── vite.config.ts             # Config Vite
└── README.md
```

### Detalhamento de Pastas Críticas

#### `/src/components/` (127 arquivos)
- **AdminTools.tsx**: Ferramentas administrativas
- **AuthModal.tsx**: Modal de autenticação
- **CalculatorForm.tsx**: Formulário principal de cálculo
- **PaywallModal.tsx**: Modal de upgrade Pro/Master
- **PlansPage.tsx**: Página de planos e preços
- **ResultsDisplay.tsx**: Exibição de resultados
- **ToppingsPage.tsx**: Gestão de toppings

#### `/src/contexts/` (18 providers)
- **AuthContext.tsx**: Autenticação global
- **CalculatorContext.tsx**: Estado da calculadora
- **StylesProvider.tsx**: Gerenciamento de estilos de massa
- **UserProvider.tsx**: Dados do usuário
- **BatchesProvider.tsx**: Gestão de lotes
- **DoughsProvider.tsx**: Receitas de massa

#### `/src/pages/` (107 páginas)
- **CalculatorPage.tsx**: Calculadora principal
- **MyLabPage.tsx**: Laboratório pessoal
- **DoughbotPage.tsx**: Assistente IA
- **ProductionDashboard.tsx**: Dashboard de produção
- **LandingPage.tsx**: Landing marketing

#### `/src/data/` (172 arquivos)
Contém todos os dados estáticos:
- Estilos de pães (Ciabatta, Focaccia, Baguette, etc.)
- Estilos de pizzas (Napoletana, Romana, New York, etc.)
- Farinhas (W, proteína, absorção)
- Toppings e ingredientes
- Conteúdo educacional

---

## 🔥 FIREBASE & CLOUD SERVICES {#firebase-cloud-services}

### Configuração Firebase

**Projeto**: `doughlabpro-fire`  
**Região**: `nam5` (North America)  
**Plano**: Blaze (Pay-as-you-go)

#### Variáveis de Ambiente (.env)

```env
VITE_FIREBASE_API_KEY=AIzaSyAANrMJdbOR6NQnkdKCamWlDmGFq9igCI4
VITE_FIREBASE_AUTH_DOMAIN=doughlabpro-fire.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=doughlabpro-fire
VITE_FIREBASE_STORAGE_BUCKET=doughlabpro-fire.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=378525744520
VITE_FIREBASE_APP_ID=1:378525744520:web:274ba29ab463e9c0004e3d
```

### Cloud Firestore

#### Estrutura de Dados

```
firestore/
├── users/
│   └── {uid}/
│       ├── profile (doc)
│       ├── doughs/ (subcollection)
│       ├── batches/ (subcollection)
│       ├── levains/ (subcollection)
│       ├── recipes/ (subcollection)
│       ├── goals/ (subcollection)
│       ├── insights/ (subcollection)
│       └── timeline/ (subcollection)
├── community_posts/
│   └── {postId}/ (doc)
│       ├── uid, content, likes, comments
│       └── createdAt, updatedAt
├── community_comments/
│   └── {commentId}/ (doc)
├── community_likes/
│   └── {likeId}/ (doc)
├── community_clones/
│   └── {cloneId}/ (doc)
├── community_follows/
│   └── {followId}/ (doc)
├── organizations/
│   └── {orgId}/ (doc)
└── rate_limits/
    └── {limitId}/ (doc - apenas Cloud Functions)
```

#### Regras de Segurança (firestore.rules)

**Principais Políticas**:
1. **Isolamento por Usuário**: Cada usuário só acessa seus próprios dados
2. **Community Pública**: Posts visíveis para todos, edição apenas do autor
3. **Rate Limiting**: Apenas Cloud Functions podem escrever
4. **Organização/Tenant**: Suporte futuro para multi-tenancy

```javascript
// Exemplo de regra crítica
match /users/{userId}/{document=**} {
  allow read, write: if isSignedIn() && isOwner(userId);
}

match /community_posts/{postId} {
  allow read: if true;
  allow create: if isSignedIn() && request.resource.data.uid == request.auth.uid;
  allow update: if isSignedIn() && (isDataOwner() || 
    request.resource.data.diff(resource.data).affectedKeys()
      .hasOnly(['likes', 'commentCount', 'cloneCount']));
}
```

#### Índices Compostos (firestore.indexes.json)

```json
{
  "indexes": [
    {
      "collectionGroup": "community_posts",
      "queryScope": "COLLECTION",
      "fields": [
        {"fieldPath": "createdAt", "order": "DESCENDING"},
        {"fieldPath": "uid", "order": "ASCENDING"}
      ]
    },
    {
      "collectionGroup": "batches",
      "fields": [
        {"fieldPath": "uid", "order": "ASCENDING"},
        {"fieldPath": "createdAt", "order": "DESCENDING"}
      ]
    }
  ]
}
```

### Cloud Storage

#### Estrutura de Buckets

```
storage/
├── users/{uid}/
│   └── avatar (ou avatar.jpg)
├── styles/{uid}/{styleId}/
│   └── hero_TIMESTAMP.jpg
├── community_uploads/{uid}/
│   └── TIMESTAMP_filename.jpg
└── user_uploads/{uid}/{batchId}/
    └── photos/
```

#### Regras de Segurança (storage.rules)

```javascript
// Avatares: leitura pública, escrita apenas pelo dono
match /users/{userId}/{fileName} {
  allow read: if true;
  allow write: if isOwner(userId) && 
    (fileName == 'avatar' || fileName.matches('avatar\\..+'));
}

// Uploads de comunidade: apenas usuário autenticado
match /community_uploads/{userId}/{allPaths=**} {
  allow read: if true;
  allow write: if isOwner(userId);
}
```

### Cloud Functions

#### Funções Implementadas

**functions/src/community/**:
1. `onPostCreated`: Trigger ao criar post (notificações)
2. `onCommentAdded`: Incrementa contador de comentários
3. `onLikeToggle`: Gerencia likes em posts

**functions/src/stripe/**:
1. `stripeWebhook`: Processa eventos do Stripe
2. `createCheckoutSession`: Cria sessão de pagamento
3. `createPortalSession`: Acesso ao portal do cliente

**functions/src/utils/**:
- Rate limiting (anti-spam)
- Validação de dados
- Notificações

#### Exemplo de Função

```typescript
// functions/src/community/onPostCreated.ts
export const onPostCreated = functions.firestore
  .document('community_posts/{postId}')
  .onCreate(async (snap, context) => {
    const post = snap.data();
    // Enviar notificação aos seguidores
    // Atualizar contadores
    // Moderar conteúdo
  });
```

### Firebase Hosting

**URL de Produção**: `https://doughlabpro-fire.web.app`

**Configuração** (firebase.json):
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {"source": "**", "destination": "/index.html"}
    ]
  }
}
```

---

## ⚙️ RECURSOS E FUNCIONALIDADES {#recursos-funcionalidades}

### 1. Calculadora de Massas

**Localização**: `src/pages/CalculatorPage.tsx`

#### Funcionalidades Core:
- **Cálculo de hidratação** (45% - 100%+)
- **Balling (divisão de massa)**
- **Prefermentos** (Biga, Poolish, Pâte Fermentée)
- **Levain/Starter** (gestão de fermentação natural)
- **Conversão de unidades** (g, kg, oz, lb)
- **Cálculo de custo** (ingredientes individuais)

#### Fórmulas Matemáticas:

```typescript
// Exemplo: Cálculo de Hidratação
const hydration = (water / flour) * 100;

// Exemplo: Peso de Bola
const ballWeight = totalDough / numberOfBalls;

// Exemplo: Fermentação (Baker's %)
const flourPercent = 100;
const waterPercent = (water / flour) * 100;
const saltPercent = (salt / flour) * 100;
const yeastPercent = (yeast / flour) * 100;
```

#### Dados de Entrada:
- Número de bolas/pães
- Peso final desejado
- Tipo de farinha (W 180-400)
- Hidratação (%)
- Sal (%)
- Fermento/Levain (%)
- Temperatura ambiente
- Tempo de fermentação

### 2. Estilos Pré-Configurados

**Localização**: `src/data/`

#### Estilos de Pão (40+ estilos):
- **Italianos**: Ciabatta, Focaccia, Grissini, Pane Toscano
- **Franceses**: Baguette, Pain de Campagne, Brioche
- **Europeus**: Pumpernickel, Pretzel, Knäckebröd
- **Americanos**: Sandwich Bread, Bagel, Hot Dog Bun
- **Artesanais**: Sourdough, Multigrain, Rye

#### Estilos de Pizza (20+ estilos):
- **Italianas**: Napoletana, Romana, Teglia
- **Americanas**: New York, Detroit, Chicago Deep Dish
- **Gourmet**: Focaccia Pizza, Pala Romana
- **Internacionais**: Sfincione, Pizza al Taglio

#### Estrutura de Dados de Estilo:

```typescript
interface BreadStyle {
  id: string;
  name_en: string;
  name_pt: string;
  name_es: string;
  name_it: string;
  name_fr: string;
  category: string;
  hydration_range: { min: number; max: number };
  salt_range: { min: number; max: number };
  yeast_percentage: number;
  fermentation_time_hours: number;
  technique: string;
  flour_type: string;
  hero_image?: string;
  description_en: string;
  description_pt: string;
  // ... mais campos
}
```

### 3. MyLab (Laboratório Pessoal)

**Localização**: `src/pages/MyLabPage.tsx`

#### Funcionalidades:
1. **Minhas Receitas**: Salvar e editar fórmulas personalizadas
2. **Histórico de Lotes**: Rastreamento de produção
3. **Levains Salvos**: Gestão de fermentos naturais
4. **Farinhas Favoritas**: Biblioteca de farinhas
5. **Metas**: Objetivos de aprendizado
6. **Insights**: Análises automáticas de performance

#### Dados Salvos por Usuário:

```typescript
interface UserDough {
  uid: string;
  styleId: string;
  customName: string;
  hydration: number;
  flourMix: FlourMix[];
  salt: number;
  yeast: number;
  levain?: LevainConfig;
  notes: string;
  createdAt: Timestamp;
  lastModified: Timestamp;
}

interface Batch {
  batchId: string;
  doughId: string;
  productionDate: Timestamp;
  quantityProduced: number;
  photos: string[];
  rating: number; // 1-5
  notes: string;
  costPerUnit: number;
}
```

### 4. Comunidade

**Localização**: `src/community/`

#### Features Sociais:
- **Publicar Receitas**: Compartilhar fórmulas com fotos
- **Comentários**: Discussões em posts
- **Likes**: Curtir posts
- **Seguir Usuários**: Feed personalizado
- **Clonar Receitas**: Copiar receita de outro usuário
- **Perfis Públicos**: Visualizar histórico de outros

#### Estrutura de Post:

```typescript
interface CommunityPost {
  postId: string;
  uid: string;
  authorName: string;
  authorAvatar?: string;
  content: string;
  doughData?: DoughFormula; // Receita anexada
  images: string[];
  likes: number;
  commentCount: number;
  cloneCount: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  tags: string[];
}
```

### 5. DoughBot (Assistente IA)

**Localização**: `src/pages/DoughbotPage.tsx`  
**API**: Google Gemini AI

#### Capacidades:
- **Consultoria**: Responder perguntas sobre panificação
- **Diagnóstico**: Analisar problemas (massa dura, fermentação falha)
- **Sugestões**: Recomendar ajustes em fórmulas
- **Educação**: Explicar ciência da fermentação
- **Análise de Fotos**: Avaliar qualidade de miolo e crosta

#### Prompts Pré-Configurados:
1. "Por que minha massa não cresceu?"
2. "Como melhorar a crocância da crosta?"
3. "Qual farinha usar para ciabatta?"
4. "Como converter receita de pão para pizza?"
5. "Explicar autólise"

### 6. Learn (Educação)

**Localização**: `src/learn-constants.ts` (39.816 bytes!)

#### Categorias de Conteúdo:
1. **Ciência dos Ingredientes**
   - Farinha (glúten, W, proteína)
   - Água (hidratação, minerais)
   - Sal (fermentação, sabor)
   - Fermento (biológico vs. natural)

2. **Técnicas**
   - Autólise
   - Stretch & Fold
   - Balling
   - Shaping
   - Scoring

3. **Fermentação**
   - Fermentação em massa (bulk)
   - Levain (starter)
   - Controle de temperatura
   - Tempos de fermentação

4. **Estilos Regionais**
   - Pães Italianos
   - Pães Franceses
   - Pizzas do Mundo
   - Pães Americanos

#### Estrutura de Conteúdo:

```typescript
interface LearnArticle {
  id: string;
  category: string;
  title_en: string;
  title_pt: string;
  title_es: string;
  content_en: string; // Markdown
  content_pt: string;
  content_es: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  readTime: number; // minutos
  tags: string[];
  relatedArticles: string[];
}
```

### 7. Produção e Batch

**Localização**: `src/pages/ProductionDashboard.tsx`

#### Features Pro/Master:
- **Planejamento de Produção**: Calendário de lotes
- **Gestão de Estoque**: Ingredientes e farinhas
- **Cálculo de Custos**: Margem e precificação
- **Relatórios**: PDF e exportação
- **Fotos de Progresso**: Documentar cada etapa

### 8. Hydration Converter

**Localização**: `src/pages/HydrationConverterPage.tsx`

Converte receitas entre diferentes níveis de hidratação:
- Input: Receita original (ex: 65% hidratação)
- Output: Receita ajustada (ex: 75% hidratação)
- Mantém proporções de sal e fermento

### 9. Oven Analysis (Análise de Forno)

**Localização**: `src/pages/OvenAnalysisPage.tsx`

Calcula:
- Temperatura interna do pão
- Tempo de cozimento ideal
- Vapor necessário
- Ajustes para diferentes fornos (doméstico, pizza oven, deck oven)

---

## 🔐 AUTENTICAÇÃO E PERMISSÕES {#autenticacao-permissoes}

### Firebase Authentication

#### Métodos Suportados:
1. **Email/Password**: Cadastro tradicional
2. **Google OAuth**: Login social
3. **Apple Sign-In**: iOS users
4. **Anônimo**: Trial sem cadastro

#### Fluxo de Autenticação:

```typescript
// src/contexts/AuthContext.tsx
const signUp = async (email: string, password: string) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth, email, password
  );
  await initializeUserProfile(userCredential.user.uid);
};

const signIn = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const signOut = async () => {
  return firebaseSignOut(auth);
};
```

### Sistema de Permissões

**Localização**: `src/permissions.ts`

#### Níveis de Acesso:

```typescript
enum UserTier {
  FREE = 'free',
  PRO = 'pro',
  MASTER = 'master',
  ADMIN = 'admin'
}

interface Permissions {
  // Calculadora
  canUseAdvancedCalculator: boolean;
  canSaveUnlimitedDoughs: boolean;
  maxDoughsSaved: number;
  
  // Comunidade
  canPostToCommunity: boolean;
  canUploadPhotos: boolean;
  maxPhotosPerPost: number;
  
  // AI
  canUseAI: boolean;
  aiQueriesPerMonth: number;
  
  // Produção
  canUseProductionDashboard: boolean;
  canExportReports: boolean;
  
  // Batch
  canTrackBatches: boolean;
  maxBatchesPerMonth: number;
}
```

#### Tabela de Features por Tier:

| Feature | Free | Pro (€9.99) | Master (€19.99) |
|---------|------|-------------|-----------------|
| Calculadora Básica | ✅ | ✅ | ✅ |
| Estilos Pré-Configurados | 10 | Todos | Todos |
| Receitas Salvas | 3 | Ilimitado | Ilimitado |
| Levains Salvos | 1 | 5 | Ilimitado |
| Comunidade (Leitura) | ✅ | ✅ | ✅ |
| Comunidade (Post) | ❌ | ✅ | ✅ |
| Fotos por Post | 0 | 3 | 10 |
| DoughBot (IA) | ❌ | ❌ | ✅ |
| Queries IA/mês | 0 | 0 | 50 |
| Produção Dashboard | ❌ | ✅ | ✅ |
| Batch Tracking | ❌ | ✅ | ✅ |
| Relatórios PDF | ❌ | ❌ | ✅ |
| Análise de Fotos | ❌ | ❌ | ✅ |

### ProFeatureLock Component

**Localização**: `src/components/ProFeatureLock.tsx`

```typescript
interface ProFeatureLockProps {
  feature: string;
  requiredTier: 'pro' | 'master';
  children: React.ReactNode;
}

const ProFeatureLock: React.FC<ProFeatureLockProps> = ({ 
  feature, requiredTier, children 
}) => {
  const { userTier } = useAuth();
  
  if (!hasAccess(userTier, requiredTier)) {
    return <PaywallModal feature={feature} requiredTier={requiredTier} />;
  }
  
  return <>{children}</>;
};
```

---

## 💳 MONETIZAÇÃO (STRIPE) {#monetizacao-stripe}

### Configuração Stripe

**Conta**: Conectada ao Firebase via Extension

#### Produtos e Preços:

```typescript
const STRIPE_PRODUCTS = {
  pro: {
    priceId: 'price_xxx_pro_monthly',
    amount: 999, // €9.99
    currency: 'eur',
    interval: 'month',
    features: [
      'Estilos ilimitados',
      'Receitas ilimitadas',
      'Comunidade ativa',
      'Produção Dashboard',
      'Batch Tracking'
    ]
  },
  master: {
    priceId: 'price_xxx_master_monthly',
    amount: 1999, // €19.99
    currency: 'eur',
    interval: 'month',
    features: [
      'Tudo do Pro',
      'DoughBot IA (50 queries/mês)',
      'Análise de fotos',
      'Relatórios PDF',
      'Suporte prioritário'
    ]
  }
};
```

### Fluxo de Checkout

1. **Usuário clica em "Upgrade to Pro"**
2. Frontend chama Cloud Function `createCheckoutSession`
3. Cloud Function retorna `sessionId`
4. Frontend redireciona para Stripe Checkout
5. Usuário completa pagamento
6. Webhook Stripe notifica Cloud Function
7. Cloud Function atualiza `userTier` no Firestore
8. Frontend detecta mudança e habilita features

### Webhooks Implementados

**Cloud Function**: `functions/src/stripe/webhook.ts`

```typescript
export const stripeWebhook = functions.https.onRequest(async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const event = stripe.webhooks.constructEvent(req.rawBody, sig, webhookSecret);
  
  switch (event.type) {
    case 'checkout.session.completed':
      await handleCheckoutSuccess(event.data.object);
      break;
    case 'customer.subscription.updated':
      await handleSubscriptionUpdate(event.data.object);
      break;
    case 'customer.subscription.deleted':
      await handleSubscriptionCancel(event.data.object);
      break;
  }
  
  res.json({ received: true });
});
```

### Customer Portal

Usuários podem gerenciar assinaturas:
- Atualizar método de pagamento
- Cancelar assinatura
- Ver faturas
- Alterar plano

---

## 🌍 INTERNACIONALIZAÇÃO (i18n) {#internacionalizacao}

### Idiomas Suportados

1. **Inglês (en)**: Padrão
2. **Português (pt)**: Brasil e Portugal
3. **Espanhol (es)**: Espanha e Latam
4. **Italiano (it)**: Itália
5. **Francês (fr)**: França

### Estrutura de Traduções

**Localização**: `public/locales/{lang}/`

#### Arquivos por Idioma:

```
public/locales/
├── en/
│   ├── translation.json (Geral)
│   ├── calculator.json
│   ├── community.json
│   ├── learn.json
│   ├── styles.json (40+ estilos)
│   └── common.json
├── pt/
│   └── [mesmos arquivos]
├── es/
├── it/
└── fr/
```

#### Exemplo de Tradução (calculator.json):

```json
{
  "en": {
    "calculator": {
      "title": "Dough Calculator",
      "hydration": "Hydration (%)",
      "numberOfBalls": "Number of Balls",
      "ballWeight": "Ball Weight (g)",
      "calculate": "Calculate",
      "results": "Results",
      "totalFlour": "Total Flour",
      "totalWater": "Total Water"
    }
  },
  "pt": {
    "calculator": {
      "title": "Calculadora de Massa",
      "hydration": "Hidratação (%)",
      "numberOfBalls": "Número de Bolas",
      "ballWeight": "Peso da Bola (g)",
      "calculate": "Calcular",
      "results": "Resultados",
      "totalFlour": "Farinha Total",
      "totalWater": "Água Total"
    }
  }
}
```

### Configuração i18n

**Localização**: `src/i18n.ts`

```typescript
i18n
  .use(Backend) // Carregar traduções de /public/locales
  .use(LanguageDetector) // Detectar idioma do navegador
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'pt', 'es', 'it', 'fr'],
    ns: ['translation', 'calculator', 'community', 'learn', 'styles'],
    defaultNS: 'translation',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });
```

### Uso em Componentes

```typescript
import { useTranslation } from 'react-i18next';

const CalculatorPage = () => {
  const { t, i18n } = useTranslation('calculator');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <label>{t('hydration')}</label>
      
      {/* Trocar idioma */}
      <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="pt">Português</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
};
```

---

## 💰 CUSTOS E GESTÃO DE RECURSOS {#custos-gestao}

### Estimativa de Custos Mensais

#### Firebase (Plano Blaze)

| Serviço | Uso Estimado | Custo Estimado |
|---------|--------------|----------------|
| **Firestore** | | |
| - Leituras | 500k/mês | $0.18 |
| - Escritas | 100k/mês | $0.18 |
| - Armazenamento | 2 GB | $0.36 |
| **Storage** | | |
| - Armazenamento | 10 GB | $0.026/GB = $0.26 |
| - Downloads | 50 GB | $0.12/GB = $6.00 |
| **Hosting** | | |
| - Banda | 30 GB | Incluído (10 GB grátis) |
| **Functions** | | |
| - Invocações | 200k/mês | Grátis (2M grátis) |
| - GB-seg | 50k | Grátis (400k grátis) |
| **Authentication** | | |
| - Usuários ativos | 5k/mês | Grátis (50k grátis) |
| **TOTAL FIREBASE** | | **~$7-10/mês** |

#### Google Gemini AI

| Uso | Custo |
|-----|-------|
| 50k tokens input/mês | $0.075/1k tokens = $3.75 |
| 20k tokens output/mês | $0.30/1k tokens = $6.00 |
| **TOTAL GEMINI** | **~$10/mês** |

#### Stripe

| Item | Custo |
|------|-------|
| Taxa por transação | 1.4% + €0.25 |
| 100 assinaturas Pro (€9.99) | €999 - €17 = €982 |
| 20 assinaturas Master (€19.99) | €399.80 - €7 = €392.80 |
| **TOTAL STRIPE (receita líquida)** | **€1,374.80/mês** |

### Controle de Custos

**Workflow**: `.agent/workflows/cost-management.md`

#### 1. Audit Script Automático

```bash
node scripts/audit-cloud-efficiency.cjs
```

**O que verifica**:
- Queries Firestore sem `.limit()`
- Uso de APIs pagas desnecessárias
- Scripts órfãos que inflam o bundle
- Regras de segurança muito abertas

#### 2. Limites no Google Cloud Console

**Maps API**: Máximo 100 requests/dia (dev), 500 (prod)  
**Gemini API**: Quota de 1 milhão tokens/mês

#### 3. Caching Agressivo

- **Firestore**: Cache offline habilitado
- **Storage**: URLs com cache de 7 dias
- **Static Assets**: CDN do Firebase Hosting

#### 4. Rate Limiting

**Cloud Function**: `functions/src/utils/rateLimiting.ts`

```typescript
const RATE_LIMITS = {
  communityPost: { maxPerHour: 5, maxPerDay: 20 },
  aiQuery: { maxPerHour: 10, maxPerDay: 50 },
  photoUpload: { maxPerHour: 20, maxPerDay: 100 }
};

export const checkRateLimit = async (
  uid: string, 
  action: string
): Promise<boolean> => {
  const limitDoc = await db.collection('rate_limits')
    .doc(`${uid}_${action}`)
    .get();
  
  // Verificar se excedeu limite
  // ...
};
```

---

## 🚀 DEPLOY E CI/CD {#deploy-cicd}

### Deploy Manual

**Workflow**: `.agent/workflows/deploy.md`

#### Passo a Passo:

```bash
# 1. Build do projeto
npm run build

# 2. Deploy completo (Hosting + Functions + Firestore)
firebase deploy

# 3. Deploy apenas Hosting (mais rápido)
firebase deploy --only hosting

# 4. Deploy apenas Functions
firebase deploy --only functions

# 5. Deploy apenas regras Firestore
firebase deploy --only firestore:rules
```

### Processo de Build

**Script**: `package.json`

```json
{
  "scripts": {
    "dev": "vite",
    "build": "npm run audit:cloud && vite build",
    "preview": "vite preview",
    "audit:cloud": "node scripts/audit-cloud-efficiency.cjs"
  }
}
```

**O que acontece no build**:
1. Audit de eficiência de cloud
2. TypeScript compilation
3. Vite bundling (minificação, tree-shaking)
4. Tailwind CSS purge (remove classes não usadas)
5. Geração de `dist/` folder

### Configuração Vite

**vite.config.ts**:

```typescript
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false, // Desabilitar em prod
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'firebase-vendor': ['firebase/app', 'firebase/auth', 'firebase/firestore'],
          'ui-vendor': ['framer-motion', '@headlessui/react']
        }
      }
    }
  }
});
```

### Ambientes

#### Desenvolvimento (Local)
- **URL**: `http://localhost:5173`
- **Comando**: `npm run dev`
- **Firebase**: Projeto `doughlabpro-fire`
- **Hot Reload**: Ativo

#### Produção (Firebase Hosting)
- **URL**: `https://doughlabpro-fire.web.app`
- **Deploy**: `firebase deploy`
- **CDN**: Global edge network
- **SSL**: Automático

### CI/CD Futuro (GitHub Actions)

**Configuração Sugerida** (.github/workflows/deploy.yml):

```yaml
name: Deploy to Firebase

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
```

---

## 🛣️ ROADMAP E EVOLUÇÃO {#roadmap}

### Versão Atual: 1.0.0 (Janeiro 2026)

**Status**: Produção ativa  
**Features**: Calculadora, MyLab, Comunidade, Learn, DoughBot

### Q1 2026 (Jan-Mar)

#### Melhorias Planejadas:
1. **Multi-tenancy**: Suporte para organizações/padarias
2. **App Mobile**: React Native (iOS/Android)
3. **Notificações Push**: Lembretes de fermentação
4. **Integração com Balança**: Bluetooth scales
5. **Marketplace**: Venda de receitas premium

### Q2 2026 (Abr-Jun)

#### Novas Features:
1. **DoughBot Vision**: Upload de foto → análise de qualidade
2. **Planner Semanal**: Calendário de produção
3. **Relatórios Avançados**: Analytics de negócio
4. **API Pública**: Integração com ERPs de padarias
5. **Certificação**: Cursos e badges

### Q3 2026 (Jul-Set)

#### Expansão:
1. **B2B**: Planos para padarias (€99/mês)
2. **White Label**: DoughLabPro para marcas
3. **Hardware**: Sensor de temperatura/umidade IoT
4. **Eventos**: Workshops e competições
5. **Podcast/Video**: Conteúdo multimídia

### Longo Prazo (2027+)

1. **Global Expansion**: Ásia, Oceania
2. **Blockchain**: NFTs de receitas raras
3. **AR/VR**: Treino de shaping em VR
4. **IA Generativa**: Criar novas receitas via IA
5. **Franchising**: Modelo de franquia DoughLabPro

---

## 🔒 SEGURANÇA {#seguranca}

### Princípios de Segurança

1. **Least Privilege**: Mínimo acesso necessário
2. **Defense in Depth**: Múltiplas camadas de proteção
3. **Zero Trust**: Validar sempre
4. **Privacy by Design**: GDPR compliant

### Firestore Security Rules

**Teste de Regras**:

```bash
firebase emulators:start --only firestore
npm run test:security
```

**Regras Críticas**:
- ✅ Usuário só lê/escreve seus próprios dados
- ✅ Community posts públicos, mas edição restrita
- ✅ Rate limiting no backend
- ✅ Validação de tipos de dados

### Storage Security Rules

**Validações**:
- Tamanho máximo de upload: 10 MB
- Tipos permitidos: jpg, png, webp
- Path ownership: `{uid}` deve corresponder ao `auth.uid`

### Authentication Security

1. **Senha forte**: Mínimo 8 caracteres
2. **2FA**: Futuro (Google Authenticator)
3. **Logout automático**: 30 dias de inatividade
4. **Session refresh**: Token refresh a cada 1 hora

### HTTPS Everywhere

- ✅ Firebase Hosting força HTTPS
- ✅ APIs externas via HTTPS
- ✅ CSP headers configurados

### Sanitização de Inputs

```typescript
// XSS Protection
const sanitizeHtml = (input: string): string => {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
};
```

### GDPR Compliance

1. **Consentimento**: Cookie banner
2. **Direito ao Esquecimento**: Deletar conta
3. **Exportação de Dados**: Download JSON
4. **Anonimização**: Posts permanecem, mas sem autor

---

## ⚡ PERFORMANCE {#performance}

### Métricas Atuais (Lighthouse)

- **Performance**: 92/100
- **Accessibility**: 95/100
- **Best Practices**: 100/100
- **SEO**: 90/100

### Otimizações Implementadas

#### 1. Code Splitting

```typescript
// Lazy loading de rotas
const DoughbotPage = lazy(() => import('./pages/DoughbotPage'));
const ProductionDashboard = lazy(() => import('./pages/ProductionDashboard'));

<Suspense fallback={<LoadingSpinner />}>
  <Route path="/doughbot" element={<DoughbotPage />} />
</Suspense>
```

#### 2. Image Optimization

- **Formato**: WebP com fallback JPG
- **Lazy Loading**: `loading="lazy"`
- **Responsive**: Srcset para diferentes tamanhos
- **CDN**: Firebase Hosting CDN

#### 3. Bundle Size

```bash
# Análise de bundle
npm run build
npx vite-bundle-analyzer
```

**Tamanhos**:
- `react-vendor.js`: 150 KB (gzipped)
- `firebase-vendor.js`: 80 KB
- `app.js`: 200 KB
- **Total**: ~430 KB (gzipped)

#### 4. Caching Strategy

```typescript
// Service Worker (futuro)
const CACHE_NAME = 'doughlabpro-v1';
const urlsToCache = [
  '/',
  '/styles.css',
  '/main.js',
  '/locales/en/translation.json'
];
```

#### 5. Firestore Optimization

- **Paginação**: `.limit(20)` em todas queries
- **Índices Compostos**: Criados para queries frequentes
- **Cache Offline**: Enabled por padrão

---

## 📚 DOCUMENTAÇÃO DE SUPORTE {#documentacao-suporte}

### Arquivos de Documentação Existentes

1. **ADMIN_SETUP.md** (3.429 bytes): Setup de admin
2. **APP_STRATIFICATION.md** (5.798 bytes): Estratificação do app
3. **COMPLETE_SUCCESS_REPORT.md** (6.725 bytes): Relatório de sucesso
4. **DEPLOY_HOSTGATOR.md** (2.103 bytes): Deploy HostGator (legado)
5. **DOUGHLAB_BLUEPRINT.md** (5.508 bytes): Blueprint anterior
6. **DOUGHLAB_BLUEPRINT_FULL.md** (8.543 bytes): Blueprint completo
7. **DOUGHLAB_TECHNICAL_BIBLE.md** (10.514 bytes): Bíblia técnica
8. **DOUGHY_OVERVIEW.md** (6.829 bytes): Overview do Doughy
9. **EXECUTIVE_SUMMARY.md** (4.253 bytes): Resumo executivo
10. **FINAL_I18N_STATUS.md** (6.211 bytes): Status de i18n
11. **STRIPE_SETUP.md** (2.377 bytes): Setup Stripe
12. **TESTING_CHECKLIST.md** (4.856 bytes): Checklist de testes

### Scripts Utilitários

**Localização**: `scripts/` e raiz do projeto

#### Auditoria e Análise:
- `audit-cloud-efficiency.cjs`: Verifica custos
- `analyze-styles.cjs`: Analisa estilos
- `scan-hardcoded-strings.cjs`: Encontra strings hardcoded

#### Migração e Dados:
- `complete-i18n-migration.cjs`: Migração i18n
- `add_batch_2.py`: Adicionar dados de batch
- `merge_translations.py`: Merge de traduções

#### Build e Deploy:
- `create-backup.cjs`: Backup antes de deploy
- `restore-backup.cjs`: Restaurar backup
- `fix-dark-backgrounds.cjs`: Corrigir backgrounds

---

## 📊 DADOS TÉCNICOS ADICIONAIS

### Banco de Dados de Farinhas

**Localização**: `src/flours-constants.ts` (4.397 bytes)

**Exemplo de Farinha**:

```typescript
interface Flour {
  id: string;
  name: string;
  brand: string;
  W: number; // Força (180-400)
  protein: number; // % (9-15)
  absorption: number; // % (55-70)
  type: 'tipo_00' | 'tipo_0' | 'integral' | 'bread_flour';
  origin: string;
  price_per_kg: number;
  available: boolean;
}
```

**Farinhas Cadastradas**: 50+  
**Marcas**: Caputo, Molino Grassi, King Arthur, Bob's Red Mill

### Banco de Toppings

**Localização**: `src/toppings-constants.ts` (4.848 bytes)

**Categorias**:
- Queijos (Mozzarella, Parmesão, Gorgonzola)
- Carnes (Pepperoni, Prosciutto, Salsiccia)
- Vegetais (Tomate, Rúcula, Cogumelos)
- Molhos (Marinara, Pesto, Alfredo)

---

## 🎨 DESIGN SYSTEM

### Cores Tailwind (dlp)

```javascript
colors: {
  dlp: {
    bg: {
      DEFAULT: '#FFFFFF',
      soft: '#e9ecf0ff',
      card: '#fffffffd',
      muted: '#F3F4F6'
    },
    text: {
      primary: '#111827',
      secondary: '#7d8692ff',
      muted: '#a6acb8ff',
      inverted: '#FFFFFF'
    },
    accent: {
      DEFAULT: '#3e8b32ff', // Verde principal
      hover: '#36782c',
      light: '#ECFCCB',
      dark: '#216416ff'
    },
    brand: {
      DEFAULT: '#51a145',
      green: '#3e8b32ff',
      dark: '#216416ff',
      lime: '#51a145'
    }
  }
}
```

### Tipografia

```javascript
fontFamily: {
  sans: ['Inter', 'sans-serif'], // Corpo de texto
  heading: ['Outfit', 'sans-serif'] // Títulos
}
```

### Animações

```javascript
animation: {
  'slide-up': 'slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  'fade-in': 'fadeIn 0.4s ease-out',
  'fade-in-scale': 'fadeInScale 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
}
```

---

## 🧪 TESTES

### Checklist de Testes

**Localização**: `TESTING_CHECKLIST.md`

#### Testes Funcionais:
- [ ] Login/Logout
- [ ] Cálculo de massa (várias hidratações)
- [ ] Salvar receita
- [ ] Upload de foto
- [ ] Post na comunidade
- [ ] DoughBot IA
- [ ] Upgrade para Pro
- [ ] Cancelamento de assinatura

#### Testes de Performance:
- [ ] Lighthouse score > 90
- [ ] Bundle size < 500 KB
- [ ] TTI (Time to Interactive) < 3s

#### Testes de Segurança:
- [ ] XSS prevention
- [ ] CSRF tokens
- [ ] Rate limiting
- [ ] SQL injection (N/A - NoSQL)

---

## 📞 CONTATO E SUPORTE

### Email de Suporte
**support@doughlabpro.com** (futuro)

### Redes Sociais
- Instagram: @doughlabpro
- YouTube: DoughLabPro
- Discord: Comunidade DoughLabPro

---

## 📝 CHANGELOG

### v1.0.0 (Janeiro 2026)
- ✅ Lançamento oficial
- ✅ Calculadora completa
- ✅ 40+ estilos de pães
- ✅ 20+ estilos de pizzas
- ✅ Comunidade ativa
- ✅ DoughBot IA
- ✅ 5 idiomas
- ✅ Stripe integrado
- ✅ Firebase completo

---

## 🏁 CONCLUSÃO

Este blueprint representa o estado completo do **DoughLabPro** em Janeiro de 2026. 

**Principais Conquistas**:
- ✅ Aplicação full-stack em produção
- ✅ Arquitetura escalável (Firebase)
- ✅ Monetização ativa (Stripe)
- ✅ IA integrada (Gemini)
- ✅ Multi-idioma (5 línguas)
- ✅ Comunidade engajada
- ✅ Custos controlados (~$20/mês)

**Próximos Passos**:
1. Lançar app mobile
2. Expandir para B2B
3. Integrar hardware IoT
4. Desenvolver marketplace

---

**Documento gerado em**: 14 de Janeiro de 2026  
**Autor**: Equipe DoughLabPro  
**Versão**: 1.0.0  

---

**© 2026 DoughLabPro. Todos os direitos reservados.**
