import React from 'react';
import { useTranslation } from '@/i18n';
import AppSurface from '@/components/ui/AppSurface';
import StatusBadge from '@/components/ui/StatusBadge';

const LanguagePage: React.FC = () => {
    const {
        t,
        locale,
        localePreference,
        followsSystemLanguage,
        setLocale,
        systemLocale,
        systemBrowserLanguage,
        systemTimezone,
        systemDetectionSource,
    } = useTranslation(['common', 'settings']);

    const systemLocaleLabel = systemLocale === 'pt-BR' ? 'Português (Brasil)' : 'English';
    const detectionLabel = systemDetectionSource === 'timezone'
        ? t('settings:language.detected_from_timezone', { defaultValue: 'Detected from timezone' })
        : t('settings:language.detected_from_browser', { defaultValue: 'Detected from browser language' });

    const options = [
        {
            id: 'system' as const,
            title: t('settings:language.system_title', { defaultValue: 'Automatic (recommended)' }),
            description: t('settings:language.system_description', { defaultValue: 'Follow the system automatically. On the web, DoughLab uses your browser language first and falls back to timezone-based Portuguese detection when needed.' }),
            badge: followsSystemLanguage ? `${t('settings:language.current_device', { defaultValue: 'Automatic now' })}: ${systemLocaleLabel}` : null,
        },
        {
            id: 'en' as const,
            title: 'English',
            description: t('settings:language.english_description', { defaultValue: 'Manual override. Keep the interface in English until you switch back to Automatic.' }),
            badge: locale === 'en' ? t('settings:language.active', { defaultValue: 'Active' }) : null,
        },
        {
            id: 'pt-BR' as const,
            title: 'Português (Brasil)',
            description: t('settings:language.portuguese_description', { defaultValue: 'Manual override. Keep the interface in Portuguese where available and fall back to English for missing content.' }),
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
                    {t('settings:language.description', { defaultValue: 'Automatic mode is now the default. Manual selections override browser-based detection until you switch back.' })}
                </p>
            </div>

            <AppSurface surface="soft" tone="neutral" className="p-5">
                <div className="space-y-2">
                    <h2 className="text-base font-bold text-dlp-text-primary">
                        {t('settings:language.how_detection_works', { defaultValue: 'How automatic detection works' })}
                    </h2>
                    <p className="text-sm leading-relaxed text-dlp-text-muted">
                        {t('settings:language.current_resolution', {
                            defaultValue: 'Current automatic language: {{language}}.',
                            language: systemLocaleLabel,
                        })}
                    </p>
                    <p className="text-sm leading-relaxed text-dlp-text-muted">
                        {detectionLabel}: <span className="font-medium text-dlp-text-primary">{systemBrowserLanguage}</span>
                        {systemTimezone ? ` • ${t('settings:language.timezone', { defaultValue: 'Timezone' })}: ${systemTimezone}` : ''}
                    </p>
                    {!followsSystemLanguage ? (
                        <p className="text-sm leading-relaxed text-dlp-text-muted">
                            {t('settings:language.manual_override_notice', {
                                defaultValue: 'A manual language is currently selected, so DoughLab is not following automatic detection right now.',
                            })}
                        </p>
                    ) : null}
                </div>
            </AppSurface>

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
