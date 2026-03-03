# Implementação do Histórico de Cálculos Salvos

## Resumo
Adicionada a funcionalidade para permitir ao usuário salvar seus cálculos, visualizá-los na dashboard do "Meu Laboratório" (My Lab) e reusá-los posteriormente na Calculadora. A solução inclui um esquema de tier-limits onde usuários Free podem manter até 5 cálculos, com upgrades para usuários Pro mantendo uma conta unificada em todos os dispositivos através do Firebase Firestore.

## Mudanças Realizadas

### 1. Novo Domínio e Estrutura Firestore
- `SavedCalculation` em `src/types/savedCalculation.ts`: Define a assinatura do cálculo mantendo estado completo (inputs e results limpos).
- `calculationService.ts`: Funções isoladas (`saveCalculation`, `getCalculationHistory`, `deleteCalculation`, `updateCalculationNotes`) para conexão rápida e segura com a coleção `users/{userId}/calculations/`.

### 2. Lógica e Permissões de Estado (UX Optimista)
- Hook `useSavedCalculations.ts` para conectar UI ao Firestore com UI Optimista e limites condicionais.

### 3. Integração com Interface (UI)
- **`ResultsDisplay.tsx`:** Adicionado o botão estratégico *Salvar Cálculo* na tela de resultados.
- **`CalculationHistoryPage.tsx`:** Tela nova. Renderiza lista em grid e permite excluir.
- **`MyLabPage.tsx`:** Dashboard do "My Lab" agora expõe um card rápido listando *"Cálculos Salvos"*.

### 4. Correção de Tipagem (Typescript)
- Resolvido conflito de interfaces mapeando adequadamente o Type `DoughConfig`.
