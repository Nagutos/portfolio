// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import { defaultLocale, isLocale } from './config';

export default getRequestConfig(async ({ requestLocale }) => {
  // Resolve the locale from the request, falling back to the default.
  const requested = await requestLocale;
  const locale = isLocale(requested) ? requested : defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
