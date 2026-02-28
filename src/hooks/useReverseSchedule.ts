import { useMemo } from 'react';
import { FermentationTechnique, OvenType } from '@/types';
import { addMinutes, subMinutes, subHours, isBefore, format } from '@/logic/dateUtils';
import { useTranslation } from '@/i18n';


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
    bulkTimeHours: number = 2,
    ballTimeHours: number = 6,
    ovenType: OvenType = OvenType.ELECTRIC
): ScheduleResult => {
    const { t } = useTranslation();

    return useMemo(() => {
        const steps: ScheduleStep[] = [];
        const errors: string[] = [];

        // 1. Target Time (Eating)
        steps.push({
            id: 'target',
            title: 'Pizza Time!',
            description: 'Serve and enjoy your masterpiece.',
            time: targetTime,
            type: 'milestone',
        });

        // 2. Preheat Mapping
        let preheatMinutes = 60;
        let ovenDesc = 'Turn on your oven to max temperature. Stone/Steel needs 1h to saturate.';

        if (ovenType === OvenType.OONI) {
            preheatMinutes = 20;
            ovenDesc = 'Launch your outdoor oven. A stone temp of 400°C+ is ideal.';
        } else if (ovenType === OvenType.WOOD) {
            preheatMinutes = 120;
            ovenDesc = 'Build a large fire across the floor. Push to the back once floor is white-hot.';
        } else if (ovenType === OvenType.GAS) {
            preheatMinutes = 45;
            ovenDesc = 'Preheat gas oven. If using a stone, allow at least 45 mins.';
        }

        const ovenReadyTime = targetTime;
        const preheatStartTime = subMinutes(ovenReadyTime, preheatMinutes);

        steps.push({
            id: 'preheat',
            title: `Pre-heat (${ovenType})`,
            description: ovenDesc,
            time: preheatStartTime,
            type: 'action',
            durationMinutes: preheatMinutes,
            affiliate: {
                label: t('common.laser_thermometer_64'),
                text: t('common.laser_thermometer_64'),
                link: '#',
            }
        });

        // 3. Balling / Relaxing
        const ballingStartTime = subHours(ovenReadyTime, ballTimeHours);

        steps.push({
            id: 'ball',
            title: t('common.ball_dough_66'),
            description: `Divide dough into balls and let them relax for ${ballTimeHours} hours.`,
            time: ballingStartTime,
            type: 'action',
            durationMinutes: 20,
            affiliate: {
                label: t('common.dough_scraper_67'),
                text: t('common.dough_scraper_67'),
                link: '#'
            }
        });

        // 4. Bulk Ferment
        const finalMixTime = subHours(ballingStartTime, bulkTimeHours);

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
            prefermentMixTime = subHours(finalMixTime, 12);
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
            prefermentMixTime = subHours(finalMixTime, 18);
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

    }, [targetTime, technique, bulkTimeHours, ballTimeHours, ovenType]);
};
