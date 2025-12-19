import React from 'react';
import { ExternalLink as ExternalLinkIcon, ShoppingBag } from 'lucide-react';
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
    InfoIcon
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
    const l = label.toLowerCase();
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
    const isFlour = label.toLowerCase().includes('flour');
    const isYeast = label.toLowerCase().includes('yeast');
    const isSalt = label.toLowerCase().includes('salt');

    return (
        <div className="group flex flex-col py-2.5 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 -mx-4 px-4 transition-colors">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {getIngredientIcon(label)}
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <p className="font-semibold text-slate-700 leading-tight">{label}</p>
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
                <div className="mt-1 pl-11">
                    {isFlour && hydration > 65 && (
                        <ExternalLink
                            href={AFFILIATE_LINKS.strongFlour}
                            className="flex items-center gap-1.5 text-[10px] text-dlp-brand-lime hover:underline font-medium"
                        >
                            <ShoppingBag className="w-3 h-3" />
                            <span>Recommended: High Protein Flour (W300+)</span>
                            <ExternalLinkIcon className="w-2.5 h-2.5 opacity-70" />
                        </ExternalLink>
                    )}

                    {isSalt && (
                        <ExternalLink
                            href={AFFILIATE_LINKS.precisionScale}
                            className="flex items-center gap-1.5 text-[10px] text-slate-400 hover:text-dlp-brand-lime transition-colors font-medium"
                        >
                            <ExternalLinkIcon className="w-3 h-3" />
                            <span>Need precision? Get a 0.01g Scale</span>
                        </ExternalLink>
                    )}
                </div>
            ) : null}
        </div>
    );
};

