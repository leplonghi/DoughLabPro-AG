
import React, { ReactNode } from 'react';
import i18n from 'i18next';
import { initReactI18next, useTranslation as useI18nextTranslation } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

import { Locale, LocalePreference } from './types';

const LOCALE_STORAGE_KEY = 'doughlab-locale-preference';
const LOCALE_EXPLICIT_KEY = 'doughlab-locale-explicit-v2';
const LOCALE_MIGRATION_KEY = 'doughlab-locale-migration-v4';
const SUPPORTED_LOCALES: Locale[] = ['en', 'pt-BR'];
const CORE_NAMESPACES = [
  'common',
  'ui',
  'calculator',
  'styles',
  'profile',
  'learn',
  'notifications',
  'errors',
];

const LEGACY_NAMESPACE_ALIASES: Record<string, string> = {
  auth: 'ui',
  dashboard: 'ui',
  doughbot: 'ui',
  marketing: 'ui',
  method: 'learn',
  mylab: 'ui',
  settings: 'ui',
};

const LEGACY_KEY_MAPPINGS = [
  { prefix: 'method.', targetNs: 'learn', stripPrefix: true },
  { prefix: 'marketing.learn.', targetNs: 'learn', stripPrefix: true },
  { prefix: 'marketing.', targetNs: 'ui', stripPrefix: true },
  { prefix: 'dashboard.', targetNs: 'ui', keepPrefix: true },
  { prefix: 'auth.', targetNs: 'ui', keepPrefix: true },
  { prefix: 'profile.', targetNs: 'ui', keepPrefix: true },
  { prefix: 'doughbot.', targetNs: 'ui', keepPrefix: true },
  { prefix: 'mylab.', targetNs: 'ui', keepPrefix: true },
  { prefix: 'settings.', targetNs: 'ui', stripPrefix: true },
  { prefix: 'calculator.', targetNs: 'calculator', stripPrefix: true },
  { prefix: 'styles.', targetNs: 'styles', stripPrefix: true },
] as const;

const humanizeKey = (key: string): string => {
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
};

const resolveNamespaces = (ns?: string | string[]) => {
  if (!ns) return undefined;

  const requestedNamespaces = Array.isArray(ns) ? ns : [ns];
  const resolvedNamespaces = requestedNamespaces.map((namespace) => LEGACY_NAMESPACE_ALIASES[namespace] || namespace);
  return Array.from(new Set(resolvedNamespaces));
};

const normalizeTranslationKey = (key: string): string => {
  let normalizedKey = key;

  if (!key.includes(':') && key.includes('.')) {
    const [possibleNamespace] = key.split('.', 1);
    const aliasedNamespace = LEGACY_NAMESPACE_ALIASES[possibleNamespace] || possibleNamespace;
    if (CORE_NAMESPACES.includes(aliasedNamespace)) {
      normalizedKey = `${aliasedNamespace}:${key.substring(possibleNamespace.length + 1)}`;
    }
  }

  for (const mapping of LEGACY_KEY_MAPPINGS) {
    if (key.startsWith(mapping.prefix)) {
      if ('stripPrefix' in mapping && mapping.stripPrefix) {
        normalizedKey = `${mapping.targetNs}:${key.substring(mapping.prefix.length)}`;
      } else if ('keepPrefix' in mapping && mapping.keepPrefix) {
        normalizedKey = `${mapping.targetNs}:${key}`;
      }
      break;
    }
  }

  return normalizedKey;
};

const normalizeLocale = (value?: string | null): Locale => {
  if (!value) return 'en';
  const lowered = value.toLowerCase();
  if (lowered.startsWith('pt')) return 'pt-BR';
  return 'en';
};

const getBrowserLanguage = (): string => {
  if (typeof navigator === 'undefined') return 'en';
  return navigator.languages?.[0] || navigator.language || 'en';
};

const getStoredLocalePreference = (): LocalePreference => {
  if (typeof window === 'undefined') return 'system';
  const isExplicitPreference = window.localStorage.getItem(LOCALE_EXPLICIT_KEY) === '1';
  if (!isExplicitPreference) return 'system';
  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  return stored === 'en' || stored === 'pt-BR' || stored === 'system' ? stored : 'system';
};

const runLocaleMigration = (): void => {
  if (typeof window === 'undefined') return;
  if (window.localStorage.getItem(LOCALE_MIGRATION_KEY) === '1') return;

  // Reset any persisted locale so existing users return to automatic system-follow mode once again.
  window.localStorage.removeItem(LOCALE_STORAGE_KEY);
  window.localStorage.removeItem(LOCALE_EXPLICIT_KEY);
  window.localStorage.setItem(LOCALE_MIGRATION_KEY, '1');
};

const isPortugueseTimezone = (timezone?: string): boolean => {
  if (!timezone) return false;

  const portugueseTimezones = [
    'Europe/Lisbon',
    'Atlantic/Azores',
    'Atlantic/Madeira',
    'Atlantic/Cape_Verde',
    'Africa/Luanda',
    'Africa/Maputo',
    'Africa/Bissau',
    'Africa/Sao_Tome',
    'Asia/Dili',
    'America/Sao_Paulo',
    'America/Fortaleza',
    'America/Recife',
    'America/Maceio',
    'America/Belem',
    'America/Manaus',
    'America/Cuiaba',
    'America/Campo_Grande',
    'America/Porto_Velho',
    'America/Boa_Vista',
    'America/Rio_Branco',
    'America/Noronha',
    'America/Araguaina',
    'America/Bahia',
  ];

  return portugueseTimezones.includes(timezone);
};

const getSystemLocaleDetails = () => {
  const browserLanguage = getBrowserLanguage();
  if (normalizeLocale(browserLanguage) === 'pt-BR') {
    return {
      locale: 'pt-BR' as Locale,
      browserLanguage,
      detectionSource: 'browser' as const,
    };
  }

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (isPortugueseTimezone(timezone)) {
    return {
      locale: 'pt-BR' as Locale,
      browserLanguage,
      timezone,
      detectionSource: 'timezone' as const,
    };
  }

  return {
    locale: normalizeLocale(browserLanguage),
    browserLanguage,
    timezone,
    detectionSource: 'browser' as const,
  };
};

const getSystemLocale = (): Locale => {
  return getSystemLocaleDetails().locale;
};

const getInitialLocale = (): Locale => {
  const preference = getStoredLocalePreference();
  return preference === 'system' ? getSystemLocale() : preference;
};

runLocaleMigration();

// Initialize i18next
i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: getInitialLocale(),
    fallbackLng: 'en',
    supportedLngs: SUPPORTED_LOCALES,
    ns: CORE_NAMESPACES,
    defaultNS: 'common',
    fallbackNS: CORE_NAMESPACES,
    load: 'all',
    nonExplicitSupportedLngs: true,
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
      return humanizeKey(key);
    },
    returnedObjectHandler: (key: string, _value: unknown, options?: { defaultValue?: string }) => {
      if (options?.defaultValue) return options.defaultValue;
      return humanizeKey(key);
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

type TranslationOptionsLike = Record<string, any> | string | number | null | undefined;

export const useTranslation = (ns?: string | string[]) => {
  const { t, i18n } = useI18nextTranslation(resolveNamespaces(ns));

  const setLocale = (preference: LocalePreference) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, preference);
      window.localStorage.setItem(LOCALE_EXPLICIT_KEY, preference === 'system' ? '0' : '1');
    }
    const nextLocale = preference === 'system' ? getSystemLocale() : preference;
    void i18n.changeLanguage(nextLocale);
  };

  const tWrapper = (key: string, replacements?: TranslationOptionsLike): string => {
    const normalizedKey = normalizeTranslationKey(key);

    const normalizedOptions =
      typeof replacements === 'string' || typeof replacements === 'number'
        ? { defaultValue: String(replacements) }
        : replacements ?? undefined;

    const result = t(normalizedKey, normalizedOptions as Record<string, any>) as unknown;

    if (typeof result === 'string') {
      return result;
    }

    if (Array.isArray(result)) {
      return result.join(', ');
    }

    if (
      normalizedOptions &&
      typeof normalizedOptions === 'object' &&
      typeof normalizedOptions.defaultValue === 'string'
    ) {
      return normalizedOptions.defaultValue;
    }

    return humanizeKey(normalizedKey);
  };

  const currentLanguage = normalizeLocale(i18n.resolvedLanguage || i18n.language);
  const localePreference = getStoredLocalePreference();
  const systemLocaleDetails = getSystemLocaleDetails();

  return {
    locale: currentLanguage as Locale,
    localePreference,
    followsSystemLanguage: localePreference === 'system',
    systemLocale: systemLocaleDetails.locale,
    systemBrowserLanguage: systemLocaleDetails.browserLanguage,
    systemTimezone: systemLocaleDetails.timezone,
    systemDetectionSource: systemLocaleDetails.detectionSource,
    setLocale,
    t: tWrapper
  };
};

export default i18n;
