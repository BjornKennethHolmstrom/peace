// src/components/analysis/CaseStudy.tsx
'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Card from '@/components/ui/card';

type Perspective = {
  title: string;
  description: string;
  points: string[];
};

type CaseStudyProps = {
  translationKey: string;  // e.g., 'ukraineConflict'
};

export const CaseStudy = ({ translationKey }: CaseStudyProps) => {
  const t = useTranslations(`Analysis.caseStudies.${translationKey}`);
  
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-normal mb-6">{t('title')}</h2>
      <p className="text-lg mb-6">{t('description')}</p>
      
      <h3 className="text-xl font-normal mb-4">{t('perspectives.title')}</h3>
      <div className="grid gap-6">
        {[0, 1, 2, 3].map((index) => (
          <Card key={index} className="p-6">
            <h4 className="text-lg font-medium mb-3">
              {t(`perspectives.${index}.title`)}
            </h4>
            <p className="text-gray-600 mb-4">
              {t(`perspectives.${index}.description`)}
            </p>
            <ul className="list-disc pl-5 space-y-2">
              {[0, 1].map((pointIndex) => (
                <li key={pointIndex} className="text-gray-600">
                  {t(`perspectives.${index}.points.${pointIndex}`)}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
};
