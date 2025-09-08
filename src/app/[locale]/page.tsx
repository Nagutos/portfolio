// src/app/[locale]/page.tsx
'use client';

import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{t('home.title')}</h1>
      <p className="mt-4">{t('home.description')}</p>
    </div>
  );
}
