<script setup lang="ts">
defineProps({
  title: String,
  name: String,
  photo: String,
  phone: String,
  email: String
})
</script>

<template>
  <div>
    <img class="uk-border-rounded uk-width-medium" :src="photo" :alt="name"/><br>
    <div class="uk-text-left">
      {{ title }}<br>
      <b>{{ name }}</b><br>
      <a :href="'mailto:' + email">{{ email }}</a><br>
      <a :href="'tel:' + phone">{{ phone }}</a><br>
    </div>
  </div>
</template>
