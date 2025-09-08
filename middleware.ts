// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  defaultLocale: 'fr',
  locales: ['fr', 'en'],
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image).*)'],
};
