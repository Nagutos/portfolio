'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          {t('site.name')}
        </Link>
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li>
            <Link href="/">{t('nav.home')}</Link>
          </li>
          <li>
            <Link href="/about">{t('nav.about')}</Link>
          </li>
          <li>
            <Link href="/projects">{t('nav.projects')}</Link>
          </li>
          <li>
            <Link href="/contact">{t('nav.contact')}</Link>
          </li>
        </ul>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
