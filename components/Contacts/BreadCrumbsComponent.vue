<template>
  <section class="w-full h-[77px] bg-gray-50">
    <div class="container mx-auto h-full flex items-center">
      <ul class="mx-4 flex flex-row items-center md:items-start line-height-1">
        <li class="text-brand-pink text-[16px]">
          <NuxtLink :to="localePath('/')">{{ $t("main") }}</NuxtLink>
        </li>
        <li class="text-gray-400 text-[16px] mx-2.5">
          <Icon name="mdi:chevron-right" size="18" class="mb-[-4px]" />
        </li>
        <li class="text-gray-400 text-[16px]">
          <NuxtLink to="/contacts" disabled class="cursor-default">{{
            $t("contacts")
          }}</NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useLocalePath } from "#i18n";

const localePath = useLocalePath();
</script>
