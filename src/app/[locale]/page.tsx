// src/app/[locale]/page.tsx

import Link from 'next/link';
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Index')

  return (
    <div className="min-h-screen">
      {/* Simple Title */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-normal">
            {t('title')}
          </h1>
        </div>
      </section>

      {/* Three Cards Section */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Understanding Card */}
          <div className="p-8 bg-white border rounded hover:border-black transition-colors text-center">
            <h2 className="text-2xl mb-4 font-normal">
              {t('cards.understanding.title')}
            </h2>
            <p className="text-gray-600 mb-6 min-h-[4rem]">
              {t('cards.understanding.description')}
            </p>
            <Link 
              href={`/${locale}/understanding`}
              className="inline-block px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors"
            >
              {t('cards.understanding.button')}
            </Link>
          </div>

          {/* Discord Card */}
          <div className="p-8 bg-white border rounded hover:border-black transition-colors text-center">
            <h2 className="text-2xl mb-4 font-normal">
              {t('cards.discord.title')}
            </h2>
            <p className="text-gray-600 mb-6 min-h-[4rem]">
              {t('cards.discord.description')}
            </p>
            <Link 
              href={`/${locale}/discord`}
              className="inline-block px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors"
            >
              {t('cards.discord.button')}
            </Link>
          </div>

          {/* Take Action Card */}
          <div className="p-8 bg-white border rounded hover:border-black transition-colors text-center">
            <h2 className="text-2xl mb-4 font-normal">
              {t('cards.action.title')}
            </h2>
            <p className="text-gray-600 mb-6 min-h-[4rem]">
              {t('cards.action.description')}
            </p>
            <Link 
              href={`/${locale}/take-action`}
              className="inline-block px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors"
            >
              {t('cards.action.button')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}