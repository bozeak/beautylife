<script setup>
import FooterComponent from "./components/FooterComponent.vue";
import PostFooterComponent from "./components/PostFooterComponent.vue";
import { useHead, useI18n } from "#imports";

const i18nHead = useLocaleHead({ seo: { canonicalQueries: [] } });
const { locale, t } = useI18n();

useHead(() => ({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs.lang,
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])],
}));

useHead({
  titleTemplate: (titleChunk) =>
    titleChunk ? `${titleChunk} · Beauty Life Salon` : "Beauty Life Salon",
  meta: [
    {
      name: "description",
      content: t("contactsMetaDescription"),
    },
    // { name: "keywords", content: t("contactsMetaKeywords") },
    { name: "theme-color", content: "#ee9f9f" },
    { name: "apple-mobile-web-app-status-bar-style", content: "#ee9f9f" },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "mobile-web-app-capable", content: "yes" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "author", content: "Beauty Life Salon" },
    { name: "robots", content: "index, follow" },
    // Open Graph
    { property: "og:title", content: "Beauty Life Salon" },
    {
      property: "og:description",
      content: "Professional beauty, hair, and wellness services in Chișinău.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: process.env.SITE_URL },
    { property: "og:image", content: "/og-image.jpg" },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BeautySalon",
        inLanguage: locale.value,
        name: "Beauty Life Salon",
        image: `${process.env.SITE_URL}/og-image.jpg`,
        address: {
          "@type": "PostalAddress",
          streetAddress: "bd. Cuza Vodă 41",
          addressLocality: "Chișinău",
          addressCountry: "MD",
        },
        telephone: "+373 785 60 506",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "08:00",
            closes: "20:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Sunday",
            opens: "09:00",
            closes: "17:00",
          },
        ],
      }),
    },
    {
      src: "https://www.googletagmanager.com/gtag/js?id=G-KQBJLQW2HS",
      async: true,
    },
    {
      children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-KQBJLQW2HS');
      `,
    },
  ],
});
</script>
<template>
  <NavComponent />
  <div class="pt-[99px]">
    <NuxtPage />
  </div>
  <FooterComponent />
  <PostFooterComponent />
  <CookieControl :locale="locale" />
</template>
