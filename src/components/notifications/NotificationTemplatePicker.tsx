import React, { useState } from 'react';
import { STYLE_NOTIFICATION_PLANS, scheduleStyleNotifications, NotificationTemplate } from '@/services/notificationTemplates';
import { useNotifications } from '@/contexts/NotificationContext';
import { RecipeStyle } from '@/types';
import { Bell, Clock, Zap, Check, Sparkles } from 'lucide-react';
import AppSurface from '@/components/ui/AppSurface';

interface TemplatePickerProps {
  styleId?: RecipeStyle;
  onApply?: () => void;
}

export const NotificationTemplatePicker: React.FC<TemplatePickerProps> = ({ onApply }) => {
  const { scheduleNotification } = useNotifications();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [startTime, setStartTime] = useState<string>(new Date().toISOString().slice(0, 16));
  const [variables, setVariables] = useState<Record<string, string>>({
    duration: '4',
    count: '6',
    temp: '250',
    foldNumber: '1',
    style: 'Neapolitan',
  });
  const [loading, setLoading] = useState(false);

  const plans = Object.values(STYLE_NOTIFICATION_PLANS);
  const currentPlan = selectedPlan ? STYLE_NOTIFICATION_PLANS[selectedPlan] : null;

  const handleApplyTemplate = async () => {
    if (!currentPlan) return;

    setLoading(true);
    try {
      await scheduleStyleNotifications(currentPlan.styleId, new Date(startTime), variables, async (notification) => {
        await scheduleNotification(notification);
      });
      onApply?.();
    } catch (error) {
      console.error('Failed to apply template:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <AppSurface surface="glass" tone="brand" density="compact" className="rounded-[1.2rem]">
        <div className="flex flex-col gap-2">
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-emerald-700/80">Templates</p>
          <h2 className="text-lg font-black tracking-tight text-slate-950">Reusable notification plans</h2>
          <p className="text-sm leading-6 text-dlp-text-secondary">
            Launch a full notification timeline for a style in one step, then adjust the variables before applying.
          </p>
        </div>
      </AppSurface>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {plans.map((plan) => {
          const isSelected = selectedPlan === plan.styleId;
          return (
            <button
              key={plan.styleId}
              onClick={() => setSelectedPlan(plan.styleId)}
              className="text-left"
            >
              <AppSurface
                surface="glass"
                tone={isSelected ? 'brand' : 'neutral'}
                density="compact"
                className={`h-full rounded-[1.15rem] transition-all ${isSelected ? 'border-emerald-300 shadow-[0_20px_38px_-26px_rgba(47,139,73,0.65)]' : 'hover:border-emerald-200'}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-dlp-text-muted">Style plan</p>
                    <h3 className="mt-1 text-base font-black tracking-tight text-slate-950">{plan.styleName}</h3>
                  </div>
                  {isSelected ? (
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white">
                      <Check className="h-4.5 w-4.5" />
                    </span>
                  ) : (
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                      <Sparkles className="h-4.5 w-4.5" />
                    </span>
                  )}
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="rounded-xl bg-white/82 px-3 py-2">
                    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-dlp-text-muted">
                      <Bell className="h-3.5 w-3.5 text-emerald-600" />
                      Alerts
                    </div>
                    <div className="mt-1 text-base font-black text-slate-950">{plan.templates.length}</div>
                  </div>
                  <div className="rounded-xl bg-white/82 px-3 py-2">
                    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-dlp-text-muted">
                      <Clock className="h-3.5 w-3.5 text-emerald-600" />
                      Duration
                    </div>
                    <div className="mt-1 text-base font-black text-slate-950">
                      {Math.floor(plan.estimatedDuration / 60)}h {plan.estimatedDuration % 60}m
                    </div>
                  </div>
                </div>
              </AppSurface>
            </button>
          );
        })}
      </div>

      {currentPlan && (
        <AppSurface surface="glass" tone="neutral" density="compact" className="space-y-5 rounded-[1.2rem]">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-dlp-text-muted">Selected timeline</p>
            <h3 className="mt-1 text-lg font-black tracking-tight text-slate-950">{currentPlan.styleName}</h3>
            <p className="mt-1 text-sm text-dlp-text-secondary">
              Review start time, tweak variables, and confirm the full reminder sequence.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <div className="rounded-[1rem] border border-emerald-100/80 bg-white/80 p-4">
                <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.16em] text-dlp-text-muted">
                  Start time
                </label>
                <input
                  type="datetime-local"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="w-full rounded-xl border border-emerald-100 bg-white px-3 py-2.5 text-sm text-slate-950 outline-none transition focus:border-emerald-300"
                />
              </div>

              <div className="rounded-[1rem] border border-emerald-100/80 bg-white/80 p-4">
                <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-dlp-text-muted">Variables</div>
                <div className="grid grid-cols-2 gap-3">
                  {Object.keys(variables).map((key) => (
                    <div key={key}>
                      <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-dlp-text-muted">
                        {key}
                      </label>
                      <input
                        type="text"
                        value={variables[key]}
                        onChange={(e) => setVariables({ ...variables, [key]: e.target.value })}
                        className="w-full rounded-xl border border-emerald-100 bg-white px-3 py-2.5 text-sm text-slate-950 outline-none transition focus:border-emerald-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {currentPlan.templates.map((template, index) => (
                <TemplateTimelineItem
                  key={template.id}
                  template={template}
                  index={index}
                  startTime={new Date(startTime)}
                  variables={variables}
                />
              ))}
            </div>
          </div>

          <button
            onClick={handleApplyTemplate}
            disabled={loading}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_-20px_rgba(47,139,73,0.7)] transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-55"
          >
            {loading ? (
              <>
                <div className="h-4.5 w-4.5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                Applying timeline
              </>
            ) : (
              <>
                <Zap className="h-4.5 w-4.5" />
                Apply template ({currentPlan.templates.length} alerts)
              </>
            )}
          </button>
        </AppSurface>
      )}

      <AppSurface surface="soft" tone="info" density="compact" className="rounded-[1.15rem]">
        <p className="text-sm leading-6 text-dlp-text-secondary">
          Templates work best when you keep the start time realistic and only adjust the variables that matter for this bake.
        </p>
      </AppSurface>
    </div>
  );
};

const TemplateTimelineItem: React.FC<{
  template: NotificationTemplate;
  index: number;
  startTime: Date;
  variables: Record<string, string>;
}> = ({ template, index, startTime, variables }) => {
  const interpolate = (text: string): string => text.replace(/\{\{(\w+)\}\}/g, (_, key) => variables[key] || '');

  const getScheduledTime = (): string => {
    if (!template.defaultSchedule) return 'Not scheduled';

    const offsetMinutes = template.defaultSchedule.offsetMinutes;
    const scheduledTime = template.defaultSchedule.relativeTo === 'now'
      ? new Date(Date.now() + offsetMinutes * 60 * 1000)
      : new Date(startTime.getTime() + offsetMinutes * 60 * 1000);

    return scheduledTime.toLocaleString();
  };

  const getPriorityClass = (priority: string): string => {
    switch (priority) {
      case 'URGENT':
        return 'border border-rose-200 bg-rose-50 text-rose-700';
      case 'HIGH':
        return 'border border-amber-200 bg-amber-50 text-amber-700';
      case 'MEDIUM':
        return 'border border-emerald-200 bg-emerald-50 text-emerald-700';
      default:
        return 'border border-sky-200 bg-sky-50 text-sky-700';
    }
  };

  return (
    <div className="grid grid-cols-[36px_minmax(0,1fr)] gap-3 rounded-[1rem] border border-emerald-100/80 bg-white/82 p-3 shadow-[0_12px_26px_-24px_rgba(16,65,29,0.35)]">
      <div className="flex flex-col items-center">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-sm font-black text-white">
          {index + 1}
        </div>
        <div className="mt-2 h-full w-px bg-emerald-100" />
      </div>
      <div className="min-w-0">
        <div className="flex items-start justify-between gap-3">
          <h4 className="text-sm font-bold text-slate-950">{interpolate(template.titleTemplate)}</h4>
          <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${getPriorityClass(template.priority)}`}>
            {template.priority}
          </span>
        </div>
        <p className="mt-1.5 text-sm leading-6 text-dlp-text-secondary">{interpolate(template.bodyTemplate)}</p>
        <div className="mt-2 flex items-center gap-2 text-xs text-dlp-text-muted">
          <Clock className="h-3.5 w-3.5" />
          <span>{getScheduledTime()}</span>
        </div>
      </div>
    </div>
  );
};
