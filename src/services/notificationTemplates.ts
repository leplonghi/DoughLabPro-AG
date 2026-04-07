import { NotificationType, NotificationPriority, NotificationPayload } from '../types/notifications';
import { RecipeStyle } from '../types';
import i18n from '@/i18n';
const t = i18n.t.bind(i18n);


export interface NotificationTemplate {
    id: string;
    name: string;
    type: NotificationType;
    priority: NotificationPriority;
    titleTemplate: string;
    bodyTemplate: string;
    icon?: string;
    requiresInteraction: boolean;
    vibrate?: number[];
    defaultSchedule?: {
        offsetMinutes: number;
        relativeTo: 'start' | 'end' | 'now';
    };
}

export interface StyleNotificationPlan {
    styleId: RecipeStyle;
    styleName: string;
    templates: NotificationTemplate[];
    estimatedDuration: number; // minutes
}

/**
 * Pre-configured notification templates by style
 */
export const NOTIFICATION_TEMPLATES: Record<string, NotificationTemplate> = {
    // Neapolitan Pizza
    neapolitan_bulk_start: {
        id: 'neapolitan_bulk_start',
        name: 'Neapolitan - Bulk Start',
        type: NotificationType.BULK_FERMENTATION_START,
        priority: NotificationPriority.MEDIUM,
        titleTemplate: '🍕 Neapolitan Dough - Bulk Started',
        bodyTemplate: 'Your Neapolitan dough is now fermenting. Expected completion in {{duration}}h',
        requiresInteraction: false,
        defaultSchedule: { offsetMinutes: 0, relativeTo: 'now' },
    },
    neapolitan_fold_1: {
        id: 'neapolitan_fold_1',
        name: 'Neapolitan - First Fold',
        type: NotificationType.FOLD_REMINDER,
        priority: NotificationPriority.MEDIUM,
        titleTemplate: '🔄 Time for First Fold',
        bodyTemplate: t('notifications.perform_a_gentle_fold_to_strengthen_the__220'),
        requiresInteraction: false,
        vibrate: [200, 100, 200],
        defaultSchedule: { offsetMinutes: 30, relativeTo: 'start' },
    },
    neapolitan_ball: {
        id: 'neapolitan_ball',
        name: 'Neapolitan - Ball & Proof',
        type: NotificationType.PROOF_START,
        priority: NotificationPriority.HIGH,
        titleTemplate: '⚪ Time to Ball Your Dough',
        bodyTemplate: 'Divide and shape into {{count}} balls. Proof for 4-6 hours at room temp',
        requiresInteraction: true,
        defaultSchedule: { offsetMinutes: 240, relativeTo: 'start' },
    },
    neapolitan_ready: {
        id: 'neapolitan_ready',
        name: 'Neapolitan - Ready to Bake',
        type: NotificationType.READY_TO_BAKE,
        priority: NotificationPriority.URGENT,
        titleTemplate: '🔥 Neapolitan Dough Ready!',
        bodyTemplate: 'Your dough has peaked! Preheat to 485°C (905°F) and bake within 2 hours',
        requiresInteraction: true,
        vibrate: [200, 100, 200, 100, 200],
        defaultSchedule: { offsetMinutes: 360, relativeTo: 'start' },
    },

    // Sourdough Bread
    sourdough_levain_ready: {
        id: 'sourdough_levain_ready',
        name: 'Sourdough - Levain Ready',
        type: NotificationType.LEVAIN_READY,
        priority: NotificationPriority.HIGH,
        titleTemplate: '🦠 Levain at Peak!',
        bodyTemplate: 'Your levain has doubled and is ready to use. Mix your dough now',
        requiresInteraction: true,
        defaultSchedule: { offsetMinutes: 300, relativeTo: 'start' },
    },
    sourdough_autolyse: {
        id: 'sourdough_autolyse',
        name: 'Sourdough - Autolyse Complete',
        type: NotificationType.CUSTOM_TIMER,
        priority: NotificationPriority.MEDIUM,
        titleTemplate: '💧 Autolyse Complete',
        bodyTemplate: 'Add levain and salt. Begin stretch and folds',
        requiresInteraction: false,
        defaultSchedule: { offsetMinutes: 60, relativeTo: 'start' },
    },
    sourdough_fold_series: {
        id: 'sourdough_fold_series',
        name: 'Sourdough - Fold Reminder',
        type: NotificationType.STRETCH_FOLD_REMINDER,
        priority: NotificationPriority.MEDIUM,
        titleTemplate: '🙌 Stretch & Fold Time',
        bodyTemplate: 'Perform a set of stretch and folds ({{foldNumber}} of 4)',
        requiresInteraction: false,
        vibrate: [200, 100, 200],
        defaultSchedule: { offsetMinutes: 30, relativeTo: 'start' },
    },
    sourdough_bulk_complete: {
        id: 'sourdough_bulk_complete',
        name: 'Sourdough - Bulk Complete',
        type: NotificationType.BULK_FERMENTATION_COMPLETE,
        priority: NotificationPriority.HIGH,
        titleTemplate: '✅ Bulk Fermentation Done',
        bodyTemplate: 'Dough has increased 50%. Time to shape and cold proof',
        requiresInteraction: true,
        defaultSchedule: { offsetMinutes: 300, relativeTo: 'start' },
    },
    sourdough_cold_proof_done: {
        id: 'sourdough_cold_proof_done',
        name: 'Sourdough - Cold Proof Done',
        type: NotificationType.PROOF_COMPLETE,
        priority: NotificationPriority.HIGH,
        titleTemplate: '❄️ Cold Proof Complete',
        bodyTemplate: 'Your sourdough is ready to bake! Preheat Dutch oven to 250°C',
        requiresInteraction: true,
        defaultSchedule: { offsetMinutes: 720, relativeTo: 'start' },
    },

    // Croissant
    croissant_detrempe: {
        id: 'croissant_detrempe',
        name: 'Croissant - Détrempe Rest',
        type: NotificationType.CUSTOM_TIMER,
        priority: NotificationPriority.MEDIUM,
        titleTemplate: '🥐 Détrempe Rested',
        bodyTemplate: t('notifications.time_to_prepare_butter_block_and_begin_l_221'),
        requiresInteraction: false,
        defaultSchedule: { offsetMinutes: 60, relativeTo: 'start' },
    },
    croissant_fold_1: {
        id: 'croissant_fold_1',
        name: 'Croissant - First Fold Rest',
        type: NotificationType.CUSTOM_TIMER,
        priority: NotificationPriority.MEDIUM,
        titleTemplate: '📐 First Fold Complete',
        bodyTemplate: 'Dough rested. Perform second fold',
        requiresInteraction: false,
        defaultSchedule: { offsetMinutes: 60, relativeTo: 'start' },
    },
    croissant_final_proof: {
        id: 'croissant_final_proof',
        name: 'Croissant - Final Proof',
        type: NotificationType.PROOF_COMPLETE,
        priority: NotificationPriority.HIGH,
        titleTemplate: '🥐 Croissants Proofed',
        bodyTemplate: 'Croissants are jiggly and ready. Preheat to 200°C and bake',
        requiresInteraction: true,
        defaultSchedule: { offsetMinutes: 120, relativeTo: 'start' },
    },

    // Poolish/Biga
    poolish_ready: {
        id: 'poolish_ready',
        name: t('notifications.poolish_ready_222'),
        type: NotificationType.POOLISH_READY,
        priority: NotificationPriority.HIGH,
        titleTemplate: '🫧 Poolish is Ready',
        bodyTemplate: 'Your poolish has peaked with bubbles. Mix final dough now',
        requiresInteraction: true,
        defaultSchedule: { offsetMinutes: 720, relativeTo: 'start' },
    },
    biga_ready: {
        id: 'biga_ready',
        name: t('notifications.biga_ready_223'),
        type: NotificationType.BIGA_READY,
        priority: NotificationPriority.HIGH,
        titleTemplate: '🍞 Biga is Ready',
        bodyTemplate: 'Your biga has matured. Mix final dough within 2 hours',
        requiresInteraction: true,
        defaultSchedule: { offsetMinutes: 960, relativeTo: 'start' },
    },

    // Generic Timers
    preheat_45min: {
        id: 'preheat_45min',
        name: 'Preheat Oven (45min)',
        type: NotificationType.PREHEAT_OVEN,
        priority: NotificationPriority.HIGH,
        titleTemplate: '🔥 Preheat Your Oven',
        bodyTemplate: 'Start preheating to {{temp}}°C. Dough will be ready in 45 minutes',
        requiresInteraction: true,
        vibrate: [200, 100, 200, 100, 200],
        defaultSchedule: { offsetMinutes: -45, relativeTo: 'end' },
    },
    bake_complete: {
        id: 'bake_complete',
        name: t('notifications.bake_complete_224'),
        type: NotificationType.BAKE_COMPLETE,
        priority: NotificationPriority.URGENT,
        titleTemplate: '✨ Baking Complete!',
        bodyTemplate: 'Your {{style}} is done! Remove from oven and cool',
        requiresInteraction: true,
        vibrate: [200, 100, 200, 100, 200, 100, 200],
        defaultSchedule: { offsetMinutes: 15, relativeTo: 'start' },
    },
};

/**
 * Style-specific notification plans
 */
export const STYLE_NOTIFICATION_PLANS: Record<string, StyleNotificationPlan> = {
    NEAPOLITAN: {
        styleId: 'NEAPOLITAN' as RecipeStyle,
        styleName: t('notifications.neapolitan_pizza_225'),
        estimatedDuration: 600, // 10 hours
        templates: [
            NOTIFICATION_TEMPLATES.neapolitan_bulk_start,
            NOTIFICATION_TEMPLATES.neapolitan_fold_1,
            NOTIFICATION_TEMPLATES.neapolitan_ball,
            NOTIFICATION_TEMPLATES.preheat_45min,
            NOTIFICATION_TEMPLATES.neapolitan_ready,
        ],
    },
    SOURDOUGH: {
        styleId: 'SOURDOUGH' as RecipeStyle,
        styleName: t('notifications.sourdough_bread_226'),
        estimatedDuration: 1440, // 24 hours
        templates: [
            NOTIFICATION_TEMPLATES.sourdough_levain_ready,
            NOTIFICATION_TEMPLATES.sourdough_autolyse,
            NOTIFICATION_TEMPLATES.sourdough_fold_series,
            NOTIFICATION_TEMPLATES.sourdough_bulk_complete,
            NOTIFICATION_TEMPLATES.sourdough_cold_proof_done,
            NOTIFICATION_TEMPLATES.preheat_45min,
            NOTIFICATION_TEMPLATES.bake_complete,
        ],
    },
    CROISSANT: {
        styleId: 'FRENCH_CROISSANT' as RecipeStyle,
        styleName: t('notifications.french_croissant_227'),
        estimatedDuration: 1200, // 20 hours
        templates: [
            NOTIFICATION_TEMPLATES.croissant_detrempe,
            NOTIFICATION_TEMPLATES.croissant_fold_1,
            NOTIFICATION_TEMPLATES.croissant_final_proof,
            NOTIFICATION_TEMPLATES.preheat_45min,
            NOTIFICATION_TEMPLATES.bake_complete,
        ],
    },
};

/**
 * Get notification plan for a style
 */
export function getNotificationPlanForStyle(styleId: RecipeStyle): StyleNotificationPlan | null {
    const planKey = Object.keys(STYLE_NOTIFICATION_PLANS).find(
        key => STYLE_NOTIFICATION_PLANS[key].styleId === styleId
    );
    return planKey ? STYLE_NOTIFICATION_PLANS[planKey] : null;
}

/**
 * Create notification from template
 */
export function createNotificationFromTemplate(
    template: NotificationTemplate,
    variables: Record<string, any> = {}
): Omit<NotificationPayload, 'scheduledFor'> {
    const interpolate = (text: string): string => {
        return text.replace(/\{\{(\w+)\}\}/g, (_, key) => variables[key] || '');
    };

    return {
        type: template.type,
        priority: template.priority,
        title: interpolate(template.titleTemplate),
        body: interpolate(template.bodyTemplate),
        icon: template.icon,
        requiresInteraction: template.requiresInteraction,
        vibrate: template.vibrate,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
    };
}

/**
 * Schedule notifications for a style
 */
export async function scheduleStyleNotifications(
    styleId: RecipeStyle,
    startTime: Date,
    variables: Record<string, any> = {},
    scheduleCallback: (notification: NotificationPayload, offsetMinutes: number) => Promise<void>
): Promise<void> {
    const plan = getNotificationPlanForStyle(styleId);
    if (!plan) {
        console.warn(`No notification plan found for style: ${styleId}`);
        return;
    }

    for (const template of plan.templates) {
        if (!template.defaultSchedule) continue;

        const notification = createNotificationFromTemplate(template, variables);
        let scheduledFor: Date;

        if (template.defaultSchedule.relativeTo === 'now') {
            scheduledFor = new Date(Date.now() + template.defaultSchedule.offsetMinutes * 60 * 1000);
        } else if (template.defaultSchedule.relativeTo === 'start') {
            scheduledFor = new Date(startTime.getTime() + template.defaultSchedule.offsetMinutes * 60 * 1000);
        } else {
            // relativeTo === 'end'
            const endTime = new Date(startTime.getTime() + plan.estimatedDuration * 60 * 1000);
            scheduledFor = new Date(endTime.getTime() + template.defaultSchedule.offsetMinutes * 60 * 1000);
        }

        await scheduleCallback(
            { ...notification, scheduledFor: scheduledFor.toISOString() },
            template.defaultSchedule.offsetMinutes
        );
    }
}
