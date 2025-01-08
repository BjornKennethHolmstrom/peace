'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Card from '@/components/ui/card';

export default function DirectActionPage() {
  const t = useTranslations('DirectActions');

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-normal mb-4">{t('title')}</h1>
      <p className="text-lg text-gray-600 mb-8">{t('description')}</p>

      <div className="space-y-8">
        {/* Contact Decision Makers */}
        <Card className="p-6">
          <h2 className="text-xl font-medium mb-4">{t('sections.contact.title')}</h2>
          <p className="text-gray-600 mb-4">{t('sections.contact.description')}</p>
          <h3 className="font-medium mb-2">{t('sections.contact.howTo')}</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-gray-600">{t('sections.contact.steps.findReps')}</li>
            <li className="text-gray-600">{t('sections.contact.steps.writeLetter')}</li>
            <li className="text-gray-600">{t('sections.contact.steps.followUp')}</li>
          </ul>
        </Card>

        {/* Support Humanitarian Aid */}
        <Card className="p-6">
          <h2 className="text-xl font-medium mb-4">{t('sections.aid.title')}</h2>
          <p className="text-gray-600 mb-4">{t('sections.aid.description')}</p>
          <h3 className="font-medium mb-2">{t('sections.aid.howTo')}</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-gray-600">{t('sections.aid.steps.research')}</li>
            <li className="text-gray-600">{t('sections.aid.steps.verify')}</li>
            <li className="text-gray-600">{t('sections.aid.steps.support')}</li>
          </ul>
        </Card>

        {/* Share Verified Information */}
        <Card className="p-6">
          <h2 className="text-xl font-medium mb-4">{t('sections.info.title')}</h2>
          <p className="text-gray-600 mb-4">{t('sections.info.description')}</p>
          <h3 className="font-medium mb-2">{t('sections.info.howTo')}</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-gray-600">{t('sections.info.steps.verify')}</li>
            <li className="text-gray-600">{t('sections.info.steps.focus')}</li>
            <li className="text-gray-600">{t('sections.info.steps.share')}</li>
          </ul>
        </Card>

        {/* Political Action */}
        <Card className="p-6">
          <h2 className="text-xl font-medium mb-4">{t('sections.political.title')}</h2>
          <p className="text-gray-600 mb-4">{t('sections.political.description')}</p>
          <h3 className="font-medium mb-2">{t('sections.political.howTo')}</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-gray-600">{t('sections.political.steps.start')}</li>
            <li className="text-gray-600">{t('sections.political.steps.organize')}</li>
            <li className="text-gray-600">{t('sections.political.steps.build')}</li>
          </ul>
        </Card>

        {/* Discord */}
        <Card className="p-6">
          <h2 className="text-xl font-medium mb-4">{t('sections.discord.title')}</h2>
          <p className="text-gray-600 mb-4">{t('sections.discord.description')}</p>
          <a 
            href="/discord"
            className="inline-block px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors rounded"
          >
            {t('sections.discord.button')}
          </a>
        </Card>
      </div>
    </div>
  );
}
