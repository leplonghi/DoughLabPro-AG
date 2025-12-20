import React, { useState, useEffect } from 'react';
import { useNotifications } from '../../contexts/NotificationContext';
import { TimerConfig, NotificationType } from '../../types/notifications';
import { Play, Pause, Square, Clock, Bell } from 'lucide-react';

interface TimerCardProps {
    config: Omit<TimerConfig, 'id' | 'isActive' | 'isPaused'>;
    onStart: () => void;
}

export const TimerCard: React.FC<TimerCardProps> = ({ config, onStart }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border-l-4 border-green-600">
            <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900 dark:text-white">{config.name}</h3>
                <Clock className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {config.durationMinutes} min
            </div>
            <button
                onClick={onStart}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
                <Play className="w-4 h-4" />
                Start Timer
            </button>
        </div>
    );
};

interface ActiveTimerProps {
    timer: TimerConfig;
    onPause: () => void;
    onResume: () => void;
    onStop: () => void;
}

export const ActiveTimer: React.FC<ActiveTimerProps> = ({ timer, onPause, onResume, onStop }) => {
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
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-lg p-6 border-2 border-green-600">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">{timer.name}</h3>
                <Bell className="w-5 h-5 text-green-600 animate-pulse" />
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 overflow-hidden">
                    <div
                        className="bg-gradient-to-r from-green-500 to-green-600 h-full transition-all duration-1000 ease-linear"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {/* Time Display */}
            <div className="text-center mb-6">
                <div className="text-5xl font-bold text-gray-900 dark:text-white tabular-nums">
                    {formatTime(timeRemaining)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    {timer.isPaused ? 'Paused' : 'Time Remaining'}
                </div>
            </div>

            {/* Controls */}
            <div className="flex gap-3">
                {!timer.isPaused ? (
                    <button
                        onClick={onPause}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors font-medium"
                    >
                        <Pause className="w-5 h-5" />
                        Pause
                    </button>
                ) : (
                    <button
                        onClick={onResume}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                    >
                        <Play className="w-5 h-5" />
                        Resume
                    </button>
                )}
                <button
                    onClick={onStop}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
                >
                    <Square className="w-5 h-5" />
                    Stop
                </button>
            </div>

            {/* Notifications Info */}
            {timer.notifications && (
                <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                        {timer.notifications.atStart && <div>✓ Start notification enabled</div>}
                        {timer.notifications.atHalfway && <div>✓ Halfway notification enabled</div>}
                        {timer.notifications.atEnd && <div>✓ Completion notification enabled</div>}
                        {timer.notifications.customMinutesBefore && timer.notifications.customMinutesBefore.length > 0 && (
                            <div>✓ Custom reminders: {timer.notifications.customMinutesBefore.join(', ')} min before</div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export const TimerDashboard: React.FC = () => {
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
            {/* Active Timers */}
            {activeTimers.length > 0 && (
                <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Active Timers</h2>
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

            {/* Quick Start Timers */}
            <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Start Timers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
