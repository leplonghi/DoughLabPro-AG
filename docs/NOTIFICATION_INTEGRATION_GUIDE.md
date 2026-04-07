# Guia de Integração de Notificações - DoughLabPro

## 📚 Exemplos de Uso

### 1. Integração com Batch Detail Page

```typescript
import { BatchTimerActions } from '@/components/batch/BatchTimerActions';
import { generateTechnicalMethod } from '@/logic/methodGenerator';

function BatchDetailPage({ batch }) {
  const steps = generateTechnicalMethod(batch.doughConfig, batch.doughResult, t);
  
  return (
    <div>
      {/* Existing batch details */}
      
      {/* Add Timer Actions */}
      <BatchTimerActions batch={batch} steps={steps} />
    </div>
  );
}
```

### 2. Integração com Levain Detail Page

```typescript
import { LevainNotificationCard } from '@/components/levain/LevainNotificationCard';

function LevainDetailPage({ levain }) {
  return (
    <div>
      {/* Existing levain details */}
      
      {/* Add Notification Card */}
      <LevainNotificationCard levain={levain} />
    </div>
  );
}
```

### 3. Uso Programático no Calculator

```typescript
import { useNotifications } from '@/contexts/NotificationContext';
import { NotificationType, NotificationPriority } from '@/types/notifications';

function CalculatorPage() {
  const { scheduleNotification } = useNotifications();
  
  const handleStartBatch = async () => {
    // ... create batch logic
    
    // Schedule notification for when dough is ready
    await scheduleNotification({
      type: NotificationType.BULK_FERMENTATION_COMPLETE,
      priority: NotificationPriority.HIGH,
      title: 'Dough Ready!',
      body: 'Your bulk fermentation is complete',
      scheduledFor: new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString(),
      requiresInteraction: true,
      batchId: newBatch.id,
      actionUrl: `/mylab#batch-${newBatch.id}`,
    });
  };
  
  return (
    // ... calculator UI
  );
}
```

### 4. Integração com Timeline

```typescript
import { useBatchNotifications } from '@/hooks/useNotificationIntegration';

function TimelinePage() {
  const { scheduleBatchNotifications } = useBatchNotifications();
  
  const handleCreateTimeline = async (batch, steps) => {
    // Schedule all notifications for the batch
    await scheduleBatchNotifications(batch, steps);
  };
  
  return (
    // ... timeline UI
  );
}
```

### 5. Notificações Personalizadas

```typescript
import { useNotifications } from '@/contexts/NotificationContext';
import { NotificationType, NotificationPriority } from '@/types/notifications';

function CustomComponent() {
  const { scheduleNotification, startTimer } = useNotifications();
  
  // Agendar notificação simples
  const scheduleSimple = async () => {
    await scheduleNotification({
      type: NotificationType.CUSTOM_TIMER,
      priority: NotificationPriority.MEDIUM,
      title: 'Lembrete Personalizado',
      body: 'Sua mensagem aqui',
      scheduledFor: new Date(Date.now() + 30 * 60 * 1000).toISOString(),
    });
  };
  
  // Iniciar timer com notificações múltiplas
  const startCustomTimer = async () => {
    await startTimer({
      name: 'Meu Timer',
      type: NotificationType.CUSTOM_TIMER,
      durationMinutes: 60,
      startTime: new Date().toISOString(),
      endTime: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
      notifications: {
        atStart: true,
        atHalfway: true,
        atEnd: true,
        customMinutesBefore: [15, 5],
      },
    });
  };
  
  return (
    // ... UI
  );
}
```

### 6. Verificação de Permissões

```typescript
import { useNotifications } from '@/contexts/NotificationContext';

function NotificationSetup() {
  const { permissionStatus, requestPermission, testNotification } = useNotifications();
  
  const handleSetup = async () => {
    if (permissionStatus !== 'granted') {
      const result = await requestPermission();
      if (result === 'granted') {
        // Testar notificação
        await testNotification();
      }
    }
  };
  
  return (
    <button onClick={handleSetup}>
      {permissionStatus === 'granted' ? 'Testar Notificação' : 'Ativar Notificações'}
    </button>
  );
}
```

### 7. Gerenciamento de Timers Ativos

```typescript
import { useNotifications } from '@/contexts/NotificationContext';

function ActiveTimersDisplay() {
  const { activeTimers, pauseTimer, resumeTimer, stopTimer } = useNotifications();
  
  return (
    <div>
      {activeTimers.map(timer => (
        <div key={timer.id}>
          <h3>{timer.name}</h3>
          <div>
            {!timer.isPaused ? (
              <button onClick={() => pauseTimer(timer.id)}>Pausar</button>
            ) : (
              <button onClick={() => resumeTimer(timer.id)}>Retomar</button>
            )}
            <button onClick={() => stopTimer(timer.id)}>Parar</button>
          </div>
        </div>
      ))}
    </div>
  );
}
```

### 8. Configurações de Usuário

```typescript
import { useNotifications } from '@/contexts/NotificationContext';

function UserNotificationPreferences() {
  const { settings, updateSettings } = useNotifications();
  
  const handleToggleCategory = (category: string) => {
    updateSettings({
      [category]: !settings[category],
    });
  };
  
  const handleSetQuietHours = (start: string, end: string) => {
    updateSettings({
      quietHoursEnabled: true,
      quietHoursStart: start,
      quietHoursEnd: end,
    });
  };
  
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={settings.fermentationNotifications}
          onChange={() => handleToggleCategory('fermentationNotifications')}
        />
        Notificações de Fermentação
      </label>
      
      {/* ... outras categorias */}
    </div>
  );
}
```

### 9. Integração com MyLab Dashboard

```typescript
import { useNotifications } from '@/contexts/NotificationContext';
import { NotificationBadge } from '@/hooks/useNotificationIntegration';

function MyLabDashboard() {
  const { scheduledNotifications, activeTimers } = useNotifications();
  
  const pendingCount = scheduledNotifications.filter(n => n.status === 'PENDING').length;
  const activeCount = activeTimers.length;
  
  return (
    <div>
      <div className="notification-summary">
        <div className="relative">
          <Bell />
          <NotificationBadge count={pendingCount} />
        </div>
        <span>{activeCount} timers ativos</span>
      </div>
      
      {/* ... resto do dashboard */}
    </div>
  );
}
```

### 10. Limpeza e Cancelamento

```typescript
import { useNotifications } from '@/contexts/NotificationContext';

function NotificationManagement() {
  const { 
    scheduledNotifications, 
    cancelNotification, 
    cancelAllNotifications,
    clearHistory 
  } = useNotifications();
  
  const handleCancelBatchNotifications = async (batchId: string) => {
    const batchNotifs = scheduledNotifications.filter(
      n => n.batchId === batchId && n.status === 'PENDING'
    );
    
    for (const notif of batchNotifs) {
      await cancelNotification(notif.id);
    }
  };
  
  const handleClearAll = async () => {
    await cancelAllNotifications();
    await clearHistory();
  };
  
  return (
    // ... UI
  );
}
```

## 🎯 Melhores Práticas

### 1. Sempre verificar permissões antes de agendar
```typescript
if (permissionStatus === 'granted') {
  await scheduleNotification(/* ... */);
} else {
  // Mostrar UI para solicitar permissão
}
```

### 2. Usar prioridades apropriadas
- **URGENT**: Apenas para eventos críticos (forno pronto, massa passando do ponto)
- **HIGH**: Eventos importantes (fermentação completa, proof pronto)
- **MEDIUM**: Lembretes regulares (dobras, verificações)
- **LOW**: Informações opcionais

### 3. Incluir actionUrl para navegação direta
```typescript
actionUrl: `/mylab#batch-${batchId}`
```

### 4. Cancelar notificações quando não forem mais necessárias
```typescript
// Quando um batch é deletado
await handleCancelBatchNotifications(batchId);
```

### 5. Respeitar configurações do usuário
```typescript
if (!settings.fermentationNotifications) {
  return; // Não agendar
}
```

## 🔧 Troubleshooting

### Notificações não aparecem?
1. Verificar `permissionStatus`
2. Verificar se não está em quiet hours
3. Verificar configurações de categoria
4. Testar com `testNotification()`

### Timer não inicia?
1. Verificar se `startTime` e `endTime` são válidos
2. Verificar se `durationMinutes` é positivo
3. Verificar console para erros

### Service Worker não registra?
1. Verificar se está em HTTPS ou localhost
2. Verificar se o arquivo `sw-notifications.js` existe
3. Limpar cache e recarregar

## 📱 Suporte a Plataformas

- ✅ Chrome Desktop/Mobile
- ✅ Firefox Desktop/Mobile
- ✅ Safari Desktop/Mobile (iOS 16.4+)
- ✅ Edge Desktop/Mobile
- ⚠️ Opera (limitado)

## 🚀 Performance

- Notificações são armazenadas no localStorage
- Service Worker roda em background
- Widget flutuante só renderiza quando há notificações
- Timers usam `setInterval` otimizado

---

**Desenvolvido para DoughLabPro** 🍕
