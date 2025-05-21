<template>
  <section class="relative w-full h-64 md:h-72 flex items-center overflow-hidden">
    <NuxtImg
      src="/images/contact-banner2.jpg"
      alt=""
      class="absolute inset-0 w-full h-full object-cover z-0"
      format="webp"
      quality="80"
      aria-hidden="true"
      priority
    />
    <div class="container relative z-10 mx-4 md:mx-auto flex items-center h-full">
      <h2 class="text-3xl md:text-4xl font-bold">
        {{ $t("contacts") }}
      </h2>
    </div>
  </section>
</template>
