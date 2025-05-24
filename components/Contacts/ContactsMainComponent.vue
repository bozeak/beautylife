<script setup lang="ts">
import ContactsAddressBlock from "../Utils/ContactsAddressBlock.vue";
</script>

<template>
  <section class="w-full">
    <div class="container mx-auto">
      <div class="my-20 mx-4 flex flex-col lg:flex-row gap-8">
        <div class="w-full lg:w-2/3">
          <h2 class="text-3xl font-bold">{{ $t("contactsPage.heading") }}</h2>
          <div class="w-[90px] h-[3px] bg-brand-pink my-6"></div>
          <div class="text-gray-400 mb-6">
            <p>{{ $t("contactsPage.p1") }}</p>
            <p>{{ $t("contactsPage.p2") }}</p>
          </div>
          <form action="#" class="mb-7">
            <div class="flex flex-col md:flex-row gap-x-3">
              <div class="w-full md:w-1/2 my-3">
                <input
                  type="text"
                  :placeholder="$t('contactsPage.form.firstname')"
                  class="border border-gray-300 rounded-full px-5 py-3 w-full text-sm"
                />
              </div>
              <div class="w-full md:w-1/2 my-3">
                <input
                  type="text"
                  :placeholder="$t('contactsPage.form.lastname')"
                  class="border border-gray-300 rounded-full px-5 py-3 w-full text-sm"
                />
              </div>
            </div>
            <div class="flex flex-col md:flex-row gap-x-3">
              <div class="w-full md:w-1/2 my-3">
                <input
                  type="phone"
                  :placeholder="$t('contactsPage.form.phone')"
                  class="border border-gray-300 rounded-full px-5 py-3 w-full text-sm"
                />
              </div>
              <div class="w-full md:w-1/2 my-3">
                <input
                  type="email"
                  :placeholder="$t('contactsPage.form.email')"
                  class="border border-gray-300 rounded-full px-5 py-3 w-full text-sm"
                />
              </div>
            </div>
            <div class="w-full my-3">
              <textarea
                :placeholder="$t('contactsPage.form.message')"
                rows="6"
                class="border border-gray-300 rounded-xl px-5 py-3 w-full text-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled
              class="bg-brand-pink text-white p-2 w-2/3 lg:w-1/3 rounded-full"
            >
              {{ $t("contactsPage.form.submit") }}
            </button>
          </form>
        </div>
        <div class="w-full lg:w-1/3">
          <div class="flex flex-col gap-8 divide-y-2 divide-gray-200">
            <ContactsAddressBlock
              :title="$t('contactsPage.sidebar.address')"
              icon="mdi:map-marker"
            >
              <NuxtLink
                class="text-gray-500 hover:text-brand-pink text-lg"
                href="https://goo.gl/maps/AshaqQmxUywBMRyNA"
                target="_blank"
                >{{ $t("contactsPage.sidebar.addressText") }}
              </NuxtLink>
            </ContactsAddressBlock>
            <ContactsAddressBlock
              :title="$t('contactsPage.sidebar.phone')"
              icon="mdi:phone"
            >
              <NuxtLink
                class="text-gray-500 hover:text-brand-pink text-lg"
                href="tel:+37322560506"
                >022 560 506 </NuxtLink
              ><span class="text-gray-500 text-lg pr-1">, </span>
              <NuxtLink
                class="text-gray-500 hover:text-brand-pink text-lg"
                href="tel:+37378560506"
                >+373 785 60 506
              </NuxtLink>
            </ContactsAddressBlock>
            <ContactsAddressBlock
              :title="$t('contactsPage.sidebar.email')"
              icon="mdi:email-outline"
            >
              <NuxtLink
                class="text-gray-500 hover:text-brand-pink text-lg"
                href="mailto:salon@beautylife.md"
                >salon@beautylife.md</NuxtLink
              >
            </ContactsAddressBlock>
            <ContactsAddressBlock
              :title="$t('contactsPage.sidebar.workingHours.heading')"
              icon="mdi:clock-time-four-outline"
            >
              <div class="text-gray-500 text-lg">
                <p>{{ $t("contactsPage.sidebar.workingHours.l1") }}</p>
                <p>{{ $t("contactsPage.sidebar.workingHours.l2") }}</p>
              </div>
            </ContactsAddressBlock>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
