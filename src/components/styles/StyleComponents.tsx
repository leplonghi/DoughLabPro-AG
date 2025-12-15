import React from 'react';
import { Droplets, MapPin, Thermometer, Clock, ChefHat, AlertTriangle, Info } from 'lucide-react';
import { StyleDefinition } from '../../types/styleDefinition';
import { useTranslation } from '@/i18n';

export const HydrationRangeBadge: React.FC<{ range: [number, number] }> = ({ range }) => (
    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
        <Droplets className="w-3 h-3 mr-1" />
        {range[0]}% - {range[1]}%
    </div>
);

export const OriginBadge: React.FC<{ origin: StyleDefinition['origin'] }> = ({ origin }) => (
    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 text-stone-800 border border-stone-200">
        <MapPin className="w-3 h-3 mr-1" />
        {origin.country} {origin.region && `(${origin.region})`}
    </div>
);

export const DifficultyBadge: React.FC<{ difficulty: string }> = ({ difficulty }) => {
    const { t } = useTranslation();
    const colors = {
        Easy: 'bg-green-100 text-green-800',
        Medium: 'bg-yellow-100 text-yellow-800',
        Hard: 'bg-orange-100 text-orange-800',
        Expert: 'bg-red-100 text-red-800',
    };
    const colorClass = colors[difficulty as keyof typeof colors] || 'bg-gray-100 text-gray-800';

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClass}`}>
            {difficulty}
        </span>
    );
};

export const DoughImpactList: React.FC<{ impacts: string[] }> = ({ impacts }) => {
    const { t } = useTranslation();
    return (
        <div className="space-y-2">
            <h4 className="text-sm font-semibold text-stone-900 flex items-center">
                <ChefHat className="w-4 h-4 mr-2 text-amber-600" />{t('common.dough_characteristics')}</h4>
            <ul className="list-disc list-inside text-sm text-stone-600 space-y-1">
                {impacts.map((impact, idx) => (
                    <li key={idx}>{impact}</li>
                ))}
            </ul>
        </div>
    );
};

export const BakingImpactList: React.FC<{ impacts: string[] }> = ({ impacts }) => {
    const { t } = useTranslation();
    return (
        <div className="space-y-2">
            <h4 className="text-sm font-semibold text-stone-900 flex items-center">
                <Thermometer className="w-4 h-4 mr-2 text-red-600" />{t('common.baking_profile')}</h4>
            <ul className="list-disc list-inside text-sm text-stone-600 space-y-1">
                {impacts.map((impact, idx) => (
                    <li key={idx}>{impact}</li>
                ))}
            </ul>
        </div>
    );
};

export const RegionalVariantsGrid: React.FC<{ variants: string[] }> = ({ variants }) => {
    const { t } = useTranslation();
    if (!variants || variants.length === 0) return null;
    return (
        <div className="mt-4">
            <h4 className="text-sm font-semibold text-stone-900 mb-2">{t('general.regional_variants')}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {variants.map((variant, idx) => (
                    <div key={idx} className="p-2 bg-stone-50 rounded border border-stone-200 text-sm text-stone-700">
                        {variant}
                    </div>
                ))}
            </div>
        </div>
    );
};
