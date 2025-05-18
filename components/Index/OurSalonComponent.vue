<template>
  <section class="bg-gray-100 py-20">
    <div class="container flex flex-col md:flex-row gap-6 justify-center px-4 mx-auto">
      <div class="w-full md:w-1/2 md:max-w-[570px] mb-8 px-6">
        <h3 class="text-6xl font-bold mb-6">{{ $t("ourSalon.heading") }}</h3>
        <p class="my-8 text-gray-600 font-bold text-2xl">
          {{ $t("ourSalon.p1") }}
        </p>
        <p class="my-8 text-gray-500 text-xl">
          {{ $t("ourSalon.p2") }}
        </p>
        <NuxtImg src="/images/about-3.jpg" format="webp" width="570" height="712" />
        <div class="text-2xl md:text-3xl lg:text-4xl italic mt-8 text-black-500">
          {{ $t("ourSalon.quote") }}
        </div>
      </div>
      <div class="w-full md:w-1/2 md:max-w-[570px] mb-8 px-6">
        <NuxtImg src="/images/about-1.jpg" format="webp" width="570" height="541" />
        <p class="my-8 text-gray-500 text-xl">
          {{ $t("ourSalon.p3") }}
        </p>
        <NuxtImg src="/images/about-2.jpg" format="webp" width="570" height="541" />
      </div>
    </div>
  </section>
</template>
