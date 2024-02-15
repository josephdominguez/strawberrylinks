<script setup lang="ts">
import CopyLinkButton from '@/components/link/CopyLinkButton.vue';

const { shortenedLink } = defineProps(['shortenedLink']);
</script>

<template>
  <h3>Your shortened link:</h3>
  <div v-if="shortenedLink" class="shortened-link-container">
    <a :href="shortenedLink" target="_blank">{{ shortenedLink }}</a>
    <CopyLinkButton :link="shortenedLink" />
  </div>
  <div v-else><br /></div>
</template>

<style scoped>
h3 {
  margin-top: 0;
  margin-bottom: 5px;
}

a:hover {
  text-decoration: underline;
}

.shortened-link-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
</style>
