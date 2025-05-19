<script setup>
import PostFooterComponent from "./components/PostFooterComponent.vue";
import { useHead } from "#imports";

const i18nHead = useLocaleHead({ seo: { canonicalQueries: ["foo"] } });
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
      content:
        "Beauty Life Salon offers professional beauty, hair, and wellness services in Chișinău. Discover our team and book your appointment today!",
    },
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
    { property: "og:url", content: "https://beautylife.md" },
    { property: "og:image", content: "/og-image.jpg" },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BeautySalon",
        name: "Beauty Life Salon",
        image: "https://beautylife.md/og-image.jpg",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Your Street 1",
          addressLocality: "Chișinău",
          addressCountry: "MD",
        },
        telephone: "+373 123 456 78",
      }),
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
</template>
