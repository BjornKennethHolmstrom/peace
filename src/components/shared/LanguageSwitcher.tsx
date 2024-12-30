'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { locales } from '@/config/i18n';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  return (
    <select
      value={locale}
      onChange={(e) => {
        router.push(`/${e.target.value}`);
      }}
      className="px-2 py-1 rounded border"
    >
      {locales.map((l) => (
        <option key={l} value={l}>
          {l.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
