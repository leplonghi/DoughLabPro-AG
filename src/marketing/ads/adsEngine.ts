import { Ad, ADS_CATALOG } from './adsCatalog';
import { User } from '../../types';
import { getCurrentPlan } from '../../permissions';

const AD_FREQUENCY_KEY = 'doughlab_ad_views';
const SESSION_COUNT_KEY = 'doughlab_ad_session_count';
const LAST_AD_KEY = 'doughlab_last_ad_id';
const MAX_ADS_PER_SESSION = 3;

interface AdViewHistory {
    [adId: string]: number; // timestamp of last view
}

export const shouldShowAd = (user: User | null): boolean => {
    const plan = getCurrentPlan(user);
    // NEVER show ads to Lab Pro
    if (plan === 'lab_pro') return false;

    // Check session cap
    const sessionCount = parseInt(sessionStorage.getItem(SESSION_COUNT_KEY) || '0', 10);
    if (sessionCount >= MAX_ADS_PER_SESSION) return false;

    return true;
};

export const getAd = (context: string): Ad | null => {
    // Filter ads by context (if we had context tags in Ad interface, for now use all)
    // In a real app, we'd match context to ad tags.

    const lastAdId = sessionStorage.getItem(LAST_AD_KEY);

    // Filter out the last shown ad to avoid repetition
    const availableAds = ADS_CATALOG.filter(ad => ad.id !== lastAdId);

    if (availableAds.length === 0) return ADS_CATALOG[0]; // Fallback if only 1 ad exists

    // Weighted random selection could go here.
    // For now, simple random from available.
    const randomIndex = Math.floor(Math.random() * availableAds.length);
    return availableAds[randomIndex];
};

export const recordAdView = (adId: string) => {
    try {
        // Update local storage history
        const history: AdViewHistory = JSON.parse(localStorage.getItem(AD_FREQUENCY_KEY) || '{}');
        history[adId] = Date.now();
        localStorage.setItem(AD_FREQUENCY_KEY, JSON.stringify(history));

        // Update session count
        const sessionCount = parseInt(sessionStorage.getItem(SESSION_COUNT_KEY) || '0', 10);
        sessionStorage.setItem(SESSION_COUNT_KEY, (sessionCount + 1).toString());

        // Update last shown ad
        sessionStorage.setItem(LAST_AD_KEY, adId);
    } catch (e) {
        console.warn('Failed to record ad view', e);
    }
};
