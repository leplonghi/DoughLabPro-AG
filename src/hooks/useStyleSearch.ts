import { useState, useMemo } from 'react';
import { DoughStyleDefinition, StyleCategory } from '@/types';
import { useUser } from '@/contexts/UserProvider';
import { useTranslation } from '@/i18n';

export type SortOption = 'name' | 'newest' | 'hydration';
export type SortOrder = 'asc' | 'desc';

interface UseStyleSearchProps {
    styles: DoughStyleDefinition[];
}

export function useStyleSearch({ styles }: UseStyleSearchProps) {
    const { isFavorite } = useUser();

    // Filter States
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<StyleCategory | 'All'>('All');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [showFavorites, setShowFavorites] = useState(false);

    // Advanced Filters
    const [filterSubstyles, setFilterSubstyles] = useState(false);
    const [filterRegional, setFilterRegional] = useState(false);
    const [filterSeasonal, setFilterSeasonal] = useState(false);

    // Sorting States
    const [sortBy, setSortBy] = useState<SortOption>('name');
    const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

    // Derived Data: Available Tags
    const availableTags = useMemo(() => {
        const tags = new Set<string>();
        styles.forEach(style => {
            style.tags?.forEach(t => tags.add(t));
        });
        return Array.from(tags).sort();
    }, [styles]);

    // Derived Data: Filtered & Sorted Styles
    const filteredStyles = useMemo(() => {
        const filtered = styles.filter(style => {
            const searchLower = searchTerm.toLowerCase();
            const matchesSearch = style.name.toLowerCase().includes(searchLower) ||
                style.description.toLowerCase().includes(searchLower) ||
                (style.tags && style.tags.some(t => t.toLowerCase().includes(searchLower)));

            const matchesCategory = selectedCategory === 'All' || style.category === selectedCategory;
            const matchesTag = selectedTag ? style.tags?.includes(selectedTag) : true;
            const matchesFavorite = showFavorites ? isFavorite(style.id) : true;

            // Advanced Filters (safely checking properties that might be optional on legacy types)
            const matchesSubstyles = true; // Legacy filter disabled
            const matchesRegional = true; // Legacy filter disabled
            const matchesSeasonal = true; // Legacy filter disabled

            return matchesSearch && matchesCategory && matchesTag && matchesFavorite && matchesSubstyles && matchesRegional && matchesSeasonal;
        });

        // Sort
        return filtered.sort((a, b) => {
            let comparison = 0;
            switch (sortBy) {
                case 'name':
                    comparison = a.name.localeCompare(b.name);
                    break;
                case 'newest':
                    const dateA = new Date(a.releaseDate || 0).getTime();
                    const dateB = new Date(b.releaseDate || 0).getTime();
                    comparison = dateA - dateB;
                    break;
                case 'hydration':
                    const hydA = (a.technicalProfile?.hydration[0] || 0);
                    const hydB = (b.technicalProfile?.hydration[0] || 0);
                    comparison = hydA - hydB;
                    break;
            }
            return sortOrder === 'asc' ? comparison : -comparison;
        });
    }, [
        styles,
        searchTerm,
        selectedCategory,
        selectedTag,
        showFavorites,
        filterSubstyles,
        filterRegional,
        filterSeasonal,
        sortBy,
        sortOrder,
        isFavorite
    ]);

    return {
        // State
        searchTerm, setSearchTerm,
        selectedCategory, setSelectedCategory,
        selectedTag, setSelectedTag,
        showFavorites, setShowFavorites,
        filterSubstyles, setFilterSubstyles,
        filterRegional, setFilterRegional,
        filterSeasonal, setFilterSeasonal,
        sortBy, setSortBy,
        sortOrder, setSortOrder,

        // Data
        availableTags,
        filteredStyles,
        totalCount: styles.length,
        filteredCount: filteredStyles.length
    };
}
