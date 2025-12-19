
import { useMemo } from 'react';
import { useUser } from '@/contexts/UserProvider';
import { TOPPING_COMBINATIONS } from '@/toppings-constants';
import { ToppingCombination } from '@/types';

export const useToppings = () => {
    const { customToppings, addCustomTopping, deleteCustomTopping } = useUser();

    const allToppings = useMemo(() => {
        // Merge official and custom toppings
        // We ensure ids are unique. Custom toppings come first for prominence? 
        // Actually, official first, then custom.
        return [...TOPPING_COMBINATIONS, ...customToppings];
    }, [customToppings]);

    return {
        allToppings,
        officialToppings: TOPPING_COMBINATIONS,
        customToppings,
        addCustomTopping,
        deleteCustomTopping,
    };
};
