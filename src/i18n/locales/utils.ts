import { pl } from '@/i18n/locales/pl/translation';
import { en } from '@/i18n/locales/en/translation';

export const PL_LOCALE = 'pl' as const;
export const EN_LOCALE = 'en' as const;

export const locales = [PL_LOCALE, EN_LOCALE] as const;
export const defaultLocale = PL_LOCALE;

export type Locale = (typeof locales)[number];

export const translations = {
  [PL_LOCALE]: pl,
  [EN_LOCALE]: en,
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}
