import React from 'react';
import { useTranslation } from '@/i18n';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const LanguagePage: React.FC = () => {
    const { t, i18n } = useTranslation();

    // Explicitly safe-cast or use the known string, as our wrapper returns a typed locale but i18n.language is string
    const currentLang = i18n.language?.split('-')[0] || 'en';

    const languages = [
        { code: 'en', label: 'English', flag: '🇺🇸' },
        { code: 'pt', label: 'Português', flag: '🇧🇷' },
        { code: 'es', label: 'Español', flag: '🇪🇸' },
    ];

    const handleLanguageChange = (langCode: string) => {
        i18n.changeLanguage(langCode);
        // Optionally save to localStorage or user profile if needed, 
        // but i18next browser detector usually handles localStorage 'i18nextLng'
    };

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-dlp-text-primary">{t('general.language_settings', { defaultValue: 'Language Settings' })}</h1>

            <div className="grid gap-4">
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`
                            flex items-center justify-between p-4 rounded-xl border transition-all text-left
                            ${currentLang === lang.code
                                ? 'bg-dlp-accent/10 border-dlp-accent ring-1 ring-dlp-accent'
                                : 'bg-dlp-bg-card border-dlp-border hover:border-dlp-text-muted hover:bg-dlp-bg-muted/50'}
                        `}
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-2xl" role="img" aria-label={lang.label}>{lang.flag}</span>
                            <div>
                                <p className={`font-medium ${currentLang === lang.code ? 'text-dlp-accent' : 'text-dlp-text-primary'}`}>
                                    {lang.label}
                                </p>
                                <p className="text-xs text-dlp-text-muted">
                                    {lang.code === 'en' ? 'Default' : t(`languages.${lang.code}`, { defaultValue: 'Translated' })}
                                </p>
                            </div>
                        </div>

                        {currentLang === lang.code && (
                            <CheckCircleIcon className="w-6 h-6 text-dlp-accent animate-scale-in" />
                        )}
                    </button>
                ))}
            </div>

            <p className="mt-8 text-sm text-center text-dlp-text-muted">
                {t('ui.language_note', { defaultValue: 'Translations are automatically synchronized and improved.' })}
            </p>
        </div>
    );
};
export default LanguagePage;
