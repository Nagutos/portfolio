'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

type Status = 'idle' | 'submitting' | 'success' | 'error';

// Third-party form endpoint (e.g. Formspree). Kept out of the repo via .env.local
// so no personal contact data is ever committed or shipped in the static HTML.
const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

export default function ContactForm() {
  const t = useTranslations('contact.form');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!endpoint) {
      setStatus('error');
      return;
    }

    const form = event.currentTarget;
    setStatus('submitting');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const inputClass =
    'w-full rounded-xl px-4 py-3 text-black bg-white placeholder-gray-500 ' +
    'focus:outline-none focus:ring-2 focus:ring-white';

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-xl mt-8 text-left"
    >
      <label className="flex flex-col gap-2">
        <span className="font-semibold">{t('name')}</span>
        <input
          type="text"
          name="name"
          required
          autoComplete="name"
          className={inputClass}
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-semibold">{t('email')}</span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          className={inputClass}
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-semibold">{t('message')}</span>
        <textarea
          name="message"
          required
          rows={5}
          className={inputClass}
        />
      </label>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-2 px-8 py-4 bg-white text-[#E63946] font-semibold rounded-full hover:bg-[#F5F5F5] transition disabled:opacity-60"
      >
        {status === 'submitting' ? t('sending') : t('send')}
      </button>

      {status === 'success' && (
        <p role="status" className="text-center font-semibold">
          {t('success')}
        </p>
      )}
      {status === 'error' && (
        <p role="alert" className="text-center font-semibold">
          {t('error')}
        </p>
      )}
    </form>
  );
}
