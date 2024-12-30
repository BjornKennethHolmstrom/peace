import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './src/config/i18n';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,
  
  // The default locale to be used when visiting
  // a non-locale prefixed path e.g. `/dashboard`
  defaultLocale: defaultLocale,

  // Domains can be configured per locale if needed
  // localePrefix: 'as-needed'
});
 
export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
