import { PL_LOCALE, EN_LOCALE, type Locale } from '@/i18n/locales/utils';

export const routes = {
  about: {
    [PL_LOCALE]: 'o-nas',
    [EN_LOCALE]: 'about-us',
  },
  contact: {
    [PL_LOCALE]: 'kontakt',
    [EN_LOCALE]: 'contact',
  },
} as const;

export type RouteKey = keyof typeof routes;

export function getRouteKeyFromSlug(
  locale: Locale,
  slug: string,
): RouteKey | null {
  for (const key of Object.keys(routes) as RouteKey[]) {
    if (routes[key][locale] === slug) return key;
  }
  return null;
}

export function getSlugForLocale(key: RouteKey, locale: Locale): string {
  return routes[key][locale];
}
