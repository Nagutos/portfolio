// src/app/[locale]/layout.tsx
import './../../styles/globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!['fr', 'en'].includes(locale)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (_) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className="bg-neutral-light text-white flex justify-center items-center min-h-screen">
        <Navbar
          home={messages.navbar.home}
          parcours={messages.navbar.parcours}
          skills={messages.navbar.skills}
          extra={messages.navbar.extra}
          contact={messages.navbar.contact}
          locale={locale}
        />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="w-full max-w p-4">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
