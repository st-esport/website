<script setup>
defineProps(['title', 'name', 'photo', 'phone', 'email'])
</script>

<template>
  <div class="uk-card uk-card-default uk-card-body">
    <img class="uk-border-rounded uk-width-medium" :src="photo" :alt="name"/><br>
    <div class="uk-text-left">
      {{ title }}<br>
      <b>{{ name }}</b><br>
      <a :href="'tel:' + phone">{{ phone }}</a><br>
      <a :href="'mailto:' + email">{{ email }}</a><br>
    </div>
  </div>
</template>