// src/app/[locale]/layout.tsx
import './../../styles/globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { locales, isLocale } from '@/i18n/config';

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  // Provide the locale from the route segment so pages render statically
  // (output: 'export') instead of reading request headers.
  setRequestLocale(locale);

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <>
      <Navbar
        home={messages.navbar.home}
        parcours={messages.navbar.parcours}
        skills={messages.navbar.skills}
        projects={messages.navbar.projects}
        extra={messages.navbar.extra}
        contact={messages.navbar.contact}
        locale={locale}
      />
      <NextIntlClientProvider locale={locale} messages={messages}>
        <div className="w-full p-4">{children}</div>
      </NextIntlClientProvider>
    </>
  );
}
