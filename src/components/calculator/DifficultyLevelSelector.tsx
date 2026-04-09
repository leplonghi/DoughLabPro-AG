import React from 'react';
import { DifficultyLevel } from '@/types';
import { useTranslation } from '@/i18n';

interface DifficultyLevelSelectorProps {
  value: DifficultyLevel;
  onChange: (level: DifficultyLevel) => void;
}

const OPTIONS: Array<{ id: DifficultyLevel; label: string; hint: string }> = [
  { id: 'beginner', label: 'Beginner', hint: 'More guidance and safer defaults' },
  { id: 'intermediate', label: 'Intermediate', hint: 'Balanced control and speed' },
  { id: 'advanced', label: 'Advanced', hint: 'Maximum technical control' }
];

export const DifficultyLevelSelector: React.FC<DifficultyLevelSelectorProps> = ({ value, onChange }) => {
  const { t } = useTranslation(['calculator']);

  return (
    <div className="space-y-2">
      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#385343] opacity-70 dark:text-emerald-100/70">
        {t('calculator.difficulty_level', { defaultValue: 'DIFFICULTY LEVEL' })}
      </p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        {OPTIONS.map((option) => {
          const active = value === option.id;
          return (
            <button
              key={option.id}
              onClick={() => onChange(option.id)}
              className={`rounded-[1.3rem] border px-4 py-3 text-left transition-all ${
                active
                  ? 'dlp-calc-option dlp-calc-option--active'
                  : 'dlp-calc-panel--subtle text-slate-600 hover:border-emerald-200 hover:text-slate-900 dark:text-slate-200'
              }`}
            >
              <div className="text-sm font-bold">{t(`calculator.level_${option.id}`, { defaultValue: option.label })}</div>
              <div className={`mt-1 text-[11px] leading-relaxed ${active ? 'text-[#1B4332]/80 dark:text-emerald-100/80' : 'text-slate-500 dark:text-slate-400'}`}>
                {t(`calculator.level_${option.id}_hint`, { defaultValue: option.hint })}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DifficultyLevelSelector;
