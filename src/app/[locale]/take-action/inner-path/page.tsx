import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

export default function InnerPath({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('InnerPath')

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl mb-8">
          {t('title')}
        </h1>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg mb-6">
            {t('introduction')}
          </p>
        </section>

        {/* The Nature of Mind */}
        <section className="mb-12">
          <h2 className="text-2xl mb-4">{t('sections.mind.title')}</h2>
          <p className="mb-4">{t('sections.mind.description')}</p>
          <ul className="space-y-3">
            <li>{t('sections.mind.points.grasping')}</li>
            <li>{t('sections.mind.points.observation')}</li>
            <li>{t('sections.mind.points.beyond')}</li>
          </ul>
        </section>

        {/* Simple Practices */}
        <section className="mb-12">
          <h2 className="text-2xl mb-4">{t('sections.practices.title')}</h2>
          <div className="space-y-6">
            <div className="p-4 bg-gray-50">
              <h3 className="font-medium mb-2">{t('sections.practices.observation.title')}</h3>
              <p>{t('sections.practices.observation.description')}</p>
            </div>
            <div className="p-4 bg-gray-50">
              <h3 className="font-medium mb-2">{t('sections.practices.presence.title')}</h3>
              <p>{t('sections.practices.presence.description')}</p>
            </div>
            <div className="p-4 bg-gray-50">
              <h3 className="font-medium mb-2">{t('sections.practices.connection.title')}</h3>
              <p>{t('sections.practices.connection.description')}</p>
            </div>
          </div>
        </section>

        {/* Deeper Understanding */}
        <section className="mb-12">
          <h2 className="text-2xl mb-4">{t('sections.deeper.title')}</h2>
          <p className="mb-4">{t('sections.deeper.description')}</p>
          <div className="p-4 bg-gray-50">
            <p className="italic">{t('sections.deeper.quote')}</p>
          </div>
        </section>
      </div>
    </div>
  )
}
