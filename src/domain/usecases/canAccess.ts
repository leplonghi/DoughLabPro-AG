import { PlanId } from '@/permissions';
// We determine user status from PlanId or an 'userEntitlements' object.
// Usually 'pro', 'master', 'lab_pro' count as PRO.

export interface UserEntitlements {
    plan: PlanId | null;
    isPro: boolean;
}

export interface ResourceLimits {
    levains: number;
    bakes: number;
    styles: 'limited' | 'unlimited';
}

const FREE_LIMITS: ResourceLimits = {
    levains: 1,
    bakes: 1,
    styles: 'limited' // Only non-proGate styles
};

const PRO_LIMITS: ResourceLimits = {
    levains: 9999, // practically unlimited
    bakes: 9999,
    styles: 'unlimited'
};

export const canAccessStyle = (entitlements: UserEntitlements, isProGate: boolean): { granted: boolean; reason?: string } => {
    if (!isProGate) return { granted: true };
    if (entitlements.isPro) return { granted: true };
    return { granted: false, reason: 'This style requires a Pro subscription.' };
};

export const canCreateLevain = (entitlements: UserEntitlements, currentCount: number): { granted: boolean; reason?: string } => {
    const limit = entitlements.isPro ? PRO_LIMITS.levains : FREE_LIMITS.levains;
    if (currentCount < limit) return { granted: true };
    return { granted: false, reason: 'Free accounts are limited to 1 levain profile.' };
};

export const canSaveBake = (entitlements: UserEntitlements, currentCount: number): { granted: boolean; reason?: string } => {
    const limit = entitlements.isPro ? PRO_LIMITS.bakes : FREE_LIMITS.bakes;
    if (currentCount < limit) return { granted: true };
    return { granted: false, reason: 'Free accounts are limited to saving 1 bake.' };
};
