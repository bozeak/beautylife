// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {}
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap'
  ],
  icon: {
    customCollections: [
      {
        prefix: 'bl',
        dir: './public/icons/svg',
      },
    ],
  },
  i18n: {
    baseUrl: 'https://beautylife.md',
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'ru', language: 'ru-RU', name: 'Русский', file: 'ru.json' },
      { code: 'ro', language: 'ro-MD', name: 'Romana', file: 'ro.json' },
    ],
    defaultLocale: 'ro',
    lazy: true,
    langDir: 'locales/',
  }
});