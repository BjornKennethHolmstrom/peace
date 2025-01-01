// src/app/[locale]/take-action/understanding/page.tsx

import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

export default function Understanding({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Understanding')

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl mb-8">
          {t('title')}
        </h1>

        <p className="text-lg mb-12">
          {t('description')}
        </p>
		
		{/* Why Peace Matters Section */}
		<section className="mb-12">
		  <h2 className="text-2xl mb-6">{t('why.title')}</h2>
		  <div className="space-y-6">
			<div className="p-6 border rounded">
			  <h3 className="text-xl mb-3">{t('why.human.title')}</h3>
			  <p className="text-gray-600">{t('why.human.description')}</p>
			</div>

			<div className="p-6 border rounded">
			  <h3 className="text-xl mb-3">{t('why.resources.title')}</h3>
			  <p className="text-gray-600">{t('why.resources.description')}</p>
			</div>

			<div className="p-6 border rounded">
			  <h3 className="text-xl mb-3">{t('why.collaboration.title')}</h3>
			  <p className="text-gray-600">{t('why.collaboration.description')}</p>
			</div>
		  </div>
		</section>

        {/* Key Concepts Section */}
        <section className="mb-12">
          <h2 className="text-2xl mb-6">{t('concepts.title')}</h2>
          <div className="space-y-6">
            <div className="p-6 border rounded">
              <h3 className="text-xl mb-3">{t('concepts.mutual.title')}</h3>
              <p className="text-gray-600">{t('concepts.mutual.description')}</p>
            </div>

            <div className="p-6 border rounded">
              <h3 className="text-xl mb-3">{t('concepts.needs.title')}</h3>
              <p className="text-gray-600">{t('concepts.needs.description')}</p>
            </div>

            <div className="p-6 border rounded">
              <h3 className="text-xl mb-3">{t('concepts.cooperation.title')}</h3>
              <p className="text-gray-600">{t('concepts.cooperation.description')}</p>
            </div>
          </div>
        </section>

        {/* Practical Understanding Section */}
        <section className="mb-12">
          <h2 className="text-2xl mb-6">{t('practical.title')}</h2>
          <div className="space-y-6">
            <div className="p-6 border rounded">
              <h3 className="text-xl mb-3">{t('practical.research.title')}</h3>
              <p className="text-gray-600 mb-4">{t('practical.research.description')}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>{t('practical.research.points.sources')}</li>
                <li>{t('practical.research.points.context')}</li>
                <li>{t('practical.research.points.perspectives')}</li>
              </ul>
            </div>

            <div className="p-6 border rounded">
              <h3 className="text-xl mb-3">{t('practical.analysis.title')}</h3>
              <p className="text-gray-600 mb-4">{t('practical.analysis.description')}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>{t('practical.analysis.points.factors')}</li>
                <li>{t('practical.analysis.points.interests')}</li>
                <li>{t('practical.analysis.points.solutions')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Moving to Action Section */}
        <section className="bg-gray-50 p-6 rounded">
          <h2 className="text-2xl mb-4">{t('action.title')}</h2>
          <p className="text-gray-600 mb-4">{t('action.description')}</p>
          <p className="text-gray-600">{t('action.conclusion')}</p>
        </section>
      </div>
    </div>
  )
}