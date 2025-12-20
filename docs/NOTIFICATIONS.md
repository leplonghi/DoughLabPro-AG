# Sistema de Notificações Push - DoughLabPro

## 📱 Visão Geral

O DoughLabPro agora possui um sistema completo de notificações push para ajudá-lo a gerenciar seus tempos de fermentação, dobras, proof e outros eventos importantes no processo de panificação.

## ✨ Funcionalidades

### 1. **Timers Inteligentes**
- ⏱️ Temporizadores para fermentação bulk
- 🔄 Lembretes de dobras (stretch & fold, coil folds)
- 🍞 Timers de proof final
- 🔥 Alertas de pré-aquecimento do forno

### 2. **Notificações de Levain**
- 🦠 Lembretes automáticos para alimentar seu levain
- ⏰ Configuração de intervalos personalizados
- 📊 Notificações baseadas no histórico de alimentação

### 3. **Notificações de Receitas**
- 📋 Alertas para cada etapa da receita
- ⏰ Notificações programadas com base no cronograma
- 🎯 Lembretes antecipados configuráveis

### 4. **Configurações Avançadas**
- 🌙 Modo "Horas Silenciosas" (Quiet Hours)
- 🔊 Controle de som e vibração
- 🎚️ Prioridades de notificação (Baixa, Média, Alta, Urgente)
- 📱 Suporte completo para PWA

## 🚀 Como Usar

### Ativando Notificações

1. Navegue para **Notifications** no menu
2. Clique em "Enable Notifications" na aba **Settings**
3. Permita notificações quando o navegador solicitar

### Criando um Timer

1. Vá para a aba **Timers**
2. Escolha um dos timers pré-configurados:
   - **Bulk Fermentation** (4 horas)
   - **Fold Reminder** (30 minutos)
   - **Final Proof** (3 horas)
   - **Preheat Oven** (45 minutos)
3. Clique em "Start Timer"

### Configurando Notificações de Levain

```typescript
import { useNotifications } from '@/contexts/NotificationContext';

const { scheduleLevainReminder } = useNotifications();

// Agendar lembrete para alimentar levain em 12 horas
await scheduleLevainReminder('levain-id', 12);
```

### Agendando Notificações de Dobras

```typescript
const { scheduleFoldingReminders } = useNotifications();

// Agendar 4 dobras a cada 30 minutos
const foldTimes = [
  new Date(Date.now() + 30 * 60 * 1000),
  new Date(Date.now() + 60 * 60 * 1000),
  new Date(Date.now() + 90 * 60 * 1000),
  new Date(Date.now() + 120 * 60 * 1000),
];

await scheduleFoldingReminders('batch-id', foldTimes);
```

## 🛠️ Integração Programática

### Hook `useNotifications`

```typescript
import { useNotifications } from '@/contexts/NotificationContext';

function MyComponent() {
  const {
    // Configurações
    settings,
    updateSettings,
    
    // Permissões
    permissionStatus,
    requestPermission,
    
    // Notificações agendadas
    scheduledNotifications,
    scheduleNotification,
    cancelNotification,
    
    // Timers ativos
    activeTimers,
    startTimer,
    pauseTimer,
    resumeTimer,
    stopTimer,
    
    // Ações rápidas
    scheduleRecipeNotifications,
    scheduleLevainReminder,
    scheduleFoldingReminders,
    
    // Utilidades
    testNotification,
  } = useNotifications();
  
  // Seu código aqui
}
```

### Exemplo: Criar Notificação Personalizada

```typescript
await scheduleNotification({
  type: NotificationType.CUSTOM_TIMER,
  priority: NotificationPriority.HIGH,
  title: 'Massa Pronta!',
  body: 'Sua massa atingiu o ponto ideal de fermentação',
  scheduledFor: new Date(Date.now() + 3600000).toISOString(), // 1 hora
  requiresInteraction: true,
  vibrate: [200, 100, 200],
  batchId: 'batch-123',
  actionUrl: '/mylab#batch-123',
});
```

## 📋 Tipos de Notificação

```typescript
enum NotificationType {
  // Fermentação
  BULK_FERMENTATION_START
  BULK_FERMENTATION_HALFWAY
  BULK_FERMENTATION_COMPLETE
  
  // Dobras
  FOLD_REMINDER
  COIL_FOLD_REMINDER
  STRETCH_FOLD_REMINDER
  
  // Proof
  PROOF_START
  PROOF_HALFWAY
  PROOF_COMPLETE
  
  // Levain
  LEVAIN_FEED_REMINDER
  LEVAIN_READY
  LEVAIN_OVERDUE
  
  // Pré-fermentos
  POOLISH_READY
  BIGA_READY
  
  // Forno
  PREHEAT_OVEN
  READY_TO_BAKE
  BAKE_COMPLETE
  
  // Outros
  RECIPE_SCHEDULED
  CUSTOM_TIMER
  BATCH_REMINDER
}
```

## ⚙️ Configurações Disponíveis

### Configurações Globais
- ✅ Ativar/Desativar notificações
- 🔊 Som
- 📳 Vibração
- 🔒 Mostrar na tela de bloqueio

### Categorias de Notificação
- 🍞 Fermentação
- 🔄 Dobras
- ⏰ Proof
- 🦠 Levain
- 🔥 Forno
- 📋 Receitas

### Horas Silenciosas
- 🌙 Ativar modo silencioso
- ⏰ Hora de início (padrão: 22:00)
- ⏰ Hora de término (padrão: 07:00)

### Avançado
- ⏱️ Antecedência de notificação (minutos)
- 📊 Limite de notificações por dia

## 🎯 Prioridades

- **URGENT** (Urgente): Notificações críticas que requerem ação imediata
- **HIGH** (Alta): Eventos importantes como término de fermentação
- **MEDIUM** (Média): Lembretes regulares de dobras
- **LOW** (Baixa): Informações gerais

## 📱 Service Worker

O sistema usa um Service Worker para garantir que as notificações funcionem mesmo quando o app não está aberto:

```javascript
// Arquivo: public/sw-notifications.js
// Registrado automaticamente pelo NotificationContext
```

## 🔧 Troubleshooting

### Notificações não aparecem?

1. **Verifique as permissões do navegador**
   - Chrome: Configurações → Privacidade e segurança → Configurações do site → Notificações
   - Firefox: Preferências → Privacidade e Segurança → Permissões → Notificações

2. **Teste a notificação**
   - Vá para Settings → Clique em "Test"

3. **Verifique o modo Horas Silenciosas**
   - Desative temporariamente para testar

4. **Limpe o cache do Service Worker**
   ```javascript
   navigator.serviceWorker.getRegistrations().then(registrations => {
     registrations.forEach(r => r.unregister());
   });
   ```

### Timer não inicia?

1. Verifique se as notificações estão ativadas
2. Confirme que você concedeu permissão
3. Veja o console do navegador para erros

## 🌟 Melhores Práticas

1. **Sempre peça permissão no contexto apropriado**
   - Não peça permissão imediatamente ao carregar o app
   - Explique o benefício antes de solicitar

2. **Use prioridades adequadas**
   - URGENT: Apenas para situações críticas
   - HIGH: Eventos que requerem ação em breve
   - MEDIUM: Lembretes regulares
   - LOW: Informações opcionais

3. **Configure Horas Silenciosas**
   - Respeite o horário de descanso do usuário
   - Padrão: 22:00 - 07:00

4. **Teste antes de usar em produção**
   - Use a função `testNotification()`
   - Verifique em diferentes navegadores

## 📚 Recursos Adicionais

- [Web Push Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API)

## 🎨 Ícones

Os ícones de notificação estão localizados em:
- `public/icons/notification-icon.png` - Ícone principal (512x512)
- `public/icons/notification-badge.png` - Badge pequeno (96x96)

## 🚀 Próximos Passos

- [ ] Integração com Firebase Cloud Messaging para notificações em segundo plano
- [ ] Suporte para notificações agrupadas
- [ ] Ações rápidas nas notificações (Pausar, Adiar, etc.)
- [ ] Sincronização entre dispositivos
- [ ] Analytics de engajamento de notificações

---

**Desenvolvido com ❤️ para a comunidade DoughLabPro**
