<script setup lang="ts">
import { ref, onMounted } from 'vue'

const feedContainer = ref<HTMLElement | null>(null)
const fbSrc = ref('')

onMounted(() => {
  if (feedContainer.value) {
    const w = Math.min(feedContainer.value.clientWidth, 500)
    fbSrc.value = `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fstoevringesport&tabs=timeline&width=${w}&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`
  }
})
</script>

<template>
  <div ref="feedContainer" class="facebook-feed">
    <iframe
      v-if="fbSrc"
      :src="fbSrc"
      height="700"
      style="border: none; overflow: hidden"
      allowfullscreen
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    />
  </div>
</template>
