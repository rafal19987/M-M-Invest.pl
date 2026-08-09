import { EN_LOCALE, type Locale, PL_LOCALE } from '@/i18n/locales/utils.ts';

export const SITE = {
  name: 'Rafał Izdebski',
  email: 'rizdebski29@gmail.com',
};

export const LANGUAGES: {
  locale: Locale;
  label: string;
  shortLabel: string;
  flag: string;
}[] = [
  { locale: PL_LOCALE, label: 'Polski', shortLabel: 'PL', flag: '🇵🇱' },
  { locale: EN_LOCALE, label: 'English', shortLabel: 'EN', flag: '🇬🇧' },
];
