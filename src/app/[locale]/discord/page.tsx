import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

// Add static params generation
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

export default function DiscordPage({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  
  const t = useTranslations('Discord');

  // Discord invite link - you can replace this with your actual invite link
  const discordInviteLink = "https://discord.gg/yQ76qBguMF";

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-3xl mb-4">{t('hero.title')}</h1>
          <p className="text-lg text-gray-600 mb-8">
            {t('hero.description')}
          </p>
          <a 
            href={discordInviteLink}
            className="inline-block px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('hero.button')}
          </a>
        </section>

        {/* Server Description */}
        <section className="mb-12">
          <h2 className="text-2xl mb-6">{t('about.title')}</h2>
          <div className="space-y-4">
            <p className="text-gray-600">{t('about.description1')}</p>
            <p className="text-gray-600">{t('about.description2')}</p>
          </div>
        </section>

        {/* Channel Structure */}
        <section className="mb-12">
          <h2 className="text-2xl mb-6">{t('structure.title')}</h2>
          
          <div className="space-y-6">
            {/* Information Category */}
            <div className="p-6 border rounded">
              <h3 className="text-xl mb-3">{t('structure.information.title')}</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>{t('structure.information.welcome')}</li>
                <li>{t('structure.information.present')}</li>
                <li>{t('structure.information.questions')}</li>
              </ul>
            </div>

            {/* Dialogue Category */}
            <div className="p-6 border rounded">
              <h3 className="text-xl mb-3">{t('structure.dialogue.title')}</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>{t('structure.dialogue.general')}</li>
                <li>{t('structure.dialogue.diplomatic')}</li>
                <li>{t('structure.dialogue.grassroots')}</li>
                <li>{t('structure.dialogue.resources')}</li>
              </ul>
            </div>

            {/* Conflicts Category */}
            <div className="p-6 border rounded">
              <h3 className="text-xl mb-3">{t('structure.conflicts.title')}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">{t('structure.conflicts.channels.title')}</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>{t('structure.conflicts.channels.ukraine')}</li>
                    <li>{t('structure.conflicts.channels.israelPalestine')}</li>
                    <li>{t('structure.conflicts.channels.myanmar')}</li>
                    <li>{t('structure.conflicts.channels.sudan')}</li>
                    <li>{t('structure.conflicts.channels.regional')}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">{t('structure.conflicts.features.title')}</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>{t('structure.conflicts.features.background')}</li>
                    <li>{t('structure.conflicts.features.updates')}</li>
                    <li>{t('structure.conflicts.features.resources')}</li>
                    <li>{t('structure.conflicts.features.solutions')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guidelines Summary */}
        <section className="bg-gray-50 p-6 rounded">
          <h2 className="text-2xl mb-6">{t('guidelines.title')}</h2>
          <div className="space-y-4">
            <p className="text-gray-600">{t('guidelines.intro')}</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>{t('guidelines.points.dialogue')}</li>
              <li>{t('guidelines.points.focus')}</li>
              <li>{t('guidelines.points.information')}</li>
              <li>{t('guidelines.points.sensitivity')}</li>
              <li>{t('guidelines.points.nonviolence')}</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
