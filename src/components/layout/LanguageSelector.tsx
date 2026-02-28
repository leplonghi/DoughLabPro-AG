import React, { useState, useRef, useEffect } from 'react';
import i18n from 'i18next';
import { useTranslation } from '@/i18n';
import { Locale } from '@/types';

interface LangOption {
    code: Locale;
    label: string;
    flagUrl: string;
}

const LANGUAGES: LangOption[] = [
    { code: 'en', label: 'English', flagUrl: 'https://flagcdn.com/w40/us.png' },
    { code: 'pt', label: 'Português', flagUrl: 'https://flagcdn.com/w40/br.png' },
    { code: 'es', label: 'Español', flagUrl: 'https://flagcdn.com/w40/es.png' },
];

export const LanguageSelector: React.FC = () => {
    const { t, i18n: i18nInstance } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const currentLang = (i18nInstance.resolvedLanguage || i18nInstance.language || 'en').split('-')[0];
    const current = LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0];

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (code: Locale) => {
        i18nInstance.changeLanguage(code);
        localStorage.setItem('i18nextLng', code);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={ref}>
            {/* Trigger Button — flag image only */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-medium text-dlp-text-secondary hover:bg-dlp-bg-muted border border-transparent hover:border-dlp-border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-dlp-accent/30"
                aria-label={t('ui:select_language')}
                aria-expanded={isOpen}
                aria-haspopup="listbox"
            >
                <img
                    src={current.flagUrl}
                    alt={current.label}
                    className="w-5 h-auto rounded-[3px] shadow-sm"
                    loading="eager"
                />
                <svg
                    className={`h-3 w-3 text-dlp-text-muted transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown */}
            {isOpen && (
                <div className="absolute right-0 mt-1.5 w-48 origin-top-right rounded-xl bg-dlp-bg-card shadow-dlp-lg ring-1 ring-dlp-border overflow-hidden z-50 animate-fade-in">
                    <div className="py-1">
                        {LANGUAGES.map(lang => {
                            const isActive = lang.code === currentLang;
                            return (
                                <button
                                    key={lang.code}
                                    onClick={() => handleSelect(lang.code)}
                                    className={`flex w-full items-center gap-3 px-3.5 py-2.5 text-sm transition-colors ${isActive
                                        ? 'bg-dlp-accent/8 text-dlp-accent font-semibold'
                                        : 'text-dlp-text-secondary hover:bg-dlp-bg-muted'
                                        }`}
                                >
                                    <img
                                        src={lang.flagUrl}
                                        alt={lang.label}
                                        className="w-5 h-auto rounded-[3px] shadow-sm"
                                        loading="lazy"
                                    />
                                    <span className="flex-1 text-left">{lang.label}</span>
                                    {isActive && (
                                        <svg className="h-4 w-4 text-dlp-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
