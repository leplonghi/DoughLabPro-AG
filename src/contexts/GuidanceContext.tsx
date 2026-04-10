import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { GUIDANCE_ITEMS, GUIDANCE_ITEMS_BY_ID } from '@/guidance/registry';
import { useRouter } from '@/contexts/RouterContext';
import { useUser } from '@/contexts/UserProvider';
import { logEvent } from '@/services/analytics';
import type { GuidanceItem, GuidancePreferences } from '@/types';

const GUIDANCE_STORAGE_KEY = 'doughlab.guidance.preferences.v2';
const GUIDANCE_COOLDOWN_HOURS = 72;

type GuidancePreferenceUpdater =
  | GuidancePreferences
  | ((current: GuidancePreferences) => GuidancePreferences);

interface GuidanceContextType {
  route: string;
  preferences: GuidancePreferences;
  activeTooltipId: string | null;
  getItem: (id: string) => GuidanceItem | undefined;
  getItemsForRoute: (route: string, variant?: GuidanceItem['variant']) => GuidanceItem[];
  shouldShowItem: (id: string, options?: { cooldownHours?: number; ignoreDismissed?: boolean }) => boolean;
  markSeen: (id: string) => void;
  dismissItem: (id: string) => void;
  completeItem: (id: string) => void;
  openTooltip: (id: string) => void;
  closeTooltip: (id?: string) => void;
  toggleTooltip: (id: string) => void;
  resetGuidance: () => void;
}

const GuidanceContext = createContext<GuidanceContextType | undefined>(undefined);

const createDefaultPreferences = (): GuidancePreferences => ({
  version: 1,
  items: {},
  routes: {},
});

const loadLocalPreferences = (): GuidancePreferences => {
  if (typeof window === 'undefined') return createDefaultPreferences();

  try {
    const stored = window.localStorage.getItem(GUIDANCE_STORAGE_KEY);
    if (!stored) return createDefaultPreferences();
    const parsed = JSON.parse(stored) as GuidancePreferences;
    return {
      version: 1,
      items: parsed.items || {},
      routes: parsed.routes || {},
    };
  } catch {
    return createDefaultPreferences();
  }
};

const persistLocalPreferences = (preferences: GuidancePreferences) => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(GUIDANCE_STORAGE_KEY, JSON.stringify(preferences));
};

const mergePreferences = (...sources: Array<GuidancePreferences | undefined | null>): GuidancePreferences =>
  sources.reduce<GuidancePreferences>((acc, source) => {
    if (!source) return acc;
    return {
      version: 1,
      items: { ...acc.items, ...(source.items || {}) },
      routes: { ...acc.routes, ...(source.routes || {}) },
    };
  }, createDefaultPreferences());

const updateItemProgress = (
  preferences: GuidancePreferences,
  itemId: string,
  updates: Partial<GuidancePreferences['items'][string]>,
): GuidancePreferences => ({
  ...preferences,
  items: {
    ...preferences.items,
    [itemId]: {
      ...preferences.items[itemId],
      ...updates,
    },
  },
});

const hasActiveCooldown = (timestamp?: string, cooldownHours = GUIDANCE_COOLDOWN_HOURS) => {
  if (!timestamp) return false;
  const parsed = new Date(timestamp).getTime();
  if (Number.isNaN(parsed)) return false;
  return Date.now() - parsed < cooldownHours * 60 * 60 * 1000;
};

export const GuidanceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { route } = useRouter();
  const { user, updateUser, isAuthenticated } = useUser();
  const [localPreferences, setLocalPreferences] = useState<GuidancePreferences>(() => loadLocalPreferences());
  const [activeTooltipId, setActiveTooltipId] = useState<string | null>(null);
  const hasSyncedLocalToProfileRef = useRef(false);

  const profilePreferences = user?.guidancePreferences;
  const preferences = useMemo(
    () => mergePreferences(localPreferences, profilePreferences),
    [localPreferences, profilePreferences],
  );
  const preferencesRef = useRef(preferences);

  useEffect(() => {
    preferencesRef.current = preferences;
  }, [preferences]);

  const writePreferences = useCallback(
    (nextOrUpdater: GuidancePreferenceUpdater, options?: { persistRemote?: boolean }) => {
      const nextPreferences =
        typeof nextOrUpdater === 'function'
          ? nextOrUpdater(preferencesRef.current)
          : nextOrUpdater;

      preferencesRef.current = nextPreferences;
      setLocalPreferences(nextPreferences);
      persistLocalPreferences(nextPreferences);

      if (isAuthenticated && options?.persistRemote !== false) {
        void updateUser({ guidancePreferences: nextPreferences });
      }
    },
    [isAuthenticated, updateUser],
  );

  useEffect(() => {
    if (!isAuthenticated || hasSyncedLocalToProfileRef.current) return;
    if (!profilePreferences && (Object.keys(localPreferences.items).length > 0 || Object.keys(localPreferences.routes).length > 0)) {
      hasSyncedLocalToProfileRef.current = true;
      void updateUser({ guidancePreferences: localPreferences });
      return;
    }

    if (profilePreferences) {
      hasSyncedLocalToProfileRef.current = true;
      setLocalPreferences((current) => mergePreferences(current, profilePreferences));
    }
  }, [isAuthenticated, localPreferences, profilePreferences, updateUser]);

  useEffect(() => {
    setActiveTooltipId(null);
    writePreferences((current) => ({
      ...current,
      routes: {
        ...current.routes,
        [route]: {
          lastSeenAt: new Date().toISOString(),
          timesSeen: (current.routes[route]?.timesSeen || 0) + 1,
        },
      },
    }), { persistRemote: false });
  }, [route, writePreferences]);

  const getItem = useCallback((id: string) => GUIDANCE_ITEMS_BY_ID[id], []);

  const getItemsForRoute = useCallback(
    (currentRoute: string, variant?: GuidanceItem['variant']) =>
      GUIDANCE_ITEMS.filter((item) => {
        const routeMatches = Array.isArray(item.route)
          ? item.route.includes(currentRoute)
          : item.route === currentRoute;

        if (!routeMatches) return false;
        if (variant && item.variant !== variant) return false;
        if (item.requiresAuth && !isAuthenticated) return false;
        return true;
      }).sort((a, b) => b.priority - a.priority),
    [isAuthenticated],
  );

  const shouldShowItem = useCallback(
    (id: string, options?: { cooldownHours?: number; ignoreDismissed?: boolean }) => {
      const item = GUIDANCE_ITEMS_BY_ID[id];
      if (!item) return false;
      if (item.requiresAuth && !isAuthenticated) return false;

      const progress = preferences.items[id];

      if (progress?.completed) return false;
      if (!options?.ignoreDismissed && progress?.dismissed && hasActiveCooldown(progress.lastDismissedAt, options?.cooldownHours)) {
        return false;
      }

      return true;
    },
    [isAuthenticated, preferences.items],
  );

  const markSeen = useCallback(
    (id: string) => {
      writePreferences((current) =>
        updateItemProgress(current, id, {
          lastSeenAt: new Date().toISOString(),
          timesSeen: (current.items[id]?.timesSeen || 0) + 1,
        }),
      );
      logEvent('guidance_seen', { itemId: id, route });
    },
    [route, writePreferences],
  );

  const dismissItem = useCallback(
    (id: string) => {
      writePreferences((current) =>
        updateItemProgress(current, id, {
          dismissed: true,
          lastDismissedAt: new Date().toISOString(),
        }),
      );
      if (activeTooltipId === id) {
        setActiveTooltipId(null);
      }
      logEvent('guidance_dismissed', { itemId: id, route });
    },
    [activeTooltipId, route, writePreferences],
  );

  const completeItem = useCallback(
    (id: string) => {
      writePreferences((current) =>
        updateItemProgress(current, id, {
          completed: true,
          dismissed: false,
          lastCompletedAt: new Date().toISOString(),
        }),
      );
      if (activeTooltipId === id) {
        setActiveTooltipId(null);
      }
      logEvent('guidance_completed', { itemId: id, route });
    },
    [activeTooltipId, route, writePreferences],
  );

  const openTooltip = useCallback(
    (id: string) => {
      const item = GUIDANCE_ITEMS_BY_ID[id];
      if (!item || !shouldShowItem(id)) return;

      setActiveTooltipId(id);
      markSeen(id);
      logEvent('tooltip_opened', {
        itemId: id,
        route,
        cardId: item.cardId,
      });
    },
    [markSeen, route, shouldShowItem],
  );

  const closeTooltip = useCallback(
    (id?: string) => {
      setActiveTooltipId((current) => {
        if (!current) return current;
        if (id && current !== id) return current;

        logEvent('tooltip_closed', { itemId: current, route });
        return null;
      });
    },
    [route],
  );

  const toggleTooltip = useCallback(
    (id: string) => {
      if (activeTooltipId === id) {
        closeTooltip(id);
        return;
      }
      openTooltip(id);
    },
    [activeTooltipId, closeTooltip, openTooltip],
  );

  const resetGuidance = useCallback(() => {
    const fresh = createDefaultPreferences();
    preferencesRef.current = fresh;
    setLocalPreferences(fresh);
    persistLocalPreferences(fresh);
    setActiveTooltipId(null);

    if (isAuthenticated) {
      void updateUser({ guidancePreferences: fresh });
    }

    logEvent('guidance_completed', { itemId: 'guidance_reset', route });
  }, [isAuthenticated, route, updateUser]);

  const value = useMemo<GuidanceContextType>(
    () => ({
      route,
      preferences,
      activeTooltipId,
      getItem,
      getItemsForRoute,
      shouldShowItem,
      markSeen,
      dismissItem,
      completeItem,
      openTooltip,
      closeTooltip,
      toggleTooltip,
      resetGuidance,
    }),
    [
      activeTooltipId,
      closeTooltip,
      completeItem,
      dismissItem,
      getItem,
      getItemsForRoute,
      markSeen,
      openTooltip,
      preferences,
      resetGuidance,
      route,
      shouldShowItem,
      toggleTooltip,
    ],
  );

  return <GuidanceContext.Provider value={value}>{children}</GuidanceContext.Provider>;
};

export const useGuidance = (): GuidanceContextType => {
  const context = useContext(GuidanceContext);
  if (!context) {
    throw new Error('useGuidance must be used within a GuidanceProvider');
  }
  return context;
};
