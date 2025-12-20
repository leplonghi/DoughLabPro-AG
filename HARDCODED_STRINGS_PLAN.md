# 🔧 Plano de Correção de Strings Hardcoded

## 📊 Situação Atual

- **Total de arquivos escaneados**: 276
- **Arquivos com strings hardcoded**: 103
- **Total de strings hardcoded**: 457

## 🎯 Estratégia de Correção

### Prioridade 1: Arquivos de UI (User-Facing) - 15 arquivos
Estes são os arquivos que o usuário vê diretamente:

1. **StylesLibrary.tsx** (23 strings) - Biblioteca de estilos
2. **PlansPage.tsx** (11 strings) - Página de planos
3. **TourGuide.tsx** (10 strings) - Tour guiado
4. **CategoryBadge.tsx** (9 strings) - Badges de categoria
5. **IngredientsPage.tsx** (9 strings) - Página de ingredientes
6. **LegalIndexPage.tsx** (8 strings) - Página legal
7. **CreateStyleModal.tsx** (12 strings) - Modal de criação de estilo
8. **AiStyleBuilderModal.tsx** (13 strings) - Modal de AI
9. **DoughbotPage.tsx** (12 strings) - Página do Doughbot
10. **IngredientCreatorModal.tsx** (9 strings) - Modal de criação de ingrediente

### Prioridade 2: Serviços Técnicos (Mensagens de Erro/Status) - 8 arquivos
Strings técnicas mas que aparecem para o usuário:

1. **weatherService.ts** (26 strings) - Descrições de clima
2. **notificationTemplates.ts** (8 strings) - Templates de notificação
3. **exportService.ts** (10 strings) - Serviço de exportação
4. **styleValidation.ts** (14 strings) - Mensagens de validação

### Prioridade 3: Utilitários e Helpers - Baixa prioridade
Strings técnicas internas que raramente aparecem para o usuário.

## ✅ Ação Imediata

Vou criar traduções para os **TOP 10 arquivos de UI** e aplicar automaticamente.

### Arquivos para Migração Imediata:
1. ✅ StylesLibrary.tsx
2. ✅ PlansPage.tsx
3. ✅ TourGuide.tsx
4. ✅ CategoryBadge.tsx
5. ✅ IngredientsPage.tsx
6. ✅ CreateStyleModal.tsx
7. ✅ AiStyleBuilderModal.tsx
8. ✅ DoughbotPage.tsx
9. ✅ IngredientCreatorModal.tsx
10. ✅ weatherService.ts (descrições de clima)

## 📝 Namespace i18n

Vou criar/usar os seguintes namespaces:
- `common.json` - Strings comuns (categorias, regiões, etc.)
- `ui.json` - Elementos de UI
- `errors.json` - Mensagens de erro e validação
- `calculator.json` - Strings da calculadora
- `learn.json` - Strings da seção Learn

## 🚀 Execução

1. Extrair todas as strings dos 10 arquivos prioritários
2. Criar chaves i18n organizadas por namespace
3. Atualizar os arquivos de tradução
4. Substituir strings hardcoded por chamadas t()
5. Testar que nada quebrou

---

**Status**: Pronto para execução
**Tempo Estimado**: 20-30 minutos
**Impacto**: ~150 strings migradas (33% do total)
