// src/components/analysis/PathsToPeace.tsx
'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Card from '@/components/ui/card';

export const PathsToPeace = () => {
  const t = useTranslations('Analysis.pathsToPeace');
  
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-normal mb-6">{t('title')}</h2>
      <p className="text-lg mb-6">{t('description')}</p>
      
      <div className="grid gap-6">
        {[0, 1, 2, 3, 4].map((index) => (
          <Card key={index} className="p-6">
            <h3 className="text-xl font-medium mb-3">
              {t(`paths.${index}.title`)}
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-700 mb-2">{t('labels.systemsWeBuild')}</p>
                <p className="text-gray-600 mb-2">{t(`paths.${index}.systems`)}</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  {[0, 1].map((pointIndex) => (
                    <li key={pointIndex}>
                      {t(`paths.${index}.systemPoints.${pointIndex}`)}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-2">{t('labels.mindsetsCultivate')}</p>
                <p className="text-gray-600 mb-2">{t(`paths.${index}.mindsets`)}</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  {[0, 1].map((pointIndex) => (
                    <li key={pointIndex}>
                      {t(`paths.${index}.mindsetPoints.${pointIndex}`)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
