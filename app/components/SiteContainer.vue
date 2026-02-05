<script setup lang="ts">
defineProps({
  title: {type: String, default: null},
  photo: {type: String, default: null},
})
</script>

<template>
  <div>
    <section class="page-hero" v-if="photo">
      <img :src="photo" :alt="title" class="hero-bg">
      <div class="hero-overlay"></div>
      <div class="page-hero-content">
        <h1 v-if="title">{{ title }}</h1>
      </div>
    </section>
    <section v-else class="page-hero" style="min-height: 200px; background: var(--bg-darker);">
      <div class="page-hero-content">
        <h1 v-if="title">{{ title }}</h1>
      </div>
    </section>
    <div class="content-section">
      <slot/>
    </div>
  </div>
</template>
