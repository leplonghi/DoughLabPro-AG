import React, { useState, useEffect } from 'react';
import { useNotifications } from '../../contexts/NotificationContext';
import { TimerConfig, NotificationType } from '../../types/notifications';
import { Play, Pause, Square, Clock, Bell } from 'lucide-react';
import AppSurface from '@/components/ui/AppSurface';
import { useTranslation } from '@/i18n';

interface TimerCardProps {
    config: Omit<TimerConfig, 'id' | 'isActive' | 'isPaused'>;
    onStart: () => void;
}

export const TimerCard: React.FC<TimerCardProps> = ({ config, onStart }) => {
    return (
        <AppSurface surface="glass" tone="neutral" density="compact" className="h-full rounded-[1.2rem] border-emerald-200/80">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-dlp-text-muted">Quick timer</p>
                    <h3 className="mt-1 text-base font-bold text-dlp-text-primary">{config.name}</h3>
                </div>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 shadow-[0_10px_18px_-14px_rgba(47,139,73,0.5)]">
                    <Clock className="h-4.5 w-4.5" />
                </span>
            </div>
            <div className="mt-4 text-[1.9rem] font-black leading-none tracking-tight text-slate-950">
                {config.durationMinutes} min
            </div>
            <button
                onClick={onStart}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_14px_28px_-18px_rgba(47,139,73,0.65)] transition hover:bg-emerald-700"
            >
                <Play className="h-4 w-4" />
                Start Timer
            </button>
        </AppSurface>
    );
};

interface ActiveTimerProps {
    timer: TimerConfig;
    onPause: () => void;
    onResume: () => void;
    onStop: () => void;
}

export const ActiveTimer: React.FC<ActiveTimerProps> = ({ timer, onPause, onResume, onStop }) => {
    const { t } = useTranslation(['notifications', 'common']);
    const [timeRemaining, setTimeRemaining] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        if (timer.isPaused) return;

        const interval = setInterval(() => {
            const now = Date.now();
            const end = new Date(timer.endTime).getTime();
            const start = new Date(timer.startTime).getTime();
            const total = end - start;
            const remaining = Math.max(0, end - now);

            setTimeRemaining(Math.floor(remaining / 1000));
            setProgress(((total - remaining) / total) * 100);

            if (remaining <= 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [timer, timer.isPaused]);

    const formatTime = (seconds: number): string => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        if (hours > 0) {
            return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
        return `${minutes}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <AppSurface surface="glass" tone="brand" density="default" className="rounded-[1.35rem] border-emerald-300/80">
            <div className="flex items-center justify-between gap-3">
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700/80">Active timer</p>
                    <h3 className="mt-1 text-lg font-black text-slate-950">{timer.name}</h3>
                </div>
                <Bell className="h-5 w-5 text-emerald-600 animate-pulse" />
            </div>

            <div className="mt-4">
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-emerald-100">
                    <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-lime-500 to-emerald-600 transition-all duration-1000 ease-linear"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            <div className="mt-5 text-center">
                <div className="text-[2.6rem] font-black tracking-[-0.05em] text-slate-950 tabular-nums sm:text-[3rem]">
                    {formatTime(timeRemaining)}
                </div>
                <div className="mt-1 text-sm text-dlp-text-secondary">
                    {timer.isPaused ? t('common.paused', { defaultValue: 'Paused' }) : t('notifications.time_remaining', { defaultValue: 'Time Remaining' })}
                </div>
            </div>

            <div className="mt-5 flex gap-3">
                {!timer.isPaused ? (
                    <button
                        onClick={onPause}
                        className="flex-1 rounded-xl bg-amber-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-amber-600"
                    >
                        <span className="inline-flex items-center justify-center gap-2">
                            <Pause className="h-4.5 w-4.5" />
                        Pause
                        </span>
                    </button>
                ) : (
                    <button
                        onClick={onResume}
                        className="flex-1 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                    >
                        <span className="inline-flex items-center justify-center gap-2">
                            <Play className="h-4.5 w-4.5" />
                        Resume
                        </span>
                    </button>
                )}
                <button
                    onClick={onStop}
                    className="flex-1 rounded-xl bg-rose-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-rose-600"
                >
                    <span className="inline-flex items-center justify-center gap-2">
                        <Square className="h-4.5 w-4.5" />
                    Stop
                    </span>
                </button>
            </div>

            {timer.notifications && (
                <div className="mt-4 rounded-xl border border-emerald-100 bg-white/82 p-3">
                    <div className="space-y-1 text-xs text-dlp-text-secondary">
                        {timer.notifications.atStart && <div>✓ Start notification enabled</div>}
                        {timer.notifications.atHalfway && <div>✓ Halfway notification enabled</div>}
                        {timer.notifications.atEnd && <div>✓ Completion notification enabled</div>}
                        {timer.notifications.customMinutesBefore && timer.notifications.customMinutesBefore.length > 0 && (
                            <div>✓ Custom reminders: {timer.notifications.customMinutesBefore.join(', ')} min before</div>
                        )}
                    </div>
                </div>
            )}
        </AppSurface>
    );
};

export const TimerDashboard: React.FC = () => {
    const { t } = useTranslation(['notifications']);
    const { activeTimers, startTimer, pauseTimer, resumeTimer, stopTimer } = useNotifications();

    const commonTimers: Omit<TimerConfig, 'id' | 'isActive' | 'isPaused'>[] = [
        {
            name: 'Bulk Fermentation',
            type: NotificationType.BULK_FERMENTATION_COMPLETE,
            durationMinutes: 240,
            startTime: new Date().toISOString(),
            endTime: new Date(Date.now() + 240 * 60 * 1000).toISOString(),
            notifications: {
                atStart: true,
                atHalfway: true,
                atEnd: true,
                customMinutesBefore: [30, 15],
            },
        },
        {
            name: 'Fold Reminder',
            type: NotificationType.FOLD_REMINDER,
            durationMinutes: 30,
            startTime: new Date().toISOString(),
            endTime: new Date(Date.now() + 30 * 60 * 1000).toISOString(),
            notifications: {
                atEnd: true,
            },
        },
        {
            name: 'Final Proof',
            type: NotificationType.PROOF_COMPLETE,
            durationMinutes: 180,
            startTime: new Date().toISOString(),
            endTime: new Date(Date.now() + 180 * 60 * 1000).toISOString(),
            notifications: {
                atHalfway: true,
                atEnd: true,
                customMinutesBefore: [15],
            },
        },
        {
            name: 'Preheat Oven',
            type: NotificationType.PREHEAT_OVEN,
            durationMinutes: 45,
            startTime: new Date().toISOString(),
            endTime: new Date(Date.now() + 45 * 60 * 1000).toISOString(),
            notifications: {
                atEnd: true,
            },
        },
    ];

    const handleStartTimer = async (config: Omit<TimerConfig, 'id' | 'isActive' | 'isPaused'>) => {
        const now = new Date();
        const end = new Date(now.getTime() + config.durationMinutes * 60 * 1000);

        await startTimer({
            ...config,
            startTime: now.toISOString(),
            endTime: end.toISOString(),
        });
    };

    return (
        <div className="space-y-6">
            {activeTimers.length > 0 && (
                <div>
                    <h2 className="mb-3 text-lg font-black tracking-tight text-slate-950">{t('notifications.active_timers', { defaultValue: 'Active Timers' })}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {activeTimers.map((timer) => (
                            <ActiveTimer
                                key={timer.id}
                                timer={timer}
                                onPause={() => pauseTimer(timer.id)}
                                onResume={() => resumeTimer(timer.id)}
                                onStop={() => stopTimer(timer.id)}
                            />
                        ))}
                    </div>
                </div>
            )}

            <div>
                <div className="mb-3 flex items-end justify-between gap-3">
                    <div>
                        <h2 className="text-lg font-black tracking-tight text-slate-950">{t('notifications.quick_start_timers', { defaultValue: 'Quick Start Timers' })}</h2>
                        <p className="text-sm text-dlp-text-secondary">{t('notifications.quick_start_timers_desc', { defaultValue: 'Launch common bake reminders without leaving the workflow.' })}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {commonTimers.map((timer, index) => (
                        <TimerCard
                            key={index}
                            config={timer}
                            onStart={() => handleStartTimer(timer)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
