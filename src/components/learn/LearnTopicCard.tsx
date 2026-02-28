import React from 'react';
import { useTranslation } from '@/i18n';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface LearnTopicCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    onClick: () => void;
    isPro?: boolean;
}

const LearnTopicCard: React.FC<LearnTopicCardProps> = ({ icon, title, description, onClick, isPro }) => {
    const { t } = useTranslation();
    return (
        <button
            onClick={onClick}
            className="group h-full w-full text-left flex flex-col rounded-2xl border border-slate-200/50 bg-white/90 backdrop-blur-sm p-6 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 hover:border-emerald-200/60 relative overflow-hidden"
        >
            {/* Left Gradient Accent Strip */}
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-emerald-400 to-lime-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Subtle hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 to-lime-50/0 group-hover:from-emerald-50/40 group-hover:to-lime-50/20 transition-all duration-500 rounded-2xl pointer-events-none" />

            {isPro && (
                <div className="absolute top-3 right-3 bg-gradient-to-r from-dlp-brand to-dlp-brand-hover text-white text-[10px] font-black px-2.5 py-1 rounded-lg shadow-sm z-10 uppercase tracking-wider">
                    {t('learn.pro')}
                </div>
            )}

            {/* Icon Container - Premium */}
            <div className="relative flex-shrink-0 h-14 w-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-lime-50 border border-emerald-200/60 flex items-center justify-center text-dlp-brand shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:shadow-md group-hover:border-emerald-300/70">
                {icon}
            </div>

            <div className="relative mt-5 flex-grow">
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-800 transition-colors duration-300">
                    {title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {description}
                </p>
            </div>

            {/* Bottom CTA with arrow */}
            <div className="relative mt-5 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-500 group-hover:text-emerald-600 transition-colors duration-300">
                    {t('common.explore')}
                </span>
                <div className="h-8 w-8 rounded-xl bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-emerald-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-emerald-500/20 transition-all duration-500 translate-x-1 group-hover:translate-x-0 opacity-40 group-hover:opacity-100">
                    <ArrowRightIcon className="w-4 h-4" />
                </div>
            </div>
        </button>
    );
};

export default LearnTopicCard;
