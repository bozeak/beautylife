// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    }
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
  ],
  // plugins: ['~/plugins/google-maps.js'],
  icon: {
    customCollections: [
      {
        prefix: 'bl',
        dir: './public/icons/svg',
      },
    ],
  }
});