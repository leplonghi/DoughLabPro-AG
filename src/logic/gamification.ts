
export interface UserLevel {
    level: number;
    title: string;
    nextLevelThreshold: number;
    currentProgress: number; // 0 to 100
    bakesNeeded: number;
}

export const calculateUserLevel = (totalBakes: number): UserLevel => {
    let level = 1;
    let title = 'Home Baker'; // Default, will translate in component
    let nextLevelThreshold = 5;
    let prevLevelThreshold = 0;

    if (totalBakes >= 50) {
        level = 4;
        title = 'Master Pizzaiolo';
        prevLevelThreshold = 50;
        nextLevelThreshold = 100; // Arbitrary next goal
    } else if (totalBakes >= 20) {
        level = 3;
        title = 'Pizzaiolo';
        prevLevelThreshold = 20;
        nextLevelThreshold = 50;
    } else if (totalBakes >= 5) {
        level = 2;
        title = 'Enthusiast';
        prevLevelThreshold = 5;
        nextLevelThreshold = 20;
    } else {
        level = 1;
        title = 'Home Baker';
        prevLevelThreshold = 0;
        nextLevelThreshold = 5;
    }

    // Calculate progress
    let progress = 0;
    if (level === 4) {
        progress = 100; // Cap at max level for now, or continue scaling
        // Or if we want to show progress to 100 bakes:
        // progress = ((totalBakes - 50) / (100 - 50)) * 100;
    } else {
        const range = nextLevelThreshold - prevLevelThreshold;
        const current = totalBakes - prevLevelThreshold;
        progress = (current / range) * 100;
    }

    return {
        level,
        title,
        nextLevelThreshold,
        currentProgress: Math.min(Math.max(progress, 0), 100),
        bakesNeeded: nextLevelThreshold - totalBakes
    };
};

export const getLevelTitleKey = (level: number): string => {
    switch (level) {
        case 4: return 'ui.master_pizzaiolo_375';
        case 3: return 'ui.pizzaiolo_376';
        case 2: return 'ui.enthusiast_377';
        default: return 'ui.home_baker'; // Make sure this key exists or fallback
    }
};
