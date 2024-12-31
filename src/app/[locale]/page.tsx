import Link from 'next/link';
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Index')

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-normal mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t('description')}
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/take-action">
              <a className="px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors">
                {t('takeAction')}
              </a>
            </Link>
            <Link href="/common-ground">
              <a className="px-6 py-2 border border-gray-300 hover:border-black transition-colors">
                {t('learnMore')}
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white">
            <h2 className="text-xl mb-4 font-normal">
              {t('sections.commonGround.title')}
            </h2>
            <p className="text-gray-600">
              {t('sections.commonGround.description')}
            </p>
          </div>
          <div className="p-6 bg-white">
            <h2 className="text-xl mb-4 font-normal">
              {t('sections.conflicts.title')}
            </h2>
            <p className="text-gray-600">
              {t('sections.conflicts.description')}
            </p>
          </div>
          <div className="p-6 bg-white">
            <h2 className="text-xl mb-4 font-normal">
              {t('sections.action.title')}
            </h2>
            <p className="text-gray-600">
              {t('sections.action.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Discord Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl mb-6 font-normal">
            {t('joinDiscord.title')}
          </h2>
          <p className="text-gray-600 mb-8">
            {t('joinDiscord.description')}
          </p>
          <Link href="/discord">
            <a className="inline-block px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors">
              {t('joinDiscord.button')}
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}