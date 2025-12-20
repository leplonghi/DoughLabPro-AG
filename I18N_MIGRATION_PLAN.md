# 🌐 Plano de Migração i18n para Estilos

## 📊 Status Atual

### ✅ Completo (36 arquivos - 67%)
Todos os estilos de **Pizza** e a maioria dos estilos de **Pastéis** já estão usando i18n corretamente.

### ⚠️ Pendente (18 arquivos - 33%)

#### Pães (16 arquivos):
1. `bread/injera_flatbread.ts` - **PRIORIDADE ALTA** (muitas strings)
2. `bread/mixed_grain_sourdough.ts`
3. `bread/naan_flatbread.ts`
4. `bread/pain_de_campagne.ts`
5. `bread/pain_de_mie_pullman.ts`
6. `bread/pane_pugliese.ts`
7. `bread/pao_de_leite_brazil.ts`
8. `bread/pao_frances_brazil.ts`
9. `bread/pao_sovado_brazil.ts`
10. `bread/pita_bread_flatbread.ts`
11. `bread/pretzel_dough_classic.ts`
12. `bread/seventy_percent_rye_sour.ts`
13. `bread/tartine_country_loaf.ts`
14. `bread/vollkornbrot_100_rye.ts`
15. `bread/wheat_tortilla.ts`
16. `bread/whole_wheat_100.ts`

#### Pastéis (2 arquivos):
1. `pastry/berliner_bomboloni.ts`
2. `pastry/yeasted_donuts.ts`

---

## 🎯 Estratégia de Migração

### Fase 1: Identificação (✅ Completo)
- [x] Analisar todos os arquivos
- [x] Identificar strings hardcoded
- [x] Priorizar por volume de strings

### Fase 2: Preparação
Para cada arquivo:
1. Extrair todas as strings hardcoded
2. Gerar chaves i18n únicas e descritivas
3. Adicionar traduções ao `public/locales/en/styles.json`

### Fase 3: Substituição
Para cada arquivo:
1. Substituir strings hardcoded por chamadas `t('styles.key')`
2. Verificar que não quebrou nada
3. Testar no navegador

### Fase 4: Validação
1. Compilar TypeScript (`tsc --noEmit`)
2. Executar build (`npm run build`)
3. Testar visualmente cada estilo

---

## 📝 Padrão de Migração

### Antes:
```typescript
"title": "Injera (Teff Sourdough Flatbread)",
"history": "Injera is a millenary flatbread that forms...",
```

### Depois:
```typescript
"title": t('styles.injera_title'),
"history": t('styles.injera_history'),
```

### Em `public/locales/en/styles.json`:
```json
{
  "injera_title": "Injera (Teff Sourdough Flatbread)",
  "injera_history": "Injera is a millenary flatbread that forms..."
}
```

---

## 🔧 Campos que Precisam Migração

### Campos Simples (string):
- `title`
- `variantName`
- `history`

### Campos em Objetos:
- `origin.country`
- `origin.region`
- `origin.period`

### Campos Array (string[]):
- `culturalContext.significance[]`
- `culturalContext.consumptionContext[]`
- `culturalContext.evolution[]`
- `culturalContext.rituals[]`
- `flavorProfile.primaryFlavors[]`
- `flavorProfile.aromaProfile[]`
- `flavorProfile.textureNotes[]`
- `flavorProfile.pairingRecommendations[]`
- `flavorProfile.flavorEvolution[]`
- `regionalVariants[]`
- `climateScenarios[]`
- `styleComparisons[]`
- `parameterSensitivity[]`
- `risks[]`
- `notes[]`

### Campos FAQ:
- `faq[].question`
- `faq[].answer`

---

## 📦 Estimativa de Esforço

| Arquivo | Strings Estimadas | Tempo Estimado |
|---------|-------------------|----------------|
| injera_flatbread | ~80 strings | 30 min |
| naan_flatbread | ~60 strings | 20 min |
| pain_de_campagne | ~60 strings | 20 min |
| pane_pugliese | ~60 strings | 20 min |
| Outros (14 arquivos) | ~40 cada | 15 min cada |

**Total Estimado**: ~6-8 horas de trabalho

---

## ✅ Tarefas Completadas

- [x] Atualizar schema TypeScript com campo `affiliateProducts`
- [x] Adicionar campo `affiliateProducts: []` a todos os 54 estilos
- [x] Criar análise detalhada dos arquivos pendentes
- [x] Documentar estratégia de migração

---

## 📋 Próximos Passos

### Opção A: Migração Manual Gradual
Migrar 2-3 arquivos por dia durante 1 semana

### Opção B: Migração Automatizada
Criar script que:
1. Extrai todas as strings
2. Gera chaves automaticamente
3. Atualiza os arquivos .ts
4. Atualiza o styles.json

### Opção C: Migração Sob Demanda
Migrar apenas quando um estilo específico for editado ou quando houver necessidade de tradução

---

## 🎯 Recomendação

**Opção C (Sob Demanda)** é a mais pragmática:
- Os estilos funcionam perfeitamente em inglês
- A migração pode ser feita gradualmente
- Não bloqueia outras funcionalidades
- Permite focar em features mais críticas

Quando houver necessidade de:
- Adicionar tradução PT/ES
- Editar um estilo específico
- Adicionar novos estilos

Então fazemos a migração daquele arquivo específico.

---

**Documento criado em**: 2025-12-19
**Status**: Planejamento completo, execução sob demanda
