import React, { ReactNode } from 'react';
import i18n from 'i18next';
import { initReactI18next, useTranslation as useI18nextTranslation } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

import { Locale, LocalePreference } from './types';

const LOCALE_STORAGE_KEY = 'doughlab-locale-preference';
const SUPPORTED_LOCALES: Locale[] = ['en', 'pt-BR'];

const normalizeLocale = (value?: string | null): Locale => {
  if (!value) return 'en';
  const lowered = value.toLowerCase();
  if (lowered.startsWith('pt')) return 'pt-BR';
  return 'en';
};

const getStoredLocalePreference = (): LocalePreference => {
  if (typeof window === 'undefined') return 'system';
  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  return stored === 'en' || stored === 'pt-BR' || stored === 'system' ? stored : 'system';
};

const getSystemLocale = (): Locale => {
  if (typeof navigator === 'undefined') return 'en';
  const detected = navigator.languages?.[0] || navigator.language;
  return normalizeLocale(detected);
};

const getInitialLocale = (): Locale => {
  const preference = getStoredLocalePreference();
  return preference === 'system' ? getSystemLocale() : preference;
};

// Initialize i18next
i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: getInitialLocale(),
    fallbackLng: 'en',
    supportedLngs: SUPPORTED_LOCALES,
    ns: ['common'], // Default namespace loaded initially
    defaultNS: 'common',
    // fallbackNS ensures compatibility during migration by resolving keys from all namespaces
    // even if not explicitly loaded by the component.
    fallbackNS: ['common', 'auth', 'calculator', 'dashboard', 'marketing', 'method', 'styles', 'doughbot', 'profile', 'settings'],
    load: 'currentOnly',
    debug: import.meta.env.DEV,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    react: {
      useSuspense: false, // Prevent white screen during transition
      nsMode: 'fallback' // Important for looking up keys in fallback namespaces
    },
    parseMissingKeyHandler: (key: string, defaultValue?: string) => {
      if (defaultValue) return defaultValue;
      console.warn(`[i18n] Missing key: ${key}`);

      // Fallback to a readable version of the key's last segment
      // Also strip common technical suffixes like _name, _desc, _tag
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
    },
    returnedObjectHandler: (key: string, _value: unknown, options?: { defaultValue?: string }) => {
      if (options?.defaultValue) return options.defaultValue;

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

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const syncWithSystemLanguage = () => {
      if (getStoredLocalePreference() !== 'system') return;
      const nextLocale = getSystemLocale();
      if (i18n.resolvedLanguage !== nextLocale) {
        void i18n.changeLanguage(nextLocale);
      }
    };

    syncWithSystemLanguage();
    window.addEventListener('languagechange', syncWithSystemLanguage);
    return () => window.removeEventListener('languagechange', syncWithSystemLanguage);
  }, []);

  return React.createElement(React.Fragment, null, children);
};

export const useTranslation = (ns?: string | string[]) => {
  const { t, i18n } = useI18nextTranslation(ns);

  const setLocale = (preference: LocalePreference) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, preference);
    }
    const nextLocale = preference === 'system' ? getSystemLocale() : preference;
    void i18n.changeLanguage(nextLocale);
  };

  const tWrapper = (key: string, replacements?: Record<string, any>): string => {
    // Handle dot-separated namespaces by converting them to colon-separated
    // This allows keys like 'styles.name' to correctly resolve to the 'styles' namespace
    const namespaces = ['common', 'auth', 'calculator', 'dashboard', 'marketing', 'method', 'styles', 'doughbot', 'profile', 'settings'];
    let normalizedKey = key;

    for (const ns of namespaces) {
      if (key.startsWith(`${ns}.`)) {
        normalizedKey = key.replace(`${ns}.`, `${ns}:`);
        break;
      }
    }

    const result = t(normalizedKey, replacements) as unknown;

    if (typeof result === 'string') {
      return result;
    }

    if (Array.isArray(result)) {
      return result.join(', ');
    }

    if (replacements?.defaultValue && typeof replacements.defaultValue === 'string') {
      return replacements.defaultValue;
    }

    const parts = normalizedKey.split(/[.:]/);
    const fallback = parts[parts.length - 1];
    return fallback
      .replace(/_name$/, '')
      .replace(/_desc$/, '')
      .replace(/_tag_/, ' ')
      .replace(/_history$/, '')
      .replace(/_science_/, ' ')
      .replace(/_/g, ' ')
      .replace(/^\w/, (c) => c.toUpperCase());
  };

  const currentLanguage = normalizeLocale(i18n.resolvedLanguage || i18n.language);
  const localePreference = getStoredLocalePreference();

  return {
    locale: currentLanguage as Locale,
    localePreference,
    followsSystemLanguage: localePreference === 'system',
    setLocale,
    t: tWrapper
  };
};

export default i18n;
