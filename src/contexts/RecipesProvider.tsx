import React, { createContext, useContext, ReactNode, useMemo } from 'react';

// Placeholder provider for future recipe management
interface RecipesContextType {
    recipes: any[];
    favoriteRecipes: any[];
}

const RecipesContext = createContext<RecipesContextType | undefined>(undefined);

export const RecipesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const value: RecipesContextType = useMemo(() => ({
        recipes: [],
        favoriteRecipes: [],
    }), []);

    return <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>;
};

export const useRecipes = (): RecipesContextType => {
    const context = useContext(RecipesContext);
    if (context === undefined) {
        throw new Error('useRecipes must be used within a RecipesProvider');
    }
    return context;
};
