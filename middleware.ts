import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Locale par défaut
  defaultLocale: 'fr',
  // Locales supportées
  locales: ['fr', 'en'],
});

// On applique le middleware à toutes les routes sauf _next et API
export const config = {
  matcher: ['/((?!api|_next/static|_next/image).*)'],
};
