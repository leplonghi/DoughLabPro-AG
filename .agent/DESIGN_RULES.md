# 🎨 DoughLabPro - Design Rules & Standards

## 📋 **Regras Fundamentais de Design**

### ✅ **REGRA #1: Light Mode APENAS**
- ❌ **NÃO HÁ** e **NÃO HAVERÁ** modo escuro (dark mode) no DoughLabPro
- ✅ O app é **exclusivamente light mode**
- ✅ Todas as variáveis CSS devem ser definidas apenas para `:root` (light mode)
- ❌ **NUNCA** adicionar variáveis ou estilos para `.dark` ou `[data-theme="dark"]`

### ✅ **REGRA #2: Cards Brancos Sempre**
- ✅ **TODOS** os cards devem usar `bg-white` (fundo branco)
- ✅ Cards são o elemento visual principal do app
- ✅ Bordas devem ser sutis: `border-slate-200` ou `border-slate-100`
- ✅ Sombras devem ser leves: `shadow-sm` ou `shadow-md`

### ✅ **REGRA #3: Hierarquia de Backgrounds**
```css
/* Hierarquia de fundos (do mais claro ao mais escuro) */
--dlp-bg: #FFFFFF;           /* Fundo principal (branco puro) */
--dlp-bg-soft: #F8F9FA;      /* Fundo suave (cinza muito claro) */
--dlp-bg-card: #FFFFFF;      /* Fundo de cards (branco puro) */
```

**Uso correto:**
- `bg-white` → Cards, modais, painéis principais
- `bg-slate-50` → Backgrounds secundários, headers de seções
- `bg-slate-100` → Áreas de destaque, separadores

---

## 🎨 **Paleta de Cores Oficial**

### **Cores Primárias**
```css
--dlp-accent: #84CC16;        /* Lime-500 - Cor principal */
--dlp-accent-hover: #65A30D;  /* Lime-600 - Hover states */
--dlp-accent-light: #A3E635;  /* Lime-400 - Variações */
```

### **Cores de Texto**
```css
--dlp-text-primary: #111827;    /* Gray-900 - Texto principal */
--dlp-text-secondary: #4B5563;  /* Gray-600 - Texto secundário */
--dlp-text-muted: #6B7280;      /* Gray-500 - Texto desativado */
```

### **Cores de Background**
```css
--dlp-bg: #FFFFFF;        /* Branco puro */
--dlp-bg-soft: #F8F9FA;   /* Cinza muito claro */
--dlp-bg-card: #FFFFFF;   /* Cards brancos */
```

### **Cores de Borda**
```css
border-slate-100  /* Bordas muito sutis */
border-slate-200  /* Bordas padrão */
border-slate-300  /* Bordas mais visíveis */
```

---

## 🚫 **O que NUNCA fazer**

### ❌ **Proibido: Dark Mode**
```css
/* ❌ NUNCA ADICIONAR ISTO */
.dark {
  --dlp-bg: #1a1a1a;
  --dlp-text-primary: #ffffff;
}

/* ❌ NUNCA USAR CLASSES DARK */
<div className="bg-white dark:bg-slate-900">

/* ❌ NUNCA ADICIONAR TOGGLE DE TEMA */
<button onClick={toggleDarkMode}>
```

### ❌ **Proibido: Cards Escuros**
```tsx
/* ❌ NUNCA FAZER ISTO */
<div className="bg-slate-800 text-white">
<div className="bg-gray-900 rounded-lg">
<div className="dark:bg-slate-700">
```

### ❌ **Proibido: Fundos Muito Escuros**
```tsx
/* ❌ EVITAR backgrounds muito escuros */
<div className="bg-slate-700">  /* Muito escuro */
<div className="bg-gray-800">   /* Muito escuro */
<div className="bg-black">      /* Proibido */
```

---

## ✅ **Padrões Corretos**

### ✅ **Card Padrão**
```tsx
<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
  <h3 className="text-slate-900 font-semibold mb-2">Título</h3>
  <p className="text-slate-600">Conteúdo do card</p>
</div>
```

### ✅ **Card com Hover**
```tsx
<div className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-lime-200 transition-all p-4">
  Conteúdo interativo
</div>
```

### ✅ **Modal Padrão**
```tsx
<div className="bg-white rounded-2xl shadow-2xl max-w-lg overflow-hidden">
  <div className="p-5 border-b border-slate-100 bg-slate-50">
    {/* Header */}
  </div>
  <div className="p-6 bg-white">
    {/* Conteúdo */}
  </div>
</div>
```

### ✅ **Seção com Background Suave**
```tsx
<div className="bg-slate-50 rounded-xl p-6">
  <div className="bg-white rounded-lg border border-slate-200 p-4">
    {/* Card dentro de seção */}
  </div>
</div>
```

---

## 🎯 **Hierarquia Visual**

### **Níveis de Elevação**
```
Nível 1: bg-slate-50        (Background da página)
Nível 2: bg-white           (Cards principais)
Nível 3: bg-white + shadow  (Cards com destaque)
Nível 4: bg-white + shadow-lg (Modais, overlays)
```

### **Bordas e Separadores**
```
Sutil:    border-slate-100  (Separadores internos)
Padrão:   border-slate-200  (Bordas de cards)
Visível:  border-slate-300  (Inputs, elementos interativos)
Destaque: border-lime-500   (Estados ativos, focus)
```

---

## 📐 **Espaçamento e Arredondamento**

### **Border Radius**
```css
rounded-lg    /* 0.5rem - Cards pequenos */
rounded-xl    /* 0.75rem - Cards médios */
rounded-2xl   /* 1rem - Cards grandes, modais */
rounded-3xl   /* 1.5rem - Elementos especiais */
```

### **Padding de Cards**
```css
p-4   /* Cards pequenos */
p-6   /* Cards médios (padrão) */
p-8   /* Cards grandes */
```

### **Sombras**
```css
shadow-sm   /* Sombra sutil (padrão) */
shadow-md   /* Sombra média (hover) */
shadow-lg   /* Sombra grande (destaque) */
shadow-xl   /* Sombra extra (modais) */
shadow-2xl  /* Sombra máxima (overlays) */
```

---

## 🔍 **Checklist de Validação**

Ao criar ou modificar componentes, verifique:

- [ ] ✅ Usa apenas light mode (sem classes `dark:`)
- [ ] ✅ Cards usam `bg-white`
- [ ] ✅ Bordas são sutis (`border-slate-100` ou `border-slate-200`)
- [ ] ✅ Texto principal usa `text-slate-900` ou `text-slate-800`
- [ ] ✅ Texto secundário usa `text-slate-600`
- [ ] ✅ Accent color é lime (`bg-lime-500`, `text-lime-600`)
- [ ] ✅ Sombras são leves (`shadow-sm` ou `shadow-md`)
- [ ] ✅ Border radius é consistente (`rounded-xl` para cards)
- [ ] ✅ Spacing segue o padrão (`p-6` para cards médios)

---

## 📝 **Exemplos de Componentes**

### **Card de Estilo (StyleCard)**
```tsx
<div className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-lime-200 transition-all">
  <div className="p-4">
    <h3 className="text-slate-900 font-semibold">Neapolitan Pizza</h3>
    <p className="text-slate-600 text-sm">Traditional Italian style</p>
  </div>
</div>
```

### **Card de Ferramenta (Tool Card)**
```tsx
<div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
  <div className="flex items-center gap-3 mb-4">
    <div className="p-2 bg-lime-50 rounded-lg">
      <Icon className="text-lime-600" />
    </div>
    <h3 className="text-slate-900 font-semibold">Tool Name</h3>
  </div>
  <p className="text-slate-600">Description</p>
</div>
```

### **Input Field**
```tsx
<input
  className="w-full rounded-xl border-slate-300 bg-slate-50 p-3 text-slate-900 focus:border-lime-500 focus:ring-lime-500"
  type="text"
/>
```

---

## 🚀 **Migração de Código Legado**

Se encontrar código com dark mode, **remova imediatamente**:

### **Antes (❌ Errado)**
```tsx
<div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
```

### **Depois (✅ Correto)**
```tsx
<div className="bg-white text-slate-900">
```

---

## 📚 **Referências**

### **Arquivos Principais**
- `src/index.css` - Variáveis CSS globais
- `src/index.tsx` - Remove dark mode no mount
- `tailwind.config.js` - Configuração de cores

### **Componentes de Referência**
- `src/components/styles/StyleCard.tsx` - Card padrão
- `src/components/tools/ovenProfiler/OvenProfilerForm.tsx` - Formulários
- `src/components/ui/InfoTooltip.tsx` - Tooltips

---

## ✅ **Status**

**Data de Criação**: 2025-12-16  
**Versão**: 1.0  
**Status**: ✅ **Ativo e Obrigatório**

---

## 🎯 **Resumo Executivo**

1. ✅ **Light Mode APENAS** - Sem dark mode, nunca
2. ✅ **Cards Brancos** - `bg-white` sempre
3. ✅ **Bordas Sutis** - `border-slate-200` padrão
4. ✅ **Accent Lime** - `#84CC16` cor principal
5. ✅ **Hierarquia Clara** - `bg-slate-50` → `bg-white` → `shadow`

**Regra de Ouro**: Se você está pensando em adicionar dark mode ou cards escuros, **PARE**. Isso vai contra o design system do DoughLabPro.
