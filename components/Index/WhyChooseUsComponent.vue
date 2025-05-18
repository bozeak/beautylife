<template>
  <section ref="sectionRef" class="w-full bg-gray-100">
    <div
      class="container mx-auto flex flex-col md:flex-row items-center justify-center py-16"
    >
      <div class="w-[90%] md:w-1/2">
        <div class="relative custom-max-w">
          <div class="box-images-item box-image-1" :style="{ transform: parallax1() }">
            <NuxtImg
              :src="img1"
              format="webp"
              alt="Why Choose Us"
              width="282"
              height="282"
            />
          </div>
          <div class="box-images-item box-image-2" :style="{ transform: parallax2() }">
            <NuxtImg
              :src="img2"
              format="webp"
              alt="Why Choose Us"
              width="240"
              height="369"
            />
          </div>
          <div class="box-images-item box-image-3" :style="{ transform: parallax3() }">
            <NuxtImg
              :src="img3"
              format="webp"
              alt="Why Choose Us"
              width="259"
              height="369"
            />
          </div>
          <div class="box-images-item box-image-4" :style="{ transform: parallax4() }">
            <NuxtImg
              :src="img4"
              format="webp"
              alt="Why Choose Us"
              width="266"
              height="266"
            />
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2">
        <h2 class="text-3xl md:text-5xl font-bold text-gray-800 my-4 md:mb-6">
          {{ $t("why.heading") }}
        </h2>
        <p class="text-xl mb-4 text-gray-800">
          {{ $t("why.p1") }}
        </p>
        <p class="text-gray-500 mb-6">
          {{ $t("why.p2") }}
        </p>
        <NuxtLink
          class="px-6 py-3 mt-6 border border-brand-pink rounded-2xl hover:bg-brand-pink hover:text-white transition-colors font-semibold"
          href="https://fb.com/salonbl"
          >{{ $t("details") }}</NuxtLink
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import img1 from "/images/work282x282.jpg";
import img2 from "/images/work240x369.jpg";
import img3 from "/images/work259x369.jpg";
import img4 from "/images/work266x266.jpg";

const sectionRef = ref(null);
const progress = ref(0);

const handleScroll = () => {
  if (!sectionRef.value) return;
  const rect = sectionRef.value.getBoundingClientRect();
  const windowH = window.innerHeight || document.documentElement.clientHeight;
  // progress: 0 when section top is at bottom of viewport, 1 when section top is at top of viewport
  const p = 1 - rect.top / windowH;
  progress.value = Math.max(0, Math.min(1, p));
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Parallax factors for each image (tweak as you like)
const parallax1 = () => `translateX(${30 - progress.value * 60}px)`; // right to left
const parallax2 = () => `translateY(${progress.value * 40 - 20}px)`; // vertical as before
const parallax3 = () => `translateX(${-40 + progress.value * 80}px)`; // left to right
const parallax4 = () => `translateY(${progress.value * 30 - 15}px)`; // vertical as before
</script>

<style scoped>
.box-images-item {
  display: inline-block;
  border: 10px solid #fff;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.13);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.box-image-1 {
  position: absolute;
  top: 100px;
  left: 0;
  z-index: 4;
}
.box-image-2 {
  position: relative;
  margin-left: 32%;
  z-index: 3;
}
.box-image-3 {
  position: absolute;
  right: 0;
  bottom: 100px;
  z-index: 2;
}
.box-image-4 {
  position: relative;
  margin-top: -5%;
  margin-left: 17%;
  z-index: 1;
}
.custom-max-w {
  max-width: 520px;
}
</style>
