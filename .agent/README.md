# 📚 DoughLabPro - Agent Documentation

## 🎯 **Documentos Principais**

### **Design & Padrões**
- **[DESIGN_RULES.md](DESIGN_RULES.md)** - ⭐ **OBRIGATÓRIO** - Regras de design do app
  - Light mode APENAS (sem dark mode)
  - Cards brancos sempre
  - Paleta de cores oficial
  - Exemplos e anti-padrões

- **[CORRECAO_DARK_MODE.md](CORRECAO_DARK_MODE.md)** - Resumo da correção aplicada
  - Mudanças implementadas
  - Código limpo
  - Validação

### **Implementação de Features**
- **[FASE1_IMPLEMENTACAO.md](FASE1_IMPLEMENTACAO.md)** - Implementação híbrida de nomenclatura
  - Novos tipos TypeScript
  - Backward compatibility
  - Traduções atualizadas

- **[PROPOSTA_NOMENCLATURA_INGREDIENTES.md](PROPOSTA_NOMENCLATURA_INGREDIENTES.md)** - Proposta de padronização
  - Plano de migração em 4 fases
  - Nomenclatura clara

### **Guias de Uso**
- **[ASSEMBLY_LAB_GUIDE.md](ASSEMBLY_LAB_GUIDE.md)** - Guia completo do Assembly Lab
  - Como usar
  - Troubleshooting
  - Exemplos

- **[INGREDIENT_SECTIONS_GUIDE.md](INGREDIENT_SECTIONS_GUIDE.md)** - Guia de seções de ingredientes
  - Organização
  - Estrutura

- **[INGREDIENTES_LOCALIZACOES.md](INGREDIENTES_LOCALIZACOES.md)** - Mapa de localizações
  - Catálogo completo de 40+ componentes
  - Onde encontrar cada ingrediente

- **[MELHORIAS_DIDATICAS.md](MELHORIAS_DIDATICAS.md)** - Melhorias de UX didático
  - Tooltips
  - Explicações
  - Acessibilidade

---

## 🚀 **Quick Start**

### **Para Desenvolvedores**
1. **Leia primeiro**: [DESIGN_RULES.md](DESIGN_RULES.md)
2. **Entenda a estrutura**: [FASE1_IMPLEMENTACAO.md](FASE1_IMPLEMENTACAO.md)
3. **Consulte guias**: Assembly Lab, Ingredientes, etc.

### **Para Design**
1. **Regras obrigatórias**: [DESIGN_RULES.md](DESIGN_RULES.md)
2. **Paleta de cores**: Veja seção "Paleta de Cores Oficial"
3. **Exemplos**: Veja seção "Padrões Corretos"

---

## ⚠️ **Regras Críticas**

### **🚫 NUNCA FAZER**
1. ❌ Adicionar dark mode
2. ❌ Usar cards escuros (`bg-slate-800`, `bg-gray-900`)
3. ❌ Adicionar classes `dark:`
4. ❌ Criar toggle de tema

### **✅ SEMPRE FAZER**
1. ✅ Usar `bg-white` para cards
2. ✅ Usar `border-slate-200` para bordas
3. ✅ Usar `text-slate-900` para texto principal
4. ✅ Usar `#84CC16` (lime) como accent color

---

## 📂 **Estrutura de Pastas**

```
.agent/
├── README.md                              (este arquivo)
├── DESIGN_RULES.md                        ⭐ OBRIGATÓRIO
├── CORRECAO_DARK_MODE.md                  Correção aplicada
├── FASE1_IMPLEMENTACAO.md                 Implementação híbrida
├── PROPOSTA_NOMENCLATURA_INGREDIENTES.md  Proposta de padronização
├── ASSEMBLY_LAB_GUIDE.md                  Guia do Assembly Lab
├── INGREDIENT_SECTIONS_GUIDE.md           Guia de seções
├── INGREDIENTES_LOCALIZACOES.md           Mapa de ingredientes
├── MELHORIAS_DIDATICAS.md                 Melhorias de UX
├── docs/                                  Documentação adicional
├── plans/                                 Planos de implementação
└── workflows/                             Workflows automatizados
```

---

## 🎨 **Design System - Resumo**

### **Cores Principais**
```css
Background:     #FFFFFF (branco puro)
Background Soft: #F8F9FA (cinza muito claro)
Accent:         #84CC16 (lime-500)
Text Primary:   #111827 (slate-900)
Text Secondary: #4B5563 (slate-600)
Border:         #E5E7EB (slate-200)
```

### **Card Padrão**
```tsx
<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
  <h3 className="text-slate-900 font-semibold">Título</h3>
  <p className="text-slate-600">Conteúdo</p>
</div>
```

---

## 📖 **Workflows**

Veja a pasta `workflows/` para workflows automatizados:
- `/deploy` - Deploy para Firebase
- `/monetization-integration` - Integração de features Pro

---

## 🔄 **Atualizações Recentes**

### **2025-12-16**
- ✅ Criado `DESIGN_RULES.md` - Regras de design obrigatórias
- ✅ Criado `CORRECAO_DARK_MODE.md` - Resumo da correção
- ✅ Removido dark mode de `RequireFeature.tsx`
- ✅ Adicionados comentários em `index.css` e `index.tsx`
- ✅ Criado este README

---

## 📞 **Contato & Suporte**

Para dúvidas sobre:
- **Design**: Consulte [DESIGN_RULES.md](DESIGN_RULES.md)
- **Implementação**: Consulte [FASE1_IMPLEMENTACAO.md](FASE1_IMPLEMENTACAO.md)
- **Assembly Lab**: Consulte [ASSEMBLY_LAB_GUIDE.md](ASSEMBLY_LAB_GUIDE.md)

---

**Última Atualização**: 2025-12-16  
**Versão**: 1.0
