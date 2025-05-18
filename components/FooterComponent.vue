<!-- <script setup lang="ts">
import { NuxtLink } from "#components";
</script> -->

<template>
  <footer
    class="container mx-auto flex flex-col md:flex-row justify-between items-center py-8 border-t border-gray-200"
  >
    <div>
      <NuxtLink to="/">
        <NuxtImg src="/logo.svg" alt="Beauty Life Salon" width="142" height="58" />
      </NuxtLink>
    </div>
    <div>
      <ul class="md:flex items-center space-x-8">
        <li>
          <nuxt-link
            to="/"
            class="uppercase font-semibold transition-colors"
            :class="isActive('/')"
            >Главная</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/contacts"
            class="uppercase font-semibold transition-colors"
            :class="isActive('/contacts')"
            >Контакты</nuxt-link
          >
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const isActive = (path) =>
  route.path === path ? "text-brand-pink" : "text-gray-700 hover:text-brand-pink";
</script>
