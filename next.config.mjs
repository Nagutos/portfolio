import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // 🔹 ajoute ceci
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
