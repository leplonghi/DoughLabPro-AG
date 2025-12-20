
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
    ns: ['common', 'ui', 'calculator', 'styles', 'learn', 'errors'], // New namespaces
    defaultNS: 'common',
    // fallbackNS ensures compatibility during migration by resolving keys from all namespaces
    fallbackNS: ['ui', 'common', 'calculator', 'styles', 'learn', 'errors'],
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

    // If no mapping matched, but it looks like a namespaced key (e.g. "ns:key"), leave it.
    // If it's a simple key "save", it will fallback to common/ui.
    // If it is "common.foo", rewrite to "common:foo"
    if (normalizedKey === key) {
      if (key.startsWith('common.')) {
        normalizedKey = key.replace('common.', 'common:');
      } else if (key.startsWith('ui.')) {
        normalizedKey = key.replace('ui.', 'ui:');
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
