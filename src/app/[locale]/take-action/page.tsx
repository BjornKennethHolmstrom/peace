'use client'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function TakeAction() {
  const t = useTranslations('TakeAction')
  const params = useParams()
  const locale = params.locale

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl mb-8">
          {t('title')}
        </h1>
        
        <p className="text-lg mb-12">
          {t('description')}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Inner Peace Section */}
          <div className="p-6 bg-white border rounded-lg hover:border-black transition-colors">
            <h2 className="text-xl mb-4">{t('sections.inner.title')}</h2>
            <p className="text-gray-600 mb-4">{t('sections.inner.description')}</p>
            <Link 
              href={`/${locale}/take-action/inner-path`}
              className="text-black hover:underline"
            >
              {t('readMore')} →
            </Link>
          </div>

          {/* External Actions Section */}
          <div className="p-6 bg-white border rounded-lg hover:border-black transition-colors">
            <h2 className="text-xl mb-4">{t('sections.external.title')}</h2>
            <p className="text-gray-600 mb-4">{t('sections.external.description')}</p>
            <Link 
              href={`/${locale}/take-action/external-actions`}
              className="text-black hover:underline"
            >
              {t('readMore')} →
            </Link>
          </div>

          {/* Join Forces Section */}
          <div className="p-6 bg-white border rounded-lg hover:border-black transition-colors">
            <h2 className="text-xl mb-4">{t('sections.join.title')}</h2>
            <p className="text-gray-600 mb-4">{t('sections.join.description')}</p>
            <Link 
              href={`/${locale}/take-action/join-forces`}
              className="text-black hover:underline"
            >
              {t('readMore')} →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
