import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { Page } from '@/types';
import { CanonicalRoute, normalizeNavigateInput, parseHash, toHash } from '@/app/routing';

interface RouterContextType {
    route: CanonicalRoute;
    routeParams: string | null;
    navigate: (page: Page, params?: string) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const RouterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [route, setRoute] = useState<CanonicalRoute>('mylab');
    const [routeParams, setRouteParams] = useState<string | null>(null);

    const navigate = useCallback((page: Page, params?: string) => {
        const normalized = normalizeNavigateInput(page, params);
        const newHash = toHash(normalized.route, normalized.params || undefined);

        if (window.location.hash !== newHash) {
            window.location.hash = newHash;
        } else {
            setRoute(normalized.route);
            setRouteParams(normalized.params);
        }
    }, []);

    useEffect(() => {
        const handleHashChange = () => {
            const parsed = parseHash(window.location.hash);
            setRoute(parsed.route);
            setRouteParams(parsed.params);
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange(); // Handle initial load

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, [navigate]);

    return (
        <RouterContext.Provider value={{ route, routeParams, navigate }}>
            {children}
        </RouterContext.Provider>
    );
};

export const useRouter = () => {
    const context = useContext(RouterContext);
    if (context === undefined) {
        throw new Error('useRouter must be used within a RouterProvider');
    }
    return context;
};
