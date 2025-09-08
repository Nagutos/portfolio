'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const currentLocale = segments[1];

  return (
    <div className="flex gap-2">
      <Link href={pathname.replace(`/${currentLocale}`, '/fr')}>FR</Link>
      <Link href={pathname.replace(`/${currentLocale}`, '/en')}>EN</Link>
    </div>
  );
}
