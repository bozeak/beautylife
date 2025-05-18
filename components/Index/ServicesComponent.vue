<template>
  <section class="w-full py-16">
    <div class="container mx-auto">
      <div class="flex flex-col items-center justify-center">
        <h2 class="text-3xl font-bold text-center">Наши Услуги</h2>
        <div class="bg-brand-pink w-[100px] h-0.5 m-auto my-6"></div>
        <p class="text-lg text-center mb-8 px-4 w-full md:w-2/4">
          Побалуйте себя одной из наших услуг. Наши любимые специалисты по красоте удивят
          ваши брови, придадут вам сияние и многое другое. Вы будете выглядеть и
          чувствовать себя лучше, чем когда-либо прежде.
        </p>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-4 lg:gap-6"
        >
          <div
            v-for="service in services"
            :key="service.id"
            class="bg-white p-12 min-h-[300px] transition-transform duration-900 ease-in-out hover:scale-110 hover:shadow-xl cursor-pointer"
          >
            <div class="flex flex-col items-center mb-4 justify-center text-center">
              <div class="w-24 h-22 mb-3 bg-gray-50 rounded-full">
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
