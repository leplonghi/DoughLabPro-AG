# 🧪 Guia de Teste: Seletor de Tipo de Farinha

## 🎯 Como Testar a Nova Funcionalidade

### **Passo 1: Acessar o Calculator**
1. Abra o navegador em `http://localhost:5173`
2. Navegue até a página Calculator
3. Escolha qualquer estilo de massa (ex: "Neapolitan Pizza")

### **Passo 2: Localizar o Flour Selector**
O novo componente aparece no **topo da seção "Customize Ingredients" (Step 3)**:
```
┌─────────────────────────────────────────┐
│ Step 3: Customize Ingredients           │
├─────────────────────────────────────────┤
│                                         │
│ Flour Type ◄── NOVO COMPONENTE         │
│ ┌─────────────────────────────────────┐ │
│ │ All-Purpose Flour (Standard)        │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ [Card com informações da farinha]       │
│                                         │
│ Hydration                               │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
└─────────────────────────────────────────┘
```

### **Passo 3: Testar Cenários**

#### **Teste A: Farinha Fraca + Alta Hidratação (ERRO)**
```
1. Selecione: "All-Purpose Flour (Standard)"
   - Proteína: 10.5%
   - Hidratação recomendada: 58% - 65%

2. Ajuste hidratação para: 70%

3. Resultado esperado:
   ┌─────────────────────────────────────┐
   │ ⚠️ Hydration Warning                │
   │                                     │
   │ Warning! Your hydration (70%)       │
   │ exceeds 65% for this flour. Above   │
   │ this level, the dough may become    │
   │ too sticky and difficult to handle  │
   │ - it could turn into soup!          │
   │ Consider reducing hydration or      │
   │ using a stronger flour.             │
   └─────────────────────────────────────┘
   ↑ Fundo VERMELHO
```

#### **Teste B: Farinha Forte + Alta Hidratação (OK)**
```
1. Selecione: "Caputo Nuvola Super"
   - Proteína: 13.5%
   - Força W: 320
   - Hidratação recomendada: 70% - 85%

2. Mantenha hidratação em: 70%

3. Resultado esperado:
   ┌─────────────────────────────────────┐
   │ ✓ Optimal Hydration                 │
   │                                     │
   │ Perfect! Your hydration is within   │
   │ the optimal range (70%-85%) for     │
   │ this flour.                         │
   └─────────────────────────────────────┘
   ↑ Fundo VERDE
```

#### **Teste C: Mudança Dinâmica de Farinha**
```
1. Comece com: "All-Purpose Flour (Standard)"
2. Ajuste hidratação para: 70%
3. Observe: AVISO VERMELHO aparece

4. Mude para: "Caputo Cuoco (Chef)"
   - Hidratação recomendada: 62% - 72%
5. Observe: Aviso muda para VERDE (70% agora está OK!)

6. Mude para: "King Arthur Sir Lancelot"
   - Hidratação recomendada: 68% - 80%
7. Observe: Continua VERDE (farinha ainda mais forte)
```

#### **Teste D: Categorias no Dropdown**
```
1. Clique no dropdown "Flour Type"
2. Verifique se as farinhas estão agrupadas:

   Type 00 (Italian)
   ├─ Caputo Classica (Blue) (11.5% protein)
   ├─ Caputo Pizzeria (Red) (12.5% protein)
   ├─ Caputo Cuoco (Chef) (13% protein)
   ├─ Caputo Nuvola (12.5% protein)
   ├─ Caputo Nuvola Super (13.5% protein)
   ├─ Caputo Manitoba Oro (14% protein)
   └─ Caputo Integrale (12.5% protein)

   Bread Flour
   ├─ King Arthur Bread Flour (12.7% protein)
   ├─ King Arthur Sir Lancelot (14.2% protein)
   └─ ...

   All-Purpose
   ├─ King Arthur All-Purpose (11.7% protein)
   ├─ Bob's Red Mill All-Purpose (11.5% protein)
   └─ All-Purpose Flour (Standard) (10.5% protein)

   Whole Wheat
   └─ ...

   Specialty Flours
   └─ ...
```

#### **Teste E: Card de Informações**
```
Ao selecionar qualquer farinha, verifique se o card mostra:

┌─────────────────────────────────────────┐
│ 📊 Flour Information                    │
│ ┌─────────────┬─────────────────────┐   │
│ │ PROTEIN     │ STRENGTH            │   │
│ │ 12.5%       │ W 260               │   │
│ └─────────────┴─────────────────────┘   │
│                                         │
│ ℹ️ Recommended Hydration Range          │
│    58% - 68%                            │
│                                         │
│ The gold standard for Neapolitan pizza. │
│ Ideal for 24h fermentation.            │
└─────────────────────────────────────────┘
```

---

## 🔍 Checklist de Validação

### **Visual**
- [ ] Dropdown aparece no topo da seção de ingredientes
- [ ] Farinhas estão agrupadas por categoria
- [ ] Cada farinha mostra % de proteína no dropdown
- [ ] Card de informações aparece ao selecionar farinha
- [ ] Avisos de hidratação aparecem com cores corretas:
  - [ ] Verde para hidratação ótima
  - [ ] Azul para hidratação baixa
  - [ ] Vermelho para hidratação alta

### **Funcional**
- [ ] Trocar farinha atualiza o card de informações
- [ ] Trocar farinha recalcula o aviso de hidratação
- [ ] Ajustar hidratação atualiza o aviso dinamicamente
- [ ] Mensagens de aviso mostram valores corretos
- [ ] Ícones corretos aparecem (✓, ℹ️, ⚠️)

### **Responsivo**
- [ ] Componente funciona em desktop
- [ ] Componente funciona em tablet
- [ ] Componente funciona em mobile
- [ ] Dropdown é fácil de usar em touch screens

### **Traduções**
- [ ] Todas as labels estão traduzidas
- [ ] Mensagens de aviso estão em inglês correto
- [ ] Categorias de farinha estão traduzidas
- [ ] Interpolação de valores funciona ({{currentHydration}}, {{min}}, {{max}})

---

## 🐛 Problemas Comuns e Soluções

### **Problema 1: Componente não aparece**
**Sintoma**: Não vejo o dropdown de farinha
**Solução**: 
1. Verifique se chegou no Step 3 (Customize Ingredients)
2. Certifique-se de que selecionou um estilo primeiro
3. Verifique o console do navegador por erros

### **Problema 2: Aviso não atualiza**
**Sintoma**: Mudo a hidratação mas o aviso não muda
**Solução**:
1. Verifique se a farinha tem `hydrationHint` definido
2. Algumas farinhas podem não ter limites definidos
3. Verifique o console por erros de React

### **Problema 3: Dropdown vazio**
**Sintoma**: Dropdown não mostra farinhas
**Solução**:
1. Verifique se `FLOURS` está sendo importado corretamente
2. Verifique o arquivo `src/flours-constants.ts`
3. Limpe o cache do navegador (Ctrl+Shift+R)

### **Problema 4: Traduções não aparecem**
**Sintoma**: Vejo chaves como "calculator.flour_type"
**Solução**:
1. Verifique se o arquivo `public/locales/en/calculator.json` foi atualizado
2. Recarregue a página (F5)
3. Limpe o localStorage se necessário

---

## 📊 Matriz de Testes

| Farinha | Proteína | Hidratação Rec. | Teste 60% | Teste 70% | Teste 80% |
|---------|----------|-----------------|-----------|-----------|-----------|
| All-Purpose (Standard) | 10.5% | 58-65% | ✓ Verde | ⚠️ Vermelho | ⚠️ Vermelho |
| Caputo Pizzeria | 12.5% | 58-68% | ✓ Verde | ⚠️ Vermelho | ⚠️ Vermelho |
| Caputo Cuoco | 13% | 62-72% | ℹ️ Azul | ✓ Verde | ⚠️ Vermelho |
| Caputo Nuvola Super | 13.5% | 70-85% | ℹ️ Azul | ✓ Verde | ✓ Verde |
| King Arthur Sir Lancelot | 14.2% | 68-80% | ℹ️ Azul | ✓ Verde | ✓ Verde |

---

## 🎥 Fluxo de Teste Recomendado

### **Teste Completo (5 minutos)**
```
1. Abrir Calculator
2. Selecionar "Neapolitan Pizza"
3. Ir para Step 3
4. Verificar se Flour Selector aparece
5. Selecionar "All-Purpose Flour (Standard)"
6. Verificar card de informações
7. Ajustar hidratação para 70%
8. Verificar AVISO VERMELHO
9. Mudar para "Caputo Nuvola Super"
10. Verificar mudança para VERDE
11. Testar 3-4 farinhas diferentes
12. Verificar responsividade (redimensionar janela)
13. ✅ Teste completo!
```

---

## 📸 Screenshots Esperados

### **1. Estado Inicial**
- Dropdown fechado
- Card com informações da farinha padrão
- Aviso de hidratação (se aplicável)

### **2. Dropdown Aberto**
- Categorias visíveis
- Farinhas agrupadas
- % de proteína visível

### **3. Aviso Verde**
- Fundo verde claro
- Ícone ✓
- Mensagem "Perfect! Your hydration..."

### **4. Aviso Vermelho**
- Fundo vermelho claro
- Ícone ⚠️
- Mensagem "Warning! ... could turn into soup!"

---

## ✅ Critérios de Sucesso

A implementação está **100% funcional** se:

1. ✅ Dropdown aparece e funciona
2. ✅ Farinhas estão categorizadas
3. ✅ Card de informações mostra dados corretos
4. ✅ Avisos de hidratação aparecem dinamicamente
5. ✅ Cores e ícones estão corretos
6. ✅ Mensagens estão traduzidas
7. ✅ Valores interpolados aparecem corretamente
8. ✅ Componente é responsivo
9. ✅ Sem erros no console
10. ✅ Performance é boa (sem lag)

---

**Última Atualização**: 2025-12-16  
**Status**: Pronto para Teste  
**Próximo Passo**: Validar no navegador e coletar feedback
