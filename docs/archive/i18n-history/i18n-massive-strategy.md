# MASSIVE i18n Implementation Strategy

## Approach

Dado que o app tem ~88 páginas e centenas de componentes, vou usar uma estratégia em 2 fases:

### Fase A: Criar Arquivo de Tradução Completo (AGORA)
1. Adicionar TODAS as chaves de tradução necessárias de uma vez
2. Organizar por seções lógicas
3. Traduzir para EN, PT, ES simultaneamente

### Fase B: Atualizar Componentes em Lotes
1. Batch 1: MyLab pages (10 páginas)
2. Batch 2: Learn pages (80+ páginas) 
3. Batch 3: Modals e componentes menores
4. Batch 4: Formulários e validações

## Seções de Tradução a Adicionar

### mylab (My Lab Section)
- mylab_page - Página principal do lab
- mylab_bakes - Fornadas
- mylab_recipes - Receitas
- mylab_levain - Levain tracker
- mylab_flours - Inventário de farinhas
- mylab_timeline - Timeline
- mylab_consistency - Lógica de consistência
- mylab_comparisons - Comparações A/B
- mylab_insights - Insights profundos
- mylab_goals - Metas de aprendizado
- mylab_sensory - Diário sensorial

### learn (Learn Section)
- learn_home - Home do Learn
- learn_categories - Categorias
- learn_articles - Artigos individuais
- learn_fundamentals - Fundamentos
- learn_techniques - Técnicas
- learn_ingredients - Ingredientes
- learn_equipment - Equipamentos
- learn_troubleshooting - Solução de problemas
- learn_glossary - Glossário

### tools (Tools Section)
- tools_page - Página de ferramentas
- hydration_converter - Conversor de hidratação
- oven_analysis - Análise de forno
- doughbot - Assistente IA

### community (Community Section)
- community_feed - Feed da comunidade
- community_post - Post individual
- community_create - Criar post

### modals (All Modals)
- auth_modal - Modal de autenticação
- levain_modal - Modal de levain
- oven_modal - Modal de forno
- goal_modal - Modal de metas
- consistency_modal - Modal de consistência
- style_builder_modal - Construtor de estilos

## Estimativa
- Total de chaves novas: ~800-1000
- Tempo estimado: 2-3 horas para tradução completa
- Componentes a atualizar: ~100

## Status
- [ ] Criar arquivo de chaves massivo
- [ ] Traduzir para PT
- [ ] Traduzir para ES
- [ ] Atualizar componentes Batch 1
- [ ] Atualizar componentes Batch 2
- [ ] Atualizar componentes Batch 3
- [ ] Teste completo
