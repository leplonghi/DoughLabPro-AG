
import React, { useState } from 'react';
import { DoughStyleDefinition } from '@/types';
import { BookOpenIcon, ChevronDownIcon, GlobeAltIcon, SparklesIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';

interface StyleContextBarProps {
  style: DoughStyleDefinition;
}

const StyleContextBar: React.FC<StyleContextBarProps> = ({ style }) => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="rounded-lg border border-slate-200 bg-white shadow-sm mb-6 overflow-hidden">
      {/* Header Bar */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between p-3 cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="p-1.5 bg-white rounded-full border border-slate-200 shadow-sm text-lime-600">
            {style.source === 'official' ? <BookOpenIcon className="h-4 w-4" /> : <SparklesIcon className="h-4 w-4" />}
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500">{t('calculator.target_style')}</p>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              {style.name}
              {style.origin && (
                <span className="text-[10px] font-normal text-slate-500 flex items-center gap-1 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                  <GlobeAltIcon className="h-3 w-3" />
                  {style.origin.country}
                </span>
              )}
            </h3>
          </div>
        </div>
        <div className={`text-slate-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="p-4 border-t border-slate-200 bg-white animate-fade-in">

          {/* Technical Specs - Priority for Calculator */}
          {style.technicalProfile && (
            <div className="mb-4 grid grid-cols-2 gap-4 p-3 bg-lime-50 rounded-lg border border-lime-100">
              <div>
                <span className="block text-[10px] uppercase font-bold text-lime-700 mb-1">{t('calculator.target_hydration')}</span>
                <span className="text-lg font-bold text-lime-900">{style.technicalProfile.hydration[0]}-{style.technicalProfile.hydration[1]}%</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-bold text-lime-700 mb-1">{t('calculator.salt_range')}</span>
                <span className="text-lg font-bold text-lime-900">{style.technicalProfile.salt[0]}-{style.technicalProfile.salt[1]}%</span>
              </div>
            </div>
          )}

          <div className="mb-4">
            <h4 className="text-xs font-bold uppercase text-slate-400 mb-1">{t('calculator.description')}</h4>
            <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">{style.description}</p>
          </div>

          <div className="flex justify-end">
            <a
              href={`#/styles/detail/${style.id}`}
              className="text-xs font-semibold text-lime-600 hover:text-lime-700 flex items-center gap-1"
            >
              {t('calculator.view_full_style_guide')} &rarr;
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default StyleContextBar;
