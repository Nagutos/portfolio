import { ReactNode } from 'react';
type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!['fr', 'en'].includes(locale)) {
  }

  return (
    <html lang={locale}>
      <body className="bg-neutral-light text-white flex justify-center items-center min-h-screen">
        {children}
      </body>
    </html>
  );
}
