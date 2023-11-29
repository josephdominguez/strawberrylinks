<script setup lang="ts">
import CopyButton from '@/components/CopyButton.vue';
import { API_ENDPOINT } from '@/config';
const { shortenedLink } = defineProps(['shortenedLink']);
</script>

<template>
  <div class="link-container">
    <h3>Your shortened link:</h3>
    <div v-if="shortenedLink" class="shortened-link-container">
      <a :href="shortenedLink" target="_blank">{{ API_ENDPOINT }}/{{ shortenedLink }}</a>
      <CopyButton :shortenedLink="shortenedLink" />
    </div>
    <div v-else><br /></div>
  </div>
</template>

<style scoped>
.link-container {
  background-color: var(--off-white);
  width: 50%;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid var(--gray);
  border-radius: 10px;
  text-align: center;
}

.link-container h3 {
  margin-top: 0;
  margin-bottom: 5px;
}

.link-container a:hover {
  text-decoration: underline;
}

.shortened-link-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
</style>
