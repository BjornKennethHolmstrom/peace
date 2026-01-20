// src/app/[locale]/analysis/page.tsx
'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { CaseStudy } from '@/components/analysis/CaseStudy';
import { PathsToPeace } from '@/components/analysis/PathsToPeace';

export default function AnalysisPage() {
  const t = useTranslations('Analysis');

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Introduction */}
      <section className="mb-12">
        <h1 className="text-3xl font-normal mb-6">{t('title')}</h1>
        <p className="text-lg mb-6">{t('introduction')}</p>
      </section>

      {/* The Four Barriers to Peace */}
      <section className="mb-12">
        <h2 className="text-2xl font-normal mb-6">{t('barriers.title')}</h2>
        <p className="text-lg mb-6">{t('barriers.description')}</p>

        <div className="space-y-8">
          {/* Barrier 1: Sovereignty Trap */}
          <div className="border rounded p-6">
            <h3 className="text-xl font-medium mb-4">{t('barriers.sovereignty.title')}</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-700 mb-2">{t('barriers.labels.structural')}</p>
                <p className="text-gray-600">{t('barriers.sovereignty.structural')}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-2">{t('barriers.labels.consciousness')}</p>
                <p className="text-gray-600">{t('barriers.sovereignty.consciousness')}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-2">{t('barriers.labels.whatsNeeded')}</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li><strong>{t('barriers.labels.structures')}:</strong> {t('barriers.sovereignty.structures')}</li>
                  <li><strong>{t('barriers.labels.mindsets')}:</strong> {t('barriers.sovereignty.mindsets')}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Barrier 2: Resource Weaponization */}
          <div className="border rounded p-6">
            <h3 className="text-xl font-medium mb-4">{t('barriers.resources.title')}</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-700 mb-2">{t('barriers.labels.structural')}</p>
                <p className="text-gray-600">{t('barriers.resources.structural')}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-2">{t('barriers.labels.consciousness')}</p>
                <p className="text-gray-600">{t('barriers.resources.consciousness')}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-2">{t('barriers.labels.whatsNeeded')}</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li><strong>{t('barriers.labels.structures')}:</strong> {t('barriers.resources.structures')}</li>
                  <li><strong>{t('barriers.labels.mindsets')}:</strong> {t('barriers.resources.mindsets')}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Barrier 3: Relative-Gain Competition */}
          <div className="border rounded p-6">
            <h3 className="text-xl font-medium mb-4">{t('barriers.competition.title')}</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-700 mb-2">{t('barriers.labels.structural')}</p>
                <p className="text-gray-600">{t('barriers.competition.structural')}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-2">{t('barriers.labels.consciousness')}</p>
                <p className="text-gray-600">{t('barriers.competition.consciousness')}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-2">{t('barriers.labels.whatsNeeded')}</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li><strong>{t('barriers.labels.structures')}:</strong> {t('barriers.competition.structures')}</li>
                  <li><strong>{t('barriers.labels.mindsets')}:</strong> {t('barriers.competition.mindsets')}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Barrier 4: Free-Rider Problem */}
          <div className="border rounded p-6">
            <h3 className="text-xl font-medium mb-4">{t('barriers.freerider.title')}</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-700 mb-2">{t('barriers.labels.structural')}</p>
                <p className="text-gray-600">{t('barriers.freerider.structural')}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-2">{t('barriers.labels.consciousness')}</p>
                <p className="text-gray-600">{t('barriers.freerider.consciousness')}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-2">{t('barriers.labels.whatsNeeded')}</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li><strong>{t('barriers.labels.structures')}:</strong> {t('barriers.freerider.structures')}</li>
                  <li><strong>{t('barriers.labels.mindsets')}:</strong> {t('barriers.freerider.mindsets')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <CaseStudy translationKey="ukraineConflict" />

      {/* Paths Forward */}
      <PathsToPeace />
    </div>
  );
}
