<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white',
      scrolled ? 'h-20 border-b' : 'h-[99px]',
    ]"
  >
    <div class="container mx-auto flex items-center justify-between h-full px-4">
      <NuxtLink to="/" class="flex items-center h-full">
        <NuxtImg
          src="/logo.svg"
          alt="Beauty Life Salon"
          class="h-16 w-auto"
          width="216"
          height="64"
        />
      </NuxtLink>
      <!-- Hamburger button (mobile) -->
      <button
        class="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-brand-pink"
        aria-label="Toggle menu"
        @click="menuOpen = !menuOpen"
      >
        <svg
          v-if="!menuOpen"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <!-- Desktop menu -->
      <ul class="hidden md:flex items-center space-x-8">
        <li>
          <NuxtLink
            to="/"
            class="uppercase font-semibold transition-colors"
            :class="isActive('/')"
            >Главная</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/contacts"
            class="uppercase font-semibold transition-colors"
            :class="isActive('/contacts')"
            >Контакты</NuxtLink
          >
        </li>
      </ul>
    </div>
    <!-- Mobile menu -->
    <transition name="fade">
      <ul
        v-if="menuOpen"
        class="md:hidden bg-white shadow-lg absolute top-full left-0 w-full flex flex-col items-center space-y-4 py-4"
      >
        <li>
          <NuxtLink
            to="/"
            class="uppercase font-semibold transition-colors block"
            :class="isActive('/')"
            @click="menuOpen = false"
            >Главная</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/contacts"
            class="uppercase font-semibold transition-colors block"
            :class="isActive('/contacts')"
            @click="menuOpen = false"
            >Контакты</NuxtLink
          >
        </li>
      </ul>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const scrolled = ref(false);
const menuOpen = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const route = useRoute();
const isActive = (path) =>
  route.path === path ? "text-brand-pink" : "text-gray-700 hover:text-brand-pink";
</script>

<style scoped>
nav {
  min-height: 64px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
