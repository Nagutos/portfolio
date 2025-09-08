'use client';

import { useTranslations } from 'next-intl';
import { siteConfig } from '../config/siteConfig';

export default function Hero() {
  const t = useTranslations();

  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">
        {t('hero.title', { name: siteConfig.name })}
      </h1>
      <p className="text-lg text-gray-600 mb-6">{t('hero.subtitle')}</p>
    </section>
  );
}
