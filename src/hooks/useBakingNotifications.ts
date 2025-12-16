import { useEffect, useRef } from 'react';
import { TimelineStep } from '@/logic/reverseTimeline';
import { useTranslation } from 'react-i18next';

export const useBakingNotifications = (schedule: TimelineStep[], isEnabled: boolean) => {
    const { t } = useTranslation();
    const processedSteps = useRef<Set<string>>(new Set());

    useEffect(() => {
        if (!isEnabled || schedule.length === 0) return;

        // Request permission on mount if enabled
        if (Notification.permission === 'default') {
            Notification.requestPermission();
        }

        const checkSchedule = () => {
            const now = new Date();

            schedule.forEach(step => {
                const stepTime = new Date(step.startTime);
                const timeDiff = stepTime.getTime() - now.getTime();

                // Alert if within 1 minute of start time and not yet processed
                if (Math.abs(timeDiff) < 60000 && !processedSteps.current.has(step.id)) {
                    // Trigger Notification
                    if (Notification.permission === 'granted') {
                        new Notification(t('notification.step_starting', { defaultValue: 'Time to Bake!' }), {
                            body: `${step.title}: ${step.description || ''}`,
                            icon: '/icons/icon-192x192.png' // Ensure this exists or use null
                        });

                        // Play Sound
                        const audio = new Audio('/sounds/notification.mp3'); // We need to make sure this file exists or use a generated sound
                        // Fallback beep if file doesn't exist? 
                        // For now, let's assume we might need to add a sound file or use a simple beep.
                        // Since we can't easily add binary files, we might skip the sound or use a base64 string if critical.
                        // Using a simple beep via AudioContext might be safer.
                        playNotificationSound();
                    }

                    processedSteps.current.add(step.id);
                }
            });
        };

        const interval = setInterval(checkSchedule, 10000); // Check every 10 seconds

        return () => clearInterval(interval);
    }, [schedule, isEnabled, t]);
};

// Simple beep using AudioContext to avoid external file dependencies
const playNotificationSound = () => {
    try {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContext) return;

        const ctx = new AudioContext();
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.type = 'sine';
        oscillator.frequency.value = 880; // A5
        gainNode.gain.value = 0.1;

        oscillator.start();

        // Short beep
        setTimeout(() => {
            oscillator.stop();
            ctx.close();
        }, 500);
    } catch (e) {
        console.error("Audio playback failed", e);
    }
};
