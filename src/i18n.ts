import React, { ReactNode } from 'react';
import i18n from 'i18next';
import { initReactI18next, useTranslation as useI18nextTranslation } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { Locale } from './types';

// Initialize i18next
i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: 'en', // Force English
    supportedLngs: ['en'],
    ns: ['common'], // Default namespace loaded initially
    defaultNS: 'common',
    // fallbackNS ensures compatibility during migration by resolving keys from all namespaces
    // even if not explicitly loaded by the component.
    fallbackNS: ['common', 'auth', 'calculator', 'dashboard', 'marketing', 'method'],
    load: 'languageOnly',
    debug: import.meta.env.DEV,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
    react: {
      useSuspense: false, // Prevent white screen during transition
      nsMode: 'fallback' // Important for looking up keys in fallback namespaces
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
    return t(key, replacements) as unknown as string;
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
