import React from 'react';
import { Filter, Flame, Clock, TrendingUp } from 'lucide-react';

interface CommunityFiltersProps {
    activeFilter: string;
    onFilterChange: (filter: string) => void;
}

export const CommunityFilters: React.FC<CommunityFiltersProps> = ({ activeFilter, onFilterChange }) => {
    const filters = [
        { id: 'trending', label: 'Trending', icon: TrendingUp },
        { id: 'latest', label: 'Latest', icon: Clock },
        { id: 'top', label: 'Top Rated', icon: Flame },
    ];

    return (
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex items-center gap-2 mr-2 text-slate-400">
                <Filter className="h-4 w-4" />
                <span className="text-xs font-medium uppercase tracking-wider">Sort By</span>
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
                                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}
            `}
                    >
                        <Icon className={`h-4 w-4 ${isActive ? 'text-indigo-200' : 'text-slate-400'}`} />
                        {filter.label}
                    </button>
                );
            })}
        </div>
    );
};
