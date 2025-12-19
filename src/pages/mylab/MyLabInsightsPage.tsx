import React, { useMemo } from 'react';
import { Page, BatchStatus } from '@/types';
import MyLabLayout from './MyLabLayout';
import { LockFeature } from '@/components/auth/LockFeature';
import { ChartBarIcon, FireIcon, BeakerIcon, StarIcon, BatchesIcon } from '@/components/ui/Icons';
import { useUser } from '@/contexts/UserProvider';
import { useTranslation } from '@/i18n';

interface Stat {
    label: string;
    value: string | number;
    sublabel?: string;
    icon: React.ReactNode;
    color: string;
}

const MyLabInsightsPage: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
    const { batches } = useUser();
    const { t } = useTranslation();

    const stats = useMemo(() => {
        const completed = batches.filter(b => b.status !== BatchStatus.DRAFT);
        const total = completed.length;

        if (total === 0) return null;

        // Ratings
        const ratedBatches = completed.filter(b => b.rating && b.rating > 0);
        const avgRating = ratedBatches.length > 0
            ? (ratedBatches.reduce((acc, b) => acc + (b.rating || 0), 0) / ratedBatches.length).toFixed(1)
            : '-';

        const successCount = completed.filter(b => b.rating && b.rating >= 4).length;
        const successRate = Math.round((successCount / total) * 100);

        // Styles
        const styleCounts: Record<string, number> = {};
        completed.forEach(b => {
            const style = b.doughConfig.recipeStyle;
            styleCounts[style] = (styleCounts[style] || 0) + 1;
        });

        const sortedStyles = Object.entries(styleCounts)
            .sort(([, a], [, b]) => b - a)
            .map(([style, count]) => ({ style, count }));

        const topStyle = sortedStyles.length > 0 ? sortedStyles[0].style : '-';

        return {
            total,
            avgRating,
            successRate,
            topStyle,
            sortedStyles
        };
    }, [batches]);

    const statCards: Stat[] = stats ? [
        {
            label: t('mylab.total_batches'),
            value: stats.total,
            icon: <BatchesIcon />,
            color: "bg-blue-100 text-blue-600"
        },
        {
            label: t('mylab.avg_rating'),
            value: stats.avgRating,
            icon: <StarIcon />,
            color: "bg-amber-100 text-amber-600"
        },
        {
            label: t('mylab.success_rate'),
            value: `${stats.successRate}%`,
            sublabel: "> 4 Stars",
            icon: <ChartBarIcon />,
            color: "bg-emerald-100 text-dlp-brand-hover"
        },
        {
            label: t('mylab.top_style'),
            value: t(`form.${stats.topStyle.toLowerCase()}`, { defaultValue: stats.topStyle }),
            icon: <FireIcon />,
            color: "bg-orange-100 text-orange-600"
        },
    ] : [];

    return (
        <MyLabLayout activePage="mylab/insights" onNavigate={onNavigate}>
            <div className="animate-fade-in pb-20">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 ">{t('mylab.insights')}</h1>
                    <p className="mt-2 text-slate-600 ">
                        Analyze patterns and trends in your baking.
                    </p>
                </div>

                <LockFeature
                    featureKey="mylab.unlimited_advanced"
                    customMessage="Unlock deep insights into your baking habits, flour usage, and sensory notes with Lab Pro."
                >
                    {!stats ? (
                        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
                            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <ChartBarIcon className="h-8 w-8 text-slate-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900">{t('mylab.no_data_found')}</h3>
                            <p className="text-slate-500 mt-2 max-w-sm mx-auto">
                                Complete at least one batch to generate insights.
                            </p>
                            <button
                                onClick={() => onNavigate('calculator')}
                                className="mt-6 text-dlp-brand-hover font-bold hover:underline"
                            >{t('mylab.start_baking')}</button>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {/* Key Stats Grid */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                {statCards.map((stat, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${stat.color}`}>
                                            {React.cloneElement(stat.icon as React.ReactElement, { className: 'w-5 h-5' })}
                                        </div>
                                        <div className="text-3xl font-black text-slate-900">{stat.value}</div>
                                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">{stat.label}</div>
                                        {stat.sublabel && <div className="text-[10px] text-slate-400 mt-0.5">{stat.sublabel}</div>}
                                    </div>
                                ))}
                            </div>

                            {/* Style Distribution */}
                            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm">
                                <h3 className="text-lg font-bold text-slate-900 mb-6">{t('mylab.style_distribution')}</h3>
                                <div className="space-y-4">
                                    {stats.sortedStyles.map((item, index) => {
                                        const percentage = Math.round((item.count / stats.total) * 100);
                                        return (
                                            <div key={item.style}>
                                                <div className="flex justify-between text-sm font-medium mb-1">
                                                    <span className="text-slate-700">{t(`form.${item.style.toLowerCase()}`, { defaultValue: item.style })}</span>
                                                    <span className="text-slate-500">{item.count} batches ({percentage}%)</span>
                                                </div>
                                                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                                                    <div
                                                        className="bg-dlp-brand h-2.5 rounded-full"
                                                        style={{ width: `${percentage}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                </LockFeature>
            </div>
        </MyLabLayout>
    );
};

export default MyLabInsightsPage;


