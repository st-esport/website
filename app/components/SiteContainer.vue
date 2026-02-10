<script setup lang="ts">
defineProps({
  title: {type: String, default: null},
  photo: {type: String, default: null},
})
</script>

<template>
  <div class="uk-container uk-padding-remove">
    <img v-show="photo !== null" class="uk-width-max-content uk-align-center uk-margin-small-bottom" :src="photo" alt="{{title}} banner">
    <h1 v-show="title !== null" class="uk-margin-remove uk-padding-small uk-text-center uk-text-left@xl uk-text-left@l">{{ title }}</h1>
    <div class="uk-padding-small"><slot/></div>
  </div>
</template>


