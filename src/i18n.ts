import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from '@/config/i18n';

export default getRequestConfig(async ({ locale }) => {
  return {
    messages: (await import(`../messages/${locale}.json`)).default,
    timeZone: 'UTC'
  };
});

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales });
