# 🎨 Style Definition System

## Visão Geral

Este sistema fornece uma estrutura padronizada para criar e gerenciar definições de estilos de massa no DoughLabPro, garantindo consistência, completude e internacionalização adequada.

## 📋 Estrutura do Schema

Cada estilo deve seguir o schema `StyleDefinition` completo, que inclui:

### Campos Obrigatórios

- **Identificação**: `id`, `title`, `subtitle`, `category`, `family`, `variantName`
- **Origem**: `country`, `region`, `period`
- **Conteúdo Educacional**: `intro`, `history`
- **Perfil Técnico**: `technicalProfile` (hydration, salt, fermentation, oven, etc.)
- **Impactos**: `technicalFoundations`, `doughImpact`, `bakingImpact`
- **Metadados**: `isCanonical`, `source`

### Campos Opcionais (mas Recomendados)

- **Contexto Cultural**: `culturalContext` (significance, consumptionContext, evolution, rituals)
- **Perfil de Sabor**: `flavorProfile` (primaryFlavors, aromaProfile, textureNotes, pairingRecommendations)
- **Variações**: `regionalVariants`, `climateScenarios`, `styleComparisons`
- **Riscos e Notas**: `risks`, `notes`, `parameterSensitivity`
- **Recursos**: `references`, `images`, `diagrams`, `faq`
- **Produtos Afiliados**: `affiliateProducts`, `affiliatePlacementId`

## 🚀 Como Criar um Novo Estilo

### Método 1: Usando o Gerador Interativo (Recomendado)

```bash
npm run generate:style
```

O script irá guiá-lo através de perguntas interativas:

1. **Nome do Estilo**: Ex: "Neapolitan Pizza"
2. **Categoria**: Pizza, Bread, Pastry, etc.
3. **Parâmetros Técnicos**: Hydration, salt, temperature ranges
4. **Dificuldade**: Easy, Medium, Hard, Advanced, Expert
5. **Fonte**: official, user_manual, user_ai

#### O que o gerador cria:

1. **Arquivo TypeScript**: `src/data/styles/{category}/{style_id}.ts`
   - Estrutura completa do estilo
   - Todas as chamadas i18n (`t()`) já configuradas
   
2. **Template i18n**: `{style_id}_i18n_template.json`
   - Todas as chaves necessárias
   - Marcadores `[TODO]` para preencher

### Método 2: Criação Manual

Se preferir criar manualmente:

1. Copie um arquivo de estilo existente como template
2. Renomeie e ajuste o `id`
3. Atualize todas as referências i18n
4. Preencha todos os campos obrigatórios

## 📝 Preenchendo o Conteúdo

### Passo 1: Copiar Chaves i18n

Abra o arquivo `{style_id}_i18n_template.json` gerado e copie todo o conteúdo para:

```
public/locales/en/styles.json
```

### Passo 2: Substituir TODOs

Procure por todos os marcadores `[TODO]` e substitua com conteúdo real:

```json
{
  "neapolitan_pizza": "Neapolitan Pizza",
  "neapolitan_pizza_subtitle": "[TODO: Add subtitle]"  // ❌ Precisa preencher
  "neapolitan_pizza_intro": "Traditional pizza from Naples..."  // ✅ Preenchido
}
```

### Passo 3: Estrutura de Conteúdo

#### Cultural Context (5 items cada)
- **significance**: Importância cultural e tradições
- **consumptionContext**: Ocasiões e contextos de consumo
- **evolution**: Evolução histórica e adaptações modernas
- **rituals**: Rituais ou costumes culturais (3 items)

#### Flavor Profile (5 items cada)
- **primaryFlavors**: Características principais de sabor
- **aromaProfile**: Descritores de aroma
- **textureNotes**: Características de textura
- **pairingRecommendations**: Combinações recomendadas
- **flavorEvolution**: Timeline de desenvolvimento de sabor (3 items)

#### Technical Details (3-5 items cada)
- **technicalFoundations**: Fundamentos técnicos chave
- **doughImpact**: Como o estilo impacta a massa
- **bakingImpact**: Como o estilo impacta o processo de assar
- **parameterSensitivity**: Sensibilidade a parâmetros específicos
- **risks**: Riscos ou armadilhas comuns
- **notes**: Notas gerais

#### Variants & Comparisons (3 items cada)
- **regionalVariants**: Variações regionais
- **climateScenarios**: Ajustes para diferentes climas
- **styleComparisons**: Comparações com estilos similares

#### FAQ (3-5 items)
```json
{
  "neapolitan_faq_1_q": "What makes Neapolitan pizza authentic?",
  "neapolitan_faq_1_a": "Authentic Neapolitan pizza must follow strict guidelines..."
}
```

## ✅ Validação

Após preencher o conteúdo, valide o estilo:

```bash
npm run validate:styles
```

O validador verifica:
- ✓ Todos os campos obrigatórios estão presentes
- ✓ Ranges numéricos são válidos
- ✓ Chaves i18n existem no arquivo de tradução
- ✓ Estrutura está conforme o schema

## 📂 Estrutura de Diretórios

```
src/data/styles/
├── bread/
│   ├── sourdough_classic.ts
│   ├── baguette_traditional.ts
│   └── ...
├── pizza/
│   ├── neapolitan_classic.ts
│   ├── california_style.ts
│   └── ...
├── pastry/
│   ├── croissant_classic.ts
│   └── ...
├── registry.ts          # Registro central de todos os estilos
├── builder.ts           # Helper para criar estilos
└── index.ts             # Exports
```

## 🔧 Registro do Estilo

Após criar e validar, adicione o estilo ao registro:

**`src/data/styles/registry.ts`**:
```typescript
import { neapolitan_classic } from './pizza/neapolitan_classic';

export const STYLE_REGISTRY = {
  // ... existing styles
  'neapolitan_classic': neapolitan_classic,
};
```

## 🎯 Boas Práticas

### 1. Nomenclatura de IDs
- Use snake_case: `neapolitan_classic`, `sourdough_country`
- Seja descritivo mas conciso
- Evite caracteres especiais

### 2. Conteúdo i18n
- Seja específico e educacional
- Use linguagem clara e acessível
- Inclua detalhes técnicos quando relevante
- Cite fontes quando possível

### 3. Parâmetros Técnicos
- Use ranges realistas baseados em pesquisa
- Documente exceções ou variações
- Inclua notas sobre sensibilidade

### 4. Referências
- Sempre cite fontes confiáveis
- Inclua livros, artigos, vídeos
- Prefira fontes primárias quando possível

### 5. FAQ
- Responda perguntas comuns
- Seja prático e direto
- Inclua troubleshooting quando relevante

## 🔍 Exemplo Completo

Veja `src/data/styles/pizza/california_style.ts` como referência de um estilo completamente preenchido.

## 🐛 Troubleshooting

### Erro: "Missing i18n key"
- Verifique se todas as chaves estão em `public/locales/en/styles.json`
- Certifique-se de que não há typos nos nomes das chaves

### Erro: "Invalid range"
- Verifique se min < max em todos os ranges
- Confirme que os valores são números válidos

### Erro: "Missing required field"
- Revise o schema em `src/types/styleDefinition.ts`
- Certifique-se de que todos os campos obrigatórios estão presentes

## 📚 Recursos Adicionais

- **Schema TypeScript**: `src/types/styleDefinition.ts`
- **Builder Helper**: `src/data/styles/builder.ts`
- **Validador**: `scripts/validate-styles.ts`
- **Gerador**: `scripts/generate-style.js`

## 🤝 Contribuindo

Ao adicionar novos estilos:

1. Use o gerador para criar a estrutura
2. Pesquise fontes confiáveis
3. Preencha TODO o conteúdo (não deixe TODOs)
4. Valide antes de commitar
5. Teste no app para garantir que tudo renderiza corretamente

---

**Dúvidas?** Consulte a documentação do schema ou abra uma issue.
