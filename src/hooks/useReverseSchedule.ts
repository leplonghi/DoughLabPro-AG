import { useMemo } from 'react';
import { FermentationTechnique } from '@/types';
import { addMinutes, subMinutes, subHours, isBefore, format } from '@/logic/dateUtils';
import { useTranslation } from 'react-i18next';


export interface ScheduleStep {
    id: string;
    title: string;
    description: string;
    time: Date;
    type: 'action' | 'wait' | 'milestone' | 'warning';
    durationMinutes?: number;
    affiliate?: {
        label: string;
        link: string;
        text: string;
    };
}

export interface ScheduleResult {
    steps: ScheduleStep[];
    isImpossible: boolean;
    totalDurationHours: number;
    finalMixTime: Date;
    prefermentMixTime?: Date;
    errors: string[];
}

export const useReverseSchedule = (
    targetTime: Date,
    technique: FermentationTechnique,
    bulkTimeHours: number = 2, // Default or dynamic
    ballTimeHours: number = 6  // Default 4-6h
): ScheduleResult => {
    const { t } = useTranslation();

    return useMemo(() => {
        const steps: ScheduleStep[] = [];
        const errors: string[] = [];

        // 1. Target Time (Eating)
        // Assume baking takes ~30 mins for a home batch, so we aim to have the first pizza ready slightly before target or right at target.
        // Let's say Target is "Pizza Time".
        steps.push({
            id: 'target',
            title: 'Pizza Time!',
            description: 'Serve and enjoy your masterpiece.',
            time: targetTime,
            type: 'milestone',
        });

        // 2. Preheat (1 hour before eating/baking start)
        // Ideally oven is ready when we start baking.
        // Baking starts, say, 15 mins before eating? Or we eat as we bake.
        // Let's align "Pizza Time" with the first pizza coming out.
        const ovenReadyTime = targetTime;
        const preheatStartTime = subMinutes(ovenReadyTime, 60);

        steps.push({
            id: 'preheat',
            title: 'Pre-heat Oven',
            description: 'Turn on your oven to max temperature. Stone/Steel needs 1h to saturate.',
            time: preheatStartTime,
            type: 'action',
            durationMinutes: 60,
            affiliate: {
                label: t('common.laser_thermometer_64'),
                text: t('common.laser_thermometer_64'),
                link: '#', // Placeholder
            }
        });

        // 3. Balling / Relaxing
        // Balls must be relaxed by the time we want to stretch (ovenReadyTime).
        // So we ball `ballTimeHours` before ovenReadyTime.
        const ballingStartTime = subHours(ovenReadyTime, ballTimeHours);

        steps.push({
            id: 'ball',
            title: t('common.ball_dough_66'),
            description: `Divide dough into balls and let them relax for ${ballTimeHours} hours.`,
            time: ballingStartTime,
            type: 'action',
            durationMinutes: 20, // Approx action time
            affiliate: {
                label: t('common.dough_scraper_67'),
                text: t('common.dough_scraper_67'),
                link: '#'
            }
        });

        // 4. Bulk Ferment
        // Bulk happens before balling.
        const bulkStartTime = subHours(ballingStartTime, bulkTimeHours);

        // This is the t('common.mix_final_dough_69') time
        const finalMixTime = bulkStartTime;

        steps.push({
            id: 'mix_final',
            title: t('common.mix_final_dough_69'),
            description: 'Combine flour, water, salt (and pre-ferment). Mix until smooth.',
            time: finalMixTime,
            type: 'action',
            durationMinutes: 20,
            affiliate: {
                label: t('common.danish_dough_whisk_70'),
                text: t('common.danish_dough_whisk_70'),
                link: '#'
            }
        });

        let prefermentMixTime: Date | undefined;

        // 5. Pre-ferment
        if (technique === FermentationTechnique.POOLISH) {
            prefermentMixTime = subHours(finalMixTime, 12); // Standard 12h poolish
            steps.push({
                id: 'mix_poolish',
                title: t('common.mix_poolish_72'),
                description: 'Mix equal parts flour and water with a pinch of yeast. Let ferment for 12h.',
                time: prefermentMixTime,
                type: 'action',
                durationMinutes: 10,
                affiliate: {
                    label: t('common.best_container_73'),
                    text: t('common.best_container_for_expansion_74'),
                    link: '#'
                }
            });
        } else if (technique === FermentationTechnique.BIGA) {
            prefermentMixTime = subHours(finalMixTime, 18); // Standard 18h biga
            steps.push({
                id: 'mix_biga',
                title: t('common.mix_biga_75'),
                description: 'Mix flour, water (45-50%), and yeast. Let ferment for 18h.',
                time: prefermentMixTime,
                type: 'action',
                durationMinutes: 15,
                affiliate: {
                    label: t('common.best_container_73'),
                    text: t('common.best_container_for_expansion_74'),
                    link: '#'
                }
            });
        }

        // Sort chronological
        steps.sort((a, b) => a.time.getTime() - b.time.getTime());

        // Validation
        const now = new Date();
        const firstStep = steps[0];
        let isImpossible = false;

        if (isBefore(firstStep.time, now)) {
            isImpossible = true;
            const hoursShort = (now.getTime() - firstStep.time.getTime()) / (1000 * 60 * 60);
            errors.push(`Not enough time! You need to start about ${hoursShort.toFixed(1)} hours ago.`);
        }

        const totalDurationHours = (targetTime.getTime() - (prefermentMixTime || finalMixTime).getTime()) / (1000 * 60 * 60);

        return {
            steps,
            isImpossible,
            totalDurationHours,
            finalMixTime,
            prefermentMixTime,
            errors
        };

    }, [targetTime, technique, bulkTimeHours, ballTimeHours]);
};
