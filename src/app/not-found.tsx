// src/app/not-found.tsx

'use client'; // facultatif ici mais souvent utile si tu veux des hooks

import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h1>Page d&apos;erreur</h1>
      <Link href="/">Retour</Link>
    </div>
  );
}
