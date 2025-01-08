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

      {/* Foundation of Conflict */}
      <section className="mb-12">
        <h2 className="text-2xl font-normal mb-6">{t('foundation.title')}</h2>
        <p className="text-lg mb-6">{t('foundation.description')}</p>
        <ul className="list-disc pl-5 space-y-2">
          {[0, 1, 2, 3].map((index) => (
            <li key={index} className="text-gray-600">
              <strong>{t(`foundation.priorities.${index}.title`)}</strong>:{' '}
              {t(`foundation.priorities.${index}.description`)}
            </li>
          ))}
        </ul>
      </section>

      {/* Case Studies */}
      <CaseStudy translationKey="ukraineConflict" />

      {/* Paths to Peace */}
      <PathsToPeace />
    </div>
  );
}
