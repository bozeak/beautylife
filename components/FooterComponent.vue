<template>
  <footer
    class="container mx-auto flex flex-col md:flex-row justify-between items-center py-8"
  >
    <div>
      <NuxtLink :to="localePath('/')">
        <NuxtImg src="/logo.svg" alt="Beauty Life Salon" width="142" height="58" />
      </NuxtLink>
    </div>
    <div>
      <ul class="flex items-center space-x-8 mt-6 md:mt-0">
        <li>
          <nuxt-link
            :to="localePath('/')"
            class="uppercase font-semibold transition-colors"
            :class="isActive('/')"
            >{{ $t("main") }}</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            :to="localePath('/contacts')"
            class="uppercase font-semibold transition-colors"
            :class="isActive('/contacts')"
            >{{ $t("contacts") }}</nuxt-link
          >
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
import { useRoute } from "vue-router";
import { NuxtLink, NuxtImg } from "#components";
import { useLocalePath } from "#i18n";

const route = useRoute();
const localePath = useLocalePath();
const isActive = (path) => {
  const localized = localePath(path);
  return route.path === localized
    ? "text-brand-pink"
    : "text-gray-700 hover:text-brand-pink";
};
</script>
