export const locales = ['en', 'uk', 'ru', 'zh', 'ar', 'es', 'fr', 'de'] as const;
export type Locale = typeof locales[number];

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export const defaultLocale = 'en' as const;

// Add languages with right-to-left writing
export const rtlLocales = ['ar'] as const;
export function isRtlLocale(locale: string): boolean {
  return rtlLocales.includes(locale as typeof rtlLocales[number]);
}
