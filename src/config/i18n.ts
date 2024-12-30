export const locales = ['en', 'uk', 'ru', 'zh', 'ar', 'es', 'fr', 'de', 'he'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale = 'en' as const;

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

// Add languages with right-to-left writing
export const rtlLocales = ['ar', 'he'] as const;
export function isRtlLocale(locale: string): boolean {
  return rtlLocales.includes(locale as typeof rtlLocales[number]);
}
