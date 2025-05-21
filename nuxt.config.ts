// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
    }
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@dargmuesli/nuxt-cookie-control'
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
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'ru', language: 'ru-RU', name: 'Русский', file: 'ru.json' },
      { code: 'ro', language: 'ro-MD', name: 'Romana', file: 'ro.json' },
    ],
    defaultLocale: 'ro',
    lazy: true,
    langDir: 'locales/',
    detectBrowserLanguage: false,
  },
  cookieControl: {
    // Options for the cookie control module
    locales: ['en', 'ru', 'ro'],
  }
});