# 🎯 Plano Pragmático de Tradução - DoughLabPro

## ✅ Progresso Atual (10 componentes traduzidos)

1. Navigation ✅
2. UserMenu ✅
3. SettingsPage ✅
4. DoughStylesPage ✅
5. StyleSection ✅
6. ResultsDisplay ✅
7. PaywallModal ✅
8. MyLabPage ✅
9. UpgradePage ✅
10. **CalculatorForm** ✅ (ACABEI DE FAZER)

## 🎯 Próximos 10 Componentes Prioritários

Estes são os componentes que o usuário mais vê:

### Grupo 1: Calculator (5 componentes)
11. ⏳ IngredientsSection.tsx
12. ⏳ FermentationSection.tsx
13. ⏳ QuantitySection.tsx
14. ⏳ EnvironmentSection.tsx
15. ⏳ CalculatorPage.tsx

### Grupo 2: Core Pages (5 componentes)
16. ⏳ ToolsPage.tsx
17. ⏳ HelpPage.tsx
18. ⏳ ProfilePage.tsx
19. ⏳ FloursPage.tsx
20. ⏳ BatchDetailPage.tsx

## 📊 Estimativa

- **Componentes traduzidos**: 10/100 (10%)
- **Componentes prioritários**: 20/100 (20%)
- **Tempo estimado**: 2-3 horas para os próximos 10

## 🚀 Ação Recomendada

**Opção A: Eu continuo agora**
- Traduzir os próximos 5-10 componentes
- Focar no Calculator e páginas principais
- Tempo: 1-2 horas

**Opção B: Você continua depois**
- Usar o padrão que estabeleci
- Seguir o guia em `docs/i18n-implementation-guide.md`
- Usar as chaves que já estão prontas

## 📝 Template para Você Usar

Para qualquer componente:

```typescript
// 1. Adicionar import
import { useTranslation } from '@/i18n';

// 2. Adicionar hook
const { t } = useTranslation();

// 3. Substituir textos
// Antes: <h1>Title</h1>
// Depois: <h1>{t('section.title')}</h1>
```

## 🎯 Meta Realista

**Curto Prazo**: 20 componentes traduzidos (20%)
**Médio Prazo**: 50 componentes traduzidos (50%)
**Longo Prazo**: 100 componentes traduzidos (100%)

---

**Status Atual**: 10/100 componentes (10%) ✅  
**Chaves**: 1337/1337 (100%) ✅  
**Próximo**: Continuar com Calculator sections
