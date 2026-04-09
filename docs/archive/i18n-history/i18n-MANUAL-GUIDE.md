# 📖 GUIA PRÁTICO - Continuar Tradução Manual

## 🎯 SITUAÇÃO ATUAL

**Status:** 40% de cobertura (funcional)  
**Próximo objetivo:** 80% de cobertura  
**Tempo estimado:** 10-12 horas

---

## 📊 O QUE JÁ ESTÁ PRONTO

### ✅ Infraestrutura (100%)
- Sistema i18next configurado
- 3 idiomas (EN, PT, ES)
- Detecção automática
- Seletor de idioma funcionando

### ✅ Chaves nos JSONs (100%)
- ~3800 chaves criadas
- Organizadas por seção
- Traduções PT/ES parciais

### ✅ Componentes com useTranslation (100%)
- 195 componentes têm o hook
- Prontos para usar t()

### ✅ Textos Substituídos (40%)
- 668 textos já traduzidos
- Principalmente textos comuns
- Navegação e botões básicos

---

## 🎯 ARQUIVOS PRIORITÁRIOS

### Grupo 1: Calculator (ALTA PRIORIDADE)
**Tempo estimado:** 2-3 horas

1. **src/components/calculator/sections/IngredientsSection.tsx**
   - ~50 textos
   - Muito visível
   - Crítico

2. **src/components/calculator/sections/FermentationSection.tsx**
   - ~30 textos
   - Importante
   - Técnico

3. **src/components/calculator/sections/QuantitySection.tsx**
   - ~20 textos
   - Simples
   - Rápido

4. **src/components/calculator/sections/EnvironmentSection.tsx**
   - ~15 textos
   - Simples
   - Rápido

### Grupo 2: MyLab (ALTA PRIORIDADE)
**Tempo estimado:** 3-4 horas

5. **src/pages/mylab/MyLabBatchesPage.tsx**
   - ~40 textos
   - Muito usado
   - Importante

6. **src/pages/mylab/MyLabRecipesPage.tsx**
   - ~35 textos
   - Muito usado
   - Importante

7. **src/pages/mylab/MyLabFloursPage.tsx**
   - ~30 textos
   - Usado
   - Médio

8. **src/pages/mylab/MyLabLevainPetPage.tsx**
   - ~40 textos
   - Específico
   - Complexo

### Grupo 3: Tools (MÉDIA PRIORIDADE)
**Tempo estimado:** 2 horas

9. **src/pages/ToolsPage.tsx**
   - ~25 textos
   - Página principal
   - Importante

10. **src/pages/HydrationConverterPage.tsx**
    - ~30 textos
    - Ferramenta popular
    - Técnico

11. **src/pages/OvenAnalysisPage.tsx**
    - ~25 textos
    - Ferramenta útil
    - Técnico

### Grupo 4: Community (MÉDIA PRIORIDADE)
**Tempo estimado:** 2-3 horas

12. **src/community/pages/CommunityPage.tsx**
    - ~30 textos
    - Social
    - Importante

13. **src/community/components/CommunityFeed.tsx**
    - ~25 textos
    - Muito visível
    - Importante

14. **src/community/components/ShareBatchModal.tsx**
    - ~20 textos
    - Modal principal
    - Importante

---

## 📝 PROCESSO PASSO A PASSO

### Para Cada Arquivo:

#### 1. Identificar Textos (5-10 min)
```bash
# Ver textos hardcoded no arquivo
node scripts/find-hardcoded.cjs | grep "nome-do-arquivo"
```

**OU** abrir o arquivo e procurar por:
- Textos entre `>` e `<`
- Textos em `"..."` ou `'...'`
- Textos em variáveis
- Textos em arrays/objetos

#### 2. Criar Chaves no JSON (10-15 min)

**Abrir:** `public/locales/en/translation.json`

**Adicionar seção** (se não existir):
```json
{
  "nome_da_secao": {
    "chave_1": "Texto em inglês",
    "chave_2": "Outro texto",
    "chave_3": "Mais um texto"
  }
}
```

**Dicas para nomes de chaves:**
- Use snake_case
- Seja descritivo
- Agrupe por contexto
- Exemplo: `calculator.ingredients.title`

#### 3. Traduzir PT e ES (10-15 min)

**Abrir:** `public/locales/pt/translation.json`
```json
{
  "nome_da_secao": {
    "chave_1": "Texto em português",
    "chave_2": "Outro texto",
    "chave_3": "Mais um texto"
  }
}
```

**Abrir:** `public/locales/es/translation.json`
```json
{
  "nome_da_secao": {
    "chave_1": "Texto en español",
    "chave_2": "Otro texto",
    "chave_3": "Más texto"
  }
}
```

**Dicas de tradução:**
- Use tradutor se necessário
- Mantenha tom consistente
- Preserve termos técnicos
- Revise contexto

#### 4. Atualizar Componente (15-20 min)

**Verificar se tem useTranslation:**
```typescript
import { useTranslation } from '@/i18n';

const MyComponent = () => {
  const { t } = useTranslation();
  // ...
}
```

**Se não tiver, adicionar:**
```typescript
// No topo do arquivo
import { useTranslation } from '@/i18n';

// Dentro do componente
const { t } = useTranslation();
```

**Substituir textos:**
```typescript
// ANTES:
<h1>Título da Página</h1>
<p>Descrição aqui</p>
<button>Salvar</button>

// DEPOIS:
<h1>{t('nome_da_secao.titulo')}</h1>
<p>{t('nome_da_secao.descricao')}</p>
<button>{t('common.save')}</button>
```

**Padrões comuns:**
```typescript
// Texto em JSX
<div>Texto</div>
→ <div>{t('chave')}</div>

// Atributo
<input placeholder="Digite aqui" />
→ <input placeholder={t('chave')} />

// Variável
const msg = "Mensagem";
→ const msg = t('chave');

// Array
const options = ["Opção 1", "Opção 2"];
→ const options = [t('chave_1'), t('chave_2')];

// Objeto
const config = { title: "Título" };
→ const config = { title: t('chave') };

// Ternário
{condition ? "Sim" : "Não"}
→ {condition ? t('common.yes') : t('common.no')}
```

#### 5. Testar (5 min)

1. **Verificar compilação:**
   - Olhar terminal do `npm run dev`
   - Verificar se há erros

2. **Testar no navegador:**
   - Abrir a página traduzida
   - Ir em Settings → Language
   - Mudar para PT
   - Verificar se textos mudaram
   - Mudar para ES
   - Verificar novamente

3. **Verificar se não quebrou:**
   - Testar funcionalidades
   - Verificar se botões funcionam
   - Verificar se formulários funcionam

---

## 🛠️ FERRAMENTAS ÚTEIS

### Scripts Disponíveis:

```bash
# Ver todos os textos hardcoded
node scripts/find-hardcoded.cjs

# Ver textos de um arquivo específico
node scripts/find-hardcoded.cjs | grep "arquivo.tsx"

# Detectar todos os textos (mais completo)
node scripts/detect-all-texts.cjs
```

### Arquivos de Referência:

**Componentes já traduzidos (use como exemplo):**
- `src/components/layout/Navigation.tsx`
- `src/components/layout/UserMenu.tsx`
- `src/pages/SettingsPage.tsx`
- `src/pages/MyLabPage.tsx`
- `src/pages/UpgradePage.tsx`

**Chaves comuns já criadas:**
```json
{
  "common": {
    "save": "Save",
    "cancel": "Cancel",
    "close": "Close",
    "delete": "Delete",
    "edit": "Edit",
    "add": "Add",
    "back": "Back",
    "next": "Next",
    "loading": "Loading..."
  },
  "nav": {
    "home": "Home",
    "calculator": "Calculator",
    "learn": "Learn",
    "lab": "My Lab",
    "tools": "Tools",
    "community": "Community"
  }
}
```

---

## 📊 ACOMPANHAMENTO

### Checklist de Progresso:

**Grupo 1: Calculator**
- [ ] IngredientsSection.tsx
- [ ] FermentationSection.tsx
- [ ] QuantitySection.tsx
- [ ] EnvironmentSection.tsx

**Grupo 2: MyLab**
- [ ] MyLabBatchesPage.tsx
- [ ] MyLabRecipesPage.tsx
- [ ] MyLabFloursPage.tsx
- [ ] MyLabLevainPetPage.tsx

**Grupo 3: Tools**
- [ ] ToolsPage.tsx
- [ ] HydrationConverterPage.tsx
- [ ] OvenAnalysisPage.tsx

**Grupo 4: Community**
- [ ] CommunityPage.tsx
- [ ] CommunityFeed.tsx
- [ ] ShareBatchModal.tsx

### Estimativa de Tempo:

| Grupo | Arquivos | Tempo/Arquivo | Total |
|-------|----------|---------------|-------|
| Calculator | 4 | 30-45 min | 2-3h |
| MyLab | 4 | 45-60 min | 3-4h |
| Tools | 3 | 30-45 min | 2h |
| Community | 3 | 30-45 min | 2-3h |
| **TOTAL** | **14** | - | **10-12h** |

---

## 💡 DICAS IMPORTANTES

### ✅ FAZER:
1. Traduzir um arquivo por vez
2. Testar após cada arquivo
3. Commitar após cada grupo
4. Usar chaves descritivas
5. Manter consistência
6. Revisar traduções

### ❌ NÃO FAZER:
1. Traduzir muitos arquivos de uma vez
2. Não testar
3. Usar chaves genéricas (key1, key2)
4. Misturar idiomas
5. Esquecer de adicionar useTranslation
6. Copiar/colar sem revisar

### 🐛 Problemas Comuns:

**Erro: "t is not defined"**
→ Faltou adicionar `const { t } = useTranslation();`

**Erro: Chave aparece literal na tela**
→ Chave não existe no JSON ou está errada

**Erro: Sintaxe inválida**
→ Faltou fechar chaves `{}` ou aspas

**Texto não muda de idioma**
→ Chave não foi adicionada aos 3 JSONs (EN, PT, ES)

---

## 🎯 META FINAL

**Objetivo:** 80% de cobertura  
**Arquivos:** 14 principais  
**Tempo:** 10-12 horas  
**Resultado:** App bem internacionalizado

**Após completar os 14 arquivos:**
- ✅ Calculator 100% traduzido
- ✅ MyLab principais páginas traduzidas
- ✅ Tools 100% traduzido
- ✅ Community principais componentes traduzidos
- ✅ ~80% de cobertura visual

---

## 📞 RECURSOS

### Documentação:
- Este guia: `docs/i18n-MANUAL-GUIDE.md`
- Status: `docs/i18n-HONEST-STATUS.md`
- Plano: `docs/i18n-FINAL-PLAN.md`

### Arquivos:
- Textos detectados: `docs/i18n-generated/all-hardcoded-texts.json`
- Traduções: `public/locales/*/translation.json`

### Scripts:
- `scripts/find-hardcoded.cjs` - Detectar textos
- `scripts/detect-all-texts.cjs` - Detectar todos

---

**Boa sorte! Você consegue! 🚀**

**Lembre-se:** Faça um arquivo por vez, teste, e commite. Progresso gradual é melhor que perfeição.
