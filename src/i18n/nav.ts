import { PL_LOCALE, type Locale } from '@/i18n/locales/utils';
import type { getTranslations } from '@/i18n/locales/utils';

export function getNavLinks(
  locale: Locale,
  t: ReturnType<typeof getTranslations>,
) {
  return [
    { href: locale === PL_LOCALE ? '/' : '/en/', label: t.nav.home },
    {
      href: locale === PL_LOCALE ? '/o-nas/' : '/en/about-us/',
      label: t.nav.about,
    },
    {
      href: locale === PL_LOCALE ? '/oferta/' : '/en/offer/',
      label: t.nav.offer,
    },
    {
      href: locale === PL_LOCALE ? '/realizacje/' : '/en/realizations/',
      label: t.nav.realizations,
    },
    {
      href: locale === PL_LOCALE ? '/kontakt/' : '/en/contact/',
      label: t.nav.contact,
    },
    {
      href: locale === PL_LOCALE ? '/blog/' : '/en/blog/',
      label: t.nav.blog,
    },
  ];
}
