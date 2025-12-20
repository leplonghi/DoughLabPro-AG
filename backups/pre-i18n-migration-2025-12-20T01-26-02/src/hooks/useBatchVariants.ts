
import { useCallback, useMemo } from 'react';
import { useDoughSession } from '@/contexts/DoughSessionContext';
import { DoughSessionVariant } from '@/types';
import { v4 as uuidv4 } from 'uuid';

export const useBatchVariants = () => {
    const { session, updateSession } = useDoughSession();
    const { variants, dough } = session;

    // Helper: auto-generate default variants if empty
    // e.g. 1 "Main Batch" with full count
    const ensureInitialized = useCallback(() => {
        if (variants.length === 0) {
            updateSession((prev) => ({
                variants: [
                    {
                        id: crypto.randomUUID(),
                        name: 'Main Batch',
                        count: prev.dough.yieldCount,
                        addOns: []
                    }
                ]
            }));
        }
    }, [variants.length, updateSession]);

    const addVariant = useCallback((name: string = 'New Variant') => {
        updateSession((prev) => {
            // Allocate remaining count if any
            const currentTotal = prev.variants.reduce((sum, v) => sum + v.count, 0);
            const remaining = Math.max(0, prev.dough.yieldCount - currentTotal);

            return {
                variants: [
                    ...prev.variants,
                    {
                        id: crypto.randomUUID(),
                        name,
                        count: remaining,
                        addOns: []
                    }
                ]
            };
        });
    }, [updateSession]);

    const removeVariant = useCallback((id: string) => {
        updateSession((prev) => ({
            variants: prev.variants.filter(v => v.id !== id)
        }));
    }, [updateSession]);

    const updateVariant = useCallback((id: string, updates: Partial<DoughSessionVariant>) => {
        updateSession((prev) => ({
            variants: prev.variants.map(v => v.id === id ? { ...v, ...updates } : v)
        }));
    }, [updateSession]);

    // Validation Results
    const totalVariantCount = useMemo(() =>
        variants.reduce((sum, v) => sum + v.count, 0),
        [variants]);

    const isValid = totalVariantCount === dough.yieldCount;
    const remainingCount = dough.yieldCount - totalVariantCount;

    return {
        variants,
        addVariant,
        removeVariant,
        updateVariant,
        ensureInitialized,
        validation: {
            isValid,
            totalVariantCount,
            remainingCount,
            totalYield: dough.yieldCount
        }
    };
};
