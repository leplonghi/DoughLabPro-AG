# ⚡ QUICK REFERENCE - Preenchimento Rápido de Estilos

## 🎯 CHECKLIST RÁPIDO

Para cada estilo, preencha na ordem:

1. ✅ **culturalContext** (21 pontos)
2. ✅ **flavorProfile** (24 pontos)  
3. ✅ **doughImpact** (5 pontos)
4. ✅ **bakingImpact** (5 pontos)
5. ✅ **regionalVariants** (4-5 pontos)
6. ✅ **climateScenarios** (4 pontos)
7. ✅ **styleComparisons** (4 pontos)
8. ✅ **parameterSensitivity** (5 pontos)
9. ✅ **risks** (5 pontos)
10. ✅ **notes** (5 pontos)
11. ✅ **faq** (5 perguntas)
12. ✅ **references** (3-4 refs com URLs)

---

## 📝 TEMPLATE MÍNIMO

```typescript
"culturalContext": {
  "significance": ["1", "2", "3", "4", "5"],
  "consumptionContext": ["1", "2", "3", "4", "5"],
  "evolution": ["1", "2", "3", "4", "5", "6"],
  "rituals": ["1", "2", "3", "4", "5"]
},
"flavorProfile": {
  "primaryFlavors": ["1", "2", "3", "4", "5"],
  "aromaProfile": ["1", "2", "3", "4", "5"],
  "textureNotes": ["1", "2", "3", "4", "5"],
  "pairingRecommendations": ["1", "2", "3", "4", "5"],
  "flavorEvolution": ["1", "2", "3", "4"]
},
"doughImpact": ["1", "2", "3", "4", "5"],
"bakingImpact": ["1", "2", "3", "4", "5"],
"regionalVariants": ["1", "2", "3", "4"],
"climateScenarios": [
  "Hot/Humid (>25°C, >70% RH): ...",
  "Cold/Dry (<15°C, <40% RH): ...",
  "Tropical: ...",
  "High Altitude (>1500m): ..."
],
"styleComparisons": ["vs. A: ...", "vs. B: ...", "vs. C: ...", "vs. D: ..."],
"parameterSensitivity": ["Critical: ...", "Highly sensitive: ...", "3", "4", "5"],
"risks": ["Risk 1: cause + solution", "2", "3", "4", "5"],
"notes": ["1", "2", "3", "4", "5"],
"faq": [
  {"question": "Q1?", "answer": "A1"},
  {"question": "Q2?", "answer": "A2"},
  {"question": "Q3?", "answer": "A3"},
  {"question": "Q4?", "answer": "A4"},
  {"question": "Q5?", "answer": "A5"}
],
"references": [
  {"title": "Ref 1", "url": "https://...", "author": "Author", "year": 2021},
  {"title": "Ref 2", "url": "https://...", "author": "Author", "year": 2020},
  {"title": "Ref 3", "url": "https://...", "author": "Author", "year": 2019}
]
```

---

## 📚 REFERÊNCIAS RÁPIDAS POR CATEGORIA

### **PIZZAS**
```typescript
{
  "title": "Modernist Pizza",
  "url": "https://modernistcuisine.com/books/modernist-pizza/",
  "author": "Nathan Myhrvold, Francisco Migoya",
  "year": 2021
},
{
  "title": "The Pizza Bible",
  "url": "https://www.amazon.com/Pizza-Bible-Worlds-Favorite-Styles/dp/1607746267",
  "author": "Tony Gemignani",
  "year": 2014
}
```

### **PÃES**
```typescript
{
  "title": "Bread: A Baker's Book",
  "url": "https://www.amazon.com/Bread-Bakers-Book-Techniques-Recipes/dp/1118132718",
  "author": "Jeffrey Hamelman",
  "year": 2012
},
{
  "title": "Modernist Bread",
  "url": "https://modernistcuisine.com/books/modernist-bread/",
  "author": "Nathan Myhrvold, Francisco Migoya",
  "year": 2017
}
```

### **PASTRIES**
```typescript
{
  "title": "Ferrandi Paris: Professional Baking",
  "url": "https://www.amazon.com/Ferrandi-Paris-Professional-Baking-Fundamentals/dp/2080203266",
  "author": "Ferrandi Paris",
  "year": 2021
},
{
  "title": "The Art of French Pastry",
  "url": "https://www.amazon.com/Art-French-Pastry-Jacquy-Pfeiffer/dp/0307959139",
  "author": "Jacquy Pfeiffer",
  "year": 2013
}
```

---

## 🎨 PALAVRAS-CHAVE POR CAMPO

### **culturalContext.significance**
- "Symbol of [cultural identity]"
- "Represents [tradition/innovation]"
- "Protected by [law/UNESCO]"
- "Icon of [region/cuisine]"
- "Embodies [values/heritage]"

### **flavorProfile.primaryFlavors**
- Descritores: sweet, salty, sour, bitter, umami
- Intensidade: subtle, mild, moderate, strong, intense
- Origem: from [ingredient], due to [process]

### **flavorProfile.aromaProfile**
- toasted, caramelized, fermented, yeasty
- nutty, buttery, smoky, charred
- fresh, herbaceous, floral, fruity

### **flavorProfile.textureNotes**
- Crust: crispy, crunchy, flaky, tender, chewy
- Interior: soft, airy, dense, moist, dry
- Overall: light, substantial, delicate, hearty

---

## ⚠️ ERROS COMUNS A EVITAR

❌ **NÃO:**
- Deixar campos vazios
- Usar descrições genéricas ("é bom", "é importante")
- Copiar/colar sem adaptar
- Esquecer URLs nas referências
- FAQs muito curtas (< 2 frases)

✅ **SIM:**
- Preencher TODOS os campos
- Ser específico e técnico
- Adaptar para cada estilo
- URLs completas e funcionais
- FAQs detalhadas (3-5 frases)

---

## 🚀 WORKFLOW EFICIENTE

**Tempo total por estilo: 1.5-2h**

1. **Pesquisa (30-45 min)**
   - Leia sobre história e cultura
   - Busque informações técnicas
   - Encontre referências confiáveis

2. **Preenchimento (45-60 min)**
   - culturalContext + flavorProfile (30 min)
   - Campos técnicos (20 min)
   - FAQ + references (15 min)

3. **Validação (15-20 min)**
   - Checklist de qualidade
   - TypeScript compila?
   - Conteúdo faz sentido?

---

## 📊 ESTILOS PRIORITÁRIOS

### **Alta Prioridade (populares)**
1. california_style.ts
2. sicilian_grandma_pan.ts
3. ciabatta_high_hydration.ts
4. focaccia_genovese.ts
5. pain_au_chocolat.ts

### **Média Prioridade (importantes)**
6. roman_teglia_pan.ts
7. new_haven_apizza.ts
8. tartine_country_loaf.ts
9. panettone_artisanal.ts
10. cinnamon_rolls_classic.ts

### **Baixa Prioridade (específicos)**
- Estilos regionais menos conhecidos
- Variações específicas
- Estilos muito similares a outros

---

## 💡 DICAS FINAIS

✅ **Use os 7 estilos completos como referência**
✅ **Mantenha consistência no tom**
✅ **Seja técnico mas acessível**
✅ **Valide informações**
✅ **Teste se é útil para usuários**

---

**Arquivo criado:** 2025-12-19  
**Para uso com:** STYLE_COMPLETION_GUIDE.md  
**Veja exemplos em:** STYLE_EXAMPLES.md
