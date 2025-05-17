<template>
  <section>
    <div class="container mx-auto">
      <div class="flex flex-col items-center justify-center">
        <h2 class="text-3xl font-bold text-center mb-8">Our Services</h2>
        <p class="text-lg text-center mb-8">
          We offer a wide range of services to cater to all your beauty needs.
        </p>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 divide-x divide-y divide-gray-200"
        >
          <div
            v-for="service in services"
            :key="service.id"
            class="bg-white p-6 transition-transform duration-200 ease-in-out hover:scale-105 cursor-pointer"
          >
            <div class="flex flex-col items-center mb-4 justify-center">
              <div
                class="w-24 h-22 mb-3 bg-gray-50 rounded-full flex items-center justify-center"
              >
                <Icon :name="service.icon" class="w-20 h-20 mb-3 text-brand-pink" />
              </div>
              <div>
                <h3 class="text-xl font-semibold">{{ service.name }}</h3>
              </div>
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// import iconHair from "/icons/svg/hair.svg";
// import iconMakeup from "/icons/svg/makeup.svg";
// import iconNails from "/icons/svg/nails.svg";
// import iconSkin from "/icons/svg/skin.svg";
// import iconBody from "/icons/svg/body.svg";
// import iconMassage from "/icons/svg/massage.svg";

const services = [
  {
    id: 1,
    name: "Стрижка & Укладка",
    description:
      "Улучшите свой внешний вид с помощью наших профессиональных услуг по стрижке & укладке волос.",
    icon: "bl:hair",
  },
  {
    id: 2,
    name: "Макияж",
    description:
      "Наши эксперты по макияжу помогут вам выглядеть лучше всего менее чем за 30 минут.",
    icon: "bl:makeup",
  },
  {
    id: 3,
    name: "Маникюр & Педикюр",
    description:
      "Побалуйте себя нашими услугами по маникюру & педикюру, которые принесут сенсационные результаты.",
    icon: "bl:nails",
  },
  {
    id: 4,
    name: "Уход за кожей",
    description:
      "Мы предлагаем полный спектр расслабляющих услуг по уходу за кожей, включая все виды ухода за лицом.",
    icon: "bl:skin",
  },
  {
    id: 5,
    name: "Уход за телом",
    description:
      "Омолодите свое тело с нашими бодрящими процедурами для тела для лучшего расслабления.",
    icon: "bl:body",
  },
  {
    id: 6,
    name: "Массаж",
    description:
      "Наши услуги массажа помогут вам избавиться от негативных эмоций после долгого напряженного дня.",
    icon: "bl:massage",
  },
];
</script>
