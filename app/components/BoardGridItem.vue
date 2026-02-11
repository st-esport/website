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
  <div class="board-card">
    <img class="board-card-image" :src="photo" :alt="name">
    <div class="board-card-content">
      <div class="board-card-role">{{ title }}</div>
      <div class="board-card-name">{{ name }}</div>
      <div class="board-card-contact">
        <a v-if="email" :href="'mailto:' + email">✉️ {{ email }}</a>
        <a v-if="phone" :href="'tel:' + phone">📞 {{ phone }}</a>
      </div>
    </div>
  </div>
</template>
