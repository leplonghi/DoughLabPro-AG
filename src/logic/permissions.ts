import { User } from '../types';

export type FeatureKey =
    | "calculator_advanced"
    | "calculator_preferments"
    | "calculator_environment_insights"
    | "styles_pro_only"
    | "mylab_unlimited"
    | "mylab_comparisons"
    | "mylab_timeline"
    | "levain_multiple"
    | "levain_analytics"
    | "insights_advanced"
    | "exports_pdf"
    | "exports_json"
    | "tools_doughbot"
    | "tools_oven_analysis"
    | "tools_topping_planner_advanced"
    | "learn_advanced"
    | "settings_theme"
    | "community_filters";

export type Plan = "free" | "pro";

export const FEATURE_PLAN_MAP: Record<FeatureKey, Plan> = {
    calculator_advanced: "pro",
    calculator_preferments: "pro",
    calculator_environment_insights: "pro",
    styles_pro_only: "pro",
    mylab_unlimited: "pro",
    mylab_comparisons: "pro",
    mylab_timeline: "pro",
    levain_multiple: "pro",
    levain_analytics: "pro",
    insights_advanced: "pro",
    exports_pdf: "pro",
    exports_json: "pro",
    tools_doughbot: "pro",
    tools_oven_analysis: "pro",
    tools_topping_planner_advanced: "pro",
    learn_advanced: "pro",
    settings_theme: "pro",
    community_filters: "pro",
};

export function getUserPlan(user: User | null): "free" | "pro" {
    if (!user) return "free";
    if (user.plan === 'pro' || user.plan === 'lab_pro') return 'pro';
    return "free";
}

export function canUseFeature(user: User | null, featureKey: FeatureKey): boolean {
    const plan = getUserPlan(user);
    const requiredPlan = FEATURE_PLAN_MAP[featureKey];

    // If feature is free, everyone has access (implicit if not in map, but map covers all keys)
    if (requiredPlan === "free") return true;

    // If user is pro, they have access
    if (plan === "pro") return true;

    // Also check explicit isPro flag for safety
    if (user?.isPro) return true;

    return false;
}

export function isProUser(user: User | null): boolean {
    return getUserPlan(user) === 'pro';
}
