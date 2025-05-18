<template>
  <section class="w-full py-16">
    <div class="container mx-auto">
      <div class="flex flex-col items-center justify-center">
        <h2 class="text-3xl font-bold text-center">
          {{ $t("servicesSection.heading") }}
        </h2>
        <div class="bg-brand-pink w-[100px] h-0.5 m-auto my-6" />
        <p class="text-lg text-center mb-8 px-4 w-full md:w-2/4">
          {{ $t("servicesSection.description") }}
        </p>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-4 lg:gap-6"
        >
          <div
            v-for="(service, i) in services"
            :key="service.id"
            class="bg-white p-12 min-h-[300px] transition-transform duration-900 ease-in-out hover:scale-110 hover:shadow-xl cursor-pointer"
          >
            <div class="flex flex-col items-center mb-4 justify-center text-center">
              <div class="w-24 h-22 mb-3 bg-gray-50 rounded-full">
                <Icon :name="service.icon" class="w-20 h-20 mb-3 text-brand-pink" />
              </div>
              <div>
                <h3 class="text-xl font-semibold">{{ $t(`services.${i}.name`) }}</h3>
              </div>
              <p>{{ $t(`services.${i}.description`) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  { id: 1, icon: "bl:hair" },
  { id: 2, icon: "bl:makeup" },
  { id: 3, icon: "bl:nails" },
  { id: 4, icon: "bl:skin" },
  { id: 5, icon: "bl:body" },
  { id: 6, icon: "bl:massage" },
];
</script>
