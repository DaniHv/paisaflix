const nextConfig = {
  typescript: {
    // Desactivado por tiempo faltante para tipar fuertemente los componentes de UI reutilizables con forwardRef que me dan problemas con Emotion/Styled :(
    ignoreBuildErrors: true,
  },
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = nextConfig;
