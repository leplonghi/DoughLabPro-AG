import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { Page, PrimaryPage } from '@/types';
import { useTranslation } from '@/i18n';

interface RouterContextType {
    route: Page;
    routeParams: string | null;
    navigate: (page: Page, params?: string) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const RouterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { t } = useTranslation();
    const [route, setRoute] = useState<Page>('mylab');
    const [routeParams, setRouteParams] = useState<string | null>(null);

    const navigate = useCallback((page: Page, params?: string) => {
        const newHash = params ? `#/${page}/${params}` : `#/${page}`;
        if (window.location.hash !== newHash) {
            window.location.hash = newHash;
        } else {
            // Force update if hash is same but we want to trigger route logic (rare)
            // Or just handle the state update manually if hash doesn't change
            // But usually hash change triggers the listener.
            // If we are already on the hash, we might want to force state update?
            // For now, let's trust the listener, but we can also set state directly if needed.
            // Actually, if hash doesn't change, listener won't fire.
            // So we should manually update state if needed.

            const hash = (page as string) + (params ? `/${params}` : '');
            const parts = hash.split('?')[0].split('/');

            if (page === 'styles' && params) {
                setRoute('styles/detail');
                setRouteParams(params);
            } else if ((parts[0] === 'batch') && parts.length > 1) {
                setRoute(parts[0] as Page);
                setRouteParams(parts[1]);
            } else if (hash.startsWith('mylab/levain/') && parts.length > 2) {
                setRoute('mylab/levain/detail');
                setRouteParams(parts[2]);
            } else if (hash.startsWith('mylab/consistency/') && parts.length > 2) {
                setRoute('mylab/consistency/detail');
                setRouteParams(parts[2]);
            } else if (hash.startsWith('community/') && parts.length > 1) {
                setRoute('community/detail');
                setRouteParams(parts[1]);
            } else {
                setRoute(hash as Page);
                setRouteParams(null);
            }
        }
    }, []);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.slice(2);
            if (!hash) {
                navigate('mylab');
                return;
            }

            const parts = hash.split('?')[0].split('/');



            if (parts[0] === 'batch' && parts.length > 1) {
                setRoute('batch');
                setRouteParams(parts[1]);
            } else if (hash.startsWith('styles/detail/') && parts.length > 2) {
                setRoute('styles/detail');
                setRouteParams(parts[2]);
            } else if (hash.startsWith('mylab/levain/detail/') && parts.length > 3) {
                setRoute('mylab/levain/detail');
                setRouteParams(parts[3]);
            } else if (hash.startsWith('mylab/consistency/detail/') && parts.length > 3) {
                setRoute('mylab/consistency/detail');
                setRouteParams(parts[3]);
            } else if (hash.startsWith('community/post/') && parts.length > 2) {
                setRoute('community/post');
                setRouteParams(parts[2]);
            } else if (hash.startsWith('community/detail/') && parts.length > 2) {
                // Legacy support or alias
                setRoute('community/post');
                setRouteParams(parts[2]);
            } else if (hash.startsWith('community/user/') && parts.length > 2) {
                setRoute('community/user');
                setRouteParams(parts[2]);
            } else if (hash.startsWith('community/create')) {
                setRoute('community/create');
                setRouteParams(null);
            } else if (hash.startsWith('learn/article/') && parts.length > 2) {
                setRoute('learn/article');
                setRouteParams(parts[2]);
            } else if (hash.startsWith('learn/search/') && parts.length > 2) {
                setRoute('learn/search');
                setRouteParams(parts[2]);
            } else if (hash.startsWith('learn/category/') && parts.length > 2) {
                setRoute('learn/category');
                setRouteParams(decodeURIComponent(parts[2]));
            } else {
                setRoute(hash.split('?')[0] as Page);
                setRouteParams(null);
            }
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
