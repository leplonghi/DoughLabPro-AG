import React, { useState } from 'react';
import { useNotifications } from '../../contexts/NotificationContext';
import { Bell, BellOff, Clock, Moon, Volume2, VolumeX, Vibrate, TestTube } from 'lucide-react';
import { useTranslation } from '@/i18n';
import AppSurface from '@/components/ui/AppSurface';

type NotificationToggleKey =
  | 'enabled'
  | 'fermentationNotifications'
  | 'foldingNotifications'
  | 'proofingNotifications'
  | 'levainNotifications'
  | 'bakingNotifications'
  | 'recipeNotifications'
  | 'soundEnabled'
  | 'vibrationEnabled'
  | 'quietHoursEnabled';

const ToggleRow: React.FC<{
  icon: React.ReactNode;
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onToggle: () => void;
}> = ({ icon, label, description, checked, disabled, onToggle }) => (
  <div className="flex items-center justify-between gap-3 rounded-[1.05rem] border border-emerald-100/80 bg-white/78 px-3 py-3 shadow-[0_14px_28px_-24px_rgba(16,65,29,0.35)]">
    <div className="flex min-w-0 items-start gap-3">
      <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-slate-950">{label}</p>
        <p className="text-xs leading-5 text-dlp-text-secondary">{description}</p>
      </div>
    </div>
    <label className="relative inline-flex shrink-0 cursor-pointer items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className="peer sr-only"
        disabled={disabled}
      />
      <span className="h-6 w-11 rounded-full bg-slate-200 transition-colors peer-checked:bg-emerald-600 peer-disabled:opacity-45" />
      <span className="pointer-events-none absolute left-[2px] top-[2px] h-5 w-5 rounded-full border border-slate-200 bg-white shadow-sm transition-transform peer-checked:translate-x-5" />
    </label>
  </div>
);

export const NotificationSettings: React.FC = () => {
  const { t } = useTranslation();
  const { settings, updateSettings, permissionStatus, requestPermission, testNotification } = useNotifications();
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handlePermissionRequest = async () => {
    const result = await requestPermission();
    if (result === 'denied') {
      alert('Notification permission denied. Please enable notifications in your browser settings.');
    }
  };

  const handleToggle = (key: NotificationToggleKey) => {
    updateSettings({ [key]: !settings[key] });
  };

  const handleTimeChange = (key: 'quietHoursStart' | 'quietHoursEnd', value: string) => {
    updateSettings({ [key]: value });
  };

  const isGranted = permissionStatus === 'granted';

  const categories: Array<{
    key: NotificationToggleKey;
    label: string;
    description: string;
    icon: typeof Clock;
  }> = [
    {
      key: 'fermentationNotifications',
      label: t('notifications.fermentation_timers_269', { defaultValue: 'Fermentation timers' }),
      description: t('notifications.fermentation_timers_desc', { defaultValue: 'Bulk and ambient fermentation checkpoints.' }),
      icon: Clock,
    },
    {
      key: 'foldingNotifications',
      label: t('notifications.folding_reminders_270', { defaultValue: 'Folding reminders' }),
      description: t('notifications.folding_reminders_desc', { defaultValue: 'Stay on top of dough strengthening steps.' }),
      icon: Clock,
    },
    {
      key: 'proofingNotifications',
      label: t('notifications.proofing_timers_271', { defaultValue: 'Proofing timers' }),
      description: t('notifications.proofing_timers_desc', { defaultValue: 'Know when final proof is close or complete.' }),
      icon: Clock,
    },
    {
      key: 'levainNotifications',
      label: t('notifications.levain_reminders_272', { defaultValue: 'Levain reminders' }),
      description: t('notifications.levain_reminders_desc', { defaultValue: 'Feed and refresh levain at the right moment.' }),
      icon: Bell,
    },
    {
      key: 'bakingNotifications',
      label: t('notifications.baking_alerts_273', { defaultValue: 'Baking alerts' }),
      description: t('notifications.baking_alerts_desc', { defaultValue: 'Preheat, launch, and finish-stage alerts.' }),
      icon: Bell,
    },
    {
      key: 'recipeNotifications',
      label: t('notifications.recipe_reminders_274', { defaultValue: 'Recipe reminders' }),
      description: t('notifications.recipe_reminders_desc', { defaultValue: 'Scheduled recipe prompts and next-step cues.' }),
      icon: Bell,
    },
  ];

  return (
    <div className="space-y-4">
      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <AppSurface surface="glass" tone="brand" density="compact" className="rounded-[1.2rem]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-xl">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-emerald-700/80">
                Notification control
              </p>
              <h2 className="mt-1 text-lg font-black tracking-tight text-slate-950">
                Tune reminders without leaving the baking flow
              </h2>
              <p className="mt-1.5 text-sm leading-6 text-dlp-text-secondary">
                Keep timers, quiet hours, and alert behavior aligned with your actual bake routine.
              </p>
            </div>
            <button
              onClick={testNotification}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-300 bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_16px_30px_-20px_rgba(47,139,73,0.7)] transition hover:bg-emerald-700"
            >
              <TestTube className="h-4 w-4" />
              Test alert
            </button>
          </div>
        </AppSurface>

        <AppSurface surface="glass" tone="neutral" density="compact" className="rounded-[1.2rem]">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-dlp-text-muted">Permission</p>
              <h3 className="mt-1 text-base font-black tracking-tight text-slate-950">Browser access</h3>
            </div>
            <span
              className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                permissionStatus === 'granted'
                  ? 'border border-emerald-200 bg-emerald-50 text-emerald-700'
                  : permissionStatus === 'denied'
                    ? 'border border-rose-200 bg-rose-50 text-rose-700'
                    : 'border border-amber-200 bg-amber-50 text-amber-700'
              }`}
            >
              {permissionStatus === 'granted'
                ? 'Enabled'
                : permissionStatus === 'denied'
                  ? 'Blocked'
                  : 'Pending'}
            </span>
          </div>
          <p className="mt-3 text-sm leading-6 text-dlp-text-secondary">
            {permissionStatus === 'granted' && 'Your browser can send timers and bake reminders normally.'}
            {permissionStatus === 'denied' && 'Notifications are currently blocked. Re-enable them in your browser settings.'}
            {permissionStatus === 'default' && 'Grant permission to receive live reminders for active bakes and timers.'}
          </p>
          {!isGranted && (
            <button
              onClick={handlePermissionRequest}
              className="mt-4 inline-flex items-center justify-center rounded-xl border border-emerald-200 bg-white/88 px-4 py-2.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
            >
              Enable notifications
            </button>
          )}
        </AppSurface>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <AppSurface surface="glass" tone="neutral" density="compact" className="space-y-3 rounded-[1.2rem]">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-dlp-text-muted">Core behavior</p>
            <h3 className="mt-1 text-base font-black tracking-tight text-slate-950">What should notify you</h3>
          </div>

          <ToggleRow
            icon={settings.enabled ? <Bell className="h-4 w-4" /> : <BellOff className="h-4 w-4" />}
            label="Enable notifications"
            description="Master switch for timers, recipe reminders, and activity alerts."
            checked={settings.enabled}
            disabled={!isGranted}
            onToggle={() => handleToggle('enabled')}
          />

          <div className="grid gap-3 md:grid-cols-2">
            {categories.map(({ key, label, description, icon: Icon }) => (
              <ToggleRow
                key={key}
                icon={<Icon className="h-4 w-4" />}
                label={label}
                description={description}
                checked={Boolean(settings[key])}
                disabled={!settings.enabled}
                onToggle={() => handleToggle(key)}
              />
            ))}
          </div>
        </AppSurface>

        <div className="space-y-4">
          <AppSurface surface="glass" tone="neutral" density="compact" className="space-y-3 rounded-[1.2rem]">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-dlp-text-muted">Delivery</p>
              <h3 className="mt-1 text-base font-black tracking-tight text-slate-950">How notifications behave</h3>
            </div>
            <ToggleRow
              icon={settings.soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
              label="Sound"
              description="Play an audible cue when a timer or reminder fires."
              checked={settings.soundEnabled}
              disabled={!settings.enabled}
              onToggle={() => handleToggle('soundEnabled')}
            />
            <ToggleRow
              icon={<Vibrate className="h-4 w-4" />}
              label="Vibration"
              description="Use haptic feedback when your device supports it."
              checked={settings.vibrationEnabled}
              disabled={!settings.enabled}
              onToggle={() => handleToggle('vibrationEnabled')}
            />
          </AppSurface>

          <AppSurface surface="glass" tone="neutral" density="compact" className="space-y-3 rounded-[1.2rem]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-dlp-text-muted">Focus window</p>
                <h3 className="mt-1 text-base font-black tracking-tight text-slate-950">Quiet hours</h3>
              </div>
              <label className="relative inline-flex shrink-0 cursor-pointer items-center">
                <input
                  type="checkbox"
                  checked={settings.quietHoursEnabled}
                  onChange={() => handleToggle('quietHoursEnabled')}
                  className="peer sr-only"
                  disabled={!settings.enabled}
                />
                <span className="h-6 w-11 rounded-full bg-slate-200 transition-colors peer-checked:bg-emerald-600 peer-disabled:opacity-45" />
                <span className="pointer-events-none absolute left-[2px] top-[2px] h-5 w-5 rounded-full border border-slate-200 bg-white shadow-sm transition-transform peer-checked:translate-x-5" />
              </label>
            </div>
            <p className="text-sm leading-6 text-dlp-text-secondary">
              Silence passive alerts during rest hours while keeping the workflow clean.
            </p>
            {settings.quietHoursEnabled && (
              <div className="grid grid-cols-2 gap-3 rounded-[1rem] border border-emerald-100/80 bg-white/80 p-3">
                <div>
                  <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.16em] text-dlp-text-muted">
                    Start
                  </label>
                  <input
                    type="time"
                    value={settings.quietHoursStart || '22:00'}
                    onChange={(e) => handleTimeChange('quietHoursStart', e.target.value)}
                    className="w-full rounded-xl border border-emerald-100 bg-white px-3 py-2.5 text-sm text-slate-950 outline-none transition focus:border-emerald-300"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.16em] text-dlp-text-muted">
                    End
                  </label>
                  <input
                    type="time"
                    value={settings.quietHoursEnd || '07:00'}
                    onChange={(e) => handleTimeChange('quietHoursEnd', e.target.value)}
                    className="w-full rounded-xl border border-emerald-100 bg-white px-3 py-2.5 text-sm text-slate-950 outline-none transition focus:border-emerald-300"
                  />
                </div>
              </div>
            )}
          </AppSurface>
        </div>
      </div>

      <AppSurface surface="glass" tone="neutral" density="compact" className="rounded-[1.2rem]">
        <button
          onClick={() => setShowAdvanced((current) => !current)}
          className="flex w-full items-center justify-between gap-3 text-left"
        >
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-dlp-text-muted">Advanced</p>
            <h3 className="mt-1 text-base font-black tracking-tight text-slate-950">Timing strategy</h3>
          </div>
          <span className="text-sm font-semibold text-emerald-700">{showAdvanced ? 'Hide' : 'Show'}</span>
        </button>

        {showAdvanced && (
          <div className="mt-4 rounded-[1rem] border border-emerald-100/80 bg-white/80 p-4">
            <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.16em] text-dlp-text-muted">
              Advance notice (minutes)
            </label>
            <input
              type="number"
              min="0"
              max="60"
              value={settings.advanceNoticeMinutes}
              onChange={(e) => updateSettings({ advanceNoticeMinutes: parseInt(e.target.value || '0', 10) })}
              className="w-full rounded-xl border border-emerald-100 bg-white px-3 py-2.5 text-sm text-slate-950 outline-none transition focus:border-emerald-300"
            />
            <p className="mt-2 text-xs leading-5 text-dlp-text-secondary">
              Choose how many minutes before an event DoughLabPro should warn you.
            </p>
          </div>
        )}
      </AppSurface>
    </div>
  );
};
