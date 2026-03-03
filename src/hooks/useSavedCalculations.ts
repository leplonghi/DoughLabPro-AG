import { useState, useCallback, useEffect } from 'react';
import { SavedCalculation } from '@/types/savedCalculation';
import { getCalculationHistory, saveCalculation, deleteCalculation } from '@/services/calculationService';

import { useUser } from '@/contexts/UserProvider';

export function useSavedCalculations(userId: string | undefined, isPro: boolean = false) {
    const [calculations, setCalculations] = useState<SavedCalculation[]>([]);
    const [loading, setLoading] = useState(false);
    const { setUpgradeModalConfig } = useUser();

    const maxResults = isPro ? 100 : 5;

    const load = useCallback(async () => {
        if (!userId) {
            setCalculations([]);
            return;
        }

        setLoading(true);
        try {
            const data = await getCalculationHistory(userId, maxResults);
            setCalculations(data);
        } catch (e) {
            console.error("Error loading calculation history", e);
        } finally {
            setLoading(false);
        }
    }, [userId, maxResults]);

    useEffect(() => {
        load();
    }, [load]);

    const save = async (data: Omit<SavedCalculation, 'id' | 'userId' | 'createdAt' | 'updatedAt'>) => {
        if (!userId) return;

        if (!isPro && calculations.length >= 5) {
            setUpgradeModalConfig({
                isOpen: true,
                title: 'Limite de histórico atingido',
                description: 'Você já tem 5 cálculos salvos. Com o Pro, salve quantos quiser — sem limite.',
            });
            return;
        }

        await saveCalculation(userId, data);
        load(); // Refresh history immediately
    };

    const remove = async (calcId: string) => {
        if (!userId) return;
        await deleteCalculation(userId, calcId);
        setCalculations(prev => prev.filter(c => c.id !== calcId)); // Optimistic UI update
    };

    return { calculations, loading, save, load, remove };
}
