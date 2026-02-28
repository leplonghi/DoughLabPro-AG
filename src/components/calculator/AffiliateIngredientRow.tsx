import React from 'react';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { InfoTooltip } from '@/components/ui/InfoTooltip';
import {
    FlourIcon,
    WaterIcon,
    SaltIcon,
    YeastIcon,
    OilIcon,
    SugarIcon,
    BeakerIcon,
    InfoIcon,
    ShoppingBagIcon as ShoppingBag,
    ExternalLinkIcon,
    ChevronRightIcon as ChevronRight
} from '@/components/ui/Icons';

interface AffiliateIngredientRowProps {
    label: string;
    grams: number;
    displayValue: string;
    hydration?: number;
    subtext?: React.ReactNode;
}

const AFFILIATE_LINKS = {
    strongFlour: 'https://amazon.com/s?k=strong+bread+flour+high+protein',
    precisionScale: 'https://amazon.com/s?k=0.01g+precision+kitchen+scale',
    freshYeast: 'https://amazon.com/s?k=instant+yeast'
};

const getIngredientIcon = (label: string) => {
    const labelStr = String(label || '');
    const l = labelStr.toLowerCase();
    const iconClass = "w-4 h-4 text-dlp-brand-lime/80";
    if (l.includes('flour')) return <FlourIcon className={iconClass} />;
    if (l.includes('water')) return <WaterIcon className={iconClass} />;
    if (l.includes('salt')) return <SaltIcon className={iconClass} />;
    if (l.includes('yeast')) return <YeastIcon className={iconClass} />;
    if (l.includes('oil')) return <OilIcon className={iconClass} />;
    if (l.includes('sugar')) return <SugarIcon className={iconClass} />;
    return <BeakerIcon className={iconClass} />;
};

export const AffiliateIngredientRow: React.FC<AffiliateIngredientRowProps> = ({
    label,
    grams,
    displayValue,
    hydration = 60,
    subtext
}) => {
    const labelStr = String(label || '');
    const isFlour = labelStr.toLowerCase().includes('flour');
    const isYeast = labelStr.toLowerCase().includes('yeast');
    const isSalt = labelStr.toLowerCase().includes('salt');

    return (
        <div className="group flex flex-col py-2.5 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 -mx-4 px-4 transition-colors">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {getIngredientIcon(label)}
                    </div>
                    <div className="min-w-0">
                        <div className="flex items-center gap-2">
                            <p className="font-semibold text-slate-700 leading-tight">{labelStr}</p>
                            {isYeast && (
                                <InfoTooltip content="Instant Yeast is more concentrated than Fresh Yeast. 1g Instant ≈ 3g Fresh.">
                                    <InfoIcon className="w-3.5 h-3.5 text-slate-300 hover:text-dlp-brand-lime transition-colors cursor-help" />
                                </InfoTooltip>
                            )}
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    <span className="text-base font-bold text-slate-900 block font-heading leading-tight">
                        {displayValue}
                    </span>
                    {subtext && (
                        <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block">
                            {subtext}
                        </span>
                    )}
                </div>
            </div>

            {/* Smart Suggestions */}
            {(isFlour && hydration > 65) || isSalt ? (
                <div className="mt-2 pl-11 space-y-2">
                    {isFlour && hydration > 65 && (
                        <ExternalLink
                            href={AFFILIATE_LINKS.strongFlour}
                            className="group flex items-center justify-between p-3 bg-white rounded-xl border border-slate-100 transition-all hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 active:scale-[0.98] min-h-[44px]"
                        >
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-emerald-50 rounded-lg group-hover:bg-emerald-100 transition-colors">
                                    <ShoppingBag className="w-3.5 h-3.5 text-emerald-600" />
                                </div>
                                <span className="text-[11px] font-bold text-slate-600 group-hover:text-emerald-700 transition-colors">
                                    Recommended: High Protein Flour (W300+)
                                </span>
                            </div>
                            <ExternalLinkIcon className="w-3.5 h-3.5 text-slate-300 group-hover:text-emerald-500 transition-colors" />
                        </ExternalLink>
                    )}

                    {isSalt && (
                        <ExternalLink
                            href={AFFILIATE_LINKS.precisionScale}
                            className="group flex items-center justify-between p-3 bg-white rounded-xl border border-slate-100 transition-all hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 active:scale-[0.98] min-h-[44px]"
                        >
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-emerald-50 rounded-lg group-hover:bg-emerald-100 transition-colors">
                                    <ExternalLinkIcon className="w-3.5 h-3.5 text-emerald-600" />
                                </div>
                                <span className="text-[11px] font-bold text-slate-600 group-hover:text-emerald-700 transition-colors">
                                    Need precision? Get a 0.01g Scale
                                </span>
                            </div>
                            <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-emerald-500 transition-colors" />
                        </ExternalLink>
                    )}
                </div>
            ) : null}
        </div>
    );
};

