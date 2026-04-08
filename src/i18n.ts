
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
      nsMode: 'fallback'
    },
    parseMissingKeyHandler: (key: string, defaultValue?: string) => {
      if (defaultValue) return defaultValue;
      console.warn(`[i18n] Missing key: ${key}`);

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
    // Advanced remapping for legacy keys to new architecture
    let normalizedKey = key;

    // Direct legacy mappings
    const mappings = [
      { prefix: 'method.', targetNs: 'learn', stripPrefix: true },
      { prefix: 'marketing.learn.', targetNs: 'learn', stripPrefix: true },
      { prefix: 'marketing.', targetNs: 'ui', stripPrefix: true }, // Covers community_page, etc.
      { prefix: 'dashboard.', targetNs: 'ui', keepPrefix: true }, // dashboard.foo -> ui:dashboard.foo
      { prefix: 'auth.', targetNs: 'ui', keepPrefix: true },
      { prefix: 'profile.', targetNs: 'ui', keepPrefix: true },
      { prefix: 'doughbot.', targetNs: 'ui', keepPrefix: true },
      { prefix: 'mylab.', targetNs: 'ui', keepPrefix: true },
      { prefix: 'settings.', targetNs: 'ui', stripPrefix: true }, // settings.general -> ui:general
      { prefix: 'calculator.', targetNs: 'calculator', stripPrefix: true }, // calculator.foo -> calculator:foo
      { prefix: 'styles.', targetNs: 'styles', stripPrefix: true }, // styles.foo -> styles:foo
    ];

    for (const mapping of mappings) {
      if (key.startsWith(mapping.prefix)) {
        if (mapping.stripPrefix) {
          normalizedKey = `${mapping.targetNs}:${key.substring(mapping.prefix.length)}`;
        } else if (mapping.keepPrefix) {
          // Explicitly format as ns:key.subKey
          normalizedKey = `${mapping.targetNs}:${key}`;
        }
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
