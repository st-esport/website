<script setup lang="ts">
defineProps({
  title: {type: String, required: true},
  name: {type: String, required: true},
  photo: {type: String, required: true},
  phone: {type: String, required: false, default: ''},
  email: {type: String, required: false, default: ''}
})
</script>

<template>
  <div>
    <img class="uk-border-rounded uk-width-medium" :src="photo" :alt="name"><br>
    <div class="uk-text-left">
      {{ title }}<br>
      <b>{{ name }}</b><br>
      <a :href="'mailto:' + email">{{ email }}</a><br>
      <a :href="'tel:' + phone">{{ phone }}</a><br>
    </div>
  </div>
</template>
