<script setup lang="ts">
defineProps({
  title: {type: String, default: null},
  photo: {type: String, default: null},
})
</script>

<template>
  <div>
    <section v-if="photo" class="page-hero">
      <img :src="photo" :alt="title" class="hero-bg">
      <div class="hero-overlay" />
      <div class="page-hero-content">
        <h1 v-if="title">{{ title }}</h1>
      </div>
    </section>
    <section v-else class="page-header">
      <div class="page-header-content">
        <h1 v-if="title">{{ title }}</h1>
      </div>
    </section>
    <div class="content-section">
      <slot/>
    </div>
  </div>
</template>
