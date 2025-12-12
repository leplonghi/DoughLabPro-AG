# 🤖 Scripts de Automação i18n

## Visão Geral

Criei 2 scripts poderosos para automatizar a tradução do app:

1. **i18n-helper.js** - Analisa um arquivo individual
2. **i18n-batch.js** - Processa múltiplos arquivos de uma vez

## 📋 Pré-requisitos

Os scripts usam apenas Node.js nativo, sem dependências extras!

## 🔧 Script 1: i18n-helper.js

### O que faz:
- Analisa um arquivo .tsx individual
- Detecta textos hardcoded
- Sugere chaves de tradução
- Gera código de exemplo
- Cria JSON para os arquivos de tradução

### Como usar:

```bash
# Analisar um arquivo específico
node scripts/i18n-helper.js src/pages/ToolsPage.tsx

# Analisar um componente
node scripts/i18n-helper.js src/components/ui/Button.tsx
```

### Exemplo de saída:

```
🔍 Analisando: src/pages/ToolsPage.tsx

📝 Encontrados 5 textos hardcoded:

  "Professional Tools"
  → t('tools_page.professional_tools')

  "Precision calculators"
  → t('tools_page.precision_calculators')

📋 Código sugerido:

// 1. Importar
import { useTranslation } from '@/i18n';

// 2. No componente
const { t } = useTranslation();

// 3. Substituir textos:
// "Professional Tools" → {t('tools_page.professional_tools')}

📦 JSON para adicionar:

"tools_page": {
  "professional_tools": "Professional Tools",
  "precision_calculators": "Precision calculators"
}

💾 Relatório salvo em: docs/i18n-analysis.md
```

## 🚀 Script 2: i18n-batch.js (RECOMENDADO)

### O que faz:
- Processa TODOS os arquivos .tsx em um diretório
- Extrai textos de múltiplos arquivos
- Gera arquivo JSON consolidado
- Cria relatório detalhado
- Mostra estatísticas

### Como usar:

```bash
# Processar todas as páginas
node scripts/i18n-batch.js src/pages

# Processar páginas do MyLab
node scripts/i18n-batch.js src/pages/mylab

# Processar componentes UI
node scripts/i18n-batch.js src/components/ui

# Processar páginas Learn
node scripts/i18n-batch.js src/pages/learn
```

### Exemplo de saída:

```
🔍 Processando diretório: src/pages/mylab

📁 Encontrados 8 arquivos

📝 MyLabBakesPage - 12 textos encontrados
📝 MyLabRecipesPage - 8 textos encontrados
⏭️  MyLabPage - Já traduzido
✅ MyLabLayout - Sem textos hardcoded

📦 Gerando arquivos de tradução...

✅ Chaves EN: docs/i18n-generated/keys-en.json
✅ Relatório: docs/i18n-generated/batch-report.md

📊 Estatísticas:

  mylab_bakes_page: 12 chaves
  mylab_recipes_page: 8 chaves
  mylab_timeline_page: 15 chaves

✨ Concluído!
```

## 📊 Workflow Recomendado

### Passo 1: Processar em Lote
```bash
# Processar todas as páginas de uma vez
node scripts/i18n-batch.js src/pages
```

### Passo 2: Revisar Chaves Geradas
```bash
# Abrir o arquivo gerado
code docs/i18n-generated/keys-en.json
```

### Passo 3: Traduzir
1. Copiar chaves do `keys-en.json`
2. Adicionar ao `public/locales/en/translation.json`
3. Traduzir para PT em `public/locales/pt/translation.json`
4. Traduzir para ES em `public/locales/es/translation.json`

### Passo 4: Atualizar Componentes
Use o padrão do MyLabPage como exemplo:

```typescript
// 1. Importar
import { useTranslation } from '@/i18n';

// 2. Hook
const { t } = useTranslation();

// 3. Substituir
<h1>{t('section.key')}</h1>
```

## 🎯 Casos de Uso

### Caso 1: Traduzir Seção Learn Completa
```bash
# Processar todas as páginas Learn
node scripts/i18n-batch.js src/pages/learn

# Isso vai gerar ~80 arquivos de chaves!
```

### Caso 2: Traduzir Componentes UI
```bash
# Processar componentes
node scripts/i18n-batch.js src/components/ui
```

### Caso 3: Analisar Arquivo Específico
```bash
# Para análise detalhada de um arquivo
node scripts/i18n-helper.js src/pages/ProfilePage.tsx
```

## 📁 Arquivos Gerados

Os scripts criam arquivos em:

```
docs/
├── i18n-analysis.md          # Relatório do helper
└── i18n-generated/
    ├── keys-en.json           # Chaves geradas (batch)
    └── batch-report.md        # Relatório detalhado (batch)
```

## ⚡ Dicas Pro

### 1. Processar por Seção
Não processe tudo de uma vez. Faça por seção:

```bash
# Dia 1: MyLab
node scripts/i18n-batch.js src/pages/mylab

# Dia 2: Tools
node scripts/i18n-batch.js src/pages/tools

# Dia 3: Learn
node scripts/i18n-batch.js src/pages/learn
```

### 2. Revisar Antes de Adicionar
As chaves geradas são sugestões. Revise antes de adicionar aos arquivos de tradução.

### 3. Usar com Git
```bash
# Criar branch para i18n
git checkout -b feature/i18n-batch-1

# Processar
node scripts/i18n-batch.js src/pages/mylab

# Commit
git add .
git commit -m "feat: add i18n keys for MyLab section"
```

### 4. Ignorar Arquivos Já Traduzidos
O script automaticamente pula arquivos que já usam `useTranslation`.

## 🐛 Troubleshooting

### Erro: "glob is not defined"
O script usa apenas Node.js nativo. Se der erro com `glob`, substitua por:

```javascript
const fs = require('fs');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
```

### Textos Não Detectados
O script detecta padrões comuns. Se algum texto não for detectado:
1. Verifique se está em formato JSX válido
2. Use o helper individual para análise mais detalhada
3. Adicione manualmente se necessário

## 📈 Progresso Esperado

Com esses scripts, você pode:

- ✅ Processar 10-20 arquivos em segundos
- ✅ Gerar 100+ chaves de tradução automaticamente
- ✅ Ter relatórios detalhados de cada seção
- ✅ Economizar horas de trabalho manual

## 🎉 Exemplo Completo

```bash
# 1. Processar páginas MyLab
node scripts/i18n-batch.js src/pages/mylab

# 2. Abrir arquivo gerado
code docs/i18n-generated/keys-en.json

# 3. Copiar chaves para translation files
# (manual)

# 4. Traduzir componentes
# (usar padrão do MyLabPage)

# 5. Testar
npm run dev
# Ir em Settings > Mudar idioma
```

## 📝 Notas

- Os scripts são **não-destrutivos** - apenas analisam e geram sugestões
- Você tem controle total sobre quais chaves adicionar
- Use como ferramenta de auxílio, não substituição completa
- Revise sempre as chaves geradas antes de usar

## 🚀 Próximos Passos

1. Execute o batch script em `src/pages`
2. Revise as chaves geradas
3. Adicione aos arquivos de tradução
4. Atualize os componentes
5. Teste mudando o idioma

**Boa sorte com a tradução! 🌍**
