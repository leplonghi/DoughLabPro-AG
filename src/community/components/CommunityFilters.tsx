import React from 'react';
import { Filter, Flame, Clock, TrendingUp } from 'lucide-react';
import { useTranslation } from '@/i18n';

interface CommunityFiltersProps {
    activeFilter: string;
    onFilterChange: (filter: string) => void;
}

export const CommunityFilters: React.FC<CommunityFiltersProps> = ({ activeFilter, onFilterChange }) => {
  const { t } = useTranslation();
    const filters = [
        { id: 'trending', label: 'Trending', icon: TrendingUp },
        { id: 'latest', label: 'Latest', icon: Clock },
        { id: 'top', label: 'Top Rated', icon: Flame },
    ];

    return (
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex items-center gap-2 mr-2 text-gray-400">
                <Filter className="h-4 w-4" />
                <span className="text-xs font-medium uppercase tracking-wider">{t('community.sort_by')}</span>
            </div>

            {filters.map((filter) => {
                const Icon = filter.icon;
                const isActive = activeFilter === filter.id;

                return (
                    <button
                        key={filter.id}
                        onClick={() => onFilterChange(filter.id)}
                        className={`
              flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all
              ${isActive
                                ? 'bg-dlp-accent text-white border border-dlp-accent shadow-dlp-sm'
                                : 'bg-dlp-bg-card text-dlp-text-secondary hover:bg-dlp-bg-muted border border-dlp-border'}
            `}
                    >
                        <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-dlp-text-muted'}`} />
                        {filter.label}
                    </button>
                );
            })}
        </div>
    );
};
