<template>
  <section class="relative w-full h-64 md:h-72 flex items-center overflow-hidden">
    <NuxtImg
      src="/images/contact-banner.jpeg"
      alt=""
      class="absolute inset-0 w-full h-full object-cover z-0 object-position-mobile"
      format="webp"
      quality="80"
      aria-hidden="true"
      priority
    />
    <div class="container md:mx-auto mx-4 relative z-10 flex items-center h-full">
      <h2 class="text-3xl md:text-4xl md:mx-4 font-bold">
        {{ $t("contacts") }}
      </h2>
    </div>
  </section>
</template>

<style scoped>
.object-position-mobile {
  object-position: right;
}
@media (min-width: 768px) {
  .object-position-mobile {
    object-position: center;
  }
}
</style>
