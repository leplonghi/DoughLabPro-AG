/**
 * Notification System Types for DoughLabPro
 * Handles push notifications for fermentation timers, recipes, and batch events
 */

export enum NotificationType {
    // Fermentation Events
    BULK_FERMENTATION_START = 'BULK_FERMENTATION_START',
    BULK_FERMENTATION_HALFWAY = 'BULK_FERMENTATION_HALFWAY',
    BULK_FERMENTATION_COMPLETE = 'BULK_FERMENTATION_COMPLETE',

    // Folding Events
    FOLD_REMINDER = 'FOLD_REMINDER',
    COIL_FOLD_REMINDER = 'COIL_FOLD_REMINDER',
    STRETCH_FOLD_REMINDER = 'STRETCH_FOLD_REMINDER',

    // Proofing Events
    PROOF_START = 'PROOF_START',
    PROOF_HALFWAY = 'PROOF_HALFWAY',
    PROOF_COMPLETE = 'PROOF_COMPLETE',

    // Levain/Starter Events
    LEVAIN_FEED_REMINDER = 'LEVAIN_FEED_REMINDER',
    LEVAIN_READY = 'LEVAIN_READY',
    LEVAIN_OVERDUE = 'LEVAIN_OVERDUE',

    // Pre-ferment Events
    POOLISH_READY = 'POOLISH_READY',
    BIGA_READY = 'BIGA_READY',

    // Baking Events
    PREHEAT_OVEN = 'PREHEAT_OVEN',
    READY_TO_BAKE = 'READY_TO_BAKE',
    BAKE_COMPLETE = 'BAKE_COMPLETE',

    // Recipe Events
    RECIPE_SCHEDULED = 'RECIPE_SCHEDULED',
    RECIPE_START_SOON = 'RECIPE_START_SOON',

    // General
    CUSTOM_TIMER = 'CUSTOM_TIMER',
    BATCH_REMINDER = 'BATCH_REMINDER',
}

export enum NotificationPriority {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
    URGENT = 'URGENT',
}

export interface NotificationPayload {
    id: string;
    type: NotificationType;
    priority: NotificationPriority;
    title: string;
    body: string;
    scheduledFor: string; // ISO timestamp
    createdAt: string; // ISO timestamp

    // Optional metadata
    batchId?: string;
    levainId?: string;
    recipeId?: string;
    stepId?: string;

    // Action data
    actionUrl?: string;
    actionLabel?: string;

    // Notification behavior
    requiresInteraction?: boolean;
    silent?: boolean;
    vibrate?: number[];
    icon?: string;
    badge?: string;
    image?: string;

    // Custom data
    data?: Record<string, any>;
}

export interface ScheduledNotification extends NotificationPayload {
    status: 'PENDING' | 'SENT' | 'CANCELLED' | 'FAILED';
    sentAt?: string;
    cancelledAt?: string;
    error?: string;
}

export interface NotificationSettings {
    enabled: boolean;

    // Global settings
    soundEnabled: boolean;
    vibrationEnabled: boolean;
    showOnLockScreen: boolean;

    // Category toggles
    fermentationNotifications: boolean;
    foldingNotifications: boolean;
    proofingNotifications: boolean;
    levainNotifications: boolean;
    bakingNotifications: boolean;
    recipeNotifications: boolean;

    // Timing preferences
    advanceNoticeMinutes: number; // How many minutes before event to notify
    quietHoursEnabled: boolean;
    quietHoursStart?: string; // HH:mm format
    quietHoursEnd?: string; // HH:mm format

    // Frequency limits
    maxNotificationsPerDay?: number;

    // Device-specific
    deviceToken?: string;
    platform?: 'web' | 'ios' | 'android';
}

export interface TimerConfig {
    id: string;
    name: string;
    type: NotificationType;
    durationMinutes: number;
    startTime: string; // ISO timestamp
    endTime: string; // ISO timestamp

    // Notification schedule
    notifications: {
        atStart?: boolean;
        atHalfway?: boolean;
        atEnd?: boolean;
        customMinutesBefore?: number[];
    };

    // Associated data
    batchId?: string;
    levainId?: string;
    stepId?: string;

    // State
    isActive: boolean;
    isPaused: boolean;
    pausedAt?: string;
    remainingMinutes?: number;
}

export interface NotificationContextType {
    // Settings
    settings: NotificationSettings;
    updateSettings: (settings: Partial<NotificationSettings>) => Promise<void>;

    // Permission
    permissionStatus: NotificationPermission;
    requestPermission: () => Promise<NotificationPermission>;

    // Scheduled notifications
    scheduledNotifications: ScheduledNotification[];
    scheduleNotification: (notification: Omit<NotificationPayload, 'id' | 'createdAt'>) => Promise<ScheduledNotification>;
    cancelNotification: (id: string) => Promise<void>;
    cancelAllNotifications: () => Promise<void>;

    // Active timers
    activeTimers: TimerConfig[];
    startTimer: (config: Omit<TimerConfig, 'id' | 'isActive' | 'isPaused'>) => Promise<TimerConfig>;
    pauseTimer: (id: string) => Promise<void>;
    resumeTimer: (id: string) => Promise<void>;
    stopTimer: (id: string) => Promise<void>;

    // Quick actions
    scheduleRecipeNotifications: (batchId: string, steps: any[]) => Promise<void>;
    scheduleLevainReminder: (levainId: string, intervalHours: number) => Promise<void>;
    scheduleFoldingReminders: (batchId: string, foldTimes: Date[]) => Promise<void>;

    // Utility
    testNotification: () => Promise<void>;
    clearHistory: () => Promise<void>;
}

export interface NotificationTemplate {
    type: NotificationType;
    titleKey: string;
    bodyKey: string;
    icon: string;
    priority: NotificationPriority;
    requiresInteraction: boolean;
    vibrate?: number[];
}
