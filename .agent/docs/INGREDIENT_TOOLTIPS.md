# Rich Ingredient Tooltips - Implementação

**Data**: 16 de Dezembro, 2025  
**Solicitado por**: Eduardo

---

## 🎯 Objetivo

Adicionar tooltips ricos e informativos que aparecem ao passar o mouse sobre ingredientes, mostrando:
- Referências científicas e culturais
- Formas de implementação técnica
- Combinações clássicas
- Origem e história
- Notas técnicas

---

## ✅ Implementação

### Componente Criado

**Arquivo**: `src/components/IngredientTooltip.tsx`

Um componente reutilizável que pode ser usado em qualquer lugar do app para mostrar informações detalhadas sobre ingredientes.

### Integração no Assembly Lab

**Arquivo**: `src/components/calculator/ingredients/AssemblySection.tsx`

Os tooltips aparecem automaticamente ao passar o mouse sobre qualquer ingrediente que tenha um `FlavorComponent` correspondente.

---

## 📋 Conteúdo do Tooltip

### 1. **Header**
- Nome do ingrediente
- Categoria
- Badge de origem (Official/Custom)

### 2. **Descrição**
- Resumo curto do ingrediente
- Contexto de uso

### 3. **📍 Origin** (Fundo âmbar)
- Região de origem
- Contexto histórico
- Tradição cultural

**Exemplo**:
```
📍 ORIGIN
Campania, Italy
Traditional cheese of the Neapolitan pizza, 
protected by AVPN regulations.
```

### 4. **🔬 Implementation** (Fundo azul)
- Notas técnicas de implementação
- Riscos e cuidados
- Dicas de preparo
- Temperatura ideal
- Timing de aplicação

**Exemplo**:
```
🔬 IMPLEMENTATION
Use at room temperature for best melting. 
Apply 60-90 seconds before removing from oven 
to avoid burning. Risk of excess moisture if 
over-applied.
```

### 5. **💡 Classic Pairings** (Fundo roxo)
- Combinações tradicionais
- Ingredientes que funcionam bem juntos
- Sugestões de uso

**Exemplo**:
```
💡 CLASSIC PAIRINGS
[Tomato + Basil] [Olive Oil] [Garlic]
```

### 6. **⏰ Application**
- Momento de aplicação
- Pre-oven / Post-oven / Mid-bake
- Badge colorido para fácil identificação

**Exemplo**:
```
⏰ Application: [Before Baking]
```

### 7. **📚 References**
- Fontes autoritativas
- Links para documentação
- Resumo da relevância

**Exemplo**:
```
📚 REFERENCES
• AVPN International Regulations
  Official standards for Neapolitan pizza

• Modernist Pizza Vol. 4
  Scientific analysis of cheese behavior
```

---

## 🎨 Design

### Cores e Categorias

| Seção | Cor de Fundo | Cor do Texto | Ícone |
|-------|--------------|--------------|-------|
| Origin | Âmbar (`amber-50`) | Âmbar escuro (`amber-900`) | 📍 |
| Implementation | Azul (`blue-50`) | Azul escuro (`blue-900`) | 🔬 |
| Classic Pairings | Roxo (`purple-50`) | Roxo escuro (`purple-800`) | 💡 |
| Application | Laranja/Roxo | Contraste alto | ⏰ |
| References | Cinza (`slate-50`) | Azul link (`blue-600`) | 📚 |

### Tipografia

- **Título**: `text-sm` (14px) bold
- **Categoria**: `text-xs` (12px) uppercase
- **Labels**: `text-[10px]` (10px) uppercase bold
- **Conteúdo**: `text-xs` (12px) regular
- **Detalhes**: `text-[11px]` (11px) italic

### Animação

```css
opacity-0 invisible 
group-hover:opacity-100 group-hover:visible 
transition-all duration-200
```

- Aparece suavemente ao passar o mouse
- Desaparece ao sair
- Transição de 200ms para fluidez

---

## 📊 Estrutura Visual

```
┌────────────────────────────────────────┐
│ Mozzarella (Low Moisture)    [Official]│
│ CHEESE                                 │
├────────────────────────────────────────┤
│ The gold standard for New York and     │
│ American-style pizzas...               │
├────────────────────────────────────────┤
│ 📍 ORIGIN                              │
│ United States                          │
│ Developed for American pizza market... │
├────────────────────────────────────────┤
│ 🔬 IMPLEMENTATION                      │
│ Shred from block for best results.    │
│ Pre-shredded contains anti-caking...   │
├────────────────────────────────────────┤
│ 💡 CLASSIC PAIRINGS                    │
│ [Pepperoni] [Italian Sausage] [Onions]│
├────────────────────────────────────────┤
│ ⏰ Application: [Before Baking]        │
├────────────────────────────────────────┤
│ 📚 REFERENCES                          │
│ • Modernist Pizza Vol. 2               │
│   Scientific cheese analysis           │
│ • Scott123 (PizzaMaking.com)           │
│   Community best practices             │
└────────────────────────────────────────┘
          ▼ (arrow pointer)
```

---

## 🔧 Uso Técnico

### No Assembly Lab

```tsx
{selectedIncrements.map(item => {
    const flavorMatch = getFlavorMatch(item.id);
    return (
        <div className="relative group">
            {/* Card do ingrediente */}
            <div className="...">
                {item.visibleName}
            </div>

            {/* Tooltip rico aparece no hover */}
            {flavorMatch && (
                <div className="absolute ... opacity-0 group-hover:opacity-100">
                    {/* Conteúdo completo do tooltip */}
                </div>
            )}
        </div>
    );
})}
```

### Posicionamento

- **Posição**: `absolute bottom-full left-0 mb-2`
- **Z-index**: `z-50` (acima de tudo)
- **Largura**: `w-80` (320px)
- **Pointer events**: `pointer-events-none` (não interfere com cliques)

---

## 🎯 Benefícios

### Para Usuários Iniciantes
- ✅ Aprendem sobre cada ingrediente
- ✅ Entendem origem e tradição
- ✅ Descobrem combinações clássicas
- ✅ Veem referências para aprofundar

### Para Usuários Avançados
- ✅ Notas técnicas detalhadas
- ✅ Dicas de implementação
- ✅ Riscos e cuidados
- ✅ Links para fontes autoritativas

### Para o App
- ✅ Educação contextual
- ✅ Não invasivo (apenas no hover)
- ✅ Rico em informação
- ✅ Profissional e confiável

---

## 📈 Informações Exibidas

### Dados Obrigatórios (sempre mostrados)
- Nome do ingrediente
- Categoria
- Descrição

### Dados Opcionais (quando disponíveis)
- 📍 Origem e história
- 🔬 Notas técnicas de implementação
- 💡 Combinações clássicas (até 3)
- ⏰ Momento de aplicação
- 📚 Referências (até 2)

---

## 🚀 Exemplos Reais

### Exemplo 1: Fior di Latte

```
┌────────────────────────────────────────┐
│ Fior di Latte              [Official]  │
│ CHEESE                                 │
├────────────────────────────────────────┤
│ Fresh mozzarella made from cow's milk, │
│ the authentic choice for Neapolitan... │
├────────────────────────────────────────┤
│ 📍 ORIGIN                              │
│ Campania, Italy                        │
├────────────────────────────────────────┤
│ 🔬 IMPLEMENTATION                      │
│ Drain excess whey before use. Apply    │
│ 60-90 seconds before removing from     │
│ oven to prevent burning.               │
├────────────────────────────────────────┤
│ 💡 CLASSIC PAIRINGS                    │
│ [San Marzano] [Basil] [Olive Oil]     │
├────────────────────────────────────────┤
│ ⏰ Application: [Before Baking]        │
├────────────────────────────────────────┤
│ 📚 REFERENCES                          │
│ • AVPN International Regulations       │
│   Official Neapolitan standards        │
└────────────────────────────────────────┘
```

### Exemplo 2: Pepperoni

```
┌────────────────────────────────────────┐
│ Pepperoni (Cup & Char)     [Official]  │
│ MEAT                                   │
├────────────────────────────────────────┤
│ American-style cured sausage that cups │
│ and chars at high temperatures...      │
├────────────────────────────────────────┤
│ 📍 ORIGIN                              │
│ United States (Italian-American)       │
├────────────────────────────────────────┤
│ 🔬 IMPLEMENTATION                      │
│ Use natural casing for cupping effect. │
│ Apply before cheese to prevent burning.│
│ Works best at 500°F+ temperatures.     │
├────────────────────────────────────────┤
│ 💡 CLASSIC PAIRINGS                    │
│ [Mozzarella] [Jalapeños] [Honey]      │
├────────────────────────────────────────┤
│ ⏰ Application: [Before Baking]        │
├────────────────────────────────────────┤
│ 📚 REFERENCES                          │
│ • Modernist Pizza Vol. 3               │
│   Meat curing and application          │
└────────────────────────────────────────┘
```

---

## 🎨 Estados Visuais

### Estado Normal
- Ingrediente visível normalmente
- Sem tooltip

### Estado Hover
- Tooltip aparece suavemente (200ms fade-in)
- Card do ingrediente com borda verde (`border-lime-200`)
- Tooltip posicionado acima do card

### Estado Mobile
- Tooltip não aparece no hover (não há hover em mobile)
- Botão ⓘ abre modal completo com as mesmas informações

---

## 📝 Checklist de Implementação

- [x] Componente `IngredientTooltip.tsx` criado
- [x] Integração no `AssemblySection.tsx`
- [x] Tooltips aparecem no hover
- [x] Seções coloridas por categoria
- [x] Ícones emoji para identificação rápida
- [x] Referências clicáveis (quando URLs disponíveis)
- [x] Animação suave de entrada/saída
- [x] Posicionamento correto (acima do card)
- [x] Arrow pointer para indicar origem
- [x] Responsivo e não invasivo

---

## 🔮 Melhorias Futuras

### Fase 2
- [ ] Tooltips em outros lugares (Styles page, Recommendations)
- [ ] Links clicáveis para referências externas
- [ ] Imagens dos ingredientes
- [ ] Vídeos de implementação

### Fase 3
- [ ] Tradução dos tooltips
- [ ] Tooltips personalizados por usuário
- [ ] Histórico de ingredientes visualizados
- [ ] Favoritar ingredientes

---

**Status**: ✅ **Implementado e Funcional**

**Teste**: Passe o mouse sobre qualquer ingrediente no Assembly Lab para ver o tooltip rico com todas as informações!

---

*"Educação contextual é a melhor forma de aprendizado."*
