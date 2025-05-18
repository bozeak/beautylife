<template>
  <div class="flex gap-2 md:gap-4 items-center">
    <NuxtLink
      v-for="locale in locales"
      :key="locale.code"
      :to="$switchLocalePath(locale.code)"
      class="px-2 py-1 rounded text-sm font-semibold transition-colors duration-150"
      :class="{
        'bg-brand-pink text-white': $i18n.locale === locale.code,
        'text-gray-700 hover:bg-brand-pink/20': $i18n.locale !== locale.code,
      }"
    >
      {{ locale.label }}
    </NuxtLink>
  </div>
</template>

<script setup>
const locales = [
  { code: "ro", label: "Ro" },
  { code: "ru", label: "Ру" },
  { code: "en", label: "En" },
];
</script>
