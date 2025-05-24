<template>
  <div class="flex flex-col">
    <h3 class="text-2xl font-bold pt-6">{{ title }}</h3>
    <div class="flex flex-row items-center mt-3">
      <Icon :name="icon" size="28" class="text-brand-pink mr-3" />
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});
</script>
