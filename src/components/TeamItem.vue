<script setup lang="ts">
defineProps({
  label: String,
  photo: String,
})
</script>

<template>
  <div class="uk-height-medium uk-flex uk-flex-center uk-flex-bottom uk-background-cover uk-light" :data-src="photo" uk-img>
    <p class="uk-badge">{{ label }}</p>
  </div>
</template>
