<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: {type: Object as () => NuxtError, default: () => { return {statusCode: 0} }},
})
</script>

<template>
  <NuxtLayout>
    <SiteContainer>
      <h1>{{ error.statusCode }}</h1>
      <p v-show="error.statusCode === 404">Siden du besøgte findes ikke.</p>
      <NuxtLink to="/">Gå til forsiden</NuxtLink>
    </SiteContainer>
  </NuxtLayout>
</template>
