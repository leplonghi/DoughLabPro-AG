# 🎨 Guia Rápido: Sistema de Estilos

## 🚀 Criando um Novo Estilo em 3 Passos

### Passo 1: Gerar a Estrutura

```bash
npm run generate:style
```

O script vai te fazer algumas perguntas:
- Nome do estilo (ex: "Pizza Napolitana")
- Categoria (Pizza, Pão, Massa Doce, etc.)
- Parâmetros técnicos (hidratação, sal, temperatura)
- Dificuldade (Fácil, Médio, Difícil, etc.)

**Resultado**: 
- ✅ Arquivo TypeScript criado em `src/data/styles/{categoria}/{id}.ts`
- ✅ Template i18n criado em `{id}_i18n_template.json`

### Passo 2: Adicionar Traduções

1. Abra o arquivo `{id}_i18n_template.json` gerado
2. Copie TODO o conteúdo
3. Cole em `public/locales/en/styles.json`

### Passo 3: Preencher Conteúdo

**Opção A - Manual:**
Abra `public/locales/en/styles.json` e substitua todos os `[TODO]` com conteúdo real.

**Opção B - Interativo:**
```bash
npm run fill:style -- nome_do_estilo
```

Este script te guia interativamente por cada campo TODO.

## 📋 Estrutura de Conteúdo

### Informações Básicas
- **title**: Nome do estilo
- **subtitle**: Descrição curta
- **intro**: Introdução (2-3 frases)
- **history**: História completa (4-5 frases)

### Contexto Cultural (5 itens cada)
- **significance**: Importância cultural
- **consumptionContext**: Quando/onde é consumido
- **evolution**: Evolução histórica
- **rituals**: Rituais culturais (3 itens)

### Perfil de Sabor (5 itens cada)
- **primaryFlavors**: Sabores principais
- **aromaProfile**: Perfil aromático
- **textureNotes**: Notas de textura
- **pairingRecommendations**: Harmonizações
- **flavorEvolution**: Evolução do sabor (3 itens)

### Detalhes Técnicos (3-5 itens cada)
- **technicalFoundations**: Fundamentos técnicos (3)
- **doughImpact**: Impacto na massa (5)
- **bakingImpact**: Impacto no forno (5)
- **parameterSensitivity**: Sensibilidade a parâmetros (3)
- **risks**: Riscos comuns (3)
- **notes**: Notas importantes (3)

### Variações (3 itens cada)
- **regionalVariants**: Variações regionais
- **climateScenarios**: Ajustes climáticos
- **styleComparisons**: Comparações com outros estilos

### FAQ (3-5 pares)
```json
{
  "estilo_faq_1_q": "Pergunta aqui?",
  "estilo_faq_1_a": "Resposta detalhada aqui."
}
```

## ✅ Validação

Após preencher, valide:

```bash
npm run validate:styles
```

O validador verifica:
- ✓ Campos obrigatórios presentes
- ✓ Ranges numéricos válidos
- ✓ Chaves i18n existem
- ✓ Estrutura correta

## 📝 Exemplo Prático

### 1. Gerar
```bash
npm run generate:style
# Nome: Pizza Margherita
# Categoria: Pizza
# Hydration: 60-65%
# Dificuldade: Medium
```

### 2. Resultado
```
✓ Criado: src/data/styles/pizza/pizza_margherita.ts
✓ Template: pizza_margherita_i18n_template.json
```

### 3. Copiar i18n
```bash
# Copie o conteúdo de pizza_margherita_i18n_template.json
# Cole em public/locales/en/styles.json
```

### 4. Preencher
```bash
npm run fill:style -- pizza_margherita
# Ou edite manualmente public/locales/en/styles.json
```

### 5. Registrar
Adicione em `src/data/styles/registry.ts`:
```typescript
import { pizza_margherita } from './pizza/pizza_margherita';

export const STYLE_REGISTRY = {
  // ... outros estilos
  'pizza_margherita': pizza_margherita,
};
```

### 6. Validar
```bash
npm run validate:styles
```

## 🎯 Dicas

### ✅ Faça
- Use o gerador para garantir estrutura correta
- Preencha TODOS os campos (não deixe TODOs)
- Cite fontes confiáveis nas referências
- Seja específico e educacional
- Valide antes de commitar

### ❌ Evite
- Deixar placeholders [TODO]
- Copiar/colar de outros estilos sem adaptar
- Inventar informações sem fonte
- Usar ranges irrealistas
- Pular a validação

## 🔧 Comandos Úteis

```bash
# Criar novo estilo (interativo)
npm run generate:style

# Preencher conteúdo (interativo)
npm run fill:style -- <style_id>

# Validar todos os estilos
npm run validate:styles

# Rodar o app para testar
npm run dev
```

## 📚 Referências

- **Documentação Completa**: `docs/STYLE_SYSTEM.md`
- **Schema TypeScript**: `src/types/styleDefinition.ts`
- **Exemplo Completo**: `src/data/styles/pizza/california_style.ts`

## 🆘 Problemas Comuns

### "Missing i18n key"
**Solução**: Verifique se copiou o template i18n para `styles.json`

### "Invalid range"
**Solução**: Certifique-se que min < max em todos os ranges

### "TODO items remaining"
**Solução**: Use `npm run fill:style` ou edite manualmente

### Estilo não aparece no app
**Solução**: Verifique se adicionou ao `registry.ts`

---

**Pronto para começar?** Execute `npm run generate:style` e siga o guia! 🚀
