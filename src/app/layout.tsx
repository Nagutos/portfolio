// src/app/layout.tsx
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-neutral-light text-white flex justify-center items-center min-h-screen">
        {children}
      </body>
    </html>
  );
}
