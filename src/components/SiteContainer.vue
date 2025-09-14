<script setup lang="ts">
defineProps({
  title: String,
  photo: String,
})
</script>

<template>
  <div class="uk-container uk-padding-remove">
    <img v-show="photo != null" class="uk-width-max-content uk-align-center uk-margin-small-bottom" :src="photo" alt="{{title}} banner">
    <h1 v-show="title != null" class="uk-margin-remove uk-padding-small">{{ title }}</h1>
    <div class="uk-padding-small"><slot/></div>
  </div>
</template>


