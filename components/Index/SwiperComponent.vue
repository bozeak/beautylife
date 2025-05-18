<template>
  <section class="w-full">
    <Swiper
      :modules="[Navigation, Pagination, Autoplay, EffectFade]"
      effect="fade"
      :slides-per-view="1"
      :navigation="navigationOptions"
      :pagination="paginationOptions"
      :autoplay="autoplayOptions"
      :loop="true"
      class="w-full h-[400px] md:h-[600px]"
      @slide-change="onSlideChange"
    >
      <SwiperSlide v-for="(src, i) in images" :key="i">
        <div class="relative w-full h-full">
          <NuxtImg
            :src="src"
            format="webp"
            class="object-cover w-full h-full"
            :alt="`swiper.slides.${i}.heading`"
            :width="1920"
            :height="720"
            :loading="i === 0 ? 'eager' : 'lazy'"
          />
          <div class="absolute inset-0 flex items-center justify-left container mx-auto">
            <transition name="slide-up" mode="out-in" duration="3000">
              <div
                v-if="currentIndex === i"
                :key="currentIndex === i ? $t(`swiper.slides.${i}.text`) : ''"
                class="lg:w-3/5 mx-3 w-full px-6 py-4 bg-white bg-opacity-45 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-500 ease-in-out h-auto"
              >
                <h2 class="text-2xl md:text-4xl font-bold mb-4">
                  {{ $t(`swiper.slides.${i}.heading`) }}
                </h2>
                <p class="mb-4 hidden md:block text-gray-600">
                  {{ $t(`swiper.slides.${i}.text`) }}
                </p>
                <div class="mb-4 mt-12">
                  <NuxtLink
                    :to="localePath('/contacts')"
                    class="px-6 py-3 mt-6 border border-brand-pink rounded-2xl hover:bg-brand-pink hover:text-white transition-colors font-semibold"
                    >{{ $t("book") }}</NuxtLink
                  >
                </div>
              </div>
            </transition>
          </div>
        </div>
      </SwiperSlide>
      <!-- Navigation buttons for desktop -->
      <!-- <template #navigation>
        <button v-if="showNav" class="swiper-button-prev custom-nav hidden md:flex">
          <Icon name="mdi:chevron-up" size="32" class="text-gray-500" />
        </button>
        <button v-if="showNav" class="swiper-button-next custom-nav hidden md:flex">
          <Icon name="mdi:chevron-down" size="32" class="text-gray-500" />
        </button>
      </template> -->
    </Swiper>
    <!-- Pagination for mobile -->
    <!-- <div class="md:hidden flex justify-center mt-4">
      <div class="swiper-pagination"></div>
    </div> -->
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { useLocalePath } from "#i18n";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Import images from assets
import img1 from "/images/1920x720_2.jpg";
import img2 from "/images/1920x720.jpg";
import img3 from "/images/1920x720_3.jpg";

const localePath = useLocalePath();

// Add text for each slide
const images = [img1, img2, img3];

const navigationOptions = {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  enabled: true,
};

const paginationOptions = {
  el: ".swiper-pagination",
  clickable: true,
  renderBullet: (index, className) => `<span class="${className}"></span>`,
};

const autoplayOptions = {
  delay: 6000, // 6 seconds
  disableOnInteraction: false,
  transitionSpeed: 3000,
  waitForTransition: true,
};

// const showNav = true;

// Track active slide index for transition key
const currentIndex = ref(0);
const onSlideChange = (swiper) => {
  currentIndex.value = swiper.realIndex;
};
</script>

<style scoped>
/* Custom navigation buttons for desktop */
.custom-nav {
  position: absolute;
  top: 33%;
  z-index: 10;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  border: none;
  color: #ee9f9f;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  transition: background-color 0.2s;
}
.swiper-button-prev {
  left: 16px;
}
.swiper-button-next {
  right: 16px;
}

/* Hide navigation on mobile */
@media (max-width: 767px) {
  .custom-nav {
    display: none !important;
  }
}

/* Swiper pagination dots for mobile */
.swiper-pagination-bullet {
  background: #e5e7eb; /* gray-200 */
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background: #ee9f9f !important; /* brand pink */
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(40px);
}
.slide-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.slide-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-40px);
}
</style>
