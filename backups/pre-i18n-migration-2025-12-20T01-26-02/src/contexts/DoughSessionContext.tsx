import React, { createContext, useContext, useEffect, useState, useRef, useCallback } from 'react';
import { DoughSessionState, PrefermentType, ScheduleMode } from '@/types';

// Default State
const DEFAULT_SESSION: DoughSessionState = {
    meta: {
        version: 2,
        sessionId: '', // Will be generated
        lastSaved: Date.now(),
    },
    dough: {
        flour: 100, // Basis 100%
        water: 65,
        salt: 3,
        yeast: 0.5,
        hydration: 65,
        yieldCount: 4,
        ballWeight: 250,
        prefermentType: 'DIRECT',
    },
    schedule: {
        mode: 'MANUAL_TIME',
        targetDate: null,
        computedStartTime: null,
    },
    variants: [],
    settings: {
        safetyBuffer: 10,
    },
};

interface DoughSessionContextType {
    session: DoughSessionState;
    updateSession: (updates: Partial<DoughSessionState> | ((prev: DoughSessionState) => Partial<DoughSessionState>)) => void;
    updateDough: (updates: Partial<DoughSessionState['dough']>) => void;
    updateSchedule: (updates: Partial<DoughSessionState['schedule']>) => void;
    updateSettings: (updates: Partial<DoughSessionState['settings']>) => void;
    resetSession: () => void;
    isSaving: boolean;
}

const DoughSessionContext = createContext<DoughSessionContextType | undefined>(undefined);

const STORAGE_KEY = 'doughlab_session_v2';
const DEBOUNCE_MS = 500;

export const DoughSessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [session, setSession] = useState<DoughSessionState>(() => {
        // 1.2 Auto-Load
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                // Basic validation/migration could go here
                if (parsed.meta?.version === 2) {
                    return parsed;
                }
            }
        } catch (e) {
            console.error('Failed to load session', e);
        }
        return {
            ...DEFAULT_SESSION,
            meta: { ...DEFAULT_SESSION.meta, sessionId: crypto.randomUUID() }
        };
    });

    const [isSaving, setIsSaving] = useState(false);
    const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // 1.2 Auto-Persistence Hook Logic
    useEffect(() => {
        if (saveTimeoutRef.current) {
            clearTimeout(saveTimeoutRef.current);
        }

        setIsSaving(true);
        saveTimeoutRef.current = setTimeout(() => {
            try {
                const sessionToSave = {
                    ...session,
                    meta: {
                        ...session.meta,
                        lastSaved: Date.now()
                    }
                };
                localStorage.setItem(STORAGE_KEY, JSON.stringify(sessionToSave));
                // Update state silently to reflect lastSaved without triggering loop if possible,
                // but strictly we just save here.
            } catch (e) {
                console.error('Failed to save session', e);
            } finally {
                setIsSaving(false);
            }
        }, DEBOUNCE_MS);

        return () => {
            if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
        };
    }, [session]);

    // 1.2 Link Safety
    // Ensure all external links have target="_blank" and rel="noopener noreferrer"
    useEffect(() => {
        const handleLinks = () => {
            const links = document.querySelectorAll('a');
            links.forEach(link => {
                if (link.hostname !== window.location.hostname && link.href.startsWith('http')) {
                    if (!link.target) link.target = '_blank';
                    if (link.target === '_blank') {
                        link.rel = 'noopener noreferrer';
                    }
                }
            });
        };

        // Run initially
        handleLinks();

        // Observation for dynamic content
        const observer = new MutationObserver(handleLinks);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => observer.disconnect();
    }, []);

    const updateSession = useCallback((updates: Partial<DoughSessionState> | ((prev: DoughSessionState) => Partial<DoughSessionState>)) => {
        setSession(prev => {
            const newValues = typeof updates === 'function' ? updates(prev) : updates;
            return { ...prev, ...newValues };
        });
    }, []);

    const updateDough = useCallback((updates: Partial<DoughSessionState['dough']>) => {
        setSession(prev => ({
            ...prev,
            dough: { ...prev.dough, ...updates }
        }));
    }, []);

    const updateSchedule = useCallback((updates: Partial<DoughSessionState['schedule']>) => {
        setSession(prev => ({
            ...prev,
            schedule: { ...prev.schedule, ...updates }
        }));
    }, []);

    const updateSettings = useCallback((updates: Partial<DoughSessionState['settings']>) => {
        setSession(prev => ({
            ...prev,
            settings: { ...prev.settings, ...updates }
        }));
    }, []);

    const resetSession = useCallback(() => {
        setSession({
            ...DEFAULT_SESSION,
            meta: { ...DEFAULT_SESSION.meta, sessionId: crypto.randomUUID() }
        });
    }, []);

    const value = {
        session,
        updateSession,
        updateDough,
        updateSchedule,
        updateSettings,
        resetSession,
        isSaving
    };

    return (
        <DoughSessionContext.Provider value={value}>
            {children}
        </DoughSessionContext.Provider>
    );
};

export const useDoughSession = () => {
    const context = useContext(DoughSessionContext);
    if (context === undefined) {
        throw new Error('useDoughSession must be used within a DoughSessionProvider');
    }
    return context;
};
