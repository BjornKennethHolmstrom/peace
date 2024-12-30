import {getRequestConfig} from 'next-intl/server';
import {defaultLocale} from '../config/i18n';
 
export default getRequestConfig(async ({requestLocale}) => {
  // Get the locale using the new API
  const locale = await requestLocale ?? defaultLocale;
 
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
    timeZone: 'UTC'
  };
});
