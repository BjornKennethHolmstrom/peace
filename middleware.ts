import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './src/config/i18n';

// The middleware is used to redirect users to their preferred locale
export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,
  
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: defaultLocale,
  
  // Redirect to defaultLocale if no locale is found
  localePrefix: 'always',

  // Set default locale on root path
  localeDetection: true
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
