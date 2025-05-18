<template>
  <section class="bg-gray-100 py-20">
    <div class="container flex flex-col md:flex-row gap-6 justify-center px-4 mx-auto">
      <div class="w-full md:w-1/2 md:max-w-[570px] mb-8 px-6">
        <h3 class="text-6xl font-bold mb-6">Наш салон</h3>
        <p class="my-8 text-gray-600 font-bold text-2xl">
          Мы предоставляем качественные парикмахерские услуги и не только, для всех
          желающих!
        </p>
        <p class="my-8 text-gray-500 text-xl">
          Мы верим что пожелания клиента стоят на первом месте. Вся наша команда готова
          исполнить любое пожелание. В следствие, большая часть наших клиентов -
          постоянны.
        </p>
        <NuxtImg src="/images/about-3.jpg" format="webp" width="570" height="712" />
        <div class="text-2xl md:text-3xl lg:text-4xl italic mt-8 text-black-500">
          Мы в ответе за качество предоставляемых вам услуг!
        </div>
      </div>
      <div class="w-full md:w-1/2 md:max-w-[570px] mb-8 px-6">
        <NuxtImg src="/images/about-1.jpg" format="webp" width="570" height="541" />

        <p class="my-8 text-gray-500 text-xl">
          Мы стараемся угодить каждому клиенту, чтобы он уходил от нас в приподнятом
          настроении и с желанием вернуться снова. Посетив однажды наш салон - Вам уже не
          захочется искать другой
        </p>

        <NuxtImg src="/images/about-2.jpg" format="webp" width="570" height="541" />
      </div>
    </div>
  </section>
</template>
