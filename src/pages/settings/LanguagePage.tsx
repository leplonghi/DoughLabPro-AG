import React from 'react';
import { useTranslation } from '@/i18n';
import AppSurface from '@/components/ui/AppSurface';
import StatusBadge from '@/components/ui/StatusBadge';

const LanguagePage: React.FC = () => {
    const { t, locale, localePreference, followsSystemLanguage, setLocale } = useTranslation(['common', 'settings']);

    const options = [
        {
            id: 'system' as const,
            title: t('settings:language.system_title', { defaultValue: 'Use device language' }),
            description: t('settings:language.system_description', { defaultValue: 'DoughLab follows your browser or operating system language automatically.' }),
            badge: followsSystemLanguage ? `${t('settings:language.current_device', { defaultValue: 'Current device' })}: ${locale}` : null,
        },
        {
            id: 'en' as const,
            title: 'English',
            description: t('settings:language.english_description', { defaultValue: 'Force the interface to stay in English.' }),
            badge: locale === 'en' ? t('settings:language.active', { defaultValue: 'Active' }) : null,
        },
        {
            id: 'pt-BR' as const,
            title: 'Português (Brasil)',
            description: t('settings:language.portuguese_description', { defaultValue: 'Use Portuguese where translations are available and fall back to English for missing content.' }),
            badge: locale === 'pt-BR' ? t('settings:language.active', { defaultValue: 'Active' }) : null,
        },
    ];

    return (
        <div className="mx-auto max-w-4xl space-y-6 p-6 sm:p-8">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold text-dlp-text-primary">
                    {t('settings:language.title', { defaultValue: 'Language' })}
                </h1>
                <p className="max-w-2xl text-sm leading-relaxed text-dlp-text-muted">
                    {t('settings:language.description', { defaultValue: 'Choose a fixed language or let DoughLab follow your device automatically.' })}
                </p>
            </div>

            <div className="grid gap-4">
                {options.map((option) => {
                    const isSelected = localePreference === option.id;
                    return (
                        <AppSurface
                            key={option.id}
                            surface={isSelected ? 'elevated' : 'soft'}
                            tone={option.id === 'system' ? 'neutral' : option.id === 'pt-BR' ? 'info' : 'brand'}
                            className="p-5"
                        >
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div className="space-y-1">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <h2 className="text-lg font-bold text-dlp-text-primary">{option.title}</h2>
                                        {option.badge ? <StatusBadge tone={isSelected ? 'brand' : 'neutral'}>{option.badge}</StatusBadge> : null}
                                    </div>
                                    <p className="text-sm leading-relaxed text-dlp-text-muted">{option.description}</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setLocale(option.id)}
                                    className={isSelected ? 'dlp-button-primary px-4 py-2 text-sm' : 'dlp-button-secondary px-4 py-2 text-sm'}
                                >
                                    {isSelected
                                        ? t('settings:language.selected', { defaultValue: 'Selected' })
                                        : t('settings:language.select', { defaultValue: 'Use this language' })}
                                </button>
                            </div>
                        </AppSurface>
                    );
                })}
            </div>
        </div>
    );
};
export default LanguagePage;
