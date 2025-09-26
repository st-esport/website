<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError,
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
