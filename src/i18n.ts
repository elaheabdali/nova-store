import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './i18n/routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
<<<<<<< HEAD
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
=======
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;
>>>>>>> bb75746b6ef26902bb890776ef7773221b969740
  return {
    locale,
    messages: (await import(`./dictionary/${locale}.json`)).default,
  };
});
