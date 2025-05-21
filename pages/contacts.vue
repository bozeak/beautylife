<script setup>
import ImageHeaderComponent from "~/components/Contacts/ImageHeaderComponent.vue";
import BreadCrumbsComponent from "~/components/Contacts/BreadCrumbsComponent.vue";
import { useHead } from "#imports";

const { t } = useI18n();

useHead({
  title: t("contacts"),
  meta: [
    {
      name: "description",
      content: t("contactsMetaDescription"),
    },
  ],
});
</script>

<template>
  <ImageHeaderComponent />
  <BreadCrumbsComponent />
  <ContactsMainComponent />
</template>
