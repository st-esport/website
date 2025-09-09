<script setup lang="ts">
defineProps({
  label: String,
  photo: String,
})
</script>

<template>
  <img :src="photo" alt="home banner" class="uk-width-max-content uk-align-center uk-margin-remove">
  <p class="uk-margin-remove-top">{{ label }}</p>
</template>
