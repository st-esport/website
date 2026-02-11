<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const feedContainer = ref<HTMLElement | null>(null)
const containerWidth = ref(500)

const fbSrc = computed(() => {
  const w = Math.min(containerWidth.value, 500)
  return `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fstoevringesport&tabs=timeline&width=${w}&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`
})

let resizeObserver: ResizeObserver | undefined

onMounted(() => {
  if (feedContainer.value) {
    containerWidth.value = feedContainer.value.clientWidth
    resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        containerWidth.value = entry.contentRect.width
      }
    })
    resizeObserver.observe(feedContainer.value)
  }
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
})
</script>

<template>
  <div ref="feedContainer" class="facebook-feed">
    <iframe
      :src="fbSrc"
      height="700"
      style="border: none; overflow: hidden"
      allowfullscreen
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    />
  </div>
</template>
