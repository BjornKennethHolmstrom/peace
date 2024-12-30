import Link from 'next/link'
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/shared/LanguageSwitcher';

export default function Header() {
  const t = useTranslations('Navigation');

  return (
    <header className="w-full py-4 bg-white border-b">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Peace
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/common-ground">{t('commonGround')}</Link>
            <Link href="/conflicts">{t('conflicts')}</Link>
            <Link href="/take-action">{t('takeAction')}</Link>
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  )
}
