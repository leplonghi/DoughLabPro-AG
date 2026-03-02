
import i18n from 'i18next';
import { initReactI18next, useTranslation as useI18nextTranslation } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import { logger } from '@/utils/logger';

import { Locale } from './types';

// Initialize i18next
i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: typeof window !== 'undefined' && window.localStorage ? localStorage.getItem('i18nextLng') || 'en' : 'en',
    fallbackLng: 'en',
    supportedLngs: ['en', 'pt', 'es'],
    ns: [
      'common',
      'ui',
      'calculator',
      'styles',
      'learn',
      'errors',
      'notifications',
      'weather',
      'baguette_tradition_francaise_detailed_i18n',
      'california_style_COMPLETE_i18n',
      'california_style_detailed_i18n',
      'chicago_deep_dish_i18n',
      'ciabatta_high_hydration_detailed_i18n',
      'detroit_style_i18n',
      'neapolitan_avpn_classic_i18n',
      'new_york_style_i18n',
      'roman_scrocchiarella_detailed_i18n',
      'sicilian_grandma_pan_detailed_i18n'
    ],
    defaultNS: 'common',
    // fallbackNS ensures compatibility during migration by resolving keys from all namespaces
    fallbackNS: ['ui', 'common', 'calculator', 'styles', 'learn', 'errors'],
    load: 'languageOnly',
    debug: typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.DEV : process.env.NODE_ENV !== 'production',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    react: {
      useSuspense: false, // Prevent white screen during transition
      nsMode: 'fallback'
    },
    parseMissingKeyHandler: (key: string, defaultValue?: string) => {
      if (defaultValue) return defaultValue;
      logger.warn(`[i18n] Missing key: ${key}`);

      // Fallback to a readable version of the key's last segment
      const parts = key.split(/[.:]/);
      const lastPart = parts[parts.length - 1];

      return lastPart
        .replace(/_name$/, '')
        .replace(/_desc$/, '')
        .replace(/_tag_/, ' ')
        .replace(/_history$/, '')
        .replace(/_science_/, ' ')
        .replace(/_/g, ' ')
        .replace(/^\w/, (c) => c.toUpperCase());
    }
  });

// export { I18nProvider } from '@/components/providers/I18nProvider'; // Avoid circular dependency if possible

export const useTranslation = (ns?: string | string[]) => {
  const { t, i18n: i18nInstance } = useI18nextTranslation(ns as any);

  const tWrapper = (key: string | string[], options?: any): string => {
    // Handle array of keys (fallback keys)
    if (Array.isArray(key)) {
      return t(key, options);
    }

    let normalizedKey = key;

    // Legacy Key Migrations for Namespaces
    // This allows existing data files using 'styles.key' to work with 'styles:key'
    if (typeof key === 'string') {
      const namespaces = ['styles', 'marketing', 'dashboard', 'auth', 'profile', 'doughbot', 'mylab', 'settings', 'calculator', 'ui', 'onboarding'];
      for (const n of namespaces) {
        if (key.startsWith(`${n}.`)) {
          normalizedKey = key.replace(`${n}.`, `${n}:`);
          break;
        }
      }
    }

    return t(normalizedKey, options);
  };

  const setLocale = (l: Locale) => {
    i18nInstance?.changeLanguage(l);
  };

  return {
    locale: (i18nInstance?.resolvedLanguage || i18nInstance?.language || 'en') as Locale,
    setLocale,
    t: tWrapper,
    i18n: i18nInstance
  };
};
export default i18n;
