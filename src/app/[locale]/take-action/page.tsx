// src/app/[locale]/take-action/external-actions/page.tsx

import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import Link from 'next/link'

export default function DirectActions({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('DirectActions') // We'll add these translations

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl mb-8">
          {t('title')}
        </h1>

        {/* Actionable Steps Section */}
        <section className="mb-12">
          <div className="space-y-6">
            {/* Contact Step */}
            <div className="p-6 border rounded">
              <h2 className="text-xl mb-4">{t('contact.title')}</h2>
              <p className="text-gray-600 mb-4">{t('contact.description')}</p>
              <div className="bg-gray-50 p-4 rounded">
                <p className="mb-2 font-medium">{t('contact.howTo')}</p>
                <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                  <li>{t('contact.steps.findReps')}</li>
                  <li>{t('contact.steps.writeLetter')}</li>
                  <li>{t('contact.steps.followUp')}</li>
                </ol>
              </div>
            </div>

            {/* Aid Support Step */}
            <div className="p-6 border rounded">
              <h2 className="text-xl mb-4">{t('aid.title')}</h2>
              <p className="text-gray-600 mb-4">{t('aid.description')}</p>
              <div className="bg-gray-50 p-4 rounded">
                <p className="mb-2 font-medium">{t('aid.howTo')}</p>
                <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                  <li>{t('aid.steps.research')}</li>
                  <li>{t('aid.steps.verify')}</li>
                  <li>{t('aid.steps.support')}</li>
                </ol>
              </div>
            </div>

            {/* Information Sharing Step */}
            <div className="p-6 border rounded">
              <h2 className="text-xl mb-4">{t('info.title')}</h2>
              <p className="text-gray-600 mb-4">{t('info.description')}</p>
              <div className="bg-gray-50 p-4 rounded">
                <p className="mb-2 font-medium">{t('info.howTo')}</p>
                <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                  <li>{t('info.steps.verify')}</li>
                  <li>{t('info.steps.focus')}</li>
                  <li>{t('info.steps.share')}</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Join Discord CTA */}
        <section className="bg-gray-50 p-6 rounded">
          <h2 className="text-xl mb-4">{t('discord.title')}</h2>
          <p className="text-gray-600 mb-4">{t('discord.description')}</p>
          <Link 
            href={`/${locale}/discord`}
            className="inline-block px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors"
          >
            {t('discord.button')}
          </Link>
        </section>
      </div>
    </div>
  )
}