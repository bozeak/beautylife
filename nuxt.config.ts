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
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ru', name: 'Русский', file: 'ru.json' },
      { code: 'ro', name: 'Romana', file: 'ro.json' },
    ],
    defaultLocale: 'ro',
    lazy: true,
    langDir: 'locales/',
  }
});