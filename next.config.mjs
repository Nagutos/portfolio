import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = { output: 'export' };

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
