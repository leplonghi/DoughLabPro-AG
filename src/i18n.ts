import React, { ReactNode } from 'react';
import i18n from 'i18next';
import { initReactI18next, useTranslation as useI18nextTranslation } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

import { Locale } from './types';

// Initialize i18next
i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: 'en', // Hardcoded English
    fallbackLng: 'en',
    supportedLngs: ['en'],
    ns: ['common'], // Default namespace loaded initially
    defaultNS: 'common',
    // fallbackNS ensures compatibility during migration by resolving keys from all namespaces
    // even if not explicitly loaded by the component.
    fallbackNS: ['common', 'auth', 'calculator', 'dashboard', 'marketing', 'method', 'styles', 'doughbot', 'profile', 'settings'],
    load: 'languageOnly',
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
    }
  });

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return React.createElement(React.Fragment, null, children);
};

export const useTranslation = (ns?: string | string[]) => {
  const { t, i18n } = useI18nextTranslation(ns);

  const setLocale = (l: Locale) => {
    // Disabled language switching
    // i18n.changeLanguage(l);
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

    return t(normalizedKey, replacements) as unknown as string;
  };

  // Ensure we return a valid Locale from types, even if detection picked an unsupported one
  let currentLanguage = (i18n.resolvedLanguage || i18n.language)?.split('-')[0];
  // Force English
  currentLanguage = 'en';

  return {
    locale: currentLanguage as Locale,
    setLocale,
    t: tWrapper
  };
};

export default i18n;
