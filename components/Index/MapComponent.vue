<template>
  <div ref="container" class="w-full h-[400px]">
    <iframe
      v-if="showIframe"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10889.149031740657!2d28.8516691!3d46.9756922!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3be699801adb79c5!2sBeauty%20Life%20Salon!5e0!3m2!1sen!2s!4v1595493814652!5m2!1sen!2s"
      width="100%"
      height="100%"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const showIframe = ref(false);
const container = ref(null);
let observer;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        showIframe.value = true;
        observer.disconnect();
      }
    },
    { threshold: 0.1 }
  );
  if (container.value) observer.observe(container.value);
});

onUnmounted(() => {
  if (observer && container.value) observer.unobserve(container.value);
});
</script>
