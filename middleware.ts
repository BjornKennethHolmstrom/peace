import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './src/config/i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always'
});

export const config = {
  matcher: [
    // Match all routes
    '/((?!_next|api|favicon.ico).*)',
    // Also match the root path
    '/'
  ]
};
