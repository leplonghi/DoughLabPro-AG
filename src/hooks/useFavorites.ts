import { useState, useEffect, useCallback } from 'react';
import { addFavorite, removeFavorite, getFavorites } from '@/services/favoritesService';
import { useToast } from '@/components/ui/Toast';

export function useFavorites(userId: string | undefined) {
    const [favorites, setFavorites] = useState<Set<string>>(new Set());
    const { addToast } = useToast();

    const loadFavorites = useCallback(async () => {
        if (!userId) {
            setFavorites(new Set());
            return;
        }
        const ids = await getFavorites(userId);
        setFavorites(new Set(ids));
    }, [userId]);

    useEffect(() => {
        loadFavorites();
    }, [loadFavorites]);

    const toggleFavorite = async (e: React.MouseEvent, styleId: string, styleName: string) => {
        e.stopPropagation();
        if (!userId) return;
        const isFav = favorites.has(styleId);

        // Optimistic update
        setFavorites(prev => {
            const next = new Set(prev);
            isFav ? next.delete(styleId) : next.add(styleId);
            return next;
        });

        try {
            if (isFav) {
                await removeFavorite(userId, styleId);
                addToast(`${styleName} removido dos favoritos`, 'info');
            } else {
                await addFavorite(userId, styleId);
                addToast(`${styleName} adicionado aos favoritos`, 'success');
            }
        } catch {
            // Revert on error
            setFavorites(prev => {
                const next = new Set(prev);
                isFav ? next.add(styleId) : next.delete(styleId);
                return next;
            });
            addToast('Erro ao atualizar favoritos. Tente novamente.', 'error');
        }
    };

    const isFavorite = useCallback((id: string) => favorites.has(id), [favorites]);

    return { favorites, toggleFavorite, isFavorite };
}
