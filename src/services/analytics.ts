export const logEvent = (eventName: string, params?: Record<string, any>) => {
    console.log(`[Analytics] ${eventName}`, params);
    // In a real app, you would send this to Firebase Analytics or similar
};
