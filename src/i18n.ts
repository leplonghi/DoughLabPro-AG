import React, { ReactNode, Suspense } from 'react';
import i18n from 'i18next';
import { initReactI18next, useTranslation as useI18nextTranslation } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { Locale } from './types';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

// Initialize i18next
i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'pt', 'es'],
    load: 'languageOnly', // Force 'en' instead of 'en-US'
    debug: import.meta.env.DEV, // Enable debug in dev mode
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      prefix: '{',
      suffix: '}'
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
    react: {
      useSuspense: true
    }
  });

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return React.createElement(
    Suspense,
    {
      fallback: React.createElement(
        'div',
        { className: "flex h-screen items-center justify-center" },
        React.createElement(LoadingSpinner)
      )
    },
    children
  );
};

export const useTranslation = () => {
  const { t, i18n } = useI18nextTranslation();

  const setLocale = (l: Locale) => {
    i18n.changeLanguage(l);
  };

  const tWrapper = (key: string, replacements?: Record<string, any>): string => {
    return t(key, replacements) as unknown as string;
  };

  // Ensure we return a valid Locale from types, even if detection picked an unsupported one
  let currentLanguage = (i18n.resolvedLanguage || i18n.language)?.split('-')[0];
  if (!['en', 'pt', 'es'].includes(currentLanguage)) {
    currentLanguage = 'en';
  }

  return {
    locale: currentLanguage as Locale,
    setLocale,
    t: tWrapper
  };
};

export default i18n;
