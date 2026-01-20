// src/app/[locale]/inner-outer/page.tsx
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ar' },
    { locale: 'he' },
    { locale: 'zh' },
    { locale: 'ru' },
    { locale: 'es' },
    { locale: 'fr' },
    { locale: 'uk' },
    { locale: 'de' }
  ];
}

export default function InnerOuterPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('InnerOuter');

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-3xl mb-6">{t('title')}</h1>
          <p className="text-lg text-gray-600 mb-4">
            {t('subtitle')}
          </p>
        </section>

        {/* Personal-Political Connection */}
        <section className="mb-12">
          <h2 className="text-2xl mb-6">{t('connection.title')}</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-black pl-6">
              <p className="text-gray-700 mb-2">{t('connection.consciousness.individual')}</p>
              <p className="text-center text-2xl my-4">↕</p>
              <p className="text-gray-700">{t('connection.consciousness.political')}</p>
            </div>

            <div className="border-l-4 border-black pl-6">
              <p className="text-gray-700 mb-2">{t('connection.practice.personal')}</p>
              <p className="text-center text-2xl my-4">↕</p>
              <p className="text-gray-700">{t('connection.practice.political')}</p>
            </div>

            <div className="border-l-4 border-black pl-6">
              <p className="text-gray-700 mb-2">{t('connection.resource.inner')}</p>
              <p className="text-center text-2xl my-4">↕</p>
              <p className="text-gray-700">{t('connection.resource.outer')}</p>
            </div>
          </div>
        </section>

        {/* Practical Integration */}
        <section className="mb-12">
          <h2 className="text-2xl mb-6">{t('practical.title')}</h2>
          
          <div className="space-y-6">
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="p-6 border rounded">
                <h3 className="text-xl font-medium mb-3">
                  {t(`practical.steps.${index}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`practical.steps.${index}.description`)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Historical Examples */}
        <section className="mb-12">
          <h2 className="text-2xl mb-6">{t('historical.title')}</h2>
          
          <div className="space-y-6">
            {['abolition', 'suffrage', 'environmental'].map((example) => (
              <div key={example} className="p-6 bg-gray-50 rounded">
                <h3 className="text-xl font-medium mb-3">
                  {t(`historical.examples.${example}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`historical.examples.${example}.description`)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* The Omega Proof Connection */}
        <section className="mb-12">
          <h2 className="text-2xl mb-6">{t('omega.title')}</h2>
          <div className="p-6 border-2 border-gray-300 rounded">
            <p className="text-gray-600 mb-4">{t('omega.summary')}</p>
            <p className="text-gray-600 mb-4">{t('omega.connection')}</p>
            <p className="text-lg font-medium">{t('omega.key')}</p>
          </div>
        </section>

        {/* What This Means for You */}
        <section className="mb-12">
          <h2 className="text-2xl mb-6">{t('meaning.title')}</h2>
          <ul className="space-y-3">
            {[0, 1, 2, 3, 4].map((index) => (
              <li key={index} className="flex items-start">
                <span className="text-xl mr-3">•</span>
                <span className="text-gray-600">{t(`meaning.points.${index}`)}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-50 p-6 rounded">
          <h2 className="text-2xl mb-4">{t('cta.title')}</h2>
          <p className="text-gray-600 mb-6">{t('cta.description')}</p>
          <div className="flex gap-4">
            <Link 
              href={`/${locale}/understanding`}
              className="px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors"
            >
              {t('cta.understanding')}
            </Link>
            <Link 
              href={`/${locale}/analysis`}
              className="px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors"
            >
              {t('cta.analysis')}
            </Link>
            <Link 
              href={`/${locale}/take-action`}
              className="px-6 py-2 bg-black text-white hover:bg-gray-800 transition-colors"
            >
              {t('cta.action')}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
