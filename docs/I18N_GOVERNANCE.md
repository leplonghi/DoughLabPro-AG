# I18n Governance & Maintenance Rules

## 1. Regra de Criação de Novas Chaves (Anti-Regressão)

Toda nova funcionalidade deve seguir esta ordem obrigatória:

1.  **Origem Unica (`Source of Truth`):** Criar a chave SOMENTE em `public/locales/en/{namespace}.json`.
2.  **Semântica:** Nomear a chave de forma semântica e estável (ex: `action.save_changes` e não `btn_save_1`).
3.  **Namespace:** Respeitar a divisão de domínios:
    *   `common.json`: Termos globais (botões, ações comuns, labels genéricos).
    *   `auth.json`: Login, registro, recuperação de senha.
    *   `calculator.json`: Termos específicos da calculadora de massa.
    *   `dashboard.json`: Widgets e visão geral do usuário.
    *   `marketing.json`: Landing pages e paywalls.
4.  **Estabilidade:** Nunca reutilizar chaves antigas com significado diferente. Crie uma nova.

## 2. Regra de Tradução Contínua

A tradução passa a ser um processo incremental (Delta):

*   **Nunca** re-traduza um arquivo inteiro se apenas 1 chave mudou.
*   **Tradução por Namespace:** Se adicionou feature na Calculadora, traduza apenas `calculator.json`.
*   **Fallback:** O sistema está configurado para fallback em Inglês. A tradução não bloqueia o deploy, mas o alerta de "Missing Key" deve ser monitorado.

## 3. Detecção de Erros e Validação

### Em Desenvolvimento (Dev / QA)
Execute o script de auditoria para verificar a saúde das traduções:

```bash
python scripts/i18n_validate.py
```

*   **Sucesso:** Exit code 0 (Todas as chaves de `en` existem em `pt` e `es`).
*   **Falha:** Lista de chaves ausentes por idioma.

### Em Produção
*   O sistema usa `fallbackNS` para garantir que, se um namespace falhar, ele tenta buscar em outros (embora o ideal seja a chave estar no lugar certo).
*   Logs silenciosos no console podem indicar chaves faltando (`i18next::translator: missingKey`).

## 4. Escala: Adicionando Novos Idiomas

Novo idioma é uma operação de infraestrutura trivial:

1.  Copie a pasta `public/locales/en` para `public/locales/{novo_lang}`.
2.  Traduza os valores dos arquivos JSON.
3.  Adicione o código do idioma (ex: `fr`, `de`) no array `supportedLngs` em `src/i18n.ts`.
4.  O sistema detectará e carregará automaticamente.

## 5. Performance e Boas Práticas

*   **Lazy Loading:** O sistema carrega apenas o idioma ativo.
*   **Namespaces:** Mantenha os arquivos JSON abaixo de 100kb para garantir carregamento rápido. Se um namespace crescer demais, divida-o.
*   **Chaves Dinâmicas:** Evite montar chaves no código (ex: `t('category.' + type)`). Isso impede que ferramentas de análise estática encontrem as chaves. Prefira mapas de objetos ou switch/case explícitos se possível, ou documente a exceção.
