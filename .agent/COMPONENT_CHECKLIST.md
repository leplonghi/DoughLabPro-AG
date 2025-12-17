# ✅ Checklist de Validação de Componentes

## 🎯 **Objetivo**
Use este checklist ao criar ou modificar componentes para garantir conformidade com o design system do DoughLabPro.

---

## 📋 **Checklist Obrigatório**

### **1. Design System** ✅

#### **Light Mode APENAS**
- [ ] ❌ Não usa classes `dark:`
- [ ] ❌ Não usa `dark-mode` ou variações
- [ ] ❌ Não tem toggle de tema
- [ ] ✅ Usa apenas light mode

#### **Cards Brancos**
- [ ] ✅ Cards usam `bg-white`
- [ ] ✅ Bordas usam `border-slate-200` ou `border-slate-100`
- [ ] ✅ Sombras são sutis (`shadow-sm` ou `shadow-md`)
- [ ] ✅ Border radius é consistente (`rounded-xl` ou `rounded-2xl`)

#### **Cores**
- [ ] ✅ Texto principal usa `text-slate-900` ou `text-slate-800`
- [ ] ✅ Texto secundário usa `text-slate-600`
- [ ] ✅ Texto desativado usa `text-slate-400` ou `text-slate-500`
- [ ] ✅ Accent color é lime (`bg-lime-500`, `text-lime-600`, `border-lime-500`)
- [ ] ❌ Não usa cores muito escuras (`bg-slate-800`, `bg-gray-900`, `bg-black`)

#### **Backgrounds**
- [ ] ✅ Background principal usa `bg-white` ou `bg-slate-50`
- [ ] ✅ Hierarquia clara: `bg-slate-50` → `bg-white` → `shadow`
- [ ] ❌ Não usa backgrounds escuros

---

### **2. Tipografia** ✅

- [ ] ✅ Usa fonte Inter (`font-sans`)
- [ ] ✅ Font weight máximo é 600 (`font-semibold`)
- [ ] ❌ Não usa `font-bold`, `font-extrabold`, ou `font-black`
- [ ] ✅ Tamanhos de texto são consistentes com o design system

---

### **3. Espaçamento** ✅

#### **Padding de Cards**
- [ ] ✅ Cards pequenos: `p-4`
- [ ] ✅ Cards médios: `p-6` (padrão)
- [ ] ✅ Cards grandes: `p-8`

#### **Gaps e Margens**
- [ ] ✅ Usa escala consistente: `gap-2`, `gap-3`, `gap-4`, `gap-6`
- [ ] ✅ Margens são múltiplos de 4px

---

### **4. Interatividade** ✅

#### **Hover States**
- [ ] ✅ Transições suaves (`transition-all` ou `transition-colors`)
- [ ] ✅ Hover em cards: `hover:shadow-md` e `hover:border-lime-200`
- [ ] ✅ Hover em botões: `hover:scale-105` ou `hover:shadow-lg`

#### **Focus States**
- [ ] ✅ Inputs têm `focus:border-lime-500` e `focus:ring-lime-500`
- [ ] ✅ Botões têm estados de focus visíveis

---

### **5. Acessibilidade** ✅

- [ ] ✅ Contraste de texto é adequado (WCAG AA)
- [ ] ✅ Elementos interativos têm estados hover/focus
- [ ] ✅ Ícones têm labels ou aria-labels quando necessário
- [ ] ✅ Formulários têm labels apropriados

---

### **6. Responsividade** ✅

- [ ] ✅ Layout funciona em mobile (< 640px)
- [ ] ✅ Layout funciona em tablet (640px - 1024px)
- [ ] ✅ Layout funciona em desktop (> 1024px)
- [ ] ✅ Usa breakpoints Tailwind (`sm:`, `md:`, `lg:`, `xl:`)

---

### **7. Performance** ✅

- [ ] ✅ Imagens têm `loading="lazy"` quando apropriado
- [ ] ✅ Componentes grandes usam lazy loading
- [ ] ✅ Não há re-renders desnecessários
- [ ] ✅ Estados são gerenciados eficientemente

---

### **8. Traduções** ✅

- [ ] ✅ Todos os textos usam `t()` do i18n
- [ ] ✅ Chaves de tradução seguem o padrão `namespace.key`
- [ ] ✅ Traduções existem em `public/locales/en/`
- [ ] ✅ Não há textos hardcoded

---

## 🚫 **Anti-Padrões (NUNCA FAZER)**

### **❌ Dark Mode**
```tsx
// ❌ ERRADO
<div className="bg-white dark:bg-slate-900">
<div className="text-slate-900 dark:text-white">

// ✅ CORRETO
<div className="bg-white">
<div className="text-slate-900">
```

### **❌ Cards Escuros**
```tsx
// ❌ ERRADO
<div className="bg-slate-800 text-white">
<div className="bg-gray-900 rounded-lg">

// ✅ CORRETO
<div className="bg-white text-slate-900">
<div className="bg-white rounded-xl border border-slate-200">
```

### **❌ Font Weight Excessivo**
```tsx
// ❌ ERRADO
<h1 className="font-bold">Título</h1>
<h2 className="font-extrabold">Subtítulo</h2>

// ✅ CORRETO
<h1 className="font-semibold">Título</h1>
<h2 className="font-semibold">Subtítulo</h2>
```

### **❌ Cores Inconsistentes**
```tsx
// ❌ ERRADO
<button className="bg-blue-500">Ação</button>
<button className="bg-green-600">Ação</button>

// ✅ CORRETO
<button className="bg-lime-500">Ação</button>
<button className="bg-gradient-to-r from-lime-500 to-green-600">Ação</button>
```

---

## ✅ **Padrões Corretos**

### **Card Simples**
```tsx
<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
  <h3 className="text-slate-900 font-semibold mb-2">Título</h3>
  <p className="text-slate-600">Conteúdo do card</p>
</div>
```

### **Card Interativo**
```tsx
<div className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-lime-200 transition-all p-4 cursor-pointer">
  <h3 className="text-slate-900 font-semibold">Título</h3>
  <p className="text-slate-600 text-sm">Descrição</p>
</div>
```

### **Input Field**
```tsx
<input
  className="w-full rounded-xl border-slate-300 bg-slate-50 p-3 text-slate-900 focus:border-lime-500 focus:ring-lime-500 transition-shadow"
  type="text"
  placeholder={t('placeholder')}
/>
```

### **Botão Primário**
```tsx
<button className="px-6 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-lime-500 to-green-600 hover:shadow-lg hover:scale-105 transition-all">
  {t('action')}
</button>
```

### **Botão Secundário**
```tsx
<button className="px-6 py-2.5 rounded-xl font-semibold text-slate-600 bg-slate-50 hover:bg-slate-100 transition-colors">
  {t('cancel')}
</button>
```

### **Modal**
```tsx
<div className="bg-white rounded-2xl shadow-2xl max-w-lg overflow-hidden">
  <div className="p-5 border-b border-slate-100 bg-slate-50">
    <h2 className="text-slate-900 font-semibold">{t('title')}</h2>
  </div>
  <div className="p-6 bg-white">
    {/* Conteúdo */}
  </div>
  <div className="p-5 border-t border-slate-100 bg-slate-50 flex gap-3">
    {/* Botões */}
  </div>
</div>
```

---

## 🔍 **Validação Rápida**

### **Teste Visual**
1. ✅ O componente parece clean e moderno?
2. ✅ As cores estão consistentes com o resto do app?
3. ✅ Os espaçamentos parecem equilibrados?
4. ✅ O componente funciona bem em mobile?

### **Teste de Código**
1. ✅ Não há classes `dark:`?
2. ✅ Usa `bg-white` para cards?
3. ✅ Usa `text-slate-900` para texto principal?
4. ✅ Usa `t()` para todos os textos?

### **Teste de Interação**
1. ✅ Hover states funcionam?
2. ✅ Focus states são visíveis?
3. ✅ Transições são suaves?
4. ✅ Componente é acessível?

---

## 📊 **Scoring**

### **Pontuação**
- **30/30**: ✅ Perfeito! Componente está em conformidade total
- **25-29**: ⚠️ Bom, mas precisa de pequenos ajustes
- **20-24**: ⚠️ Precisa de melhorias significativas
- **< 20**: ❌ Não está em conformidade, refazer

### **Itens Críticos (Bloqueantes)**
Se qualquer um destes falhar, o componente **NÃO** pode ser aprovado:
1. ❌ Usa classes `dark:`
2. ❌ Usa cards escuros (`bg-slate-800`, `bg-gray-900`)
3. ❌ Não usa `t()` para textos
4. ❌ Contraste de texto inadequado

---

## 📚 **Referências**

- **Design Rules**: `.agent/DESIGN_RULES.md`
- **Correção Dark Mode**: `.agent/CORRECAO_DARK_MODE.md`
- **Componentes de Referência**:
  - `src/components/styles/StyleCard.tsx`
  - `src/components/tools/ovenProfiler/OvenProfilerForm.tsx`
  - `src/components/ui/InfoTooltip.tsx`

---

## ✅ **Status**

**Data de Criação**: 2025-12-16  
**Versão**: 1.0  
**Status**: ✅ **Ativo e Obrigatório**

---

## 🎯 **Resumo**

Use este checklist **SEMPRE** ao:
1. Criar novos componentes
2. Modificar componentes existentes
3. Revisar PRs
4. Fazer code review

**Regra de Ouro**: Se você não tem certeza, consulte [DESIGN_RULES.md](.agent/DESIGN_RULES.md)
